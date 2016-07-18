import SWatcher from './SWatcher';
import __camelize from '../string/camelize';
import __uncamelize from '../string/uncamelize';
import __uniqid from '../tools/uniqid';
import _set from 'lodash/set';

export default class SBinder {

	/**
	 * Bind stack
	 */
	_bindStack = {
		attr2obj : {},
		obj2attr : {}
	};

	/**
	 * Mutation observer stack
	 */
	_mutationObservedElementsStack = [];

	_digestsMutation = {};

	/**
	 * Constructor
	 */
	constructor() {
		// init new watcher
		this.watcher = new SWatcher();
	}

	/**
	 * Bind
	 */
	bindObjectPath2ElementAttribute(object, path, elm, attrName) {

		// observe the element
		this._observeDomElement(elm);

		// generate an bindId in the object if not already exist
		if ( ! object._sBinderId) object._sBinderId = `s-binder-${__uniqid()}`;

		// attr2obj
		if ( ! this._bindStack.attr2obj[attrName]) this._bindStack.attr2obj[attrName] = {};
		if ( ! this._bindStack.attr2obj[attrName][`${object._sBinderId}:${path}`])
			this._bindStack.attr2obj[attrName][`${object._sBinderId}:${path}`] = {
				object : object,
				path : path
			};

		// obj2attr
		if ( ! this._bindStack.obj2attr[`${object._sBinderId}:${path}`]) this._bindStack.obj2attr[`${object._sBinderId}:${path}`] = {};
		if ( ! this._bindStack.obj2attr[`${object._sBinderId}:${path}`][attrName])
			this._bindStack.obj2attr[`${object._sBinderId}:${path}`][attrName] = {
				elm : elm,
				attrName : attrName
			};

		// watch the path to update the attribute accordingly
		this.watcher.watch(object, path, (newVal, oldVal) => {
			// do nothing if a digest is in progress
			// if (this._digest) return;

			// console.error('_digestsMutation', this._digestsMutation, attrName);
			if (this._digestsMutation[attrName]) return;
			if (newVal === oldVal) return;

			// loop on all attributes to update
			// console.log(`${object._sBinderId}:${path}`, this._bindStack.obj2attr);
			for (const attrName in this._bindStack.obj2attr[`${object._sBinderId}:${path}`]) {
				const watch = this._bindStack.obj2attr[`${object._sBinderId}:${path}`][attrName];

				if (this._digestsMutation[watch.attrName]) continue;
				this._digestsMutation[watch.attrName] = true;

				// update the attribute
				watch.elm.setAttribute(__uncamelize(watch.attrName), newVal);
			}
		});
	}

	/**
	 * Observe DOM element
	 */
	_observeDomElement(elm) {

		// check if already observe the element
		if (this._mutationObservedElementsStack.indexOf(elm) !== -1) return;
		this._mutationObservedElementsStack.push(elm);

		// check attributes changes to update settings
		let observer = new MutationObserver((mutations) => {
			// loop on mutations
			mutations.forEach((mutation) => {
				// update the attr property
				let val = elm.getAttribute(mutation.attributeName);
				// make a new attribute
				let camelName = __camelize(mutation.attributeName);
				// let camelName = this._newAttribute(mutation.attributeName);
				// console.warn('mutation', mutation.attributeName);

				this._digestsMutation[mutation.attributeName] = true;

				// set the value
				// this.attr[camelName] = mutation.target.getAttribute(mutation.attributeName);
				// set all the objects values bound to this attribute
				if (this._bindStack.attr2obj[mutation.attributeName]) {
					// loop on each objects to update
					for (const objectPath in this._bindStack.attr2obj[mutation.attributeName]) {
						const watch = this._bindStack.attr2obj[mutation.attributeName][objectPath];

						// do not try to update an objectPath value
						// when the update comes from his update
						// if (this._digestsObject[camelName]) return;

						// if (_get(this, objectPath) !== val) {
						// console.warn('update the objectPath', watch.path, 'with value', val);
						// update the value
						_set(watch.object, watch.path, val);
						// console.log('this', this);

					}
				}
			});
			// restore the mutate state in the next loop
			setTimeout(() => {
				this._digestsMutation = {};
			});
		});
		// observe the node itself
		observer.observe(elm, {
			childList: false,
			attributes: true,
			characterData : true,
			subtree : false,
			attributeOldValue : true,
			characterDataOldValue : true
		});
	}

}
