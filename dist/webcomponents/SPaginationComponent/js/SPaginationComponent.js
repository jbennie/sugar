'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _STemplateWebComponent = require('../../../js/core/STemplateWebComponent');

var _STemplateWebComponent2 = _interopRequireDefault(_STemplateWebComponent);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

var _template2 = require('lodash/template');

var _template3 = _interopRequireDefault(_template2);

var _whenAttribute = require('../../../js/dom/whenAttribute');

var _whenAttribute2 = _interopRequireDefault(_whenAttribute);

var _whenProperty = require('../../../js/utils/objects/whenProperty');

var _whenProperty2 = _interopRequireDefault(_whenProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SPaginationComponent = function (_STemplateWebComponen) {
	_inherits(SPaginationComponent, _STemplateWebComponen);

	/**
  * @constructor
  */
	function SPaginationComponent() {
		_classCallCheck(this, SPaginationComponent);

		return _possibleConstructorReturn(this, _STemplateWebComponen.call(this));
	}

	/**
  * Return a list of promises to resolve before init the component
  * @return 	{Array} 	An array of promises to resolve
  */


	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SPaginationComponent.prototype.componentMount = function componentMount() {
		_STemplateWebComponen.prototype.componentMount.call(this);
	};

	/**
  * Compile template
  * @definition 		STemplateWebComponent.templateCompile
  */


	SPaginationComponent.prototype.templateCompile = function templateCompile(template, data) {
		var tmp = (0, _template3.default)(template, {
			evaluate: /<?!?-?-?%\s([\s\S]+?)%-?-?!?>?/g,
			interpolate: /<?!?-?-?%=\s([\s\S]+?)%-?-?!?>?/g,
			escape: /<?!?-?-?%-\s([\s\S]+?)%-?-?!?>?/g
		});
		var rnd = tmp(data);
		return rnd;
	};

	/**
  * Template will receive data
  * @definition 		STemplateWebComponent.templateWillReceiveData
  */


	SPaginationComponent.prototype.templateWillReceiveData = function templateWillReceiveData(name, newVal, oldVal) {
		switch (name) {
			case 'current':
				if (this.templateData.onchange && typeof this.templateData.onchange === 'function') {
					this.templateData.onchange(this.templateData.current);
				}
				break;
		}
	};

	/**
  * Unmount component
  * @definition 		SWebComponent.componentUnmount
  */


	SPaginationComponent.prototype.componentUnmount = function componentUnmount() {
		_STemplateWebComponen.prototype.componentUnmount.call(this);
	};

	SPaginationComponent.prototype.first = function first() {
		this.templateData.current = 1;
	};

	SPaginationComponent.prototype.last = function last() {
		this.templateData.current = this.templateData.pages;
	};

	SPaginationComponent.prototype.next = function next() {
		var current = this.templateData.current;
		if (current + 1 <= this.templateData.pages) {
			this.templateData.current += 1;
		}
	};

	SPaginationComponent.prototype.previous = function previous() {
		if (this.templateData.current > 1) {
			this.templateData.current -= 1;
		}
	};

	_createClass(SPaginationComponent, [{
		key: 'template',
		get: function get() {
			return '\n\t\t<!--% if (showFirst) { %-->\n\t\t\t<!--% if (current === 1) { %-->\n\t\t\t\t<' + this._componentNameDash + '-item onclick="this.first()">\n\t\t\t\t\t\xAB\n\t\t\t\t</' + this._componentNameDash + '-item>\n\t\t\t<!--% } else { %-->\n\t\t\t\t<' + this._componentNameDash + '-item onclick="this.first()">\n\t\t\t\t\t\xAB\n\t\t\t\t</' + this._componentNameDash + '-item>\n\t\t\t<!--% } %-->\n\t\t<!--% } %-->\n\n\t\t<!--% if (showPrevious) { %-->\n\t\t\t<!--% if (current === 1) { %-->\n\t\t\t\t<' + this._componentNameDash + '-item onclick="this.previous()">\n\t\t\t\t\t\u2039\n\t\t\t\t</' + this._componentNameDash + '-item>\n\t\t\t<!--% } else { %-->\n\t\t\t\t<' + this._componentNameDash + '-item onclick="this.previous()">\n\t\t\t\t\t\u2039\n\t\t\t\t</' + this._componentNameDash + '-item>\n\t\t\t<!--% } %-->\n\t\t<!--% } %-->\n\n\t\t<!--% for(i=0; i<pages; i++) { %-->\n\t\t\t<!--% if ((i + 1) === current) { %-->\n\t\t\t\t<' + this._componentNameDash + '-item active onclick="this.onchange(!%= (i + 1) %!)">\n\t\t\t\t\t<!--%= (i + 1) %-->\n\t\t\t\t</' + this._componentNameDash + '-item>\n\t\t\t<!--% } else { %-->\n\t\t\t\t<' + this._componentNameDash + '-item onclick="this.onchange(!%= (i + 1) %!)">\n\t\t\t\t\t<!--%= (i + 1) %-->\n\t\t\t\t</' + this._componentNameDash + '-item>\n\t\t\t<!--% } %-->\n\t\t<!--% } %-->\n\n\t\t<!--% if (showNext) { %-->\n\t\t\t<!--% if (current === pages) { %-->\n\t\t\t\t<' + this._componentNameDash + '-item onclick="this.next()">\n\t\t\t\t\t\u203A\n\t\t\t\t</' + this._componentNameDash + '-item>\n\t\t\t<!--% } else { %-->\n\t\t\t\t<' + this._componentNameDash + '-item onclick="this.next()">\n\t\t\t\t\t\u203A\n\t\t\t\t</' + this._componentNameDash + '-item>\n\t\t\t<!--% } %-->\n\t\t<!--% } %-->\n\n\t\t<!--% if (showLast) { %-->\n\t\t\t<!--% if (current === pages) { %-->\n\t\t\t\t<' + this._componentNameDash + '-item onclick="this.last()">\n\t\t\t\t\t\xBB\n\t\t\t\t</' + this._componentNameDash + '-item>\n\t\t\t<!--% } else { %-->\n\t\t\t\t<' + this._componentNameDash + '-item onclick="this.last()">\n\t\t\t\t\t\xBB\n\t\t\t\t</' + this._componentNameDash + '-item>\n\t\t\t<!--% } %-->\n\t\t<!--% } %-->\n\t\t';
		}

		/**
   * Default template data
   * @definition 		SWebTemplateComponent.defaultTemplateData
   */

	}], [{
		key: 'mountDependencies',
		get: function get() {
			return [function () {
				return (0, _whenProperty2.default)(this.templateData, 'pages', function (newVal, oldVal) {
					return typeof newVal === 'number';
				});
			}, function () {
				return (0, _whenProperty2.default)(this.templateData, 'current', function (newVal, oldVal) {
					return typeof newVal === 'number';
				});
			}];
		}

		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   */

	}, {
		key: 'defaultProps',
		get: function get() {
			return {
				onchange: null,
				pages: 0,
				current: 1,
				showFirst: true,
				showLast: true,
				showPrevious: true,
				showNext: true
			};
		}
	}, {
		key: 'defaultTemplateData',
		get: function get() {
			return {
				pages: '@props.pages',
				current: '@props.current',
				onchange: '@props.onchange',
				first: '@first',
				last: '@last',
				previous: '@previous',
				next: '@next',
				showFirst: '@props.showFirst',
				showLast: '@props.showLast',
				showPrevious: '@props.showPrevious',
				showNext: '@props.showNext'
			};
		}

		/**
   * Physical props
   * @definition 		SWebComponent.physicalProps
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return [];
		}
	}]);

	return SPaginationComponent;
}(_STemplateWebComponent2.default);

// STemplate integration


exports.default = SPaginationComponent;
_sTemplateIntegrator2.default.registerComponentIntegration(SPaginationComponent, function (component) {});