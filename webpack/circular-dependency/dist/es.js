/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./es/a.js":
/*!*****************!*\
  !*** ./es/a.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "letA": () => (/* binding */ letA),
/* harmony export */   "varA": () => (/* binding */ varA),
/* harmony export */   "foo": () => (/* binding */ foo),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./b.js */ "./es/b.js");
console.log('a starting');
let letA = { done: false };
var varA = { done: false };
let defaultA = { done: false }

;
function foo() {
  console.log('a.foo called');
}
(0,_b_js__WEBPACK_IMPORTED_MODULE_0__.bar)();
console.log('in a, b.varB.done = %s', _b_js__WEBPACK_IMPORTED_MODULE_0__.varB.done);
console.log('in a, b.letB.done = %s', _b_js__WEBPACK_IMPORTED_MODULE_0__.letB.done);
console.log('in a, defaultB.done = %s', _b_js__WEBPACK_IMPORTED_MODULE_0__.default.done);
letA.done = true;
varA.done = true;
console.log('a done');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultA);


/***/ }),

/***/ "./es/b.js":
/*!*****************!*\
  !*** ./es/b.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "letB": () => (/* binding */ letB),
/* harmony export */   "varB": () => (/* binding */ varB),
/* harmony export */   "bar": () => (/* binding */ bar),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ "./es/a.js");
console.log('b starting');
let letB = { done: false };
let varB = { done: false };
let defaultB = { done: false };



function bar() {
  console.log('b.bar called');
}

(0,_a_js__WEBPACK_IMPORTED_MODULE_0__.foo)();
console.log('in a, a.varA.done = %s', _a_js__WEBPACK_IMPORTED_MODULE_0__.varA.done);
console.log('in a, a.letA.done = %s', _a_js__WEBPACK_IMPORTED_MODULE_0__.letA.done);
console.log('in a, defaultA.done = %s', _a_js__WEBPACK_IMPORTED_MODULE_0__.default.done);

letB.done = true;
varB.done = true;
console.log('b done');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultB);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./es/index.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a.js */ "./es/a.js");
/* harmony import */ var _b_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./b.js */ "./es/b.js");
console.log('main starting');


console.log('in main, a = %s, b = %s', _a_js__WEBPACK_IMPORTED_MODULE_0__, _b_js__WEBPACK_IMPORTED_MODULE_1__);
})();

/******/ })()
;