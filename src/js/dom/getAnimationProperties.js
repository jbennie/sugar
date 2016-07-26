import getStyleProperty from './getStyleProperty';
import toMs from '../string/toMs';

function splitIfNeeded(what, separator) {
	if (what.indexOf(separator) !== -1) {
		return what.split(separator).map((item) => item.trim());
	}
	return what;
}

export default function getAnimationProperties(elm) {
	// get the animation properties
	const name = getStyleProperty(elm, 'animation-name') || '';
	const duration = getStyleProperty(elm, 'animation-duration') || '0s';
	const timingFunction = getStyleProperty(elm, 'animation-timing-function') || 'linear';
	const delay = getStyleProperty(elm, 'animation-delay') || '0s';
	const iterationCount = getStyleProperty(elm, 'animation-iteration-count') || 1;
	const direction = getStyleProperty(elm, 'animation-direction') || 'normal';

	// return the animation object
	const props = {
		name : name.split(','),
		duration : duration.split(',').map((value) => toMs(value)),
		delay : delay.split(',').map((value) => toMs(value)),
		timingFunction : timingFunction.split(','),
		iterationCount : `${iterationCount}`.split(','),
		direction : direction.split(',')
	};
	let totalDuration = 0;
	let i = 0;
	const delays = [0].concat(props.delay);
	[0].concat(props.duration).forEach((val) => {
		if (val + delays[i] > totalDuration) {
			totalDuration = val + delays[i];
		}
	});
	props.totalDuration = totalDuration;
	return props;
}
