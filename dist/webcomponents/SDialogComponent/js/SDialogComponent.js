'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

var _SAjax = require('../../../js/classes/SAjax');

var _SAjax2 = _interopRequireDefault(_SAjax);

var _strToHtml = require('../../../js/utils/string/strToHtml');

var _strToHtml2 = _interopRequireDefault(_strToHtml);

var _insertAfter = require('../../../js/dom/insertAfter');

var _insertAfter2 = _interopRequireDefault(_insertAfter);

var _style = require('../../../js/dom/style');

var _style2 = _interopRequireDefault(_style);

var _getAnimationProperties = require('../../../js/dom/getAnimationProperties');

var _getAnimationProperties2 = _interopRequireDefault(_getAnimationProperties);

var _sendForm = require('../../../js/dom/sendForm');

var _sendForm2 = _interopRequireDefault(_sendForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SDialogComponent = function (_SWebComponent) {
	_inherits(SDialogComponent, _SWebComponent);

	/**
  * @constructor
  */


	/**
  * Store the html representation of the dialog
  * @type 	{HTMLElement}
  */


	/**
  * Store the number of dialogs opened in the page
  * @type 	{Integer}
  */
	function SDialogComponent() {
		_classCallCheck(this, SDialogComponent);

		var _this = _possibleConstructorReturn(this, _SWebComponent.call(this));

		_this._content = null;
		_this._html = null;
		_this._allowModalClose = false;
		return _this;
	}

	/**
  * Default props
  * @definition 		SWebComponent.defaultProps
  */


	/**
  * Define if we can close the dialog when the modal setting is true
  * @type 	{Boolean}
  */


	/**
  * Store the content of the dialog.
  * The content is getted either from the s-dialog attribute itself, either from an href attribute or from the element DOM itself¨
  * @type 	{Mixed}
  */


	/**
  * Component css
  */
	SDialogComponent.css = function css(componentName, componentNameDash) {
		return '\n\t\t\tbody.' + componentNameDash + '--opened {\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\t\t\t.' + componentNameDash + ' {\n\t\t\t\tdisplay : block;\n\t\t\t\tposition : fixed;\n\t\t\t\ttop : 0; left: 0;\n\t\t\t\twidth : 100%; height : 100%;\n\t\t\t\toverflow : auto;\n\t\t\t\ttext-align : center;\n\t\t\t\twhite-space : nowrap;\n\t\t\t\tz-index:9999;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__overlay {\n\t\t\t\tposition:fixed;\n\t\t\t\ttop:0;\n\t\t\t\tleft:0;\n\t\t\t\twidth:100%;\n\t\t\t\theight:100%;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__aligner {\n\t\t\t\twidth:0px; height:100%; display:inline-block; vertical-align:middle;\n\t\t\t}\n\t\t\t.' + componentNameDash + '__content {\n\t\t\t\tdisplay: inline-block; text-align: left; margin: 0px auto; position: relative; vertical-align: middle; white-space: normal;\n\t\t\t}\n\t\t';
	};

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */


	SDialogComponent.prototype.componentMount = function componentMount() {
		var _this2 = this;

		_SWebComponent.prototype.componentMount.call(this);

		// check the for prop
		if (this.props.for) {
			this._triggerer = document.querySelector('[name="' + this.props.for + '"],#' + this.props.for);
		} else if (this.children && this.children.length === 1 && this.children[0] && this.children[0].tagName.toLowerCase() === 'a') {
			this._triggerer = this.children[0];
		} else {
			this._triggerer = this;
		}

		// check hash change
		if (this.props.id) {
			this._processHashChange();
			window.addEventListener('hashchange', function (e) {
				_this2._processHashChange();
			});
			window.addEventListener('popstate', function (e) {
				_this2._processHashChange();
			});
		}

		// check the triggerer if a form, mean that we need to open the
		// dialog on submit
		if (this._triggerer.tagName.toLowerCase() === 'form') {
			this._triggerer.addEventListener('submit', function (e) {
				// check validity first
				if (!e.target.checkValidity()) return;
				// prevent default form behavior
				e.preventDefault();
				// send form
				(0, _sendForm2.default)(e.target).then(function (response) {
					// remove the cached content
					_this2._content = null;
					// open the dialog
					_this2.open((0, _strToHtml2.default)(response));
				});
			});
		} else {
			// handle openOn
			switch (this.props.openOn) {
				case 'click':
					this._triggerer.addEventListener('click', function (e) {
						e.preventDefault();
						_this2.open();
					});
					break;
				case 'hover':
					this._triggerer.addEventListener('mouseover', function (e) {
						e.preventDefault();
						_this2.open();
					});
					break;
				case 'init':
					this._triggerer.addEventListener('click', function (e) {
						e.preventDefault();
					});
					this.open();
					break;
			}
		}
	};

	/**
  * Component will receive prop
  * @definition 		SWebComponent.componentWillReceiveProp
  */


	SDialogComponent.prototype.componentWillReceiveProp = function componentWillReceiveProp(name, newVal, oldVal) {
		switch (name) {
			case 'opened':
				if (newVal) this._open();else this._close();
				break;
		}
	};

	/**
  * Process hash change
  */


	SDialogComponent.prototype._processHashChange = function _processHashChange() {
		var _this3 = this;

		clearTimeout(this._processHashChangeTimeout);
		this._processHashChangeTimeout = setTimeout(function () {
			var hash = document.location.hash;
			// if (! hash) return;
			if (hash && hash.substr(1) === _this3.props.id) {
				_this3.open();
			} else if (_this3.isOpened()) {
				_this3.close();
			}
		});
		// console.log('hash', hash);
	};

	/**
  * Open the dialog
  */


	SDialogComponent.prototype.open = function open() {
		var _this4 = this;

		var content = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


		// id has an id, set it as hash
		if (this.props.id && (!document.location.hash || document.location.hash.substr(1) !== this.props.id)) {
			window.history.pushState({}, null, '' + (document.location.pathname || '') + (document.location.search || '') + '#' + this.props.id);
			// __dispatchEvent(window, 'hashchange');
		}

		// return a new promise
		return new Promise(function (resolve, reject) {

			// save the resolve and reject promise callbacks to use them later
			_this4._resolve = resolve;
			_this4._reject = reject;

			// get content from passed parameter or settings
			content = content || _this4.props.content || _this4._triggerer.getAttribute('href');

			// try to load the content only if not already loaded
			if (!_this4._content) {

				// try to get the content of the dialog
				if (!content) {
					// the content of the dialog is the element itself
					_this4._content = _this4;
					// open
					_this4.setProp('opened', true);
				} else if (content.nodeName) {
					// the content if an HTMLElement
					_this4._content = content;
					// open
					_this4.setProp('opened', true);
				} else if (content.substr(0, 1) === '#') {
					// the content of the dialog is an element in the page
					_this4._content = document.querySelector(content);
					// open
					_this4.setProp('opened', true);
				} else {
					// the content of the dialog is an ajax resource
					var ajx = new _SAjax2.default({
						url: content,
						method: 'GET'
					});
					ajx.send().then(function (response) {
						// set the content
						_this4._content = response;
						// open
						_this4.setProp('opened', true);
					});
				}
			} else {
				// the content has already been loaded once
				_this4.setProp('opened', true);
			}

			// listen for escape key
			document.addEventListener('keyup', _this4._onKeyup.bind(_this4));
		});
	};

	/**
  * Real open method that create the DOM content
  */


	SDialogComponent.prototype._open = function _open() {
		var _this5 = this;

		// add the body class
		document.body.classList.add(this._componentNameDash + '--opened');

		// open counter
		SDialogComponent.counter++;

		// create the DOM structure
		if (!this._template) {

			this._html = (0, _strToHtml2.default)('\n\t\t\t\t<div class="' + this._componentNameDash + '">\n\t\t\t\t\t<div name="overlay" class="' + this._componentNameDash + '__overlay"></div>\n\t\t\t\t\t<div class="' + this._componentNameDash + '__aligner"></div>\n\t\t\t\t\t<div name="content" class="' + this._componentNameDash + '__content">\n\t\t\t\t\t\t<!-- content will be here... -->\n\t\t\t\t\t</div>\n\t\t\t\t\t<div name="close" class="' + this._componentNameDash + '__close"></div>\n\t\t\t\t</div>\n\t\t\t');

			this.refs = {
				elm: this._html,
				overlay: this._html.querySelector('[name="overlay"]'),
				content: this._html.querySelector('[name="content"]'),
				close: this._html.querySelector('[name="close"]')
			};

			// listen for click on the overlay
			// to close the dialog
			this.refs.overlay.addEventListener('click', function (e) {
				_this5.close(false);
			});
			this.refs.close.addEventListener('click', function (e) {
				_this5.close(false);
			});
			// if not a modal, make the cursor pointer on the overlay
			if (!this.props.modal) {
				(0, _style2.default)(this.refs.overlay, {
					cursor: 'pointer'
				});
			}

			// listen for close event
			this.refs.content.addEventListener(this._componentNameDash + ':close', function (e) {
				// close the dialog
				_this5.close();
			});
			this.refs.content.addEventListener(this._componentNameDash + ':cancel', function (e) {
				var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				// close the dialog
				_this5.cancel(data);
			});
			this.refs.content.addEventListener(this._componentNameDash + ':ok', function (e) {
				var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

				// close the dialog
				_this5.ok(data);
			});
		}

		// set the content into the content of the template
		if (typeof this._content === 'string') {
			this.refs.content.innerHTML = this._content;
		} else if (this._content.nodeName !== undefined) {

			// try to save the position into dom to restore it on close
			if (this._content.parentNode) {
				this._domRestorePlaceholder = document.createElement('div');
				this._domRestorePlaceholder.setAttribute('s-dialog-restore-placeholder', true);
				(0, _insertAfter2.default)(this._domRestorePlaceholder, this._content);
			}

			// append the content into the dialog
			this.refs.content.appendChild(this._content);
		}

		// try to find the s-dialog-ok and the s-dialog-cancel elements
		var okElms = this.refs.content.querySelectorAll('[' + this._componentNameDash + '-ok]');
		if (okElms.length) {
			[].forEach.call(okElms, function (elm) {
				if (!elm._SDialogCancelClickListener) {
					(function () {
						var value = elm.getAttribute(_this5._componentNameDash + '-ok');
						elm._SDialogCancelClickListener = true;
						elm.addEventListener('click', function (e) {
							_this5.ok(value);
						});
					})();
				}
			});
		}
		var cancelElms = this.refs.content.querySelectorAll('[' + this._componentNameDash + '-cancel]');
		if (cancelElms.length) {
			[].forEach.call(cancelElms, function (elm) {
				if (!elm._SDialogOkClickListener) {
					(function () {
						var value = elm.getAttribute(_this5._componentNameDash + '-cancel');
						elm._SDialogOkClickListener = true;
						elm.addEventListener('click', function (e) {
							_this5.cancel(value);
						});
					})();
				}
			});
		}

		// add the dialog to the body
		document.body.appendChild(this._html);

		this.props.onOpen && this.props.onOpen(this);
	};

	/**
  * onKeyup
  */


	SDialogComponent.prototype._onKeyup = function _onKeyup(e) {
		e.preventDefault();
		// check if is escape key
		switch (e.keyCode) {
			case 27:
				// escape
				if (this.props.modal) {
					this.close(false);
				} else {
					this.cancel(null);
				}
				break;
		}
	};

	/**
  * Close
  */


	SDialogComponent.prototype.close = function close() {
		var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

		// check if is a modal
		if (this.props.modal && !this._allowModalClose && !force) return;

		// close
		this.setProp('opened', false);
	};

	/**
  * Close
  */


	SDialogComponent.prototype._close = function _close() {
		var _this6 = this;

		// reset the hash
		if (this.props.id) {
			window.history.pushState(null, document.title, '' + (document.location.pathname || '') + (document.location.search || '') + '#');
			// __dispatchEvent(window, 'hashchange');
		}

		// add the out class to the dialog
		this.addComponentClass(this.refs.elm, null, null, 'out');

		// get animation properties
		var animationProperties = (0, _getAnimationProperties2.default)(this.refs.elm);

		// do not listen for keyup anymore
		document.removeEventListener('keyup', this._onKeyup);

		// wait end animation to remove the dialog
		setTimeout(function () {

			// restore the place of the content if is a placeholder
			if (_this6._domRestorePlaceholder && _this6._content.nodeName) {
				(0, _insertAfter2.default)(_this6._content, _this6._domRestorePlaceholder);
				_this6._domRestorePlaceholder.parentNode.removeChild(_this6._domRestorePlaceholder);
			}

			// remove the out class
			_this6.removeComponentClass(_this6.refs.elm, null, null, 'out');

			// remove the container from the dom
			if (_this6._html) {
				_this6._html.parentNode.removeChild(_this6._html);
			}

			// update counter
			if (SDialogComponent.counter > 0) {
				SDialogComponent.counter--;
			}
			// if no more dialog opened, remove the body class
			if (SDialogComponent.counter <= 0) {
				document.body.classList.remove(_this6._componentNameDash + '--opened');
			}
		}, animationProperties.totalDuration);
	};

	/**
  * Ok
  * Validate the modal
  */


	SDialogComponent.prototype.ok = function ok() {
		var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		if (!this.isOpened()) return;
		// resolve the promise if exist
		try {
			if (this._resolve && value) {
				this._resolve(value);
			}
		} catch (e) {}
		// close the dialog
		this.close(true);
	};

	/**
  * Cancel
  * Cancel the modal by rejecting the promise
  */


	SDialogComponent.prototype.cancel = function cancel() {
		var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		if (!this.isOpened()) return;
		try {
			// reject the promise if exist
			if (this._reject && value) {
				this._reject(value);
			}
		} catch (e) {}
		// close the dialog
		this.close(true);
	};

	/**
  * Check if is opened
  * @return 	{Boolean} 	If is opened or not
  */


	SDialogComponent.prototype.isOpened = function isOpened() {
		return this.props.opened;
	};

	_createClass(SDialogComponent, null, [{
		key: 'defaultProps',
		get: function get() {
			return {

				/**
     * Specify the element that will trigger the dialog
     * @prop
     * @type 		{String}
     */
				for: null,

				/**
     * Specify the content to use for the dialog
     * Can be an html id selector like "#myCoolContent"
     * an url to load by through ajax like "myCoolContent.html"
     * a mix like "myCoolContent.html#myCoolContent"
     * or nothing. In this case, the element itself will be the dialog content
     * @prop
     * @type 	{String}
     */
				content: null,

				/**
     * The dialog id that can be used to open the dialog through the url hash
     * @prop
     * @type 		{String}
     */
				id: null,

				/**
     * Specify if the dialog is a modal or not
     * @prop
     * @type 	{Boolean}
     */
				modal: false,

				/**
     * Callback when the modal opens
     * @prop
     * @type 	{Function}
     */
				onOpen: null,

				/**
     * Specify if the modal is opened or not
     * @prop
     * @physicalProps
     * @type 	{Boolean}
     */
				opened: false,

				/**
     * Set when to open the dialog
     * This can be 'click'|'hover'|'init'
     * @prop
     * @type 	{String}
     */
				openOn: 'click'
			};
		}

		/**
   * Physical props
   * @definition 		SWebComponent.physicalProps
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return ['opened'];
		}
	}]);

	return SDialogComponent;
}(_SWebComponent3.default);

SDialogComponent.counter = 0;
exports.default = SDialogComponent;