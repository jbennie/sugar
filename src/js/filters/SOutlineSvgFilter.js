import SSvgFilter from './SSvgFilter'


/**
 * @name 			SOutlineSvgFilter
 * @extends 		SSvgFilter
 * This class represent an outline filter that can be applied on any HTMLElement.
 *
 * @example 		js
 * const filter = new SOutlineSvgFilter();
 * filter.applyTo(myCoolHTMLElement);
 *
 * @author 			Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */
class SOutlineSvgFilter extends SSvgFilter {

	/**
	 * @constructor
	 * @param 		{Number} 		amount 		The amount of effect to apply
	 */
	constructor(radius = 8) {
		super(`
			<feMorphology operator="dilate" radius="${radius}"
			in="SourceGraphic" result="THICKNESS" />
			<feComposite operator="out" in="THICKNESS" in2="SourceGraphic" ></feComposite>
		`);
		this._$morphology = this.filter.querySelector('feMorphology')
	}

	/**
	 * The radius to produce the effect
	 * @type 	{Number}
	 */
	set radius(value) {
		this._$morphology.setAttribute('radius', value);
	}
}

// export modules
export default SOutlineSvgFilter;
