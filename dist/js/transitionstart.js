(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["transitionstart"] = factory();
	else
		root["transitionstart"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(30);


/***/ },

/***/ 30:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/*
	 * Sugar-activate.js
	#
	 * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
	#
	 * @author   Olivier Bossel <olivier.bossel@gmail.com>
	 * @created  20.01.16
	 * @updated  20.01.16
	 * @version  1.0.0
	 */

	// Actual activate element class

	var SugarTransitionstartEventDispatcher = function () {

		/**
	  * Constructor
	  */

		function SugarTransitionstartEventDispatcher() {
			_classCallCheck(this, SugarTransitionstartEventDispatcher);

			// listen for transitionend
			document.addEventListener('transitionend', this._onTransitionEnd, false);
			document.addEventListener('oTransitionEnd', this._onTransitionEnd, false);
			document.addEventListener('webkitTransitionEnd', this._onTransitionEnd, false);
			document.addEventListener('mozTransitionEnd', this._onTransitionEnd, false);
			document.addEventListener('msTransitionEnd', this._onTransitionEnd, false);
		}

		/**
	  * On transition end
	  */


		SugarTransitionstartEventDispatcher.prototype._onTransitionEnd = function _onTransitionEnd(e) {
			if (e.elapsedTime == 0.000001 || e.propertyName == 'outline-color') {
				e.target.dispatchEvent(new CustomEvent('transitionstart', {
					bubbles: true,
					cancelable: true
				}));
			}
		};

		return SugarTransitionstartEventDispatcher;
	}();

	// create the new dispatcher instance


	var dispatcher = new SugarTransitionstartEventDispatcher();

	// export the dispatcher
	exports.default = dispatcher;

/***/ }

/******/ })
});
;