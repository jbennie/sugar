import SugarSvgFilter from './sugar-svgfilter'

export default class SugarGooeyFilter extends SugarSvgFilter {

	/**
	 * Constructor
	 */
	constructor(amount = 8) {

		let filter = document.createElement('filter');

		// blur
		let blur = document.createElement('feGaussianBlur');
		blur.setAttribute('in','SourceGraphic');
		blur.setAttribute('stdDeviation',amount);
		blur.setAttribute('result','blur');

		// color matrix
		// let color_matrix = document.createElement('feColorMatrix');
		// color_matrix.setAttribute('in','blur');
		// color_matrix.setAttribute('mode','matrix');
		// color_matrix.setAttribute('values','1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 ' + (amount + 9) + ' -9');
		// color_matrix.setAttribute('result','gooey');

		// // composite
		// let composite = document.createElement('feComposite');
		// composite.setAttribute('in','SourceGraphic');
		// composite.setAttribute('in2','gooey');
		// composite.setAttribute('operator','atop');

		// append in filter
		filter.appendChild(blur);
		// filter.appendChild(color_matrix);
		// filter.appendChild(composite);

		super(filter);
	}
}