import SWebComponent from '../../../js/core/SWebComponent'
import __debounce from '../../../js/utils/functions/debounce'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'
import __whenAttribute from '../../../js/dom/whenAttribute'
import __propertyProxy from '../../../js/utils/objects/propertyProxy'

export default class SResponsiveImgComponent extends SWebComponent {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {
			/**
			 * Store the available widths for this image
			 * @type 	{String|Array}
			 */
			widths : [],

			/**
			 * Data src to delay the download of the image
			 * @prop
			 * @type 		{String}
			 */
			dataSrc : null,

			/**
			 * Src of the image
			 * @prop
			 * @type 		{String}
			 */
			src : null
		}
	}

	/**
	 * Mount dependencies
	 * @definition 		SWebComponent.mountDependencies
	 */
	static get mountDependencies() {
		return [function() {
			return __whenAttribute(this, 'data-src', (value) => {
				return value.toString().match(/^[a-zA-Z0-9_\/]/) !== null;
			});
		}];
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// get the original src
		this._originalSrc = this.getAttribute('src') || this.getAttribute('data-src');

		// stop here if the image has no src
		if ( ! this._originalSrc) return;

		// set the width if not specified
		const width = this.style.width;
		if ( ! width) {
			this.setAttribute('width', '100%');
		}

		// throttle the window resize function to avoid to much
		// calls
		this._onWindowResize = __debounce(this.__onWindowResize.bind(this),500);

		// listen for window resize
		window.addEventListener('resize', this._onWindowResize);

		// first resize
		this.__onWindowResize();
	}

	/**
	 * Component unmount
	 * @definition 		SWebComponent.componentUnmount
	 */
	componentUnmount() {
		super.componentUnmount();
		// stop listening for window resize
		window.removeEventListener('resize', this._onWindowResize);
	}

	/**
	 * Component will receive prop
	 * @definition 		SWebComponent.componentWillReceiveProp
	 */
	componentWillReceiveProp(name, newVal, oldVal) {
		switch(name) {
			case 'dataSrc':
				if ( ! newVal) return;
				if ( ! newVal.toString().match(/^[a-zA-Z0-9_\/]/)) return;
				// save the new original src
				this._originalSrc = newVal;
				// apply the new src
				this._applySrc();
			break;
		}
	}

	/**
	 * Apply the good src to the image
	 * @return 	{void}
	 */
	_applySrc() {
		// calculate the width of the image
		const imageWidth = this.offsetWidth;
		let appliedWidth = this.props.widths[0] || 0;

		// grab the best available width
		for(let i=0; i<this.props.widths.length; i++) {
			let width = this.props.widths[i];
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
	 * Load the new image and set the src
	 * @param 	{String} 	src 	The src to set
	 * @return 	{void}
	 */
	_loadAndSetSrc(src) {

		// load the new image
		const img = new Image();
		img.onload = () => {
			// set the new src
			this.setAttribute('src', src);
		};
		img.src = src;
	}

	/**
	 * Compute the new src
	 * @param 	{Object} 	widthObj 	The width object that will be applied
	 * @return 	{String} 				The new src to apply
	 */
	_computeSrc(widthObj) {

		// store the new src
		let src = this._originalSrc;
		// check if has a computeSrc setting
		if (this.props.computeSrc) {
			src = this.props.computeSrc(src, widthObj);
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
	 * When the window is resized
	 * @param 	{Event} 	e 	The event
	 * @return 	{void}
	 */
	__onWindowResize(e) {
		// apply the good image src
		this._applySrc();
	}
}

sTemplateIntegrator.registerComponentIntegration('SResponsiveImgComponent', (component) => {
	sTemplateIntegrator.ignore(component, {
		width : true,
		src : true
	});
});
