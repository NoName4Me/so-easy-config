/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./commonjs/a.js":
/*!***********************!*\
  !*** ./commonjs/a.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

console.log('a starting');
const flag = { done: false };
exports.aa = flag;
const b = __webpack_require__(/*! ./b.js */ "./commonjs/b.js");
console.log('in a, b.bb.done = %s', b.bb.done);
flag.done = true;
console.log('a done');


/***/ }),

/***/ "./commonjs/b.js":
/*!***********************!*\
  !*** ./commonjs/b.js ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

console.log('b starting');
const flag = { done: false };
exports.bb = flag;
const a = __webpack_require__(/*! ./a.js */ "./commonjs/a.js");
console.log('in b, a.aa.done = %s', a.aa.done);
flag.done = true;
console.log('b done');


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./commonjs/index.js ***!
  \***************************/
console.log('main starting');
const a = __webpack_require__(/*! ./a.js */ "./commonjs/a.js");
const b = __webpack_require__(/*! ./b.js */ "./commonjs/b.js");
console.log('in main, a.aa.done = %s, b.bb.done = %s', a.aa.done, b.bb.done);
})();

/******/ })()
;