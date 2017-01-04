'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _SParticlesSystemComponent = require('../../SParticlesSystemComponent');

var _SParticlesSystemComponent2 = _interopRequireDefault(_SParticlesSystemComponent);

var _style = require('../../../js/dom/style');

var _style2 = _interopRequireDefault(_style);

var _offset = require('../../../js/dom/offset');

var _offset2 = _interopRequireDefault(_offset);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SRippleComponent = function (_SWebComponent) {
	_inherits(SRippleComponent, _SWebComponent);

	/**
  * @constructor
  */
	function SRippleComponent() {
		_classCallCheck(this, SRippleComponent);

		console.log('hello');
		var _this = _possibleConstructorReturn(this, _SWebComponent.call(this));

		_this._particlesSystem = null;
		return _this;
	}

	/**
  * Store the particle system used to launch the ripples particles
  * @type 		{SParticlesSystemComponent}
  */


	/**
  * Mount the component
  */
	SRippleComponent.prototype.componentMount = function componentMount() {
		_SWebComponent.prototype.componentMount.call(this);
		// set initial styles
		this._setInitialStyles();
		// listen for click on parent
		this.parentNode.addEventListener('click', this._onParentClick.bind(this));
		this._parentNode = this.parentNode;
	};

	/**
  * Unmount the component
  */


	SRippleComponent.prototype.componentUnmount = function componentUnmount() {
		_SWebComponent.prototype.componentUnmount.call(this);
		// do not listen for click anymore
		this._parentNode.removeEventListener('click', this._onParentClick);
	};

	/**
  * When click on parent, trigger a ripple
  */


	SRippleComponent.prototype._onParentClick = function _onParentClick(e) {

		// calculate position of the emitter
		var emitterX = void 0,
		    emitterY = void 0;
		if (this.props.centered) {
			emitterX = this.offsetWith * .5;
			emitterY = this.offsetHeight * .5;
		} else {
			var elmOffset = (0, _offset2.default)(this);
			emitterX = e.pageX - elmOffset.left;
			emitterY = e.pageY - elmOffset.top;
		}

		// add a particle system
		if (!this._particlesSystem) {
			this._particlesSystem = document.createElement('s-particles-system').setProps({
				particleClass: 's-ripple__particle',
				loop: false
			});
			this.appendChild(this._particlesSystem);
		}

		// amit a particle
		this._emitRipples(emitterX, emitterY);
	};

	/**
  * Emit ripples
  */


	SRippleComponent.prototype._emitRipples = function _emitRipples(emitterX, emitterY) {
		var _this2 = this;

		var current = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;


		var emX = emitterX,
		    emY = emitterY;

		// handle spread
		if (this.props.spread) {
			emX += -this.props.spread + Math.round(Math.random() * (this.props.spread * 2));
			emY += -this.props.spread + Math.round(Math.random() * (this.props.spread * 2));
		}

		// set emitter position
		this._particlesSystem.setProps({
			emitterX: emX,
			emitterY: emY
		});

		// emit a particle
		this._particlesSystem.emitParticle();
		// check if need more that 1
		if (this.props.count > 1 && current < this.props.count) {
			setTimeout(function () {
				_this2._emitRipples(emitterX, emitterY, current + 1);
			}, this.props.delay);
		}
	};

	/**
  * Set initial styles
  */


	SRippleComponent.prototype._setInitialStyles = function _setInitialStyles() {
		if (this.parentNode.style.position !== 'relative' || this.parentNode.style.position !== 'absolute') {
			(0, _style2.default)(this.parentNode, {
				position: 'relative'
			});
		}
		(0, _style2.default)(this, {
			pointerEvents: 'none',
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%'
		});
		if (this.props.contains) {
			(0, _style2.default)(this, {
				overflow: 'hidden'
			});
		} else {
			(0, _style2.default)(this, {
				overflow: null
			});
		}
	};

	/**
  * Should component update
  */


	SRippleComponent.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
		return false;
	};

	_createClass(SRippleComponent, null, [{
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.getDefaultProps
   */
		get: function get() {
			return {
				/**
     * Set if need to stay contained in the parent (overflow hidden)
     * @prop
     * @type 		{Boolean}
     */
				contains: true,

				/**
     * Set if want the ripple to be centered into his parent and not be placed where the user has clicked
     * @prop
     * @type 		{Boolean}
     */
				centered: false,

				/**
     * Set the delay between each ripples if the props.count is more that 1
     * @prop
     * @type 		{Number}
     */
				delay: 130,

				/**
     * Set the number of ripples wanted on each click
     * @prop
     * @type 		{Integer}
     */
				count: 1,

				/**
     * Set the random distance that each ripples will takes relative to the emitter position
     * @prop
     * @type 		{Number}
     */
				spread: 0
			};
		}
	}, {
		key: 'physicalProps',
		get: function get() {
			return [];
		}
	}]);

	return SRippleComponent;
}(_SWebComponent3.default);

exports.default = SRippleComponent;