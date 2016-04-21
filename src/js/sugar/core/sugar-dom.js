import * as sugarTools from './sugar-tools'
require('mutationobserver-shim');
require('classlist.js');
// let MutationSummary = require('mutation-summary');
let _get = require('lodash/get');
let _insertAnimationListener = false;
let _insertMutationObserver = null;
let _insertDomElementsCallbacks = {};

(function(doc, proto) {
  try { // check if browser supports :scope natively
    doc.querySelector(':scope body');
  } catch (err) { // polyfill native methods if it doesn't
    ['querySelector', 'querySelectorAll'].forEach(function(method) {
      var nativ = proto[method];
      proto[method] = function(selectors) {
        if (/(^|,)\s*:scope/.test(selectors)) { // only if selectors contains :scope
          var id = this.id; // remember current element id
          this.id = 'ID_' + Date.now(); // assign new unique id
          selectors = selectors.replace(/((^|,)\s*):scope/g, '$1#' + this.id); // replace :scope with #ID
          var result = doc[method](selectors);
          this.id = id; // restore previous id
          return result;
        } else {
          return nativ.call(this, selectors); // use native code for other selectors
        }
      }
    });
  }
})(window.document, Element.prototype);

let sugarDom = {

	/**
	 * Polyfill for the matches js method
	 */
	matches : (el, selector) => {
		if (el.nodeName == '#comment' || el.nodeName == '#text') { return false; }
		var p = Element.prototype;
		var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function(s) {
			return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
		};
		return f.call(el, selector);
	},

	/**
	 * Make a selector detectable when new element are pushed in the page
	 */
	querySelectorLive : (selector, cb, rootNode, groupedNodes = false)  => {

		let _this = this;

		// use the animation hack to detect
		// new items in the page
		let detection_id = 's-query-selector-live-'+sugarTools.uniqid();

		// add the callback in stack
		_insertDomElementsCallbacks[detection_id] = {
			detection_id : detection_id,
			_added_callback : typeof(cb) == 'function' ? cb : cb[0] ? cb[0] : null,
			added_callback : (_this) => {
				// save the detection if into node
				if (_this.nodes) {
					_this.nodes.forEach((node) => {
						node._s_query_selector_live_id = _this.detection_id;
					});	
				}
				if ( ! _this._added_callback) return;
				if (_this.nodes.length > 1) {
					_this._added_callback(_this.nodes);	
				} else if (_this.nodes.length == 1) {
					_this._added_callback(_this.nodes[0]);
				}
				_this.nodes = [];			
			},
			_removed_callback : cb instanceof Array && cb[1] ? cb[1] : null,
			removed_callback : (_this) => {
				if ( ! _this._removed_callback) return;
				if (_this.nodes.length > 1) {
					_this._removed_callback(_this.nodes);	
				} else if (_this.nodes.length == 1) {
					_this._removed_callback(_this.nodes[0]);
				}
				_this.nodes = [];			
			},
			selector : selector,
			rootNode : rootNode,
			groupedNodes : groupedNodes,
			nodes : [],
			timeout : null
		};

		// make a query on existing elements
		sugarDom.domReady(() => {

			// rootNode
			if ( ! rootNode) { rootNode = document.body; }			

			// check how we can detect new elements
			if (window.MutationObserver != null) {
				
				// make sure we try to get dom nodes
				// AFTER first js loop that handle frameworks
				// like angular, etc...
				//setTimeout(() => {

				if ( ! rootNode._s_insert_mutation_observer) {
					rootNode._s_insert_mutation_observer = new MutationObserver((mutations) => {
							
						// check if what we need has been added
						mutations.forEach((mutation) => {
							
							// added nodes
							if (mutation.addedNodes) {
								// let _callback = null,
								// 	_groupedNodes = [];
								// check if want grouped nodes in callback
								[].forEach.call(mutation.addedNodes, (node) => {
									// loop on each callbacks to find a match
									for(let insert_id in _insertDomElementsCallbacks) {
										if (sugarDom.matches(node, _insertDomElementsCallbacks[insert_id].selector)) {
											if (_insertDomElementsCallbacks[insert_id].groupedNodes) {
												_insertDomElementsCallbacks[insert_id].nodes.push(node);
												// _groupedNodes.push(node);
												clearTimeout(_insertDomElementsCallbacks[insert_id].timeout);
												_insertDomElementsCallbacks[insert_id].timeout = setTimeout(_insertDomElementsCallbacks[insert_id].added_callback.bind(null, _insertDomElementsCallbacks[insert_id]));
											} else {
												_insertDomElementsCallbacks[insert_id].added_callback(node);
											}
										}
									}
								});
							}

							// removed nodes
							if (mutation.removedNodes) {
								// let _callback = null,
								// 	_groupedNodes = [];
								// check if want grouped nodes in callback
								[].forEach.call(mutation.removedNodes, (node) => {
									// loop on each callbacks to find a match
									if (node.nodeName != '#text') {
										for(let insert_id in _insertDomElementsCallbacks) {
											if (node._s_query_selector_live_id == insert_id) {
											// if (sugarDom.matches(node, _insertDomElementsCallbacks[insert_id].selector)) {
												if (_insertDomElementsCallbacks[insert_id].groupedNodes) {
													_insertDomElementsCallbacks[insert_id].nodes.push(node);
													// _groupedNodes.push(node);
													clearTimeout(_insertDomElementsCallbacks[insert_id].timeout);
													_insertDomElementsCallbacks[insert_id].timeout = setTimeout(_insertDomElementsCallbacks[insert_id].removed_callback.bind(null, _insertDomElementsCallbacks[insert_id]));
												} else {
													_insertDomElementsCallbacks[insert_id].removed_callback(node);
												}
											}
										}
									}
								});
							}

						});
					});
					rootNode._s_insert_mutation_observer.observe(rootNode, {
						childList: true
					});
				}
				
				// parse the dom to find the currently present elements
				[].forEach.call(rootNode.querySelectorAll(selector), (elm) => {
					_insertDomElementsCallbacks[detection_id].nodes.push(elm);
					if (_insertDomElementsCallbacks[detection_id].groupedNodes) {
						clearTimeout(_insertDomElementsCallbacks[detection_id].timeout);
						_insertDomElementsCallbacks[detection_id].timeout = setTimeout(_insertDomElementsCallbacks[detection_id].added_callback.bind(null, _insertDomElementsCallbacks[detection_id]));
					} else {
						_insertDomElementsCallbacks[detection_id].added_callback(_insertDomElementsCallbacks[detection_id]);
					}
				});
			
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
				// append the animation in head
				document.head.appendChild(style);
			}
		});
	},

	/**
	 * Dom ready
	 */
	domReady : (cb) => {
		// if ( ! document.body) {
		// 	setTimeout(sugarDom.domReady,9,cb);
		// } else {
		// 	cb();
		// }

		if ( ! cb) return;
		!document.body || /(un|ing)/.test(document.readyState)?setTimeout(() => {
			sugarDom.domReady(cb);
		},9):cb()

		// if (document.readyState == 'interactive') {
		// // 	console.log('ready!!!');
		// // 	console.log(document.body);
		// 	cb();
		// } else {
		// 	document.addEventListener('DOMContentLoaded', (e) => {
		// 		cb();
		// 	});
		// }	
	},

	/**
	 * Access dataset
	 */
	dataset : (elm, key, value = null) => {
		if ( ! elm.getAttribute) return;
		if ( ! value) {
			// try to get
			let v = _get(elm, 'dataset.'+key);
			if (v) return v;
			v = elm.getAttribute('data-'+sugarTools.uncamelize(key));
			return v;
		} else {
			// try to set the value
			if (_get(elm, 'dataset')) {
				if (_get(elm, 'dataset.'+key)) {
					elm.dataset[key] = value;
				} else {
					// set the data through setAttribute
					elm.setAttribute('data-'+sugarTools.uncamelize(key), value);
				}
			} else {
				// set the data through setAttribute
				// cause no support for dataset
				elm.setAttribute('data-'+sugarTools.uncamelize(key), value);
			}

		}
	},

	/**
	 * Scroll top
	 */
	scrollTop : () => {
		return window.pageYOffset || document.scrollTop || document.body.scrollTop;
	},

	/**
	 * Get offset left of an element
	 */
	offsetLeft : (elm) => {
		var offsetLeft = 0;
		do {
			if ( !isNaN( elm.offsetLeft ) ) {
				offsetLeft += elm.offsetLeft;
			}
		} while( elm = elm.offsetParent );
		return offsetLeft;
	},

	/**
	 * Get offset top of an element
	 */
	offsetTop : (elm) => {
		var offsetTop = 0;
		do {
			if ( !isNaN( elm.offsetTop ) ) {
				offsetTop += elm.offsetTop;
			}
		} while( elm = elm.offsetParent );
		return offsetTop;
	},

	/**
	 * Get offset of an element
	 */
	offset : (elm) => {
		let body, box, clientLeft, clientTop, docEl, left, scrollLeft, scrollTop, top, transX, transY;
		box = elm.getBoundingClientRect();
		// box = {
		// 	top : sugarDom.offsetTop(elm),
		// 	left : sugarDom.offsetLeft(elm)
		// };
		body = document.body;
		docEl = document.documentElement;
		scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
		scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
		clientTop = docEl.clientTop || body.clientTop || 0;
		clientLeft = docEl.clientLeft || body.clientLeft || 0;
		transX = sugarDom.getTranslate(elm, 'x');
		transY = sugarDom.getTranslate(elm, 'y');
		top = box.top + scrollTop - clientTop + transY;
		left = box.left + scrollLeft - clientLeft + transX;
		return {
			top: Math.round(top),
			left: Math.round(left)
		};
	},

	/**
	 * Get element translate values
	 */
	getTranslate : (elm, what) => {
		if ( ! window.getComputedStyle) return;
		let idx, mat, style, transform;
		style = getComputedStyle(elm);
		transform = style.transform || style.webkitTransform || style.mozTransform || style.msTransform;
		mat = transform.match(/^matrix3d\((.+)\)$/);
		if (mat) {
			idx = {
				x: 12,
				y: 13,
				z: 14
			};
			return parseFloat(mat[1].split(', ')[idx[what]]);
		}
		mat = transform.match(/^matrix\((.+)\)$/);
		idx = {
			x: 4,
			y: 5,
			z: 6
		};
		if (mat) {
			return parseFloat(mat[1].split(', ')[idx[what]]);
		} else {
			return 0;
		}
	},

	/**
	 * Get closest 
	 */
	closest : (elm, selector) => {
		elm = elm.parentNode;
		while(elm && elm != document) {
			if (sugarDom.matches(elm, selector)) {
				return elm;
			}
			elm = elm.parentNode;
		}
		return false;
	},

	/**
	 * Next
	 */
	next : (elm, selector) => {
		elm = elm.nextSibling;
		while(elm) {
			if (sugarDom.matches(elm, selector)) {
				return elm;
			}
			elm = elm.nextSibling;
		}
		return false;
	},

	/**
	 * Previous
	 */
	previous : (elm, selector) => {
		elm = elm.previousSibling;
		while(elm) {
			if (sugarDom.matches(elm, selector)) {
				return elm;
			}
			elm = elm.previousSibling;
		}
		return false;
	},

	/**
	 * Classes helpers
	 */
	hasClass : (elm, cls) => {
		return elm.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
	},
	addClass : (elm, cls) => {
		if (!sugarDom.hasClass(elm, cls)) {
			return elm.className += ' ' + cls;
		}
	},
	removeClass : (elm, cls) => {
		let reg;
		if (sugarDom.hasClass(elm, cls)) {
			reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
			return elm.className = elm.className.replace(reg, ' ');
		}
	}
}

export default sugarDom;