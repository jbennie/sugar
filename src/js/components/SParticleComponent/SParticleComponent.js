import SComponent from '../../core/SComponent';
import __getAnimationProperties from '../../dom/getAnimationProperties';
import querySelectorLive from '../../dom/querySelectorLive';

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
	_onAdded() {
		// get the animation properties
		const animation = __getAnimationProperties(this.elm);

		// wait till the animation is finished to remove the particle from DOM
		setTimeout(() => {
			if (this.elm.parentNode) {
				this.elm.parentNode.removeChild(this.elm);
			}
		}, animation.totalDuration);
	}

	/**
	 * _onRemoved
	 * When removed
	 * @return 	{void}
	 */
	_onRemoved() {
		// destroy
		this.destroy();
	}

}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SParticleComponent = SParticleComponent;

// export modules
export default SParticleComponent;
