'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _getTransitionProperties = require('../../../js/dom/getTransitionProperties');

var _getTransitionProperties2 = _interopRequireDefault(_getTransitionProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SDrawerComponent = function (_SWebComponent) {
	_inherits(SDrawerComponent, _SWebComponent);

	/**
  * @constructor
  */
	function SDrawerComponent() {
		_classCallCheck(this, SDrawerComponent);

		return _possibleConstructorReturn(this, _SWebComponent.call(this));
	}

	/**
  * Default props
  * @definition 		SWebComponent.defaultProps
  */


	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SDrawerComponent.prototype.componentMount = function componentMount() {
		var _this2 = this;

		_SWebComponent.prototype.componentMount.call(this);

		// try to find the drawer background
		this.bkg = document.querySelector(this._componentNameDash + '-bkg[for="' + this.props.name + '"]');
		if (!this.bkg) {
			this.bkg = document.createElement(this._componentNameDash + '-bkg');
			this.mutate(function () {
				_this2.bkg.setAttribute('for', _this2.props.name);
				// insert in the page
				_this2.parentElement.insertBefore(_this2.bkg, _this2.parentElement.firstChild);
			});
		}

		// try to find the drawer overlay
		this.overlay = document.querySelector('label[is="' + this._componentNameDash + '-overlay"][for="' + this.props.name + '"]');
		if (!this.overlay) {
			this.overlay = document.createElement('label');
			this.overlay.setAttribute('for', this.props.name);
			this.overlay.setAttribute('is', this._componentNameDash + '-overlay');
			this.mutate(function () {
				// insert in the page
				_this2.parentElement.insertBefore(_this2.overlay, _this2.parentElement.firstChild);
			});
		}

		// try to find the toggle
		this.toggle = document.querySelector('input[is="' + this._componentNameDash + '-toggle"][name="' + this.props.name + '"]');
		if (!this.toggle) {
			this.toggle = document.createElement('input');
			this.toggle.setAttribute('name', this.props.name);
			this.toggle.setAttribute('id', this.props.name);
			this.toggle.setAttribute('type', 'checkbox');
			this.toggle.setAttribute('is', this._componentNameDash + '-toggle');
			this.mutate(function () {
				// insert into page
				_this2.parentElement.insertBefore(_this2.toggle, _this2.parentElement.firstChild);
			});
		}

		// listen for change on the toggle
		this.toggle.addEventListener('change', function (e) {
			var name = e.target.name;
			_this2.mutate(function () {
				if (e.target.checked) {
					document.body.classList.add(_this2._componentNameDash + '-' + _this2.props.name);
				} else {
					document.body.classList.remove(_this2._componentNameDash + '-' + _this2.props.name);
				}
			});
		});

		// listen for click on links into the drawer to close it
		if (this.props.closeOnClick) {
			this.addEventListener('click', function (e) {
				if (e.target.nodeName.toLowerCase() == 'a') {
					// close the drawer
					_this2.close();
				}
			});
		}

		// if handle hach
		if (this.props.handleHash) {
			if (document.location.hash) {
				var hash = document.location.hash.substr(1);
				if (hash == this.props.name) {
					this.open();
				}
			}
		}
	};

	/**
  * Open
  */


	SDrawerComponent.prototype.open = function open() {
		var _this3 = this;

		// check the toggle
		this.mutate(function () {
			_this3.toggle.setAttribute('checked', true);
			document.body.classList.add(_this3._componentNameDash + '-' + _this3.props.name);
		});
		return this;
	};

	/**
  * Close
  */


	SDrawerComponent.prototype.close = function close() {
		var _this4 = this;

		// uncheck the toggle
		this.mutate(function () {
			_this4.toggle.removeAttribute('checked');
		});

		var transition = (0, _getTransitionProperties2.default)(this);
		setTimeout(function () {
			_this4.mutate(function () {
				document.body.classList.remove(_this4._componentNameDash + '-' + _this4.props.nane);
			});
		}, transition.totalDuration);
		return this;
	};

	/**
  * Check if is opened
  */


	SDrawerComponent.prototype.isOpen = function isOpen() {
		return this.toggle.checked;
	};

	_createClass(SDrawerComponent, null, [{
		key: 'defaultProps',
		get: function get() {
			return {
				name: null,
				closeOnClick: true,
				handleHash: true
			};
		}

		/**
   * Required props
   * @definition 		SWebComponent.requiredProps
   */

	}, {
		key: 'requiredProps',
		get: function get() {
			return ['name'];
		}
	}]);

	return SDrawerComponent;
}(_SWebComponent3.default);

exports.default = SDrawerComponent;