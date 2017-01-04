'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

var _dispatchEvent = require('../../../js/dom/dispatchEvent');

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

var _offset = require('../../../js/dom/offset');

var _offset2 = _interopRequireDefault(_offset);

var _fastdom = require('fastdom');

var _fastdom2 = _interopRequireDefault(_fastdom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SEqualizeComponent = function (_SWebComponent) {
	_inherits(SEqualizeComponent, _SWebComponent);

	/**
  * @constructor
  */
	function SEqualizeComponent() {
		_classCallCheck(this, SEqualizeComponent);

		return _possibleConstructorReturn(this, _SWebComponent.call(this));
	}

	/**
  * Default props
  * @definition 		SWebComponent.defaultProps
  */


	SEqualizeComponent.prototype.componentWillMount = function componentWillMount() {
		_SWebComponent.prototype.componentWillMount.call(this);
		this.style.display = 'block';
	};

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */


	SEqualizeComponent.prototype.componentMount = function componentMount() {
		var _this2 = this;

		_SWebComponent.prototype.componentMount.call(this);

		if (!SEqualizeComponent.groups[this.props.group]) {
			SEqualizeComponent.groups[this.props.group] = {
				refreshLinesInProgress: false,
				elements: [],
				lines: []
			};
		}
		SEqualizeComponent.groups[this.props.group].elements = document.querySelectorAll(this._componentNameDash + '[group="' + this.props.group + '"]');

		// init lines
		this.lines = [];

		// refresh lines first time
		this.refreshLines();

		// equalize
		this.equalize();

		// listen for resizing window
		var resizeWindowTimeout = void 0;
		window.addEventListener('resize', function (e) {
			clearTimeout(resizeWindowTimeout);
			resizeWindowTimeout = setTimeout(function () {
				_this2.equalize();
			}, _this2.props.resizeTimeout);
		});
	};

	/**
  * Get the line from an element
  */
	SEqualizeComponent.prototype.refreshLines = function refreshLines() {
		var _this3 = this;

		if (SEqualizeComponent.groups[this.props.group].refreshLinesInProgress) return;
		SEqualizeComponent.groups[this.props.group].refreshLinesInProgress = true;
		setTimeout(function () {
			SEqualizeComponent.groups[_this3.props.group].refreshLinesInProgress = false;
		}, 100);
		// loop on all the columns
		var offsetTop = void 0;
		this.lines = [];
		var line = {
			inProgress: false,
			height: 0,
			elements: []
		};
		[].forEach.call(SEqualizeComponent.groups[this.props.group].elements, function (elm) {

			// reset the equalizer or element min-height
			// to get the real height of the element
			if (elm.equalizerElm) {
				elm.equalizerElm.style.minHeight = 0;
			} else {
				elm.style.minHeight = 0;
			}

			var elmHeight = elm.offsetHeight;
			var elmOffset = (0, _offset2.default)(elm);

			// check if is on new line
			if (offsetTop !== elmOffset.top && line.height > 0) {
				// add the new line to lines stack
				_this3.lines.push(line);
				// reset the line
				line = {
					inProgress: false,
					height: 0,
					elements: []
				};
			}
			// add the element in the line
			line.elements.push(elm);
			// check if the element is higher that the highest of the line
			if (elmHeight > line.height) {
				line.height = elmHeight;
			}
			// save the new offset
			offsetTop = elmOffset.top;
		});

		// add the last line
		this.lines.push(line);

		// save the lins in static stack
		SEqualizeComponent.groups[this.props.group].lines = this.lines;
	};

	/**
  * Get line from element
  */


	SEqualizeComponent.prototype.getLineFromElm = function getLineFromElm(elm) {
		// loop on lines
		for (var key in SEqualizeComponent.groups[this.props.group].lines) {
			var line = SEqualizeComponent.groups[this.props.group].lines[key];
			if (line.elements.indexOf(elm) !== -1) return line;
		}
		return null;
	};

	/**
  * Equalize line
  */


	SEqualizeComponent.prototype.equalizeLine = function equalizeLine(line) {

		// do nothing if the line is already in progress
		if (line.inProgress) return;
		// flag the line as inProgress
		line.inProgress = true;

		// refresh lines
		// don't worry, it will not do the work
		// every time it is called but only 1 by group every 100ms
		this.refreshLines();

		setTimeout(function () {
			// loop on each columns
			[].forEach.call(line.elements, function (element) {
				element.classList.add('clear-transmations');
				// reset the equalizer or element min-height
				// to get the real height of the element
				if (element.equalizerElm) {
					element.equalizerElm.style.minHeight = 0;
				} else {
					element.style.minHeight = 0;
				}
			});
			// loop on each columns
			[].forEach.call(line.elements, function (element) {
				// check if an equalizer exist to use it
				// @TODO : find a way to not query each time in the column for the equalizer
				// reset the equalizer or element min-height
				// to get the real height of the element
				if (element.equalizerElm) {
					element.equalizerElm.style.display = 'block';
					element.equalizerElm.style.minHeight = line.height - element.offsetHeight + 'px';
				} else {
					element.style.minHeight = line.height + 'px';
				}
			});
			[].forEach.call(line.elements, function (element) {
				element.classList.remove('clear-transmations');
			});
			// reset the line progress status
			line.inProgress = false;
		});
	};

	/**
  * Equalize
  */


	SEqualizeComponent.prototype.equalize = function equalize() {
		var _this4 = this;

		var elmOrLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		// if we have an element passed
		if (elmOrLine && elmOrLine.tagName) {
			// equalize from an element
			var line = this.getLineFromElm(elmOrLine);
			if (!line) return;
			this.equalizeLine(line);
		} else if (elmOrLine && elmOrLine.elements) {
			// equalize a line directly
			this.equalizeLine(elmOrLine);
		} else {
			// equalize the whole set
			SEqualizeComponent.groups[this.props.group].lines.forEach(function (line) {
				// equalize line
				_this4.equalizeLine(line);
			});
		}
		setTimeout(function () {
			(0, _dispatchEvent2.default)(_this4, 'update:height');
		});
	};

	_createClass(SEqualizeComponent, [{
		key: 'equalizerElm',
		get: function get() {
			if (this._equalizerElmCache) return this._equalizerElmCache;
			this._equalizerElmCache = this.querySelector(this._componentNameDash + '-equalizer');
			return this._equalizerElmCache;
		}
	}], [{
		key: 'defaultProps',
		get: function get() {
			return {
				group: null,
				resizeTimeout: 200
			};
		}

		/**
   * Required props
   * @definition 		SWebComponent.requiredProps
   */

	}, {
		key: 'requiredProps',
		get: function get() {
			return ['group'];
		}

		/**
   * Reference to all the columns by groups
   * Store value format :
   * groupId : {
   * 		inProgress : false // set if an equalize in in progress on this group or not
   * 		columns : [] // store all the columns
   * }
   */

	}]);

	return SEqualizeComponent;
}(_SWebComponent3.default);

// STemplate integration


SEqualizeComponent.groups = {};
exports.default = SEqualizeComponent;
_sTemplateIntegrator2.default.registerComponentIntegration(SEqualizeComponent, function (component) {
	_sTemplateIntegrator2.default.ignore(component, {
		style: true
	});
	if (component.equalizerElm) {
		_sTemplateIntegrator2.default.ignore(component.equalizerElm, {
			style: true
		});
	}
});