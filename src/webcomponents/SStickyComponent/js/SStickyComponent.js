import SWebComponent from '../../../js/core/SWebComponent'
import __scrollTop from '../../../js/dom/scrollTop'
import __offset from '../../../js/dom/offset'
import __getAnimationProperties from '../../../js/dom/getAnimationProperties'
import __fastdom from 'fastdom'

export default class SStickyComponent extends SWebComponent {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {
			/**
			 * Specify the top element to use as boundary
			 * @prop
			 * @type 	{Element}
			 */
			topElm : null,

			/**
			 * Specify the bottom element to use as boundary
			 * @prop
			 * @type 	{Element}
			 */
			bottomElm : null,

			/**
			 * An offset top that will be applied when sticked
			 * @prop
			 * @type 	{number}
			 */
			offsetTop : 0,

			/**
			 * An offset bottom that will be applied when sticked
			 * @prop
			 * @type 	{Number}
			 */
			offsetBottom : 0,

			/**
			 * A boolean or a function that return if the sitcky effect is disabled
			 * @prop
			 * @type 	{Boolean|Function}
			 */
			disabled : false,

			/**
			 * A number that specify the offset top before triggering the sticky
			 * @prop
			 * @type 	{Number}
			 */
			offsetTopDetection : 0,

			/**
			 * Specify if a ghost placeholder has to replace the sticked element into the DOM
			 * @prop
			 * in order to keep the same scroll height
			 * @type 	{Boolean}
			 */
			placeholder : true,

			/**
			 * Specify the number of scroll event to wait before update the references and sizes
			 * @prop
			 * @type 	{Integer}
			 */
			updateEvery : 5,

