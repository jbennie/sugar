import SComponent from '../../../js/core/SComponent'
import querySelectorLive from '../../../js/dom/querySelectorLive';

// Actual activate element class
class SRadioboxComponent extends SComponent {

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sRadiobox') {
		super(elm, {
			...settings
		}, name);
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		// try to get the id or name of the input
		let input_for = this.elm.id || this.elm.name;

		// stop if already the s-radiobox div
		if (this.elm.nextSibling && this.elm.nextSibling.nodeName != '#text' && this.elm.nextSibling.classList.contains(this.componentClassName())) return;

		// append an empty element after the input to style it
		let nodeType = 'div';
		if ( this.elm.parentNode.nodeName.toLowerCase() != 'label') {
			nodeType = 'label';
		}
		let styleNode = document.createElement(nodeType);
		this.addComponentClass(styleNode);
		if (nodeType == 'label' && input_for) {
			styleNode.setAttribute('for', input_for);
		}
		this.elm.parentNode.insertBefore(styleNode, this.elm.nextSibling);

	}
}

// @TODO : STemplate integration

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SRadioboxComponent = SRadioboxComponent;

// export modules
export default SRadioboxComponent;
