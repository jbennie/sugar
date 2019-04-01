'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = getAnimationProperties;

var _getStyleProperty = require('./getStyleProperty');

var _getStyleProperty2 = _interopRequireDefault(_getStyleProperty);

var _toMs = require('../utils/strings/toMs');

var _toMs2 = _interopRequireDefault(_toMs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the css animation properties from an HTMLElement in an object format
 *
 * @name 		getAnimationProperties
 * @param 		{HTMLElement} 					elm  		The element to get the properties from
 * @return 		{Object} 									The animation properties
 *
 * @example  	js
 * import getAnimationProperties from 'sugarcss/js/dom/getAnimationProperties'
 * const props = getAnimationProperties(myCoolHTMLElement);
 * // output format
 * // {
 * // 	name : ['animation1'],
 * // 	duration : [200],
 * // 	delay : [0],
 * // 	timingFunction : ['linear'],
 * // 	iterationCount : [1],
 * // 	direction : ['forward'],
 * // 	totalDuration : 200
 * // }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */

function splitIfNeeded(what, separator) {
	if (what.indexOf(separator) !== -1) {
		return what.split(separator).map(function (item) {
			return item.trim();
		});
	}
	return what;
}
function getAnimationProperties(elm) {
	// get the animation properties
	var name = (0, _getStyleProperty2.default)(elm, 'animation-name') || '';
	var duration = (0, _getStyleProperty2.default)(elm, 'animation-duration') || '0s';
	var timingFunction = (0, _getStyleProperty2.default)(elm, 'animation-timing-function') || 'linear';
	var delay = (0, _getStyleProperty2.default)(elm, 'animation-delay') || '0s';
	var iterationCount = (0, _getStyleProperty2.default)(elm, 'animation-iteration-count') || 1;
	var direction = (0, _getStyleProperty2.default)(elm, 'animation-direction') || 'normal';

	// return the animation object
	var props = {
		name: name.split(','),
		duration: duration.split(',').map(function (value) {
			return (0, _toMs2.default)(value);
		}),
		delay: ('' + delay).split(',').map(function (value) {
			return (0, _toMs2.default)(value);
		}),
		timingFunction: timingFunction.split(','),
		iterationCount: ('' + iterationCount).split(','),
		direction: direction.split(',')
	};
	var totalDuration = 0;
	var i = 0;
	var delays = [0].concat(props.delay);
	[0].concat(props.duration).forEach(function (val) {
		if (val + delays[i] > totalDuration) {
			totalDuration = val + delays[i];
		}
	});
	props.totalDuration = totalDuration;
	return props;
}