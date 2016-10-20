require('webcomponents.js');

export default class SWebComponent extends HTMLElement {

	/**
	 * Constructor
	 */
	constructor() {
		super();
	}

	/**
	 * When the component is created
	 */
	createdCallback() {

	}

	/**
	 * When the element is attached
	 */
	attachedCallback() {
		console.log('atached');
	}

	/**
	 * When the component is detached
	 */
	detachedCallback() {

	}

	/**
	 * When any of the component attribute changes
	 */
	attributeChangedCallback(attribute, newVal, oldVal) {
		console.log('attr updated', attribute, newVal, oldVal);
	}

	/**
	 * Destroy the component
	 */
	destroy() {
		console.log('destroy', this);
	}
}
