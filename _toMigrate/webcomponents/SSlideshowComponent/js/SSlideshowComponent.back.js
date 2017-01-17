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
			slide : 0,

			/**
			 * Set the direction of the slideshow playback
			 * @prop
			 * @type 		{String}
			 * @values 		forward|backward
			 */
			direction : 'forward',

			/**
			 * Status of the playback
			 * @prop
			 * @type 		{String}
			 * @values 		stop|pause|play
			 */
			playback : 'play',

			/**
			 * Set the time to wait between each slides when the
			 * @prop
			 * slideshow is played
			 * @type 	{Number}
			 */
			timeout : 1000,

			/**
			 * Set the slideshow to pause mode when mouse is hover
			 * @prop
			 * @type 	{Boolean}
			 */
			pauseOnHover : false,

			/**
			 * Go to next slide when click on the slideshow
			 * @prop
			 * @type 	{Boolean}
			 */
			nextOnClick : false,

			/**
			 * Set if the slideshow is infinite
			 * @prop
			 * @tyoe 	{Boolean}
			 */
			loop : false,

			/**
			 * Set if the slideshow start in play mode
			 * @prop
			 * @type  	{Boolean}
			 */
			autoplay : true,

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
			 * Callback when the slideshow pass to the next slide
			 * @prop
			 * @type 	{Function}
			 */
			onNext : null,

			/**
			 * Callback when the slideshow pass to the previous slide
			 * @prop
			 * @type 	{Function}
			 */
			onPrevious : null,

			/**
			 * Callback when the slideshow pass in pause
			 * @prop
			 * @type 	{Function}
			 */
			onPause : null,

			/**
			 * Callback when the slideshow pass in play mode
			 * @prop
			 * @type 	{Function}
			 */
			onPlay : null,

			/**
			 * Callback when the slideshow stops
			 * @prop
			 * @type 	{Function}
			 */
			onStop : null,

			/**
			 * Callback used to init a new slide
			 * @prop
			 * @type 	{Function}
			 */
			initSlide : null,
		}
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 */
	static get physicalProps() {
		return ['slide','playback','direction'];
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
		 * Store the timer instance
		 * @type 	{STimer}
		 */
		this._timer = null;

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

		// create the timer
		this._timer = new STimer(this.props.timeout, {
			tickCount : 1,
			loop : true
		});
		// on tick
		this._timer.onTick((timer) => {
			// check if need to go forward or backward
			if (this.props.direction === 'backward') {
				this.previous();
			} else {
				// next slide
				this.next();
			}
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
	 * _listenBlurAndFocus
	 * Listen when the window is active and unactivate
	 */
	_listenBlurAndFocus() {
		// listen for blur and focus event on window
		window.addEventListener('blur', this._onWindowBlur.bind(this));
		window.addEventListener('focus', this._onWindowFocus.bind(this));
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
			if (this.props.nextOnClick) {
				this.next();
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
	 * Called when the user does not have the window active anymore
	 * @param 	{Event} 	e 	The event
	 */
	_onWindowBlur(e) {
		// pause the slideshow
		if (this.isPlay()) {
			this._wasPlayed = true;
			this.pause();
		} else {
			this._wasPlayed = false;
		}
	}

	/**
	 * Called when the user does not have the window active anymore
	 * @param 	{Event} 	e 	The event
	 */
	_onWindowFocus(e) {
		// pause the slideshow
		if (this._wasPlayed) {
			this.play();
			this._wasPlayed = null;
		}
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
		this._applyClasses();

		// listen for click on element
		this.addEventListener('click', this._onClick.bind(this));

		// pauseOnHover
		if (this.props.pauseOnHover) {
			this.addEventListener('mouseenter', this._onMouseover.bind(this));
			this.addEventListener('mouseleave', this._onMouseout.bind(this));
		}

		// enable keyboard navigation
		if (this.props.keyboardEnabled) {
			this._initKeyboardNavigation();
		}
		// enable touch navigation
		if (this.props.touchEnabled) {
			this._initTouchNavigation();
		}

		// listen for blur and focus
		this._listenBlurAndFocus();

		// init the previous and next navigation
		this._initPreviousAndNextButtons();

		// if autoplay
		if (this.props.autoplay) {
			this.play();
		}

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
			case 'playback':
				switch(newVal) {
					case 'play': this._play(); break;
					case 'pause': this._pause(); break;
					case 'stop': this._stop(); break;
				}
			break;
		}
	}

	/**
	 * When the element is disabled
	 * @return 	{SSlideshowComponent}
	 */
	disable() {
		// disable keyboard navigation
		document.removeEventListener('keyup', this._onKeyup);
		// do not listen for click anymore
		this.removeEventListener('click', this._onClick);
		// disable touch navigation
		this.removeEventListener('swipeleft', this._onSwipe);
		this.removeEventListener('swiperight', this._onSwipe);
		// pauseOnHover
		if (this.props.pauseOnHover) {
			this.removeEventListener('mouseenter', this._onMouseover);
			this.removeEventListener('mouseleave', this._onMouseout);
		}
		// do not listen for focus and blur anymore
		window.removeEventListener('blur', this._onWindowBlur);
		window.removeEventListener('focus', this._onWindowFocus);
		// do not listen for previous and next click
		this._refs.previous && this._refs.previous.removeEventListener('click', this._onPreviousClick);
		this._refs.next && this._refs.next.removeEventListener('click', this._onNextClick);
		// stop
		this.stop();
		// remove all classes
		this._unapplyClasses();
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
	 * Called when the user has the mouse over the slideshow
	 * @param 	{Event} 	e 	The event
	 */
	_onMouseover(e) {
		// pause the timer
		this.pause()
	}

	/**
	 * Called when the user has the mouse out the slideshow
	 * @param 	{Event} 	e 	The event
	 */
	_onMouseout(e) {
		// resume the timer
		this.play();
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
	 * Set the timer duration for the current slide
	 */
	_setTimerDurationForCurrentSlide() {
		// check if the current slide has a special timer defined
		const slideTime = this.getActiveSlide().getAttribute(`${this._componentNameDash}-slide-time`);
		if (slideTime) {
			this._timer.duration(__autoCast(slideTime));
		} else {
			this._timer.duration(this.props.timeout);
		}
	}

	/**
	 * Refresh the classes of the component
	 */
	_refreshClasses() {
		this._unapplyClasses();
		this._applyClasses();
	}

	/**
	 * Remove the classes from the elements
	 */
	_unapplyClasses() {
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
	 * Apply the good classes to the elements
	 */
	_applyClasses() {
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
		if (idx === -1) {
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

		// console.log('fefefe', activeSlideIndex);

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
		if (idx === -1) {
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
		this._unapplyClasses();

		// reset the timer and start it again if needed
		this._timer.reset(this.isPlay());

		// active the good slide
		this._activeSlide = this._slides[slideIndex];

		// apply total and current tokens
		this._applyTokens();

		// onChange callback
		this.props.onChange && this.props.onChange(this);

		// apply classes
		this._applyClasses();

		// set the timer duration
		this._setTimerDurationForCurrentSlide();

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
	 * Set the slideshow to play mode
	 * @return 	{SSlideshowComponent}
	 */
	play() {
		// update status
		this.setProp('playback', 'play');
		// maintain chainability
		return this;
	}

	/**
	 * Internal play
	 */
	_play() {
		// start the timer
		this._timer.start();
		// onPlay callback
		this.props.onPlay && this.props.onPlay(this);
	}

	/**
	 * Set the slideshow to pause mode
	 * @return 	{SSlideshowComponent}
	 */
	pause() {
		// update status
		this.setProp('playback', 'pause');
		// maintain chainability
		return this;
	}

	/**
	 * Internal pause
	 */
	_pause() {
		// pause the timer
		this._timer.pause();
		// onPause callback
		this.props.onPause && this.props.onPause(this);
	}

	/**
	 * Stop the slideshow
	 * @return {SSlideshowComponent}
	 */
	stop() {
		// update status
		this.setProp('playback', 'stop');
		// maintain chainability
		return this;
	}

	/**
	 * Internal stop
	 */
	_stop() {
		// stop the timer
		this._timer.stop();
		// onStop callback
		this.props.onStop && this.props.onStop(this);
		// maintain chainability
		return this;
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
	 * Return if the slideshow is played or not
	 * @return 	{Boolean} 	The played status
	 */
	isPlay() {
		return this.props.playback === 'play';
	}

	/**
	 * Return if the slideshow is paused or not
	 * @return 	{Boolean} 	The paused status
	 */
	isPause() {
		return this.props.playback === 'pause';
	}

	/**
	 * isStop
	 * Return if the slideshow is stoped or not
	 * @return 	{Boolean} 	The stoped status
	 */
	isStop() {
		return ! this.props.playback || this.props.playback === 'stop';
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
		// grab the next and previous element
		this._refs.next = this.querySelector(`${this._componentNameDash}-next, [${this._componentNameDash}-next]`);
		this._refs.previous = this.querySelector(`${this._componentNameDash}-previous, [${this._componentNameDash}-previous]`);
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
		playback : true,
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
