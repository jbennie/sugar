/**
 * Make a selector detectable when new element are pushed in the page
 */
let _insertAnimationListener = false;
let _insertMutationObserver = null;
let _insertDomElementsCallbacks = {};

import 'mutationobserver-shim'
import Pro from 'promise-polyfill'
if ( ! window.Promise) {
	window.Promise = Pro;
}
import 'classlist.js'
import '../vendors/queryselector-scope.js'

import __matches from './matches'
import __uniqid from '../tools/uniqid'
import __domReady from './domReady'

export default function querySelectorLive(selector, cb, settings = {}) {

	// extend settings
	settings = {...{
		rootNode : null,
		groupedNodes : false,
		once : false
	}, ...settings};

	let _this = this;

	// use the animation hack to detect
	// new items in the page
	let detection_id = 's-query-selector-live-'+__uniqid();

	// add the callback in stack
	_insertDomElementsCallbacks[detection_id] = {
		once : settings.once,
		once_added : false,
		once_removed : false,
		detection_id : detection_id,
		_added_callback : typeof(cb) == 'function' ? cb : cb[0] ? cb[0] : null,
		added_callback : (_this) => {
			// save the detection id into node
			// in order to be able to detect the deletion of it
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
	__domReady(() => {

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
									let insertDomParams = _insertDomElementsCallbacks[insert_id],
										once = insertDomParams.once,
										once_added = insertDomParams.once_added;
									if ( ! once || ! once_added) {
										// check if the selector match
										if (__matches(node, insertDomParams.selector)) {
											// check if we need to group the elements in one
											// callback call
											insertDomParams.nodes.push(node);
											if (insertDomParams.groupedNodes) {
												clearTimeout(insertDomParams.timeout);
												insertDomParams.timeout = setTimeout(insertDomParams.added_callback.bind(null, insertDomParams));
											} else {
												insertDomParams.added_callback(insertDomParams);
											}
											// if once, update the once_added property
											if (once) {
												_insertDomElementsCallbacks[insert_id].once_added = true;
												// if we don't have any removed callback
												// we delete the parameters from the stack
												if ( ! insertDomParams._removed_callback) {
													delete _insertDomElementsCallbacks[insert_id];
												}
											}
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
										
										let insertDomParams = _insertDomElementsCallbacks[insert_id],
											once = insertDomParams.once,
											once_removed = insertDomParams.once_removed;
										if ( ! once || ! once_removed) {

											if (node._s_query_selector_live_id == insert_id) {
											// if (__matches(node, _insertDomElementsCallbacks[insert_id].selector)) {
												// check if we need to group the elements
												// to pass to callback
												insertDomParams.nodes.push(node);
												if (insertDomParams.groupedNodes) {
													clearTimeout(insertDomParams.timeout);
													insertDomParams.timeout = setTimeout(insertDomParams.removed_callback.bind(null, insertDomParams));
												} else {
													insertDomParams.removed_callback(insertDomParams);
												}
												// if once, we remove the parameters from the stack
												// because we don't want to check this selector again
												if (once) {
													delete _insertDomElementsCallbacks[insert_id];
												}
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
}