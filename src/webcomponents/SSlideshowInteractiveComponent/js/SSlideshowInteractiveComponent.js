import SSlideshowComponentClass from '../../SSlideshowComponent/class'
import querySelectorLive from '../../../js/dom/querySelectorLive'
import __isInViewport from '../../../js/dom/isInViewport'
import __autoCast from '../../../js/utils/string/autoCast'
import STimer from '../../../js/classes/STimer'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'

export default class SSlideshowInteractiveComponent extends SSlideshowComponentClass {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {

			/**
			 * Change slide when click on the slideshow depending on the props.direction setting
			 * @prop
			 * @type 	{Boolean}
			 */
			changeOnClick : false,

			/**
			 * Set the direction of the slideshow when click
			 * @prop
			 * @type 		{String}
			 * @values 		forward|backward
			 */
			direction : 'forward',

			/**
			 * Set if the keyboard navigation is enabled
			 * @prop
			 * @type 	{Boolean}
			 */
			keyboardEnabled : true,

			/**
			 * Set if the touch navigation is enabled
			 * @prop
			 * @type 	{Boolean}
			 */
			touchEnabled : true,
		}
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 */
	static get physicalProps() {
		return [];
	}

	/**
	 * Component will mount
	 * @definition 			SWebComponent.componentWillMount
	 */
	componentWillMount() {
		super.componentWillMount();
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();
	}

	/**
	 * Component unmount
	 * @definition 		SWebComponent.componentUnmount
	 */
	componentUnmount() {
		super.componentUnmount();
	}

	/**
	 * When the user click on the slideshow
	 * @param 	{Event} 	e 	The event
	 */
	_onClick(e) {
		// check if we click on a goto element
		const goTo = e.target.getAttribute(`${this._componentNameDash}-goto`);
		if (goTo) {
			// go to wanted slide
			this.goTo(__autoCast(goTo));
		} else {
			if (this.props.changeOnClick) {
				if (this.props.direction === 'forward') {
					this.next();
				} else {
					this.previous();
				}
			}
		}
	}

	/**
	 * When the user has clicked on the next button
	 * @param 	{Event} 	e 	The event
	 */
	_onNextClick(e) {
		e.preventDefault();
		e.stopPropagation();
		this.next();
	}

	/**
	 * When the user has clicked on the previous button
	 * @param 	{Event} 	e 	The event
	 */
	_onPreviousClick(e) {
		e.preventDefault();
		e.stopPropagation();
		this.previous();
	}

	/**
	 * When the element is enabled
	 * @return 	{SSlideshowComponent}
	 */
	enable() {
		super.enable();

		// listen for click on element
		this.addEventListener('click', this._onClick.bind(this));

		// enable keyboard navigation
		if (this.props.keyboardEnabled) {
			this._initKeyboardNavigation();
		}
		// enable touch navigation
		if (this.props.touchEnabled) {
			this._initTouchNavigation();
		}

		// init the previous and next navigation
		this._initPreviousAndNextButtons();

		// maintain chainability
		return this;
	}

	/**
	 * When the element is disabled
	 * @return 	{SSlideshowComponent}
	 */
	disable() {
		super.disable();
		// disable keyboard navigation
		document.removeEventListener('keyup', this._onKeyup);
		// do not listen for click anymore
		this.removeEventListener('click', this._onClick);
		// disable touch navigation
		this.removeEventListener('swipeleft', this._onSwipe);
		this.removeEventListener('swiperight', this._onSwipe);
		// do not listen for previous and next click
		this._refs.previous && this._refs.previous.removeEventListener('click', this._onPreviousClick);
		this._refs.next && this._refs.next.removeEventListener('click', this._onNextClick);
		// maintain chainability
		return this;
	}

	/**
	 * When the element is destroyed
	 */
	destroy() {
		super.destroy();
	}

	/**
	 * Init the previous and next buttons
	 */
	_initPreviousAndNextButtons() {
		// if the next element exist
		if (this._refs.next) {
			this._refs.next.addEventListener('click', this._onNextClick.bind(this));
		}
		// if the previous element exist
		if (this._refs.previous) {
			this._refs.previous.addEventListener('click', this._onPreviousClick.bind(this));
		}
	}

	/**
	 * Init the keyboard navigation
	 */
	_initKeyboardNavigation() {
		// listen for keyup event
		document.addEventListener('keyup', this._onKeyup.bind(this));
	}

	/**
	 * Init the touch navigation
	 */
	_initTouchNavigation() {
		// listen for swiped
		this.addEventListener('swipeleft', this._onSwipe.bind(this));
		this.addEventListener('swiperight', this._onSwipe.bind(this));
	}

	/**
	 * When the user has swiped on the slideshow
	 * @param 	{Event} 	e 	The event
	 */
	_onSwipe(e) {
		// check the swipe direction
		switch(e.type) {
			case 'swipeleft':
				this.next();
			break;
			case 'swiperight':
				this.previous();
			break;
		}
	}

	/**
	 * When the user has released a keyboard key
	 * @param 	{Event} 	e 	The event
	 */
	_onKeyup(e) {
		// do nothing if the slideshow is not in viewport
		if ( ! __isInViewport(this)) return;

		// check the key
		switch(e.keyCode) {
			case 39: // right arrow
				this.next();
			break;
			case 37: // left arrow
				this.previous();
			break;
		}
	}

	/**
     * Go find into dom every elements needed for the slideshow
     * @return 	{void}
	 */
	_updateReferences() {
		super._updateReferences();
		// grab the next and previous element
		this._refs.next = this.querySelector(`${this._componentNameDash}-next, [${this._componentNameDash}-next]`);
		this._refs.previous = this.querySelector(`${this._componentNameDash}-previous, [${this._componentNameDash}-previous]`);
	}
}
