'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Function that let you make a smooth page scroll to a specific element in the page
 *
 * @param 		{HTMLElement} 				target 			The element to scroll to
 * @param 		{Number} 					duration 		The animation duration
 * @param 		{Function} 					easing 			An easing Function
 * @param 		{Number} 					offset 			The destination offset
 * @param 		{String} 					align 			The destination align (top, center, bottom)
 * @param 		{Function} 					onFinish 		A callback to call when the animation if finished
 *
 * @name 		scrollTo
 * @example 	js
 * import scrollTop from 'sugarcss/js/dom/scrollTo'
 * import easeInOutQuad from 'sugarcss/js/easings/easeInOutQuad'
 * scrollTo(myCoolHTMLElement, 2000, easeInOutQuad);
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
var isUserScrolling = false;
var userScrollingTimeout = void 0;
var isScrollingHappening = false;
document.addEventListener('mousewheel', function (e) {
	if (!isScrollingHappening) return;
	isUserScrolling = true;
	clearTimeout(userScrollingTimeout);
	userScrollingTimeout = setTimeout(function () {
		isUserScrolling = false;
	}, 200);
});

function scrollTo(target, duration, easing, offset, align, onFinish) {
	offset = offset ? offset : 0;
	var docElem = document.documentElement; // to facilitate minification better
	var windowHeight = docElem.clientHeight;
	var maxScroll = 'scrollMaxY' in window ? window.scrollMaxY : docElem.scrollHeight - windowHeight;
	var currentY = window.pageYOffset;

	isScrollingHappening = true;

	var targetY = currentY;
	var elementBounds = isNaN(target) ? target.getBoundingClientRect() : 0;

	if (align === "center") {
		targetY += elementBounds.top + elementBounds.height / 2;
		targetY -= windowHeight / 2;
		targetY -= offset;
	} else if (align === "bottom") {
		targetY += elementBounds.bottom;
		targetY -= windowHeight;
		targetY += offset;
	} else {
		// top, undefined
		targetY += elementBounds.top;
		targetY -= offset;
	}
	targetY = Math.max(Math.min(maxScroll, targetY), 0);

	var deltaY = targetY - currentY;

	var obj = {
		targetY: targetY,
		deltaY: deltaY,
		duration: duration ? duration : 0,
		easing: easing || function (t) {
			return t;
		},
		onFinish: onFinish,
		startTime: Date.now(),
		lastY: currentY,
		step: scrollTo.step
	};
	window.requestAnimationFrame(obj.step.bind(obj));
}

scrollTo.step = function () {
	if (this.lastY !== window.pageYOffset && this.onFinish) {
		isScrollingHappening = false;
		this.onFinish();
		return;
	}

	// Calculate how much time has passed
	var t = Math.min((Date.now() - this.startTime) / this.duration, 1);

	// Scroll window amount determined by easing
	var y = this.targetY - (1 - this.easing(t)) * this.deltaY;
	window.scrollTo(window.scrollX, y);

	// Continue animation as long as duration hasn't surpassed
	if (t !== 1 && !isUserScrolling) {
		this.lastY = window.pageYOffset;
		window.requestAnimationFrame(this.step.bind(this));
	} else {
		isScrollingHappening = false;
		if (this.onFinish) this.onFinish();
	}
};

exports.default = scrollTo;