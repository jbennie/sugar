'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _STimer = require('../../../js/classes/STimer');

var _STimer2 = _interopRequireDefault(_STimer);

var _SParticleComponent = require('../../SParticleComponent');

var _SParticleComponent2 = _interopRequireDefault(_SParticleComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SParticlesSystemComponent = function (_SWebComponent) {
	_inherits(SParticlesSystemComponent, _SWebComponent);

	/**
  * @constructor
  */
	function SParticlesSystemComponent() {
		_classCallCheck(this, SParticlesSystemComponent);

		return _possibleConstructorReturn(this, _SWebComponent.call(this));
	}

	/**
  * Default props
  */


	/**
  * Mount component
  */
	SParticlesSystemComponent.prototype.componentMount = function componentMount() {
		var _this2 = this;

		_SWebComponent.prototype.componentMount.call(this);

		// check if need to create a timer or not
		if (this.props.amount && this.props.duration) {
			this._timer = new _STimer2.default(this.props.duration / this.props.amount, {
				loop: this.props.loop
			});
			// on tick
			this._timer.onTick(function () {
				// emit a particle
				_this2.emitParticle();
			});

			if (this.props.active) {
				// start the timer
				this._timer.start();
			}
		}
	};

	/**
  * Component will receive prop
  */


	SParticlesSystemComponent.prototype.componentWillReceiveProp = function componentWillReceiveProp(name, newVal, oldVal) {
		switch (name) {
			case 'active':
				if (!newVal) this.stop();else this.start();
				break;
		}
	};

	/**
  * Unmount component
  */


	SParticlesSystemComponent.prototype.componentUnmount = function componentUnmount() {
		_SWebComponent.prototype.componentUnmount.call(this);
		if (this._timer) {
			this._timer.destroy();
		}
	};

	/**
  * Emit a particle
  */


	SParticlesSystemComponent.prototype.emitParticle = function emitParticle() {
		var _this3 = this;

		// append a new particle
		var particle = document.createElement('s-particle');

		// set particle position
		particle.style.top = this.props.emitterY + 'px';
		particle.style.left = this.props.emitterX + 'px';

		// append class if needed
		if (this.props.particleClass) {
			if (this.props.particleClass instanceof Array) {
				if (this.props.particleClassSelection === 'random') {
					particle.classList.add(this.props.particleClass[Math.round(Math.random() * (this.props.particleClass.length - 1))]);
				}
			} else {
				particle.classList.add(this.props.particleClass);
			}
		}

		// add the particle element if specified
		if (this.props.particleElm) {
			particle.appendChild(this.props.particleElm);
		}

		this.mutate(function () {
			// append the new particle into the system
			_this3.appendChild(particle);
		});
	};

	/**
  * Stop the system
  */


	SParticlesSystemComponent.prototype.stop = function stop() {
		this._timer.stop();
	};

	/**
  * Start the system
  */


	SParticlesSystemComponent.prototype.start = function start() {
		this._timer.start();
	};

	/**
  * Render
  */


	SParticlesSystemComponent.prototype.render = function render() {
		_SWebComponent.prototype.render.call(this);
	};

	_createClass(SParticlesSystemComponent, null, [{
		key: 'defaultProps',
		get: function get() {
			return {
				emitterX: 0,
				emitterY: 0,
				spread: 0,
				amount: 0,
				timeoutSpread: 0,
				duration: null,
				particleClass: null,
				particleElm: null,
				particleClassSelection: 'random',
				onComplete: null,
				active: true,
				loop: false
			};
		}
	}]);

	return SParticlesSystemComponent;
}(_SWebComponent3.default);

exports.default = SParticlesSystemComponent;