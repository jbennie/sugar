import __autoCast from '../utils/string/autoCast'

const _integrations = new Map();

class STemplateIntegrator {

	keepAttribute() { return this; }
	exclude() { return this; }

	/**
	 * Register a component integration function
	 * @param 	{Function} 		integrationFn 		The function used to set the integration attributes, etc into the component elements
	 */
	registerComponentIntegration(componentClass, fn) {

		if (componentClass instanceof Array) {
			componentClass.forEach((comp) => {
				this.registerComponentIntegration(comp, fn);
			});
			return;
		}
		// get the component class map entry
		let arrayIntegrations = _integrations.get(componentClass) || [];
		if (arrayIntegrations.indexOf(fn) === -1) {
			arrayIntegrations.push(fn);
		}
		// set into map again
		_integrations.set(componentClass, arrayIntegrations);
	}

	getIntegrationFrom(elm) {
		let integration = elm._sTemplateIntegration || {
			ignore : {
				"s-template-integration" : true,
				"s-template-refresh" : true
			},
			refresh : false
		};
		return integration;
	}

	getComponentIntegrationFunctionsFrom(elm) {
		let functionsArray = [];
		// loop on all the component keys in the integration map
		_integrations.forEach((value, key) => {
			if (elm instanceof key) {
				functionsArray = functionsArray.concat(value);
			}
		});
		return functionsArray;
	}

	setIntegrationTo(elm, integration) {
		elm._sTemplateIntegration = integration;
		// elm.setAttribute('s-template-integration', JSON.stringify(integration));
		return this;
	}

	ignore(elm, what = null) {

		if ( ! elm) return this;

		// get integration settings
		let integration = this.getIntegrationFrom(elm);

		// autocast what
		if (what) what = __autoCast(what);

		// we ignore the tag itself
		if (integration.ignore === true) {
			return this;
		}

		// if has no what parameter
		// mean that we want to ignore the tag itself
		if (! what || what === true) {
			integration.ignore = true;
			return this.setIntegrationTo(elm, integration);
		}
		// if we don't have any ignore for now
		// set the new object
		if (what && typeof(what) === 'object') {
			if (integration.ignore && typeof(integration.ignore) === 'object') {
				what = Object.assign(integration.ignore, what);
			}
			return this.setIntegrationTo(elm, integration);
		}
		// return the this class
		return this;
	}

	/**
	 * Set an element to refresh completely when the this handle it
	 * @param 	{HTMLElement} 	elm 	The element to refresh
	 */
	refresh(elm) {
		if ( ! elm) return this;
		elm.setAttribute('s-template-refresh', true);
		return this;
	}

}

export default new STemplateIntegrator();
