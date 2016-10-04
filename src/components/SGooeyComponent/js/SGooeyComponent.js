
import SGooeySvgFilter from '../../../js/filters/SGooeySvgFilter'
import SComponent from '../../../js/core/SComponent'

// Actual activate element class
class SGooeyElement extends SComponent {

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sGooey') {
		super(name, elm, {

			/**
			 * The overall amount of effect
			 * @setting
			 * @type 		{Number}
			 * @default 	10
			 */
			amount : 10,

			/**
			 * The blur amount to produce the effect
			 * @setting
			 * @type 		{Number}
			 * @default 	null
			 */
			blur : null,

			/**
			 * The contrast amount to produce the effect
			 * @setting
			 * @type 		{Number}
			 * @default 	null
			 */
			contrast : null,

			/**
			 * The shrink amount to produce the effect
			 * @setting
			 * @type 		{Number}
			 * @default 	null
			 */
			shrink : null


		}, settings);
	}

	/**
	 * Init the filter
	 */
	_init() {
		// get amount
		let amount = this.dataset('sGooey') || 10;
		let blur = this.dataset('sGooeyBlur');
		let contrast = this.dataset('sGooeyContrast');
		let shrink = this.dataset('sGooeyShrink');
		// create a new svg filter
		this.filter = new SGooeySvgFilter(amount);
		// apply the filter
		this.filter.applyTo(this.elm);
		if (blur) this.filter.blur = blur;
		if (contrast) this.filter.contrast = contrast;
		if (shrink) this.filter.shrink = shrink;
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SGooeyElement = SGooeyElement;

// export modules
export default SGooeyElement;
