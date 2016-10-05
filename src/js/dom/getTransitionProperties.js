import getStyleProperty from './getStyleProperty';
import autoCast from '../utils/string/autoCast';
import toMs from '../utils/string/toMs';

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
		return what.split(separator).map((item) => item.trim());
	}
	return [what];
}

export default function getTransitionProperties(elm) {
	// get the transition properties
	const property = getStyleProperty(elm, 'transition-property');
	const duration = getStyleProperty(elm, 'transition-duration') || 0;
	const timingFunction = getStyleProperty(elm, 'transition-timing-function');
	const delay = getStyleProperty(elm, 'transition-delay');

	// return the transition object
	const props = {
		property : splitIfNeeded(property,','),
		duration : splitIfNeeded(duration,',').map((value) => toMs(value)),
		delay : splitIfNeeded(delay,',').map((value) => toMs(value)),
		timingFunction : splitIfNeeded(timingFunction,',')
	};
	let totalDuration = 0;
	let i = 0;
	const delays = [0].concat(props.delay);
	[0].concat(props.duration).forEach((val) => {
		if (val + delays[i] > totalDuration) {
			totalDuration = val + delays[i];
		}
		i++;
	});
	props.totalDuration = totalDuration;
	return props;
}
