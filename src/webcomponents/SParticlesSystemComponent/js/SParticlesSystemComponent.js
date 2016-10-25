import SWebComponent from '../../../js/core/SWebComponent'
import STimer from '../../../js/classes/STimer'
import SParticleComponent from '../../SParticleComponent'
import fastdom from 'fastdom'

export default class SParticlesSystemComponent extends SWebComponent {

	/**
	 * @constructor
	 */
	constructor() { super(); }

	/**
	 * Default props
	 */
	getDefaultProps(props = {}) {
		return super.getDefaultProps({
			emitterX : 0,
			emitterY : 0,
			spread : 0,
			amount : 0,
			timeoutSpread : 0,
			duration : null,
			particleClass : null,
			particleElm : null,
			particleClassSelection : 'random',
			onComplete : null,
			active : true,
			loop : false,
			...props
		});
	}

	/**
	 * Mount component
	 */
	componentMount() {
		super.componentMount();

		// check if need to create a timer or not
		if (this.props.amount && this.props.duration) {
			this._timer = new STimer(this.props.duration / this.props.amount, {
				loop : this.props.loop
			});
			// on tick
			this._timer.onTick(() => {
				// emit a particle
				this.emitParticle();
			});

			if (this.props.active) {
				// start the timer
				this._timer.start();
			}
		}
	}

	/**
	 * Component will receive prop
	 */
	componentWillReceiveProp(name, newVal, oldVal) {
		switch (name) {
			case 'active':
				if ( ! newVal) this.stop();
				else this.start();
			break;
		}
	}

	/**
	 * Unmount component
	 */
	componentUnmount() {
		super.componentUnmount();
		if (this._timer) {
			this._timer.destroy();
		}
	}

	/**
	 * Emit a particle
	 */
	emitParticle() {
		// append a new particle
		const particle = document.createElement('s-particle');

		// set particle position
		particle.style.top = this.props.emitterY + 'px';
		particle.style.left = this.props.emitterX + 'px';

		// append class if needed
		if (this.props.particleClass) {
			if (this.props.particleClass instanceof Array) {
				if (this.props.particleClassSelection === 'random') {
					particle.classList.add(this.props.particleClass[Math.round(Math.random()*(this.props.particleClass.length-1))]);
				}
			} else {
				particle.classList.add(this.props.particleClass);
			}
		}

		// add the particle element if specified
		if (this.props.particleElm) {
			particle.appendChild(this.props.particleElm);
		}

		fastdom.mutate(() => {
			// append the new particle into the system
			this.appendChild(particle);
		});
	}

	/**
	 * Stop the system
	 */
	stop() {
		this._timer.stop();
	}

	/**
	 * Start the system
	 */
	start() {
		this._timer.start();
	}

	/**
	 * Render
	 */
	render() {
		super.render();
	}

}

// register component
SWebComponent.define('s-particles-system', SParticlesSystemComponent);
