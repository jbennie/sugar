import sTools from './s-tools'
import sString from './s-string'
import Pro from 'promise-polyfill'
if ( ! window.Promise) {
	window.Promise = Pro;
}
import 'mutationobserver-shim'
import 'classlist.js'
import '../vendors/queryselector-scope.js'
let _insertAnimationListener = false;
let _insertMutationObserver = null;
let _insertDomElementsCallbacks = {};

let sDom = {

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
	 * Detect if is in viewport
	 */
	inViewport : (elm, offset = { top:0, right:0, bottom:0, left:0 }) => {
		const rect = elm.getBoundingClientRect();
		return (
			rect.top + offset.top >= 0 &&
			rect.left + offset.left >= 0 &&
			rect.bottom - offset.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
			rect.right - offset.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
		);
	},

	/**
	 * Check if is visible
	 */
	isVisible : (elm) => {
		// get style
		const style = document.defaultView.getComputedStyle(elm, null),
			  opacity = style['opacity'],
			  visibility = style['visibility'],
			  display = style['display'];
		return (
			'0' !== opacity &&
			'none' !== display &&
			'hidden' !== visibility
		);
	},

	/**
	 * [closestNotVisible description]
	 * @param  {[type]} elm [description]
	 * @return {[type]}     [description]
	 */
	closestNotVisible : (elm) => {
		elm = elm.parentNode;
		while(elm && elm != document) {
			if ( ! sDom.isVisible(elm)) {
				return elm;
			}
			elm = elm.parentNode;
		}
		return false;
	},

	/**
	 * Register a callback to be launched when the element is visible
	 * @param  {element}   elm The element to observe
	 * @param  {Function} cb  The callback to launch
	 * @return {[type]}       [description]
	 */
	whenVisible : (elm, cb = null) => {
		return new Promise((resolve, reject) => {
			let inViewport = false,
				isVisible = false,
				_cb = () => {
					if (inViewport && isVisible) {
						document.removeEventListener('scroll', checkViewport);
						window.removeEventListener('resize', checkViewport);
						if (cb)	cb(elm);
						resolve(elm);
					}
				}
			let checkViewport = (e) => {
				inViewport = sDom.inViewport(elm, { top:50, right:50, bottom:50, left:50 });
				_cb();
			}

			// get the closest not visible element
			// if found, we monitor it to check when it is visible
			let closestNotVisible = sDom.closestNotVisible(elm);
			if (closestNotVisible) {
				const observer = new MutationObserver((mutations) => {
					mutations.forEach((mutation) => {
						// check that is the style whos changed
						if (mutation.attributeName === 'style'
							|| mutation.attributeName === 'class') {
							// check if is visible
							if (sDom.isVisible(mutation.target)) {
								isVisible = true;
								checkViewport();
								// stop observe
								observer.disconnect();
							}
						}
					});
				});
				observer.observe(closestNotVisible, { attributes: true });
			} else {
				isVisible = true;
			}

			// listen for resize
			document.addEventListener('scroll', checkViewport);
			window.addEventListener('resize', checkViewport);
			setTimeout(() => {
				checkViewport(null);
			});
		});
	},

	/**
	 * Grab all the visible element
	 * And apply the callback when a new item match the selector
	 */
	querySelectorVisibleLive : (selector, cb, settings) => {
		sDom.querySelectorLive(selector, (elm) => {
			// check if is array
			if (elm instanceof Array) {
				elm.forEach((e) => {
					sDom.whenVisible(e).then((e) => {
						cb(e);
					});
				});
			} else {
				// check if is visible
				sDom.whenVisible(elm).then((elm) => {
					cb(elm);
				});
			}
		}, settings);
	},

	/**
	 * Grab all the visible elements
	 */
	querySelectorVisible : (selector, rootNode = document) => {
		// return array
		let elms = [];
		// grab the elements in the page
		[].forEach.call(rootNode.querySelectorAll(selector), (elm) => {
			if (sDom.inViewport(elm) && sDom.isVisible(elm) && ! sDom.closestNotVisible(elm)) {
				elms.push(elm);
			}
		});
		// return the elements
		return elms;
	},

	/**
	 * Make a selector detectable when new element are pushed in the page
	 */
	querySelectorLive : (selector, cb, settings = {}) => {

		// extend settings
		settings = {...{
			rootNode : document,
			groupedNodes : false
		}, ...settings};

		let _this = this;

		// use the animation hack to detect
		// new items in the page
		let detection_id = 's-query-selector-live-'+sTools.uniqid();

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
			rootNode : settings.rootNode,
			groupedNodes : settings.groupedNodes,
			nodes : [],
			timeout : null
		};

		// make a query on existing elements
		sDom.domReady(() => {

			// rootNode
			if ( ! settings.rootNode) { settings.rootNode = document.body; }			

			// check how we can detect new elements
			if (window.MutationObserver != null) {
				
				// make sure we try to get dom nodes
				// AFTER first js loop that handle frameworks
				// like angular, etc...
				//setTimeout(() => {

				if ( ! settings.rootNode._s_insert_mutation_observer) {
					settings.rootNode._s_insert_mutation_observer = new MutationObserver((mutations) => {
							
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
										if (sDom.matches(node, _insertDomElementsCallbacks[insert_id].selector)) {
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
											// if (sDom.matches(node, _insertDomElementsCallbacks[insert_id].selector)) {
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
					settings.rootNode._s_insert_mutation_observer.observe(settings.rootNode, {
						childList: true
					});
				}
				
				// parse the dom to find the currently present elements
				[].forEach.call(settings.rootNode.querySelectorAll(selector), (elm) => {
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
	domReady : (cb = null) => {
		return new Promise((resolve, reject) => {
			let _domReady = () => {
				if (!document.body || /(un|ing)/.test(document.readyState)) {
					setTimeout(() => {
						_domReady();
					},9);
				} else {
					if (cb) cb();
					resolve();
				}
			}
			_domReady();
		});
	},

	/**
	 * Access dataset
	 */
	dataset : (elm, key, value = null) => {
		if ( ! elm.getAttribute) return;
		if ( ! value) {
			// try to get
			let v = elm.dataset[key];
			// let v = _get(elm, 'dataset.'+key);
			if (v) return v;
			v = elm.getAttribute('data-'+sString.uncamelize(key));
			return v;
		} else {
			// try to set the value
			let dataset = elm.dataset;
			if (dataset) {
				if (elm.dataset[key]) {
					elm.dataset[key] = value;
				} else {
					// set the data through setAttribute
					elm.setAttribute('data-'+sString.uncamelize(key), value);
				}
			} else {
				// set the data through setAttribute
				// cause no support for dataset
				elm.setAttribute('data-'+sString.uncamelize(key), value);
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
		body = document.body;
		docEl = document.documentElement;
		scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
		scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
		clientTop = docEl.clientTop || body.clientTop || 0;
		clientLeft = docEl.clientLeft || body.clientLeft || 0;
		transX = sDom.getTranslate(elm, 'x');
		transY = sDom.getTranslate(elm, 'y');
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
			if (sDom.matches(elm, selector)) {
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
			if (sDom.matches(elm, selector)) {
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
			if (sDom.matches(elm, selector)) {
				return elm;
			}
			elm = elm.previousSibling;
		}
		return false;
	}
}

export default sDom;