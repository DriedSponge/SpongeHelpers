!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o=function(){function t(t){t&&("function"==typeof t?document.addEventListener("DOMContentLoaded",t):"string"==typeof t?this.selected=document.querySelectorAll(t):t instanceof HTMLElement&&(this.selected=[t]))}return t.prototype.test=function(t){console.log(t)},t.prototype.init=function(e){return new t(e)},t}();window.$=o.prototype.init;o.prototype.html=function(t){return this.selected.forEach((function(e){e.innerHTML=t})),this};o.prototype.formReset=function(){return this.selected.forEach((function(t){"FORM"===t.tagName&&t.reset()})),this};o.prototype.remove=function(){this.selected.forEach((function(t){t.remove()}))};o.prototype.text=function(t){return this.selected.forEach((function(e){e.textContent=t})),this};o.prototype.hide=function(){return this.selected.forEach((function(t){t.style.display="none"})),this};o.prototype.show=function(){return this.selected.forEach((function(t){t.style.display=""})),this};o.prototype.css=function(t){if("object"==typeof t){var e=Object.entries(t);this.selected.forEach((function(t){e.forEach((function(e){var n=e[0],o=e[1];t.style[n]=o}))}))}return this};o.prototype.addClass=function(t){var e=this;return"string"==typeof t?this.selected.forEach((function(e){e.classList.add(t)})):t instanceof Array&&t.forEach((function(t){e.selected.forEach((function(e){e.classList.add(t)}))})),this};o.prototype.removeClass=function(t){var e=this;return"string"==typeof t?this.selected.forEach((function(e){e.classList.remove(t)})):t instanceof Array&&t.forEach((function(t){e.selected.forEach((function(e){e.classList.remove(t)}))})),this};o.prototype.on=function(t,e){this.selected.forEach((function(n){n.addEventListener(t,e)}))};o.prototype.submit=function(t){this.selected.forEach((function(e){e.addEventListener("submit",t)}))};o.prototype.click=function(t){this.selected.forEach((function(e){e.addEventListener("click",t)}))};o.prototype.keyDown=function(t){this.selected.forEach((function(e){e.addEventListener("keydown",t)}))};o.prototype.val=function(t){var e=this.selected[0];return"string"==typeof t?(e.value=t,this):e.value};o.prototype.attr=function(t,e){var n=this;if(t instanceof Array){var o={};return t.forEach((function(t){o[t]=n.selected[0].getAttribute(t)})),o}if("object"==typeof t){var r=Object.entries(t);return this.selected.forEach((function(t){r.forEach((function(e){var n=e[0],o=e[1];t.setAttribute(n,o)}))})),this}return"string"==typeof e&&"string"==typeof t?(this.selected.forEach((function(n){n.setAttribute(t,e)})),this):this.selected[0].getAttribute(t)};o.prototype.data=function(t,e){var n=this;if(t instanceof Array){var o={};return t.forEach((function(t){o[t]=n.selected[0].getAttribute("data-"+t)})),o}if("object"==typeof t){var r=Object.entries(t);return this.selected.forEach((function(t){r.forEach((function(e){var n=e[0],o=e[1];t.setAttribute("data-"+n,o)}))})),this}return"string"==typeof e&&"string"==typeof t?(this.selected.forEach((function(n){n.setAttribute("data-"+t,e)})),this):this.selected[0].getAttribute("data-"+t)}}]);