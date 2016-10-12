import SComponent from '../../../js/core/SComponent';
import SParticleComponent from '../../SParticleComponent';
import setRecursiveTimeout from '../../../js/utils/functions/setRecursiveTimeout';
import querySelectorLive from '../../../js/dom/querySelectorLive';

class SParticlesSystemComponent extends SComponent {

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sParticlesSystem') {
		super(elm, {
			emitterX : 0,
			emitterY : 0,
			spread : 0,
			amount : 5,
			timeoutSpread : 0,
			duration : null,
			particleClass : null,
			particleElm : null,
			particleClassSelection : 'random',
			onComplete : null,
			...settings
		}, name);
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		let particleClsIdx = 0;

		// init the particle creation system
		setRecursiveTimeout((idx) => {
			// create new particle
			let particleElm = document.createElement('div');
			if (this.settings.particleElm) {
				particleElm = this.settings.particleElm.cloneNode(true);
			}

			// set particle position
			particleElm.style.top = this.settings.emitterY;
			particleElm.style.left = this.settings.emitterX;
			particleElm.style.marginLeft = (- this.settings.spread + Math.round(Math.random() * this.settings.spread * 2)) + 'px';
			particleElm.style.marginRight = (- this.settings.spread + Math.round(Math.random() * this.settings.spread * 2)) + 'px';

			// add attributes to particle if needed

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
			const particle = new SParticleComponent(particleElm, {
				class : cls
			});
			// add the particle to the element
			this.elm.appendChild(particleElm);

		}, this.settings.duration / this.settings.amount, this.settings.duration, this.settings.timeoutSpread);

		// detect the end of the particles
		setTimeout(() => {
			if (this.settings.onComplete) this.settings.onComplete();
		}, this.settings.duration + 1000 / this.settings.amount);

	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SParticlesSystemComponent = SParticlesSystemComponent;

// export modules
export default SParticlesSystemComponent;
