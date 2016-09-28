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
require('tocca');
import SComponent from '../../../js/core/SComponent'
import querySelectorLive from '../../../js/dom/querySelectorLive'
import __isInViewport from '../../../js/dom/isInViewport'
import __autoCast from '../../../js/utils/string/autoCast'
import STimer from '../../../js/classes/STimer'
import STemplate from '../../../js/core/STemplate'

// class
class SSlideshowComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sSlideshow', type, settings);
	}

	/**
	 * _slides
	 * Store all the slides elements
	 * @type 	{Array}
	 */
	_slides = [];

	/**
	 * _slidesIniter
	 * Store all the slides initer functions
	 * @type 	{Array}
	 */
	_slidesIniter = [];

	/**
	 * _isPause
	 * Store the pause status
	 * @type 	{Boolean}
	 */
	_isPause = false;

	/**
	 * _isPlay
	 * Store the play status
	 * @type 	{Boolean}
	 */
	_isPlay = false;

	/**
	 * _isForward
	 * Store the forward status
	 * @type 	{Boolean}
	 */
	_isForward = true;

	/**
	 * _activeSlide
	 * Store the active slide
	 * @type 	{DOMElement}
	 */
	_activeSlide = null;

	/**
	 * _timer
	 * Store the timer instance
	 * @type 	{STimer}
	 */
	_timer = null;

	/**
	 * _slidesObserver
	 * Store the observer of the slides
	 * @type 	{Observer}
	 */
	_slidesObserver = null;

	/**
	 * _refs
	 * Store the elements references like navigation, etc...
	 * @type 	{Object}
	 */
	_refs = {
		next : null, 				// the next button
		previous : null,			// the previous button
		totals : [],				// all the totals tokens
		currents : [], 				// all the currents tokens
		goTos : [] 					// all the goto elements
	};

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sSlideshow', elm, {

			/**
			 * slideClass
			 * Set the class applied on the slideshow that specify the active slide idx
			 * The token '%idx' will be replaced with the slide idx
			 * @type 	{String}
			 */
			slideClass : 'slide-%idx',

			/**
			 * forwardClass
			 * Set the class applied on the slideshow when it goes forward
			 * @type 	{String}
			 */
			forwardClass : 'forward',

			/**
			 * backwardClass
			 * Set the class applied on the slideshow when it goes backward
			 * @type 	{String}
			 */
			backwardClass : 'forward',

			/**
			 * playClass
			 * Set the class applied on the slideshow when it is in play mode
			 * @type 	{String}
			 */
			playClass : 'play',

			/**
			 * pauseClass
			 * Set the class applied on the slideshow when it is in pause mode
			 * @type 	{String}
			 */
			pauseClass : 'pause',

			/**
			 * stopClass
			 * Set the class applied on the slideshow when it is in stop mode
			 * @type 	{String}
			 */
			stopClass : 'stop',

			/**
			 * activeClass
			 * Set the class added on the active slide
			 * @type 	{String}
			 */
			activeClass : 'active',

			/**
			 * nextClass
			 * Set the class applied on the next slide
			 * @type 	{String}
			 */
			nextClass : 'next',

			/**
			 * previousClass
			 * Set the class applied on the next slide
			 * @type 	{String}
			 */
			previousClass : 'previous',

			/**
			 * beforeActiveClass
			 * Set the class applied on all the slides that are before the active one
			 * @type 	{String}
			 */
			beforeActiveClass : 'before-active',

			/**
			 * afterActiveClass
			 * Set the class applied on all the slides that are after the active one
			 * @type 	{String}
			 */
			afterActiveClass : 'after-active',

			/**
			 * firstClass
			 * Set the class applied on the first slide
			 * @type 	{String}
			 */
			firstClass : 'first',

			/**
			 * lastClass
			 * Set the class applied on the last slide
			 * @type 	{String}
			 */
			lastClass : 'last',

			/**
			 * timeout
			 * Set the time to wait between each slides when the
			 * slideshow is played
			 * @type 	{Number}
			 */
			timeout : 1000,

			/**
			 * pauseOnHover
			 * Set the slideshow to pause mode when mouse is hover
			 * @type 	{Boolean}
			 */
			pauseOnHover : false,

			/**
			 * nextOnClick
			 * Go to next slide when click on the slideshow
			 * @type 	{Boolean}
			 */
			nextOnClick : false,

			/**
			 * loop
			 * Set if the slideshow is infinite
			 * @tyoe 	{Boolean}
			 */
			loop : false,

			/**
			 * autoplay
			 * Set if the slideshow start in play mode
			 * @type  	{Boolean}
			 */
			autoplay : true,

			/**
			 * keyboardEnabled
			 * Set if the keyboard navigation is enabled
			 * @type 	{Boolean}
			 */
			keyboardEnabled : true,

			/**
			 * touchEnabled
			 * Set if the touch navigation is enabled
			 * @type 	{Boolean}
			 */
			touchEnabled : true,

			/**
			 * onInit
			 * Callback when the slideshow is inited
			 * @type 	{Function}
			 */
			onInit : null,

			/**
			 * beforeChange
			 * Callback before the slideshow pass to another slide
			 * @type 	{Function}
			 */
			beforeChange : null,

			/**
			 * onChange
			 * Callback when the slider change from a slide to another
			 * @type 	{Function}
			 */
			onChange : null,

			/**
			 * afterChange
			 * Callback when the slideshow has changed slide
			 * @type 	{Function}
			 */
			afterChange : null,

			/**
			 * onNext
			 * Callback when the slideshow pass to the next slide
			 * @type 	{Function}
			 */
			onNext : null,

			/**
			 * onPrevious
			 * Callback when the slideshow pass to the previous slide
			 * @type 	{Function}
			 */
			onPrevious : null,

			/**
			 * onPause
			 * Callback when the slideshow pass in pause
			 * @type 	{Function}
			 */
			onPause : null,

			/**
			 * onPlay
			 * Callback when the slideshow pass in play mode
			 * @type 	{Function}
			 */
			onPlay : null,

			/**
			 * onStop
			 * Callback when the slideshow stops
			 * @type 	{Function}
			 */
			onStop : null,

			/**
			 * initSlide
			 * Callback used to init a new slide
			 * @type 	{Function}
			 */
			initSlide : null

		}, settings);
	}

	/**
	 * On added to dom
	 */
	_init() {
		// init component
		super._init();

		// update references
		this._updateReferences();

		// grab the slides and maintain stack up to date
		this._slidesObserver = querySelectorLive(`[${this.componentNameDash}-slide]`, {
			rootNode : this.elm
		}).stack(this._slides).subscribe((elm) => {
			// init new slide
			this._initSlide(elm);
		});

		// listen for click on element
		this.elm.addEventListener('click', this._onClick.bind(this));

		// pauseOnHover
		if (this.settings.pauseOnHover) {
			this.elm.addEventListener('mouseenter', this._onMouseover.bind(this));
			this.elm.addEventListener('mouseleave', this._onMouseout.bind(this));
		}

		// keyboardEnabled
		if (this.settings.keyboardEnabled) {
			this._initKeyboardNavigation();
		}

		// touchenabled
		if (this.settings.touchEnabled) {
			this._initTouchNavigation();
		}

		// init next and previous buttons
		this._initPreviousAndNextButtons();

		// listen blur and focus
		this._listenBlurAndFocus();

		// create the timer
		this._timer = new STimer(this.settings.timeout, {
			tickCount : 1,
			loop : true
		});
		// on tick
		this._timer.tick((timer) => {
			// next slide
			this.next();
		});

		// onInit callback
		this.settings.onInit && this.settings.onInit(this);

		// watch the _isPlay
		this.watch('_isPlay', (newVal, oldVal) => {
			// refresh classes
			this._refreshClasses();
		});
	}

	/**
	 * _listenBlurAndFocus
	 * Listen when the window is active and unactivate
	 * @return 	{void}
	 */
	_listenBlurAndFocus() {
		// listen for blur and focus event on window
		window.addEventListener('blur', this._onWindowBlur.bind(this));
		window.addEventListener('focus', this._onWindowFocus.bind(this));
	}

	/**
	 * _onClick
	 * When the user click on the slideshow
	 * @param 	{Event} 	e 	The event
	 * @return 	{void}
	 */
	_onClick(e) {
		// check if we click on a goto element
		const goTo = e.target.getAttribute(`${this.componentNameDash}-goto`);
		if (goTo) {
			// go to wanted slide
			this.goTo(__autoCast(goTo));
		} else {
			if (this.settings.nextOnClick) {
				this.next();
			}
		}
	}

	/**
	 * _onNextClick
	 * When the user has clicked on the next button
	 * @param 	{Event} 	e 	The event
	 * @return 	{void}
	 */
	_onNextClick(e) {
		e.preventDefault();
		e.stopPropagation();
		this.next();
	}

	/**
	 * _onPreviousClick
	 * When the user has clicked on the previous button
	 * @param 	{Event} 	e 	The event
	 * @return 	{void}
	 */
	_onPreviousClick(e) {
		e.preventDefault();
		e.stopPropagation();
		this.previous();
	}

	/**
	 * _onWindowBlur
	 * Called when the user does not have the window active anymore
	 * @param 	{Event} 	e 	The event
	 * @return 	{void}
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
	 * _onWindowFocus
	 * Called when the user does not have the window active anymore
	 * @param 	{Event} 	e 	The event
	 * @return 	{void}
	 */
	_onWindowFocus(e) {
		// pause the slideshow
		if (this._wasPlayed) {
			this.play();
			this._wasPlayed = null;
		}
	}

	/**
	 * enable
	 * When the element is enabled
	 * @return 	{SSlideshowComponent}
	 */
	enable() {
		// no transmation
		this.elm.classList.add('clear-transmations');
		// next
		this.next();
		// add all classes
		this._applyClasses();
		// enable keyboard navigation
		if (this.settings.keyboardEnabled) {
			this._initKeyboardNavigation();
		}
		// enable touch navigation
		if (this.settings.touchEnabled) {
			this._initTouchNavigation();
		}
		// listen for blur and focus
		this._listenBlurAndFocus();
		// init the previous and next navigation
		this._initPreviousAndNextButtons();
		// if autoplay
		if (this.settings.autoplay) {
			this.play();
		}
		// parent
		super.enable();
		// remove the no transmation class to allow animations, etc...
		setTimeout(() => {
			this.elm.classList.remove('clear-transmations');
		});
		// maintain chainability
		return this;
	}

	/**
	 * disable
	 * When the element is disabled
	 * @return 	{SSlideshowComponent}
	 */
	disable() {
		// disable keyboard navigation
		document.removeEventListener('keyup', this._onKeyup);
		// disable touch navigation
		this.elm.removeEventListener('swipeleft', this._onSwipe);
		this.elm.removeEventListener('swiperight', this._onSwipe);
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
		// parent
		super.disable();
		// maintain chainability
		return this;
	}

	/**
	 * destroy
	 * When the element is destroyed
	 * @return 	{void}
	 */
	destroy() {
		// destroy all element in slideshow that need to be destroyed
		this._slidesObserver.unsubscribe();
		// destroy parent
		super.destroy();
	}

	/**
	 * _initPreviousAndNextButtons
	 * Init the previous and next buttons
	 * @return 	{void}
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
	 * _initKeyboardNavigation
	 * Init the keyboard navigation
	 * @return 	{void}
	 */
	_initKeyboardNavigation() {
		// listen for keyup event
		document.addEventListener('keyup', this._onKeyup.bind(this));
	}

	/**
	 * _initTouchNavigation
	 * Init the touch navigation
	 * @return 	{void}
	 */
	_initTouchNavigation() {
		// listen for swiped
		this.elm.addEventListener('swipeleft', this._onSwipe.bind(this));
		this.elm.addEventListener('swiperight', this._onSwipe.bind(this));
	}

	/**
	 * _onSwipe
	 * When the user has swiped on the slideshow
	 * @param 	{Event} 	e 	The event
	 * @return 	{void}
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
	 * _onKeyup
	 * When the user has released a keyboard key
	 * @param 	{Event} 	e 	The event
	 * @return 	{void}
	 */
	_onKeyup(e) {
		// do nothing if the slideshow is not in viewport
		if ( ! __isInViewport(this.elm)) return;

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
	 * _onMouseover
	 * Called when the user has the mouse over the slideshow
	 * @param 	{Event} 	e 	The event
	 * @return 	{void}
	 */
	_onMouseover(e) {
		// pause the timer
		this.pause()
	}

	/**
	 * _onMouseout
	 * Called when the user has the mouse out the slideshow
	 * @param 	{Event} 	e 	The event
	 * @return 	{void}
	 */
	_onMouseout(e) {
		// resume the timer
		this.play();
	}

	/**
	 * _initSlide
	 * Init a new slide
	 * @return 	{void}
	 */
	_initSlide(slide) {
		// callback if exist
		this.settings.initSlide && this.settings.initSlide(slide);
		// slides initer
		this._slidesIniter.forEach((initer) => {
			initer(slide);
		});
	}

	/**
	 * _setTimerDurationForCurrentSlide
	 * Set the timer duration for the current slide
	 * @return 	{void}
	 */
	_setTimerDurationForCurrentSlide() {
		// check if the current slide has a special timer defined
		const slideTime = this.getActiveSlide().getAttribute(`${this.componentNameDash}-slide-time`);
		if (slideTime) {
			this._timer.duration(__autoCast(slideTime));
		} else {
			this._timer.duration(this.settings.timeout);
		}
	}

	/**
	 * _refreshClasses
	 * Refresh the classes of the component
	 * @return 	{void}
	 */
	_refreshClasses() {
		this._unapplyClasses();
		this._applyClasses();
	}

	/**
	 * _unapplyClasses
	 * Remove the classes from the elements
	 * @return 	{void}
	 */
	_unapplyClasses() {

		this.removeComponentClass(this.elm);
		if (this._refs.navigation) {
			this.removeComponentClass(this._refs.navigation, 'navigation');
		}
		if (this._refs.next) {
			this.removeComponentClass(this._refs.next, 'next');
		}
		if (this._refs.previous) {
			this.removeComponentClass(this._refs.previous, 'previous');
		}
		if (this._refs.current) {
			this.removeComponentClass(this._refs.current, 'current');
		}
		if (this._refs.total) {
			this.removeComponentClass(this._refs.total, 'total');
		}

		// unactivate all the slides
		this._slides.forEach((slide) => {
			slide.classList.remove(this.settings.activeClass);
			slide.classList.remove(this.settings.beforeActiveClass);
			slide.classList.remove(this.settings.afterActiveClass);
			this.removeComponentClass(slide, 'slide');
		});
		// remove the active class on all goto
		[].forEach.call(this._refs.goTos, (goTo) => {
			goTo.classList.remove(this.settings.activeClass);
		});
		// remove the slide class
		this.elm.classList.remove(this.settings.slideClass.replace('%idx', this.getActiveSlideIndex()));
		// remove the previous and next classes
		if (this.getPreviousSlide()) {
			this.getPreviousSlide().classList.remove(this.settings.previousClass);
		}
		if (this.getNextSlide()) {
			this.getNextSlide().classList.remove(this.settings.nextClass);
		}
		// unapply the backward and forward classes
		this.elm.classList.remove(this.settings.forwardClass);
		this.elm.classList.remove(this.settings.backwardClass);
		// play, pause and stop class
		this.elm.classList.remove(this.settings.playClass);
		this.elm.classList.remove(this.settings.pauseClass);
		this.elm.classList.remove(this.settings.stopClass);
		// unapply the first and last classes
		if (this.getFirstSlide()) {
			this.getFirstSlide().classList.remove(this.settings.firstClass);
		}
		if (this.getLastSlide()) {
			this.getLastSlide().classList.remove(this.settings.lastClass);
		}
	}

	/**
	 * _applyClasses
	 * Apply the good classes to the elements
	 * @return 	{void}
	 */
	_applyClasses() {

		this.addComponentClass(this.elm);
		if (this._refs.navigation) {
			this.addComponentClass(this._refs.navigation, 'navigation');
		}
		if (this._refs.next) {
			this.addComponentClass(this._refs.next, 'next');
		}
		if (this._refs.previous) {
			this.addComponentClass(this._refs.previous, 'previous');
		}
		if (this._refs.current) {
			this.addComponentClass(this._refs.current, 'current');
		}
		if (this._refs.total) {
			this.addComponentClass(this._refs.total, 'total');
		}

		this._slides.forEach((slide) => {
			this.addComponentClass(slide, 'slide');
		});

		// activate the current slide
		this._activeSlide.classList.add(this.settings.activeClass);
		// goto classes
		[].forEach.call(this._refs.goTos, (goTo) => {
			const idx = goTo.getAttribute(`${this.componentNameDash}-goto`);
			if (idx && __autoCast(idx) === this.getActiveSlideIndex()) {
				goTo.classList.add(this.settings.activeClass);
			}
		});
		// remove the slide class
		this.elm.classList.add(this.settings.slideClass.replace('%idx', this.getActiveSlideIndex()));
		// add the next and previous classes
		if (this.getPreviousSlide()) {
			this.getPreviousSlide().classList.add(this.settings.previousClass);
		}
		if (this.getNextSlide()) {
			this.getNextSlide().classList.add(this.settings.nextClass);
		}
		// forward and backward classes
		if (this._isForward) {
			this.elm.classList.add(this.settings.forwardClass);
		} else {
			this.elm.classList.add(this.settings.backwardClass);
		}
		// play, pause and stop class
		if (this.isPlay()) {
			this.elm.classList.add(this.settings.playClass);
		} else if (this.isPause()) {
			this.elm.classList.add(this.settings.pauseClass);
		} else {
			this.elm.classList.add(this.settings.stopClass);
		}
		// apply the first and last classes
		if (this.getFirstSlide()) {
			this.getFirstSlide().classList.add(this.settings.firstClass);
		}
		if (this.getLastSlide()) {
			this.getLastSlide().classList.add(this.settings.lastClass);
		}
		// apply the beforeActiveClass
		this.getBeforeActiveSlides().forEach((slide) => {
			slide.classList.add(this.settings.beforeActiveClass);
		});
		// apply the afterActiveClass
		this.getAfterActiveSlides().forEach((slide) => {
			slide.classList.add(this.settings.afterActiveClass);
		});
	}

	/**
	 * _applyTokens
	 * Apply the differents tokens available to use in the html template
	 * @return 	{void}
	 */
	_applyTokens() {
		// apply current
		if (this._refs.current) {
			[].forEach.call(this._refs.current, (current) => {
				current.innerHTML = this.getActiveSlideIndex() + 1;
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
	 * _findActiveSlideByClass
	 * Loop on slides to find the first one that has the active class
	 * @return 	{HTMLElement} 	The first active class
	 */
	_findActiveSlideByClass() {
		for(let i=0; i<this._slides.length; i++) {
			const slide = this._slides[i];
			if (slide.classList.contains(this.settings.activeClass)) {
				return slide;
			}
		}
		return null;
	}

	/**
	 * next
	 * Go to next slide
	 * @return 	{SSlideshowComponent}
	 */
	next() {

		// stop if the document is hidden
		if (document.hidden) return;

		// check if is in viewport
		if ( ! __isInViewport(this.elm) && this.getActiveSlideIndex() !== -1) return;

		// get the current active slide index
		const idx = this.getActiveSlideIndex();

		// if the slideshow is at his first time
		let activeSlideIndex = 0;
		if (idx === -1) {
			// try to find a slide that has the active class
			const activeSlide = this._findActiveSlideByClass();
			if (activeSlide) {
				activeSlideIndex = this._slides.indexOf(activeSlide);
			} else {
				activeSlideIndex = 0;
			}
		} else if (idx + 1 < this._slides.length) {
			activeSlideIndex = idx+1;
		}

		// go to the new slide
		this.goTo(activeSlideIndex);

		// onNext callback
		this.settings.onNext && this.settings.onNext(this);

		// maintain chainability
		return this;
	}

	/**
	 * previous
	 * Go to previous slide
	 * @return 	{SSlideshowComponent}
	 */
	previous() {

		// stop if the document is hidden
		if (document.hidden) return;

		// check if is in viewport
		if ( ! __isInViewport(this.elm) && this.getActiveSlideIndex() !== -1) return;

		// get the current active slide index
		const idx = this.getActiveSlideIndex();

		// if the slideshow is at his first time
		let activeSlideIndex = 0;
		if (idx === -1) {
			// try to find a slide that has the active class
			const activeSlide = this._findActiveSlideByClass();
			if (activeSlide) {
				activeSlideIndex = this._slides.indexOf(activeSlide);
			} else {
				activeSlideIndex = 0;
			}
		} else if (idx - 1 >= 0) {
			activeSlideIndex = idx-1;
		} else if (this.settings.loop) {
			activeSlideIndex = this._slides.length-1;
		}

		// go to the new slide
		this.goTo(activeSlideIndex);

		// onPrevious callback
		this.settings.onPrevious && this.settings.onPrevious(this);

		// maintain chainability
		return this;
	}

	/**
	 * goTo
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
		this.settings.beforeChange && this.settings.beforeChange(this);

		// unapply classes
		this._unapplyClasses();

		// reset the timer and start it again if needed
		this._timer.reset(this.isPlay());

		// active the good slide
		this._activeSlide = this._slides[slideIndex];

		// apply total and current tokens
		this._applyTokens();

		// onChange callback
		this.settings.onChange && this.settings.onChange(this);

		// apply classes
		this._applyClasses();

		// set the timer duration
		this._setTimerDurationForCurrentSlide();

		// afterChange callback
		this.settings.afterChange && this.settings.afterChange(this);

		// maintain chainability
		return this;
	}

	/**
	 * onNewSlide
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
	 * play
	 * Set the slideshow to play mode
	 * @return 	{SSlideshowComponent}
	 */
	play() {
		// update status
		this._isPause = false;
		this._isPlay = true;
		// start the timer
		this._timer.start();
		// onPlay callback
		this.settings.onPlay && this.settings.onPlay(this);
		// maintain chainability
		return this;
	}

	/**
	 * pause
	 * Set the slideshow to pause mode
	 * @return 	{SSlideshowComponent}
	 */
	pause() {
		// update status
		this._isPause = true;
		this._isPlay = false;
		// pause the timer
		this._timer.pause();
		// onPause callback
		this.settings.onPause && this.settings.onPause(this);
		// maintain chainability
		return this;
	}

	/**
	 * stop
	 * Set the slideshow to stop mode
	 * @return 	{SSlideshowComponent}
	 */
	stop() {
		// update status
		this._isPause = false;
		this._isPlay = false;
		// stop the timer
		this._timer.stop();
		// onStop callback
		this.settings.onStop && this.settings.onStop(this);
		// maintain chainability
		return this;
	}

	/**
	 * getBeforeActiveSlides
	 * Return all the slides that are before the active one
	 * @return 	{Array} 	The array of slides that are before the active one
	 */
	getBeforeActiveSlides() {
		const activeIdx = this.getActiveSlideIndex();
		const newArray = this._slides.slice(0);
		newArray.splice(activeIdx, 1000);
		return newArray;
	}

	/**
	 * getAfterActiveSlides
	 * Return all the slides that are before the active one
	 * @return 	{Array} 	The array of slides that are before the active one
	 */
	getAfterActiveSlides() {
		const activeIdx = this.getActiveSlideIndex();
		const newArray = this._slides.slice(0);
		newArray.splice(0, activeIdx + 1);
		return newArray;
	}

	/**
	 * getActiveSlideIndex
	 * Return the index of the active slide
	 * @return 	{Integer}	The active slide index
	 */
	getActiveSlideIndex() {
		return this._slides.indexOf(this.getActiveSlide());
	}

	/**
	 * getActiveSlide
	 * Return the active slide element
	 * @return 	{HTMLElement} 	The active slide
	 */
	getActiveSlide() {
		return this._activeSlide;
	}

	/**
	 * getFirstSlide
	 * Return the first slide element
	 * @return 	{HTMLElement} 	The first slide
	 */
	getFirstSlide() {
		return this._slides[0];
	}

	/**
	 * getLastSlide
	 * Return the last slide element
	 * @return 	{HTMLElement} 	The last slide
	 */
	getLastSlide() {
		return this._slides[this._slides.length - 1];
	}

	/**
	 * getNextSlideIndex
	 * Return the next slide index
	 * @return 	{Integer} 	The next slide index
	 */
	getNextSlideIndex() {
		const activeSlideIndex = this.getActiveSlideIndex();
		if (activeSlideIndex + 1 < this._slides.length) {
			return activeSlideIndex + 1;
		} else {
			return 0;
		}
	}

 	/**
	 * getNextSlide
	 * Return the previous slide element
	 * @return 	{HTMLElement} 	The previous slide
	 */
	getNextSlide() {
		return this._slides[this.getNextSlideIndex()];
	}

	/**
	 * getPreviousSlideIndex
	 * Return the previous slide index
	 * @return 	{Integer} 	The previous slide index
	 */
	getPreviousSlideIndex() {
		const activeSlideIndex = this.getActiveSlideIndex();
		if (activeSlideIndex > 0) {
			return activeSlideIndex - 1;
		} else {
			return this._slides.length - 1;
		}
	}

 	/**
	 * getPreviousSlide
	 * Return the previous slide element
	 * @return 	{HTMLElement} 	The previous slide
	 */
	getPreviousSlide() {
		return this._slides[this.getPreviousSlideIndex()];
	}

	/**
	 * isPlay
	 * Return if the slideshow is played or not
	 * @return 	{Boolean} 	The played status
	 */
	isPlay() {
		return this._isPlay;
	}

	/**
	 * isPause
	 * Return if the slideshow is paused or not
	 * @return 	{Boolean} 	The paused status
	 */
	isPause() {
		return this._isPause;
	}

	/**
	 * isStop
	 * Return if the slideshow is stoped or not
	 * @return 	{Boolean} 	The stoped status
	 */
	isStop() {
		return ! this._isPlay && ! this._isPause;
	}

	/**
	 * isLoop
	 * Return if the slideshow loop status is true
	 * @return 	{Boolean} 	The loop status
	 */
	isLoop() {
		return this.settings.loop;
	}

	/**
	 * isFirst
	 * Return if the first slide is active
	 * @return 	{Boolean} 	true if the first slide is active
	 */
	isFirst() {
		return this._slides[0].classList.contains(this.settings.activeClass);
	}

	/**
	 * isLast
	 * Return if the first slide is active
	 * @return 	{Boolean} 	true if the first slide is active
	 */
	isLast() {
		return this._slides[this.slides.length-1].classList.contains(this.settings.activeClass);
	}

	/**
     * _updateReferences
     * Go find into dom every elements needed for the slideshow
     * @return 	{void}
	 */
	_updateReferences() {
		// grab the navigation
		this._refs.navigation = this.elm.querySelector(`[${this.componentNameDash}-navigation]`);
		// grab the next and previous element
		this._refs.next = this.elm.querySelector(`[${this.componentNameDash}-next]`);
		this._refs.previous = this.elm.querySelector(`[${this.componentNameDash}-previous]`);
		// grab the total and current token handler
		this._refs.total = this.elm.querySelectorAll(`[${this.componentNameDash}-total]`);
		this._refs.current = this.elm.querySelectorAll(`[${this.componentNameDash}-current]`);
		// grab all the goto elements
		this._refs.goTos = this.elm.querySelectorAll(`[${this.componentNameDash}-goto]`);
	}

}

// STemplate integration
STemplate.registerComponentIntegration('SSlideshowComponent', (component) => {
	STemplate.keepAttribute(component.elm, 'class');
	component.onNewSlide((slide) => {
		STemplate.keepAttribute(slide, 'class');
	});
	if (component._refs.navigation) {
		STemplate.keepAttribute(component._refs.navigation, 'class');
	}
	if (component._refs.next) {
		STemplate.keepAttribute(component._refs.next, 'class');
	}
	if (component._refs.previous) {
		STemplate.keepAttribute(component._refs.previous, 'class');
	}
	if (component._refs.total) {
		STemplate.keepAttribute(component._refs.total, 'class');
	}
	if (component._refs.current) {
		STemplate.keepAttribute(component._refs.current, 'class');
	}
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SSlideshowComponent = SSlideshowComponent;

// export modules
export default SSlideshowComponent;
