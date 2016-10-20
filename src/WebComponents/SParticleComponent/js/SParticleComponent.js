import SWebComponent from '../../../js/core/SWebComponent'

export default class SParticleComponent extends SWebComponent {

	/**
	 * @constructor
	 */
	constructor() {
		super();
	}

	/**
	 * When added
	 */
	attachedCallback() {
		super.attachedCallback();

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
	detachedCallback() {
		super.detachedCallback();
		// destroy
		this.destroy();
	}

}
