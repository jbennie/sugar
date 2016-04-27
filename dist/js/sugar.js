(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sugar"] = factory();
	else
		root["sugar"] = factory();
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

	module.exports = __webpack_require__(195);


/***/ },

/***/ 195:
/***/ function(module, exports) {

	// import ActivateElement from './components/activate-element';
	// import activateManager from './components/activate-manager';

	// import { GooeyElement, GooeyFilter } from './filters/sugar-gooey'
	// import { MotionblurElement, MotionBlurFilter } from './filters/sugar-motionblur'
	// import { GradientElement, GradientFilter } from './filters/sugar-gradient'
	// import SvgFilter from './filters/sugar-svgfilter'
	// import tools from './core/sugar-tools'
	// import sDom from './core/sugar-dom'
	// import { drawerManager, DrawerElement } from './components/sugar-drawer'
	// import transitionstartEventDispatcher from './events/sugar-transitionstart'
	// import localStorageFonts from './fonts/sugar-localstoragefonts'
	// import {
	// 	RadioboxElement,
	// 	DatepickerElement,
	// 	DatetimepickerElement
	// } from './components/sugar-form'
	// import SelectElement from './components/sugar-form-select'
	// import settings from './core/sugar-settings'

	// module.exports = {
	// 	activateManager : activateManager,
	// 	ActivateElement : ActivateElement,
	// 	GooeyElement : GooeyElement,
	// 	GooeyFilter : GooeyFilter,
	// 	MotionblurElement : MotionblurElement,
	// 	MotionBlurFilter : MotionBlurFilter,
	// 	GradientElement : GradientElement,
	// 	GradientFilter : GradientFilter,
	// 	SvgFilter : SvgFilter,
	// 	RadioboxElement : RadioboxElement,
	// 	DatepickerElement : DatepickerElement,
	// 	DatetimepickerElement : DatetimepickerElement,
	// 	SelectElement : SelectElement,
	// 	tools : tools,
	// 	dom : sDom,
	// 	settings : settings,
	// 	transitionstartEventDispatcher : transitionstartEventDispatcher,
	// 	drawerManager : drawerManager,
	// 	DrawerElement : DrawerElement,
	// 	localStorageFonts : localStorageFonts
	// }
	"use strict";

/***/ }

/******/ })
});
;