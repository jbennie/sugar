import * as sugarTools from './sugar-tools'

let _sSvgFilters = [];
let _sIsSvgInjected = false;

export default class SugarSvgFilter {

	/**
	 * Constructor
	 */
	constructor(filter) {

		// save parameters
		this.filter = filter;

		// generate a uniqid
		this.id = 'svgfilter' + sugarTools.uniqid();

		// set the id in the filter
		this.filter.id = this.id;

		// if need to inject svg
		if ( ! document.body.querySelector('#s-svg-filters')) SugarSvgFilter._injectSvg();

		// insert the filter
		this._insertFilter();
	}

	/**
	 * Apply the filter to an element
	 */
	applyTo(elm) {
		console.log('apply to', elm);
		['-webkit-','-moz-','-ms-','-o-',''].forEach((vendor) => {
			elm.style[vendor+'filter'] = 'url("#'+this.id+'")';
		});
	}

	/**
	 * Insert the filter
	 */
	_insertFilter() {

		// add the filter to the svg
		SugarSvgFilter.defs.appendChild(this.filter);
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
			<defs>
			</defs>
		`;
		let svg_elm = document.createElement('svg');
		svg_elm.setAttribute('xmlns', "http://www.w3.org/2000/svg");
		svg_elm.setAttribute('version', "1.1");
		svg_elm.setAttribute('style', style.join(' '));
		svg_elm.innerHTML = svg;
		SugarSvgFilter.defs = svg_elm.querySelector('defs');

		// append the filter to the page
		document.body.appendChild(svg_elm);
	}

}