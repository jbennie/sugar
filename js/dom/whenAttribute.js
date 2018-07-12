'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = whenAttribute;

var _attributesObservable = require('./attributesObservable');

var _attributesObservable2 = _interopRequireDefault(_attributesObservable);

var _autoCast = require('../utils/string/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Resolve a promise when the wanted attribute on the passed HTMLElement exist or pass the check function provided
 *
 * @name 		whenAttribute
 * @param 		{HTMLElement} 				elm 				The HTMLElement on which to monitor the property
 * @param 		{String} 					attribute 			The attribute to monitor
 * @param 		{Function} 					[checkFn=null] 		An optional function to check the attribute. The promise is resolved when this function return true
 * @return 		(Promise) 										The promise that will be resolved when the attribute exist on the element (and that it passes the checkFn)
 *
 * @example 	js
 * import whenAttribute from 'sugarcss/js/dom/whenAttribute'
 * whenAttribute(myCoolHTMLElement, 'value').then((value) => {
 * 		// the value attribute exist on the element
 * });
 * // with a checkFn
 * whenAttribute(myCoolHTMLElement, 'value', (newVal, oldVal) => {
 * 		// make sure the value is a number
 * 		return typeof(newVal) === 'number';
 * }).then((value) => {
 * 		// do something with your number value...
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function whenAttribute(elm, attrName) {
	var checkFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	return new Promise(function (resolve, reject) {

		if (elm.hasAttribute(attrName)) {
			var value = (0, _autoCast2.default)(elm.getAttribute(attrName));
			if (checkFn && checkFn(value, value)) {
				resolve(value);
				return;
			} else if (!checkFn) {
				resolve(value);
				return;
			}
		}

		var obs = (0, _attributesObservable2.default)(elm).subscribe(function (mutation) {
			if (mutation.attributeName === attrName) {
				var _value = (0, _autoCast2.default)(mutation.target.getAttribute(mutation.attributeName));
				if (checkFn && checkFn(_value, mutation.oldValue)) {
					resolve(_value);
					obs.unsubscribe();
				} else if (!checkFn) {
					resolve(_value);
					obs.unsubscribe();
				}
			}
		});
	});
}