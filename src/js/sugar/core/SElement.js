import __uniqid from '../tools/uniqid'
import __camelize from '../string/camelize'
import __uncamelize from '../string/uncamelize'
import __autoCast from '../string/autoCast'
import querySelectorLiveOnce from '../dom/querySelectorLiveOnce'
import querySelectorVisibleLiveOnce from '../dom/querySelectorVisibleLiveOnce'
import querySelectorViewportVisibleLiveOnce from '../dom/querySelectorViewportVisibleLiveOnce'
import __closestNotVisible from '../dom/closestNotVisible'
import __whenVisible from '../dom/whenVisible'
import __isVisible from '../dom/isVisible'
import __inViewport from '../dom/inViewport'
import __dataset from '../dom/dataset'
import _set from 'lodash/set';
import _get from 'lodash/get';

import SObject from './SObject'
import SMix from './SMix'
import SWatchable from '../mixins/SWatchable'

// store the settings for the different
// components types
let _sugarTypesSettings = {};

export default class SElement extends SObject {

	/**
	 * Setup
	 */
	static setup(name, type, settings) {
		if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
		_sugarTypesSettings[name][type] = settings;
	}

	/**
	 * Bind stack
	 */
	_bindStack = {
		attr2obj : {},
		obj2attr : {}
	};

	_digest = false;
	_digestsObject = {};
	_digestsMutation = {};

	/**
	 * The dom element reference
	 */
	elm = null;

	/**
	 * Store the attributes
	 */
	attr = {};

	/**
	 * Constructor
	 */
	constructor(elm) {

		// init parent
		super();
		// save the element reference
		this.elm = elm;

		// // process attributes
		// [].forEach.call(this.elm.attributes, (attr) => {
		// 	this._newAttribute(attr.name, attr.value);
		// });

		// bind all the attributes
		[].forEach.call(this.elm.attributes, (attr) => {
			this.attr[__camelize(attr.name)] = attr.value;
			this.bind(attr.name, `attr.${__camelize(attr.name)}`);
		});

		// listen for changes in some html tags
		this._listenChangesOnElement();

		// create a uniqid for the element
		this.uniqid = __uniqid();

		// set the uniqid to the element
		this.elm.setAttribute('data-s-element-id', this.uniqid);

		// check attributes changes to update settings
		let observer = new MutationObserver((mutations) => {
			this._digest = true;
			// loop on mutations
			mutations.forEach((mutation) => {
				// update the attr property
				let val = this.elm.getAttribute(mutation.attributeName);
				// make a new attribute
				let camelName = __camelize(mutation.attributeName);
				// let camelName = this._newAttribute(mutation.attributeName);
				console.warn('mutation', mutation.attributeName);

				this._digestsMutation[mutation.attributeName] = true;

				// if the element has not the attribute yet
				// if ( this.elm.getAttribute(mutation.attributeName) === undefined) {
				// 	console.log('new attribute', mutation.attributeName);
				// }

				// set the value
				// this.attr[camelName] = mutation.target.getAttribute(mutation.attributeName);
				// set all the objects values bound to this attribute
				if (this._bindStack.attr2obj[mutation.attributeName]) {
					// loop on each objects to update
					this._bindStack.attr2obj[mutation.attributeName].forEach((objectPath) => {

						// do not try to update an objectPath value
						// when the update comes from his update
						// if (this._digestsObject[camelName]) return;

						// if (_get(this, objectPath) !== val) {
						console.warn('update the objectPath', objectPath, 'with value', val);
						// update the value
						_set(this, objectPath, val);
						// console.log('this', this);

					});
				}
			});
			// restore the mutate state in the next loop
			setTimeout(() => {
				this._digestsMutation = {};
			});
		});
		// observe the node itself
		observer.observe(this.elm, {
			addedNodes: false,
			attributeName: true,
			characterData : true,
			subtree : false,
			attributeOldValue : true,
			characterDataOldValue : true
		});

		// listen when the element is added to the dom
		setTimeout(() => {
			let cbs = [(elm) => {
				this.onAdded(elm);
			}];
			if (typeof(this.onRemoved) == 'function') {
				cbs.push((elm) => {
					this.onRemoved(elm);
				});
			}
			if (typeof(this.onAdded) == 'function') {
				querySelectorLiveOnce(`[data-s-element-id="${this.uniqid}"]`, cbs);
			}
			// check if is the onVisible method
			if (typeof(this.onVisible) == 'function') {
				querySelectorVisibleLiveOnce(`[data-s-element-id="${this.uniqid}"]`, (elm) => {
					this.onVisible(elm);
				});
			}
			// check if is the onViewportVisible method
			if (typeof(this.onViewportVisible) == 'function') {
				querySelectorViewportVisibleLiveOnce(`[data-s-element-id="${this.uniqid}"]`, (elm) => {
					this.onViewportVisible(elm);
				});
			}
		});

		console.log('THIS', this);
	}

