"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = printf;
/**
 * printf php equavalent
 * @param 		{String} 						source 			The source in which to replace the tokens
 * @param 		{Object|Array|...} 			values 			An object/array/list of values to replace
 * @return 	{String} 										The resulting string
 *
 * @example
 * printf('Hello %s', 'world'); // => Hello world
 * printf('Hello %s, I\'m %s', 'world', 'John Doe'); // Hello world, I'm John Doe
 * printf('Hello %s, I\'m %s', ['world', 'John Doe']); // Hello world, I'm John Doe
 * printf('Hello {first}, I\'m {name}', { first : 'world', name : 'John Doe'}); // Hello world, I'm John Doe
 *
 * @see 				https://monocleglobe.wordpress.com/2010/01/12/everybody-needs-a-little-printf-in-their-javascript/
 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
 */
function printf(source, values) {
	var useArguments = false;
	var _arguments = arguments;
	var i = 0;
	if (typeof _arguments[1] == "string") {
		useArguments = true;
	}
	if (values instanceof Array || useArguments) {
		return source.replace(/\%s/g, function (a, b) {
			i++;
			if (useArguments) {
				if (typeof _arguments[i] == 'string') {
					return _arguments[i];
				} else {
					throw new Error("Arguments element is an invalid type");
				}
			}
			return values[i];
		});
	} else {
		return source.replace(/{([^{}]*)}/g, function (a, b) {
			var r = values[b];
			return typeof r === 'string' || typeof r === 'number' ? r : a;
		});
	}
}