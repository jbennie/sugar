'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _sharerNpm = require('sharer.npm.js');

var _sharerNpm2 = _interopRequireDefault(_sharerNpm);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SShareComponent = function (_SWebComponent) {
	_inherits(SShareComponent, _SWebComponent);

	function SShareComponent() {
		_classCallCheck(this, SShareComponent);

		return _possibleConstructorReturn(this, _SWebComponent.apply(this, arguments));
	}

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SShareComponent.prototype.componentMount = function componentMount() {
		_SWebComponent.prototype.componentMount.call(this);

		// set cursor
		this.style.cursor = 'pointer';

		// list all attributes available for each platforms
		this._platformAttrs = {
			twitter: ['title', 'url', 'hashtags', 'via'],
			facebook: ['url'],
			linkedin: ['url'],
			googleplus: ['url'],
			email: ['title', 'url', 'to', 'subject'],
			whatsapp: ['title', 'url'],
			telegram: ['title', 'url'],
			viber: ['title', 'url'],
			pinterest: ['url', 'image', 'description'],
			tumblr: ['url', 'title', 'caption', 'tags'],
			hackernews: ['url', 'title'],
			reddit: ['url'],
			vk: ['url', 'title', 'image', 'caption'],
			buffer: ['url', 'title', 'via', 'picture'],
			xing: ['url', 'title'],
			line: ['url', 'title'],
			instapaper: ['url', 'title', 'description'],
			pocket: ['url'],
			digg: ['url'],
			stumbleupon: ['title', 'url'],
			flipboard: ['title', 'url'],
			weibo: ['url', 'title', 'image', 'apikey', 'relateui'],
			renren: ['url'],
			myspace: ['url', 'title', 'description'],
			blogger: ['url', 'title', 'description'],
			baidu: ['url', 'title'],
			okru: ['url', 'title']
		};

		// listen for click on the element
		this.addEventListener('click', this._onClick.bind(this));
	};

	/**
  * Get default share attributes
  * @param 		{String} 		attr 		The attribute name to process
  * @return 		{String} 					The default attribute
  */


	SShareComponent.prototype._getDefaultShareAttriute = function _getDefaultShareAttriute(attr) {
		switch (attr) {
			case 'title':
			case 'subject':
			case 'caption':
				return document.title;
				break;
			case 'description':
				var descElm = document.querySelector('meta[name="description"]');
				if (descElm && descElm.content) return descElm.content;
				break;
			case 'url':
				var href = this.getAttribute('href');
				return href && href !== '#' ? href : document.location.href;
				break;
		}
		return null;
	};

	/**
  * Handle click
  * @param 		{Event} 		e 		The click event
  */


	SShareComponent.prototype._onClick = function _onClick(e) {
		var _this2 = this;

		// loop on platform attributes
		if (!this._platformAttrs[this.props.platform]) return;
		e.preventDefault();
		this.setAttribute('data-sharer', this.props.platform);
		this._platformAttrs[this.props.platform].forEach(function (attr) {
			if (_this2.hasAttribute('data-' + attr)) return;
			var val = _this2.props[attr];
			if (!val) {
				val = _this2._getDefaultShareAttriute(attr);
			}
			if (val) {
				_this2.setAttribute('data-' + attr, val);
			}
		});

		// create a new sharer
		var sharer = new _sharerNpm2.default(this);
		sharer.share();
	};

	_createClass(SShareComponent, null, [{
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   */
		get: function get() {
			return {
				/**
     * On which platform to share the content
     * @prop
     * @type 		{String}
     */
				platform: null,

				/**
     * Set the title to share
     * @prop
     * @type 		{String}
     * @default 	document.title
     */
				title: null,

				/**
     * Set the url to share
     * @prop
     * @type 		{String}
     * @default 	document.location.href
     */
				url: null,

				/**
     * Set a username to tweet through without @
     * @prop
     * @type 		{String}
     */
				via: null,

				/**
     * Set some hashtags to add to tweet comma separated without #
     * @prop
     * @type 		{String}
     */
				hashtags: null,

				/**
     * Set an email address to share to
     * @prop
     * @type 		{String}
     */
				to: null,

				/**
     * Set the email subject
     * @prop
     * @type 		{String}
     * @default 	document.title
     */
				subject: null,

				/**
     * Set the absolute image url to share through (pinterest,vk,weibo)
     * @prop
     * @type 		{String}
     */
				image: null,

				/**
     * Set the description to share (pinterest,instapaper,myspace,blogger,)
     * @prop
     * @type 		{String}
     * @default 	meta[description]
     */
				description: null,

				/**
     * Set the caption to share (tumblr,vk)
     * @prop
     * @type 		{String}
     * @default 	document.title
     */
				caption: null,

				/**
     * Set the tags to share comma separated (tumblr)
     * @prop
     * @type 		{String}
     */
				tags: null
			};
		}

		/**
   * Required props
   * @definition 		SWebComponent.requiredProps
   */

	}, {
		key: 'requiredProps',
		get: function get() {
			return ['platform'];
		}
	}]);

	return SShareComponent;
}(_SWebComponent3.default);

exports.default = SShareComponent;


_sTemplateIntegrator2.default.registerComponentIntegration(SShareComponent, function (component) {
	_sTemplateIntegrator2.default.ignore(component, {
		style: true
	});
});