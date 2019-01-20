(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Truchet.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Target.js":
/*!***********************!*\
  !*** ./src/Target.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Target; });\nclass Target {\n    \n    constructor(element, width, height, callback) {\n        this.element = element;\n        this.tiles = [];\n        this.pool = {};\n        this.width = width; // Tile width\n        this.height = height; // Tile height\n        this.callback = callback;\n    }\n\n    registerTile(id, render) {\n        this.pool[id] = render;\n    }\n\n    deregisterTile(id) {\n        delete this.pool[id];\n    }\n\n    getTile(row, col) {\n        const props = this.callback(col * this.width, row * this.height);\n        return this.pool[props.id](props);\n    }\n\n    drawTile(row, col) {\n        const tile = this.getTile(row, col);\n        this.tiles[row][col] = tile;\n        this.element.appendChild(this.tiles[row][col]);\n    }\n\n    eraseTile(row, col) {\n        this.element.removeChild(this.tiles[row][col]);\n        this.tiles[row].splice(col, 1);\n    }\n\n    addRow() {\n        const {rows, cols} = this.getCurrentTileCount();\n        this.tiles.push([]);\n        for (let col = 0; col < cols; col++) {\n            this.drawTile(rows, col);\n        }\n    }\n\n    removeRow() {\n        const {rows, cols} = this.getCurrentTileCount();\n        for (let col = cols - 1; col >= 0; col--) {\n            this.eraseTile(rows - 1, col);\n        }\n        this.tiles.splice(rows - 1, 1);\n    }\n\n    addColumn() {\n        const {rows, cols} = this.getCurrentTileCount();\n        for (let row = 0; row < rows; row++) {\n            this.drawTile(row, cols);\n        }\n    }\n\n    removeColumn() {\n        const {rows, cols} = this.getCurrentTileCount();\n        for (let row = rows - 1; row >= 0; row--) {\n            this.eraseTile(row, cols - 1);\n        }\n    }\n\n    getTargetTileCount() {\n        const {width, height} = this.element.getBoundingClientRect();\n        return {\n            cols: Math.ceil(width / this.width), // Horizontal\n            rows: Math.ceil(height / this.height), // Vertical\n        };\n    }\n\n    getCurrentTileCount() {\n        const rows = this.tiles.length;\n\n        return {\n            cols: rows > 0 ? this.tiles[0].length : 0,\n            rows,\n        }\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVGFyZ2V0LmpzPzViNTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlOztBQUVmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLDZCQUE2QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsV0FBVztBQUMxQjtBQUNBLHlCQUF5QixZQUFZO0FBQ3JDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsV0FBVztBQUMxQixnQ0FBZ0MsVUFBVTtBQUMxQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsV0FBVztBQUMxQix5QkFBeUIsWUFBWTtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZ0NBQWdDLFVBQVU7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvVGFyZ2V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFyZ2V0IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnRpbGVzID0gW107XG4gICAgICAgIHRoaXMucG9vbCA9IHt9O1xuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7IC8vIFRpbGUgd2lkdGhcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7IC8vIFRpbGUgaGVpZ2h0XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB9XG5cbiAgICByZWdpc3RlclRpbGUoaWQsIHJlbmRlcikge1xuICAgICAgICB0aGlzLnBvb2xbaWRdID0gcmVuZGVyO1xuICAgIH1cblxuICAgIGRlcmVnaXN0ZXJUaWxlKGlkKSB7XG4gICAgICAgIGRlbGV0ZSB0aGlzLnBvb2xbaWRdO1xuICAgIH1cblxuICAgIGdldFRpbGUocm93LCBjb2wpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLmNhbGxiYWNrKGNvbCAqIHRoaXMud2lkdGgsIHJvdyAqIHRoaXMuaGVpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucG9vbFtwcm9wcy5pZF0ocHJvcHMpO1xuICAgIH1cblxuICAgIGRyYXdUaWxlKHJvdywgY29sKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldFRpbGUocm93LCBjb2wpO1xuICAgICAgICB0aGlzLnRpbGVzW3Jvd11bY29sXSA9IHRpbGU7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLnRpbGVzW3Jvd11bY29sXSk7XG4gICAgfVxuXG4gICAgZXJhc2VUaWxlKHJvdywgY29sKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVDaGlsZCh0aGlzLnRpbGVzW3Jvd11bY29sXSk7XG4gICAgICAgIHRoaXMudGlsZXNbcm93XS5zcGxpY2UoY29sLCAxKTtcbiAgICB9XG5cbiAgICBhZGRSb3coKSB7XG4gICAgICAgIGNvbnN0IHtyb3dzLCBjb2xzfSA9IHRoaXMuZ2V0Q3VycmVudFRpbGVDb3VudCgpO1xuICAgICAgICB0aGlzLnRpbGVzLnB1c2goW10pO1xuICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBjb2xzOyBjb2wrKykge1xuICAgICAgICAgICAgdGhpcy5kcmF3VGlsZShyb3dzLCBjb2wpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlUm93KCkge1xuICAgICAgICBjb25zdCB7cm93cywgY29sc30gPSB0aGlzLmdldEN1cnJlbnRUaWxlQ291bnQoKTtcbiAgICAgICAgZm9yIChsZXQgY29sID0gY29scyAtIDE7IGNvbCA+PSAwOyBjb2wtLSkge1xuICAgICAgICAgICAgdGhpcy5lcmFzZVRpbGUocm93cyAtIDEsIGNvbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aWxlcy5zcGxpY2Uocm93cyAtIDEsIDEpO1xuICAgIH1cblxuICAgIGFkZENvbHVtbigpIHtcbiAgICAgICAgY29uc3Qge3Jvd3MsIGNvbHN9ID0gdGhpcy5nZXRDdXJyZW50VGlsZUNvdW50KCk7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICB0aGlzLmRyYXdUaWxlKHJvdywgY29scyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVDb2x1bW4oKSB7XG4gICAgICAgIGNvbnN0IHtyb3dzLCBjb2xzfSA9IHRoaXMuZ2V0Q3VycmVudFRpbGVDb3VudCgpO1xuICAgICAgICBmb3IgKGxldCByb3cgPSByb3dzIC0gMTsgcm93ID49IDA7IHJvdy0tKSB7XG4gICAgICAgICAgICB0aGlzLmVyYXNlVGlsZShyb3csIGNvbHMgLSAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldFRhcmdldFRpbGVDb3VudCgpIHtcbiAgICAgICAgY29uc3Qge3dpZHRoLCBoZWlnaHR9ID0gdGhpcy5lbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sczogTWF0aC5jZWlsKHdpZHRoIC8gdGhpcy53aWR0aCksIC8vIEhvcml6b250YWxcbiAgICAgICAgICAgIHJvd3M6IE1hdGguY2VpbChoZWlnaHQgLyB0aGlzLmhlaWdodCksIC8vIFZlcnRpY2FsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2V0Q3VycmVudFRpbGVDb3VudCgpIHtcbiAgICAgICAgY29uc3Qgcm93cyA9IHRoaXMudGlsZXMubGVuZ3RoO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjb2xzOiByb3dzID4gMCA/IHRoaXMudGlsZXNbMF0ubGVuZ3RoIDogMCxcbiAgICAgICAgICAgIHJvd3MsXG4gICAgICAgIH1cbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Target.js\n");

/***/ }),

