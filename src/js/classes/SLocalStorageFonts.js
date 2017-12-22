/**
 * @name 		SLocalStorageFonts
 * This class allows to easily store and load custom fonts from the localStorage
 *
 * @example 	js
 * new SLocalStorageFonts({
 *  	json_path : '/fonts/fonts.json#v1'
 * });
 *
 * // the fonts.json file looks like this
 * {
 * 		"fonts" : [{
 *	  		"font-family" : "Open Sans",
 *	    	"font-weight" : 300,
 *      	"src" : "url(data:application/font-woff;base64,d09GRgA..."
 *      }]
 * }
 *
 * @author 		Olivier Bossel<olivier.bossel@gmail.com>
 */
class SLocalStorageFonts {

	/**
	 * Settings
	 * @type 	{Object}
	 */
	_settings = {

		/**
		 * Store the version of the fonts to load.
		 * Used for cache busting
		 * @setting
		 * @type 		{String}
		 * @default 	1.0
		 */
		version : 1.0,

		/**
		 * Set the json file to load
		 * @setting
		 * @type 		{String}
		 * @default 	/fonts/fonts.json
		 */
		json_path : '/fonts/fonts.json',

		/**
		 * Set if want the debug messages in the console
		 * @setting
		 * @type 		{Boolean}
		 * @default 	false
		 */
		debug : false

	};

	/**
	 * @constructor
	 * @param 		{Object} 	settings 	The settings
	 */
	constructor(settings = {}) {
		this._settings = {
			...this._settings,
			...settings
		};
		// init
		this._init();
	}

	/**
	 * Init
	 */
	_init() {
		// check cachebuster
		let cb = this._settings.json_path.split('#');
		if (cb.length == 2) {
			this._settings.version = cb[1];
			this._settings.json_path = cb[0];
		}

		try {
			this._cache = window.localStorage.getItem('sugar-fonts');
			if (this._cache) {
				this._cache = JSON.parse(this._cache);
				if (this._cache.version == this._settings.version) {
					this._debug('No new version of you fonts');
					this._insertFonts(this._cache.value);
				} else {
					this._debug('New version of your fonts');
					// busting the cache
					window.localStorage.removeItem('sugar-fonts');
					this._cache = null;
				}
			}
		} catch(e) {
			// localstorage not available
			this._debug('Your browser seems to not support the localStorage api');
		}

		// if no cache, load the fonts file
		if ( ! this._cache) {
			window.addEventListener('load', (e) => {
				let request = new XMLHttpRequest(),
					response = undefined;
				request.open('GET', this._settings.json_path, true);
				request.onload = () => {
					if (request.status == 200) {
						try {
							response = JSON.parse(request.responseText);
							let fontface = '';
							response.fonts.forEach((font) => {
								fontface += '@font-face{';
								for (let prop in font) {
									let value = font[prop];
									if (prop == 'font-family') {
										value = '"'+value+'"';
									}
									fontface += prop + ':' + value + ';';
								}
								fontface += '}';
							});
							// insert fonts
							this._insertFonts(fontface);
							// save fonts in localstorage
							window.localStorage.setItem('sugar-fonts', JSON.stringify({
								version : this._settings.version,
								value : fontface
							}));
						} catch(e) {

						}
					}
				}
				request.send();
			});
		}
	}

	/**
	 * Insert font
	 */
	_insertFonts(value) {
		this._debug('inserting fonts');
		let style = document.createElement('style');
		style.innerHTML = value;
		document.head.appendChild(style);
	}

	/**
	 * Debug
	 */
	_debug() {
		if (this._settings.debug) {
			console.log('SUGAR-LOCALSTORAGEFONTS', arguments);
		}
	}
};

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.sLocalStorageFonts = SLocalStorageFonts;

// export modules
export default SLocalStorageFonts;
