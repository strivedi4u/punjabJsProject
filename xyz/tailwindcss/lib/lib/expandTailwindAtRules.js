"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = expandTailwindAtRules;
var _quickLru = _interopRequireDefault(require("quick-lru"));
var sharedState = _interopRequireWildcard(require("./sharedState"));
var _generateRules = require("./generateRules");
var _bigSign = _interopRequireDefault(require("../util/bigSign"));
var _cloneNodes = _interopRequireDefault(require("../util/cloneNodes"));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {
        };
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {
                    };
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
let env = sharedState.env;
const PATTERNS = [
    /([^<>"'`\s]*\[\w*'[^"`\s]*'?\])/.source,
    /([^<>"'`\s]*\[\w*"[^"`\s]*"?\])/.source,
    /([^<>"'`\s]*\[\w*\('[^"'`\s]*'\)\])/.source,
    /([^<>"'`\s]*\[\w*\("[^"'`\s]*"\)\])/.source,
    /([^<>"'`\s]*\[\w*\('[^"`\s]*'\)\])/.source,
    /([^<>"'`\s]*\[\w*\("[^'`\s]*"\)\])/.source,
    /([^<>"'`\s]*\['[^"'`\s]*'\])/.source,
    /([^<>"'`\s]*\["[^"'`\s]*"\])/.source,
    /([^<>"'`\s]*\[[^<>"'`\s]*:'[^"'`\s]*'\])/.source,
    /([^<>"'`\s]*\[[^<>"'`\s]*:"[^"'`\s]*"\])/.source,
    /([^<>"'`\s]*\[[^"'`\s]+\][^<>"'`\s]*)/.source,
    /([^<>"'`\s]*[^"'`\s:])/.source
].join('|');
const BROAD_MATCH_GLOBAL_REGEXP = new RegExp(PATTERNS, 'g');
const INNER_MATCH_GLOBAL_REGEXP = /[^<>"'`\s.(){}[\]#=%]*[^<>"'`\s.(){}[\]#=%:]/g;
const builtInExtractors = {
    DEFAULT: (content)=>{
        let broadMatches = content.match(BROAD_MATCH_GLOBAL_REGEXP) || [];
        let innerMatches = content.match(INNER_MATCH_GLOBAL_REGEXP) || [];
        return [
            ...broadMatches,
            ...innerMatches
        ];
    }
};
const builtInTransformers = {
    DEFAULT: (content)=>content
    ,
    svelte: (content)=>content.replace(/(?:^|\s)class:/g, ' ')
};
function getExtractor(tailwindConfig, fileExtension) {
    let extractors = tailwindConfig.content.extract;
    return extractors[fileExtension] || extractors.DEFAULT || builtInExtractors[fileExtension] || builtInExtractors.DEFAULT;
}
function getTransformer(tailwindConfig, fileExtension) {
    let transformers = tailwindConfig.content.transform;
    return transformers[fileExtension] || transformers.DEFAULT || builtInTransformers[fileExtension] || builtInTransformers.DEFAULT;
}
let extractorCache = new WeakMap();
// Scans template contents for possible classes. This is a hot path on initial build but
// not too important for subsequent builds. The faster the better though — if we can speed
// up these regexes by 50% that could cut initial build time by like 20%.
function getClassCandidates(content, extractor, candidates, seen) {
    if (!extractorCache.has(extractor)) {
        extractorCache.set(extractor, new _quickLru.default({
            maxSize: 25000
        }));
    }
    for (let line of content.split('\n')){
        line = line.trim();
        if (seen.has(line)) {
            continue;
        }
        seen.add(line);
        if (extractorCache.get(extractor).has(line)) {
            for (let match of extractorCache.get(extractor).get(line)){
                candidates.add(match);
            }
        } else {
            let extractorMatches = extractor(line).filter((s)=>s !== '!*'
            );
            let lineMatchesSet = new Set(extractorMatches);
            for (let match of lineMatchesSet){
                candidates.add(match);
            }
            extractorCache.get(extractor).set(line, lineMatchesSet);
        }
    }
}
function buildStylesheet(rules, context) {
    let sortedRules = rules.sort(([a], [z])=>(0, _bigSign).default(a - z)
    );
    let returnValue = {
        base: new Set(),
        components: new Set(),
        utilities: new Set(),
        variants: new Set(),
        // All the CSS that is not Tailwind related can be put in this bucket. This
        // will make it easier to later use this information when we want to
        // `@apply` for example. The main reason we do this here is because we
        // still need to make sure the order is correct. Last but not least, we
        // will make sure to always re-inject this section into the css, even if
        // certain rules were not used. This means that it will look like a no-op
        // from the user's perspective, but we gathered all the useful information
        // we need.
        user: new Set()
    };
    for (let [sort, rule] of sortedRules){
        if (sort >= context.minimumScreen) {
            returnValue.variants.add(rule);
            continue;
        }
        if (sort & context.layerOrder.base) {
            returnValue.base.add(rule);
            continue;
        }
        if (sort & context.layerOrder.components) {
            returnValue.components.add(rule);
            continue;
        }
        if (sort & context.layerOrder.utilities) {
            returnValue.utilities.add(rule);
            continue;
        }
        if (sort & context.layerOrder.user) {
            returnValue.user.add(rule);
            continue;
        }
    }
    return returnValue;
}
function expandTailwindAtRules(context) {
    return (root)=>{
        let layerNodes = {
            base: null,
            components: null,
            utilities: null,
            variants: null
        };
        // Make sure this file contains Tailwind directives. If not, we can save
        // a lot of work and bail early. Also we don't have to register our touch
        // file as a dependency since the output of this CSS does not depend on
        // the source of any templates. Think Vue <style> blocks for example.
        root.walkAtRules('tailwind', (rule)=>{
            if (Object.keys(layerNodes).includes(rule.params)) {
                layerNodes[rule.params] = rule;
            }
        });
        if (Object.values(layerNodes).every((n)=>n === null
        )) {
            return root;
        }
        // ---
        // Find potential rules in changed files
        let candidates = new Set([
            '*'
        ]);
        let seen = new Set();
        env.DEBUG && console.time('Reading changed files');
        for (let { content , extension  } of context.changedContent){
            let transformer = getTransformer(context.tailwindConfig, extension);
            let extractor = getExtractor(context.tailwindConfig, extension);
            getClassCandidates(transformer(content), extractor, candidates, seen);
        }
        // ---
        // Generate the actual CSS
        let classCacheCount = context.classCache.size;
        env.DEBUG && console.time('Generate rules');
        let rules = (0, _generateRules).generateRules(candidates, context);
        env.DEBUG && console.timeEnd('Generate rules');
        // We only ever add to the classCache, so if it didn't grow, there is nothing new.
        env.DEBUG && console.time('Build stylesheet');
        if (context.stylesheetCache === null || context.classCache.size !== classCacheCount) {
            for (let rule of rules){
                context.ruleCache.add(rule);
            }
            context.stylesheetCache = buildStylesheet([
                ...context.ruleCache
            ], context);
        }
        env.DEBUG && console.timeEnd('Build stylesheet');
        let { base: baseNodes , components: componentNodes , utilities: utilityNodes , variants: screenNodes ,  } = context.stylesheetCache;
        // ---
        // Replace any Tailwind directives with generated CSS
        if (layerNodes.base) {
            layerNodes.base.before((0, _cloneNodes).default([
                ...baseNodes
            ], layerNodes.base.source));
            layerNodes.base.remove();
        }
        if (layerNodes.components) {
            layerNodes.components.before((0, _cloneNodes).default([
                ...componentNodes
            ], layerNodes.components.source));
            layerNodes.components.remove();
        }
        if (layerNodes.utilities) {
            layerNodes.utilities.before((0, _cloneNodes).default([
                ...utilityNodes
            ], layerNodes.utilities.source));
            layerNodes.utilities.remove();
        }
        if (layerNodes.variants) {
            layerNodes.variants.before((0, _cloneNodes).default([
                ...screenNodes
            ], layerNodes.variants.source));
            layerNodes.variants.remove();
        } else {
            root.append((0, _cloneNodes).default([
                ...screenNodes
            ], root.source));
        }
        // ---
        if (env.DEBUG) {
            console.log('Potential classes: ', candidates.size);
            console.log('Active contexts: ', sharedState.contextSourcesMap.size);
        }
        // Clear the cache for the changed files
        context.changedContent = [];
        // Cleanup any leftover @layer atrules
        root.walkAtRules('layer', (rule)=>{
            if (Object.keys(layerNodes).includes(rule.params)) {
                rule.remove();
            }
        });
    };
}