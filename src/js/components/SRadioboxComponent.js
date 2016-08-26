import SComponent from '../core/SComponent'
import querySelectorLive from '../dom/querySelectorLive';

// Actual activate element class
class SRadioboxComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sRadiobox', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sRadiobox') {
		super(name, elm, {
		}, settings);
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
		if (this.elm.nextSibling && this.elm.nextSibling.nodeName != '#text' && this.elm.nextSibling.classList.contains('s-radiobox')) return;

		// append an empty element after the input to style it
		let nodeType = 'div';
		if ( this.elm.parentNode.nodeName.toLowerCase() != 'label') {
			nodeType = 'label';
		}
		let styleNode = document.createElement(nodeType);
		styleNode.className = 's-radiobox';
		if (nodeType == 'label' && input_for) {
			styleNode.setAttribute('for', input_for);
		}
		this.elm.parentNode.insertBefore(styleNode, this.elm.nextSibling);

	}
}

// initOn
SRadioboxComponent.initOn = function(selector, settings = {}) {
	// init the select
	return querySelectorLive(selector).visible().once().subscribe((elm) => {
		new SRadioboxComponent(elm, settings);
	});
};


// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SRadioboxComponent = SRadioboxComponent;

// export modules
export default SRadioboxComponent;
