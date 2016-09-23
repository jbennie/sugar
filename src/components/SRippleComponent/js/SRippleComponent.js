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
			delay : 130, // delay in ms between each ripple
			count : 1, // number of ripple to trigger on click
			spread : 0, // spread distance for each ripple
			class : 's-ripple' // the class that will be applied on each ripples
		}, settings);
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
		particlesSystemElm.setAttribute(`${this.componentNameDash}-container`,true);
		const particleElm = document.createElement('div');
		particleElm.setAttribute(`${this.componentNameDash}-particle`, true);
		const elmOffset = __offset(this.elm);
		const particlesSystem = new SParticlesSystemComponent(particlesSystemElm, {
			emitterX : (e.pageX - elmOffset.left) + 'px',
			emitterY : (e.pageY - elmOffset.top) + 'px',
			amount : this.settings.count,
			spread : this.settings.spread,
			particleElm : particleElm,
			duration : this.settings.delay * this.settings.count,
			onComplete : () => {
				particlesSystemElm.parentNode.removeChild(particlesSystemElm);
			}
		});

		// set position if needed
		const position = this.elm.style.position;
		if ( ! position) {
			this.elm.style.position = 'relative';
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
