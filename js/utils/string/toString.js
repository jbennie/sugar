"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toString;

var _json = require("../is/json");

var _json2 = _interopRequireDefault(_json);

var _object = require("../is/object");

var _object2 = _interopRequireDefault(_object);

var _array = require("../is/array");

var _array2 = _interopRequireDefault(_array);

var _function = require("../is/function");

var _function2 = _interopRequireDefault(_function);

var _boolean = require("../is/boolean");

var _boolean2 = _interopRequireDefault(_boolean);

var _regexp = require("../is/regexp");

var _regexp2 = _interopRequireDefault(_regexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert passed value to a string
 * @param    {Mixed}    value    The value to convert to string
 * @return    {String}    The resulting string
 *
 * @example    js
 * import toString from 'coffeekraken-sugar/js/utils/strings/toString'
 * toString({
 * 	id:'hello'
 * }) // '{"id":"hello"}'
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
function toString(value) {
  if ((0, _object2.default)(value) || (0, _array2.default)(value) || (0, _json2.default)(value)) {
    return JSON.stringify(value);
  } else if ((0, _boolean2.default)(value)) {
    if (value) return "true";else return "false";
  } else if ((0, _function2.default)(value)) {
    return "" + value;
  } else if ((0, _regexp2.default)(value)) {
    return value.toString();
  }
}