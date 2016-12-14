"use strict";

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _autoCast = require("../utils/string/autoCast");

var _autoCast2 = _interopRequireDefault(_autoCast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _integrations = new Map();

var STemplateIntegrator = function () {
	function STemplateIntegrator() {
		_classCallCheck(this, STemplateIntegrator);
	}

	STemplateIntegrator.prototype.keepAttribute = function keepAttribute() {
		return this;
	};

	STemplateIntegrator.prototype.exclude = function exclude() {
		return this;
	};

	/**
  * Register a component integration function
  * @param 	{Function} 		integrationFn 		The function used to set the integration attributes, etc into the component elements
  */


	STemplateIntegrator.prototype.registerComponentIntegration = function registerComponentIntegration(componentClass, fn) {
		var _this = this;

		if (componentClass instanceof Array) {
			componentClass.forEach(function (comp) {
				_this.registerComponentIntegration(comp, fn);
			});
			return;
		}
		// get the component class map entry
		var arrayIntegrations = _integrations.get(componentClass) || [];
		if (arrayIntegrations.indexOf(fn) === -1) {
			arrayIntegrations.push(fn);
		}
		// set into map again
		_integrations.set(componentClass, arrayIntegrations);
	};

	STemplateIntegrator.prototype.getIntegrationFrom = function getIntegrationFrom(elm) {
		var integration = elm._sTemplateIntegration || {
			ignore: {
				"s-template-integration": true,
				"s-template-refresh": true
			},
			refresh: false
		};
		return integration;
	};

	STemplateIntegrator.prototype.getComponentIntegrationFunctionsFrom = function getComponentIntegrationFunctionsFrom(elm) {
		var functionsArray = [];
		// loop on all the component keys in the integration map
		_integrations.forEach(function (value, key) {
			if (elm instanceof key) {
				functionsArray = functionsArray.concat(value);
			}
		});
		return functionsArray;
	};

	STemplateIntegrator.prototype.setIntegrationTo = function setIntegrationTo(elm, integration) {
		elm._sTemplateIntegration = integration;
		// elm.setAttribute('s-template-integration', JSON.stringify(integration));
		return this;
	};

	STemplateIntegrator.prototype.ignore = function ignore(elm) {
		var what = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		if (!elm) return this;

		// get integration settings
		var integration = this.getIntegrationFrom(elm);

		// autocast what
		if (what) what = (0, _autoCast2.default)(what);

		// we ignore the tag itself
		if (integration.ignore === true) {
			return this;
		}

		// if has no what parameter
		// mean that we want to ignore the tag itself
		if (!what || what === true) {
			integration.ignore = true;
			return this.setIntegrationTo(elm, integration);
		}
		// if we don't have any ignore for now
		// set the new object
		if (what && (typeof what === "undefined" ? "undefined" : _typeof(what)) === 'object') {
			if (integration.ignore && _typeof(integration.ignore) === 'object') {
				what = Object.assign(integration.ignore, what);
			}
			return this.setIntegrationTo(elm, integration);
		}
		// return the this class
		return this;
	};

	/**
  * Set an element to refresh completely when the this handle it
  * @param 	{HTMLElement} 	elm 	The element to refresh
  */


	STemplateIntegrator.prototype.refresh = function refresh(elm) {
		if (!elm) return this;
		elm.setAttribute('s-template-refresh', true);
		return this;
	};

	return STemplateIntegrator;
}();

exports.default = new STemplateIntegrator();