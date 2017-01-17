import SWebComponent from '../../../js/core/SWebComponent'
import querySelectorLive from '../../../js/dom/querySelectorLive'
import __isInViewport from '../../../js/dom/isInViewport'
import __autoCast from '../../../js/utils/string/autoCast'
import STimer from '../../../js/classes/STimer'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'

export default class SSlideshowComponent extends SWebComponent {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {

			/**
			 * Set the active class by index
			 * @prop
			 * @type 		{Integer}
			 */
			slide : null,

			/**
			 * Set if the slideshow is infinite
			 * @prop
			 * @tyoe 	{Boolean}
			 */
			loop : false,

			/**
			 * Callback when the slideshow is inited
			 * @prop
			 * @type 	{Function}
			 */
			onInit : null,

			/**
			 * Callback before the slideshow pass to another slide
			 * @prop
			 * @type 	{Function}
			 */
			beforeChange : null,

			/**
			 * Callback when the slider change from a slide to another
			 * @prop
			 * @type 	{Function}
			 */
			onChange : null,

			/**
			 * Callback when the slideshow has changed slide
			 * @prop
			 * @type 	{Function}
			 */
			afterChange : null,

			/**
			 * Callback used to init a new slide
			 * @prop
			 * @type 	{Function}
			 */
			initSlide : null
		}
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 */
	static get physicalProps() {
		return ['slide'];
	}

	/**
	 * Component will mount
	 * @definition 			SWebComponent.componentWillMount
	 */
	componentWillMount() {
		super.componentWillMount();

		/**
		 * Store all the slides elements
		 * @type 	{Array}
		 */
		this._slides = [];

		/**
		 * Store all the slides initer functions
		 * @type 	{Array}
		 */
		this._slidesIniter = [];

		/**
		 * Store the active slide
		 * @type 	{DOMElement}
		 */
		this._activeSlide = null;

		/**
		 * Store the observer of the slides
		 * @type 	{Observer}
		 */
		this._slidesObserver = null;

		/**
		 * Store the elements references like navigation, etc...
		 * @type 	{Object}
		 */
		this._refs = {
			next : null, 				// the next button
			previous : null,			// the previous button
			totals : [],				// all the totals tokens
			currents : [], 				// all the currents tokens
			goTos : [] 					// all the goto elements
		};

	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// update references
		this._updateReferences();

		// grab the slides and maintain stack up to date
		this._slidesObserver = querySelectorLive(`${this._componentNameDash}-slide, [${this._componentNameDash}-slide]`, {
			rootNode : this
		}).stack(this._slides).subscribe((elm) => {
			// init new slide
			this._initSlide(elm);
		});

		// onInit callback
		this.props.onInit && this.props.onInit(this);

		// enable
		this.enable();
	}

	/**
	 * Component unmount
	 * @definition 		SWebComponent.componentUnmount
	 */
	componentUnmount() {
		super.componentUnmount();
		this.disable();
		this.destroy();
	}

	/**
	 * When the element is enabled
	 * @return 	{SSlideshowComponent}
	 */
	enable() {
		// no transmation
		this.classList.add('clear-transmations');

		// next
		this.next();

		// add all classes
		this._applyStateAttributes();

		// remove the no transmation class to allow animations, etc...
		setTimeout(() => {
			this.classList.remove('clear-transmations');
		});

		// maintain chainability
		return this;
	}

	/**
	 * Component will receive prop
	 * @definition 		SWebComponent.componentWillReceiveProp
	 */
	componentWillReceiveProp(name, newVal, oldVal) {
		switch(name) {
			case 'slide':
				this.goTo(newVal);
			break;
		}
	}

	/**
	 * When the element is disabled
	 * @return 	{SSlideshowComponent}
	 */
	disable() {
		// remove all classes
		this._unapplyStateAttrubutes();
		// maintain chainability
		return this;
	}

	/**
	 * When the element is destroyed
	 */
	destroy() {
		// destroy all element in slideshow that need to be destroyed
		this._slidesObserver.unsubscribe();
	}

	/**
	 * Init a new slide
	 */
	_initSlide(slide) {
		// callback if exist
		this.props.initSlide && this.props.initSlide(slide);
		// slides initer
		this._slidesIniter.forEach((initer) => {
			initer(slide);
		});
	}

	/**
	 * Remove the attributes from the elements
	 */
	_unapplyStateAttrubutes() {
		// unactivate all the slides
		this._slides.forEach((slide) => {
			slide.removeAttribute('active');
			slide.removeAttribute('before-active');
			slide.removeAttribute('after-active');
		});
		// remove the active class on all goto
		[].forEach.call(this._refs.goTos, (goTo) => {
			goTo.removeAttribute('active');
		});
		// remove the previous and next classes
		if (this.getPreviousSlide()) {
			this.getPreviousSlide().removeAttribute('previous');
		}
		if (this.getNextSlide()) {
			this.getNextSlide().removeAttribute('next');
		}
		// unapply the first and last classes
		if (this.getFirstSlide()) {
			this.getFirstSlide().removeAttribute('first');
		}
		if (this.getLastSlide()) {
			this.getLastSlide().removeAttribute('last');
		}
	}

