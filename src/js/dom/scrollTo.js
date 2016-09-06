import __easings from '../tools/easings';

function scrollTo(target, duration, easing, padding, align, onFinish) {
	padding = padding ? padding : 0;
	var docElem = document.documentElement; // to facilitate minification better
	var windowHeight = docElem.clientHeight;
	var maxScroll = ( 'scrollMaxY' in window ) ? window.scrollMaxY : (docElem.scrollHeight - windowHeight);
	var currentY = window.pageYOffset;

	var targetY = currentY;
	var elementBounds = isNaN(target) ? target.getBoundingClientRect() : 0;

	if (align === "center") {
		targetY += isNaN(target) ? (elementBounds.top + elementBounds.height/2) : target;
		targetY -= windowHeight / 2;
		targetY -= padding
	}
	else if (align === "bottom") {
		targetY += elementBounds.bottom || target;
		targetY -= windowHeight;
		targetY += padding
	}
	else { // top, undefined
		targetY += elementBounds.top || target;
		targetY -= padding
	}
	targetY = Math.max(Math.min(maxScroll, targetY), 0);

	var deltaY = targetY - currentY;

	var obj = {
		targetY: targetY,
		deltaY: deltaY,
		duration: (duration) ? duration : 0,
		easing: (easing in scrollTo.Easing) ? scrollTo.Easing[easing] : scrollTo.Easing.linear,
		onFinish: onFinish,
		startTime: Date.now(),
		lastY: currentY,
		step: scrollTo.step,
	};

	window.requestAnimationFrame(obj.step.bind(obj));
}

// set easings
scrollTo.Easing = __easings;

scrollTo.step = function () {
	if (this.lastY !== window.pageYOffset && this.onFinish) {
		this.onFinish();
		return;
	}

	// Calculate how much time has passed
	var t = Math.min((Date.now() - this.startTime) / this.duration, 1);

	// Scroll window amount determined by easing
	var y = this.targetY - ((1 - this.easing(t)) * (this.deltaY));
	window.scrollTo(window.scrollX, y);

	// Continue animation as long as duration hasn't surpassed
	if (t !== 1) {
		this.lastY = window.pageYOffset;
		window.requestAnimationFrame(this.step.bind(this));
	} else {
		if (this.onFinish) this.onFinish();
	}
}

export default scrollTo;
