'use strict';

exports.__esModule = true;

var _SWatcher = require('./SWatcher');

var _SWatcher2 = _interopRequireDefault(_SWatcher);

var _camelize = require('../utils/string/camelize');

var _camelize2 = _interopRequireDefault(_camelize);

var _uncamelize = require('../utils/string/uncamelize');

var _uncamelize2 = _interopRequireDefault(_uncamelize);

var _autoCast = require('../utils/string/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

var _uniqid = require('../utils/uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

var _set2 = require('lodash/set');

var _set3 = _interopRequireDefault(_set2);

var _dispatchEvent = require('../dom/dispatchEvent');

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * @name 		SBinder
                                                                                                                                                           * This class allows to bind properties between objects, object to HTMLElement attribute and vice versa.
                                                                                                                                                           *
                                                                                                                                                           * @example		js
                                                                                                                                                           * const binder = new SBinder();
                                                                                                                                                           *
                                                                                                                                                           * // keep in sync the myObject2.title with the myObject1.title property
                                                                                                                                                           * binder.bindObjectPath2ObjectPath(myObject1, 'title', myObject2, 'title');
                                                                                                                                                           *
                                                                                                                                                           * // update and HTMLElement attribute when the myObject1.title is updated
                                                                                                                                                           * binder.bindObjectPath2ElementAttribute(myObject1, 'title', myHTMLElement, 'title');
                                                                                                                                                           *
                                                                                                                                                           * // and more...
                                                                                                                                                           *
                                                                                                                                                           * @author		Olivier Bossel<olivier.bossel@gmail.com>
                                                                                                                                                           */

var SBinder = function () {

	/**
  * @constructor
  */


	/**
  * Store all the mutation observers that are used to
  * be notified when attributes are updated
  * @type 		{Array}
  */
	function SBinder() {
		_classCallCheck(this, SBinder);

		this._bindStack = {
			attr2obj: {},
			obj2attr: {}
		};
		this._mutationObservedElementsStack = [];
		this._digestsMutation = new Map();

		// init new watcher
		this._watcher = new _SWatcher2.default();
	}

	/**
  * Bind object path 2 object path
  * @param 		{Object} 	object1 	The source object that will be watched
  * @param 		{String} 	path1 		The property path on the source object to watch
  * @param 		{Object} 	object2 	The destination object that will be updated
  * @param 		{String} 	path2 		The property path on the destination object to update
  * @return 		{SBinder} 				The binder instance to allow chainability
  */


	/**
  * Store for each binded HTMLElement if each binded attributes are
  * in digest phase to avoid multiple assignement of the same attribute
  * in each digest phase
  * @type 		{Map}
  */


	/**
  * Store all the bind objects settings
  * @type 		{Object}
  */


	SBinder.prototype.bindObjectPath2ObjectPath = function bindObjectPath2ObjectPath(object1, path1, object2, path2) {
		// watch the path to update the attribute accordingly
		this._watcher.watch(object1, path1, function (newVal, oldVal) {
			// do nothing is no
			if (newVal === oldVal) return;

			// set the new value
			(0, _set3.default)(object2, path2, newVal);
		});
		return this;
	};

	/**
  * Bind element attribute to object path
  * @param 		{HTMLElement} 	elm 		The source html element that will be watched
  * @param 		{String} 		attribute  	The attribute name to watch on the element
  * @param 		{Object} 		object 		The destination object that will be updated
  * @param 		{String} 		path 		The property path on the destination object to update
  * @return 		{SBinder} 					The binder instance to allow chainability
  */


	SBinder.prototype.bindElementAttribute2ObjectPath = function bindElementAttribute2ObjectPath(elm, attribute, object, path) {

		// generate an bindId in the object if not already exist
		if (!object._binderId) object._binderId = 's-binder-' + (0, _uniqid2.default)();

		// observe the element
		this._observeDomElement(elm);

		// attr2obj
		if (!this._bindStack.attr2obj[attribute]) this._bindStack.attr2obj[attribute] = {};
		if (!this._bindStack.attr2obj[attribute][object._binderId + ':' + path]) {
			this._bindStack.attr2obj[attribute][object._binderId + ':' + path] = {
				object: object,
				path: path
			};
		}
		return this;
	};

	/**
  * Bind object path to element attribute
  * @param 		{Object} 		object 		The source object that will be watched
  * @param 		{String} 		path 		The property path on the source object to watch
  * @param 		{HTMLElement}	elm 		The HTMLElement that will be updated
  * @param 		{String} 		attribute 	The attribute to update on the element
  * @return 		{SBinder} 					The binder instance to allow chainability
  */


	SBinder.prototype.bindObjectPath2ElementAttribute = function bindObjectPath2ElementAttribute(object, path, elm, attribute) {
		var _this = this;

		// generate an bindId in the object if not already exist
		if (!object._binderId) object._binderId = 's-binder-' + (0, _uniqid2.default)();

		// obj2attr
		if (!this._bindStack.obj2attr[object._binderId + ':' + path]) this._bindStack.obj2attr[object._binderId + ':' + path] = {};
		if (!this._bindStack.obj2attr[object._binderId + ':' + path][attribute]) {
			this._bindStack.obj2attr[object._binderId + ':' + path][attribute] = {
				elm: elm,
				attribute: attribute
			};
		}

		// watch the path to update the attribute accordingly
		this._watcher.watch(object, path, function (newVal, oldVal) {
			// get the digest attribute stack from the element
			var digest = _this._digestsMutation.get(elm);

			if (digest && digest[attribute]) return;
			if (newVal === oldVal) return;

			// loop on all attributes to update
			for (var _attribute in _this._bindStack.obj2attr[object._binderId + ':' + path]) {
				var watch = _this._bindStack.obj2attr[object._binderId + ':' + path][_attribute];

				// prevent from multiple same attribute assignement in the same digest process
				if (digest && digest[watch.attribute]) continue;
				if (!digest) digest = {};
				digest[watch.attribute] = true;
				_this._digestsMutation.set(elm, digest);

				// update the attribute
				watch.elm.setAttribute((0, _uncamelize2.default)(watch.attribute), newVal);

				// if the attribute is the value, trigger a change event
				// if (__uncamelize(watch.attribute) === 'value') {
				// 	elm.value = newVal;
				// 	__dispatchEvent(watch.elm, 'change');
				// }
			}
		});
		return this;
	};

	/**
  * Destroy the binder
  */


	SBinder.prototype.destroy = function destroy() {}
	// @TODO binder destroy implementation


	/**
  * Observe DOM element
  * @param 		{HTMLElement} 	elm 	The element to watch
  */
	;

	SBinder.prototype._observeDomElement = function _observeDomElement(elm) {
		var _this2 = this;

		// check if already observe the element
		if (this._mutationObservedElementsStack.indexOf(elm) !== -1) return;
		this._mutationObservedElementsStack.push(elm);

		// check attributes changes to update settings
		var observer = new MutationObserver(function (mutations) {
			// loop on mutations
			mutations.forEach(function (mutation) {
				// update the attr property
				var val = (0, _autoCast2.default)(elm.getAttribute(mutation.attributeName));

				// make a new attribute
				var camelName = (0, _camelize2.default)(mutation.attributeName);

				// set that we are digesting this attribute on this element
				var digest = _this2._digestsMutation.get(elm);
				if (!digest) digest = {};
				digest[mutation.attributeName] = true;
				_this2._digestsMutation.set(elm, digest);

				// set all the objects values bound to this attribute
				if (_this2._bindStack.attr2obj[mutation.attributeName]) {
					// loop on each objects to update
					for (var objectPath in _this2._bindStack.attr2obj[mutation.attributeName]) {
						var watch = _this2._bindStack.attr2obj[mutation.attributeName][objectPath];

						// update the value
						(0, _set3.default)(watch.object, watch.path, val);
					}
				}
			});
			// restore the mutate state in the next loop
			setTimeout(function () {
				_this2._digestsMutation = new Map();
			});
		});
		// observe the node itself
		observer.observe(elm, {
			childList: false,
			attributes: true,
			characterData: true,
			subtree: false,
			attributeOldValue: true,
			characterDataOldValue: true
		});
	};

	return SBinder;
}();

exports.default = SBinder;