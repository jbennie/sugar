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
		this.id = 's-svg-filter-' + sugarTools.uniqid();

		// if need to inject svg
		if ( ! document.body.querySelector('#s-svg-filters')) SugarSvgFilter._injectFiltersContainer();

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
		this.elm = elm;
	}

	/**
	 * Insert the filter
	 */
	_insertFilter() {

		let svg = `
			<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
				<defs>
				</defs>
			</svg>
		`;
		let div = document.createElement('div');
		div.innerHTML = svg;
		let defs = div.querySelector('defs');

		// add the filter to the svg
		this.filter_content = '<filter id="'+this.id+'">'+this.filter_content+'</filter>';
		defs.innerHTML = this.filter_content;
		this.filter = defs.querySelector('#'+this.id);
		this.svg = div.querySelector('svg');
		SugarSvgFilter.filtersContainer.appendChild(this.svg);
	}

	/**
	 * Inject svg
	 */
	static _injectFiltersContainer() {
		let style = ['position:absolute;','left:-1000px;','top:-300px;'];
		if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
			style.push('display:none;');
		}
		SugarSvgFilter.filtersContainer = document.createElement('div');
		SugarSvgFilter.filtersContainer.id = 's-svg-filters';
		SugarSvgFilter.filtersContainer.style = style.join(' ');
		document.body.appendChild(SugarSvgFilter.filtersContainer);
	}

}