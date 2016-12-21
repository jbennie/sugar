"use strict";

exports.__esModule = true;
exports.default = isEmail;
/**
 * Check if the passed value is a valid email address
 *
 * @name 		isEmail
 * @param 		{Mixed} 		value 		The value to check
 * @return 		{Boolean} 					The check result
 *
 * @example 	js
 * isEmail('john.doe@gmail.com') => true
 * isEmail('plop@yop.com') => true
 * isEmail('hello') => false
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */
function isEmail(data) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(data);
}