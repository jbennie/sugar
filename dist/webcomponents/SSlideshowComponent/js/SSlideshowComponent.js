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
		this._applyStateAttributes();

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
		}
	};

	/**
  * When the element is disabled
  * @return 	{SSlideshowComponent}
  */


	SSlideshowComponent.prototype.disable = function disable() {
		// remove all classes
		this._unapplyStateAttrubutes();
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
  * Remove the attributes from the elements
  */


	SSlideshowComponent.prototype._unapplyStateAttrubutes = function _unapplyStateAttrubutes() {
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
  * Apply the good attributes to the elements
  */


	SSlideshowComponent.prototype._applyStateAttributes = function _applyStateAttributes() {
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
		if (idx === null) {
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
		if (idx === null) {
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
				slide: null,

				/**
     * Set if the slideshow is infinite
     * @prop
     * @tyoe 	{Boolean}
     */
				loop: false,

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
			return ['slide'];
		}
	}]);

	return SSlideshowComponent;
}(_SWebComponent3.default);

// STemplate integration


exports.default = SSlideshowComponent;
_sTemplateIntegrator2.default.registerComponentIntegration(SSlideshowComponent, function (component) {
	_sTemplateIntegrator2.default.ignore(component, {
		slide: true,
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