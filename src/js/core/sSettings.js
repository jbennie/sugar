/**
 * Store all the sugar settings grabed from your scss settings
 * @type 		{Object}
 * @name 		settings
 */

// imports
import domReady from '../dom/domReady'

// prepare a settings object to store
// the getted settings from the css
let settings = {};

// wait the css to be loaded
domReady(() => {
	let settingsElm = document.createElement('div');
	settingsElm.classList.add('s-settings');
	document.body.appendChild(settingsElm);
	let _settings = window.getComputedStyle(
		document.querySelector('.s-settings'), ':after'
	).getPropertyValue('content').trim();
	if (_settings && _settings !== '') {
		_settings = _settings.replace(/\\"/g, '"');
		// _settings = _settings.replace(/\\\'\\"/g,'"').replace(/\\"\\\'/g,'"');
		// _settings = _settings.replace(/\'\\"/g,'"').replace(/\\"\'/g,'"');
		// _settings = _settings.replace(/'"/g,'"').replace(/"'/g,'"');
		_settings = _settings.slice(1,_settings.length - 1);
		_settings = JSON.parse(_settings);

		Object.assign(settings, _settings);
		// settings = {...settings, ..._settings};
	}
});

// export the settings
module.exports = settings;
