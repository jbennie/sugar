/*
 * Sugar-activate.js
#
 * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
#
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  20.01.16
 * @updated  20.01.16
 * @version  1.0.0
 */
import SSvgFilter from './s-svgfilter'
import SElement from '../core/s-element'
import sDom from '../core/s-dom'

// Gradient filter
class SGradientFilter extends SSvgFilter {

	/**
	 * Constructor
	 */
	constructor() {
		super(`				
			<feImage xlink:href="" x="0" y="0" result="IMAGEFILL" preserveAspectRatio="none" />
			<feComposite operator="in" in="IMAGEFILL" in2="SourceAlpha" />
		`);
		this._image = this.filter.querySelector('feImage');
		this._tile = this.filter.querySelector('feTile');
	}

	/**
	 * Linear gradient
	 */
	linear(colors, settings = {}) {
		let width = settings.width || 512,
			height = settings.height || 512,
			x0 = settings.x0 || 0,
			x1 = settings.x1 || width,
			y0 = settings.y0 || 0,
			y1 = settings.y1 || 0;
		let can = document.createElement('canvas');
		can.setAttribute('width', width);
		can.setAttribute('height', height);
		let	ctx = can.getContext('2d'),
			grad = ctx.createLinearGradient(x0,y0,x1,y1);
		// loop on each colors
		let i = 0;
		colors.forEach((color) => {
			grad.addColorStop(1 / (colors.length - 1) * i, color);
			i++;
		});
		ctx.fillStyle = grad;
		ctx.fillRect(0,0,width,height);
		this.grad64 = can.toDataURL();
		this._image.setAttribute('xlink:href',this.grad64);
	}

	/**
	 * Radial
	 */
	radial(colors, settings = {}) {
		
		let width = settings.width || 512,
			height = settings.height || 512,
			x0 = settings.x0 || width / 2,
			x1 = settings.x1 || width / 2,
			r0 = settings.r0 || 0,
			y0 = settings.y0 || height / 2,
			y1 = settings.y1 || height / 2,
			r1 = settings.r1 || width;
		let can = document.createElement('canvas');
		can.setAttribute('width', width);
		can.setAttribute('height', height);
		let ctx = can.getContext('2d'),
			grad = ctx.createRadialGradient(x0,y0,r0,x1,y1,r1);
		// loop on each colors
		let i = 0;
		colors.forEach((color) => {
			grad.addColorStop(1 / (colors.length - 1) * i, color);
			i++;
		});
		ctx.fillStyle = grad;
		ctx.fillRect(0,0,width,height);
		this.grad64 = can.toDataURL();
		this._image.setAttribute('xlink:href',this.grad64);
	}

	/**
	 * Apply to override
	 */
	applyTo(elm) {
		super.applyTo(elm);
		this._setImageSize();
		window.addEventListener('resize', (e) => {
			this._setImageSize();
		});
	}

	/**
	 * Set image width
	 */
	_setImageSize() {
		let width = this.elms[0].offsetWidth,
			height = this.elms[0].offsetHeight;
		if (width >= height) {
			this._image.setAttribute('width', width);
			this._image.removeAttribute('height');
		} else {
			this._image.setAttribute('height', height);
			this._image.removeAttribute('width');
		}
		// this._image.setAttribute('width', width);
		// this._image.setAttribute('height', height);
	}
}

// Gradient element class
class SGradientElement extends SElement {

	/**
	 * Setup
	 */
	// static setup(type, settings) {
	// 	SElement.setup('sActivate', type, settings);
	// }

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sGradient', elm, {
			colors : ['#a3385e','#f2bc2b'],
			type : 'linear'
		}, settings);
		if (this._inited) return;
		this._inited = true;

		// init the filter
		this._initFilter();
	}

	/**
	 * Init the filter
	 */
	_initFilter() {
		let type = this.setting('type');
		// create a new svg filter
		this.filter = new SGradientFilter();
		if (type == 'radial') {
			this.filter.radial(this.setting('colors'));
		} else {
			this.filter.linear(this.setting('colors'));
		}
		// apply the filter
		this.filter.applyTo(this.elm);
	}
}

// automatic init of dom elements
sDom.domReady(() => {
	[].forEach.call(document.body.querySelectorAll('[data-s-gradient]'), (item) => {
		// init element
		new SGradientElement(item);
	});
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SGradientFilter = SGradientFilter;
window.sugar.SGradientElement = SGradientElement;

// export modules
module.exports = {
	SGradientFilter : SGradientFilter,
	SGradientElement : SGradientElement
};