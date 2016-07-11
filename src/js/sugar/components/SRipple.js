/*
 * Sugar-activate.js
#
 * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
#
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  20.01.16
 * @updated  20.01.16
 * @version  1.0.0
 */
import SComponent from '../core/SComponent'
import __querySelectorLive from '../dom/querySelectorLive'
import __getAnimationProperties from '../dom/getAnimationProperties';
import __next from '../dom/next'
import __previous from '../dom/previous'
import __offset from '../dom/offset'
import __scrollTop from '../dom/scrollTop'
import __uniqid from '../tools/uniqid'
import SEvent from '../core/SEvent'

import debounce from '../functions/debounce';

// class
class SRipple extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sRipple', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sRipple') {
		super(name, elm, {
			delay : 150, // delay in ms between each ripple
			count : 1, // number of ripple to trigger on click
			spread : 0, // spread distance for each ripple
		}, settings);

		// listen for click
		this.elm.addEventListener('click', this.handleClick.bind(this));

		// init
		this.initProxy(this._init.bind(this));
	}

	/**
	 * Build html
	 */
	getHtml() {

		// container
		const container = document.createElement('div');
		container.classList.add('s-ripple');
		let rippleItem = null;

		// create each ripples
		// for(let i=0; i<this.settings.count; i++) {
		// 	const ripple = document.createElement('div');
		// 	ripple.classList.add('s-ripple__ripple');
		// 	container.appendChild(ripple);
		// 	if (i===0) this.rippleItem = ripple;
		// }

		// save into instance
		return container;
	}

	/**
	 * Add ripple element
	 */
	addRippleItemTo(container) {
		console.log('add');
		const item = document.createElement('div');
		item.classList.add('s-ripple__ripple');
		container.appendChild(item);
		return item;
	}

	/**
	 * Handle click
	 */
	handleClick(e) {
		const html = this.getHtml();


		// add a new ripple
		this.elm.appendChild(html);

		console.log(e);

		// set position if needed
		const position = this.elm.style.position;
		if ( ! position) {
			console.log('set relative');
			this.elm.style.position = 'relative';
		}

		for(let i=0; i<this.settings.count; i++) {
			if (i === 0) {
				const item = this.addRippleItemTo(html);
				item.style.top = e.offsetY + 'px';
				item.style.left = e.offsetX + 'px';
			} else {
				setTimeout(() => {
					const item = this.addRippleItemTo(html);
					item.style.top = e.offsetY + 'px';
					item.style.left = e.offsetX + 'px';
				},this.settings.delay * i);
			}
		}

		const firstItem = html.firstChild;

		// get animation
		const animation = __getAnimationProperties(firstItem);

		// wait till the animation is finished
		setTimeout(() => {
			// remove the html
			this.elm.removeChild(html);
		}, animation.totalDuration + (this.settings.count * this.settings.delay));
	}

	/**
	 * On added to dom
	 */
	_init() {
		if (this._inited) return;
		this._inited = true;
	}
}

// init the select
__querySelectorLive('[s-ripple]', (elm) => {
	new SRipple(elm);
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SRipple = SRipple;

// export modules
export default SRipple;
