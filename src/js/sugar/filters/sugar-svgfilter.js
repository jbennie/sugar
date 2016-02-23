import * as sugarTools from '../core/sugar-tools'

let _sSvgFilters = [];
let _sIsSvgInjected = false;

export default class SugarSvgFilter {

	/**
	 * Constructor
	 */
	constructor(filter_content) {

		// save the reference of each elements
		this.elms = [];

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
		this.elms.push(elm);
	}

	/**
	 * Unapply from
	 */
	unapplyFrom(elm) {
		['-webkit-','-moz-','-ms-','-o-',''].forEach((vendor) => {
			delete elm.style[vendor+'filter'];
		});
		// remove from stack
		let idx = this.elms.indexOf(elm);
		if (idx) this.elms.splice(idx,1);
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
	 * Destroy
	 */
	destroy() {
		// loop on each element savec in stack to remove the filter
		this.elms.forEach((elm) => {
			this.unapplyFrom(elm);
		});
		// remove the filter from the html
		this.filter.parent.removeChild(this.filter);
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