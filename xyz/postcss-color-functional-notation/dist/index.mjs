import e from"postcss-value-parser";function r(r){const l=r.value,o=r.nodes.slice().filter((e=>"comment"!==e.type&&"space"!==e.type));let i=null;if("hsl"===l||"hsla"===l?i=function(r){if(!function(r){if(!r||"word"!==r.type)return!1;if(!a(r))return!1;const n=e.unit(r.value);if(!n)return!1;return!!n.number&&("deg"===n.unit||"grad"===n.unit||"rad"===n.unit||"turn"===n.unit||""===n.unit)}(r[0]))return null;if(!n(r[1]))return null;if(!n(r[2]))return null;const l={h:e.unit(r[0].value),hNode:r[0],s:e.unit(r[1].value),sNode:r[1],l:e.unit(r[2].value),lNode:r[2]};if(function(e){switch(e.unit){case"deg":return void(e.unit="");case"rad":return e.unit="",void(e.number=Math.round(180*parseFloat(e.number)/Math.PI).toString());case"grad":return e.unit="",void(e.number=Math.round(.9*parseFloat(e.number)).toString());case"turn":e.unit="",e.number=Math.round(360*parseFloat(e.number)).toString()}}(l.h),""!==l.h.unit)return null;l.hNode.value=l.h.number,u(r[3])&&(l.slash=r[3]);(n(r[4])||t(r[4])||function(e){return e&&"function"===e.type&&"var"===e.value}(r[4]))&&(l.alpha=r[4]);return l}(o):"rgb"!==l&&"rgba"!==l||(i=function(r){if(!n(r[0]))return null;if(!n(r[1]))return null;if(!n(r[2]))return null;const a={r:e.unit(r[0].value),rNode:r[0],g:e.unit(r[1].value),gNode:r[1],b:e.unit(r[2].value),bNode:r[2]};"%"===a.r.unit&&(a.r.number=String(Math.floor(Number(a.r.number)/100*255)),a.rNode.value=a.r.number);"%"===a.g.unit&&(a.g.number=String(Math.floor(Number(a.g.number)/100*255)),a.gNode.value=a.g.number);"%"===a.b.unit&&(a.b.number=String(Math.floor(Number(a.b.number)/100*255)),a.bNode.value=a.b.number);u(r[3])&&(a.slash=r[3]);(n(r[4])||t(r[4]))&&(a.alpha=r[4]);return a}(o)),!i)return;if(o.length>3&&(!i.slash||!i.alpha))return;!function(r,n,t){"hsl"===r.value||"hsla"===r.value?r.value="hsl":"rgb"!==r.value&&"rgba"!==r.value||(r.value="rgb");if(!n||!t)return;"hsl"===r.value?r.value="hsla":r.value="rgba";if(n.value=",",n.before="",!function(r){if(!r||"word"!==r.type)return!1;if(!a(r))return!1;const n=e.unit(r.value);if(!n)return!1;return!!n.number}(t))return;const u=e.unit(t.value);if(!u)return;"%"===u.unit&&(u.number=String(parseFloat(u.number)/100),t.value=String(u.number))}(r,i.slash,i.alpha);const[s,c]=function(e){if(function(e){if(void 0!==e.r)return!0;return!1}(e))return[e.rNode,e.gNode,e.bNode];return[e.hNode,e.sNode,e.lNode]}(i);r.nodes.splice(r.nodes.indexOf(s)+1,0,{sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""}),r.nodes.splice(r.nodes.indexOf(c)+1,0,{sourceIndex:0,sourceEndIndex:1,value:",",type:"div",before:"",after:""})}function n(r){if(!r||"word"!==r.type)return!1;if(!a(r))return!1;const n=e.unit(r.value);return!!n&&("%"===n.unit||""===n.unit)}function t(e){return e&&"function"===e.type&&"calc"===e.value}function u(e){return e&&"div"===e.type&&"/"===e.value}function a(r){if(!r||!r.value)return!1;try{return!1!==e.unit(r.value)}catch(e){return!1}}const l=n=>{const t="preserve"in Object(n)&&Boolean(n.preserve);return{postcssPlugin:"postcss-color-functional-notation",Declaration:(n,{result:u,postcss:a})=>{if(t&&function(e){let r=e.parent;for(;r;)if("atrule"===r.type){if("supports"===r.name&&-1!==r.params.indexOf("(color: rgb(0 0 0 / 0.5)) and (color: hsl(0 0% 0% / 0.5))"))return!0;r=r.parent}else r=r.parent;return!1}(n))return;const l=n.value;if(!/(^|[^\w-])(hsla?|rgba?)\(/i.test(l))return;let o;try{o=e(l)}catch(e){n.warn(u,`Failed to parse value '${l}' as a hsl or rgb function. Leaving the original value intact.`)}if(void 0===o)return;o.walk((e=>{e.type&&"function"===e.type&&("hsl"!==e.value&&"hsla"!==e.value&&"rgb"!==e.value&&"rgba"!==e.value||r(e))}));const i=String(o);if(i!==l)if(t&&n.variable){const e=n.parent,r="(color: rgb(0 0 0 / 0.5)) and (color: hsl(0 0% 0% / 0.5))",t=a.atRule({name:"supports",params:r,source:n.source}),u=e.clone();u.removeAll(),u.append(n.clone()),t.append(u);let l=e,o=e.next();for(;l&&o&&"atrule"===o.type&&"supports"===o.name&&o.params===r;)l=o,o=o.next();l.after(t),n.value=i}else t?n.cloneBefore({value:i}):n.value=i}}};l.postcss=!0;export{l as default};
//# sourceMappingURL=index.mjs.map