	/**
	 * Apply the good attributes to the elements
	 */
	_applyStateAttributes() {
		// activate the current slide
		this._activeSlide.setAttribute('active', true);
		// goto classes
		[].forEach.call(this._refs.goTos, (goTo) => {
			const idx = goTo.getAttribute(`${this._componentNameDash}-goto`);
			if (idx && __autoCast(idx) === this.props.slide) {
				goTo.setAttribute('active', true);
			}
		});
		// add the next and previous classes
		if (this.getPreviousSlide()) {
			if ( ! this.getPreviousSlide().hasAttribute('previous')) {
				this.getPreviousSlide().setAttribute('previous', true);
			}
		}
		if (this.getNextSlide()) {
			if ( ! this.getNextSlide().hasAttribute('next')) {
				this.getNextSlide().setAttribute('next', true);
			}
		}
		// apply the first and last classes
		if (this.getFirstSlide()) {
			if ( ! this.getFirstSlide().hasAttribute('first')) {
				this.getFirstSlide().setAttribute('first', true);
			}
		}
		if (this.getLastSlide()) {
			if ( ! this.getLastSlide().hasAttribute('last')) {
				this.getLastSlide().setAttribute('last', true);
			}
		}
		// apply the beforeActiveClass
		this.getBeforeActiveSlides().forEach((slide) => {
			if ( ! slide.hasAttribute('before-active') ) {
				slide.setAttribute('before-active', true);
			}
		});
		// apply the afterActiveClass
		this.getAfterActiveSlides().forEach((slide) => {
			if ( ! slide.hasAttribute('after-active') ) {
				slide.setAttribute('after-active', true);
			}
		});
	}

	/**
	 * Apply the differents tokens available to use in the html template
	 */
	_applyTokens() {
		// apply current
		if (this._refs.current) {
			[].forEach.call(this._refs.current, (current) => {
				current.innerHTML = this.props.slide + 1;
			});
		}
		// apply total
		if (this._refs.total) {
			[].forEach.call(this._refs.total, (total) => {
				total.innerHTML = this._slides.length;
			});
		}
	}

	/**
	 * Loop on slides to find the first one that has the active class
	 * @return 	{HTMLElement} 	The first active class
	 */
	_findActiveSlideByAttributes() {
		for(let i=0; i<this._slides.length; i++) {
			const slide = this._slides[i];
			if (slide.hasAttribute('active')) {
				return slide;
			}
		}
		return null;
	}

	/**
	 * Go to next slide
	 * @return 	{SSlideshowComponent}
	 */
	next() {

		// stop if the document is hidden
		if (document.hidden) return;

		// check if is in viewport
		if ( ! __isInViewport(this) && this.props.slide !== -1) return;

		// get the current active slide index
		const idx = this.props.slide;

		// if the slideshow is at his first time
		let activeSlideIndex = 0;
		if (idx === null) {
			// try to find a slide that has the active class
			const activeSlide = this._findActiveSlideByAttributes();
			if (activeSlide) {
				activeSlideIndex = this._slides.indexOf(activeSlide);
			} else {
				activeSlideIndex = 0;
			}
		} else if (idx + 1 < this._slides.length) {
			activeSlideIndex = idx+1;
		}

		// set slide prop
		this.setProp('slide', activeSlideIndex);

		// onNext callback
		this.props.onNext && this.props.onNext(this);

		// maintain chainability
		return this;
	}

	/**
	 * Go to previous slide
	 * @return 	{SSlideshowComponent}
	 */
	previous() {

		// stop if the document is hidden
		if (document.hidden) return;

		// check if is in viewport
		if ( ! __isInViewport(this) && this.props.slide !== -1) return;

		// get the current active slide index
		const idx = this.props.slide;

		// if the slideshow is at his first time
		let activeSlideIndex = 0;
		if (idx === null) {
			// try to find a slide that has the active class
			const activeSlide = this._findActiveSlideByAttributes();
			if (activeSlide) {
				activeSlideIndex = this._slides.indexOf(activeSlide);
			} else {
				activeSlideIndex = 0;
			}
		} else if (idx - 1 >= 0) {
			activeSlideIndex = idx-1;
		} else if (this.props.loop) {
			activeSlideIndex = this._slides.length-1;
		}

		// set slide prop
		this.setProp('slide', activeSlideIndex);

		// onPrevious callback
		this.props.onPrevious && this.props.onPrevious(this);

		// maintain chainability
		return this;
	}

