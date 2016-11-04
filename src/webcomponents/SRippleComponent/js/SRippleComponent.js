import SWebComponent from '../../../js/core/SWebComponent'
import SParticlesSystemComponent from '../../SParticlesSystemComponent'
import __style from '../../../js/dom/style'
import __offset from '../../../js/dom/offset'

export default class SRippleComponent extends SWebComponent {

	/**
	 * @constructor
	 */
	constructor() { console.log('hello'); super(); }

	/**
	 * Store the particle system used to launch the ripples particles
	 * @type 		{SParticlesSystemComponent}
	 */
	_particlesSystem = null;

	/**
	 * Default props
	 * @definition 		SWebComponent.getDefaultProps
	 */
	static get defaultProps() {
		return {
			/**
			 * Set if need to stay contained in the parent (overflow hidden)
			 * @prop
			 * @type 		{Boolean}
			 */
			contains : true,

			/**
			 * Set if want the ripple to be centered into his parent and not be placed where the user has clicked
			 * @prop
			 * @type 		{Boolean}
			 */
			centered : false,

			/**
			 * Set the delay between each ripples if the props.count is more that 1
			 * @prop
			 * @type 		{Number}
			 */
			delay : 130,

			/**
			 * Set the number of ripples wanted on each click
			 * @prop
			 * @type 		{Integer}
			 */
			count : 1,

			/**
			 * Set the random distance that each ripples will takes relative to the emitter position
			 * @prop
			 * @type 		{Number}
			 */
			spread : 0
		}
	}

	static get physicalProps() {
		return [];
	}

	/**
	 * Mount the component
	 */
	componentMount() {
		super.componentMount();
		// set initial styles
		this._setInitialStyles();
		// listen for click on parent
		this.parentNode.addEventListener('click', this._onParentClick.bind(this));
		this._parentNode = this.parentNode;
	}

	/**
	 * Unmount the component
	 */
	componentUnmount() {
		super.componentUnmount();
		// do not listen for click anymore
		this._parentNode.removeEventListener('click', this._onParentClick);
	}

	/**
	 * When click on parent, trigger a ripple
	 */
	_onParentClick(e) {

		// calculate position of the emitter
		let emitterX, emitterY;
		if (this.props.centered) {
			emitterX = this.offsetWith * .5;
			emitterY = this.offsetHeight * .5;
		} else {
			const elmOffset = __offset(this);
			emitterX = e.pageX - elmOffset.left;
			emitterY = e.pageY - elmOffset.top;
		}

		// add a particle system
		if ( ! this._particlesSystem) {
			this._particlesSystem = document.createElement('s-particles-system').setProps({
				particleClass : 's-ripple__particle',
				loop : false
			});
			this.appendChild(this._particlesSystem);
		}

		// amit a particle
		this._emitRipples(emitterX, emitterY);
	}

	/**
	 * Emit ripples
	 */
	_emitRipples(emitterX, emitterY, current = 1) {

		let emX = emitterX,
			emY = emitterY;

		// handle spread
		if (this.props.spread) {
			emX += -this.props.spread + Math.round(Math.random() * (this.props.spread * 2));
			emY += -this.props.spread + Math.round(Math.random() * (this.props.spread * 2));
		}

		// set emitter position
		this._particlesSystem.setProps({
			emitterX : emX,
			emitterY : emY
		});

		// emit a particle
		this._particlesSystem.emitParticle();
		// check if need more that 1
		if (this.props.count > 1 && current < this.props.count) {
			setTimeout(() => {
				this._emitRipples(emitterX, emitterY, current+1);
			}, this.props.delay);
		}
	}

	/**
	 * Set initial styles
	 */
	_setInitialStyles() {
		if (this.parentNode.style.position !== 'relative'
			|| this.parentNode.style.position !== 'absolute'
		) {
			__style(this.parentNode, {
				position : 'relative'
			});
		}
		__style(this, {
			pointerEvents : 'none',
			position : 'absolute',
			top : 0,
			left : 0,
			width : '100%',
			height : '100%'
		});
		if (this.props.contains) {
			__style(this, {
				overflow : 'hidden'
			});
		} else {
			__style(this, {
				overflow : null
			});
		}
	}

	/**
	 * Should component update
	 */
	shouldComponentUpdate(nextProps) {
		return false;
	}
}
