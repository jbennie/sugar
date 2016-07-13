import SComponent from '../core/SComponent';
import SParticleElement from './SParticleElement';
import setRecursiveTimeout from '../functions/setRecursiveTimeout';

class SParticlesSystemComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sParticlesSystem', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sParticlesSystem') {
		super(name, elm, {
			emitterX : 0,
			emitterY : 0,
			spread : 0,
			amount : 5,
			timeoutSpread : 0,
			duration : null,
			particleClass : null,
			particleClassSelection : 'random',
			onComplete : null
		}, settings);

		// init
		this.initProxy(this._init.bind(this));
	}

	/**
	 * Init
	 */
	_init() {

		let particleClsIdx = 0;

		// init the particle creation system
		setRecursiveTimeout((idx) => {
			// create new particle
			const particleElm = document.createElement('div');

			// set particle position
			particleElm.style.top = this.settings.emitterY;
			particleElm.style.left = this.settings.emitterX;
			particleElm.style.marginLeft = (- this.settings.spread + Math.round(Math.random() * this.settings.spread * 2)) + 'px';
			particleElm.style.marginRight = (- this.settings.spread + Math.round(Math.random() * this.settings.spread * 2)) + 'px';

			let cls = this.settings.particleClass;
			if (cls instanceof Array) {
				if (this.settings.particleClassSelection === 'random') {
					cls = Math.round(Math.random() * (cls.length - 1));
				} else {
					cls = cls[particleClsIdx];
					particleClsIdx = (particleClsIdx+1 < cls.length-1) ? particleClsIdx+1 : 0;
				}
			}
			if (this.settings.particleClass) {
				particleElm.classList.add(this.settings.particleClass);
			}
			const particle = new SParticleElement(particleElm, {
				class : cls
			});
			// add the particle to the element
			this.elm.appendChild(particleElm);

		}, this.settings.duration / this.settings.amount, this.settings.duration, this.settings.timeoutSpread);

		// detect the end of the particles
		// setTimeout(() => {
		// 	if (this.settings.onComplete) this.settings.onComplete();
		// }, this.settings.duration + 1000 / this.settings.amount);

	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SParticlesSystemComponent = SParticlesSystemComponent;

// export modules
export default SParticlesSystemComponent;
