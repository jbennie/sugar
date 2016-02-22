(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["drawer"] = factory();
	else
		root["drawer"] = factory();
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

	module.exports = __webpack_require__(24);


/***/ },

/***/ 24:
/***/ function(module, exports) {

	
	/*
	 * Sugar-drawer.js
	 *
	 * This little js file allow you to make the use of drawers more easier
	 *
	 * @author   Olivier Bossel <olivier.bossel@gmail.com>
	 * @created  22.01.16
	 * @updated  20.01.16
	 * @version  1.0.0
	 */
	if (window.sugar == null) {
	  window.sugar = {};
	}

	module.exports = window.sugar.drawer = {
	  _inited: false,
	  enabled: true,
	  _settings: {
	    close_on_click: true
	  },

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
	    this.update();
	    return this._checkHash();
	  },

	  /*
	  	Parse dom to init new drawers
	   */
	  update: function() {
	    var drawer, i, len, ref, results;
	    this.drawers = document.querySelectorAll('[data-drawer]:not([data-drawer-inited])');
	    ref = this.drawers;
	    results = [];
	    for (i = 0, len = ref.length; i < len; i++) {
	      drawer = ref[i];
	      if (drawer.drawer == null) {
	        drawer.drawer = {};
	      }
	      if ((drawer.dataset != null) && (drawer.dataset.drawer != null)) {
	        drawer.drawer.name = drawer.dataset.drawer;
	        results.push(this._initDrawer(drawer));
	      } else {
	        results.push(void 0);
	      }
	    }
	    return results;
	  },

	  /*
	  	Init drawer
	   */
	  _initDrawer: function(drawer_elm) {
	    var bkg, cs, drawer_bkg, drawer_overlay, drawer_toggle, name, overlay;
	    drawer_elm.setAttribute('data-drawer-inited', true);
	    name = drawer_elm.drawer.name;
	    drawer_bkg = document.querySelector('[data-drawer-bkg="' + name + '"]');
	    if (!drawer_bkg) {
	      bkg = document.createElement('div');
	      bkg.setAttribute('data-drawer-bkg', name);
	      drawer_elm.drawer.bkg = bkg;
	      drawer_elm.parentElement.insertBefore(bkg, drawer_elm.parentElement.firstChild);
	    }
	    cs = getComputedStyle(drawer_elm);
	    if ((cs.transitionProperty != null) && cs.transitionProperty !== '') {
	      drawer_elm.drawer.transition = true;
	    }
	    drawer_overlay = document.querySelector('[data-drawer-overlay="' + name + '"]');
	    if (!drawer_overlay) {
	      overlay = document.createElement('label');
	      overlay.setAttribute('for', name);
	      overlay.setAttribute('data-drawer-overlay', name);
	      drawer_elm.drawer.overlay = overlay;
	      drawer_elm.parentElement.insertBefore(overlay, drawer_elm.parentElement.firstChild);
	    }
	    drawer_toggle = document.querySelector('[data-drawer-toggle="' + name + '"]');
	    if (!drawer_toggle) {
	      drawer_toggle = document.createElement('input');
	      drawer_toggle.setAttribute('name', name);
	      drawer_toggle.setAttribute('id', name);
	      drawer_toggle.setAttribute('type', 'checkbox');
	      drawer_toggle.setAttribute('data-drawer-toggle', name);
	      drawer_elm.drawer.toggle = drawer_toggle;
	      drawer_elm.parentElement.insertBefore(drawer_toggle, drawer_elm.parentElement.firstChild);
	    }
	    drawer_toggle.addEventListener('change', (function(_this) {
	      return function(e) {
	        name = e.target.name;
	        if (e.target.checked) {
	          return _this.addClass(document.body, 'drawer-' + name);
	        } else if (drawer_elm.drawer.transition == null) {
	          return _this.removeClass(document.body, 'drawer-' + name);
	        }
	      };
	    })(this));
	    if (drawer_elm.drawer.transition != null) {
	      drawer_elm.addEventListener('transitionend', (function(_this) {
	        return function(e) {
	          if ((e.target.drawer != null) && e.target.drawer.toggle.checked === false) {
	            name = e.target.drawer.name;
	            return _this.removeClass(document.body, 'drawer-' + name);
	          }
	        };
	      })(this));
	    }
	    return drawer_elm.addEventListener('click', (function(_this) {
	      return function(e) {
	        if (_this._settings.close_on_click) {
	          if (e.target.nodeName.toLowerCase() === 'a') {
	            return drawer_elm.drawer.toggle.checked = false;
	          }
	        }
	      };
	    })(this));
	  },

	  /*
	  	Check hash
	   */
	  _checkHash: function() {
	    var hash, toggle;
	    if (document.location.hash) {
	      hash = document.location.hash.substring(1);
	      toggle = document.querySelector('[data-drawer-toggle="' + hash + '"]');
	      if (toggle) {
	        return toggle.checked = true;
	      }
	    }
	  },

	  /*
	  	Class helpers
	   */
	  hasClass: function(ele, cls) {
	    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	  },
	  addClass: function(ele, cls) {
	    if (!this.hasClass(ele, cls)) {
	      return ele.className += ' ' + cls;
	    }
	  },
	  removeClass: function(ele, cls) {
	    var reg;
	    if (this.hasClass(ele, cls)) {
	      reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
	      return ele.className = ele.className.replace(reg, ' ');
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

	setTimeout(function() {
	  if (!window.sugar.drawer._inited) {
	    return window.sugar.drawer.init();
	  }
	}, 500);


/***/ }

/******/ })
});
;