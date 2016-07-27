import STemplate from './STemplate';
import mustache from 'mustache';

export default class STemplateMustache extends STemplate {

	/**
	 * Constructor
	 */
	constructor() {
		super(...arguments);
	}

	/**
	 * Override the render method
	 */
	render(template, data) {
		return mustache.render(template, data);
	}
}