	/**
	 * Listen changes on element
	 */
	_listenChangesOnElement() {
		const tagName = this.elm.tagName.toLowerCase();
		switch(tagName) {
			case 'input':
			case 'textarea':
			case 'select':
				this.elm.addEventListener('change', (e) => {
					// set the attribute
					this.attr.value = e.target.value;
				});
			break;
		}
	}

	/**
	 * Bind
	 */
	bind(attrName, objectPath) {
		// attr2obj
		if ( ! this._bindStack.attr2obj[attrName]) this._bindStack.attr2obj[attrName] = [];
		if ( this._bindStack.attr2obj[attrName].indexOf(objectPath) === -1)
			this._bindStack.attr2obj[attrName].push(objectPath);

		// obj2attr
		if ( ! this._bindStack.obj2attr[objectPath]) this._bindStack.obj2attr[objectPath] = [];
		if ( this._bindStack.obj2attr[objectPath].indexOf(attrName) === -1)
			this._bindStack.obj2attr[objectPath].push(attrName);

		// watch the objectPath to update the attribute accordingly
		this.watch(objectPath, (newVal, oldVal) => {
			// do nothing if a digest is in progress
			// if (this._digest) return;

			console.error('_digestsMutation', this._digestsMutation, attrName);
			if (this._digestsMutation[attrName]) return;
			if (newVal === oldVal) return;

			console.error('objectPath', objectPath, 'has been updated to', newVal)
			// console.log(this._bindStack.obj2attr);

			// loop on all attributes to update
			this._bindStack.obj2attr[objectPath].forEach((attrName) => {

				if (this._digestsMutation[attrName]) return;
				this._digestsMutation[attrName] = true;

				console.error('try to update the attribute', attrName, 'with value', newVal);


				// update the attribute
				this.elm.setAttribute(__uncamelize(attrName), newVal);

				// reset the digest process in the next loop
				// setTimeout(() => {
				// 	this._digests[attrName] = false;
				// });

			});
		});
	}

	/**
	 * New attribute
	 */
	// _attrs = {};
	// _newAttribute(name, value) {
	// 	let camelName = __camelize(name);
	//
	// 	// make only if not exist already
	// 	if (this._attrs[name]) return camelName;
	// 	this._attrs[name] = true;
	// 	this.attr[camelName] = __autoCast(value);
	// 	let val = this.attr[camelName];
	//
	// 	// automatically listen for changes in input, etc...
	// 	// const tagName = this.elm.tagName.toLowerCase();
	// 	// switch(tagName) {
	// 	// 	case 'input':
	// 	// 	case 'textarea':
	// 	// 	case 'select':
	// 	// 		if (name === 'value') {
	// 	// 			this.elm.addEventListener('change', (e) => {
	// 	// 				// set the attribute
	// 	// 				this.attr.value = e.target.value;
	// 	// 			});
	// 	// 		}
	// 	// 	break;
	// 	// }
	//
	// 	// define new property on the attr
	// 	Object.defineProperty(this.attr, camelName, {
	// 		get : () => val,
	// 		set : (value) => {
	// 			// cast the value
	// 			value = __autoCast(value);
	// 			// protect from recursion
	// 			if (value === val) return value;
	// 			// save the value localy
	// 			val = value;
	// 			// set the new attribute on html tag
	// 			this.elm.setAttribute(name, value);
	// 		},
	// 		enumarable : true
	// 	});
	// 	return camelName;
	// }

	/**
	 * Get closest not visible element
	 */
	closestNotVisible(elm = this.elm) {
		return __closestNotVisible(elm);
	}

	/**
	 * Visible proxy init
	 */
	whenVisible(cb = null, elm = this.elm) {
		return __whenVisible(elm, cb);
	}

	/**
	 * Detect if is visible
	 */
	isVisible() {
		return __isVisible(this.elm);
	}

	/**
	 * Detect when the element is in the viewport
	 */
	inViewport(offset = null) {
		return __inViewport(this.elm, offset);
	}

	/**
	 * Access dataset
	 */
	dataset(key, value = null, elm = this.elm) {
		return __dataset(elm, key, value);
	}
}
