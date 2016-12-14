'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _SWebComponent2 = require('../../../js/core/SWebComponent');

var _SWebComponent3 = _interopRequireDefault(_SWebComponent2);

var _querySelectorLive = require('../../../js/dom/querySelectorLive');

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

var _isInViewport = require('../../../js/dom/isInViewport');

var _isInViewport2 = _interopRequireDefault(_isInViewport);

var _autoCast = require('../../../js/utils/string/autoCast');

var _autoCast2 = _interopRequireDefault(_autoCast);

var _STimer = require('../../../js/classes/STimer');

var _STimer2 = _interopRequireDefault(_STimer);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SSlideshowComponent = function (_SWebComponent) {
	_inherits(SSlideshowComponent, _SWebComponent);

	function SSlideshowComponent() {
		_classCallCheck(this, SSlideshowComponent);

		return _possibleConstructorReturn(this, _SWebComponent.apply(this, arguments));
	}

	/**
  * Component will mount
  * @definition 			SWebComponent.componentWillMount
  */
	SSlideshowComponent.prototype.componentWillMount = function componentWillMount() {
		_SWebComponent.prototype.componentWillMount.call(this);

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
			next: null, // the next button
			previous: null, // the previous button
			totals: [], // all the totals tokens
			currents: [], // all the currents tokens
			goTos: [] // all the goto elements
		};
	};

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */


	SSlideshowComponent.prototype.componentMount = function componentMount() {
		var _this2 = this;

		_SWebComponent.prototype.componentMount.call(this);

		// update references
		this._updateReferences();

		// grab the slides and maintain stack up to date
		this._slidesObserver = (0, _querySelectorLive2.default)(this._componentNameDash + '-slide, [' + this._componentNameDash + '-slide]', {
			rootNode: this
		}).stack(this._slides).subscribe(function (elm) {
			// init new slide
			_this2._initSlide(elm);
		});

		// create the timer
		this._timer = new _STimer2.default(this.props.timeout, {
			tickCount: 1,
			loop: true
		});
		// on tick
		this._timer.onTick(function (timer) {
			// check if need to go forward or backward
			if (_this2.props.direction === 'backward') {
				_this2.previous();
			} else {
				// next slide
				_this2.next();
			}
		});

		// onInit callback
		this.props.onInit && this.props.onInit(this);

		// enable
		this.enable();
	};

	/**
  * Component unmount
  * @definition 		SWebComponent.componentUnmount
  */


	SSlideshowComponent.prototype.componentUnmount = function componentUnmount() {
		_SWebComponent.prototype.componentUnmount.call(this);
		this.disable();
		this.destroy();
	};

	/**
  * _listenBlurAndFocus
  * Listen when the window is active and unactivate
  */


	SSlideshowComponent.prototype._listenBlurAndFocus = function _listenBlurAndFocus() {
		// listen for blur and focus event on window
		window.addEventListener('blur', this._onWindowBlur.bind(this));
		window.addEventListener('focus', this._onWindowFocus.bind(this));
	};

	/**
  * When the user click on the slideshow
  * @param 	{Event} 	e 	The event
  */


	SSlideshowComponent.prototype._onClick = function _onClick(e) {
		// check if we click on a goto element
		var goTo = e.target.getAttribute(this._componentNameDash + '-goto');
		if (goTo) {
			// go to wanted slide
			this.goTo((0, _autoCast2.default)(goTo));
		} else {
			if (this.props.nextOnClick) {
				this.next();
			}
		}
	};

	/**
  * When the user has clicked on the next button
  * @param 	{Event} 	e 	The event
  */


	SSlideshowComponent.prototype._onNextClick = function _onNextClick(e) {
		e.preventDefault();
		e.stopPropagation();
		this.next();
	};

	/**
  * When the user has clicked on the previous button
  * @param 	{Event} 	e 	The event
  */


	SSlideshowComponent.prototype._onPreviousClick = function _onPreviousClick(e) {
		e.preventDefault();
		e.stopPropagation();
		this.previous();
	};

	/**
  * Called when the user does not have the window active anymore
  * @param 	{Event} 	e 	The event
  */


	SSlideshowComponent.prototype._onWindowBlur = function _onWindowBlur(e) {
		// pause the slideshow
		if (this.isPlay()) {
			this._wasPlayed = true;
			this.pause();
		} else {
			this._wasPlayed = false;
		}
	};

	/**
  * Called when the user does not have the window active anymore
  * @param 	{Event} 	e 	The event
  */


	SSlideshowComponent.prototype._onWindowFocus = function _onWindowFocus(e) {
		// pause the slideshow
		if (this._wasPlayed) {
			this.play();
			this._wasPlayed = null;
		}
	};

	/**
  * When the element is enabled
  * @return 	{SSlideshowComponent}
  */


	SSlideshowComponent.prototype.enable = function enable() {
		var _this3 = this;

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
		setTimeout(function () {
			_this3.classList.remove('clear-transmations');
		});

		// maintain chainability
		return this;
	};

	/**
  * Component will receive prop
  * @definition 		SWebComponent.componentWillReceiveProp
  */


	SSlideshowComponent.prototype.componentWillReceiveProp = function componentWillReceiveProp(name, newVal, oldVal) {
		switch (name) {
			case 'slide':
				this.goTo(newVal);
				break;
			case 'playback':
				switch (newVal) {
					case 'play':
						this._play();break;
					case 'pause':
						this._pause();break;
					case 'stop':
						this._stop();break;
				}
				break;
		}
	};

	/**
  * When the element is disabled
  * @return 	{SSlideshowComponent}
  */


	SSlideshowComponent.prototype.disable = function disable() {
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
	};

	/**
  * When the element is destroyed
  */


	SSlideshowComponent.prototype.destroy = function destroy() {
		// destroy all element in slideshow that need to be destroyed
		this._slidesObserver.unsubscribe();
	};

	/**
  * Init the previous and next buttons
  */


	SSlideshowComponent.prototype._initPreviousAndNextButtons = function _initPreviousAndNextButtons() {
		// if the next element exist
		if (this._refs.next) {
			this._refs.next.addEventListener('click', this._onNextClick.bind(this));
		}
		// if the previous element exist
		if (this._refs.previous) {
			this._refs.previous.addEventListener('click', this._onPreviousClick.bind(this));
		}
	};

	/**
  * Init the keyboard navigation
  */


	SSlideshowComponent.prototype._initKeyboardNavigation = function _initKeyboardNavigation() {
		// listen for keyup event
		document.addEventListener('keyup', this._onKeyup.bind(this));
	};

	/**
  * Init the touch navigation
  */


	SSlideshowComponent.prototype._initTouchNavigation = function _initTouchNavigation() {
		// listen for swiped
		this.addEventListener('swipeleft', this._onSwipe.bind(this));
		this.addEventListener('swiperight', this._onSwipe.bind(this));
	};

	/**
  * When the user has swiped on the slideshow
  * @param 	{Event} 	e 	The event
  */


	SSlideshowComponent.prototype._onSwipe = function _onSwipe(e) {
		// check the swipe direction
		switch (e.type) {
			case 'swipeleft':
				this.next();
				break;
			case 'swiperight':
				this.previous();
				break;
		}
	};

	/**
  * When the user has released a keyboard key
  * @param 	{Event} 	e 	The event
  */


	SSlideshowComponent.prototype._onKeyup = function _onKeyup(e) {
		// do nothing if the slideshow is not in viewport
		if (!(0, _isInViewport2.default)(this)) return;

		// check the key
		switch (e.keyCode) {
			case 39:
				// right arrow
				this.next();
				break;
			case 37:
				// left arrow
				this.previous();
				break;
		}
	};

	/**
  * Called when the user has the mouse over the slideshow
  * @param 	{Event} 	e 	The event
  */


	SSlideshowComponent.prototype._onMouseover = function _onMouseover(e) {
		// pause the timer
		this.pause();
	};

	/**
  * Called when the user has the mouse out the slideshow
  * @param 	{Event} 	e 	The event
  */


	SSlideshowComponent.prototype._onMouseout = function _onMouseout(e) {
		// resume the timer
		this.play();
	};

	/**
  * Init a new slide
  */


	SSlideshowComponent.prototype._initSlide = function _initSlide(slide) {
		// callback if exist
		this.props.initSlide && this.props.initSlide(slide);
		// slides initer
		this._slidesIniter.forEach(function (initer) {
			initer(slide);
		});
	};

	/**
  * Set the timer duration for the current slide
  */


	SSlideshowComponent.prototype._setTimerDurationForCurrentSlide = function _setTimerDurationForCurrentSlide() {
		// check if the current slide has a special timer defined
		var slideTime = this.getActiveSlide().getAttribute(this._componentNameDash + '-slide-time');
		if (slideTime) {
			this._timer.duration((0, _autoCast2.default)(slideTime));
		} else {
			this._timer.duration(this.props.timeout);
		}
	};

	/**
  * Refresh the classes of the component
  */


	SSlideshowComponent.prototype._refreshClasses = function _refreshClasses() {
		this._unapplyClasses();
		this._applyClasses();
	};

	/**
  * Remove the classes from the elements
  */


	SSlideshowComponent.prototype._unapplyClasses = function _unapplyClasses() {
		// unactivate all the slides
		this._slides.forEach(function (slide) {
			slide.removeAttribute('active');
			slide.removeAttribute('before-active');
			slide.removeAttribute('after-active');
		});
		// remove the active class on all goto
		[].forEach.call(this._refs.goTos, function (goTo) {
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
	};

	/**
  * Apply the good classes to the elements
  */


	SSlideshowComponent.prototype._applyClasses = function _applyClasses() {
		var _this4 = this;

		// activate the current slide
		this._activeSlide.setAttribute('active', true);
		// goto classes
		[].forEach.call(this._refs.goTos, function (goTo) {
			var idx = goTo.getAttribute(_this4._componentNameDash + '-goto');
			if (idx && (0, _autoCast2.default)(idx) === _this4.props.slide) {
				goTo.setAttribute('active', true);
			}
		});
		// add the next and previous classes
		if (this.getPreviousSlide()) {
			if (!this.getPreviousSlide().hasAttribute('previous')) {
				this.getPreviousSlide().setAttribute('previous', true);
			}
		}
		if (this.getNextSlide()) {
			if (!this.getNextSlide().hasAttribute('next')) {
				this.getNextSlide().setAttribute('next', true);
			}
		}
		// apply the first and last classes
		if (this.getFirstSlide()) {
			if (!this.getFirstSlide().hasAttribute('first')) {
				this.getFirstSlide().setAttribute('first', true);
			}
		}
		if (this.getLastSlide()) {
			if (!this.getLastSlide().hasAttribute('last')) {
				this.getLastSlide().setAttribute('last', true);
			}
		}
		// apply the beforeActiveClass
		this.getBeforeActiveSlides().forEach(function (slide) {
			if (!slide.hasAttribute('before-active')) {
				slide.setAttribute('before-active', true);
			}
		});
		// apply the afterActiveClass
		this.getAfterActiveSlides().forEach(function (slide) {
			if (!slide.hasAttribute('after-active')) {
				slide.setAttribute('after-active', true);
			}
		});
	};

	/**
  * Apply the differents tokens available to use in the html template
  */


	SSlideshowComponent.prototype._applyTokens = function _applyTokens() {
		var _this5 = this;

		// apply current
		if (this._refs.current) {
			[].forEach.call(this._refs.current, function (current) {
				current.innerHTML = _this5.props.slide + 1;
			});
		}
		// apply total
		if (this._refs.total) {
			[].forEach.call(this._refs.total, function (total) {
				total.innerHTML = _this5._slides.length;
			});
		}
	};

	/**
  * Loop on slides to find the first one that has the active class
  * @return 	{HTMLElement} 	The first active class
  */


	SSlideshowComponent.prototype._findActiveSlideByAttributes = function _findActiveSlideByAttributes() {
		for (var i = 0; i < this._slides.length; i++) {
			var slide = this._slides[i];
			if (slide.hasAttribute('active')) {
				return slide;
			}
		}
		return null;
	};

	/**
  * Go to next slide
  * @return 	{SSlideshowComponent}
  */


	SSlideshowComponent.prototype.next = function next() {

		// stop if the document is hidden
		if (document.hidden) return;

		// check if is in viewport
		if (!(0, _isInViewport2.default)(this) && this.props.slide !== -1) return;

		// get the current active slide index
		var idx = this.props.slide;

		// if the slideshow is at his first time
		var activeSlideIndex = 0;
		if (idx === -1) {
			// try to find a slide that has the active class
			var activeSlide = this._findActiveSlideByAttributes();
			if (activeSlide) {
				activeSlideIndex = this._slides.indexOf(activeSlide);
			} else {
				activeSlideIndex = 0;
			}
		} else if (idx + 1 < this._slides.length) {
			activeSlideIndex = idx + 1;
		}

		// console.log('fefefe', activeSlideIndex);

		// set slide prop
		this.setProp('slide', activeSlideIndex);

		// onNext callback
		this.props.onNext && this.props.onNext(this);

		// maintain chainability
		return this;
	};

	/**
  * Go to previous slide
  * @return 	{SSlideshowComponent}
  */


	SSlideshowComponent.prototype.previous = function previous() {

		// stop if the document is hidden
		if (document.hidden) return;

		// check if is in viewport
		if (!(0, _isInViewport2.default)(this) && this.props.slide !== -1) return;

		// get the current active slide index
		var idx = this.props.slide;

		// if the slideshow is at his first time
		var activeSlideIndex = 0;
		if (idx === -1) {
			// try to find a slide that has the active class
			var activeSlide = this._findActiveSlideByAttributes();
			if (activeSlide) {
				activeSlideIndex = this._slides.indexOf(activeSlide);
			} else {
				activeSlideIndex = 0;
			}
		} else if (idx - 1 >= 0) {
			activeSlideIndex = idx - 1;
		} else if (this.props.loop) {
			activeSlideIndex = this._slides.length - 1;
		}

		// set slide prop
		this.setProp('slide', activeSlideIndex);

		// onPrevious callback
		this.props.onPrevious && this.props.onPrevious(this);

		// maintain chainability
		return this;
	};

	/**
  * Go to a specific slide
  * @param 	{Integer} 	slideIndex 	The slide index to go to
  * @return 	{SSlideshowComponent} 	The instance itself
  */


	SSlideshowComponent.prototype.goTo = function goTo(slideIndex) {
		// check the slide index
		if (slideIndex >= this._slides.length) {
			throw 'The slide ' + slideIndex + ' does not exist...';
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
	};

	/**
  * Register a function to init a new slide
  * @param 	{Function} 	initer 	The initer function
  * @return 	{SSlideshowComponent}
  */


	SSlideshowComponent.prototype.onNewSlide = function onNewSlide(callback) {
		if (this._slidesIniter.indexOf(callback) === -1) {
			this._slidesIniter.push(callback);
		}
	};

	/**
  * Set the slideshow to play mode
  * @return 	{SSlideshowComponent}
  */


	SSlideshowComponent.prototype.play = function play() {
		// update status
		this.setProp('playback', 'play');
		// maintain chainability
		return this;
	};

	/**
  * Internal play
  */


	SSlideshowComponent.prototype._play = function _play() {
		// start the timer
		this._timer.start();
		// onPlay callback
		this.props.onPlay && this.props.onPlay(this);
	};

	/**
  * Set the slideshow to pause mode
  * @return 	{SSlideshowComponent}
  */


	SSlideshowComponent.prototype.pause = function pause() {
		// update status
		this.setProp('playback', 'pause');
		// maintain chainability
		return this;
	};

	/**
  * Internal pause
  */


	SSlideshowComponent.prototype._pause = function _pause() {
		// pause the timer
		this._timer.pause();
		// onPause callback
		this.props.onPause && this.props.onPause(this);
	};

	/**
  * Stop the slideshow
  * @return {SSlideshowComponent}
  */


	SSlideshowComponent.prototype.stop = function stop() {
		// update status
		this.setProp('playback', 'stop');
		// maintain chainability
		return this;
	};

	/**
  * Internal stop
  */


	SSlideshowComponent.prototype._stop = function _stop() {
		// stop the timer
		this._timer.stop();
		// onStop callback
		this.props.onStop && this.props.onStop(this);
		// maintain chainability
		return this;
	};

	/**
  * Return all the slides that are before the active one
  * @return 	{Array} 	The array of slides that are before the active one
  */


	SSlideshowComponent.prototype.getBeforeActiveSlides = function getBeforeActiveSlides() {
		var activeIdx = this.props.slide;
		var newArray = this._slides.slice(0);
		newArray.splice(activeIdx, 1000);
		return newArray;
	};

	/**
  * Return all the slides that are before the active one
  * @return 	{Array} 	The array of slides that are before the active one
  */


	SSlideshowComponent.prototype.getAfterActiveSlides = function getAfterActiveSlides() {
		var activeIdx = this.props.slide;
		var newArray = this._slides.slice(0);
		newArray.splice(0, activeIdx + 1);
		return newArray;
	};

	/**
  * Return the index of the active slide
  * @return 	{Integer}	The active slide index
  */


	SSlideshowComponent.prototype.getActiveSlideIndex = function getActiveSlideIndex() {
		return this.props.slide;
	};

	/**
  * Return the active slide element
  * @return 	{HTMLElement} 	The active slide
  */


	SSlideshowComponent.prototype.getActiveSlide = function getActiveSlide() {
		return this._activeSlide;
	};

	/**
  * Return the first slide element
  * @return 	{HTMLElement} 	The first slide
  */


	SSlideshowComponent.prototype.getFirstSlide = function getFirstSlide() {
		return this._slides[0];
	};

	/**
  * Return the last slide element
  * @return 	{HTMLElement} 	The last slide
  */


	SSlideshowComponent.prototype.getLastSlide = function getLastSlide() {
		return this._slides[this._slides.length - 1];
	};

	/**
  * Return the next slide index
  * @return 	{Integer} 	The next slide index
  */


	SSlideshowComponent.prototype.getNextSlideIndex = function getNextSlideIndex() {
		var activeSlideIndex = this.props.slide;
		if (activeSlideIndex + 1 < this._slides.length) {
			return activeSlideIndex + 1;
		} else {
			return 0;
		}
	};

	/**
 * Return the previous slide element
 * @return 	{HTMLElement} 	The previous slide
 */


	SSlideshowComponent.prototype.getNextSlide = function getNextSlide() {
		return this._slides[this.getNextSlideIndex()];
	};

	/**
  * Return the previous slide index
  * @return 	{Integer} 	The previous slide index
  */


	SSlideshowComponent.prototype.getPreviousSlideIndex = function getPreviousSlideIndex() {
		var activeSlideIndex = this.props.slide;
		if (activeSlideIndex > 0) {
			return activeSlideIndex - 1;
		} else {
			return this._slides.length - 1;
		}
	};

	/**
 * Return the previous slide element
 * @return 	{HTMLElement} 	The previous slide
 */


	SSlideshowComponent.prototype.getPreviousSlide = function getPreviousSlide() {
		return this._slides[this.getPreviousSlideIndex()];
	};

	/**
  * Return if the slideshow is played or not
  * @return 	{Boolean} 	The played status
  */


	SSlideshowComponent.prototype.isPlay = function isPlay() {
		return this.props.playback === 'play';
	};

	/**
  * Return if the slideshow is paused or not
  * @return 	{Boolean} 	The paused status
  */


	SSlideshowComponent.prototype.isPause = function isPause() {
		return this.props.playback === 'pause';
	};

	/**
  * isStop
  * Return if the slideshow is stoped or not
  * @return 	{Boolean} 	The stoped status
  */


	SSlideshowComponent.prototype.isStop = function isStop() {
		return !this.props.playback || this.props.playback === 'stop';
	};

	/**
  * Return if the slideshow loop status is true
  * @return 	{Boolean} 	The loop status
  */


	SSlideshowComponent.prototype.isLoop = function isLoop() {
		return this.props.loop;
	};

	/**
  * Return if the first slide is active
  * @return 	{Boolean} 	true if the first slide is active
  */


	SSlideshowComponent.prototype.isFirst = function isFirst() {
		return this._slides[0].hasAttribute('active');
	};

	/**
  * Return if the first slide is active
  * @return 	{Boolean} 	true if the first slide is active
  */


	SSlideshowComponent.prototype.isLast = function isLast() {
		return this._slides[this.slides.length - 1].hasAttribute('active');
	};

	/**
     * Go find into dom every elements needed for the slideshow
     * @return 	{void}
  */


	SSlideshowComponent.prototype._updateReferences = function _updateReferences() {
		// grab the next and previous element
		this._refs.next = this.querySelector(this._componentNameDash + '-next, [' + this._componentNameDash + '-next]');
		this._refs.previous = this.querySelector(this._componentNameDash + '-previous, [' + this._componentNameDash + '-previous]');
		// grab the total and current token handler
		this._refs.total = this.querySelectorAll(this._componentNameDash + '-total, [' + this._componentNameDash + '-total]');
		this._refs.current = this.querySelectorAll(this._componentNameDash + '-current, [' + this._componentNameDash + '-current]');
		// grab all the goto elements
		this._refs.goTos = this.querySelectorAll(this._componentNameDash + '-goto, [' + this._componentNameDash + '-goto]');
	};

	_createClass(SSlideshowComponent, null, [{
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   */
		get: function get() {
			return {

				/**
     * Set the active class by index
     * @prop
     * @type 		{Integer}
     */
				slide: 0,

				/**
     * Set the direction of the slideshow playback
     * @prop
     * @type 		{String}
     * @values 		forward|backward
     */
				direction: 'forward',

				/**
     * Status of the playback
     * @prop
     * @type 		{String}
     * @values 		stop|pause|play
     */
				playback: 'play',

				/**
     * Set the time to wait between each slides when the
     * @prop
     * slideshow is played
     * @type 	{Number}
     */
				timeout: 1000,

				/**
     * Set the slideshow to pause mode when mouse is hover
     * @prop
     * @type 	{Boolean}
     */
				pauseOnHover: false,

				/**
     * Go to next slide when click on the slideshow
     * @prop
     * @type 	{Boolean}
     */
				nextOnClick: false,

				/**
     * Set if the slideshow is infinite
     * @prop
     * @tyoe 	{Boolean}
     */
				loop: false,

				/**
     * Set if the slideshow start in play mode
     * @prop
     * @type  	{Boolean}
     */
				autoplay: true,

				/**
     * Set if the keyboard navigation is enabled
     * @prop
     * @type 	{Boolean}
     */
				keyboardEnabled: true,

				/**
     * Set if the touch navigation is enabled
     * @prop
     * @type 	{Boolean}
     */
				touchEnabled: true,

				/**
     * Callback when the slideshow is inited
     * @prop
     * @type 	{Function}
     */
				onInit: null,

				/**
     * Callback before the slideshow pass to another slide
     * @prop
     * @type 	{Function}
     */
				beforeChange: null,

				/**
     * Callback when the slider change from a slide to another
     * @prop
     * @type 	{Function}
     */
				onChange: null,

				/**
     * Callback when the slideshow has changed slide
     * @prop
     * @type 	{Function}
     */
				afterChange: null,

				/**
     * Callback when the slideshow pass to the next slide
     * @prop
     * @type 	{Function}
     */
				onNext: null,

				/**
     * Callback when the slideshow pass to the previous slide
     * @prop
     * @type 	{Function}
     */
				onPrevious: null,

				/**
     * Callback when the slideshow pass in pause
     * @prop
     * @type 	{Function}
     */
				onPause: null,

				/**
     * Callback when the slideshow pass in play mode
     * @prop
     * @type 	{Function}
     */
				onPlay: null,

				/**
     * Callback when the slideshow stops
     * @prop
     * @type 	{Function}
     */
				onStop: null,

				/**
     * Callback used to init a new slide
     * @prop
     * @type 	{Function}
     */
				initSlide: null
			};
		}

		/**
   * Physical props
   * @definition 		SWebComponent.physicalProps
   */

	}, {
		key: 'physicalProps',
		get: function get() {
			return ['slide', 'playback', 'direction'];
		}
	}]);

	return SSlideshowComponent;
}(_SWebComponent3.default);

// STemplate integration


exports.default = SSlideshowComponent;
_sTemplateIntegrator2.default.registerComponentIntegration(SSlideshowComponent, function (component) {
	_sTemplateIntegrator2.default.ignore(component, {
		slide: true,
		playback: true,
		direction: true
	});
	component.onNewSlide(function (slide) {
		_sTemplateIntegrator2.default.ignore(slide, {
			active: true,
			previous: true,
			next: true,
			"before-active": true,
			"after-active": true
		});
	});
	if (component._refs.total) {
		_sTemplateIntegrator2.default.ignore(component._refs.total);
	}
	if (component._refs.current) {
		_sTemplateIntegrator2.default.ignore(component._refs.current);
	}
});