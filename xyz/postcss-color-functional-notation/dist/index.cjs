"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=e(require("postcss-value-parser"));function n(e){const n=e.value,o=e.nodes.slice().filter((e=>"comment"!==e.type&&"space"!==e.type));let i=null;if("hsl"===n||"hsla"===n?i=function(e){if(!function(e){if(!e||"word"!==e.type)return!1;if(!l(e))return!1;const n=r.default.unit(e.value);if(!n)return!1;return!!n.number&&("deg"===n.unit||"grad"===n.unit||"rad"===n.unit||"turn"===n.unit||""===n.unit)}(e[0]))return null;if(!t(e[1]))return null;if(!t(e[2]))return null;const n={h:r.default.unit(e[0].value),hNode:e[0],s:r.default.unit(e[1].value),sNode:e[1],l:r.default.unit(e[2].value),lNode:e[2]};if(function(e){switch(e.unit){case"deg":return void(e.unit="");case"rad":return e.unit="",void(e.number=Math.round(180*parseFloat(e.number)/Math.PI).toString());case"grad":return e.unit="",void(e.number=Math.round(.9*parseFloat(e.number)).toString());case"turn":e.unit="",e.number=Math.round(360*parseFloat(e.number)).toString()}}(n.h),""!==n.h.unit)return null;n.hNode.value=n.h.number,a(e[3])&&(n.slash=e[3]);(t(e[4])||u(e[4])||function(e){return e&&"function"===e.type&&"var"===e.value}(e[4]))&&(n.alpha=e[4]);return n}(o):"rgb"!==n&&"rgba"!==n||(i=function(e){if(!t(e[0]))return null;if(!t(e[1]))return null;if(!t(e[2]))return null;const n={r:r.default.unit(e[0].value),rNode:e[0],g:r.default.unit(e[1].value),gNode:e[1],b:r.default.unit(e[2].value),bNode:e[2]};"%"===n.r.unit&&(n.r.number=String(Math.floor(Number(n.r.number)/100*255)),n.rNode.value=n.r.number);"%"===n.g.unit&&(n.g.number=String(Math.floor(Number(n.g.number)/100*255)),n.gNode.value=n.g.number);"%"===n.b.unit&&(n.b.number=String(Math.floor(Number(n.b.number)/100*255)),n.bNode.value=n.b.number);a(e[3])&&(n.slash=e[3]);(t(e[4])||u(e[4]))&&(n.alpha=e[4]);return n}(o)),!i)return;if(o.length>3&&(!i.slash||!i.alpha))return;!function(e,n,t){"hsl"===e.value||"hsla"===e.value?e.value="hsl":"rgb"!==e.value&&"rgba"!==e.value||(e.value="rgb");if(!n||!t)return;"hsl"===e.value?e.value="hsla":e.value="rgba";if(n.value=",",n.before="",!function(e){if(!e||"word"!==e.type)return!1;if(!l(e))return!1;const n=r.default.unit(e.value);if(!n)return!1;return!!n.number}(t))return;const u=r.default.unit(t.value);if(!u)return;"%"===u.unit&&(u.number=String(parseFloat(u.number)/100),t.value=String(u.number))}(e,i.slash,i.alpha);const[s,f]=function(e){if(function(e){if(void 0!==e.r)return!0;return!1}(e))return[e.rNode,e.gNode,e.bNode];return[e.hNode,e.sNode,e.lNode]}(i);e.nodes.splice(e.nodes.indexOf(s)+1,0,{sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""}),e.nodes.splice(e.nodes.indexOf(f)+1,0,{sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""})}function t(e){if(!e||"word"!==e.type)return!1;if(!l(e))return!1;const n=r.default.unit(e.value);return!!n&&("%"===n.unit||""===n.unit)}function u(e){return e&&"function"===e.type&&"calc"===e.value}function a(e){return e&&"div"===e.type&&"/"===e.value}function l(e){if(!e||!e.value)return!1;try{return!1!==r.default.unit(e.value)}catch(e){return!1}}const o=e=>{const t="preserve"in Object(e)&&Boolean(e.preserve);return{postcssPlugin:"postcss-color-functional-notation",Declaration:(e,{result:u,postcss:a})=>{if(t&&function(e){let r=e.parent;for(;r;)if("atrule"===r.type){if("supports"===r.name&&-1!==r.params.indexOf("(color: rgb(0 0 0 / 0.5)) and (color: hsl(0 0% 0% / 0.5))"))return!0;r=r.parent}else r=r.parent;return!1}(e))return;const l=e.value;if(!/(^|[^\w-])(hsla?|rgba?)\(/i.test(l))return;let o;try{o=r.default(l)}catch(r){e.warn(u,`Failed to parse value '${l}' as a hsl or rgb function. Leaving the original value intact.`)}if(void 0===o)return;o.walk((e=>{e.type&&"function"===e.type&&("hsl"!==e.value&&"hsla"!==e.value&&"rgb"!==e.value&&"rgba"!==e.value||n(e))}));const i=String(o);if(i!==l)if(t&&e.variable){const r=e.parent,n="(color: rgb(0 0 0 / 0.5)) and (color: hsl(0 0% 0% / 0.5))",t=a.atRule({name:"supports",params:n,source:e.source}),u=r.clone();u.removeAll(),u.append(e.clone()),t.append(u);let l=r,o=r.next();for(;l&&o&&"atrule"===o.type&&"supports"===o.name&&o.params===n;)l=o,o=o.next();l.after(t),e.value=i}else t?e.cloneBefore({value:i}):e.value=i}}};o.postcss=!0,module.exports=o;
//# sourceMappingURL=index.cjs.map