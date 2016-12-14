'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = querySelectorAll;

var _isVisible = require('./isVisible');

var _isVisible2 = _interopRequireDefault(_isVisible);

var _isInViewport = require('./isInViewport');

var _isInViewport2 = _interopRequireDefault(_isInViewport);

var _closestNotVisible = require('./closestNotVisible');

var _closestNotVisible2 = _interopRequireDefault(_closestNotVisible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Enhanced proxy of the Element.querySelectorAll function that let you specify
 * if you want elements that are visible, or even that are in the viewport
 *
 * @name 		querySelectorAll
 * @param 		{String} 				selector 			The css selector to search
 * @param 		{Object} 				settings	 		The settings of the query
 * @return 		{Array}<HTMLElement> 						The founded elements
 *
 * @example 	js
 * // simple query
 * const elms = querySelectorAll('.a-cool-css-selector');
 *
 * // get elements that are in the viewport
 * const elms = querySelectorAll('.a-cool-css-selector', {
 * 		inViewport : true
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

/**
 * If we want only visible elements
 * @setting
 * @name 		visible
 * @type 		{Boolean}
 * @default 	false
 */

/**
 * If we want only elements that are in the viewport
 * @setting
 * @name 		inViewport
 * @type 		{Boolean}
 * @default 	false
 */

/**
 * The root node to start the query from
 * @setting
 * @name 		rootNode
 * @type 		{HTMLElement}
 * @default 	document.body
 */

function querySelectorAll(selector) {
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  // extend settings
  settings = _extends({
    visible: null,
    inViewport: null,
    rootNode: document.body
  }, settings);

  // results array
  var results = [];

  // grab the element into the dom
  var elms = settings.rootNode.querySelectorAll(selector);

  // loop on the found elements
  [].forEach.call(elms, function (elm) {
    // check settings
    if (settings.visible) {
      if (!(0, _isVisible2.default)(elm) || !(0, _closestNotVisible2.default)(elm)) return;
    }
    if (settings.inViewport) {
      if (!(0, _isInViewport2.default)(elm)) return;
    }

    // add the element to the result array
    results.push(elm);
  });

  // return the elements
  return results;
}