/***/ "./src/Truchet.js":
/*!************************!*\
  !*** ./src/Truchet.js ***!
  \************************/
/*! exports provided: Truchet, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Truchet\", function() { return Truchet; });\n/* harmony import */ var _Target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Target */ \"./src/Target.js\");\n\n\nclass Truchet {\n\n    constructor(target, width, height, callback) {\n        this.target   = new _Target__WEBPACK_IMPORTED_MODULE_0__[\"default\"](target, width, height, callback);\n    }\n\n    addTile(id, render) {\n        this.target.registerTile(id, render);\n    }\n\n    removeTile(id) {\n        this.target.deregisterTile(id);\n    }\n\n    render() {\n        const {target} = this;\n        const {cols: tCols, rows: tRows} = target.getTargetTileCount();\n        const {cols: cCols, rows: cRows} = target.getCurrentTileCount();\n\n        if (tRows > cRows) {\n            for (let row = cRows; row < tRows; row++) {\n                target.addRow();\n            }\n        }\n\n        if (tRows < cRows) {\n            for (let row = tRows; row < cRows; row++) {\n                target.removeRow();\n            }\n        }\n\n        if (tCols > cCols) {\n            for (let col = cCols; col < tCols; col++) {\n                target.addColumn();\n            }\n        }\n\n        if (tCols < cCols) {\n            for (let col = tCols; col < cCols; col++) {\n                target.removeColumn();\n            }\n        }\n    }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Truchet);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvVHJ1Y2hldC5qcz81OGQ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUE4Qjs7QUFFdkI7O0FBRVA7QUFDQSw0QkFBNEIsK0NBQU07QUFDbEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLHlCQUF5QjtBQUN4QyxlQUFlLHlCQUF5Qjs7QUFFeEM7QUFDQSxpQ0FBaUMsYUFBYTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsYUFBYTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsYUFBYTtBQUM5QztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsYUFBYTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLHNFQUFPIiwiZmlsZSI6Ii4vc3JjL1RydWNoZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFyZ2V0IGZyb20gJy4vVGFyZ2V0JztcblxuZXhwb3J0IGNsYXNzIFRydWNoZXQge1xuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCB3aWR0aCwgaGVpZ2h0LCBjYWxsYmFjaykge1xuICAgICAgICB0aGlzLnRhcmdldCAgID0gbmV3IFRhcmdldCh0YXJnZXQsIHdpZHRoLCBoZWlnaHQsIGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBhZGRUaWxlKGlkLCByZW5kZXIpIHtcbiAgICAgICAgdGhpcy50YXJnZXQucmVnaXN0ZXJUaWxlKGlkLCByZW5kZXIpO1xuICAgIH1cblxuICAgIHJlbW92ZVRpbGUoaWQpIHtcbiAgICAgICAgdGhpcy50YXJnZXQuZGVyZWdpc3RlclRpbGUoaWQpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge3RhcmdldH0gPSB0aGlzO1xuICAgICAgICBjb25zdCB7Y29sczogdENvbHMsIHJvd3M6IHRSb3dzfSA9IHRhcmdldC5nZXRUYXJnZXRUaWxlQ291bnQoKTtcbiAgICAgICAgY29uc3Qge2NvbHM6IGNDb2xzLCByb3dzOiBjUm93c30gPSB0YXJnZXQuZ2V0Q3VycmVudFRpbGVDb3VudCgpO1xuXG4gICAgICAgIGlmICh0Um93cyA+IGNSb3dzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCByb3cgPSBjUm93czsgcm93IDwgdFJvd3M7IHJvdysrKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmFkZFJvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRSb3dzIDwgY1Jvd3MpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHJvdyA9IHRSb3dzOyByb3cgPCBjUm93czsgcm93KyspIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQucmVtb3ZlUm93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodENvbHMgPiBjQ29scykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gY0NvbHM7IGNvbCA8IHRDb2xzOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIHRhcmdldC5hZGRDb2x1bW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0Q29scyA8IGNDb2xzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2wgPSB0Q29sczsgY29sIDwgY0NvbHM7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LnJlbW92ZUNvbHVtbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcnVjaGV0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/Truchet.js\n");

/***/ })

/******/ });
});