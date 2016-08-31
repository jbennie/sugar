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
import SComponent from '../core/SComponent'
import querySelectorLive from '../dom/querySelectorLive'
import __getAnimationProperties from '../dom/getAnimationProperties';
import __next from '../dom/next'
import __previous from '../dom/previous'
import __offset from '../dom/offset'
import __scrollTop from '../dom/scrollTop'
import __uniqid from '../tools/uniqid'
import SEvent from '../core/SEvent'

import SParticlesSystemComponent from './SParticlesSystemComponent';

// class
class SInputLabelPullComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sInputLabelPull', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sInputLabelPull') {
		super(name, elm, {

		}, settings);
	}

	/**
	 * On added to dom
	 */
	_init() {
		// init component
		super._init();
	}

	/**
	 * enable
	 * Enable the component
	 * @return 	{SInputLabelPullComponent}
	 */
	enable() {
		// maintain chainability
		return this;
	}

	/**
	 * disable
	 * Disable the component
	 * @return 	{SInputLabelPullComponent}
	 */
	disable() {
		// maintain chainability
		return this;
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SInputLabelPullComponent = SInputLabelPullComponent;

// export modules
export default SInputLabelPullComponent;
