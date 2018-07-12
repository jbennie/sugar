'use strict';

var _domReady = require('../dom/domReady');

var _domReady2 = _interopRequireDefault(_domReady);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// prepare a settings object to store
// the getted settings from the css
var settings = {};

// wait the css to be loaded
/**
 * Store all the sugar settings grabed from your scss settings
 * @type 		{Object}
 * @name 		settings
 */

// imports
(0, _domReady2.default)(function () {
	var settingsElm = document.createElement('div');
	settingsElm.classList.add('s-settings');
	document.body.appendChild(settingsElm);
	var _settings = window.getComputedStyle(settingsElm, ':after').getPropertyValue('content').trim();
	if (_settings && _settings !== '' && _settings !== 'none') {
		_settings = _settings.replace(/\\"/g, '"');
		// handle numbers that does not have initial 0.65
		_settings = _settings.replace(/([:|\s])(\.\d+)([\s|,|}]?)/g, "$10$2$3");
		// _settings = _settings.replace(/\\\'\\"/g,'"').replace(/\\"\\\'/g,'"');
		// _settings = _settings.replace(/\'\\"/g,'"').replace(/\\"\'/g,'"');
		// _settings = _settings.replace(/'"/g,'"').replace(/"'/g,'"');
		_settings = _settings.slice(1, _settings.length - 1);
		_settings = JSON.parse(_settings);
		Object.assign(settings, _settings);
		// settings = {...settings, ..._settings};
	}
});

// export the settings
module.exports = settings;