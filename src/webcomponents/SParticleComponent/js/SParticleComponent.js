import SWebComponent from '../../../js/core/SWebComponent'
import __getAnimationProperties from '../../../js/dom/getAnimationProperties'
import __style from '../../../js/dom/style'

export default class SParticleComponent extends SWebComponent {

	/**
	 * @constructor
	 */
	constructor() { super(); }

	/**
	 * Default props
	 * @definition 		SWebComponent.getDefaultProps
	 */
	static get defaultProps() {
		return {
			lifetime : null
		}
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// set position
		__style(this, {
			position : 'absolute'
		});

		let lifetime = this.props.lifetime;
		if ( ! lifetime) {
			// get the animation properties
			const animation = __getAnimationProperties(this);
			lifetime = animation.totalDuration;
		}

		// wait till the animation is finished to remove the particle from DOM
		setTimeout(() => {
			if (this.parentNode) {
				this.parentNode.removeChild(this);
			}
		}, lifetime);
	}

	/**
	 * Render
	 * @definition 		SWebComponent.render
	 */
	render() {
		super.render();
	}
}

// register component
SWebComponent.define('s-particle', SParticleComponent);
