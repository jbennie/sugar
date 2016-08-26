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
import SComponent from '../core/SComponent'
import querySelectorLive from '../dom/querySelectorLive'
import __next from '../dom/next'
import __previous from '../dom/previous'
import __offset from '../dom/offset'
import __scrollTop from '../dom/scrollTop'
import __uniqid from '../tools/uniqid'
import __throttle from '../functions/throttle'
import SEvent from '../core/SEvent'
import noUiSlider from 'nouislider'
import STimer from '../core/STimer'

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
	 * isPaused
	 * Store the pause status
	 * @type 	{Boolean}
	 */
	_isPaused = false;

	/**
	 * isPlayed
	 * Store the play status
	 * @type 	{Boolean}
	 */
	_isPlayed = false;

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
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sSlideshow', elm, {

			/**
			 * activeClass
			 * Set the class added on the active slide
			 * @type 	{String}
			 */
			activeClass : 'active',

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
			 * onResume
			 * Callback when the slideshow resume after a pause
			 * @type 	{Function}
			 */
			onResume : null

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
		querySelectorLive(`[${this.name_dash}-slide], ${this.name_dash}-slide`, {
			rootNode : this.elm
		}).stack(this._slides).subscribe((elm) => {
			// init new slide
			this._initSlide(elm);
		});

		// first next
		this.next();

		// check if need to go next on click
		if (this.settings.nextOnClick) {
			this.elm.addEventListener('click', (e) => {
				// go next
				this.next();
			});
		}

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

		// if autoplay
		if (this.settings.autoplay) {
			this.play();
		}

		// pauseOnHover
		if (this.settings.pauseOnHover) {
			this.elm.addEventListener('mouseenter', this._onMouseover.bind(this));
			this.elm.addEventListener('mouseleave', this._onMouseout.bind(this));
		}
	}

	/**
	 * _onMouseover
	 * Called when the user has the mouse over the slideshow
	 * @param 	{Event} 	e 	The event
	 * @return 	{void}
	 */
	_onMouseover(e) {
		console.warn('over');
		// pause the timer
		this._timer.pause();
	}

	/**
	 * _onMouseout
	 * Called when the user has the mouse out the slideshow
	 * @param 	{Event} 	e 	The event
	 * @return 	{void}
	 */
	_onMouseout(e) {
		console.warn('mouseout');
		// resume the timer
		this._timer.start();
	}

	/**
	 * _initSlide
	 * Init a new slide
	 * @return 	{void}
	 */
	_initSlide(slide) {
		slide.classList.add('s-slideshow__slide');
		slide.classList.add('s-slideshow-slide');
	}

	/**
	 * next
	 * Go to next slide
	 * @return 	{SSlideshowComponent}
	 */
	next() {
		// set the active slide
		const idx = this.getActiveSlideIndex();
		if (idx + 1 < this._slides.length) {
			this._activeSlide = this._slides[idx+1];
		} else if (this.settings.loop) {
			this._activeSlide = this._slides[0];
		} else {
			// stop here
			return this;
		}
		// unactivate the previous slide
		if (idx !== -1) {
			this._slides[idx].classList.remove(this.settings.activeClass);
		}
		// activate the current slide
		this._activeSlide.classList.add(this.settings.activeClass);
		// maintain chainability
		return this;
	}

	/**
	 * previous
	 * Go to previous slide
	 * @return 	{SSlideshowComponent}
	 */
	previous() {
		// set the active slide
		const idx = this.getActiveSlideIndex();
		if (idx - 1 >= 0) {
			this._activeSlide = this._slides[idx-1];
		} else if (this.settings.loop) {
			this._activeSlide = this._slides[this._slides.length-1];
		} else {
			// stop here
			return this;
		}
		// unactivate the previous slide
		if (idx !== -1) {
			this._slides[idx].classList.remove(this.settings.activeClass);
		}
		// activate the current slide
		this._activeSlide.classList.add(this.settings.activeClass);
		// maintain chainability
		return this;
	}

	/**
	 * play
	 * Set the slideshow to play mode
	 * @return 	{SSlideshowComponent}
	 */
	play() {
		// start the timer
		this._timer.start();

		return this;
	}

	/**
	 * pause
	 * Set the slideshow to pause mode
	 * @return 	{SSlideshowComponent}
	 */
	pause() {
		return this;
	}

	/**
	 * stop
	 * Set the slideshow to stop mode
	 * @return 	{SSlideshowComponent}
	 */
	stop() {
		return this;
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
	 * isPlayed
	 * Return if the slideshow is played or not
	 * @return 	{Boolean} 	The played status
	 */
	isPlayed() {
		return this._isPlayed;
	}

	/**
	 * isPaused
	 * Return if the slideshow is paused or not
	 * @return 	{Boolean} 	The paused status
	 */
	isPaused() {
		return this._isPaused;
	}

	/**
	 * isStoped
	 * Return if the slideshow is stoped or not
	 * @return 	{Boolean} 	The stoped status
	 */
	isStoped() {
		return ! this._isPlayed && ! this._isPaused;
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

	}

}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SSlideshowComponent = SSlideshowComponent;

// initOn
SSlideshowComponent.initOn = function(selector, settings = {}) {
	// init the select
	return querySelectorLive(selector).visible().once().subscribe((elm) => {
		new SSlideshowComponent(elm);
	});
};

// export modules
export default SSlideshowComponent;
