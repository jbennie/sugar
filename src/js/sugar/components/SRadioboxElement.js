import SComponent from '../core/SComponent'
import querySelectorVisibleLiveOnce from '../dom/querySelectorVisibleLiveOnce'

// Actual activate element class
class SRadioboxElement extends SComponent {

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

		// init
		this.initProxy(this._init.bind(this));
	}

	/**
	 * Init
	 */
	_init() {

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

// init the radiobox
querySelectorVisibleLiveOnce('[s-radiobox][type="checkbox"],[s-radiobox][type="radio"]', (elm) => {
	new SRadioboxElement(elm);
});


// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SRadioboxElement = SRadioboxElement;

// export modules
export default SRadioboxElement;
