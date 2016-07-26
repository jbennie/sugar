import SComponent from '../core/SComponent';
import __getAnimationProperties from '../dom/getAnimationProperties';
import querySelectorLive from '../dom/querySelectorLive';

class SParticleComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sParticle', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sParticle') {
		super(name, elm, {
			class : null
		}, settings);

		// set class if needed
		if (this.settings.class) {
			this.elm.classList.add(this.settings.class);
		}
	}

	/**
	 * When added
	 */
	onAdded() {

		// get the animation properties
		const animation = __getAnimationProperties(this.elm);

		// wait till the animation is finished to remove the particle from DOM
		setTimeout(() => {
			this.elm.parentNode.removeChild(this.elm);
		}, animation.totalDuration);
	}

}

// initOn
SParticleComponent.initOn = function(selector, settings = {}) {
	// init the select
	return querySelectorLive(selector).visible().once().subscribe((elm) => {
		new SParticleComponent(elm, settings);
	});
};

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SParticleComponent = SParticleComponent;

// export modules
export default SParticleComponent;
