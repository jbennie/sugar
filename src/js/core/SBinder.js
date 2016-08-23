import SWatcher from './SWatcher';
import __camelize from '../string/camelize';
import __uncamelize from '../string/uncamelize';
import __autoCast from '../string/autoCast'
import __uniqid from '../tools/uniqid';
import _set from 'lodash/set';
import __dispatchEvent from '../dom/dispatchEvent';

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
	 * Bind object path 2 object path
	 */
	bindObjectPath2ObjectPath(object1, path1, object2, path2) {

		if (path1 === 'settings.pages') {
			console.warn('Bind object', object1, path1, object2, path2);
		}

		// watch the path to update the attribute accordingly
		this.watcher.watch(object1, path1, (newVal, oldVal) => {
			// do nothing is no
			if (newVal === oldVal) return;

			// set the new value
			_set(object2, path2, newVal);
		});

	}

	/**
	 * Bind element attribute to object path
	 */
	bindElementAttribute2ObjectPath(elm, attribute, object, path) {

		// generate an bindId in the object if not already exist
		if ( ! object._sBinderId) object._sBinderId = `s-binder-${__uniqid()}`;

		// observe the element
		this._observeDomElement(elm);

		// attr2obj
		if ( ! this._bindStack.attr2obj[attribute]) this._bindStack.attr2obj[attribute] = {};
		if ( ! this._bindStack.attr2obj[attribute][`${object._sBinderId}:${path}`]) {
			this._bindStack.attr2obj[attribute][`${object._sBinderId}:${path}`] = {
				object : object,
				path : path
			};
		}

	}

	/**
	 * Bind object path to element attribute
	 */
	bindObjectPath2ElementAttribute(object, path, elm, attribute) {

		// generate an bindId in the object if not already exist
		if ( ! object._sBinderId) object._sBinderId = `s-binder-${__uniqid()}`;

		// obj2attr
		if ( ! this._bindStack.obj2attr[`${object._sBinderId}:${path}`]) this._bindStack.obj2attr[`${object._sBinderId}:${path}`] = {};
		if ( ! this._bindStack.obj2attr[`${object._sBinderId}:${path}`][attribute]) {
			this._bindStack.obj2attr[`${object._sBinderId}:${path}`][attribute] = {
				elm : elm,
				attribute : attribute
			};
		}

		// watch the path to update the attribute accordingly
		this.watcher.watch(object, path, (newVal, oldVal) => {
			// do nothing if a digest is in progress
			// if (this._digest) return;

			// console.error('_digestsMutation', this._digestsMutation, attribute);
			if (this._digestsMutation[attribute]) return;
			if (newVal === oldVal) return;

			// loop on all attributes to update
			// console.log(`${object._sBinderId}:${path}`, this._bindStack.obj2attr);
			for (const attribute in this._bindStack.obj2attr[`${object._sBinderId}:${path}`]) {
				const watch = this._bindStack.obj2attr[`${object._sBinderId}:${path}`][attribute];

				if (this._digestsMutation[watch.attribute]) continue;
				this._digestsMutation[watch.attribute] = true;

				// update the attribute
				watch.elm.setAttribute(__uncamelize(watch.attribute), newVal);

				// if the attribute is the value, trigger a change event
				if (__uncamelize(watch.attribute) === 'value') {
					elm.value = newVal;
					__dispatchEvent(watch.elm, 'change');
				}
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
				let val = __autoCast(elm.getAttribute(mutation.attributeName));
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
