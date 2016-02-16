(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/******/ ([
/* 0 */
/***/ function(module, exports) {

	jQuery(function($) {
	  $('[data-toggle-rhythme]').on('click', function(e) {
	    var $c;
	    $c = $(this).closest('[data-toggle-rhythme-class]');
	    if ($c.hasClass('vertical-rhythme')) {
	      $c.removeClass('vertical-rhythme');
	      return $(this).removeClass('active');
	    } else {
	      $c.addClass('vertical-rhythme');
	      return $(this).addClass('active');
	    }
	  });
	  $('[data-toggle-baseline]').on('click', function(e) {
	    var $c;
	    $c = $(this).closest('[data-toggle-baseline-class]');
	    if ($c.hasClass('show-rhythme')) {
	      $c.removeClass('show-rhythme');
	      return $(this).removeClass('active');
	    } else {
	      $c.addClass('show-rhythme');
	      return $(this).addClass('active');
	    }
	  });
	  $('[data-slidizle]').slidizle({
	    nextOnClick: true,
	    loop: true,
	    pauseOnHover: true
	  });
	  return $('[data-interact]').each(function(idx, item) {
	    return interact(item).draggable({
	      autoScroll: true,
	      onmove: function(e) {
	        var target, x, y;
	        target = e.target;
	        x = (parseFloat(target.getAttribute('data-x')) || 0) + e.dx;
	        y = (parseFloat(target.getAttribute('data-y')) || 0) + e.dy;
	        target.style.webkitTransform = target.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
	        target.setAttribute('data-x', x);
	        target.setAttribute('data-y', y);
	        return target.dispatchEvent(new CustomEvent('move', {
	          bubbles: true
	        }));
	      },
	      onend: function(e) {
	        e.target.dispatchEvent(new CustomEvent('move', {
	          bubbles: true
	        }));
	        e.target.setAttribute('data-x', 0);
	        e.target.setAttribute('data-y', 0);
	        return e.target.style.webkitTransform = e.target.style.transform = 'translate(0,0)';
	      }
	    });
	  });
	});


/***/ }
/******/ ])
});
;