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
import SComponent from '../../../js/core/SComponent'
import __offset from '../../../js/dom/offset'
import SParticlesSystemComponent from '../../SParticlesSystemComponent';

// class
class SRippleComponent extends SComponent {

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
		super(elm, {
			contains : true,
			centered : false,
			delay : 130, // delay in ms between each ripple
			count : 1, // number of ripple to trigger on click
			spread : 0, // spread distance for each ripple
			...settings
		}, name);
	}

	/**
	 * On added to dom
	 */
	_init() {
		// init component
		super._init();

		// listen for click
		this.elm.addEventListener('click', this.handleClick.bind(this));
	}

	/**
	 * Handle click
	 */
	handleClick(e) {
		// create new particle system
		const particlesSystemElm = document.createElement('div');
		this.addComponentClass(particlesSystemElm, 'container');
		const particleElm = document.createElement('div');
		this.addComponentClass(particleElm, 'particle');

		let emitterX, emitterY;
		if (this.settings.centered) {
			emitterX = this.elm.offsetWith * .5;
			emitterY = this.elm.offsetHeight * .5;
		} else {
			const elmOffset = __offset(this.elm);
			emitterX = e.pageX - elmOffset.left;
			emitterY = e.pageY - elmOffset.top;
		}

		const particlesSystem = new SParticlesSystemComponent(particlesSystemElm, {
			emitterX : emitterX + 'px',
			emitterY : emitterY + 'px',
			amount : this.settings.count,
			spread : this.settings.spread,
			particleElm : particleElm,
			duration : this.settings.delay * this.settings.count,
			onComplete : () => {
				if (particlesSystemElm.parentNode) {
					particlesSystemElm.parentNode.removeChild(particlesSystemElm);
				}
			}
		});

		// set position if needed
		const position = this.elm.style.position;
		if ( ! position) {
			this.elm.style.position = 'relative';
		}

		if (this.settings.contains) {
			particlesSystemElm.style.overflow = 'hidden';
		}

		// add a new ripple
		this.elm.appendChild(particlesSystemElm);
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SRippleComponent = SRippleComponent;

// export modules
export default SRippleComponent;
