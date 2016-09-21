/*
 * SResponsiveImageComponent.js
 *
 * Component that allows to stick an element to the top of the screen
 *
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  25.07.16
 * @updated  25.07.16
 * @version  1.0.0
 */
import SComponent from '../../js/core/SComponent'
import __debounce from '../../js/functions/debounce'
import STemplate from '../../js/core/STemplate'

class SResponsiveImageComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings, name = 'sResponsiveImage') {
		SComponent.setup(name, type, settings);
	}

	/**
	 * _originalSrc
	 * Store the original src of the picture
	 * @type 	{String}
	 */
	_originalSrc = null;

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sResponsiveImage') {
		super(name, elm, {

			/**
			 * widths
			 * Store the available widths for this image
			 * @type 	{String|Array}
			 */
			widths : []

		}, settings);
	}

	/**
	 * Init
	 */
	_init() {

		// get the original src
		this._originalSrc = this.elm.getAttribute('src') || this.elm.getAttribute('data-src');

		// stop here if the image has no src
		if ( ! this._originalSrc) return;

		// init component
		super._init();

		// set the width if not specified
		const width = this.elm.style.width;
		if ( ! width) {
			this.elm.setAttribute('width', '100%');
		}
	}

	/**
	 * enable
	 * Enable the component
	 * Automatically called by _onAdded method
	 * @return 	{SResponsiveImageComponent}
	 */
	enable() {
		super.enable();

		// set the placeholder image if needed
		// if ( ! this.elm.src) {
		// 	this.elm.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');
		// }

		// throttle the window resize function to avoid to much
		// calls
		this._onWindowResize = __debounce(this.__onWindowResize.bind(this),500);

		// listen for window resize
		window.addEventListener('resize', this._onWindowResize);

		// first resize
		this.__onWindowResize();
	}

	/**
	 * disable
	 * Disable the component
	 * Automatically called by _onRemoved method
	 * @return 	{SResponsiveImageComponent}
	 */
	disable() {
		super.disable();

		// stop listening for window resize
		window.removeEventListener('resize', this._onWindowResize);
	}

	/**
	 * _applySrc
	 * Apply the good src to the image
	 * @return 	{void}
	 */
	_applySrc() {
		// calculate the width of the image
		const imageWidth = this.elm.offsetWidth;
		let appliedWidth = this.settings.widths[0] || 0;

		// grab the best available width
		for(let i=0; i<this.settings.widths.length; i++) {
			let width = this.settings.widths[i];
			let widthObj = width;

			// if is an object
			if (typeof(width) === 'object') {
				width = width.width;
			}

			appliedWidth = widthObj;
			if (imageWidth < width) {
				// that mean that the image is larger
				// that the current applied width
				// so we stop the loop
				break;
			}
		}

		// process the appliedWidthObj variable
		if (typeof(appliedWidth) === 'number') {
			appliedWidth = {
				width : appliedWidth,
				name : appliedWidth.toString()
			};
		}

		// make sure we have a name
		if ( ! appliedWidth.name) {
			appliedWidth.name = appliedWidth.width.toString();
		}

		// check pixel ratios
		if (window.devicePixelRatio && appliedWidth.pixelRatios) {
			if (appliedWidth.pixelRatios.indexOf(window.devicePixelRatio) !== -1) {
				appliedWidth.pixelRatio = window.devicePixelRatio;
			}
		}

		// conpute the src
		let src = this._computeSrc(appliedWidth)

		// load and set the src
		this._loadAndSetSrc(src);
	}

	/**
	 * _loadAndSetSrc
	 * Load the new image and set the src
	 * @param 	{String} 	src 	The src to set
	 * @return 	{void}
	 */
	_loadAndSetSrc(src) {

		// load the new image
		const img = new Image();
		img.onload = () => {
			// set the new src
			this.elm.setAttribute('src', src);
		};
		img.src = src;
	}

	/**
	 * _computeSrc
	 * Compute the new src
	 * @param 	{Object} 	widthObj 	The width object that will be applied
	 * @return 	{String} 				The new src to apply
	 */
	_computeSrc(widthObj) {
		// store the new src
		let src = this._originalSrc;
		// check if has a computeSrc setting
		if (this.settings.computeSrc) {
			src = this.settings.computeSrc(src, widthObj);
		}
		// compute the tokens
		src = src.replace(/\{[a-zA-Z0-9_-]+\}/g, (match) => {
			const key = match.replace('{','').replace('}','');
			if (widthObj[key]) {
				return widthObj[key];
			}
			return match;
		});

		// return the computed src
		return src;
	}

	/**
	 * _onWindowResize
	 * When the window is resized
	 * @param 	{Event} 	e 	The event
	 * @return 	{void}
	 */
	__onWindowResize(e) {
		// apply the good image src
		this._applySrc();
	}
}

STemplate.registerComponentIntegration('SResponsiveImageComponent', (component) => {
	STemplate.keepAttribute(component.elm, 'width');
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SResponsiveImageComponent = SResponsiveImageComponent;

// export
export default SResponsiveImageComponent;
