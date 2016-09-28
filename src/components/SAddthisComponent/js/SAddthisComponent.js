/*
 * SAddthisComponent.js
 *
 * Component that allows to stick an element to the top of the screen
 *
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  25.07.16
 * @updated  25.07.16
 * @version  1.0.0
 */
import SComponent from '../../../js/core/SComponent'
import STemplate from '../../../js/core/STemplate'
import __dispatchEvent from '../../../js/dom/dispatchEvent'
import __querySelectorLive from '../../../js/dom/querySelectorLive'

let _sAddThisLoaded = null;

class SAddthisComponent extends SComponent {

	/**
	 * _addthis
	 * Store the addthis instance
	 * @type 	{Object}
	 */
	_addthis = null;

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sAddthis') {
		super(name, elm, {
			/**
			 * pubid
			 * The public id used to reach addthis service
			 * @type 	{String}
			 */
			pubid : null,

			/**
			 * url
			 * The url to share
			 * @type 	{String}
			 */
			url : window.location.url,

			/**
			 * title
			 * The title to share
			 * @type 	{String}
			 */
			title : document.title,

			/**
			 * description
			 * The description to share
			 * @type 	{String}
			 */
			description : null,

			/**
			 * swfurl
			 * The swfurl to share
			 * @type 	{String}
			 */
			swfurl : null,

			/**
			 * width
			 * The width of the popup
			 * @type 	{String}
			 */
			width : null,

			/**
			 * height
			 * The height of the popup
			 * @type 	{String}
			 */
			height : null,

			/**
			 * email_template
			 * The email_template to share
			 * @type 	{String}
			 */
			email_template : null,

			/**
			 * email_vars
			 * The email_vars to share
			 * @type 	{String}
			 */
			email_vars : null

		}, settings);

		// set the pubid in window if exist in settings
		if (this.settings.pubid) {
			window.addthis_config = window.addthis_config || {};
			window.addthis_config.pubid = this.settings.pubid;
		}
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();
	}

	/**
	 * _initDependencies
	 * Init the dependencies
	 * @return 	{Array} 	An array of promises to resolve before init
	 */
	_initDependencies() {
		return [new Promise((resolve, reject) => {

			// check if already loaded
			if (window.addthis) {
				this._addthis = window.addthis;
				resolve(this._addthis);
				return;
			}
			// if already a loader
			if (_sAddThisLoaded) {
				document.body.addEventListener('addthis:loaded', (e) => {
					this._addthis = window.addthis;
					resolve(this._addthis);
				});
				return;
			}

			// map the loaded function into the window
			_sAddThisLoaded = () => {
				this._addthis = window.addthis;
				this._addthis.init();
				__dispatchEvent(document.body, 'addthis:loaded');
				resolve(this._addthis);
			};
			// check if addThis is loaded
			(function checkIfLoaded() {
				if (window.addthis) {
					_sAddThisLoaded();
					return;
				}
				setTimeout(checkIfLoaded, 50);
			})();
			// add the script the the page
			const script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = 'http://s7.addthis.com/js/300/addthis_widget.js#async=1';
			document.body.appendChild(script);
		})];
	}

	/**
	 * enable
	 * Enable the component
	 * @return 	{SAddthisComponent}
	 */
	enable() {
		super.enable();

		// init the button
		this._addthis.toolbox(this.elm, window.addthis_config || {}, this.settings);
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SAddthisComponent = SAddthisComponent;

// export
export default SAddthisComponent;
