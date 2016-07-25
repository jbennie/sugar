/*
 * Sugar-activate.js
#
 * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
#
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  20.01.16
 * @updated  20.01.16
 * @version  1.0.0
 */

// Localstorage fonts
class SLocalStorageFonts {

	/**
	 * Constructor
	 */
	constructor() {
		this.settings = {
			version : 1.0,
			json_path : '/fonts/fonts.json',
			debug : false
		}
	}

	/**
	 * Init
	 */
	init(settings = {}) {
		this.settings = {...this.settings, ...settings};

		// check cachebuster
		let cb = this.settings.json_path.split('#');
		if (cb.length == 2) {
			this.settings.version = cb[1];
			this.settings.json_path = cb[0];
		}

		try {
			this._cache = window.localStorage.getItem('sugar-fonts');
			if (this._cache) {
				this._cache = JSON.parse(this._cache);
				if (this._cache.version == this.settings.version) {
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
				console.log(this);
				request.open('GET', this.settings.json_path, true);
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
								version : this.settings.version,
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
		if (this.settings.debug) {
			console.log('SUGAR-LOCALSTORAGEFONTS', arguments);
		}
	}
};

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.sLocalStorageFonts = new SLocalStorageFonts();

// export modules
export default window.sugar.sLocalStorageFonts;