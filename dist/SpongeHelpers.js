!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e),window.$=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("function"==typeof t[0]){var o=t[0];console.log("Document loaded"),document.addEventListener("DOMContentLoaded",o)}else{if("string"==typeof t[0]){var r=t[0];return n.apply(document.querySelectorAll(r))}if(t[0]instanceof HTMLElement)return n.apply([t[0]])}};var n=function(){return n.prototype.queue=[],n.prototype.delayed=!1,n.prototype.this=this,n.prototype};n.prototype.hide=function(){n.prototype.this.forEach((function(t){t.style.display="none"}))},n.prototype.show=function(){n.prototype.this.forEach((function(t){t.style.display=" "}))},n.prototype.on=function(t,e){n.prototype.this.forEach((function(o){o.addEventListener(t,e)}))},n.prototype.submit=function(t){n.prototype.this.forEach((function(e){e.addEventListener("submit",t)}))},n.prototype.click=function(t){n.prototype.this.forEach((function(e){e.addEventListener("click",t)}))},n.prototype.val=function(t){var e=n.prototype.this[0];if("string"!=typeof t)return e.value;e.value=t}}]);