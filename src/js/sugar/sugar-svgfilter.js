import * as sugarTools from './sugar-tools'

let _sSvgFilters = [];
let _sIsSvgInjected = false;

export default class SugarSvgFilter {

	/**
	 * Constructor
	 */
	constructor(filter_content) {

		// save parameters
		this.filter_content = filter_content;

		// generate a uniqid
		this.id = 'svg-filter-' + sugarTools.uniqid();

		// if need to inject svg
		if ( ! document.body.querySelector('#s-svg-filters')) SugarSvgFilter._injectSvg();

		// insert the filter
		this._insertFilter();
	}

	/**
	 * Apply the filter to an element
	 */
	applyTo(elm) {
		['-webkit-','-moz-','-ms-','-o-',''].forEach((vendor) => {
			elm.style[vendor+'filter'] = 'url("#'+this.id+'")';
		});
	}

	/**
	 * Insert the filter
	 */
	_insertFilter() {
		// add the filter to the svg
		SugarSvgFilter.defs.innerHTML += this.filter_content;
		this.filter = SugarSvgFilter.defs.querySelector('filter:last-child');
		this.filter.id = this.id;
	}

	/**
	 * Inject svg
	 */
	static _injectSvg() {
		let style = ['position:absolute;','left:-1000px;','top:-300px;'];
		if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
			style.push('display:none;');
		}
		let svg = `
			<svg id="s-svg-filters" xmlns="http://www.w3.org/2000/svg" version="1.1" width="800" style="${style.join(' ')}">
				<defs>
				</defs>
			</svg>
		`;
		let div = document.createElement('div');
		div.innerHTML = svg;
		SugarSvgFilter.defs = div.querySelector('defs');
		document.body.appendChild(div.querySelector('svg'));
	}

}