"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sprintf;

var _sprintfJs = require("sprintf-js");

/**
 * Javascript implementation of the sprintf php function.
 * >For more infos, check [this github repository](https://github.com/alexei/sprintf.js)
 *
 * @param    {String}    format    The format of the string wanted as output
 * @param    {Mixed}    ...replacements    The replacement tokens to apply to the string
 * @return    {String}    The processed string
 *
 * @example    js
 * import sprintf from 'coffeekraken-sugar/js/utils/strings/sprintf'
 * sprintf('Hello %s', 'world') // Hello World
 * const user = { name: 'Dolly' }
 * sprintf('Hello %(name)s', user) // Hello Dolly
 *
 * @author    Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 * @see    https://github.com/alexei/sprintf.js
 */
function sprintf() {
  return _sprintfJs.sprintf.apply(this, arguments);
}