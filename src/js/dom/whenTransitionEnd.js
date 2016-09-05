import __getTransitionProperties from './getTransitionProperties'

export default function whenTransitionEnd(elm, cb = null) {
	return new Promise((resolve, reject) => {
		const transition = __getTransitionProperties(elm);
		setTimeout(() => {
			resolve();
			cb && cb();
		}, transition.totalDuration);
	});
}
