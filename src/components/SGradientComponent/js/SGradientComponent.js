import SGradientSvgFilter from '../../../js/filters/SGradientSvgFilter'
import SComponent from '../../../js/core/SComponent'

// Gradient element class
class SGradientComponent extends SComponent {

	/**
	 * @constructor
	 */
	constructor(elm, settings = {}, name = 'sGradient') {
		super(name, elm, {

			/**
			 * The colors wanted for your gradient
			 * @setting
			 * @type  		{Array}
			 */
			colors : ['#a3385e','#f2bc2b'],

			/**
			 * The type of gradient wanted (linear, radial)
			 * @setting
			 * @type 		{String}
			 * @default 	linear
			 */
			type : 'linear'

		}, settings);

	}

	/**
	 * Init the filter
	 */
	_init() {
		let type = this.settings.type;
		// create a new svg filter
		this.filter = new SGradientSvgFilter();
		if (type == 'radial') {
			this.filter.radial(this.settings.colors);
		} else {
			this.filter.linear(this.settings.colors);
		}
		// apply the filter
		this.filter.applyTo(this.elm);
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SGradientElement = SGradientElement;

// export modules
export default SGradientElement;
