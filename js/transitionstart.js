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

	module.exports = __webpack_require__(6);


/***/ },

/***/ 6:
/***/ function(module, exports) {

	
	/*
	 * Sugar-transitionstart.js
	 *
	 * This little js file allow you to make your element that have a transition trigger the transitionstart event
	 *
	 * @author   Olivier Bossel <olivier.bossel@gmail.com>
	 * @created  22.01.16
	 * @updated  22.01.16
	 * @version  1.0.0
	 */
	if (window.sugar == null) {
	  window.sugar = {};
	}

	module.exports = window.sugar.transitionstart = {
	  _inited: false,
	  enabled: true,
	  _settings: {},

	  /*
	  	Init
	   */
	  init: function(settings) {
	    if (settings == null) {
	      settings = {};
	    }
	    this._settings = this._extend(this._settings, settings);
	    this._inited = true;
	    if (document.readyState === 'interactive') {
	      return this._init();
	    } else {
	      return document.addEventListener('DOMContentLoaded', (function(_this) {
	        return function(e) {
	          return _this._init();
	        };
	      })(this));
	    }
	  },

	  /*
	  	Internal init
	   */
	  _init: function() {
	    if (!this.enabled) {
	      return;
	    }
	    document.addEventListener("transitionend", this._onTransitionEnd, false);
	    document.addEventListener("oTransitionEnd", this._onTransitionEnd, false);
	    return document.addEventListener("webkitTransitionEnd", this._onTransitionEnd, false);
	  },

	  /*
	  	On animation start
	   */
	  _onTransitionEnd: function(e) {
	    if (e.elapsedTime === 0.000001 || e.propertyName === 'outline-color') {
	      return e.target.dispatchEvent(new CustomEvent('transitionstart', {
	        bubbles: true,
	        cancelable: true
	      }));
	    }
	  },

	  /*
	  	Extend settings
	   */
	  _extend: function(obj, mixin) {
	    var method, name;
	    for (name in mixin) {
	      method = mixin[name];
	      obj[name] = method;
	    }
	    return obj;
	  }
	};

	window.sugar.transitionstart.init();


/***/ }

/******/ })
});
;