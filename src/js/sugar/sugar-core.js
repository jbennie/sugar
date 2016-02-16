import { uncamelize } from './sugar-tools'
import 'mutation-summary'

let _get = require('lodash/get');
let _capizalize = require('lodash/capitalize');
let _insertAnimationListener = false;
let _insertMutationObserver = null;
let _insertDomElementsCallbacks = {};

class SugarDom {

	/**
	 * Constructor
	 */
	constructor() {

	}

	/**
	 * Polyfill for the matches js method
	 */
	selectorMatches(el, selector) {
		var p = Element.prototype;
		var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
			return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
		};
		return f.call(el, selector);
	}

	/**
	 * Make a selector detectable when new element are pushed in the page
	 */
	onInserted(selector, cb) {

		// if we have access to mutation observers,
		// use them
		// create only 1 listener

		// use the animation hack to detect
		// new items in the page
		let detection_id = 's-insert-detection-'+Math.round(Math.random()*99999999999);

		// add the callback in stack
		_insertDomElementsCallbacks[detection_id] = {
			callback : cb,
			selector : selector
		};
		
		// check how we can detect new elements
		if (window.MutationObserver && ! _insertMutationObserver) {
			
			var observer = new MutationSummary({
				callback: (summaries) => {
					console.log('summaries', summaries);
				},
				queries: [{ element: selector }]
			});

			// _insertMutationObserver = new MutationObserver((mutations) => {
			// 	// check if what we need has been added
			// 	mutations.forEach((mutation) => {
			// 		if (mutation.addedNodes && mutation.addedNodes[0]) {
			// 			// loop on each callbacks to find a match
			// 			for(let insert_id in _insertDomElementsCallbacks) {
			// 				if (this.selectorMatches(mutation.addedNodes[0], _insertDomElementsCallbacks[insert_id].selector)) {
			// 					_insertDomElementsCallbacks[insert_id].callback(mutation.addedNodes[0]);
			// 				}
			// 			}
			// 		}
			// 	});
			// });
			// _insertMutationObserver.observe(document.body, {
			// 	childList: true
			// });
		} else {
			// add the animation style in DOM
			let css = selector + ` { 
				-webkit-animation:${detection_id} 0.001s;
				-moz-animation:${detection_id} 0.001s;
				-ms-animation:${detection_id} 0.001s;
				animation:${detection_id} 0.001s;
			}
			@keyframes ${detection_id} {
				from { opacity: .99; }
				to { opacity: 1; }
			}`;
			let style = document.createElement('style');
			style.type = 'text/css';
			if (style.styleSheet) {
				style.styleSheet.cssText = css;
			} else {
				style.appendChild(document.createTextNode(css));
			}
			document.head.appendChild(style);
			// now we listen for animation end
			// but only once
			if (! _insertAnimationListener) {
				_insertAnimationListener = true;
				document.addEventListener('animationend', (e) => {
					if (_insertDomElementsCallbacks[e.animationName]) {
						_insertDomElementsCallbacks[e.animationName].callback(e.target);
					}
				});
			}
		}
	}

	/**
	 * Dom ready
	 */
	domReady(cb) {
		if (document.readyState == 'interactive') cb();
		else {
			document.addEventListener('DOMContentLoaded', (e) => {
				cb();
			});
		}	
	}

	/**
	 * Access dataset
	 */
	dataset(elm, key, value = null) {
		if ( ! elm.getAttribute) return;
		if ( ! value) {
			// try to get
			let v = _get(elm, 'dataset.'+key);
			if (v) return v;
			v = elm.getAttribute('data-'+uncamelize(key));
			return v;
		} else {
			// try to set the value
			if (_get(elm, 'dataset')) {
				if (_get(elm, 'dataset.'+key)) {
					elm.dataset[key] = value;
				} else {
					// set the data through setAttribute
					elm.setAttribute('data-'+uncamelize(key), value);
				}
			} else {
				// set the data through setAttribute
				// cause no support for dataset
				elm.setAttribute('data-'+uncamelize(key), value);
			}

		}
	}

	/**
	 * Classes helpers
	 */
	hasClass(elm, cls) {
		return elm.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	}
	addClass(elm, cls) {
		if (!this.hasClass(cls, elm)) {
			return elm.className += ' ' + cls;
		}
	}
	removeClass(elm, cls) {
		let reg;
		if (this.hasClass(cls, elm)) {
			reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
			return elm.className = elm.className.replace(reg, ' ');
		}
	}

}

let _sugarTypesSettings = {};

class SugarElement extends SugarDom {

	/**
	 * Setup
	 */
	static setup(name, type, settings) {
		if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
		_sugarTypesSettings[name][type] = settings;
	}

	/**
	 * Constructor
	 */
	constructor(name, elm, default_settings = {}, settings = {}) {
		// init parent
		super();
		// save element reference
		this.elm = elm;
		this.name = name;
		// extend settings
		this.settings = {...default_settings, ...settings};

		// check if a type is defined then extend the settings
		if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
		let type = this.setting('settings');
		if (type && _sugarTypesSettings[name][type]) {
			this.settings = {...this.settings, ..._sugarTypesSettings[name][type]};
		}

		// add dataset support
		if (! this.elm.dataset) {
			Object.defineProperty(this.elm, 'dataset', {
				enumarable : true,
				configurable : false,
				writable : true
			});
		}
	}

	/**
	 * Setting
	 */
	setting(key) {
		// check in the dataset
		let s = this.dataset(this.name+_capizalize(key));
		if (s == 'false') s = false;
		if (s != undefined) return s;
		// return the settings
		return this.settings[key];
	}

	/**
	 * Access dataset
	 */
	dataset(key, value = null, elm = this.elm) {
		return super.dataset(elm, key, value);
	}

	/**
	 * Classes helpers
	 */
	hasClass(cls, elm = this.elm) {
		return super.hasClass(elm, cls);
	}
	addClass(cls, elm = this.elm) {
		return super.addClass(elm, cls);
	}
	removeClass(cls, elm = this.elm) {
		return super.removeClass(elm, cls);
	}
}

module.exports = {
	SugarElement : SugarElement,
	SugarDom : SugarDom
}