/*
 * STrianglifyComponent.js
 *
 * Component that allows to stick an element to the top of the screen
 *
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  25.07.16
 * @updated  25.07.16
 * @version  1.0.0
 */
import SComponent from '../../../js/core/SComponent'
import STemplate from '../../../js/core/STemplate'
import Trianglify from 'trianglify'
require('javascript-detect-element-resize')

class STrianglifyComponent extends SComponent {

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sTrianglify') {
		super(name, elm, {

			/**
			 * String or array of CSS-formatted colors, default is 'random'.
			 * Specify the color gradient used on the x axis.
			 * @setting
			 * @type 		{Array}
			 * @default 	null
			 */
			x_colors : null,

			/**
			 * String or array of CSS-formatted colors, default is 'match_x'.
			 * When set to 'match_x' the same gradient will be used on both axes. Otherwise, accepts the same options as x_colors.
			 * @setting
			 * @type 		{Array}
			 * @default 	null
			 */
			y_colors : null

		}, settings);
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		console.log('hello trianglify');
	}

	/**
	 * Enable the component
	 */
	enable() {
		super.enable();
		this.addComponentClass(this.elm);
		window.addResizeListener(this.elm, this._onElmResize.bind(this));
	}

	/**
	 * Disable the component
	 */
	disable() {
		super.disable();
		this.removeComponentClass(this.elm);
		window.removeResizeListener(this.elm, this._onElmResize);
	}

	/**
	 * When the element is resized
	 */
	_onElmResize() {
		// create a new trianglify
		const trianglify = Trianglify({
			width : this.elm.offsetWidth,
			height : this.elm.offsetHeight,
			cell_size : this.elm.offsetHeight * 2,
			x_colors : this.settings.x_colors,
			y_colors : this.settings.y_colors,
			color_space: 'rgb'
		});
		this.elm.style.backgroundImage = `url(${trianglify.png()})`;
	}
}


// STemplate integration
STemplate.registerComponentIntegration('STrianglifyComponent', (component) => {
	STemplate.keepAttribute(component.elm, 'style');
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.STrianglifyComponent = STrianglifyComponent;

// export
export default STrianglifyComponent;
