import SugarSvgFilter from './sugar-svgfilter'

export default class SugarGooeyFilter extends SugarSvgFilter {

	/**
	 * Constructor
	 */
	constructor(amount = 8) {
		super(`
			<filter>
				<feGaussianBlur in="SourceGraphic" stdDeviation="${amount}" result="blur" />
				<feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${(amount + 9)} -9" result="gooey" />
				<feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
			</filter>
		`);
	}

	/**
	 * Set amount
	 */
	set amount(value) {
		this._blur = this.filter.querySelector('feGaussianBlur');
		this._color_matrix = this.filter.querySelector('feColorMatrix');
		console.log(this._blur);
		this._blur.setAttribute('stdDeviation', value);
		this._color_matrix.setAttribute('values', `1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ${(value + 9)} -9`);
	}
}