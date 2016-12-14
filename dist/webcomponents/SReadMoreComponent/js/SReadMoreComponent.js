'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _realHeight = require('../../../js/dom/realHeight');

var _realHeight2 = _interopRequireDefault(_realHeight);

var _getStyleProperty = require('../../../js/dom/getStyleProperty');

var _getStyleProperty2 = _interopRequireDefault(_getStyleProperty);

var _style = require('../../../js/dom/style');

var _style2 = _interopRequireDefault(_style);

var _matches = require('../../../js/dom/matches');

var _matches2 = _interopRequireDefault(_matches);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SReadMoreComponent = function (_SWebComponent) {
	_inherits(SReadMoreComponent, _SWebComponent);

	function SReadMoreComponent() {
		_classCallCheck(this, SReadMoreComponent);

		return _possibleConstructorReturn(this, _SWebComponent.call(this));
	}

	/**
  * Default props
  * @definition 		SWebComponent.getDefaultProps
  */


	/**
  * Component will mount
  * @definition 		SWebComponent.componentWillMount
  */
	SReadMoreComponent.prototype.componentWillMount = function componentWillMount() {
		_SWebComponent.prototype.componentWillMount.call(this);
		this._targetedHeight;
	};

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */


	SReadMoreComponent.prototype.componentMount = function componentMount() {
		var _this2 = this;

		_SWebComponent.prototype.componentMount.call(this);

		// apply base style
		this._applyInitialStyle();

		// update targeted and original height
		this._updateTargetedAndOriginalHeight();

		// listen for click on the element
		this.addEventListener('click', this._onClick.bind(this));

		// check threshold
		this._checkThreshold();

		// listen for update read more
		this.addEventListener('update:height', function (e) {
			_this2._updateTargetedAndOriginalHeight();
			_this2._checkThreshold();
		});

		// listen for content mutation
		// this._listenMutations();
	};

	/**
  * Component unmount
  * @definition 		SWebComponent.componentUnmount
  */


	SReadMoreComponent.prototype.componentUnmount = function componentUnmount() {
		_SWebComponent.prototype.componentUnmount.call(this);
		if (this._sReadMoreMutationObserver) {
			this._sReadMoreMutationObserver.disconnect();
		}
	};

	/**
  * Apply initial style
  */


	SReadMoreComponent.prototype._applyInitialStyle = function _applyInitialStyle() {
		(0, _style2.default)(this, {
			overflow: 'hidden',
			display: 'block'
		});
	};

	/**
  * Listen mutations
  */


	SReadMoreComponent.prototype._listenMutations = function _listenMutations() {
		var _this3 = this;

		this._sReadMoreMutationObserver = new MutationObserver(function (mutations) {
			var render = false;
			mutations.forEach(function (mutation) {
				var parentNode = mutation.target.parentNode;
				if (mutation.target.nodeName === '#text') {
					parentNode = parentNode.parentNode;
				}
				if (mutation.target !== _this3 && parentNode === _this3) render = true;
			});
			if (!render) return;
			// update targeted and original height
			_this3._updateTargetedAndOriginalHeight();
			// check threshold
			_this3._checkThreshold();
			// render
			_this3.render();
		});
		this._sReadMoreMutationObserver.observe(this, {
			childList: true,
			subtree: true,
			characterData: true
		});
	};

	/**
  * On click on the read more
  */


	SReadMoreComponent.prototype._onClick = function _onClick(e) {
		if (e.target !== this) return;
		// toggle the active state
		if (this.isActive()) this.unactivate();else this.activate();
	};

	/**
  * Update targeted and original height
  */


	SReadMoreComponent.prototype._updateTargetedAndOriginalHeight = function _updateTargetedAndOriginalHeight() {
		// check if has an targeted height
		if (!this._targetedHeight) {
			var targetedHeight = this.props.height || this.style.maxHeight || (0, _getStyleProperty2.default)(this, 'maxHeight');
			if (targetedHeight === 'none') {
				targetedHeight = null;
			}
			if (targetedHeight) {
				targetedHeight = parseFloat(targetedHeight);
			}
			this._targetedHeight = targetedHeight;
		}

		// check the actual height of the target
		var realHeight = (0, _realHeight2.default)(this);
		this._originalHeight = realHeight;
	};

	/**
  * Check threshold to disable the read more if needed
  */


	SReadMoreComponent.prototype._checkThreshold = function _checkThreshold() {
		// check if the targetedHeight is lower that the actual height
		if (this._targetedHeight + this.props.threshold >= this._originalHeight) {
			// disable the component
			this.setProp('disabled', true);
		} else {
			this.setProp('disabled', false);
		}
	};

	/**
  * Activate
  */


	SReadMoreComponent.prototype.activate = function activate() {
		this.setProp('active', true);
	};

	/**
  * Unactivate
  */


	SReadMoreComponent.prototype.unactivate = function unactivate() {
		this.setProp('active', false);
	};

	/**
  * Return if the read more is activate or not
  */


	SReadMoreComponent.prototype.isActive = function isActive() {
		return this.props.active;
	};

	/**
  * Render the component
  * @definition 		SWebComponent.render
  */


	SReadMoreComponent.prototype.render = function render() {
		var _this4 = this;

		if (!this.props.disabled) {
			if (this.props.active) {
				setTimeout(function () {
					// open the read more
					(0, _style2.default)(_this4, {
						maxHeight: _this4._originalHeight + _this4._originalHeight / 100 * 10 + 'px'
					});
				});
			} else {
				(0, _style2.default)(this, {
					maxHeight: this._targetedHeight + 'px'
				});
			}
		} else {
			(0, _style2.default)(this, {
				maxHeight: null
			});
		}
	};

	_createClass(SReadMoreComponent, null, [{
		key: 'defaultProps',
		get: function get() {
			return {
				/**
     * Set the threshold difference height between the content and the
     * actual read more size under which the read more will not been enabled
     * @prop
     * @type 		{Number}
     */
				threshold: 0,

				active: false,

				disabled: false,

				height: null

			};
		}
	}, {
		key: 'physicalProps',
		get: function get() {
			return ['disabled', 'active'];
		}
	}]);

	return SReadMoreComponent;
}(_SWebComponent3.default);

exports.default = SReadMoreComponent;