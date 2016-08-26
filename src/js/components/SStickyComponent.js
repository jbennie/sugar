/*
 * SStickyComponent.js
 *
 * Component that allows to stick an element to the top of the screen
 *
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  25.07.16
 * @updated  25.07.16
 * @version  1.0.0
 */
import SComponent from '../core/SComponent'
import querySelectorLive from '../dom/querySelectorLive';
import __scrollTop from '../dom/scrollTop'
import __offset from '../dom/offset'
import __getAnimationProperties from '../dom/getAnimationProperties'

class SStickyComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings, name = 'sSticky') {
		SComponent.setup(name, type, settings);
	}

	/**
	 * _updateCounter
	 * Update counter to update the sizes, offsets, etc not at each scroll event
	 * @type 	{Integer}
	 */
	_updateCounter = 0;

	/**
	 * _resetTimeout
	 * Store the reset timeout to be able to clear it when needed
	 * @type 	{Timeout}
	 */
	_resetTimeout = null;

	/**
	 * _elmHeight
	 * Store the sticked element height
	 * @type 	{Number}
	 */
	_elmHeight = 0;

	/**
	 * _elmWidth
	 * Store the element width to apply it when position is fixed, etc...
	 * @type 	{Number}
	 */
	_elmWidth = 0;

	/**
	 * _topElm
	 * Store the reference to the element used as top boundary
	 * @type 	{Element}
	 */
	_topElm = null;

	/**
	 * _bottomElm
	 * Store the reference to the element used as bottom boundary
	 * @type 	{Element}
	 */
	_bottomElm = null;

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sSticky') {
		super(name, elm, {
			/**
			 * topElm
			 * Specify the top element to use as boundary
			 * @type 	{Element}
			 */
			topElm : null,

			/**
			 * bottomElm
			 * Specify the bottom element to use as boundary
			 * @type 	{Element}
			 */
			bottomElm : null,

			/**
			 * offsetTop
			 * An offset top that will be applied when sticked
			 * @type 	{number}
			 */
			offsetTop : 0,

			/**
			 * offsetBottom
			 * An offset bottom that will be applied when sticked
			 * @type 	{Number}
			 */
			offsetBottom : 0,

			/**
			 * disabled
			 * A boolean or a function that return if the sitcky effect is disabled
			 * @type 	{Boolean|Function}
			 */
			disabled : false,

			/**
			 * offsetTopDetection
			 * A number that specify the offset top before triggering the sticky
			 * @type 	{Number}
			 */
			offsetTopDetection : 0,

			/**
			 * placeholder
			 * Specify if a ghost placeholder has to replace the sticked element into the DOM
			 * in order to keep the same scroll height
			 * @type 	{Boolean}
			 */
			placeholder : true,

			/**
			 * updateEvery
			 * Specify the number of scroll event to wait before update the references and sizes
			 * @type 	{Integer}
			 */
			updateEvery : 5,

			/**
			 * resizeTimeout
			 * How long to wait after a window resize before updating sizes etc...
			 * @type 	{Number}
			 */
			resizeTimeout : 50,

			/**
			 * class
			 * THe class to apply on the element itself when it is sticked
			 * @type 	{String}
			 */
			cls : 's-sticky--sticked',

			/**
			 * dirtyClass
			 * The class to apply on the element itself after the first sticky process
			 * @type 	{String}
			 */
			dirtyClass : 's-sticky--dirty',

			/**
			 * outClass
			 * The class to apply on the element itself during the out sticky process
			 * This class is automatically removes when the css animation is completed
			 * @type 	{String}
			 */
			outClass : 's-sticky--out'
		}, settings);
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		// save initial element setup
		this.base_position = this.elm.style.position;
		this.base_top = parseInt(this.elm.style.top) || 0;
		this.base_height = parseInt(this.elm.offsetHeight);

		// get top element
		this._topElm = this.settings.topElm || this.elm.parentNode;
		this._bottomElm = this.settings.bottomElm || this.elm.parentNode;

		// listen for scroll
		window.addEventListener('scroll', this._onScroll.bind(this));

		// listen for resize
		window.addEventListener('resize', this._onResize.bind(this));

		// first call of onScroll
		this._onScroll(null);
	}

	/**
	 * On scroll
	 */
	_onScroll(e) {
		// handle disabled
		if (this.settings.disabled === true) return;
		if (typeof(this.settings.disabled) === 'function'
			&& this.settings.disabled(this)) return;

		// calculate the detect offset
		let offsetTopDetection = this.settings.offsetTopDetection;
		if (typeof(this.settings.offsetTopDetection) === 'function') {
			offsetTopDetection = this.settings.offsetTopDetection(this);
		}
		offsetTopDetection = parseInt(offsetTopDetection);

		// manage recalc
		this._updateCounter -= 1;
		if (this._updateCounter <= 0) {
			this._update();
		}

		// scrollTop
		let scrollTop = __scrollTop() + offsetTopDetection;
		scrollTop = __scrollTop();


		if (scrollTop > this.boundary.bottom - this._elmHeight - (this.settings.offsetTop + this.settings.offsetBottom)) {
			// update needReset status
			this.needReset = true;
			// clear the _resetTimeout
			clearTimeout(this._resetTimeout);
			// the element need to be sticked on top of the window
			if (this.base_position === 'fixed') {
				this.elm.style.top = this.boundary.bottom - scrollTop - this._elmHeight - this.settings.offsetBottom + this.base_top
			} else {
				this.elm.style.position = 'absolute';
				this.elm.style.bottom = this.settings.offsetBottom + 'px';
				this.elm.style.top = 'auto';
				this.elm.classList.add(this.settings.cls);
			}
			// handle placeholder if needed
			if (this.settings.placeholder) {
				this._addPlaceholder();
			}
			// add dirty class
			this.elm.classList.add(this.settings.dirtyClass);
		} else if (scrollTop - offsetTopDetection > this.boundary.top) {
			// update needReset status
			this.needReset = true;
			// clear the _resetTimeout
			clearTimeout(this._resetTimeout);
			// the element need to be sticked on bottom of the
			// relative element
			this.elm.style.position = 'fixed';
			this.elm.style.top = this.settings.offsetTop + 'px';
			this.elm.style.bottom = 'auto';
			this.elm.style.width = this._elmWidth + 'px';
			this.elm.classList.add(this.settings.cls);
			// handle placeholder if needed
			if (this.settings.placeholder) {
				this._addPlaceholder();
			}
			// add dirty class
			this.elm.classList.add(this.settings.dirtyClass);
		} else {
			// no more sticked
			this.reset();
		}

	}

	/**
	 * On resize
	 */
	_onResize(e) {

		clearTimeout(this.resizeTimeout);
		this.resizeTimeout = setTimeout(() => {

			// update
			this._update();

		}, this.settings.resizeTimeout);
	}

	/**
	 * Add placeholder
	 */
	_addPlaceholder() {
		// create if needed
		if ( ! this.placeholderElm) {
			this.placeholderElm = document.createElement('div');
			this.placeholderElm.classList.add('s-sticked-placeholder');
		}
		this.placeholderElm.style.width = this._elmWidth + 'px';
		this.placeholderElm.style.height = this.base_height + 'px';

		// add the placeholder into the dom
		if ( ! this.placeholderElm.parentNode) {
			this.elm.parentNode.insertBefore(this.placeholderElm, this.elm);
		}
	}

	/**
	 * Update sizes, etc...
	 */
	_update() {

		// bottom
		let bottom = this.settings.bottom;
		if (typeof(this.settings.bottom) !== 'number') {
			bottom = __offset(this._bottomElm).top + this._bottomElm.offsetHeight;
		}

		// top
		let top = this.settings.top;
		if (typeof(this.settings.top) !== 'number') {
			top = __offset(this._topElm).top
		}

		// calculate boundaries
		this.boundary = {
			top : top,
			bottom : bottom
		};

		// element height
		if ( ! this.settings.height) {
			this._elmHeight = this.elm.offsetHeight;
		} else if (typeof(this.settings.height) === 'string') {
			this._elmHeight = document.querySelector(this.settings.height).offsetHeight;
		} else if (typeof(this.settings.height) === 'number') {
			this._elmHeight = this.settings.height;
		}

		// element width
		if ( ! this.settings.width) {
			if ( this.isSticked()) {
				this._elmWidth = this.elm.parentNode.offsetWidth;
			} else {
				this._elmWidth = this.elm.offsetWidth;
			}
		} else if (typeof(this.settings.width) === 'string') {
			this._elmWidth = document.querySelector(this.settings.width).offsetWidth;
		} else if (typeof(this.settings.width) === 'number') {
			this._elmWidth = this.settings.width;
		}

		// set element width
		this.elm.style.width = this._elmWidth + 'px';

		// reset update counter
		this._updateCounter = this.settings.updateEvery;
	}

	/**
	 * Reset
	 */
	reset() {
		if ( ! this.needReset) return;
		this.needReset = false;

		// add the out class
		this.elm.classList.add(this.settings.outClass);

		// get animation properties to wait if needed
		let animationProperties = __getAnimationProperties(this.elm);

		clearTimeout(this._resetTimeout);
		this._resetTimeout = setTimeout(() => {
			// reset the element style
			this.elm.style.position = '';
			this.elm.style.top = '';
			this.elm.style.bottom = '';
			this.elm.style.width = '';
			// remove the sticked class
			this.elm.classList.remove(this.settings.cls);
			// remove the out class
			this.elm.classList.remove(this.settings.outClass);
			// remove the placeholder if exist
			if (this.placeholderElm && this.placeholderElm.parentNode) {
				this.placeholderElm.parentNode.removeChild(this.placeholderElm);
			}
		}, animationProperties.totalDuration);
	}

	/**
	 * Check if is sticked
	 */
	isSticked() {
		return this.elm.classList.contains(this.settings.cls);
	}
}


// initOn
SStickyComponent.initOn = function(selector, settings = {}) {
	// init the select
	return querySelectorLive(selector).visible().once().subscribe((elm) => {
		new SStickyComponent(elm, settings);
	});
};

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SStickyComponent = SStickyComponent;

// export
export default SStickyComponent;
