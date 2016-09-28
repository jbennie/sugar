import uniqid from '../utils/uniqid'

let _sSvgFilters = [];
let _sIsSvgInjected = false;

export default class SSvgFilter {

	/**
	 * Constructor
	 */
	constructor(filter_content) {

		// save the reference of each elements
		this.elms = [];

		// save parameters
		this.filter_content = filter_content;

		// generate a uniqid
		this.id = 's-svg-filter-' + uniqid();

		// if need to inject svg
		if ( ! document.body.querySelector('#s-svg-filters')) SSvgFilter._injectFiltersContainer();

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
		SSvgFilter.filtersContainer.appendChild(this.svg);
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
		this.svg.parentNode.removeChild(this.svg);
	}

	/**
	 * Inject svg
	 */
	static _injectFiltersContainer() {
		let style = ['position:absolute;','left:-1000px;','top:-300px;'];
		if (/Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)) {
			style.push('display:none;');
		}
		SSvgFilter.filtersContainer = document.createElement('div');
		SSvgFilter.filtersContainer.id = 's-svg-filters';
		SSvgFilter.filtersContainer.style = style.join(' ');
		document.body.appendChild(SSvgFilter.filtersContainer);
	}

}
