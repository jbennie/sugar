'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = querySelector;

var _isVisible = require('./isVisible');

var _isVisible2 = _interopRequireDefault(_isVisible);

var _isInViewport = require('./isInViewport');

var _isInViewport2 = _interopRequireDefault(_isInViewport);

var _closestNotVisible = require('./closestNotVisible');

var _closestNotVisible2 = _interopRequireDefault(_closestNotVisible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Enhanced proxy of the Element.querySelector function that let you specify
 * if you want an element that is visible, or even that is in the viewport
 *
 * @name 		querySelector
 * @param 		{String} 			selector 			The css selector to search
 * @param 		{Object} 			settings	 		The settings of the query
 * @return 		{HTMLElement} 							The founded element
 *
 * @example 	js
 * // simple query
 * const elm = querySelector('.a-cool-css-selector');
 *
 * // get an element that is in the viewport
 * const elm = querySelector('.a-cool-css-selector', {
 * 		inViewport : true
 * });
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */

/**
 * If we want only a visible element
 * @setting
 * @name 		visible
 * @type 		{Boolean}
 * @default 	false
 */

/**
 * If we want only an element that is in the viewport
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

function querySelector(selector) {
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


  // extend settings
  settings = _extends({
    visible: null,
    inViewport: null,
    rootNode: document.body
  }, settings);

  // grab the element into the dom
  var elm = settings.rootNode.querySelector(selector);
  // if no element, stop here
  if (!elm) return null;

  // state tracking
  var isVisible = true;
  var isInViewport = true;

  // check settings
  if (settings.visible) {
    if (!(0, _isVisible2.default)(elm) || !(0, _closestNotVisible2.default)(elm)) return null;
  }
  if (settings.inViewport) {
    if (!(0, _isInViewport2.default)(elm)) return null;
  }

  // return the element
  return elm;
}