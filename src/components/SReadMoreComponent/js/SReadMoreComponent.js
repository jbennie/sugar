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
import SActivateComponent from '../../SActivateComponent'
import __autoCast from '../../../js/utils/string/autoCast'
import __realHeight from '../../../js/dom/realHeight'
import __getStyleProperty from '../../../js/dom/getStyleProperty'
import STemplate from '../../../js/core/STemplate'

// Actual activate element class
class SReadMoreComponent extends SActivateComponent {

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sReadMore') {
		super(elm, {
			toggle : true,
			history : false,
			threshold : null,
			...settings
		}, name);
	}

	/**
	 * Init
	 */
	_init() {

		// init component
		super._init();
	}

	/**
	 * Enable the component
	 */
	enable() {
		super.enable();

		// loop on each targets to check the targeted height
		[].forEach.call(this.targets, (target) => {

			// check if has an targeted height
			let targetedHeight = target.style.maxHeight || __getStyleProperty(target, 'maxHeight');
			if (targetedHeight === 'none') {
				targetedHeight = null;
			}
			if (targetedHeight) {
				targetedHeight = parseFloat(targetedHeight);
			}

			// check the actual height of the target
			const realHeight = __realHeight(target);

			// store the targetedHeight into the element
			target._sReadMoreTargetedHeight = targetedHeight;
			target._sReadMoreOriginalHeight = realHeight;

			// do nothing if don't have any targetedHeight
			if (typeof(targetedHeight) !== 'number') return;

			let threshold = this.settings.threshold;
			if (typeof(threshold) === 'function') {
				threshold = threshold(target);
			}

			// check if the targetedHeight is lower that the actual height
			if (targetedHeight + threshold >= realHeight) {
				// we can activate the element right now cause it is not larger that the target
				this.activateTarget(target);
			} else {
				// unactivate target
				this.unactivateTarget(target);
			}
		});
	}

	/**
	 * Activate target
	 * @override
	 * @param 		{HTMLElement} 		target 		The target element
	 */
	activateTarget(target) {
		if (target._sReadMoreOriginalHeight) {
			// set the max-height
			target.style.maxHeight = target._sReadMoreOriginalHeight + 'px';
		}
		// add the active class
		target.classList.add(this.settings.activeTargetClass || this.settings.activeClass);
	}

	/**
	 * Unactivate target
	 * @override
	 * @param 		{HTMLElement} 		target 		The target element
	 */
	unactivateTarget(target) {
		let threshold = this.settings.threshold;
		if (typeof(threshold) === 'function') {
			threshold = threshold(target);
		}
		if (target._sReadMoreTargetedHeight + threshold >= target._sReadMoreOriginalHeight) return;
		if (typeof(target._sReadMoreTargetedHeight) === 'number') {
			// set the max-height
			target.style.maxHeight = target._sReadMoreTargetedHeight + 'px';
		}
		// remove the active class
		target.classList.remove(this.settings.activeTargetClass || this.settings.activeClass);
	}
}

// STemplate integration
STemplate.registerComponentIntegration('SReadMoreComponent', (component) => {
	[].forEach.call(component.targets, (target) => {
		STemplate.ignore(target, {
			style : true
		});
	});
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SReadMoreComponent = SReadMoreComponent;

// export
export default SReadMoreComponent;
