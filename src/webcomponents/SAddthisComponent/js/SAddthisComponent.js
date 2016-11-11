import SWebComponent from '../../../js/core/SWebComponent'
import __dispatchEvent from '../../../js/dom/dispatchEvent'

let _sAddThisLoaded = null;

export default class SAddthisComponent extends SWebComponent {

	/**
	 * Mount dependencies
	 * @definition 		SWebComponent.mountDependencies
	 */
	static get mountDependencies() {
		return [function() {
			return new Promise((resolve, reject) => {
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
			});
		}];
	}

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {
			/**
			 * The public id used to reach addthis service
			 * @prop
			 * @type 	{String}
			 */
			pubid : null,

			/**
			 * The url to share
			 * @prop
			 * @type 	{String}
			 */
			url : window.location.url,

			/**
			 * The title to share
			 * @prop
			 * @type 	{String}
			 */
			title : document.title,

			/**
			 * The description to share
			 * @prop
			 * @type 	{String}
			 */
			description : null,

			/**
			 * The swfurl to share
			 * @prop
			 * @type 	{String}
			 */
			swfurl : null,

			/**
			 * The width of the popup
			 * @prop
			 * @type 	{String}
			 */
			width : null,

			/**
			 * The height of the popup
			 * @prop
			 * @type 	{String}
			 */
			height : null,

			/**
			 * The email_template to share
			 * @prop
			 * @type 	{String}
			 */
			email_template : null,

			/**
			 * The email_vars to share
			 * @prop
			 * @type 	{String}
			 */
			email_vars : null
		}
	}

	/**
	 * Component will mount
	 * @definition 		SWebComponent.componentWillMount
	 */
	componentWillMount() {
		super.componentWillMount();
		// set the pubid in window if exist in settings
		if (this.props.pubid) {
			window.addthis_config = window.addthis_config || {};
			window.addthis_config.pubid = this.props.pubid;
		}
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();
		// init the button
		this._addthis.toolbox(this, window.addthis_config || {}, this.props);

	}

}
