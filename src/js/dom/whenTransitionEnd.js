import __getTransitionProperties from './getTransitionProperties'

export default function whenTransitionEnd(elm, cb = null) {
	return new Promise((resolve, reject) => {
		const transition = __getTransitionProperties(elm);
		console.log('transition', transition);
		setTimeout(() => {
			resolve();
			cb && cb();
		}, transition.totalDuration);
	});
}
