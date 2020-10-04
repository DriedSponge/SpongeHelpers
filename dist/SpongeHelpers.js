/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/main/main.ts
var SpongeHelpers = /** @class */ (function () {
    function SpongeHelpers(sel) {
        if (!sel)
            return;
        if (typeof sel === 'function') {
            document.addEventListener('DOMContentLoaded', sel);
        }
        else if (typeof sel === 'string') {
            this.selected = document.querySelectorAll(sel);
        }
        else if (sel instanceof HTMLElement) {
            this.selected = [sel];
        }
    }
    SpongeHelpers.prototype.test = function (arg) {
        console.log(arg);
    };
    SpongeHelpers.prototype.init = function (sel) {
        return new SpongeHelpers(sel);
    };
    return SpongeHelpers;
}());

var sh;
window['$'] = sh = SpongeHelpers.prototype.init;

// CONCATENATED MODULE: ./src/html/html.ts

var html = function (html) {
    this.selected.forEach(function (element) {
        element.innerHTML = html;
    });
    return this;
};
SpongeHelpers.prototype.html = html;

// CONCATENATED MODULE: ./src/html/index.ts


// CONCATENATED MODULE: ./src/main/index.ts


// CONCATENATED MODULE: ./src/css/hide.ts

var hide = function () {
    this.selected.forEach(function (element) {
        element.style.display = 'none';
    });
    return this;
};
SpongeHelpers.prototype.hide = hide;

// CONCATENATED MODULE: ./src/css/show.ts

var show = function () {
    this.selected.forEach(function (element) {
        element.style.display = ' ';
    });
    return this;
};
SpongeHelpers.prototype.show = show;

// CONCATENATED MODULE: ./src/css/css.ts

var css = function (css) {
    if (typeof css === 'object') {
        // @ts-ignore
        var cssProps_1 = Object.entries(css);
        this.selected.forEach(function (element) {
            cssProps_1.forEach(function (_a) {
                var property = _a[0], value = _a[1];
                // @ts-ignore
                element.style[property] = value;
            });
        });
    }
    return this;
};
SpongeHelpers.prototype.css = css;

// CONCATENATED MODULE: ./src/css/addClass.ts

var addClass = function addClass(classes) {
    var _this = this;
    if (typeof classes === 'string') {
        this.selected.forEach(function (element) {
            element.classList.add(classes);
        });
    }
    else if (classes instanceof Array) {
        classes.forEach(function (cls) {
            _this.selected.forEach(function (element) {
                element.classList.add(cls);
            });
        });
    }
    return this;
};
SpongeHelpers.prototype.addClass = addClass;

// CONCATENATED MODULE: ./src/css/removeClass.ts

var removeClass = function removeClass(classes) {
    var _this = this;
    if (typeof classes === 'string') {
        this.selected.forEach(function (element) {
            element.classList.remove(classes);
        });
    }
    else if (classes instanceof Array) {
        classes.forEach(function (cls) {
            _this.selected.forEach(function (element) {
                element.classList.remove(cls);
            });
        });
    }
    return this;
};
SpongeHelpers.prototype.removeClass = removeClass;

// CONCATENATED MODULE: ./src/css/index.ts






// CONCATENATED MODULE: ./src/events/on.ts

var on = function (eventName, handler) {
    this.selected.forEach(function (element) {
        element.addEventListener(eventName, handler);
    });
};
SpongeHelpers.prototype.on = on;

// CONCATENATED MODULE: ./src/events/submit.ts

var submit_submit = function (submitFn) {
    this.selected.forEach(function (element) {
        element.addEventListener("submit", submitFn);
    });
};
SpongeHelpers.prototype.submit = submit_submit;

// CONCATENATED MODULE: ./src/events/click.ts

var click = function (clickFn) {
    this.selected.forEach(function (element) {
        element.addEventListener('click', clickFn);
    });
};
SpongeHelpers.prototype.click = click;

// CONCATENATED MODULE: ./src/events/keydown.ts

var keyDown = function (downFunc) {
    this.selected.forEach(function (element) {
        element.addEventListener('keydown', downFunc);
    });
};
SpongeHelpers.prototype.keyDown = keyDown;

// CONCATENATED MODULE: ./src/events/index.ts





// CONCATENATED MODULE: ./src/data/val.ts

var val = function (value) {
    var element = this.selected[0];
    if (typeof value === 'string') {
        element.value = value;
        return this;
    }
    else {
        return element.value;
    }
};
SpongeHelpers.prototype.val = val;

// CONCATENATED MODULE: ./src/data/attr.ts

var attr = function (attr, value) {
    var _this = this;
    if (attr instanceof Array) { //if the attribut is a array
        var values_1 = {};
        attr.forEach(function (atr) {
            values_1[atr] = _this.selected[0].getAttribute(atr);
        });
        return values_1;
    }
    else if (typeof attr === 'object') { //if the attrivute type is an object
        // @ts-ignore
        var atr_1 = Object.entries(attr);
        this.selected.forEach(function (element) {
            atr_1.forEach(function (_a) {
                var property = _a[0], value = _a[1];
                element.setAttribute(property, value);
            });
        });
        return this;
    }
    else if (typeof value === "string" && typeof attr === "string") {
        this.selected.forEach(function (element) {
            element.setAttribute(attr, value);
        });
        return this;
    }
    else {
        return this.selected[0].getAttribute(attr);
    }
};
SpongeHelpers.prototype.attr = attr;

// CONCATENATED MODULE: ./src/data/data.ts

var data = function (attr, value) {
    var _this = this;
    if (attr instanceof Array) { //if the attribut is a array
        var values_1 = {};
        attr.forEach(function (atr) {
            values_1[atr] = _this.selected[0].getAttribute("data-" + atr);
        });
        return values_1;
    }
    else if (typeof attr === 'object') { //if the attrivute type is an object
        // @ts-ignore
        var atr_1 = Object.entries(attr);
        this.selected.forEach(function (element) {
            atr_1.forEach(function (_a) {
                var property = _a[0], value = _a[1];
                element.setAttribute("data-" + property, value);
            });
        });
        return this;
    }
    else if (typeof value === "string" && typeof attr === "string") {
        this.selected.forEach(function (element) {
            element.setAttribute("data-" + attr, value);
        });
        return this;
    }
    else {
        return this.selected[0].getAttribute("data-" + attr);
    }
};
SpongeHelpers.prototype.data = data;

// CONCATENATED MODULE: ./src/data/index.ts




// CONCATENATED MODULE: ./src/index.ts







/***/ })
/******/ ]);