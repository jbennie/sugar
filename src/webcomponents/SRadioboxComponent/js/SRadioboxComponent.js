import SWebComponent from '../../../js/core/SWebComponent'
import __getAnimationProperties from '../../../js/dom/getAnimationProperties'
import __style from '../../../js/dom/style'

export default class SRadioboxComponent extends SWebComponent {

	/**
	 * @constructor
	 */
	constructor() { super(); }

	/**
	 * Default props
	 * @definition 		SWebComponent.getDefaultProps
	 */
	static get defaultProps() {
		return {
		}
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();
		// try to get the id or name of the input
		let input_for = this.id || this.name;

		// stop if already the s-radiobox div
		if (this.nextSibling && this.nextSibling.nodeName != '#text' && this.nextSibling.classList.contains(this.componentClassName())) return;

		// append an empty element after the input to style it
		let nodeType = 'div';
		if ( this.parentNode.nodeName.toLowerCase() !== 'label') {
			nodeType = 'label';
		}
		let styleNode = document.createElement(nodeType);
		this.addComponentClass(styleNode);
		if (nodeType === 'label' && input_for) {
			styleNode.setAttribute('for', input_for);
		}
		this.parentNode.insertBefore(styleNode, this.nextSibling);
	}

	/**
	 * Render
	 * @definition 		SWebComponent.render
	 */
	render() {
		super.render();
	}
}

// register component
SWebComponent.define('s-radiobox', SRadioboxComponent, 'input');
