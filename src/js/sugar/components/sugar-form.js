/*
 * Sugar-activate.js
#
 * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
#
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  20.01.16
 * @updated  20.01.16
 * @version  1.0.0
 */
import SugarElement from '../core/sugar-element'
import sDom from '../core/sugar-dom'
var _get = require('lodash/get');

// Actual activate element class
class SugarRadioboxElement extends SugarElement {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SugarElement.setup('sActivate', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sRadiobox', elm, {
		}, settings);

		// init
		this.init();
	}

	/**
	 * Init
	 */
	init() {
		
		// try to get the id or name of the input
		let input_for = this.elm.id || this.elm.name;

		// stop if already the s-radiobox div
		if (this.elm.nextSibling && this.elm.nextSibling.nodeName != '#text' && sDom.hasClass(this.elm.nextSibling, 's-radiobox')) return;

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

sDom.onInserted('input[type="checkbox"],input[type="radio"]', (elm) => {
	new SugarRadioboxElement(elm);
});
// sDom.domReady(() => {
// 	[].forEach.call(document.body.querySelectorAll('input[type="checkbox"],input[type="radio"]'), (elm) => {
// 		new SugarRadioboxElement(elm);
// 	});
// });

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.RadioboxElement = SugarRadioboxElement;

// export modules
module.exports = {
	RadioboxElement : SugarRadioboxElement
};