	/**
	 * Go to a specific slide
	 * @param 	{Integer} 	slideIndex 	The slide index to go to
	 * @return 	{SSlideshowComponent} 	The instance itself
	 */
	goTo(slideIndex) {
		// check the slide index
		if ( slideIndex >= this._slides.length) {
			throw `The slide ${slideIndex} does not exist...`;
		}

		// beforeChange callback
		this.props.beforeChange && this.props.beforeChange(this);

		// unapply classes
		this._unapplyStateAttrubutes();

		// active the good slide
		this._activeSlide = this._slides[slideIndex];

		// apply total and current tokens
		this._applyTokens();

		// onChange callback
		this.props.onChange && this.props.onChange(this);

		// apply classes
		this._applyStateAttributes();

		// afterChange callback
		this.props.afterChange && this.props.afterChange(this);

		// maintain chainability
		return this;
	}

	/**
	 * Register a function to init a new slide
	 * @param 	{Function} 	initer 	The initer function
	 * @return 	{SSlideshowComponent}
	 */
	onNewSlide(callback) {
		if (this._slidesIniter.indexOf(callback) === -1) {
			this._slidesIniter.push(callback);
		}
	}

	/**
	 * Return all the slides that are before the active one
	 * @return 	{Array} 	The array of slides that are before the active one
	 */
	getBeforeActiveSlides() {
		const activeIdx = this.props.slide;
		const newArray = this._slides.slice(0);
		newArray.splice(activeIdx, 1000);
		return newArray;
	}

	/**
	 * Return all the slides that are before the active one
	 * @return 	{Array} 	The array of slides that are before the active one
	 */
	getAfterActiveSlides() {
		const activeIdx = this.props.slide;
		const newArray = this._slides.slice(0);
		newArray.splice(0, activeIdx + 1);
		return newArray;
	}

	/**
	 * Return the index of the active slide
	 * @return 	{Integer}	The active slide index
	 */
	getActiveSlideIndex() {
		return this.props.slide;
	}

	/**
	 * Return the active slide element
	 * @return 	{HTMLElement} 	The active slide
	 */
	getActiveSlide() {
		return this._activeSlide;
	}

	/**
	 * Return the first slide element
	 * @return 	{HTMLElement} 	The first slide
	 */
	getFirstSlide() {
		return this._slides[0];
	}

	/**
	 * Return the last slide element
	 * @return 	{HTMLElement} 	The last slide
	 */
	getLastSlide() {
		return this._slides[this._slides.length - 1];
	}

	/**
	 * Return the next slide index
	 * @return 	{Integer} 	The next slide index
	 */
	getNextSlideIndex() {
		const activeSlideIndex = this.props.slide;
		if (activeSlideIndex + 1 < this._slides.length) {
			return activeSlideIndex + 1;
		} else {
			return 0;
		}
	}

 	/**
	 * Return the previous slide element
	 * @return 	{HTMLElement} 	The previous slide
	 */
	getNextSlide() {
		return this._slides[this.getNextSlideIndex()];
	}

	/**
	 * Return the previous slide index
	 * @return 	{Integer} 	The previous slide index
	 */
	getPreviousSlideIndex() {
		const activeSlideIndex = this.props.slide;
		if (activeSlideIndex > 0) {
			return activeSlideIndex - 1;
		} else {
			return this._slides.length - 1;
		}
	}

 	/**
	 * Return the previous slide element
	 * @return 	{HTMLElement} 	The previous slide
	 */
	getPreviousSlide() {
		return this._slides[this.getPreviousSlideIndex()];
	}

	/**
	 * Return if the slideshow loop status is true
	 * @return 	{Boolean} 	The loop status
	 */
	isLoop() {
		return this.props.loop;
	}

	/**
	 * Return if the first slide is active
	 * @return 	{Boolean} 	true if the first slide is active
	 */
	isFirst() {
		return this._slides[0].hasAttribute('active');
	}

	/**
	 * Return if the first slide is active
	 * @return 	{Boolean} 	true if the first slide is active
	 */
	isLast() {
		return this._slides[this.slides.length-1].hasAttribute('active');
	}

	/**
     * Go find into dom every elements needed for the slideshow
     * @return 	{void}
	 */
	_updateReferences() {
		// grab the total and current token handler
		this._refs.total = this.querySelectorAll(`${this._componentNameDash}-total, [${this._componentNameDash}-total]`);
		this._refs.current = this.querySelectorAll(`${this._componentNameDash}-current, [${this._componentNameDash}-current]`);
		// grab all the goto elements
		this._refs.goTos = this.querySelectorAll(`${this._componentNameDash}-goto, [${this._componentNameDash}-goto]`);
	}
}

// STemplate integration
sTemplateIntegrator.registerComponentIntegration(SSlideshowComponent, (component) => {
	sTemplateIntegrator.ignore(component, {
		slide : true,
		direction : true
	});
	component.onNewSlide((slide) => {
		sTemplateIntegrator.ignore(slide, {
			active : true,
			previous : true,
			next : true,
			"before-active" : true,
			"after-active" : true
		});
	});
	if (component._refs.total) {
		sTemplateIntegrator.ignore(component._refs.total);
	}
	if (component._refs.current) {
		sTemplateIntegrator.ignore(component._refs.current);
	}
});
