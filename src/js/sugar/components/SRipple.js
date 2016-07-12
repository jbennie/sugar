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
import __querySelectorVisibleLiveOnce from '../dom/querySelectorVisibleLiveOnce'
import __getAnimationProperties from '../dom/getAnimationProperties';
import __next from '../dom/next'
import __previous from '../dom/previous'
import __offset from '../dom/offset'
import __scrollTop from '../dom/scrollTop'
import __uniqid from '../tools/uniqid'
import SEvent from '../core/SEvent'
import __requestAnimationFrame from '../dom/requestAnimationFrame';

import SParticlesSystemElement from './SParticlesSystemElement';
import setRecursiveTimeout from '../functions/setRecursiveTimeout';

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
	 * Container
	 */
	containerElm = null;

	/**
	 * Ripple elements
	 */
	rippleElms = [];

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sRipple') {
		super(name, elm, {
			delay : 50, // delay in ms between each ripple
			count : 2, // number of ripple to trigger on click
			spread : 0, // spread distance for each ripple
			class : 's-ripple' // the class that will be applied on each ripples
		}, settings);

		console.log('settings', this.settings);

		// const clear = setRecursiveTimeout(() => {
		// 	console.log('Howo');
		// }, 100, 2000, 0);

		// init
		this.initProxy(this._init.bind(this));
	}

	/**
	 * On added to dom
	 */
	_init() {
		if (this._inited) return;
		this._inited = true;

		console.log('INIT ripple');

		// listen for click
		this.elm.addEventListener('click', this.handleClick.bind(this));
	}

	/**
	 * Handle click
	 */
	handleClick(e) {
		// create new particle system
		const particlesSystemElm = document.createElement('div');
		particlesSystemElm.classList.add('s-ripple-container');

		const particlesSystem = new SParticlesSystemElement(particlesSystemElm, {
			emitterX : e.offsetX + 'px',
			emitterY : e.offsetY + 'px',
			amount : this.settings.count,
			spread : this.settings.spread,
			particleClass : this.settings.class,
			duration : this.settings.delay * this.settings.count,
			onComplete : () => {
				particlesSystemElm.parentNode.removeChild(particlesSystemElm);
			}
		});

		// add a new ripple
		this.elm.appendChild(particlesSystemElm);

		// set position if needed
		const position = this.elm.style.position;
		if ( ! position) {
			this.elm.style.position = 'relative';
		}
	}
}

// init the select
__querySelectorVisibleLiveOnce('[s-ripple]', (elm) => {
	new SRipple(elm);
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SRipple = SRipple;

// export modules
export default SRipple;
