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
import SMotionblurSvgFilter from '../../filters/SMotionblurSvgFilter'
import SComponent from '../../core/SComponent'

// Actual activate element class
class SMotionBlurComponent extends SComponent {

	/**
	 * Setup
	 */
	// static setup(type, settings) {
	// 	SElement.setup('sActivate', type, settings);
	// }

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sMotionBlur') {
		super(name, elm, {
			amount : 0.5
		}, settings);
	}

	/**
	 * _init
	 */
	_init() {
		// init component
		super._init();
	}

	/**
	 * enable
	 * Enable the component
	 * @return 	{SMotionBlurComponent}
	 */
	enable() {
		// enable component
		super.enable();
		// create a new svg filter
		this.filter = new SMotionblurSvgFilter(this.settings.amount);
		// apply the filter
		this.filter.applyTo(this.elm);
	}

	/**
	 * disable
	 * Disable the component
	 * @return 	{SMotionBlurComponent}
	 */
	disable() {
		// destroy the filter
		if (this.filter) {
			this.filter.destroy();
			this.filter = null;
		}
		// disable the component
		super.disable();
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SMotionBlurComponent = SMotionBlurComponent;

// export modules
export default SMotionBlurComponent;
