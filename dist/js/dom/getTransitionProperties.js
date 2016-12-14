'use strict';

exports.__esModule = true;
exports.default = getTransitionProperties;

var _getStyleProperty = require('./getStyleProperty');

var _getStyleProperty2 = _interopRequireDefault(_getStyleProperty);

var _autoCast = require('../utils/string/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

var _toMs = require('../utils/string/toMs');

var _toMs2 = _interopRequireDefault(_toMs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the css transition properties from an HTMLElement in an object format
 *
 * @name 		getTransitionProperties
 * @param 		{HTMLElement} 					elm  		The element to get the properties from
 * @return 		{Object} 									The animation properties
 *
 * @example  	js
 * import getTransitionProperties from 'sugarcss/js/dom/getTransitionProperties'
 * const props = getTransitionProperties(myCoolHTMLElement);
 * // output format
 * // {
 * // 	property : ['all'],
 * // 	duration : [200],
 * // 	delay : [0],
 * // 	timingFunction : ['linear'],
 * // 	totalDuration : 200
 * // }
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
 */

function splitIfNeeded(what, separator) {
	if (what.indexOf(separator) !== -1) {
		return what.split(separator).map(function (item) {
			return item.trim();
		});
	}
	return [what];
}

function getTransitionProperties(elm) {
	// get the transition properties
	var property = (0, _getStyleProperty2.default)(elm, 'transition-property');
	var duration = (0, _getStyleProperty2.default)(elm, 'transition-duration') || 0;
	var timingFunction = (0, _getStyleProperty2.default)(elm, 'transition-timing-function');
	var delay = (0, _getStyleProperty2.default)(elm, 'transition-delay');

	// return the transition object
	var props = {
		property: splitIfNeeded(property, ','),
		duration: splitIfNeeded(duration, ',').map(function (value) {
			return (0, _toMs2.default)(value);
		}),
		delay: splitIfNeeded(delay, ',').map(function (value) {
			return (0, _toMs2.default)(value);
		}),
		timingFunction: splitIfNeeded(timingFunction, ',')
	};
	var totalDuration = 0;
	var i = 0;
	var delays = [0].concat(props.delay);
	[0].concat(props.duration).forEach(function (val) {
		if (val + delays[i] > totalDuration) {
			totalDuration = val + delays[i];
		}
		i++;
	});
	props.totalDuration = totalDuration;
	return props;
}