			/**
			 * How long to wait after a window resize before updating sizes etc...
			 * @prop
			 * @type 	{Number}
			 */
			resizeTimeout : 50
		}
	}

	/**
	 * Component will mount
	 * @definition 		SWebComponent.componentWillMount
	 */
	componentWillMount() {
		super.componentWillMount();

		/**
		 * Update counter to update the sizes, offsets, etc not at each scroll event
		 * @type 	{Integer}
		 */
		this._updateCounter = 0;

		/**
		 * Store the reset timeout to be able to clear it when needed
		 * @type 	{Timeout}
		 */
		this._resetTimeout = null;

		/**
		 * Store the sticked element height
		 * @type 	{Number}
		 */
		this._elmHeight = 0;

		/**
		 * Store the element width to apply it when position is fixed, etc...
		 * @type 	{Number}
		 */
		this._elmWidth = 0;

		/**
		 * Store the reference to the element used as top boundary
		 * @type 	{Element}
		 */
		this._topElm = null;

		/**
		 * Store the reference to the element used as bottom boundary
		 * @type 	{Element}
		 */
		this._bottomElm = null;
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// save initial element setup
		this.base_position = this.style.position;
		this.base_top = parseInt(this.style.top) || 0;
		this.base_height = parseInt(this.offsetHeight);

		console.log(this.offsetWidth);

		// get top element
		this._topElm = this.props.topElm || this.parentNode;
		this._bottomElm = this.props.bottomElm || this.parentNode;

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
		if (this.props.disabled === true) {
			if (this.isSticked()) this.reset();
			return
		};
		if (typeof(this.props.disabled) === 'function'
			&& this.props.disabled(this)) {
			if (this.isSticked()) this.reset();
			return;
		}

		// calculate the detect offset
		let offsetTopDetection = this.props.offsetTopDetection;
		if (typeof(this.props.offsetTopDetection) === 'function') {
			offsetTopDetection = this.props.offsetTopDetection(this);
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

		if (scrollTop > this.boundary.bottom - this._elmHeight - (this.props.offsetTop + this.props.offsetBottom)) {
			// update needReset status
			this.needReset = true;
			// clear the _resetTimeout
			clearTimeout(this._resetTimeout);
			// the element need to be sticked on top of the window
			if (this.base_position === 'fixed') {
				this.style.top = this.boundary.bottom - scrollTop - this._elmHeight - this.props.offsetBottom + this.base_top
			} else {
				this.style.position = 'absolute';
				this.style.bottom = this.props.offsetBottom + 'px';
				this.style.top = 'auto';
				this.addComponentClass(this, null, null, 'sticked');
			}
			// handle placeholder if needed
			if (this.props.placeholder) {
				this._addPlaceholder();
			}
			// add dirty class
			this.addComponentClass(this, null, null, 'dirty');
		} else if (scrollTop - offsetTopDetection > this.boundary.top) {
			// update needReset status
			this.needReset = true;
			// clear the _resetTimeout
			clearTimeout(this._resetTimeout);
			// the element need to be sticked on bottom of the
			// relative element
			this.style.position = 'fixed';
			this.style.top = this.props.offsetTop + 'px';
			this.style.bottom = 'auto';
			this.style.width = this._elmWidth + 'px';
			this.addComponentClass(this, null, null, 'sticked');
			// handle placeholder if needed
			if (this.props.placeholder) {
				this._addPlaceholder();
			}
			// add dirty class
			this.addComponentClass(this, null, null, 'dirty');
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
		}, this.props.resizeTimeout);
	}

	/**
	 * Add placeholder
	 */
	_addPlaceholder() {
		// create if needed
		if ( ! this.placeholderElm) {
			this.placeholderElm = document.createElement('div');
			this.addComponentClass(this.placeholderElm, 'placeholder');
		}
		this.placeholderElm.style.width = this._elmWidth + 'px';
		this.placeholderElm.style.height = this.base_height + 'px';

		// add the placeholder into the dom
		if ( ! this.placeholderElm.parentNode) {
			__fastdom.mutate(() => {
				this.parentNode.insertBefore(this.placeholderElm, this);
			});
		}
	}

	/**
	 * Update sizes, etc...
	 */
	_update() {

		// bottom
		let bottom = this.props.bottom;
		if (typeof(this.props.bottom) !== 'number') {
			bottom = __offset(this._bottomElm).top + this._bottomElm.offsetHeight;
		}

		// top
		let top = this.props.top;
		if (typeof(this.props.top) !== 'number') {
			top = __offset(this._topElm).top
		}

		// calculate boundaries
		this.boundary = {
			top : top,
			bottom : bottom
		};

		// element height
		if ( ! this.props.height) {
			this._elmHeight = this.offsetHeight;
		} else if (typeof(this.props.height) === 'string') {
			this._elmHeight = document.querySelector(this.props.height).offsetHeight;
		} else if (typeof(this.props.height) === 'number') {
			this._elmHeight = this.props.height;
		}

		// element width
		if ( ! this.props.width) {
			if ( this.isSticked()) {
				this._elmWidth = this.parentNode.offsetWidth;
			} else {
				this._elmWidth = this.offsetWidth;
			}
		} else if (typeof(this.props.width) === 'string') {
			this._elmWidth = document.querySelector(this.props.width).offsetWidth;
		} else if (typeof(this.props.width) === 'number') {
			this._elmWidth = this.props.width;
		}

		if ( ! this.isSticked()) {
			this.style.width = null;
		} else {
			// set element width
			this.style.width = this._elmWidth + 'px';
		}

		// reset update counter
		this._updateCounter = this.props.updateEvery;
	}

	/**
	 * Reset
	 */
	reset() {
		if ( ! this.needReset) return;
		this.needReset = false;

		// add the out class
		this.addComponentClass(this, null, null, 'out');

		// get animation properties to wait if needed
		setTimeout(() => {
			let animationProperties = __getAnimationProperties(this);

			clearTimeout(this._resetTimeout);
			this._resetTimeout = setTimeout(() => {

				// reset the element style
				this.style.position = '';
				this.style.top = '';
				this.style.bottom = '';
				this.style.width = '';

				// remove the placeholder if exist
				if (this.placeholderElm && this.placeholderElm.parentNode) {
					this.placeholderElm.parentNode.removeChild(this.placeholderElm);
				}

				// remove the out class
				this.removeComponentClass(this, null, null, 'out');
				// remove the sticked class
				this.removeComponentClass(this, null, null, 'sticked');
			}, animationProperties.totalDuration);
		});
	}

	/**
	 * Check if is sticked
	 */
	isSticked() {
		return this.hasComponentClass(this, null, null, 'sticked');
	}
}
