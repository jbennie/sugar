(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _SSelectComponent = __webpack_require__(1);

	var _SSelectComponent2 = _interopRequireDefault(_SSelectComponent);

	var _SActivateComponent = __webpack_require__(174);

	var _SActivateComponent2 = _interopRequireDefault(_SActivateComponent);

	var _SValidateComponent = __webpack_require__(176);

	var _SValidateComponent2 = _interopRequireDefault(_SValidateComponent);

	var _STrianglifyComponent = __webpack_require__(193);

	var _STrianglifyComponent2 = _interopRequireDefault(_STrianglifyComponent);

	var _SAddthisComponent = __webpack_require__(237);

	var _SAddthisComponent2 = _interopRequireDefault(_SAddthisComponent);

	var _SDrawerComponent = __webpack_require__(239);

	var _SDrawerComponent2 = _interopRequireDefault(_SDrawerComponent);

	var _SRippleComponent = __webpack_require__(244);

	var _SRippleComponent2 = _interopRequireDefault(_SRippleComponent);

	var _querySelectorLive = __webpack_require__(11);

	var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

	var _sSettings = __webpack_require__(166);

	var _sSettings2 = _interopRequireDefault(_sSettings);

	var _domReady = __webpack_require__(135);

	var _domReady2 = _interopRequireDefault(_domReady);

	var _SColor = __webpack_require__(252);

	var _SColor2 = _interopRequireDefault(_SColor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(253);
	__webpack_require__(254);

	(0, _domReady2.default)().then(function () {

		// s-activate
		(0, _querySelectorLive2.default)('[s-toggle]').once().subscribe(function (elm) {
			new _SActivateComponent2.default(elm, {
				toggle: true,
				history: false
			}, 'sToggle');
		});

		// s-drawer
		(0, _querySelectorLive2.default)('[s-drawer]').once().subscribe(function (elm) {
			new _SDrawerComponent2.default(elm);
		});

		// s-addthis
		(0, _querySelectorLive2.default)('[s-addthis]').once().subscribe(function (elm) {
			new _SAddthisComponent2.default(elm);
		});

		// s-select
		(0, _querySelectorLive2.default)('[s-select]').once().subscribe(function (elm) {
			new _SSelectComponent2.default(elm);
		});

		// s-ripple
		// __querySelectorLive('.topbar__links .nav__item').once().mouseover().subscribe((elm) => {
		// 	new SRippleComponent(elm, {
		// 		contains : false,
		// 		centered : true
		// 	});
		// });
		new _SRippleComponent2.default(document.querySelector('[s-drawer-content]'), {
			contains: false
		});
		// __querySelectorLive('[s-ripple],.btn').once().mouseover().subscribe((elm) => {
		// 	new SRippleComponent(elm);
		// });

		// s-trianglify
		(0, _querySelectorLive2.default)('[s-drawer-content] h2,.btn').once().subscribe(function (elm) {
			elm.style.position = 'relative';
			var trianglify = document.createElement('div');
			trianglify.setAttribute('s-trianglify', true);
			elm.appendChild(trianglify);
		});
		(0, _querySelectorLive2.default)('[s-trianglify]').once().subscribe(function (elm) {
			new _STrianglifyComponent2.default(elm, {
				cellSize: 200,
				xColors: ['#000', '#fff'],
				yColors: ['#000', '#fff']
			});
		});
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SSelectComponent = __webpack_require__(2);

	var _SSelectComponent2 = _interopRequireDefault(_SSelectComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SSelectComponent2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SComponent2 = __webpack_require__(3);

	var _SComponent3 = _interopRequireDefault(_SComponent2);

	var _next = __webpack_require__(167);

	var _next2 = _interopRequireDefault(_next);

	var _previous = __webpack_require__(168);

	var _previous2 = _interopRequireDefault(_previous);

	var _offset = __webpack_require__(169);

	var _offset2 = _interopRequireDefault(_offset);

	var _scrollTop = __webpack_require__(171);

	var _scrollTop2 = _interopRequireDefault(_scrollTop);

	var _uniqid = __webpack_require__(8);

	var _uniqid2 = _interopRequireDefault(_uniqid);

	var _insertAfter = __webpack_require__(172);

	var _insertAfter2 = _interopRequireDefault(_insertAfter);

	var _SEvent = __webpack_require__(138);

	var _SEvent2 = _interopRequireDefault(_SEvent);

	var _mutationObservable = __webpack_require__(117);

	var _mutationObservable2 = _interopRequireDefault(_mutationObservable);

	var _STemplate = __webpack_require__(161);

	var _STemplate2 = _interopRequireDefault(_STemplate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Sugar-activate.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               #
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               #
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author   Olivier Bossel <olivier.bossel@gmail.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @created  20.01.16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @updated  20.01.16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version  1.0.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	__webpack_require__(173);

	// Select

	var SSelectComponent = function (_SComponent) {
		_inherits(SSelectComponent, _SComponent);

		/**
	  * Setup
	  */
		SSelectComponent.setup = function setup(type, settings) {
			_SComponent3.default.setup('sSelect', type, settings);
		};

		/**
	  * Constructor
	  */


		function SSelectComponent(elm) {
			var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			_classCallCheck(this, SSelectComponent);

			return _possibleConstructorReturn(this, _SComponent.call(this, 'sSelect', elm, {
				onOpen: null,
				onClose: null,
				search: true,
				searchPlaceholder: 'Search...',
				internalSearch: true,
				minCharactersForSearch: 3,
				screenMargin: 50
			}, settings));
		}

		/**
	  * Init the component
	  */


		SSelectComponent.prototype._init = function _init() {
			var _this3 = this;

			// init component
			_SComponent.prototype._init.call(this);

			// utils variables
			this._openOnFocus = false;
			this._currentActiveOption = null; // save the current keyboard selected item

			// generate a custom id
			this.id = (0, _uniqid2.default)();

			// build html structure
			this._buildHTML();

			// display or not the search
			if (!this.settings.search) {
				this.search_container.style.position = 'absolute';
				this.search_container.style.left = '-120vw';
			}

			// make sure when we click that we focus on the search field
			this.container.addEventListener('click', function (e) {
				if (_this3.settings.search) {
					_this3.search_field.focus();
				}
			});

			// prevent default behavior on click in options container
			this.options_container.addEventListener('click', function (e) {
				e.preventDefault();
			});

			// open on click
			this.container.addEventListener('click', function (e) {
				// do not open when the click is on an option
				if (_this3.hasComponentClass(e.target, 'option')) return;
				// open
				if (!_this3.isOpened()) {
					_this3.open();
				}
			});

			// prevent scroll into the options
			this.options_container.addEventListener('mousewheel', function (ev) {
				var _this = ev.currentTarget;
				var scrollTop = _this.scrollTop;
				var scrollHeight = _this.scrollHeight;
				var height = _this.offsetHeight;
				var delta = ev.wheelDelta;
				if (ev.type == 'DOMMouseScroll') {
					delta = ev.originalEvent.details * -40;
				}
				var up = delta > 0;
				var prevent = function prevent() {
					ev.stopPropagation();
					ev.preventDefault();
					ev.returnValue = false;
					return false;
				};
				if (!up && -delta > scrollHeight - height - scrollTop) {
					// Scrolling down, but this will take us past the bottom.
					_this.scrollTop = scrollHeight;
					prevent();
				} else if (up && delta > scrollTop) {
					// Scrolling up, but this will take us past the top.
					_this.scrollTop = 0;
					prevent();
				}
			});

			// manage the keyup event
			var _onKeyUpFn = function _onKeyUpFn(e) {
				_this3._onKeyUp(e);
			};
			var _onKeyDownFn = function _onKeyDownFn(e) {
				_this3._onKeyDown(e);
			};
			var _onScrollResizeFn = function _onScrollResizeFn(e) {
				_this3._onScrollResize(e);
			};
			var _onDocumentClick = function _onDocumentClick(e) {
				_this3._onDocumentClick(e);
			};
			this.elm.addEventListener('open', function (e) {
				document.addEventListener('keyup', _onKeyUpFn);
				document.addEventListener('keydown', _onKeyDownFn);
				document.addEventListener('click', _onDocumentClick);
				window.addEventListener('scroll', _onScrollResizeFn);
				window.addEventListener('resize', _onScrollResizeFn);
			});
			this.elm.addEventListener('close', function (e) {
				document.removeEventListener('keyup', _onKeyUpFn);
				document.removeEventListener('keydown', _onKeyDownFn);
				document.removeEventListener('click', _onDocumentClick);
				window.removeEventListener('scroll', _onScrollResizeFn);
				window.removeEventListener('resize', _onScrollResizeFn);
			});

			// listen for change on base select
			// to set the selected items
			this.elm.addEventListener('change', function (e) {
				_this3._setSelected();
			});

			// listen for focus in search field to activate the field
			this.search_field.addEventListener('focus', function (e) {
				_this3._openOnFocus = true;
				_this3.open();
				setTimeout(function () {
					_this3._openOnFocus = false;
				}, 200);
			});

			// listen for keyup on search field
			var internalSearch = this.settings.internalSearch;
			var search = this.settings.search;
			var searchFieldFn = function searchFieldFn(e) {
				// trigger custom event
				var event = new _SEvent2.default('search');
				_this3.elm.dispatchEvent(event);
				// on search callback
				var onSearch = _this3.settings.onSearch;
				if (onSearch) onSearch(e.target.value);
				// check if internal search
				_this3._search();
			};
			if (internalSearch && search) {
				this.search_field.addEventListener('keyup', searchFieldFn);
				this.search_field.addEventListener('search', searchFieldFn);
			}

			// observe all changes into the select
			// to refresh our custom one
			this._refreshObserver = (0, _mutationObservable2.default)(this.elm, {
				childList: true,
				attributes: true,
				characterData: true,
				subtree: true
			}).groupByTimeout().subscribe(function (mutation) {
				_this3.refresh();
			});

			// first refresh
			this.refresh();
		};

		/**
	  * Destroy
	  */


		SSelectComponent.prototype.destroy = function destroy() {
			if (this._refreshObserver) {
				this._refreshObserver.unsubscribe();
			}
			_SComponent.prototype.destroy.call(this);
		};

		/**
	  * disable
	  * When the component is disabled
	  */


		SSelectComponent.prototype.disable = function disable() {
			// disable in parent class
			_SComponent.prototype.disable.call(this);
			// show the select
			this._showRealSelect();
			// remove the container
			if (this.container.parentNode) {
				this.container.parentNode.removeChild(this.container);
			}
		};

		/**
	  * enable
	  * When the component is enabled
	  */


		SSelectComponent.prototype.enable = function enable() {
			// enable in parent class
			_SComponent.prototype.enable.call(this);
			// hide the select
			this._hideRealSelect();
			// append the element right after the real select
			(0, _insertAfter2.default)(this.container, this.elm);
		};

		/**
	  * onRemoved
	  */


		SSelectComponent.prototype._onRemoved = function _onRemoved() {
			// remove the container from the dom
			if (this.container.parentNode) {
				this.container.parentNode.removeChild(this.container);
			}
			// parent method
			_SComponent.prototype._onRemoved.call(this);
		};

		/**
	  * onAdded
	  */


		SSelectComponent.prototype._onAdded = function _onAdded() {
			// parent method
			_SComponent.prototype._onAdded.call(this);

			// append the element right after the real select
			(0, _insertAfter2.default)(this.container, this.elm);
		};

		/**
	  * Search
	  */


		SSelectComponent.prototype._search = function _search() {
			var _this4 = this;

			// loop on each options
			[].forEach.call(this.options_container.querySelectorAll(this.componentSelector('option')), function (option) {
				// check if is a value in the search field
				if (_this4.search_field.value && _this4.search_field.value.length >= _this4.settings.minCharactersForSearch) {
					// check if we find the text in the option
					var regexp = new RegExp("(" + _this4.search_field.value + ")(?!([^<]+)?>)", 'gi');
					// search the tokens in html
					var replace = option._s_innerHTML.replace(regexp, '<span class="' + _this4.componentClassName('search-result') + '">$1</span>');
					if (option._s_innerHTML.match(regexp)) {
						option.innerHTML = replace;
					} else {
						// reset the activate item if need to be hided
						if (option == _this4._currentActiveOption) {
							_this4._currentActiveOption = null;
						}
						_this4.addComponentClass(option, 'option', null, 'hidden');
					}
				} else {
					option.innerHTML = option._s_innerHTML;
					_this4.removeComponentClass(option, 'option', null, 'hidden');
				}
			});

			// set position
			this._setPosition();
		};

		/**
	  * On scroll or resize
	  */


		SSelectComponent.prototype._onScrollResize = function _onScrollResize(e) {
			this._setPosition();
		};

		/**
	  * When the user click outside of the select
	  */


		SSelectComponent.prototype._onDocumentClick = function _onDocumentClick(e) {
			if (!this.container.contains(e.target)) {
				this.close();
			}
		};

		SSelectComponent.prototype._onKeyUp = function _onKeyUp(e) {
			if ((e.keyCode == 9 // tab
			|| e.keyCode == 27 // escape
			) && this.isOpened()) {
				if (!this._openOnFocus) {
					this.close();
				}
			}
		};

		/**
	  * On key down
	  */


		SSelectComponent.prototype._onKeyDown = function _onKeyDown(e) {
			switch (e.keyCode) {
				case 40:
					// down
					this._activateNext();
					e.preventDefault();
					break;
				case 38:
					// up
					this._activatePrevious();
					e.preventDefault();
					break;
				case 13:
					// enter
					this._selectActivated();
					e.preventDefault();
					break;
				case 8:
					// backspace
					if (this.search_field.focus && this.search_field.value == '') {
						// remove the last item
						this.removeLast();
					}
					break;
			}
		};

		/**
	  * Select next with keyboard
	  */


		SSelectComponent.prototype._activateNext = function _activateNext() {
			// remove active class if exist
			if (this._currentActiveOption) {
				this.removeComponentClass(this._currentActiveOption, 'option', null, 'active');
				this._currentActiveOption.classList.remove('active');
			}
			// check if already an item is selected
			if (!this._currentActiveOption) {
				this._currentActiveOption = this.options_container.querySelector(this.componentSelector('option') + ':not(' + this.componentSelector('option', 'disabled') + '):not(' + this.componentSelector('option', 'hidden') + '):first-child');
			} else {
				// try to get the next sibling
				this._currentActiveOption = (0, _next2.default)(this._currentActiveOption, this.componentSelector('option') + ':not(' + this.componentSelector('option', 'disabled') + '):not(' + this.componentSelector('option', 'hidden') + ')');
			}
			// activate the element
			if (this._currentActiveOption) {
				this.addComponentClass(this._currentActiveOption, 'option', null, 'active');
				this._currentActiveOption.classList.add('active');
			}
		};

		/**
	  * Select previous with keyboard
	  */


		SSelectComponent.prototype._activatePrevious = function _activatePrevious() {
			// remove active class if exist
			if (this._currentActiveOption) {
				this.removeComponentClass(this._currentActiveOption, 'option', null, 'active');
				this._currentActiveOption.classList.remove('active');
			}
			// check if already an item is selected
			if (!this._currentActiveOption) {
				this._currentActiveOption = this.options_container.querySelector(this.componentSelector('option') + ':not(' + this.componentSelector('option', 'disabled') + '):not(' + this.componentSelector('option', 'hidden') + '):last-child');
			} else {
				// try to get the next sibling
				this._currentActiveOption = (0, _previous2.default)(this._currentActiveOption, this.componentSelector('option') + ':not(' + this.componentSelector('option', 'disabled') + '):not(' + this.componentSelector('option', 'hidden') + ')');
			}
			// activate the element
			if (this._currentActiveOption) {
				this.addComponentClass(this._currentActiveOption, 'option', null, 'active');
				this._currentActiveOption.classList.add('active');
			}
		};

		/**
	  * Select activated item
	  */


		SSelectComponent.prototype._selectActivated = function _selectActivated() {
			// check if an activated element exist
			if (this._currentActiveOption) {
				this.select(this._currentActiveOption._s_select_source_option);
			}
		};

		/**
	  * Create html structure
	  */


		SSelectComponent.prototype._buildHTML = function _buildHTML() {

			var container = document.createElement('div');
			container.setAttribute('class', this.elm.getAttribute('class'));
			this.addComponentClass(container);

			// multiple class
			if (this.elm.getAttribute('multiple') != null) {
				this.addComponentClass(container, null, 'multiple');
			}

			var selection_container = document.createElement('div');
			this.addComponentClass(selection_container, 'selection-container');

			var selection_aligner = document.createElement('div');
			this.addComponentClass(selection_aligner, 'selection-aligner');

			var dropdown = document.createElement('div');
			this.addComponentClass(dropdown, 'dropdown');
			dropdown.style.fontSize = '1rem';

			// search
			var search_container = document.createElement('div');
			this.addComponentClass(search_container, 'search-container');

			// search field
			var search_field = document.createElement('input');
			search_field.setAttribute('type', 'search');
			if (search_field.type != 'search') {
				search_field.type = 'text';
			}
			search_field.setAttribute('placeholder', this.settings.searchPlaceholder);
			this.addComponentClass(search_field, 'search-field');

			// options
			var options_container = document.createElement('div');
			this.addComponentClass(options_container, 'options');

			// append to document
			search_container.appendChild(search_field);

			dropdown.appendChild(search_container);
			dropdown.appendChild(options_container);

			// container.appendChild(open_checkbox);
			container.appendChild(selection_container);
			container.appendChild(dropdown);

			// hide the real select
			this._hideRealSelect();

			// save into object
			this.container = container;
			this.dropdown = dropdown;
			this.search_container = search_container;
			this.selection_container = selection_container;
			this.search_field = search_field;
			this.options_container = options_container;
		};

		/**
	  * Hide the select
	  */


		SSelectComponent.prototype._hideRealSelect = function _hideRealSelect() {
			this.elm.style.position = 'absolute';
			this.elm.style.left = '-120vw';
			this.elm.style.opacity = 0;
			this.elm.tabIndex = -1;
		};

		/**
	  * Show the select
	  */


		SSelectComponent.prototype._showRealSelect = function _showRealSelect() {
			this.elm.style.position = null;
			this.elm.style.left = null;
			this.elm.style.opacity = 1;
			this.elm.tabIndex = null;
		};

		/**
	  * Handle click on option
	  */


		SSelectComponent.prototype._handleOptionClick = function _handleOptionClick(_s_option, e) {

			// check if is a multiple
			if (!this.isMultiple()) {
				// select the element in the source select
				_s_option._s_select_source_option.selected = true;
				// close
				this.close();
			} else {

				_s_option._s_select_source_option.selected = !_s_option._s_select_source_option.selected;

				// // check if the alt key is pressed
				// if (e.metaKey) {
				// 	// toggle selection
				// 	_s_option._s_select_source_option.selected = ! _s_option._s_select_source_option.selected;
				// } else if (e.shiftKey) {
				// 	// get the index of the last selected option
				// 	if (this.elm.options.selectedIndex) {
				// 		// find the current option position
				// 		let current_option_idx = 0,
				// 			found = false;
				// 		[].forEach.call(this.elm.options, (opt) => {
				// 			if ( ! found && opt != _s_option._s_select_source_option) {
				// 				current_option_idx++;
				// 			} else {
				// 				found = true;
				// 			}
				// 		});

				// 		// select all the options inbetween
				// 		let first = this.elm.options.selectedIndex;
				// 		let last = current_option_idx;
				// 		if (first > last) {
				// 			let _last = last;
				// 			last = first;
				// 			first = _last;
				// 		}
				// 		for (let i = first; i <= last; i++) {
				// 			if ( ! this.elm.options[i].disabled) {
				// 				this.elm.options[i].selected = true;
				// 			}
				// 		}
				// 	} else {
				// 		// telection
				// 		_s_option._s_select_source_option.selected = ! _s_option._s_select_source_option.selected;
				// 	}
				// } else {
				// 	// unactive all the options
				// 	[].forEach.call(this.elm.options, (opt) => {
				// 		opt.selected = false;
				// 	});
				// 	// activate the item
				// 	_s_option._s_select_source_option.selected = true;
				// }
			}

			// trigger change event
			var event = new _SEvent2.default('change');
			this.elm.dispatchEvent(event);
		};

		/**
	  * Set selected elements
	  */


		SSelectComponent.prototype._setSelected = function _setSelected() {
			var _this5 = this;

			// loop on selected option to activate them
			var areSomeSelectedItems = false;
			[].forEach.call(this.elm.options, function (option) {
				// apply the active class
				if (option._s_select_option) {
					if (option.selected) {
						if (option.innerHTML != '') {
							areSomeSelectedItems = true;
						}
						_this5.addComponentClass(option, 'option', null, 'selected');
					} else {
						_this5.removeComponentClass(option, 'option', null, 'selected');
					}
				}
			});
			// set the selection
			this.selection_container.innerHTML = '';
			if (this.isMultiple()) {
				// loop on each selected items
				[].forEach.call(this.elm.options, function (option) {
					if (option.selected) {
						// get the content
						var content = option.innerHTML;
						// create the tag
						var tag = document.createElement('div');
						_this5.addComponentClass(tag, 'selection-tag');
						tag.innerHTML = content;
						var close = document.createElement('span');
						_this5.addComponentClass(close, 'selection-tag-close');
						close.addEventListener('click', function (e) {
							option.selected = false;
							// trigger change event
							var event = new _SEvent2.default('change');
							_this5.elm.dispatchEvent(event);
						});
						tag.addEventListener('dblclick', function (e) {
							option.selected = false;
							// trigger change event
							var event = new _SEvent2.default('change');
							_this5.elm.dispatchEvent(event);
						});
						tag.appendChild(close);
						_this5.selection_container.appendChild(tag);
					}
				});
			} else {
				// get the selected one
				var selected_idx = this.elm.options.selectedIndex;
				if (selected_idx != -1) {
					// set the selected
					var selection = document.createElement('div');
					this.addComponentClass(selection, 'selection');
					selection.innerHTML = this.elm.options[selected_idx].innerHTML;
					this.selection_container.appendChild(selection);
				}
			}

			if (!areSomeSelectedItems) {
				var placeholder = this.elm.getAttribute('placeholder');
				if (placeholder) {
					var _selection = document.createElement('div');
					this.addComponentClass(_selection, 'selection');
					_selection.classList.add('input--placeholder');
					_selection.innerHTML = placeholder;
					this.addComponentClass(this.container, null, 'placeholder');
					this.selection_container.appendChild(_selection);
				}
			} else {
				this.removeComponentClass(this.container, null, 'placeholder');
			}
		};

		/**
	  * Set position
	  */


		SSelectComponent.prototype._setPosition = function _setPosition() {
			// get the position of the container
			var dropdownOffset = (0, _offset2.default)(this.dropdown);
			var dropdownTop = dropdownOffset.top - (0, _scrollTop2.default)();
			var containerTop = (0, _offset2.default)(this.container).top - (0, _scrollTop2.default)();
			var dropdownFullHeight = this.options_container.scrollHeight + this.search_container.offsetHeight;
			var optionsFullHeight = this.options_container.scrollHeight;
			var optionsHeight = this.options_container.offsetHeight;
			var screenMargin = this.settings.screenMargin;
			var optionsMinHeight = parseInt(window.getComputedStyle(this.options_container).getPropertyValue('min-height'));

			// check if the min-height has been reached
			if (containerTop + this.container.offsetHeight + this.search_container.offsetHeight + optionsMinHeight + screenMargin > window.innerHeight) {
				// if (optionsHeight < optionsFullHeight && optionsHeight <= optionsMinHeight ) {
				this.addComponentClass(this.container, null, 'dropup');
				// console.log(top + h, window.innerHeight);
				if (containerTop - dropdownFullHeight - screenMargin < 0) {
					this.options_container.style.height = window.innerHeight - (window.innerHeight - containerTop) - this.search_container.offsetHeight - screenMargin + 'px';
				} else {
					this.options_container.style.height = 'auto';
				}
			} else {
				this.removeComponentClass(this.container, null, 'dropup');
				// console.log(top + h, window.innerHeight);
				if (dropdownTop + dropdownFullHeight + screenMargin > window.innerHeight) {
					this.options_container.style.height = window.innerHeight - dropdownTop - this.search_container.offsetHeight - screenMargin + 'px';
				} else {
					this.options_container.style.height = 'auto';
				}
			}
		};

		/**
	  * Handle optgroup
	  */


		SSelectComponent.prototype._handleOptgroup = function _handleOptgroup(_optgroup) {
			// create the choice
			var option = document.createElement('div');
			this.addComponentClass(option, 'optgroup');

			// get the content
			var content = _optgroup.getAttribute('label');

			// get the content
			var source = _optgroup.getAttribute(this.componentNameDash + '-option-source');
			if (source) {
				// try to get into document
				source = document.querySelector(source);
				if (source) {
					option.appendChild(source);
					this.addComponentClass(option, 'optgroup', 'custom');
				} else {
					option.innerHTML = content;
				}
			} else {
				option.innerHTML = content;
			}

			// append new choice
			this.options_container.appendChild(option);
		};

		/**
	  * Handle option
	  */


		SSelectComponent.prototype._handleOption = function _handleOption(_option) {
			var _this6 = this;

			var in_optgroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


			// check if is an optiongroup
			if (_option.nodeName.toLowerCase() == 'optgroup') {
				this._handleOptgroup(_option);
				[].forEach.call(_option.querySelectorAll(':scope > option'), function (option) {
					_this6._handleOption(option, true);
				});
				return;
			}

			// create the choice
			var option = document.createElement('div');
			this.addComponentClass(option, 'option');

			// check if in optgroup
			if (in_optgroup) {
				this.addComponentClass(option, 'option', 'in-optgroup');
			}

			// check if disabled
			if (_option.disabled) {
				this.addComponentClass(option, 'option', null, 'disabled');
			}

			// save the option reference into html element
			// to be able to activate it in the base select
			option._s_select_source_option = _option;

			// save the s_option into the base option
			// to be able to activate the s_option later
			_option._s_select_option = option;

			// get the content
			var content = _option.innerHTML;

			// get the content
			var source = _option.getAttribute(this.componentNameDash + '-option-source');
			if (source) {
				// try to get into document
				source = document.querySelector(source);
				if (source) {
					option.appendChild(source);
					this.addComponentClass(option, 'option', 'custom');
				} else {
					option.innerHTML = content;
				}
			} else {
				if (!content) return;
				option.innerHTML = content;
			}

			// save the html to restore later on search
			option._s_innerHTML = option.innerHTML;

			// add a click event on the option
			option.addEventListener('click', function (e) {
				_this6._handleOptionClick(e.currentTarget, e);
			});

			// add the listener for the hover
			option.addEventListener('mouseover', function (e) {
				_this6._currentActiveOption = option;
			});

			// append new choice
			this.options_container.appendChild(option);
		};

		/**
	  * Refresh
	  */


		SSelectComponent.prototype.refresh = function refresh() {
			var _this7 = this;

			// empty the options
			var options_parent = this.options_container.parentNode;
			options_parent.removeChild(this.options_container);
			this.options_container.innerHTML = '';

			// create the options tree
			[].forEach.call(this.elm.querySelectorAll(':scope > option, :scope > optgroup'), function (elm) {
				// handle option
				_this7._handleOption(elm);
			}, this.elm);

			// set selected the first time
			this._setSelected();

			// append again in dom the options
			options_parent.appendChild(this.options_container);

			// set position
			if (this.isOpened()) {
				this._setPosition();
			}
		};

		/**
	  * Select an option in source select
	  */


		SSelectComponent.prototype.select = function select(option) {
			// check if we have the s-select option targer
			if (option._s_select_option) {
				this._handleOptionClick(option._s_select_option);
			} else if (option._s_select_source_option) {
				this._handleOptionClick(option);
			}
		};

		/**
	  * Remove last
	  */


		SSelectComponent.prototype.removeLast = function removeLast() {
			var last = null;
			[].forEach.call(this.elm.options, function (option) {
				if (option.selected) {
					last = option;
				}
			});
			// unselect the last
			if (last) {
				last.selected = false;
				// trigger change event
				var event = new _SEvent2.default('change');
				this.elm.dispatchEvent(event);
			}
		};

		/**
	  * Add event listener
	  */


		SSelectComponent.prototype.addEventListener = function addEventListener(event, callback, capture) {
			this.elm.addEventListener(event, callback, capture);
		};

		/**
	  * Remove event listener
	  */


		SSelectComponent.prototype.removeEventListener = function removeEventListener(event, callback, capture) {
			this.elm.removeEventListener(event, callback, capture);
		};

		/**
	  * Is multiple
	  */


		SSelectComponent.prototype.isMultiple = function isMultiple() {
			return this.elm.hasAttribute('multiple');
		};

		/**
	  * Is opened
	  */


		SSelectComponent.prototype.isOpened = function isOpened() {
			return this.hasComponentClass(this.container, null, null, 'opened');
		};

		/**
	  * Close
	  */


		SSelectComponent.prototype.close = function close() {
			var _this8 = this;

			this.removeComponentClass(this.container, null, null, 'opened');

			// unactivate the option if one exist
			if (this._currentActiveOption) {
				this.removeComponentClass(this._currentActiveOption, 'option', null, 'active');
			}
			// remove the dropup class
			this._clearDropupTimeout = setTimeout(function () {
				_this8.removeComponentClass(_this8.container, null, 'dropup');
			}, 500);
			// dispatch close event
			var event = new _SEvent2.default('close');
			this.elm.dispatchEvent(event);
			// handle onClose callback
			var onClose = this.settings.onClose;
			if (onClose) {
				onClose();
			}
		};

		/**
	  * Close
	  */


		SSelectComponent.prototype.open = function open() {
			this.addComponentClass(this.container, null, null, 'opened');
			// set position
			clearTimeout(this._clearDropupTimeout);
			this._setPosition();
			// dispatch open event
			var event = new _SEvent2.default('open');
			this.elm.dispatchEvent(event);
			// manage onOpen callback
			var onOpen = this.settings.onOpen;
			if (onOpen) {
				onOpen();
			}
		};

		return SSelectComponent;
	}(_SComponent3.default);

	// STemplate integration


	_STemplate2.default.registerComponentIntegration('SSelectComponent', function (component) {
		_STemplate2.default.keepAttribute(component.elm, 'style').exclude(component.container);
	});

	// expose in window.sugar
	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.SSelectComponent = SSelectComponent;

	// export modules
	exports.default = SSelectComponent;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _uncamelize = __webpack_require__(4);

	var _uncamelize2 = _interopRequireDefault(_uncamelize);

	var _camelize = __webpack_require__(5);

	var _camelize2 = _interopRequireDefault(_camelize);

	var _upperFirst = __webpack_require__(6);

	var _upperFirst2 = _interopRequireDefault(_upperFirst);

	var _lowerFirst = __webpack_require__(7);

	var _lowerFirst2 = _interopRequireDefault(_lowerFirst);

	var _uniqid = __webpack_require__(8);

	var _uniqid2 = _interopRequireDefault(_uniqid);

	var _autoCast = __webpack_require__(9);

	var _autoCast2 = _interopRequireDefault(_autoCast);

	var _SElement2 = __webpack_require__(10);

	var _SElement3 = _interopRequireDefault(_SElement2);

	var _querySelectorLive = __webpack_require__(11);

	var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

	var _constructorName = __webpack_require__(159);

	var _constructorName2 = _interopRequireDefault(_constructorName);

	var _sSettings = __webpack_require__(166);

	var _sSettings2 = _interopRequireDefault(_sSettings);

	var _sElementsManager = __webpack_require__(155);

	var _sElementsManager2 = _interopRequireDefault(_sElementsManager);

	var _STemplate = __webpack_require__(161);

	var _STemplate2 = _interopRequireDefault(_STemplate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	// store the settings for the different
	// components types
	var _sugarTypesSettings = {};

	/**
	 * @class 		SComponent 		{SElement}
	 * This class allows to wrap an HTMLElement with a lot of useful features like:
	 * - Settings management through API and element attributes
	 * - Keep in sync element attributes with this.attr property
	 * - Complete and powerfull lifecycle management
	 *  	- When the component is added : `_onAdded`
	 *  	- The component is bein inited : `_init`
	 *  	- The component is bein enabled : `enable`
	 *  	- Life of your component...
	 *  	- The component is destroyed : `destroy`
	 *  		- Either by calling manually the `destroy` method...
	 *  		- ...or when the component is not in the dom anymore since the settings.autoDestroyTimeout
	 *  	- The component is bein disabled : `disable`
	 *  - Watch some component property through a simple `watch` method
	 *  - Watch any settings update through the simple `watchSettings` method
	 *  - And more...
	 *
	 * @example 	js
	 * // create a new component
	 * class myComponent extends SComponent {
	 * 		constructor(elm, settings = {}, name = 'myComponent') {
	 * 			super(name, elm, {
	 * 				myCoolSettings : true
	 * 			}, settings)
	 * 		}
	 * 		_init() {
	 * 			super._init();
	 * 			// do something when my component is inited
	 * 		}
	 * 		_onAdded() {
	 * 			super._onAdded();
	 * 			// do something when my component is added to the dom
	 * 		}
	 * 		enable() {
	 * 			// do something when my component is enabled
	 * 			super.enable();
	 * 		}
	 * 		disable() {
	 * 			// do something when my component is disabled
	 * 			super.disable();
	 * 		}
	 * 		destroy() {
	 * 			// handle the destroy routine of my component
	 * 			super.destroy();
	 * 		}
	 * 		// my component methods here...
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */

	var SComponent = function (_SElement) {
		_inherits(SComponent, _SElement);

		// _settings2AttributesBindings = {};

		/**
	  * @constructor
	  * @param 		{String} 		name 					The component name in camelcase
	  * @param 		{HTMLElement} 	elm 					The HTMLElement handled by this component
	  * @param 		{Object} 		[default_settings={}]	The default settings of the component
	  * @param 		{Object} 		[settings={}] 			The settings passed to the component
	  */


		/**
	  * Track if the component was enabled before remove from the dom
	  * @type 	{Boolean}
	  */


		/**
	  * Track if the component is already inited or not
	  * @type 	{Boolean}
	  */


		/**
	  * Store the auto destroy timeout
	  * @type 	{Number}
	  */


		/**
	  * Store the name of the component in camelcase format
	  * @type 	{String}
	  */


		// static setup(name, type, settings) {
		// 	if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
		// 	_sugarTypesSettings[name][type] = settings;
		// }

		/**
	  * Store the component settings
	  * @type 		{Object}
	  */
		function SComponent(name, elm) {
			var default_settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			var settings = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

			_classCallCheck(this, SComponent);

			// check arguments
			if (!elm.nodeName) {
				console.error('Passed "elm" argument', elm);
				throw 'The "elm" argument has to be an HTMLElement but a ' + (typeof elm === 'undefined' ? 'undefined' : _typeof(elm)) + ' has been passed';
			}

			// set on the element that it is now a component
			elm.setAttribute('s-component', true);

			// get the dash name
			var nameDash = (0, _uncamelize2.default)(name, '-');

			// check if the component is inited as a tag
			// or as an attribute
			var asTag = elm.tagName.toLowerCase() === nameDash;

			// process shortcuts attributes
			// before init parent class
			// cause the parent class process
			// the attributes
			var isCurrentComponentSetting = false;
			var attrsToRemove = [];
			[].forEach.call(elm.attributes, function (attr) {
				// check if need to update the settings
				if (attr.name == nameDash) {
					isCurrentComponentSetting = true;
				} else {
					if (isCurrentComponentSetting && attr.name.substr(0, 1) == '-') {
						// remove the attribute and set the new complete one
						attrsToRemove.push(attr.name);
						// set the new attribute
						elm.setAttribute('' + nameDash + attr.name, attr.value);
					} else {
						// it's no more the same component
						isCurrentComponentSetting = false;
					}
				}
			});
			// remove the unwanted attributes
			attrsToRemove.forEach(function (attrName) {
				elm.removeAttribute(attrName);
			});

			// init parent

			// set a uniq component id
			var _this = _possibleConstructorReturn(this, _SElement.call(this, elm));

			_this.settings = {

				/**
	    * Define when the component has to be
	    * initiated. It can be 'visible', 'inViewport', 'added', 'hover', 'click'
	    * @setting
	    * @type	{String}
	    */
				initWhen: null,

				/**
	    * Define after how many time the component has to destroy itself
	    * That starts when the component is not in the
	    * dom of has been detached
	    * -1 meand no auto destroy
	    * @setting
	    * @type 	{Number}
	    */
				autoDestroyTimeout: 5000,

				/**
	    * Callback before the component initialisation
	    * @setting
	    * @type 	{Function}
	    */
				beforeInit: null,

				/**
	    * Callback after the component initialisation
	    * @setting
	    * @type 	{Function}
	    */
				afterInit: null,

				/**
	    * Callback before the component is destroyed
	    * @setting
	    * @type 	{Function}
	    */
				beforeDestroy: null,

				/**
	    * afterDestroy
	    * Callback after the component has been destroyed
	    * @setting
	    * @type 	{Function}
	    */
				afterDestroy: null,

				/**
	    * Callback when the element is added to the dom
	    * @setting
	    * @type 	{Function}
	    */
				onAdded: null,

				/**
	    * Callback when the element is removed from the dom
	    * @setting
	    * @type 	{Function}
	    */
				onRemoved: null,

				/**
	    * Callback when the element is attached to the dom
	    * @setting
	    * @type 	{Function}
	    */
				onAttached: null,

				/**
	    * Callback when the element is detached from the dom
	    * @setting
	    * @type 	{Function}
	    */
				onDetached: null,

				/**
	    * Callback when the element has just been enabled
	    * @setting
	    * @type 	{Function}
	    */
				onEnabled: null,

				/**
	    * Callback when the element has just been disabled
	    * @setting
	    * @type 	{Function}
	    */
				onDisabled: null
			};
			_this.componentId = null;
			_this.componentName = null;
			_this.componentNameDash = null;
			_this._componentAutoDestroyTimeout = null;
			_this._componentAppliedComponentAsTag = false;
			_this._componentInited = false;
			_this._componentEnabled = true;
			_this._componentEnabledBeforeRemoved = true;
			_this._componentDestroyed = false;
			_this.componentId = (0, _uniqid2.default)();

			// save some variables
			_this._componentAppliedComponentAsTag = asTag;

			// save element reference
			_this.componentName = name;
			_this.componentNameDash = nameDash;

			// register a component
			_sElementsManager2.default.registerComponent(_this.elm, _this);

			// set the api in the dom element
			// #FIXME check if need this or not...
			_this.elm[_this.componentName] = _this;

			// extend settings values
			_this.settings = _extends({}, _this.settings, default_settings, settings);

			// check if the main data attribute is an object to extend the settings
			var set = (0, _autoCast2.default)(_this.elm.getAttribute('data-' + _this.componentNameDash) || _this.elm.getAttribute(_this.componentNameDash));
			if (set && (typeof set === 'undefined' ? 'undefined' : _typeof(set)) == 'object') {
				_this.settings = _extends({}, _this.settings, set);
			}

			// try to find the setting with the @ sign as value
			for (var settingName in _this.settings) {

				var settingAttrName = _this.componentNameDash + '-' + (0, _uncamelize2.default)(settingName);
				var settingCamelName = _this.componentName + (0, _upperFirst2.default)(settingName);

				var setting = _this.settings[settingName];
				if (setting == '@') {
					_this.settings[settingName] = set;
				} else if (typeof setting === 'string' && setting.substr(0, 1) === '@') {
					// set the setting to the attribute value
					var attrName = setting.substr(1);
					var attrValue = (0, _autoCast2.default)(_this.elm.getAttribute(attrName));

					// set that we want to bind this attribute to the setting object property
					// this._settings2AttributesBindings[settingName] = attrName;

					// if the element has not the requested linked attribute, we set it
					if (attrValue === null) {
						var settingValue = _this.attr[settingCamelName];
						if (settingValue) {
							_this.elm.setAttribute(attrName, settingValue);
							attrValue = settingValue;
						}
					}

					// check that the element has the requested attribute
					if (attrValue !== undefined) {
						_this.attr[attrName] = attrValue;
						_this.settings[settingName] = attrValue;
					}
				} else {
					// get the setting from the element attributes
					var settingAttrValue = (0, _autoCast2.default)(_this.elm.getAttribute(settingAttrName));
					if (settingAttrValue !== null) {
						_this.settings[settingName] = settingAttrValue;
					}
				}
			}

			// loop on attributes to check is theirs some that are settings
			for (var key in _this.attr) {
				if (key.indexOf(_this.componentName) === 0) {
					// get setting name
					var _settingName = (0, _camelize2.default)(key.substr(_this.componentName.length));
					// if is a setting that does not exist, create it
					if (!_this.settings[_settingName]) {
						_this.settings[_settingName] = _this.attr[key];
					}
				}
			}

			// init bindings AFTER all the settings and attributes are correctly
			// inited
			_this._initBindings();

			// init proxy
			_this._initProxy();
			return _this;
		}

		/**
	  * Init component
	  * @protected
	  */


		/**
	  * Track if the component has been destroyed
	  * @type 	{Boolean}
	  */


		/**
	  * Track if the component is enabled or not
	  * @type 	{Boolean}
	  */


		/**
	  * Store if the component is applied as a tag
	  * @type 	{Boolean}
	  */


		/**
	  * Store the name of the component in dash format 's-date-...'
	  * @type 	{String}
	  */


		/**
	  * Store the component uniqid
	  * @type 	{String}
	  */


		SComponent.prototype._init = function _init() {
			this.settings.beforeInit && this.settings.beforeInit(this);
			// init element
			_SElement.prototype._init.call(this);
			this.settings.afterInit && this.settings.afterInit(this);
		};

		/**
	  * When the component is added to the dom
	  * @protected
	  */


		SComponent.prototype._onAdded = function _onAdded() {
			// super added
			_SElement.prototype._onAdded.call(this);

			if (this.elm.hasAttribute('s-range')) {
				console.log('added', this);
			}

			// clear the destroy timeout
			clearTimeout(this._componentAutoDestroyTimeout);
			// onAdded callback
			this.settings.onAdded && this.settings.onAdded(this);
			// enable the component if it was not disabled
			if (this._componentEnabledBeforeRemoved) {
				this.enable();
			}
		};

		/**
	  * When the component is removed from the dom
	  * @protected
	  */


		SComponent.prototype._onRemoved = function _onRemoved() {
			// track the enable status before removing the element
			this._componentEnabledBeforeRemoved = this._componentEnabled;
			// super onRemoved
			_SElement.prototype._onRemoved.call(this);
			// onRemoved callback
			this.settings.onRemoved && this.settings.onRemoved(this);
			// disable the component
			this.disable();
			// autoDestroy
			this._autoDestroy();
		};

		/**
	  * When the element is added to the dom but was living
	  * in another element in memory and that the _onAdded method
	  * has already been trigerred
	  * @protected
	  */


		SComponent.prototype._onAttached = function _onAttached() {
			// if the element has not been already
			// added to the DOM, or that it has been
			// removed and not live anymore in any other DOM elements
			// stop here
			if (!this._added) return;
			// clear the destroy timeout
			clearTimeout(this._componentAutoDestroyTimeout);
			// super _onAttached
			_SElement.prototype._onAttached.call(this);
			// onAttached callback
			this.settings.onAttached && this.settings.onAttached(this);
			// enable the component
			if (this._componentEnabledBeforeDetached) {
				this.enable();
			}
		};

		/**
	  * When the element is not anymore in the current page
	  * but still lives in another element in memory
	  * @protected
	  */


		SComponent.prototype._onDetached = function _onDetached() {
			// track the enable status before removing the element
			this._componentEnabledBeforeDetached = this._componentEnabled;
			// super onDetached
			_SElement.prototype._onDetached.call(this);
			// onDetached callback
			this.settings.onDetached && this.settings.onDetached(this);
			// disable the component
			this.disable();
			// autoDestroy
			this._autoDestroy();
		};

		/**
	  * _autoDestroy
	  * Destroy the component after a certain time
	  * that it's not anymore in the dom
	  */


		SComponent.prototype._autoDestroy = function _autoDestroy() {
			var _this2 = this;

			if (this.settings.autoDestroyTimeout === -1) return;
			// clean the timeout
			clearTimeout(this._componentAutoDestroyTimeout);
			this._componentAutoDestroyTimeout = setTimeout(function () {
				_this2.destroy();
			}, this.settings.autoDestroyTimeout);
		};

		/**
	  * Disable the component
	  * @return 		{SComponent} 	The component instance itself
	  */


		SComponent.prototype.disable = function disable() {
			this._componentEnabled = false;
			// onDisabled callback
			this.settings.onDisabled && this.settings.onDisabled(this);
			// maintain chainability
			return this;
		};

		/**
	  * Enable the component
	  * @return  	{SComponent}	The component instance itself
	  */


		SComponent.prototype.enable = function enable() {
			this._componentEnabled = true;
			// onEnabled callback
			this.settings.onEnabled && this.settings.onEnabled(this);
			// maintain chainability
			return this;
		};

		/**
	  * Destroy routine
	  * @return  	{SComponent}	The component instance itself
	  */


		SComponent.prototype.destroy = function destroy() {
			// stop listening for element add and remove
			if (this._initObserver) {
				this._initObserver.unsubscribe();
			}
			// clear the timeout
			clearTimeout(this._componentAutoDestroyTimeout);

			// unregister the component from element
			_sElementsManager2.default.unregisterComponent(this.elm, this);

			// disable
			this.disable();

			// destroy in parent
			_SElement.prototype.destroy.call(this);

			// track the destroyed status
			this._componentDestroyed = true;

			// maintain chainability
			return this;
		};

		/**
	  * componentClassName
	  * Set a class that will be construct with the componentNameDash,
	  * an optional element and modifier
	  * @param 	{String} 	[element=null] 		The element name
	  * @param 	{String} 	[modifier=null] 	The modifier name
	  * @param 	{String} 	[state=null] 		The state name
	  * @return 	{String} 						The generated class
	  */


		SComponent.prototype.componentClassName = function componentClassName() {
			var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
			var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			// if the method is BEM
			var sel = this.componentNameDash;
			if (_sSettings2.default && _sSettings2.default.selector.method.toLowerCase() === 'smaccs') {
				if (element) {
					sel += '-' + element;
				}
				if (modifier) {
					sel += '-' + modifier;
				}
				if (state) {
					sel += ' is-' + state;
				}
			} else {
				if (element) {
					sel += '__' + element;
				}
				if (modifier) {
					sel += '--' + modifier;
				}
				if (state) {
					sel += '--' + state;
				}
			}
			return sel;
		};

		/**
	  * Get a component selector class built with the passed element, modifier and state parameters
	  * @param 	{String} 	[element=null] 		The element name
	  * @param 	{String} 	[modifier=null] 	The modifier name
	  * @param 	{String} 	[state=null] 		The state name
	  * @return 	{String} 						The generated class
	  */


		SComponent.prototype.componentSelector = function componentSelector() {
			var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
			var modifier = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var state = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

			var sel = this.componentClassName(element, modifier, state);
			sel = ('.' + sel).replace(' ', '.');
			return sel;
		};

		/**
	  * hasComponentClass
	  * Check if the passed element has the component class generated by the element and modifier argument
	  * @param 	{HTMLElement} 	elm 				The element to check
	  * @param 	{String} 		[element=null] 		The element name
	  * @param 	{String} 		[modifier=null] 	The modifier name
	  * @param 	{String} 		[state=null] 		The state name
	  * @return 	{Boolean} 							The check result
	  */


		SComponent.prototype.hasComponentClass = function hasComponentClass(elm) {
			var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
			var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			// generate the class
			var cls = this.componentSelector(element, modifier, state);
			var _cls = cls.split('.');
			for (var i = 0; i < _cls.length; i++) {
				var cl = _cls[i];
				if (cl && cl !== '') {
					if (!elm.classList.contains(cl)) {
						return false;
					}
				}
			}
			return true;
		};

		/**
	  * Add a class on the passed element that will be construct with the componentNameDash,
	  * an optional element, modifier and state
	  * @param 	{String} 	[element=null] 		The element name
	  * @param 	{String} 	[modifier=null] 	The modifier name
	  * @param 	{String} 	[state=null] 		The state name
	  * @return 	{SComponent}} 			The component itself
	  */


		SComponent.prototype.addComponentClass = function addComponentClass(elm) {
			var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var _this3 = this;

			var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
			var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			// if is an array
			if (elm instanceof Array || elm instanceof NodeList) {
				[].forEach.call(elm, function (el) {
					_this3.addComponentClass(el, element, modifier, state);
				});
				return this;
			}

			// get the component class
			var cls = this.componentSelector(element, modifier, state);
			// loop on each classes to add
			cls.split('.').forEach(function (cl) {
				if (cl && cl !== '') {
					elm.classList.add(cl);
				}
			});
			// return the instance to maintain chainability
			return this;
		};

		/**
	  * Remove a class on the passed element that will be construct with the componentNameDash,
	  * an optional element, modifier and state
	  * @param 	{String} 	[element=null] 		The element name
	  * @param 	{String} 	[modifier=null] 	The modifier name
	  * @param 	{String} 	[state=null] 		The state name
	  * @return 	{SComponent}} 					The component itself
	  */


		SComponent.prototype.removeComponentClass = function removeComponentClass(elm) {
			var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

			var _this4 = this;

			var modifier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
			var state = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			// if is an array
			if (elm instanceof Array || elm instanceof NodeList) {
				[].forEach.call(elm, function (el) {
					_this4.removeComponentClass(el, element, modifier, state);
				});
				return this;
			}

			// get the component class
			var cls = this.componentSelector(element, modifier, state);
			// loop on each classes to add
			cls.split('.').forEach(function (cl) {
				if (cl && cl !== '') {
					elm.classList.remove(cl);
				}
			});
			// return the instance to maintain chainability
			return this;
		};

		/**
	  * Init bindings
	  */


		SComponent.prototype._initBindings = function _initBindings() {
			// init bindings on SElement
			_SElement.prototype._initBindings.call(this);

			// bind the attribute to the settings if needed
			for (var attrName in this.attr) {
				if (attrName.indexOf(this.componentName) === 0) {
					var settingName = (0, _lowerFirst2.default)(attrName.substr(this.componentName.length));
					this._binder.bindObjectPath2ObjectPath(this, 'attr.' + attrName, this, 'settings.' + settingName);
				}
			}

			// handle the settings that are connected to another
			// attribute through the @attrName notation
			// for(let key in this._settings2AttributesBindings) {
			// 	const attrName = this._settings2AttributesBindings[key];
			// 	this._binder.bindObjectPath2ObjectPath(this, `attr.${attrName}`, this, `settings.${key}`);
			// }
		};

		/**
	  * Init proxy
	  */


		SComponent.prototype._initProxy = function _initProxy() {
			var _this5 = this;

			// resolve all the init dependencies
			if (this._initDependencies && !this._initDependenciesResolved) {
				Promise.all(this._initDependencies()).then(function () {
					// set that the dependencies are resolved
					_this5._initDependenciesResolved = true;
					// relaunch the init proxy
					_this5._initProxy();
				});
				return;
			}

			// protect multiple init
			if (this._componentInited) return;
			this._componentInited = true;

			// init callback
			var cb = this._init.bind(this);

			(function () {
				switch (_this5.settings.initWhen) {
					case 'visible':
						_this5._initObserver = (0, _querySelectorLive2.default)('[s-element="' + _this5.elementId + '"]').once().visible().subscribe(cb);
						break;
					case 'inViewport':
						_this5._initObserver = (0, _querySelectorLive2.default)('[s-element="' + _this5.elementId + '"]').once().inViewport().subscribe(cb);
						break;
					case 'added':
						_this5._initObserver = (0, _querySelectorLive2.default)('[s-element="' + _this5.elementId + '"]').once().subscribe(cb);
						break;
					case 'hover':
						var clickHandler = function clickHandler(e) {
							var id = e.target.getAttribute('s-element');
							if (e.target === this.elm) {
								cb();
								document.removeEventListener('mouseover', clickHandler.bind(this));
							}
						};

						document.addEventListener('mouseover', clickHandler.bind(_this5));
						break;
					case 'click':
						var clickHandler = function clickHandler(e) {
							var id = e.target.getAttribute('s-element');
							if (e.target === this.elm) {
								cb();
								document.removeEventListener('click', clickHandler.bind(this));
							}
						};

						document.addEventListener('click', clickHandler.bind(_this5));
						break;
					default:
						setTimeout(cb.bind(_this5));
						break;
				}
			})();
		};

		/**
	  * Watch all settings
	  * @param 	{Function} 	callback	The callback to launch when a setting has changed
	  */


		SComponent.prototype.watchSettings = function watchSettings(cb) {
			var _this6 = this;

			var timeout = null;
			var updated = {};
			var oldSettings = null;

			var _watch = function _watch(key) {
				_this6.watch('settings.' + key, function (newVal, oldVal) {
					var _updated$key;

					// add setting to updated stack
					updated[key] = (_updated$key = {
						newVal: newVal,
						oldVal: oldVal }, _updated$key['oldVal'] = oldVal, _updated$key);
					if (!oldSettings) {
						oldSettings = Object.assign({}, _this6.settings);
					}
					clearTimeout(timeout);
					timeout = setTimeout(function () {
						cb(_this6.settings, oldSettings, Object.assign({}, updated));
						updated = {};
						oldSettings = null;
					});
				});
			};
			// loop on each settings to watch them
			for (var key in this.settings) {
				_watch(key);
			}
		};

		/**
	  * Return if the component has been destroyed
	  * @return 	{Boolean} 		destroyed status
	  */


		SComponent.prototype.isDestroyed = function isDestroyed() {
			return this._componentDestroyed;
		};

		/**
	  * Return if the component is disabled
	  * @return 	{Boolean}		disable status
	  */


		SComponent.prototype.isDisabled = function isDisabled() {
			return !this._componentEnabled;
		};

		/**
	  * Return is the component is enabled
	  * @return 	{Boolean} 		enable status
	  */


		SComponent.prototype.isEnabled = function isEnabled() {
			return this._componentEnabled;
		};

		return SComponent;
	}(_SElement3.default);

	// STemplate integration


	_STemplate2.default.registerComponentIntegration('SComponent', function (component) {
		_STemplate2.default.keepAttribute(component.elm, 's-component');
	});

	// expose in window.sugar
	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.SComponent = SComponent;

	// export modules
	exports.default = SComponent;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = uncamelize;
	/**
	 * Uncamelize a string
	 */
	function uncamelize(text) {
		var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';

		// Replace all capital letters by separator followed by lowercase one
		var res = '';
		res = text.replace(/[A-Z]/g, function (letter) {
			return separator + letter.toLowerCase();
		});

		// Remove first separator (to avoid _hello_world name)
		return res.replace("/^" + separator + "/", '').trim();
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = camelize;
	/**
	 * Camelize a string
	 */
	function camelize(text) {
		var res = '';
		res = text.replace(/(?:^|[-_])(\w)/g, function (_, c) {
			return c ? c.toUpperCase() : '';
		});
		res = res.substr(0, 1).toLowerCase() + res.slice(1);
		return res.trim();
	}

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = upperFirst;
	/**
	 * Upper first
	 */
	function upperFirst(string) {
	  return string.charAt(0).toUpperCase() + string.slice(1);
	}

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = lowerFirst;
	/**
	 * Lower first letter
	 */
	function lowerFirst(string) {
	  return string.charAt(0).toLowerCase() + string.slice(1);
	}

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = uniqid;
	var uniqidIdx = 0;

	/**
	 * Get a uniq id
	 */
	function uniqid() {
		// update uniqid idx
		uniqidIdx++;
		var ts = String(new Date().getTime()),
		    i = 0,
		    out = '';
		for (i = 0; i < ts.length; i += 2) {
			out += Number(ts.substr(i, 2)).toString(36);
		}
		return 's' + out + uniqidIdx * Math.round(Math.random() * 9999999);
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = autoCast;
	/**
	 * Auto cast the string into the correct variable type
	 */
	function autoCast(string) {
		if (string == 'false' || string == 'true' || typeof string == 'string' && string.substr(0, 1) == '[' || !isNaN(string)) {
			return eval(string);
		} else if (typeof string == 'string' && string.substr(0, 1) == '{') {
			return eval('(' + string + ')');
		}
		return string;
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _uniqid = __webpack_require__(8);

	var _uniqid2 = _interopRequireDefault(_uniqid);

	var _camelize = __webpack_require__(5);

	var _camelize2 = _interopRequireDefault(_camelize);

	var _uncamelize = __webpack_require__(4);

	var _uncamelize2 = _interopRequireDefault(_uncamelize);

	var _autoCast = __webpack_require__(9);

	var _autoCast2 = _interopRequireDefault(_autoCast);

	var _querySelectorLive = __webpack_require__(11);

	var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

	var _matches = __webpack_require__(132);

	var _matches2 = _interopRequireDefault(_matches);

	var _closestNotVisible = __webpack_require__(123);

	var _closestNotVisible2 = _interopRequireDefault(_closestNotVisible);

	var _whenVisible = __webpack_require__(121);

	var _whenVisible2 = _interopRequireDefault(_whenVisible);

	var _isVisible = __webpack_require__(122);

	var _isVisible2 = _interopRequireDefault(_isVisible);

	var _isInViewport = __webpack_require__(126);

	var _isInViewport2 = _interopRequireDefault(_isInViewport);

	var _dataset = __webpack_require__(140);

	var _dataset2 = _interopRequireDefault(_dataset);

	var _dispatchEvent = __webpack_require__(141);

	var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

	var _set2 = __webpack_require__(142);

	var _set3 = _interopRequireDefault(_set2);

	var _get2 = __webpack_require__(153);

	var _get3 = _interopRequireDefault(_get2);

	var _sElementsManager = __webpack_require__(155);

	var _sElementsManager2 = _interopRequireDefault(_sElementsManager);

	var _sDebug = __webpack_require__(156);

	var _sDebug2 = _interopRequireDefault(_sDebug);

	var _SObject2 = __webpack_require__(157);

	var _SObject3 = _interopRequireDefault(_SObject2);

	var _SWatcher = __webpack_require__(158);

	var _SWatcher2 = _interopRequireDefault(_SWatcher);

	var _SBinder = __webpack_require__(160);

	var _SBinder2 = _interopRequireDefault(_SBinder);

	var _STemplate = __webpack_require__(161);

	var _STemplate2 = _interopRequireDefault(_STemplate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	// store the settings for the different
	// components types
	var _sugarTypesSettings = {};

	/**
	 * @class 		SElement 		{SObject}
	 * This class allows to wrap an HTMLElement with a lot of useful features like:
	 * - Keep in sync element attributes with this.attr property
	 * - Complete and powerfull lifecycle management
	 *  	- When the element is added : `_onAdded`
	 *  	- The element is bein inited : `_init`
	 *  	- Life of your element...
	 *  	- The element is destroyed : `destroy`
	 *  		- Either by calling manually the `destroy` method...
	 *  		- ...or when the element is not in the dom anymore since the settings.autoDestroyTimeout
	 *  - Watch some element property through a simple `watch` method
	 *  - And more...
	 *
	 * @example 	js
	 * // create a new element
	 * class myElement extends SElement {
	 * 		constructor(elm) {
	 * 			super(elm);
	 * 		}
	 * 		_init() {
	 * 			super._init();
	 * 			// do something when my element is inited
	 * 		}
	 * 		_onAdded() {
	 * 			super._onAdded();
	 * 			// do something when my element is added to the dom
	 * 		}
	 * 		destroy() {
	 * 			// handle the destroy routine of my element
	 * 			super.destroy();
	 * 		}
	 * 		// my element methods here...
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */

	var SElement = function (_SObject) {
		_inherits(SElement, _SObject);

		/**
	  * @constructor
	  * @param 		{HTMLElement} 		elm 		The HTMLElement to handle
	  */


		/**
	  * Store if the element has been added to the dom
	  * @type 	{Boolean}
	  */


		/**
	  * Store the watcher instance
	  * @type 	{SWatcher}
	  */


		// static setup(name, type, settings) {
		// 	if (! _sugarTypesSettings[name]) _sugarTypesSettings[name] = {};
		// 	_sugarTypesSettings[name][type] = settings;
		// }

		/**
	  * Store the actual DOM element that the SElement instance manage
	  * @type 	{HTMLElement}
	  */
		function SElement(elm) {
			_classCallCheck(this, SElement);

			// save the element reference
			var _this = _possibleConstructorReturn(this, _SObject.call(this));

			// init parent


			_this.elm = null;
			_this.attr = {};
			_this._watcher = null;
			_this._binder = null;
			_this._elementAdded = false;
			_this._elementAttached = false;
			_this.elm = elm;

			// create a uniqid for the element
			_this.elementId = _this.elm.getAttribute('s-element') || (0, _uniqid2.default)();

			// new watcher and binder
			_this._watcher = new _SWatcher2.default();
			_this._binder = new _SBinder2.default();

			// set the uniqid to the element
			_this.elm.setAttribute('s-element', _this.elementId);

			// save the element into the window to be
			// able to target it from outside
			// ! register AFTER having set the s-element attribute
			// cause the manager will handle only s-element elements
			_sElementsManager2.default.registerElement(_this.elm, _this);

			// set all attribute in the this.attr stack
			[].forEach.call(_this.elm.attributes, function (attr) {
				_this.attr[(0, _camelize2.default)(attr.name)] = (0, _autoCast2.default)(attr.value);
			});

			// init bindings if not a component
			if (!elm.hasAttribute('s-component')) {
				_this._initBindings();
				_this._init();
			}
			return _this;
		}

		/**
	  * Init
	  */


		/**
	  * Store if the element is attached in another dom element
	  * and this, even if the parent dom is only in memory
	  * @type 	{Boolean}
	  */


		/**
	  * Store the binder instance
	  * @type 	{SBinder}
	  */


		/**
	  * Store the element attributes in object format
	  * This object will reflect the HTML state into the dom
	  * and will keep updated until the SElement instance has been destroyed
	  * @type 	{Object}
	  */


		SElement.prototype._init = function _init() {
			var _this2 = this;

			var onAddedTimeout = null;
			var onRemovedTimeout = null;
			// listen for changes in some html tags
			this._listenChangesOnElement();

			// listen when the element is detached from the dom
			this.elm.addEventListener('detached', this._onDetachedEvent.bind(this));

			// listen when the element is removed
			this._addRemoveObserver = (0, _querySelectorLive2.default)('[s-element="' + this.elementId + '"]', {
				onNodeRemoved: function onNodeRemoved(node) {
					clearTimeout(onAddedTimeout);
					clearTimeout(onRemovedTimeout);
					onRemovedTimeout = setTimeout(function () {
						_this2._onRemoved();
					});
				}
			}).subscribe(function (elm) {
				clearTimeout(onRemovedTimeout);
				clearTimeout(onAddedTimeout);
				onAddedTimeout = setTimeout(function () {

					// check if the element is into a template
					_this2._isInTemplate = (0, _matches2.default)(_this2.elm, '[s-template-id] [s-element="' + _this2.elementId + '"],[s-template-component] [s-element="' + _this2.elementId + '"]');

					// call either the onAdded or onAttached method
					// depending on the added state
					if (!_this2._elementAdded) {
						_this2._onAdded();
					} else {
						_this2._onAttached();
					}
				});
			});
		};

		/**
	  * _onDetachedEvent
	  * When the element has been detached from the current dom
	  * It can still be in another dom element in the memory
	  * @return {void}
	  */


		SElement.prototype._onDetachedEvent = function _onDetachedEvent(e) {
			if (e.target === this.elm && this._elementAttached) {
				this._onDetached();
			}
		};

		/**
	  * Listen changes on element
	  */


		SElement.prototype._listenChangesOnElement = function _listenChangesOnElement() {
			var _this3 = this;

			var tagName = this.elm.tagName.toLowerCase();
			switch (tagName) {
				case 'input':
				case 'textarea':
				case 'select':
					this.elm.addEventListener('change', function (e) {
						// set the attribute
						_this3.attr.value = (0, _autoCast2.default)(e.target.value);
					});
					break;
			}
		};

		/**
	  * Bind the attrbutes
	  */


		SElement.prototype._initBindings = function _initBindings() {
			var _this4 = this;

			// bind all the attributes
			[].forEach.call(this.elm.attributes, function (attr) {
				var value = (0, _autoCast2.default)(attr.value);
				_this4.attr[(0, _camelize2.default)(attr.name)] = value !== undefined ? value : null;
				_this4._binder.bindObjectPath2ElementAttribute(_this4, 'attr.' + (0, _camelize2.default)(attr.name), _this4.elm, attr.name);
				_this4._binder.bindElementAttribute2ObjectPath(_this4.elm, attr.name, _this4, 'attr.' + (0, _camelize2.default)(attr.name));
			});
		};

		/**
	  * When the element has been removed from the dom
	  * @protected
	  */


		SElement.prototype._onRemoved = function _onRemoved() {
			// if removed, it is detached also
			this._elementAttached = false;
			// track added status
			this._elementAdded = false;
		};

		/**
	  * When the element has been added to the dom
	  * @protected
	  */


		SElement.prototype._onAdded = function _onAdded() {
			// track attached status
			this._elementAttached = true;
			// track added status
			this._elementAdded = true;
			// render the component
			if (!this.componentName && !this._isInTemplate) {
				this.render();
			}
		};

		/**
	  * When the element is added to the dom but was living
	  * in another element in memory and that the _onAdded method
	  * has already been trigerred
	  * @protected
	  */


		SElement.prototype._onAttached = function _onAttached() {
			// track the attached status
			this._elementAttached = true;
			// render the component
			if (!this.componentName && !this._isInTemplate) {
				this.render();
			}
		};

		/**
	  * When the element is not anymore in the current page
	  * but still lives in another element in memory
	  * @protected
	  */


		SElement.prototype._onDetached = function _onDetached() {
			// track the attached status
			this._elementAttached = false;
		};

		/**
	  * Destroy element routine
	  */


		SElement.prototype.destroy = function destroy() {

			// do not listen for add or remove anymore
			if (this._addRemoveObserver) {
				this._addRemoveObserver.unsubscribe();
			}

			// do not listen for detached event anymore
			this.elm.removeEventListener('detached', this._onDetachedEvent);

			// stop watchers
			this._watcher.destroy();
			this._watcher = null;

			// stop binder
			this._binder.destroy();
			this._binder = null;

			// onRemoved
			this.onRemoved && this.onRemoved();

			// unregister element instance
			_sElementsManager2.default.unregisterElement(this.elm, this);
		};

		/**
	  * Original HTMLElement before any SElement manipulation
	  * @name 	originalElement
	  * @type 	{HTMLElement}
	  */


		/**
	  * Remove the element from the dom
	  * @param 	{HTMLElement} 	[elm=this.elm] 		The element to remove
	  * @return 	{SElement} 							The SElement instance itself to maintain chainability
	  */
		SElement.prototype.remove = function remove() {
			var elm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.elm;

			// save the next sibling
			elm._sNextSibling = elm.nextSibling;

			// remove the element
			if (elm.parentNode) {
				elm._sParent = elm.parentNode;
				elm.parentNode.removeChild(elm);
			}
			// maintain chainability
			return this;
		};

		/**
	  * Append the element into the dom
	  * @param 	{HTMLElement} 	[elm=this.elm] 	The element to append
	  * @param 	{HTMLElement} 	[to=null] 		The container in which to append the element
	  * @return 	{SElement} 						The instance itself to maintain chainability
	  */


		SElement.prototype.append = function append() {
			var elm = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.elm;
			var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


			// remove if has a parent
			if (elm.parentNode) {
				this.remove(elm);
			}

			if (!to && elm._sNextSibling && elm._sNextSibling.parentNode) {
				elm._sNextSibling.parentNode.insertBefore(elm, elm._sNextSibling);
			} else if (elm._sParent) {
				elm._sParent.appendChild(elm);
			} else if (to && to.parentNode) {
				to.parentNode.appendChild(elm);
			} else if (elm !== this.elm) {
				this.elm.appendChild(elm);
			} else {
				throw 'In order to append this element, you need to specify a "to" parameter';
			}
			// maintain chainability
			return this;
		};

		/**
	  * Watch a property on the SElement instance
	  * @param 		{String} 		path 		The object property path to watch
	  * @param 		{Function} 		cb 			The callback called when the property has been updated
	  */


		SElement.prototype.watch = function watch(path, cb) {
			this._watcher.watch(this, path, cb);
		};

		/**
	  * Return if the element is attached into the dom or not
	  * This mean that the element live into the DOM document. It this is false,
	  * that mean that the element live into another HTML element into the memory
	  * @return 		{Boolean} 	The attached status
	  */


		SElement.prototype.isElementAttached = function isElementAttached() {
			return this._elementAttached;
		};

		/**
	  * Return if the element is added into the dom or not
	  * This mean that the element is has been added into the dom
	  * but it can live into another HTML element in memory and not
	  * in the document
	  * @return 		{Boolean} 	The attached status
	  */


		SElement.prototype.isElementAdded = function isElementAdded() {
			return this._elementAdded;
		};

		// access dataset
		// @TODO : remove this method


		SElement.prototype.dataset = function dataset(key) {
			var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
			var elm = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.elm;

			return (0, _dataset2.default)(elm, key, value);
		};

		_createClass(SElement, [{
			key: 'originalElement',
			get: function get() {
				return _sElementsManager2.default.getOriginalElement(this.elementId);
			}
		}]);

		return SElement;
	}(_SObject3.default);

	// STemplate integration


	_STemplate2.default.registerComponentIntegration('SElement', function (component) {
		_STemplate2.default.keepAttribute(component.elm, 's-element');
	});

	// expose in window.sugar
	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.SElement = SElement;

	// export modules
	exports.default = SElement;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	exports.default = querySelectorLive;

	var _Observable = __webpack_require__(12);

	__webpack_require__(27);

	var _isEqual2 = __webpack_require__(35);

	var _isEqual3 = _interopRequireDefault(_isEqual2);

	__webpack_require__(114);

	__webpack_require__(115);

	__webpack_require__(116);

	var _mutationObservable = __webpack_require__(117);

	var _mutationObservable2 = _interopRequireDefault(_mutationObservable);

	var _injectOperators = __webpack_require__(118);

	var _injectOperators2 = _interopRequireDefault(_injectOperators);

	var _matches = __webpack_require__(132);

	var _matches2 = _interopRequireDefault(_matches);

	var _domReady = __webpack_require__(135);

	var _domReady2 = _interopRequireDefault(_domReady);

	var _uniqid = __webpack_require__(8);

	var _uniqid2 = _interopRequireDefault(_uniqid);

	var _SEvent = __webpack_require__(138);

	var _SEvent2 = _interopRequireDefault(_SEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Observe the dom to get all the elements that matches the passed selector at any point in time
	 *
	 * @param 		{String} 						selector 				The css selector to monitor in the dom
	 * @param 		{Object} 						[settings=null] 		The settings to pass to the selector
	 * @return 		{QuerySelectorLiveObservable} 							The augmented observable instance to subscribe to
	 *
	 * @example 	js
	 * const observer = querySelectorLive('.some-cool-css-selector').subscribe((elm) => {
	 * 		// do something with the element found in the dom
	 * });
	 *
	 * // the QuerySelectorLiveObservable add some nice operators
	 * // that you can use with ease like so:
	 * const observer = querySelectorLive('.some-cool-css-selector').once().inViewport().subscribe((elm) => {
	 * 		// do someting with the element found in the dom and that is now in the viewport
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */

	/**
	 * The root node to start the monitoring from
	 * @setting
	 * @name 		rootNode
	 * @type 		{HTMLElement}
	 * @default 	document.body
	 */

	/**
	 * An array of callbacks to call when the detected element is removed from the dom
	 * @setting
	 * @name 		onNodeRemoved
	 * @type 		{Array}<Function>
	 * @default 	[]
	 */

	// store all the selectors with their settings
	// '{selector}' : {
	// 		settings : {...},
	// 		ovservable : ...
	// }
	var observeStack = {};
	var domObserver = null;

	function _processAddedNode(observe, addedNode) {
		// set the observerId flag to true
		if (!addedNode._sQuerySelectorLive) addedNode._sQuerySelectorLive = {};

		// Push the node downward the observable
		// only if has not already been done for this particular node
		// and observer.
		// This will be allowed again when the node has been removed
		// from node or has been changed and that he matches not anymore
		// the selector
		if (addedNode._sQuerySelectorLive[observe.observerId]) return false;

		// push the node downward
		observe.observer.next(addedNode);

		// set the flag that this node has been handled for this particular observer
		addedNode._sQuerySelectorLive[observe.observerId] = true;
	}
	function processAdded(addedNode) {
		// some nodes does not interesting us
		if (!addedNode.nodeName || addedNode.nodeName.toLowerCase() === '#text' || addedNode.nodeName.toLowerCase() === '#comment') {
			return false;
		}

		// check if the element match the selector
		var keys = Object.keys(observeStack);

		var _loop = function _loop(i) {
			var observe = observeStack[keys[i]];

			// rootNode
			if (observe.settings.rootNode) {
				if (!observe.settings.rootNode.contains(addedNode)) {
					// this node is not interesting for us
					return 'continue';
				}
			}

			// match the selector
			if ((0, _matches2.default)(addedNode, observe.selector)) {
				_processAddedNode(observe, addedNode);
			} else {
				if (addedNode.querySelectorAll !== undefined) {
					var nodes = addedNode.querySelectorAll(observe.selector);
					if (nodes.length) {
						// it's not the element itself that has been added
						// but we will try to find any elements into the added one
						[].forEach.call(nodes, function (elm) {
							_processAddedNode(observe, elm);
						});
					}
				}
			}
		};

		for (var i = 0; i < keys.length; i++) {
			var _ret = _loop(i);

			if (_ret === 'continue') continue;
		}
		return true;
	}

	function _processRemovedNode(observe, removedNode) {

		// stop if the node is not marked with the observer id
		if (!removedNode._sQuerySelectorLive || !removedNode._sQuerySelectorLive[observe.observerId]) {
			return false;
		}

		// reset the flag that tell that whis node has been
		// already handled for this particular observer
		// if (removedNode._sQuerySelectorLive) {
		delete removedNode._sQuerySelectorLive[observe.observerId];

		// if no onNodeRemoved
		// continue to the next node
		if (!observe.settings.onNodeRemoved || observe.settings.onNodeRemoved.length <= 0) {
			return false;
		}

		// match the selector
		// if (__matches(removedNode, observe.selector)) {
		observe.settings.onNodeRemoved.forEach(function (cb) {
			cb(removedNode);
		});
		// }
	}
	function processRemoved(removedNode) {
		// some nodes does not interesting us
		if (!removedNode.nodeName || removedNode.nodeName.toLowerCase() === '#text' || removedNode.nodeName.toLowerCase() === '#comment') {
			return false;
		}

		// check if the element match the selector
		var keys = Object.keys(observeStack);
		for (var i = 0; i < keys.length; i++) {
			var _observe = observeStack[keys[i]];

			// emit the detached event
			// that will be captured by
			// any children that need this
			if (!removedNode._removedEventDispatched) {
				if (removedNode.querySelectorAll) {
					[].forEach.call(removedNode.querySelectorAll('[s-component]'), function (elm) {
						var e = new _SEvent2.default('detached');
						elm.dispatchEvent(e);
					});
					removedNode._removedEventDispatched = true;
					setTimeout(function () {
						removedNode._removedEventDispatched = false;
					});
				}
			}

			// process the removed node
			if (!_processRemovedNode(_observe, removedNode)) {
				continue;
			}
		}
		return true;
	}

	function processAttributes(node) {
		// some nodes does not interesting us
		if (!node.nodeName || node.nodeName.toLowerCase() === '#text' || node.nodeName.toLowerCase() === '#comment') {
			return false;
		}

		// check if the element match the selector
		var keys = Object.keys(observeStack);
		for (var i = 0; i < keys.length; i++) {
			var _observe2 = observeStack[keys[i]];

			// match the selector
			if ((0, _matches2.default)(node, _observe2.selector)) {

				// rootNode
				if (_observe2.settings.rootNode) {
					if (!_observe2.settings.rootNode.contains(node)) {
						// this node is not interesting for us
						continue;
					}
				}

				// process the added node
				if (!_processAddedNode(_observe2, node)) {
					continue;
				}
			} else {
				// process the removedNode
				if (!_processRemovedNode(_observe2, node)) {
					continue;
				}
			}
		}
		return true;
	}

	(0, _domReady2.default)(function () {

		domObserver = new MutationObserver(function (mutations) {
			var _loop2 = function _loop2(i) {
				var mutation = mutations[i];

				if (mutation.type === 'attributes') {
					// handle that node only once
					// by loop
					if (!mutation.target._handled) {
						mutation.target._handled = true;
						setTimeout(function () {
							delete mutation.target._handled;
						});
						processAttributes(mutation.target);
					}
				} else {

					// addedNodes
					if (mutation.addedNodes && mutation.addedNodes.length) {
						for (var j = 0; j < mutation.addedNodes.length; j++) {
							var addedNode = mutation.addedNodes[j];
							if (!processAdded(addedNode)) {
								continue;
							}
						}
					}

					// removedNodes
					if (mutation.removedNodes && mutation.removedNodes.length) {
						for (var _j = 0; _j < mutation.removedNodes.length; _j++) {
							var removedNode = mutation.removedNodes[_j];
							if (!processRemoved(removedNode)) {
								continue;
							}
						}
					}
				}
			};

			// loop on mutations
			for (var i = 0; i < mutations.length; i++) {
				_loop2(i);
			}
		});

		domObserver.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: true
		});
	});

	function querySelectorLive(selector) {
		var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


		// process onNodeRemoved setting
		// to ensure that it's an array
		if (settings.onNodeRemoved && typeof settings.onNodeRemoved === 'function') {
			settings.onNodeRemoved = [settings.onNodeRemoved];
		}

		// extend settings
		settings = _extends({
			onNodeRemoved: [],
			rootNode: null
		}, settings);

		var obsId = (0, _uniqid2.default)();

		var observerSettings = {
			selector: selector,
			settings: settings,
			observerId: obsId
		};

		var observable = new _Observable.Observable(function (observer) {
			observerSettings.observer = observer;

			// save the new observe settings in stack
			// observeStack.push(observerSettings);
			observeStack[obsId] = observerSettings;

			// select first time
			(0, _domReady2.default)(function () {
				var rootNode = settings.rootNode || document.body;
				[].forEach.call(rootNode.querySelectorAll(selector), function (node) {
					_processAddedNode(observerSettings, node);
				});
			});

			// unsubscribe routine
			return function () {
				delete observeStack[obsId];
			};
		});

		// inject operators
		(0, _injectOperators2.default)(observable);

		// pass down the observable the selector
		observable._settings = {
			selector: selector,
			settings: settings
		};

		// return the observable
		return observable;
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(13);
	var toSubscriber_1 = __webpack_require__(15);
	var observable_1 = __webpack_require__(26);
	/**
	 * A representation of any set of values over any amount of time. This the most basic building block
	 * of RxJS.
	 *
	 * @class Observable<T>
	 */
	var Observable = (function () {
	    /**
	     * @constructor
	     * @param {Function} subscribe the function that is  called when the Observable is
	     * initially subscribed to. This function is given a Subscriber, to which new values
	     * can be `next`ed, or an `error` method can be called to raise an error, or
	     * `complete` can be called to notify of a successful completion.
	     */
	    function Observable(subscribe) {
	        this._isScalar = false;
	        if (subscribe) {
	            this._subscribe = subscribe;
	        }
	    }
	    /**
	     * Creates a new Observable, with this Observable as the source, and the passed
	     * operator defined as the new observable's operator.
	     * @method lift
	     * @param {Operator} operator the operator defining the operation to take on the observable
	     * @return {Observable} a new observable with the Operator applied
	     */
	    Observable.prototype.lift = function (operator) {
	        var observable = new Observable();
	        observable.source = this;
	        observable.operator = operator;
	        return observable;
	    };
	    /**
	     * Registers handlers for handling emitted values, error and completions from the observable, and
	     *  executes the observable's subscriber function, which will take action to set up the underlying data stream
	     * @method subscribe
	     * @param {PartialObserver|Function} observerOrNext (optional) either an observer defining all functions to be called,
	     *  or the first of three possible handlers, which is the handler for each value emitted from the observable.
	     * @param {Function} error (optional) a handler for a terminal event resulting from an error. If no error handler is provided,
	     *  the error will be thrown as unhandled
	     * @param {Function} complete (optional) a handler for a terminal event resulting from successful completion.
	     * @return {ISubscription} a subscription reference to the registered handlers
	     */
	    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
	        var operator = this.operator;
	        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
	        if (operator) {
	            operator.call(sink, this);
	        }
	        else {
	            sink.add(this._subscribe(sink));
	        }
	        if (sink.syncErrorThrowable) {
	            sink.syncErrorThrowable = false;
	            if (sink.syncErrorThrown) {
	                throw sink.syncErrorValue;
	            }
	        }
	        return sink;
	    };
	    /**
	     * @method forEach
	     * @param {Function} next a handler for each value emitted by the observable
	     * @param {PromiseConstructor} [PromiseCtor] a constructor function used to instantiate the Promise
	     * @return {Promise} a promise that either resolves on observable completion or
	     *  rejects with the handled error
	     */
	    Observable.prototype.forEach = function (next, PromiseCtor) {
	        var _this = this;
	        if (!PromiseCtor) {
	            if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
	                PromiseCtor = root_1.root.Rx.config.Promise;
	            }
	            else if (root_1.root.Promise) {
	                PromiseCtor = root_1.root.Promise;
	            }
	        }
	        if (!PromiseCtor) {
	            throw new Error('no Promise impl found');
	        }
	        return new PromiseCtor(function (resolve, reject) {
	            var subscription = _this.subscribe(function (value) {
	                if (subscription) {
	                    // if there is a subscription, then we can surmise
	                    // the next handling is asynchronous. Any errors thrown
	                    // need to be rejected explicitly and unsubscribe must be
	                    // called manually
	                    try {
	                        next(value);
	                    }
	                    catch (err) {
	                        reject(err);
	                        subscription.unsubscribe();
	                    }
	                }
	                else {
	                    // if there is NO subscription, then we're getting a nexted
	                    // value synchronously during subscription. We can just call it.
	                    // If it errors, Observable's `subscribe` will ensure the
	                    // unsubscription logic is called, then synchronously rethrow the error.
	                    // After that, Promise will trap the error and send it
	                    // down the rejection path.
	                    next(value);
	                }
	            }, reject, resolve);
	        });
	    };
	    Observable.prototype._subscribe = function (subscriber) {
	        return this.source.subscribe(subscriber);
	    };
	    /**
	     * An interop point defined by the es7-observable spec https://github.com/zenparsing/es-observable
	     * @method Symbol.observable
	     * @return {Observable} this instance of the observable
	     */
	    Observable.prototype[observable_1.$$observable] = function () {
	        return this;
	    };
	    // HACK: Since TypeScript inherits static properties too, we have to
	    // fight against TypeScript here so Subject can have a different static create signature
	    /**
	     * Creates a new cold Observable by calling the Observable constructor
	     * @static true
	     * @owner Observable
	     * @method create
	     * @param {Function} subscribe? the subscriber function to be passed to the Observable constructor
	     * @return {Observable} a new cold observable
	     */
	    Observable.create = function (subscribe) {
	        return new Observable(subscribe);
	    };
	    return Observable;
	}());
	exports.Observable = Observable;
	//# sourceMappingURL=Observable.js.map

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {"use strict";
	var objectTypes = {
	    'boolean': false,
	    'function': true,
	    'object': true,
	    'number': false,
	    'string': false,
	    'undefined': false
	};
	exports.root = (objectTypes[typeof self] && self) || (objectTypes[typeof window] && window);
	/* tslint:disable:no-unused-variable */
	var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;
	var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;
	var freeGlobal = objectTypes[typeof global] && global;
	if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	    exports.root = freeGlobal;
	}
	//# sourceMappingURL=root.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module), (function() { return this; }())))

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Subscriber_1 = __webpack_require__(16);
	var rxSubscriber_1 = __webpack_require__(25);
	function toSubscriber(nextOrObserver, error, complete) {
	    if (nextOrObserver) {
	        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
	            return nextOrObserver;
	        }
	        if (nextOrObserver[rxSubscriber_1.$$rxSubscriber]) {
	            return nextOrObserver[rxSubscriber_1.$$rxSubscriber]();
	        }
	    }
	    if (!nextOrObserver && !error && !complete) {
	        return new Subscriber_1.Subscriber();
	    }
	    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
	}
	exports.toSubscriber = toSubscriber;
	//# sourceMappingURL=toSubscriber.js.map

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var isFunction_1 = __webpack_require__(17);
	var Subscription_1 = __webpack_require__(18);
	var Observer_1 = __webpack_require__(24);
	var rxSubscriber_1 = __webpack_require__(25);
	/**
	 * Implements the {@link Observer} interface and extends the
	 * {@link Subscription} class. While the {@link Observer} is the public API for
	 * consuming the values of an {@link Observable}, all Observers get converted to
	 * a Subscriber, in order to provide Subscription-like capabilities such as
	 * `unsubscribe`. Subscriber is a common type in RxJS, and crucial for
	 * implementing operators, but it is rarely used as a public API.
	 *
	 * @class Subscriber<T>
	 */
	var Subscriber = (function (_super) {
	    __extends(Subscriber, _super);
	    /**
	     * @param {Observer|function(value: T): void} [destinationOrNext] A partially
	     * defined Observer or a `next` callback function.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     */
	    function Subscriber(destinationOrNext, error, complete) {
	        _super.call(this);
	        this.syncErrorValue = null;
	        this.syncErrorThrown = false;
	        this.syncErrorThrowable = false;
	        this.isStopped = false;
	        switch (arguments.length) {
	            case 0:
	                this.destination = Observer_1.empty;
	                break;
	            case 1:
	                if (!destinationOrNext) {
	                    this.destination = Observer_1.empty;
	                    break;
	                }
	                if (typeof destinationOrNext === 'object') {
	                    if (destinationOrNext instanceof Subscriber) {
	                        this.destination = destinationOrNext;
	                        this.destination.add(this);
	                    }
	                    else {
	                        this.syncErrorThrowable = true;
	                        this.destination = new SafeSubscriber(this, destinationOrNext);
	                    }
	                    break;
	                }
	            default:
	                this.syncErrorThrowable = true;
	                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
	                break;
	        }
	    }
	    Subscriber.prototype[rxSubscriber_1.$$rxSubscriber] = function () { return this; };
	    /**
	     * A static factory for a Subscriber, given a (potentially partial) definition
	     * of an Observer.
	     * @param {function(x: ?T): void} [next] The `next` callback of an Observer.
	     * @param {function(e: ?any): void} [error] The `error` callback of an
	     * Observer.
	     * @param {function(): void} [complete] The `complete` callback of an
	     * Observer.
	     * @return {Subscriber<T>} A Subscriber wrapping the (partially defined)
	     * Observer represented by the given arguments.
	     */
	    Subscriber.create = function (next, error, complete) {
	        var subscriber = new Subscriber(next, error, complete);
	        subscriber.syncErrorThrowable = false;
	        return subscriber;
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `next` from
	     * the Observable, with a value. The Observable may call this method 0 or more
	     * times.
	     * @param {T} [value] The `next` value.
	     * @return {void}
	     */
	    Subscriber.prototype.next = function (value) {
	        if (!this.isStopped) {
	            this._next(value);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive notifications of type `error` from
	     * the Observable, with an attached {@link Error}. Notifies the Observer that
	     * the Observable has experienced an error condition.
	     * @param {any} [err] The `error` exception.
	     * @return {void}
	     */
	    Subscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._error(err);
	        }
	    };
	    /**
	     * The {@link Observer} callback to receive a valueless notification of type
	     * `complete` from the Observable. Notifies the Observer that the Observable
	     * has finished sending push-based notifications.
	     * @return {void}
	     */
	    Subscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            this.isStopped = true;
	            this._complete();
	        }
	    };
	    Subscriber.prototype.unsubscribe = function () {
	        if (this.closed) {
	            return;
	        }
	        this.isStopped = true;
	        _super.prototype.unsubscribe.call(this);
	    };
	    Subscriber.prototype._next = function (value) {
	        this.destination.next(value);
	    };
	    Subscriber.prototype._error = function (err) {
	        this.destination.error(err);
	        this.unsubscribe();
	    };
	    Subscriber.prototype._complete = function () {
	        this.destination.complete();
	        this.unsubscribe();
	    };
	    return Subscriber;
	}(Subscription_1.Subscription));
	exports.Subscriber = Subscriber;
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SafeSubscriber = (function (_super) {
	    __extends(SafeSubscriber, _super);
	    function SafeSubscriber(_parent, observerOrNext, error, complete) {
	        _super.call(this);
	        this._parent = _parent;
	        var next;
	        var context = this;
	        if (isFunction_1.isFunction(observerOrNext)) {
	            next = observerOrNext;
	        }
	        else if (observerOrNext) {
	            context = observerOrNext;
	            next = observerOrNext.next;
	            error = observerOrNext.error;
	            complete = observerOrNext.complete;
	            if (isFunction_1.isFunction(context.unsubscribe)) {
	                this.add(context.unsubscribe.bind(context));
	            }
	            context.unsubscribe = this.unsubscribe.bind(this);
	        }
	        this._context = context;
	        this._next = next;
	        this._error = error;
	        this._complete = complete;
	    }
	    SafeSubscriber.prototype.next = function (value) {
	        if (!this.isStopped && this._next) {
	            var _parent = this._parent;
	            if (!_parent.syncErrorThrowable) {
	                this.__tryOrUnsub(this._next, value);
	            }
	            else if (this.__tryOrSetError(_parent, this._next, value)) {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.error = function (err) {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._error) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._error, err);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._error, err);
	                    this.unsubscribe();
	                }
	            }
	            else if (!_parent.syncErrorThrowable) {
	                this.unsubscribe();
	                throw err;
	            }
	            else {
	                _parent.syncErrorValue = err;
	                _parent.syncErrorThrown = true;
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.complete = function () {
	        if (!this.isStopped) {
	            var _parent = this._parent;
	            if (this._complete) {
	                if (!_parent.syncErrorThrowable) {
	                    this.__tryOrUnsub(this._complete);
	                    this.unsubscribe();
	                }
	                else {
	                    this.__tryOrSetError(_parent, this._complete);
	                    this.unsubscribe();
	                }
	            }
	            else {
	                this.unsubscribe();
	            }
	        }
	    };
	    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            this.unsubscribe();
	            throw err;
	        }
	    };
	    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
	        try {
	            fn.call(this._context, value);
	        }
	        catch (err) {
	            parent.syncErrorValue = err;
	            parent.syncErrorThrown = true;
	            return true;
	        }
	        return false;
	    };
	    SafeSubscriber.prototype._unsubscribe = function () {
	        var _parent = this._parent;
	        this._context = null;
	        this._parent = null;
	        _parent.unsubscribe();
	    };
	    return SafeSubscriber;
	}(Subscriber));
	//# sourceMappingURL=Subscriber.js.map

/***/ },
/* 17 */
/***/ function(module, exports) {

	"use strict";
	function isFunction(x) {
	    return typeof x === 'function';
	}
	exports.isFunction = isFunction;
	//# sourceMappingURL=isFunction.js.map

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var isArray_1 = __webpack_require__(19);
	var isObject_1 = __webpack_require__(20);
	var isFunction_1 = __webpack_require__(17);
	var tryCatch_1 = __webpack_require__(21);
	var errorObject_1 = __webpack_require__(22);
	var UnsubscriptionError_1 = __webpack_require__(23);
	/**
	 * Represents a disposable resource, such as the execution of an Observable. A
	 * Subscription has one important method, `unsubscribe`, that takes no argument
	 * and just disposes the resource held by the subscription.
	 *
	 * Additionally, subscriptions may be grouped together through the `add()`
	 * method, which will attach a child Subscription to the current Subscription.
	 * When a Subscription is unsubscribed, all its children (and its grandchildren)
	 * will be unsubscribed as well.
	 *
	 * @class Subscription
	 */
	var Subscription = (function () {
	    /**
	     * @param {function(): void} [unsubscribe] A function describing how to
	     * perform the disposal of resources when the `unsubscribe` method is called.
	     */
	    function Subscription(unsubscribe) {
	        /**
	         * A flag to indicate whether this Subscription has already been unsubscribed.
	         * @type {boolean}
	         */
	        this.closed = false;
	        if (unsubscribe) {
	            this._unsubscribe = unsubscribe;
	        }
	    }
	    /**
	     * Disposes the resources held by the subscription. May, for instance, cancel
	     * an ongoing Observable execution or cancel any other type of work that
	     * started when the Subscription was created.
	     * @return {void}
	     */
	    Subscription.prototype.unsubscribe = function () {
	        var hasErrors = false;
	        var errors;
	        if (this.closed) {
	            return;
	        }
	        this.closed = true;
	        var _a = this, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
	        this._subscriptions = null;
	        if (isFunction_1.isFunction(_unsubscribe)) {
	            var trial = tryCatch_1.tryCatch(_unsubscribe).call(this);
	            if (trial === errorObject_1.errorObject) {
	                hasErrors = true;
	                (errors = errors || []).push(errorObject_1.errorObject.e);
	            }
	        }
	        if (isArray_1.isArray(_subscriptions)) {
	            var index = -1;
	            var len = _subscriptions.length;
	            while (++index < len) {
	                var sub = _subscriptions[index];
	                if (isObject_1.isObject(sub)) {
	                    var trial = tryCatch_1.tryCatch(sub.unsubscribe).call(sub);
	                    if (trial === errorObject_1.errorObject) {
	                        hasErrors = true;
	                        errors = errors || [];
	                        var err = errorObject_1.errorObject.e;
	                        if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
	                            errors = errors.concat(err.errors);
	                        }
	                        else {
	                            errors.push(err);
	                        }
	                    }
	                }
	            }
	        }
	        if (hasErrors) {
	            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
	        }
	    };
	    /**
	     * Adds a tear down to be called during the unsubscribe() of this
	     * Subscription.
	     *
	     * If the tear down being added is a subscription that is already
	     * unsubscribed, is the same reference `add` is being called on, or is
	     * `Subscription.EMPTY`, it will not be added.
	     *
	     * If this subscription is already in an `closed` state, the passed
	     * tear down logic will be executed immediately.
	     *
	     * @param {TeardownLogic} teardown The additional logic to execute on
	     * teardown.
	     * @return {Subscription} Returns the Subscription used or created to be
	     * added to the inner subscriptions list. This Subscription can be used with
	     * `remove()` to remove the passed teardown logic from the inner subscriptions
	     * list.
	     */
	    Subscription.prototype.add = function (teardown) {
	        if (!teardown || (teardown === Subscription.EMPTY)) {
	            return Subscription.EMPTY;
	        }
	        if (teardown === this) {
	            return this;
	        }
	        var sub = teardown;
	        switch (typeof teardown) {
	            case 'function':
	                sub = new Subscription(teardown);
	            case 'object':
	                if (sub.closed || typeof sub.unsubscribe !== 'function') {
	                    break;
	                }
	                else if (this.closed) {
	                    sub.unsubscribe();
	                }
	                else {
	                    (this._subscriptions || (this._subscriptions = [])).push(sub);
	                }
	                break;
	            default:
	                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
	        }
	        return sub;
	    };
	    /**
	     * Removes a Subscription from the internal list of subscriptions that will
	     * unsubscribe during the unsubscribe process of this Subscription.
	     * @param {Subscription} subscription The subscription to remove.
	     * @return {void}
	     */
	    Subscription.prototype.remove = function (subscription) {
	        // HACK: This might be redundant because of the logic in `add()`
	        if (subscription == null || (subscription === this) || (subscription === Subscription.EMPTY)) {
	            return;
	        }
	        var subscriptions = this._subscriptions;
	        if (subscriptions) {
	            var subscriptionIndex = subscriptions.indexOf(subscription);
	            if (subscriptionIndex !== -1) {
	                subscriptions.splice(subscriptionIndex, 1);
	            }
	        }
	    };
	    Subscription.EMPTY = (function (empty) {
	        empty.closed = true;
	        return empty;
	    }(new Subscription()));
	    return Subscription;
	}());
	exports.Subscription = Subscription;
	//# sourceMappingURL=Subscription.js.map

/***/ },
/* 19 */
/***/ function(module, exports) {

	"use strict";
	exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
	//# sourceMappingURL=isArray.js.map

/***/ },
/* 20 */
/***/ function(module, exports) {

	"use strict";
	function isObject(x) {
	    return x != null && typeof x === 'object';
	}
	exports.isObject = isObject;
	//# sourceMappingURL=isObject.js.map

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var errorObject_1 = __webpack_require__(22);
	var tryCatchTarget;
	function tryCatcher() {
	    try {
	        return tryCatchTarget.apply(this, arguments);
	    }
	    catch (e) {
	        errorObject_1.errorObject.e = e;
	        return errorObject_1.errorObject;
	    }
	}
	function tryCatch(fn) {
	    tryCatchTarget = fn;
	    return tryCatcher;
	}
	exports.tryCatch = tryCatch;
	;
	//# sourceMappingURL=tryCatch.js.map

/***/ },
/* 22 */
/***/ function(module, exports) {

	"use strict";
	// typeof any so that it we don't have to cast when comparing a result to the error object
	exports.errorObject = { e: {} };
	//# sourceMappingURL=errorObject.js.map

/***/ },
/* 23 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when one or more errors have occurred during the
	 * `unsubscribe` of a {@link Subscription}.
	 */
	var UnsubscriptionError = (function (_super) {
	    __extends(UnsubscriptionError, _super);
	    function UnsubscriptionError(errors) {
	        _super.call(this);
	        this.errors = errors;
	        var err = Error.call(this, errors ?
	            errors.length + " errors occurred during unsubscription:\n  " + errors.map(function (err, i) { return ((i + 1) + ") " + err.toString()); }).join('\n  ') : '');
	        this.name = err.name = 'UnsubscriptionError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return UnsubscriptionError;
	}(Error));
	exports.UnsubscriptionError = UnsubscriptionError;
	//# sourceMappingURL=UnsubscriptionError.js.map

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	exports.empty = {
	    closed: true,
	    next: function (value) { },
	    error: function (err) { throw err; },
	    complete: function () { }
	};
	//# sourceMappingURL=Observer.js.map

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(13);
	var Symbol = root_1.root.Symbol;
	exports.$$rxSubscriber = (typeof Symbol === 'function' && typeof Symbol.for === 'function') ?
	    Symbol.for('rxSubscriber') : '@@rxSubscriber';
	//# sourceMappingURL=rxSubscriber.js.map

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var root_1 = __webpack_require__(13);
	function getSymbolObservable(context) {
	    var $$observable;
	    var Symbol = context.Symbol;
	    if (typeof Symbol === 'function') {
	        if (Symbol.observable) {
	            $$observable = Symbol.observable;
	        }
	        else {
	            $$observable = Symbol('observable');
	            Symbol.observable = $$observable;
	        }
	    }
	    else {
	        $$observable = '@@observable';
	    }
	    return $$observable;
	}
	exports.getSymbolObservable = getSymbolObservable;
	exports.$$observable = getSymbolObservable(root_1.root);
	//# sourceMappingURL=observable.js.map

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var Observable_1 = __webpack_require__(12);
	var share_1 = __webpack_require__(28);
	Observable_1.Observable.prototype.share = share_1.share;
	//# sourceMappingURL=share.js.map

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var multicast_1 = __webpack_require__(29);
	var Subject_1 = __webpack_require__(32);
	function shareSubjectFactory() {
	    return new Subject_1.Subject();
	}
	/**
	 * Returns a new Observable that multicasts (shares) the original Observable. As long as there is at least one
	 * Subscriber this Observable will be subscribed and emitting data. When all subscribers have unsubscribed it will
	 * unsubscribe from the source Observable. Because the Observable is multicasting it makes the stream `hot`.
	 * This is an alias for .publish().refCount().
	 *
	 * <img src="./img/share.png" width="100%">
	 *
	 * @return {Observable<T>} an Observable that upon connection causes the source Observable to emit items to its Observers
	 * @method share
	 * @owner Observable
	 */
	function share() {
	    return multicast_1.multicast.call(this, shareSubjectFactory).refCount();
	}
	exports.share = share;
	;
	//# sourceMappingURL=share.js.map

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var MulticastObservable_1 = __webpack_require__(30);
	var ConnectableObservable_1 = __webpack_require__(31);
	/**
	 * Returns an Observable that emits the results of invoking a specified selector on items
	 * emitted by a ConnectableObservable that shares a single subscription to the underlying stream.
	 *
	 * <img src="./img/multicast.png" width="100%">
	 *
	 * @param {Function|Subject} Factory function to create an intermediate subject through
	 * which the source sequence's elements will be multicast to the selector function
	 * or Subject to push source elements into.
	 * @param {Function} Optional selector function that can use the multicasted source stream
	 * as many times as needed, without causing multiple subscriptions to the source stream.
	 * Subscribers to the given source will receive all notifications of the source from the
	 * time of the subscription forward.
	 * @return {Observable} an Observable that emits the results of invoking the selector
	 * on the items emitted by a `ConnectableObservable` that shares a single subscription to
	 * the underlying stream.
	 * @method multicast
	 * @owner Observable
	 */
	function multicast(subjectOrSubjectFactory, selector) {
	    var subjectFactory;
	    if (typeof subjectOrSubjectFactory === 'function') {
	        subjectFactory = subjectOrSubjectFactory;
	    }
	    else {
	        subjectFactory = function subjectFactory() {
	            return subjectOrSubjectFactory;
	        };
	    }
	    return !selector ?
	        new ConnectableObservable_1.ConnectableObservable(this, subjectFactory) :
	        new MulticastObservable_1.MulticastObservable(this, subjectFactory, selector);
	}
	exports.multicast = multicast;
	//# sourceMappingURL=multicast.js.map

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(12);
	var ConnectableObservable_1 = __webpack_require__(31);
	var MulticastObservable = (function (_super) {
	    __extends(MulticastObservable, _super);
	    function MulticastObservable(source, subjectFactory, selector) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	        this.selector = selector;
	    }
	    MulticastObservable.prototype._subscribe = function (subscriber) {
	        var _a = this, selector = _a.selector, source = _a.source;
	        var connectable = new ConnectableObservable_1.ConnectableObservable(source, this.subjectFactory);
	        var subscription = selector(connectable).subscribe(subscriber);
	        subscription.add(connectable.connect());
	        return subscription;
	    };
	    return MulticastObservable;
	}(Observable_1.Observable));
	exports.MulticastObservable = MulticastObservable;
	//# sourceMappingURL=MulticastObservable.js.map

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subject_1 = __webpack_require__(32);
	var Observable_1 = __webpack_require__(12);
	var Subscriber_1 = __webpack_require__(16);
	var Subscription_1 = __webpack_require__(18);
	/**
	 * @class ConnectableObservable<T>
	 */
	var ConnectableObservable = (function (_super) {
	    __extends(ConnectableObservable, _super);
	    function ConnectableObservable(source, subjectFactory) {
	        _super.call(this);
	        this.source = source;
	        this.subjectFactory = subjectFactory;
	        this._refCount = 0;
	    }
	    ConnectableObservable.prototype._subscribe = function (subscriber) {
	        return this.getSubject().subscribe(subscriber);
	    };
	    ConnectableObservable.prototype.getSubject = function () {
	        var subject = this._subject;
	        if (!subject || subject.isStopped) {
	            this._subject = this.subjectFactory();
	        }
	        return this._subject;
	    };
	    ConnectableObservable.prototype.connect = function () {
	        var connection = this._connection;
	        if (!connection) {
	            connection = this._connection = new Subscription_1.Subscription();
	            connection.add(this.source
	                .subscribe(new ConnectableSubscriber(this.getSubject(), this)));
	            if (connection.closed) {
	                this._connection = null;
	                connection = Subscription_1.Subscription.EMPTY;
	            }
	            else {
	                this._connection = connection;
	            }
	        }
	        return connection;
	    };
	    ConnectableObservable.prototype.refCount = function () {
	        return this.lift(new RefCountOperator(this));
	    };
	    return ConnectableObservable;
	}(Observable_1.Observable));
	exports.ConnectableObservable = ConnectableObservable;
	var ConnectableSubscriber = (function (_super) {
	    __extends(ConnectableSubscriber, _super);
	    function ConnectableSubscriber(destination, connectable) {
	        _super.call(this, destination);
	        this.connectable = connectable;
	    }
	    ConnectableSubscriber.prototype._error = function (err) {
	        this._unsubscribe();
	        _super.prototype._error.call(this, err);
	    };
	    ConnectableSubscriber.prototype._complete = function () {
	        this._unsubscribe();
	        _super.prototype._complete.call(this);
	    };
	    ConnectableSubscriber.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        if (connectable) {
	            this.connectable = null;
	            var connection = connectable._connection;
	            connectable._refCount = 0;
	            connectable._subject = null;
	            connectable._connection = null;
	            if (connection) {
	                connection.unsubscribe();
	            }
	        }
	    };
	    return ConnectableSubscriber;
	}(Subject_1.SubjectSubscriber));
	var RefCountOperator = (function () {
	    function RefCountOperator(connectable) {
	        this.connectable = connectable;
	    }
	    RefCountOperator.prototype.call = function (subscriber, source) {
	        var connectable = this.connectable;
	        connectable._refCount++;
	        var refCounter = new RefCountSubscriber(subscriber, connectable);
	        var subscription = source._subscribe(refCounter);
	        if (!refCounter.closed) {
	            refCounter.connection = connectable.connect();
	        }
	        return subscription;
	    };
	    return RefCountOperator;
	}());
	var RefCountSubscriber = (function (_super) {
	    __extends(RefCountSubscriber, _super);
	    function RefCountSubscriber(destination, connectable) {
	        _super.call(this, destination);
	        this.connectable = connectable;
	    }
	    RefCountSubscriber.prototype._unsubscribe = function () {
	        var connectable = this.connectable;
	        if (!connectable) {
	            this.connection = null;
	            return;
	        }
	        this.connectable = null;
	        var refCount = connectable._refCount;
	        if (refCount <= 0) {
	            this.connection = null;
	            return;
	        }
	        connectable._refCount = refCount - 1;
	        if (refCount > 1) {
	            this.connection = null;
	            return;
	        }
	        ///
	        // Compare the local RefCountSubscriber's connection Subscription to the
	        // connection Subscription on the shared ConnectableObservable. In cases
	        // where the ConnectableObservable source synchronously emits values, and
	        // the RefCountSubscriber's dowstream Observers synchronously unsubscribe,
	        // execution continues to here before the RefCountOperator has a chance to
	        // supply the RefCountSubscriber with the shared connection Subscription.
	        // For example:
	        // ```
	        // Observable.range(0, 10)
	        //   .publish()
	        //   .refCount()
	        //   .take(5)
	        //   .subscribe();
	        // ```
	        // In order to account for this case, RefCountSubscriber should only dispose
	        // the ConnectableObservable's shared connection Subscription if the
	        // connection Subscription exists, *and* either:
	        //   a. RefCountSubscriber doesn't have a reference to the shared connection
	        //      Subscription yet, or,
	        //   b. RefCountSubscriber's connection Subscription reference is identical
	        //      to the shared connection Subscription
	        ///
	        var connection = this.connection;
	        var sharedConnection = connectable._connection;
	        this.connection = null;
	        if (sharedConnection && (!connection || sharedConnection === connection)) {
	            sharedConnection.unsubscribe();
	        }
	    };
	    return RefCountSubscriber;
	}(Subscriber_1.Subscriber));
	//# sourceMappingURL=ConnectableObservable.js.map

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Observable_1 = __webpack_require__(12);
	var Subscriber_1 = __webpack_require__(16);
	var Subscription_1 = __webpack_require__(18);
	var ObjectUnsubscribedError_1 = __webpack_require__(33);
	var SubjectSubscription_1 = __webpack_require__(34);
	var rxSubscriber_1 = __webpack_require__(25);
	/**
	 * @class SubjectSubscriber<T>
	 */
	var SubjectSubscriber = (function (_super) {
	    __extends(SubjectSubscriber, _super);
	    function SubjectSubscriber(destination) {
	        _super.call(this, destination);
	        this.destination = destination;
	    }
	    return SubjectSubscriber;
	}(Subscriber_1.Subscriber));
	exports.SubjectSubscriber = SubjectSubscriber;
	/**
	 * @class Subject<T>
	 */
	var Subject = (function (_super) {
	    __extends(Subject, _super);
	    function Subject() {
	        _super.call(this);
	        this.observers = [];
	        this.closed = false;
	        this.isStopped = false;
	        this.hasError = false;
	        this.thrownError = null;
	    }
	    Subject.prototype[rxSubscriber_1.$$rxSubscriber] = function () {
	        return new SubjectSubscriber(this);
	    };
	    Subject.prototype.lift = function (operator) {
	        var subject = new AnonymousSubject(this, this);
	        subject.operator = operator;
	        return subject;
	    };
	    Subject.prototype.next = function (value) {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        if (!this.isStopped) {
	            var observers = this.observers;
	            var len = observers.length;
	            var copy = observers.slice();
	            for (var i = 0; i < len; i++) {
	                copy[i].next(value);
	            }
	        }
	    };
	    Subject.prototype.error = function (err) {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        this.hasError = true;
	        this.thrownError = err;
	        this.isStopped = true;
	        var observers = this.observers;
	        var len = observers.length;
	        var copy = observers.slice();
	        for (var i = 0; i < len; i++) {
	            copy[i].error(err);
	        }
	        this.observers.length = 0;
	    };
	    Subject.prototype.complete = function () {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        this.isStopped = true;
	        var observers = this.observers;
	        var len = observers.length;
	        var copy = observers.slice();
	        for (var i = 0; i < len; i++) {
	            copy[i].complete();
	        }
	        this.observers.length = 0;
	    };
	    Subject.prototype.unsubscribe = function () {
	        this.isStopped = true;
	        this.closed = true;
	        this.observers = null;
	    };
	    Subject.prototype._subscribe = function (subscriber) {
	        if (this.closed) {
	            throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
	        }
	        else if (this.hasError) {
	            subscriber.error(this.thrownError);
	            return Subscription_1.Subscription.EMPTY;
	        }
	        else if (this.isStopped) {
	            subscriber.complete();
	            return Subscription_1.Subscription.EMPTY;
	        }
	        else {
	            this.observers.push(subscriber);
	            return new SubjectSubscription_1.SubjectSubscription(this, subscriber);
	        }
	    };
	    Subject.prototype.asObservable = function () {
	        var observable = new Observable_1.Observable();
	        observable.source = this;
	        return observable;
	    };
	    Subject.create = function (destination, source) {
	        return new AnonymousSubject(destination, source);
	    };
	    return Subject;
	}(Observable_1.Observable));
	exports.Subject = Subject;
	/**
	 * @class AnonymousSubject<T>
	 */
	var AnonymousSubject = (function (_super) {
	    __extends(AnonymousSubject, _super);
	    function AnonymousSubject(destination, source) {
	        _super.call(this);
	        this.destination = destination;
	        this.source = source;
	    }
	    AnonymousSubject.prototype.next = function (value) {
	        var destination = this.destination;
	        if (destination && destination.next) {
	            destination.next(value);
	        }
	    };
	    AnonymousSubject.prototype.error = function (err) {
	        var destination = this.destination;
	        if (destination && destination.error) {
	            this.destination.error(err);
	        }
	    };
	    AnonymousSubject.prototype.complete = function () {
	        var destination = this.destination;
	        if (destination && destination.complete) {
	            this.destination.complete();
	        }
	    };
	    AnonymousSubject.prototype._subscribe = function (subscriber) {
	        var source = this.source;
	        if (source) {
	            return this.source.subscribe(subscriber);
	        }
	        else {
	            return Subscription_1.Subscription.EMPTY;
	        }
	    };
	    return AnonymousSubject;
	}(Subject));
	exports.AnonymousSubject = AnonymousSubject;
	//# sourceMappingURL=Subject.js.map

/***/ },
/* 33 */
/***/ function(module, exports) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	/**
	 * An error thrown when an action is invalid because the object has been
	 * unsubscribed.
	 *
	 * @see {@link Subject}
	 * @see {@link BehaviorSubject}
	 *
	 * @class ObjectUnsubscribedError
	 */
	var ObjectUnsubscribedError = (function (_super) {
	    __extends(ObjectUnsubscribedError, _super);
	    function ObjectUnsubscribedError() {
	        var err = _super.call(this, 'object unsubscribed');
	        this.name = err.name = 'ObjectUnsubscribedError';
	        this.stack = err.stack;
	        this.message = err.message;
	    }
	    return ObjectUnsubscribedError;
	}(Error));
	exports.ObjectUnsubscribedError = ObjectUnsubscribedError;
	//# sourceMappingURL=ObjectUnsubscribedError.js.map

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var Subscription_1 = __webpack_require__(18);
	/**
	 * We need this JSDoc comment for affecting ESDoc.
	 * @ignore
	 * @extends {Ignored}
	 */
	var SubjectSubscription = (function (_super) {
	    __extends(SubjectSubscription, _super);
	    function SubjectSubscription(subject, subscriber) {
	        _super.call(this);
	        this.subject = subject;
	        this.subscriber = subscriber;
	        this.closed = false;
	    }
	    SubjectSubscription.prototype.unsubscribe = function () {
	        if (this.closed) {
	            return;
	        }
	        this.closed = true;
	        var subject = this.subject;
	        var observers = subject.observers;
	        this.subject = null;
	        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
	            return;
	        }
	        var subscriberIndex = observers.indexOf(this.subscriber);
	        if (subscriberIndex !== -1) {
	            observers.splice(subscriberIndex, 1);
	        }
	    };
	    return SubjectSubscription;
	}(Subscription_1.Subscription));
	exports.SubjectSubscription = SubjectSubscription;
	//# sourceMappingURL=SubjectSubscription.js.map

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(36);

	/**
	 * Performs a deep comparison between two values to determine if they are
	 * equivalent.
	 *
	 * **Note:** This method supports comparing arrays, array buffers, booleans,
	 * date objects, error objects, maps, numbers, `Object` objects, regexes,
	 * sets, strings, symbols, and typed arrays. `Object` objects are compared
	 * by their own, not inherited, enumerable properties. Functions and DOM
	 * nodes are **not** supported.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.isEqual(object, other);
	 * // => true
	 *
	 * object === other;
	 * // => false
	 */
	function isEqual(value, other) {
	  return baseIsEqual(value, other);
	}

	module.exports = isEqual;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(37),
	    isObject = __webpack_require__(56),
	    isObjectLike = __webpack_require__(97);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(38),
	    equalArrays = __webpack_require__(79),
	    equalByTag = __webpack_require__(84),
	    equalObjects = __webpack_require__(89),
	    getTag = __webpack_require__(104),
	    isArray = __webpack_require__(98),
	    isHostObject = __webpack_require__(57),
	    isTypedArray = __webpack_require__(110);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(39),
	    stackClear = __webpack_require__(47),
	    stackDelete = __webpack_require__(48),
	    stackGet = __webpack_require__(49),
	    stackHas = __webpack_require__(50),
	    stackSet = __webpack_require__(51);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var listCacheClear = __webpack_require__(40),
	    listCacheDelete = __webpack_require__(41),
	    listCacheGet = __webpack_require__(44),
	    listCacheHas = __webpack_require__(45),
	    listCacheSet = __webpack_require__(46);

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	module.exports = ListCache;


/***/ },
/* 40 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	module.exports = listCacheClear;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(42);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	module.exports = listCacheDelete;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(43);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 43 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(42);

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	module.exports = listCacheGet;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(42);

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	module.exports = listCacheHas;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(42);

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	module.exports = listCacheSet;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(39);

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	module.exports = stackClear;


/***/ },
/* 48 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	module.exports = stackDelete;


/***/ },
/* 49 */
/***/ function(module, exports) {

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var ListCache = __webpack_require__(39),
	    Map = __webpack_require__(52),
	    MapCache = __webpack_require__(64);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(53),
	    root = __webpack_require__(60);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsNative = __webpack_require__(54),
	    getValue = __webpack_require__(63);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(55),
	    isHostObject = __webpack_require__(57),
	    isMasked = __webpack_require__(58),
	    isObject = __webpack_require__(56),
	    toSource = __webpack_require__(62);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = baseIsNative;


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(56);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 56 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 57 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var coreJsData = __webpack_require__(59);

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	module.exports = isMasked;


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(60);

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	module.exports = coreJsData;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var freeGlobal = __webpack_require__(61);

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	module.exports = root;


/***/ },
/* 61 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

	module.exports = freeGlobal;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 62 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var funcProto = Function.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 63 */
/***/ function(module, exports) {

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	module.exports = getValue;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var mapCacheClear = __webpack_require__(65),
	    mapCacheDelete = __webpack_require__(73),
	    mapCacheGet = __webpack_require__(76),
	    mapCacheHas = __webpack_require__(77),
	    mapCacheSet = __webpack_require__(78);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	module.exports = MapCache;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(66),
	    ListCache = __webpack_require__(39),
	    Map = __webpack_require__(52);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	module.exports = mapCacheClear;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var hashClear = __webpack_require__(67),
	    hashDelete = __webpack_require__(69),
	    hashGet = __webpack_require__(70),
	    hashHas = __webpack_require__(71),
	    hashSet = __webpack_require__(72);

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	module.exports = Hash;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(68);

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	module.exports = hashClear;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(53);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	module.exports = hashDelete;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(68);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(68);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	module.exports = hashHas;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(68);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	module.exports = hashSet;


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(74);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	module.exports = mapCacheDelete;


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var isKeyable = __webpack_require__(75);

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	module.exports = getMapData;


/***/ },
/* 75 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(74);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	module.exports = mapCacheGet;


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(74);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	module.exports = mapCacheHas;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var getMapData = __webpack_require__(74);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	module.exports = mapCacheSet;


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var SetCache = __webpack_require__(80),
	    arraySome = __webpack_require__(83);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = (bitmask & UNORDERED_COMPARE_FLAG) ? new SetCache : undefined;

	  stack.set(array, other);
	  stack.set(other, array);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function(othValue, othIndex) {
	            if (!seen.has(othIndex) &&
	                (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	              return seen.add(othIndex);
	            }
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(64),
	    setCacheAdd = __webpack_require__(81),
	    setCacheHas = __webpack_require__(82);

	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.__data__ = new MapCache;
	  while (++index < length) {
	    this.add(values[index]);
	  }
	}

	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;

	module.exports = SetCache;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}

	module.exports = setCacheAdd;


/***/ },
/* 82 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}

	module.exports = setCacheHas;


/***/ },
/* 83 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(85),
	    Uint8Array = __webpack_require__(86),
	    eq = __webpack_require__(43),
	    equalArrays = __webpack_require__(79),
	    mapToArray = __webpack_require__(87),
	    setToArray = __webpack_require__(88);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	    case numberTag:
	      // Coerce booleans to `1` or `0` and dates to milliseconds.
	      // Invalid dates are coerced to `NaN`.
	      return eq(+object, +other);

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;

	      // Recursively compare objects (susceptible to call stack limits).
	      stack.set(object, other);
	      var result = equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	      stack['delete'](object);
	      return result;

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(60);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(60);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(90);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked && stack.get(other)) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	  stack.set(other, object);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  stack['delete'](other);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(91),
	    baseKeys = __webpack_require__(100),
	    isArrayLike = __webpack_require__(95);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	module.exports = keys;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(92),
	    isArguments = __webpack_require__(93),
	    isArray = __webpack_require__(98),
	    isIndex = __webpack_require__(99);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = arrayLikeKeys;


/***/ },
/* 92 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(94);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(95),
	    isObjectLike = __webpack_require__(97);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(55),
	    isLength = __webpack_require__(96);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 96 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 97 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 98 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 99 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var isPrototype = __webpack_require__(101),
	    nativeKeys = __webpack_require__(102);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeys;


/***/ },
/* 101 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var overArg = __webpack_require__(103);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = overArg(Object.keys, Object);

	module.exports = nativeKeys;


/***/ },
/* 103 */
/***/ function(module, exports) {

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	module.exports = overArg;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(105),
	    Map = __webpack_require__(52),
	    Promise = __webpack_require__(106),
	    Set = __webpack_require__(107),
	    WeakMap = __webpack_require__(108),
	    baseGetTag = __webpack_require__(109),
	    toSource = __webpack_require__(62);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(53),
	    root = __webpack_require__(60);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(53),
	    root = __webpack_require__(60);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(53),
	    root = __webpack_require__(60);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(53),
	    root = __webpack_require__(60);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 109 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	module.exports = baseGetTag;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsTypedArray = __webpack_require__(111),
	    baseUnary = __webpack_require__(112),
	    nodeUtil = __webpack_require__(113);

	/* Node.js helper references. */
	var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

	module.exports = isTypedArray;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(96),
	    isObjectLike = __webpack_require__(97);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * The base implementation of `_.isTypedArray` without Node.js optimizations.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
	 */
	function baseIsTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = baseIsTypedArray;


/***/ },
/* 112 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.unary` without support for storing metadata.
	 *
	 * @private
	 * @param {Function} func The function to cap arguments for.
	 * @returns {Function} Returns the new capped function.
	 */
	function baseUnary(func) {
	  return function(value) {
	    return func(value);
	  };
	}

	module.exports = baseUnary;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(61);

	/** Detect free variable `exports`. */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    return freeProcess && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ },
/* 114 */
/***/ function(module, exports) {

	// mutationobserver-shim v0.3.1 (github.com/megawac/MutationObserver.js)
	// Authors: Graeme Yeates (github.com/megawac) 
	window.MutationObserver=window.MutationObserver||window.WebKitMutationObserver||function(r){function w(a){this.g=[];this.k=a}function H(a){(function c(){var d=a.takeRecords();d.length&&a.k(d,a);a.f=setTimeout(c,w._period)})()}function t(a){var b={type:null,target:null,addedNodes:[],removedNodes:[],previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null},c;for(c in a)b[c]!==r&&a[c]!==r&&(b[c]=a[c]);return b}function I(a,b){var c=B(a,b);return function(d){var g=
	d.length,n;b.a&&c.a&&A(d,a,c.a,b.d);if(b.b||b.e)n=J(d,a,c,b);if(n||d.length!==g)c=B(a,b)}}function A(a,b,c,d){for(var g={},n=b.attributes,h,m,C=n.length;C--;)h=n[C],m=h.name,d&&d[m]===r||(h.value!==c[m]&&a.push(t({type:"attributes",target:b,attributeName:m,oldValue:c[m],attributeNamespace:h.namespaceURI})),g[m]=!0);for(m in c)g[m]||a.push(t({target:b,type:"attributes",attributeName:m,oldValue:c[m]}))}function J(a,b,c,d){function g(b,c,g,h,y){var r=b.length-1;y=-~((r-y)/2);for(var f,k,e;e=b.pop();)f=
	g[e.h],k=h[e.i],d.b&&y&&Math.abs(e.h-e.i)>=r&&(a.push(t({type:"childList",target:c,addedNodes:[f],removedNodes:[f],nextSibling:f.nextSibling,previousSibling:f.previousSibling})),y--),d.a&&k.a&&A(a,f,k.a,d.d),d.c&&3===f.nodeType&&f.nodeValue!==k.c&&a.push(t({type:"characterData",target:f})),d.e&&n(f,k)}function n(b,c){for(var x=b.childNodes,p=c.b,y=x.length,w=p?p.length:0,f,k,e,l,u,z=0,v=0,q=0;v<y||q<w;)l=x[v],u=(e=p[q])&&e.j,l===u?(d.a&&e.a&&A(a,l,e.a,d.d),d.c&&e.c!==r&&l.nodeValue!==e.c&&a.push(t({type:"characterData",
	target:l})),k&&g(k,b,x,p,z),d.e&&(l.childNodes.length||e.b&&e.b.length)&&n(l,e),v++,q++):(h=!0,f||(f={},k=[]),l&&(f[e=D(l)]||(f[e]=!0,-1===(e=E(p,l,q,"j"))?d.b&&(a.push(t({type:"childList",target:b,addedNodes:[l],nextSibling:l.nextSibling,previousSibling:l.previousSibling})),z++):k.push({h:v,i:e})),v++),u&&u!==x[v]&&(f[e=D(u)]||(f[e]=!0,-1===(e=E(x,u,v))?d.b&&(a.push(t({type:"childList",target:c.j,removedNodes:[u],nextSibling:p[q+1],previousSibling:p[q-1]})),z--):k.push({h:e,i:q})),q++));k&&g(k,b,
	x,p,z)}var h;n(b,c);return h}function B(a,b){var c=!0;return function g(a){var h={j:a};!b.c||3!==a.nodeType&&8!==a.nodeType?(b.a&&c&&1===a.nodeType&&(h.a=F(a.attributes,function(a,c){if(!b.d||b.d[c.name])a[c.name]=c.value;return a})),c&&(b.b||b.c||b.a&&b.e)&&(h.b=K(a.childNodes,g)),c=b.e):h.c=a.nodeValue;return h}(a)}function D(a){try{return a.id||(a.mo_id=a.mo_id||G++)}catch(b){try{return a.nodeValue}catch(c){return G++}}}function K(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d,a);return c}
	function F(a,b){for(var c={},d=0;d<a.length;d++)c=b(c,a[d],d,a);return c}function E(a,b,c,d){for(;c<a.length;c++)if((d?a[c][d]:a[c])===b)return c;return-1}w._period=30;w.prototype={observe:function(a,b){for(var c={a:!!(b.attributes||b.attributeFilter||b.attributeOldValue),b:!!b.childList,e:!!b.subtree,c:!(!b.characterData&&!b.characterDataOldValue)},d=this.g,g=0;g<d.length;g++)d[g].m===a&&d.splice(g,1);b.attributeFilter&&(c.d=F(b.attributeFilter,function(a,b){a[b]=!0;return a}));d.push({m:a,l:I(a,
	c)});this.f||H(this)},takeRecords:function(){for(var a=[],b=this.g,c=0;c<b.length;c++)b[c].l(a);return a},disconnect:function(){this.g=[];clearTimeout(this.f);this.f=null}};var G=1;return w}(void 0);


/***/ },
/* 115 */
/***/ function(module, exports) {

	/*
	 * classList.js: Cross-browser full element.classList implementation.
	 * 1.1.20150312
	 *
	 * By Eli Grey, http://eligrey.com
	 * License: Dedicated to the public domain.
	 *   See https://github.com/eligrey/classList.js/blob/master/LICENSE.md
	 */

	/*global self, document, DOMException */

	/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */

	if ("document" in self) {

	// Full polyfill for browsers with no classList support
	// Including IE < Edge missing SVGElement.classList
	if (!("classList" in document.createElement("_")) 
		|| document.createElementNS && !("classList" in document.createElementNS("http://www.w3.org/2000/svg","g"))) {

	(function (view) {

	"use strict";

	if (!('Element' in view)) return;

	var
		  classListProp = "classList"
		, protoProp = "prototype"
		, elemCtrProto = view.Element[protoProp]
		, objCtr = Object
		, strTrim = String[protoProp].trim || function () {
			return this.replace(/^\s+|\s+$/g, "");
		}
		, arrIndexOf = Array[protoProp].indexOf || function (item) {
			var
				  i = 0
				, len = this.length
			;
			for (; i < len; i++) {
				if (i in this && this[i] === item) {
					return i;
				}
			}
			return -1;
		}
		// Vendors: please allow content code to instantiate DOMExceptions
		, DOMEx = function (type, message) {
			this.name = type;
			this.code = DOMException[type];
			this.message = message;
		}
		, checkTokenAndGetIndex = function (classList, token) {
			if (token === "") {
				throw new DOMEx(
					  "SYNTAX_ERR"
					, "An invalid or illegal string was specified"
				);
			}
			if (/\s/.test(token)) {
				throw new DOMEx(
					  "INVALID_CHARACTER_ERR"
					, "String contains an invalid character"
				);
			}
			return arrIndexOf.call(classList, token);
		}
		, ClassList = function (elem) {
			var
				  trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
				, classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
				, i = 0
				, len = classes.length
			;
			for (; i < len; i++) {
				this.push(classes[i]);
			}
			this._updateClassName = function () {
				elem.setAttribute("class", this.toString());
			};
		}
		, classListProto = ClassList[protoProp] = []
		, classListGetter = function () {
			return new ClassList(this);
		}
	;
	// Most DOMException implementations don't allow calling DOMException's toString()
	// on non-DOMExceptions. Error's toString() is sufficient here.
	DOMEx[protoProp] = Error[protoProp];
	classListProto.item = function (i) {
		return this[i] || null;
	};
	classListProto.contains = function (token) {
		token += "";
		return checkTokenAndGetIndex(this, token) !== -1;
	};
	classListProto.add = function () {
		var
			  tokens = arguments
			, i = 0
			, l = tokens.length
			, token
			, updated = false
		;
		do {
			token = tokens[i] + "";
			if (checkTokenAndGetIndex(this, token) === -1) {
				this.push(token);
				updated = true;
			}
		}
		while (++i < l);

		if (updated) {
			this._updateClassName();
		}
	};
	classListProto.remove = function () {
		var
			  tokens = arguments
			, i = 0
			, l = tokens.length
			, token
			, updated = false
			, index
		;
		do {
			token = tokens[i] + "";
			index = checkTokenAndGetIndex(this, token);
			while (index !== -1) {
				this.splice(index, 1);
				updated = true;
				index = checkTokenAndGetIndex(this, token);
			}
		}
		while (++i < l);

		if (updated) {
			this._updateClassName();
		}
	};
	classListProto.toggle = function (token, force) {
		token += "";

		var
			  result = this.contains(token)
			, method = result ?
				force !== true && "remove"
			:
				force !== false && "add"
		;

		if (method) {
			this[method](token);
		}

		if (force === true || force === false) {
			return force;
		} else {
			return !result;
		}
	};
	classListProto.toString = function () {
		return this.join(" ");
	};

	if (objCtr.defineProperty) {
		var classListPropDesc = {
			  get: classListGetter
			, enumerable: true
			, configurable: true
		};
		try {
			objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
		} catch (ex) { // IE 8 doesn't support enumerable:true
			if (ex.number === -0x7FF5EC54) {
				classListPropDesc.enumerable = false;
				objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
			}
		}
	} else if (objCtr[protoProp].__defineGetter__) {
		elemCtrProto.__defineGetter__(classListProp, classListGetter);
	}

	}(self));

	} else {
	// There is full or partial native classList support, so just check if we need
	// to normalize the add/remove and toggle APIs.

	(function () {
		"use strict";

		var testElement = document.createElement("_");

		testElement.classList.add("c1", "c2");

		// Polyfill for IE 10/11 and Firefox <26, where classList.add and
		// classList.remove exist but support only one argument at a time.
		if (!testElement.classList.contains("c2")) {
			var createMethod = function(method) {
				var original = DOMTokenList.prototype[method];

				DOMTokenList.prototype[method] = function(token) {
					var i, len = arguments.length;

					for (i = 0; i < len; i++) {
						token = arguments[i];
						original.call(this, token);
					}
				};
			};
			createMethod('add');
			createMethod('remove');
		}

		testElement.classList.toggle("c3", false);

		// Polyfill for IE 10 and Firefox <24, where classList.toggle does not
		// support the second argument.
		if (testElement.classList.contains("c3")) {
			var _toggle = DOMTokenList.prototype.toggle;

			DOMTokenList.prototype.toggle = function(token, force) {
				if (1 in arguments && !this.contains(token) === !force) {
					return force;
				} else {
					return _toggle.call(this, token);
				}
			};

		}

		testElement = null;
	}());

	}

	}



/***/ },
/* 116 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Polyfill for the :scope value in the querySelector and querySelectorAll functions
	 * To use it, just require this file in your codebase
	 *
	 * @example 	js
	 * require('sugarcss/js/polyfill/queryselector-scope');
	 *
	 * @see 		http://stackoverflow.com/questions/6481612/queryselector-search-immediate-children
	 */
	(function (doc, proto) {
	  try {
	    // check if browser supports :scope natively
	    doc.querySelector(':scope body');
	  } catch (err) {
	    // polyfill native methods if it doesn't
	    ['querySelector', 'querySelectorAll'].forEach(function (method) {
	      var nativ = proto[method];
	      proto[method] = function (selectors) {
	        if (/(^|,)\s*:scope/.test(selectors)) {
	          // only if selectors contains :scope
	          var id = this.id; // remember current element id
	          this.id = 'ID_' + Date.now(); // assign new unique id
	          selectors = selectors.replace(/((^|,)\s*):scope/g, '$1#' + this.id); // replace :scope with #ID
	          var result = doc[method](selectors);
	          this.id = id; // restore previous id
	          return result;
	        } else {
	          return nativ.call(this, selectors); // use native code for other selectors
	        }
	      };
	    });
	  }
	})(window.document, Element.prototype);

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = mutationObservable;

	var _isEqual2 = __webpack_require__(35);

	var _isEqual3 = _interopRequireDefault(_isEqual2);

	__webpack_require__(27);

	var _Observable = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Observe mutations on an HTMLElement and get them through the observable subscription
	 *
	 * @name 		mutationObservable
	 * @param 		{HTMLElement} 					target 		The element to observe
	 * @param 		{MutationObserverInit} 			settings 	The mutation observer settings
	 * @return 		{Observable} 								The mutation observable
	 *
	 * @example  	js
	 * import mutationObservable from 'sugarcss/js/dom/mutationObservable'
	 * mutationObservable(myCoolHTMLElement).subscribe((mutation) => {
	 * 		// do something with the mutation
	 * });
	 *
	 * @see 		https://developer.mozilla.org/en/docs/Web/API/MutationObserver
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */

	var selectorsStack = [];

	// save nodes that's have a mutation observer on it
	var nodesStack = new Map();

	function mutationObservable(target) {
		var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


		// detect if already exist
		var currentObservers = nodesStack.get(target);
		if (currentObservers) {
			// loop on current observers
			for (var i = 0; i < currentObservers.length; i++) {
				var _obs = currentObservers[i];
				if ((0, _isEqual3.default)(_obs.settings, settings)) {
					// return the same observer
					return _obs.observable;
				}
			}
		} else {
			currentObservers = [];
		}

		// we don't have any observer for now
		// so create it
		var observable = new _Observable.Observable(function (observer) {

			// create a new observer
			var mutationObserver = new MutationObserver(function (mutations) {
				// loop on mutations
				mutations.forEach(function (mutation) {
					// push mutation
					observer.next(mutation);
				});
			});
			mutationObserver.observe(target, settings);

			// unsubscribe routine
			return function () {
				mutationObserver.disconnect();
			};
		}).share();

		// save the new observable into the stack
		var obs = {
			settings: settings,
			observable: observable
		};
		// add the observer into the stack
		currentObservers.push(obs);
		// save into the stack
		nodesStack.set(target, currentObservers);

		// return the observable
		return observable;
	}

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (destination) {
		destination.once = _once2.default;
		destination.visible = _visible2.default;
		destination.inViewport = _inViewport2.default;
		destination.group = _group2.default;
		destination.notIn = _notIn2.default;
		destination.mouseover = _mouseover2.default;
		destination.stack = _stack2.default;
	};

	var _once = __webpack_require__(119);

	var _once2 = _interopRequireDefault(_once);

	var _visible = __webpack_require__(120);

	var _visible2 = _interopRequireDefault(_visible);

	var _inViewport = __webpack_require__(124);

	var _inViewport2 = _interopRequireDefault(_inViewport);

	var _group = __webpack_require__(129);

	var _group2 = _interopRequireDefault(_group);

	var _notIn = __webpack_require__(130);

	var _notIn2 = _interopRequireDefault(_notIn);

	var _mouseover = __webpack_require__(133);

	var _mouseover2 = _interopRequireDefault(_mouseover);

	var _stack = __webpack_require__(134);

	var _stack2 = _interopRequireDefault(_stack);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	;

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function () {
		var _this = this;

		var observable = new _Observable.Observable(function (subscriber) {
			var source = _this;
			observable._settings = source._settings;

			// subscribe to the source
			var subscription = source.subscribe(function (elm) {
				try {
					// check if the element has already been getted for this selector
					if (!elm._querySelectorLiveOnce) elm._querySelectorLiveOnce = {};
					if (!elm._querySelectorLiveOnce[source._settings.selector]) {
						// push the element in subscriber
						subscriber.next(elm);
						// set that we have already selector this element
						elm._querySelectorLiveOnce[source._settings.selector] = true;
					}
				} catch (e) {
					subscriber.error(e);
				}
			}, function (error) {
				return subscriber.error(error);
			}, function () {
				return subscriber.complete();
			});

			// make sure we return the subscription
			return subscription;
		});

		// inject operators
		(0, _injectOperators2.default)(observable);

		// return the observable
		return observable;
	};

	var _Observable = __webpack_require__(12);

	var _injectOperators = __webpack_require__(118);

	var _injectOperators2 = _interopRequireDefault(_injectOperators);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function () {
		var _this = this;

		var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		var observable = new _Observable.Observable(function (subscriber) {
			var source = _this;
			observable._settings = source._settings;

			// subscribe to the source
			var subscription = source.subscribe(function (elm) {
				try {
					// if is a callback,
					// mean that we do not touch
					// the current stream
					if (cb) {
						// pass the element downward directly
						subscriber.next(elm);
					}

					// wait until the element is visible
					(0, _whenVisible2.default)(elm).then(function () {
						// if is a callback,
						// use it
						if (cb) {
							cb(elm);
						} else {
							// pass the element downward
							subscriber.next(elm);
						}
					});
				} catch (e) {
					subscriber.error(e);
				}
			}, function (error) {
				return subscriber.error(error);
			}, function () {
				return subscriber.complete();
			});

			// make sure we return the subscription
			return subscription;
		});

		// inject operators
		(0, _injectOperators2.default)(observable);

		// return observable
		return observable;
	};

	var _Observable = __webpack_require__(12);

	var _whenVisible = __webpack_require__(121);

	var _whenVisible2 = _interopRequireDefault(_whenVisible);

	var _injectOperators = __webpack_require__(118);

	var _injectOperators2 = _interopRequireDefault(_injectOperators);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	;

/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = whenVisible;

	var _isVisible = __webpack_require__(122);

	var _isVisible2 = _interopRequireDefault(_isVisible);

	var _closestNotVisible = __webpack_require__(123);

	var _closestNotVisible2 = _interopRequireDefault(_closestNotVisible);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Monitor an HTMLElement to be notified when it is visible
	 *
	 * @name 		whenVisible
	 * @param 		{HTMLElement} 				elm 		The element to monitor
	 * @param 		{Function} 					[cb=null] 	An optional callback to call when the element is visible
	 * @return 		(Promise) 								The promise that will be resolved when the element is visible
	 *
	 * @example 	js
	 * import whenVisible from 'sugarcss/js/dom/whenVisible'
	 * whenVisible(myCoolHTMLElement).then((elm) => {
	 * 		// do something with your element that is now visible
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function whenVisible(elm) {
		var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		return new Promise(function (resolve, reject) {

			// variables
			var isSelfVisible = false,
			    areParentsVisible = false,
			    closestNotVisible = null,
			    selfObserver = null,
			    parentObserver = null;

			var _cb = function _cb() {
				if (isSelfVisible && areParentsVisible) {
					// process callbacks
					if (cb) cb(elm);
					resolve(elm);
					// remove the event listeners
					elm.removeEventListener('transitionend', _eventCb);
					elm.removeEventListener('animationstart', _eventCb);
					elm.removeEventListener('animationend', _eventCb);
					// remove the event listeners
					if (closestNotVisible) {
						closestNotVisible.removeEventListener('transitionend', _eventCb);
						closestNotVisible.removeEventListener('animationstart', _eventCb);
						closestNotVisible.removeEventListener('animationend', _eventCb);
					}
				}
			};

			// function called on each transitionend, start, etc...
			var _eventCb = function _eventCb(e) {
				// wait just a little time to check again
				setTimeout(function () {
					if (e.target === elm) {
						if ((0, _isVisible2.default)(elm)) {
							isSelfVisible = true;
							if (selfObserver && selfObserver.disconnect) {
								selfObserver.disconnect();
							}
							// remove the event listeners
							elm.removeEventListener('transitionend', _eventCb);
							elm.removeEventListener('animationstart', _eventCb);
							elm.removeEventListener('animationend', _eventCb);
						}
					} else if (e.target === closestNotVisible) {
						if ((0, _isVisible2.default)(closestNotVisible)) {
							areParentsVisible = true;
							if (parentObserver && parentObserver.disconnect) {
								parentObserver.disconnect();
							}
							// remove the event listeners
							closestNotVisible.removeEventListener('transitionend', _eventCb);
							closestNotVisible.removeEventListener('animationstart', _eventCb);
							closestNotVisible.removeEventListener('animationend', _eventCb);
						}
					}
					// callback
					_cb();
				});
			};

			// check if element itself is not visible
			if (!(0, _isVisible2.default)(elm)) {
				selfObserver = new MutationObserver(function (mutations) {
					mutations.forEach(function (mutation) {
						// check that is the style whos changed
						if (mutation.attributeName === 'style' || mutation.attributeName === 'class') {
							// check if is visible
							if ((0, _isVisible2.default)(mutation.target)) {
								// update
								isSelfVisible = true;
								// callback
								_cb();
								// stop observe
								selfObserver.disconnect();
							}
						}
					});
				});
				selfObserver.observe(elm, { attributes: true });

				// listen for animationstart to check if the element is visible
				elm.addEventListener('animationstart', _eventCb);
				elm.addEventListener('animationend', _eventCb);
				elm.addEventListener('transitionend', _eventCb);
			} else {
				isSelfVisible = true;
			}

			// get the closest not visible element
			// if found, we monitor it to check when it is visible
			closestNotVisible = (0, _closestNotVisible2.default)(elm);
			if (closestNotVisible) {
				parentObserver = new MutationObserver(function (mutations) {
					mutations.forEach(function (mutation) {
						// check that is the style whos changed
						if (mutation.attributeName === 'style' || mutation.attributeName === 'class') {
							// check if is visible
							if ((0, _isVisible2.default)(mutation.target)) {
								// update
								areParentsVisible = true;
								// callback
								_cb();
								// stop observe
								parentObserver.disconnect();
							}
						}
					});
				});
				parentObserver.observe(closestNotVisible, { attributes: true });

				// listen for animationstart to check if the element is visible
				closestNotVisible.addEventListener('animationstart', _eventCb);
				closestNotVisible.addEventListener('animationend', _eventCb);
				closestNotVisible.addEventListener('transitionend', _eventCb);
			} else {
				areParentsVisible = true;
			}

			// callback
			_cb();
		});
	}

/***/ },
/* 122 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = isVisible;
	/**
	 * Check if the passed HTMLElement is visible or not.
	 * Visible mean that it has not an opacity of 0, not a visibility of hidden and not a display of none
	 *
	 * @name 		isVisible
	 * @param 		{HTMLElement} 				elm  		The element to check
	 * @return 		{Boolean								If the element is visible or not
	 *
	 * @example  	js
	 * import isVisible from 'sugarcss/js/dom/isVisible'
	 * if (isVisible(myCoolHTMLElement) {
	 * 		// i'm visible
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function isVisible(elm) {

	  // assume that the script tag is always visible
	  if (elm.nodeName.toLowerCase() === 'script') return true;

	  // if no offset parent
	  // mean that the element is not visible
	  // if (elm.offsetParent === null) return false;

	  // get style
	  var style = window.getComputedStyle(elm, null),
	      opacity = style['opacity'],
	      visibility = style['visibility'],
	      display = style['display'];
	  return '0' !== opacity && 'none' !== display && 'hidden' !== visibility;
	}

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = closestNotVisible;

	var _isVisible = __webpack_require__(122);

	var _isVisible2 = _interopRequireDefault(_isVisible);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Go up the dom three to find the first element that is not visible.
	 * Not visible mean that has either an opacity to 0, a visibility to hidden or a display to none
	 *
	 * @name 		closestNotVisible
	 * @param 		{HTMLElement} 					elm  		The element to start on
	 * @return 		{HTMLElement} 								The element found or null
	 *
	 * @example  	js
	 * import closestNotVisible from 'sugarcss/js/dom/closestNotVisible'
	 * const closestElm = closest(myCoolElement);
	 * if (closestElm) {
	 * 		// we have found en element is not visible
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function closestNotVisible(elm) {
	  elm = elm.parentNode;
	  while (elm && elm != document) {
	    if (!(0, _isVisible2.default)(elm)) {
	      return elm;
	    }
	    elm = elm.parentNode;
	  }
	  return false;
	}

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function () {
		var _this = this;

		var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		var observable = new _Observable.Observable(function (subscriber) {
			var source = _this;
			observable._settings = source._settings;

			// subscribe to the source
			var subscription = source.subscribe(function (elm) {
				try {

					// if is a callback,
					// mean that we do not touch
					// the current stream
					if (cb) {
						// pass the element downward directly
						subscriber.next(elm);
					}

					// wait until the element is visible
					(0, _whenInViewport2.default)(elm).then(function () {
						// if is a callback
						// use it
						if (cb) {
							cb(elm);
						} else {
							// pass the element downward
							subscriber.next(elm);
						}
					});
				} catch (e) {
					subscriber.error(e);
				}
			}, function (error) {
				return subscriber.error(error);
			}, function () {
				return subscriber.complete();
			});

			// make sure we return the subscription
			return subscription;
		});

		// inject operators
		(0, _injectOperators2.default)(observable);

		// return the observable
		return observable;
	};

	var _Observable = __webpack_require__(12);

	var _injectOperators = __webpack_require__(118);

	var _injectOperators2 = _interopRequireDefault(_injectOperators);

	var _whenInViewport = __webpack_require__(125);

	var _whenInViewport2 = _interopRequireDefault(_whenInViewport);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	;

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = whenInViewport;

	var _whenVisible = __webpack_require__(121);

	var _whenVisible2 = _interopRequireDefault(_whenVisible);

	var _isInViewport = __webpack_require__(126);

	var _isInViewport2 = _interopRequireDefault(_isInViewport);

	var _throttle = __webpack_require__(128);

	var _throttle2 = _interopRequireDefault(_throttle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Monitor an HTMLElement to be notified when it is in the viewport
	 *
	 * @name 		whenInViewport
	 * @param 		{HTMLElement} 				elm 		The element to monitor
	 * @param 		{Function} 					[cb=null] 	An optional callback to call when the element is in the viewport
	 * @return 		(Promise) 								The promise that will be resolved when the element is in the viewport
	 *
	 * @example 	js
	 * import whenInViewport from 'sugarcss/js/dom/whenInViewport'
	 * whenInViewport(myCoolHTMLElement).then((elm) => {
	 * 		// do something with your element that has entered the viewport...
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function whenInViewport(elm) {
		var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		return new Promise(function (resolve, reject) {
			var isInViewport = false,
			    isVisible = false,
			    _cb = function _cb() {
				if (isVisible && isInViewport) {
					document.removeEventListener('scroll', checkViewport);
					window.removeEventListener('resize', checkViewport);
					if (cb) cb(elm);
					resolve(elm);
				}
			};
			var checkViewport = (0, _throttle2.default)(function (e) {
				isInViewport = (0, _isInViewport2.default)(elm, { top: 50, right: 50, bottom: 50, left: 50 });
				_cb();
			}, 100);

			// detect when visible
			(0, _whenVisible2.default)(elm).then(function (elm) {
				isVisible = true;
				_cb();
			});

			// listen for resize
			document.addEventListener('scroll', checkViewport);
			window.addEventListener('resize', checkViewport);
			setTimeout(function () {
				checkViewport(null);
			});
		});
	}

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = isInViewport;

	var _getBoundingClientRect = __webpack_require__(127);

	var _getBoundingClientRect2 = _interopRequireDefault(_getBoundingClientRect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function isInViewport(elm) {
	  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { top: 0, right: 0, bottom: 0, left: 0 };


	  var rect = (0, _getBoundingClientRect2.default)(elm);
	  var wh = window.innerHeight || document.documentElement.clientHeight;
	  var ww = window.innerWidth || document.documentElement.clientWidth;
	  return rect.top - wh - offset.top <= 0 && rect.bottom + offset.bottom >= 0 && rect.left - ww - offset.left <= 0 && rect.right + offset.right >= 0;
	} /**
	   * Check if the passed HTMLElement is in the viewport or not
	   *
	   * @name 		isInViewport
	   * @param 		{HTMLElement} 				elm  		The element to insert
	   * @param 		{Object} 					offset 		An object of top, right, bottom and left offset used to detect the status
	   * @return 		{Boolean								If the element is in the viewport or not
	   *
	   * @example  	js
	   * import isInViewport from 'sugarcss/js/dom/isInViewport'
	   * if (isInViewport(myCoolHTMLElement) {
	   * 		// i'm in the viewport
	   * }
	   *
	   * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	   */

/***/ },
/* 127 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = getBoundingClientRect;
	/**
	 * Proxy to the HTMLElement.getBoundingClientRect function.
	 * This proxy make some optimisations like it store in cache the
	 * result in the element while no invalidate actions has been made
	 * like scrolling or resizing the window...
	 *
	 * @name 		closest
	 * @param 		{HTMLElement} 					elm  		The element to start on
	 * @return 		{Object} 									The bouding client rect object
	 *
	 * @example  	js
	 * import getBoundingClientRect from 'sugarcss/js/dom/getBoundingClientRect'
	 * const rect = getBoundingClientRect(myCoolHTMLElement);
	 *
	 * @see 		https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */

	var elmStack = [];
	document.addEventListener('scroll', invalidate);
	document.addEventListener('resize', invalidate);

	function invalidate() {
		elmStack.forEach(function (elm) {
			// check if the element is not in the dom anymore
			if (!elm || !elm.parentNode) {
				// remove the element from the stack
				elmStack.splice(elmStack.indexOf(elm), 1);
			} else {
				elm._sBoundingClientRect = null;
			}
		});
	}

	// export the function
	function getBoundingClientRect(elm) {

		// add the element to the stack
		if (elmStack.indexOf(elm) === -1) {
			elmStack.push(elm);
		}
		if (!elm._sBoundingClientRect) {
			elm._sBoundingClientRect = elm.getBoundingClientRect();
		}
		return elm._sBoundingClientRect;
	}

/***/ },
/* 128 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = throttle;
	/**
	 * This utils function allows you to make sure that a function that will normally be called
	 * several times, for example during a scroll event, to be called once each threshhold time
	 *
	 * @name 			throttle
	 * @example 		js
	 * const myThrottledFn = throttle(() => {
	 * 		// my function content that will be
	 * 		// executed only once each second
	 * }, 1000);
	 *
	 * document.addEventListener('scroll', (e) => {
	 * 		// call my throttled function
	 * 		myThrottledFn();
	 * });
	 *
	 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function throttle(fn, threshhold) {
	    threshhold || (threshhold = 250);
	    var last, deferTimer;
	    return function () {
	        var context = this;

	        var now = +new Date(),
	            args = arguments;
	        if (last && now < last + threshhold) {
	            // hold on to it
	            clearTimeout(deferTimer);
	            deferTimer = setTimeout(function () {
	                last = now;
	                fn.apply(context, args);
	            }, threshhold);
	        } else {
	            last = now;
	            fn.apply(context, args);
	        }
	    };
	}

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function () {
		var _this = this;

		var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		var observable = new _Observable.Observable(function (subscriber) {
			var source = _this;
			observable._settings = source._settings;
			var timeout = null;
			var stack = [];

			// subscribe to the source
			var subscription = source.subscribe(function (elm) {

				// if is a callback,
				// mean that we do not touch
				// the current stream
				if (cb) {
					// pass the element downward directly
					subscriber.next(elm);
				}

				// add the element to stack
				stack.push(elm);
				// clear the timeout
				clearTimeout(timeout);
				// set a new timeout to wait next loop to
				// send the elements into the stream
				timeout = setTimeout(function () {
					// if is a callback
					// use it
					if (cb) {
						cb(stack);
					} else {
						// send the stack downward
						subscriber.next(stack);
					}
					// clean stack
					stack = [];
				});
			}, function (error) {
				return subscriber.error(error);
			}, function () {
				return subscriber.complete();
			});

			// make sure we return the subscription
			return subscription;
		});

		// inject operators
		(0, _injectOperators2.default)(observable);

		// return the observable
		return observable;
	};

	var _Observable = __webpack_require__(12);

	var _injectOperators = __webpack_require__(118);

	var _injectOperators2 = _interopRequireDefault(_injectOperators);

	var _whenInViewport = __webpack_require__(125);

	var _whenInViewport2 = _interopRequireDefault(_whenInViewport);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	;

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function (selector) {
		var _this = this;

		var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		var observable = new _Observable.Observable(function (subscriber) {
			var source = _this;
			observable._settings = source._settings;

			// subscribe to the source
			var subscription = source.subscribe(function (elm) {

				// if is a callback,
				// mean that we do not touch
				// the current stream
				if (cb) {
					// pass the element downward directly
					subscriber.next(elm);
				}

				// check that the element is not in the particular selector
				if (!(0, _closest2.default)(elm, selector)) {
					// if is a callback
					// use it
					if (cb) {
						cb(elm);
					} else {
						// pass the element downward
						subscriber.next(elm);
					}
				}
			}, function (error) {
				return subscriber.error(error);
			}, function () {
				return subscriber.complete();
			});

			// make sure we return the subscription
			return subscription;
		});

		// inject operators
		(0, _injectOperators2.default)(observable);

		// return the observable
		return observable;
	};

	var _Observable = __webpack_require__(12);

	var _injectOperators = __webpack_require__(118);

	var _injectOperators2 = _interopRequireDefault(_injectOperators);

	var _closest = __webpack_require__(131);

	var _closest2 = _interopRequireDefault(_closest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	;

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = closest;

	var _matches = __webpack_require__(132);

	var _matches2 = _interopRequireDefault(_matches);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Go up the dom three to find the first element that matches the passed selector
	 *
	 * @name 		closest
	 * @param 		{HTMLElement} 					elm  		The element to start on
	 * @param 		{String} 						selector 	A css selector to search for
	 * @return 		{HTMLElement} 								The element found or null
	 *
	 * @example  	js
	 * import closest from 'sugarcss/js/dom/closest'
	 * const closestElm = closest(myCoolElement, '.my-cool-class');
	 * if (closestElm) {
	 * 		// we have found en element that matches the selector
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function closest(elm, selector) {
	  elm = elm.parentNode;
	  while (elm && elm != document) {
	    if ((0, _matches2.default)(elm, selector)) {
	      return elm;
	    }
	    elm = elm.parentNode;
	  }
	  return null;
	}

/***/ },
/* 132 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = matches;
	/**
	 * Polyfill for the Element.matches function
	 *
	 * @name 		matches
	 * @param 		{HTMLElement} 			elm  			The element to check
	 * @param 		{String} 				selector 		The selector to check on the element
	 * @return 		{Boolean} 								If the element match the selector or not
	 *
	 * @example  	js
	 * import matches from 'sugarcss/js/dom/matches'
	 * if (matches(myCoolHTMLElement, '.my-cool-css-selector')) {
	 * 		// the element match the selector
	 * }
	 *
	 * @see 		https://developer.mozilla.org/en/docs/Web/API/Element/matches
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function matches(el, selector) {
	  if (el.nodeName == '#comment' || el.nodeName == '#text') {
	    return false;
	  }
	  var p = Element.prototype;
	  var f = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.msMatchesSelector || function (s) {
	    return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
	  };
	  return f.call(el, selector);
	}

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function () {
		var _this = this;

		var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		var observable = new _Observable.Observable(function (subscriber) {
			var source = _this;
			observable._settings = source._settings;

			// subscribe to the source
			var subscription = source.subscribe(function (elm) {

				// if is a callback,
				// mean that we do not touch
				// the current stream
				if (cb) {
					// pass the element downward directly
					subscriber.next(elm);
				}

				var onMouseOver = function onMouseOver(e) {
					// is is a callback
					// use it
					if (cb) {
						cb(elm);
					} else {
						// send the stack downward
						subscriber.next(elm);
					}
					// remove the listener
					elm.removeEventListener('mouseover', onMouseOver);
				};

				// listen for mouseover on the element
				elm.addEventListener('mouseover', onMouseOver);
			}, function (error) {
				return subscriber.error(error);
			}, function () {
				return subscriber.complete();
			});

			// make sure we return the subscription
			return subscription;
		});

		// inject operators
		(0, _injectOperators2.default)(observable);

		// return the observable
		return observable;
	};

	var _Observable = __webpack_require__(12);

	var _injectOperators = __webpack_require__(118);

	var _injectOperators2 = _interopRequireDefault(_injectOperators);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	;

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	exports.default = function () {
		var _this = this;

		var _stack = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		var observable = new _Observable.Observable(function (subscriber) {
			var source = _this;
			observable._settings = source._settings;

			// create the stack
			var stack = _stack || [];

			// add a onNodeRemoved callback
			source._settings.settings.onNodeRemoved.push(function (elm) {
				// remove the node from the stack
				var idx = stack.indexOf(elm);
				if (idx !== -1) {
					stack.splice(idx, 1);
				}
			});

			// subscribe to the source
			var subscription = source.subscribe(function (elm) {

				// check if the elm has a next sibling
				var next = elm.nextSibling;
				if (next) {
					var idx = stack.indexOf(next);
					if (idx !== -1) {
						// add the elm just before the next sibling into the stack
						stack.splice(idx, 0, elm);
					} else {
						// insert the elm at the end
						// (would normally never happened...)
						stack.push(elm);
					}
				} else {
					// add the elm to the end
					stack.push(elm);
				}

				// if a stack is passed as argument
				// mean that we just want to fill the passed stack
				// and continue to pass downward each new elements
				if (_stack) {
					subscriber.next(elm);
				}
			}, function (error) {
				return subscriber.error(error);
			}, function () {
				return subscriber.complete();
			});

			if (!_stack) {
				// pass the stack downward
				subscriber.next(stack);
			}

			// make sure we return the subscription
			return subscription;
		});

		// inject operators
		(0, _injectOperators2.default)(observable);

		// return the observable
		return observable;
	};

	var _Observable = __webpack_require__(12);

	var _injectOperators = __webpack_require__(118);

	var _injectOperators2 = _interopRequireDefault(_injectOperators);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	;

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = domReady;

	var _stylesheetsReady = __webpack_require__(136);

	var _stylesheetsReady2 = _interopRequireDefault(_stylesheetsReady);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var neededStylesheetsStack = null; /**
	                                    * Wait that the dom is ready before resolving the promise
	                                    * If you need that some css files are loaded before considering the dom as loaded
	                                    * you can add the attribute 's-domready-dependency' on any css link tag
	                                    *
	                                    * @name 		domReady
	                                    * @param 		{Function} 		cb 			An optional callback that will be called when the dom is ready
	                                    * @return 		{Promise} 					A promise that will be resolved when the dom is ready
	                                    *
	                                    * @example  	js
	                                    * import domReady from 'sugarcss/js/dom/domReady'
	                                    * // using callback
	                                    * domReady(() => {
	                                    * 		// do something
	                                    * });
	                                    * // using promise
	                                    * domReady().then(() => {
	                                    * 		// do something
	                                    * });
	                                    *
	                                    * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	                                    */


	function _domReady() {
		var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		return new Promise(function (resolve, reject) {

			var _domReady = function _domReady() {
				if (!document.body || /(un|ing)/.test(document.readyState)) {
					setTimeout(function () {
						_domReady();
					}, 9);
				} else {

					// grab all the needed stylesheets if not already done
					if (!neededStylesheetsStack) {
						// check in dom if has some needed stylesheets
						neededStylesheetsStack = document.querySelectorAll('link[s-domready-dependency]');
					}

					if (!neededStylesheetsStack.length) {
						if (cb) cb();
						resolve();
					} else {

						(0, _stylesheetsReady2.default)(neededStylesheetsStack, function () {
							// console.log('stylesheets loaded');
							if (cb) cb();
							resolve();
						});
					}
				}
			};
			_domReady();
		});
	}

	var domReadyCallbacks = [];
	var domReadyProcess = false;
	var domIsReady = false;

	function domReady() {
		var cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;


		return new Promise(function (resolve, reject) {

			// check if the dom is already ready
			if (domIsReady) {
				if (cb) cb();
				resolve();
				return;
			}

			// add the callback to the stack
			domReadyCallbacks.push(function () {
				if (cb) cb();
				resolve();
			});

			// check if already a domReady detecting process
			if (!domReadyProcess) {
				domReadyProcess = true;
				_domReady(function () {
					// update the domIsReady
					domIsReady = true;
					// apply all the callbacks
					domReadyCallbacks.forEach(function (callback) {
						callback();
					});
				});
			}
		});
	}

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = stylesheetsReady;

	var _linkLoaded = __webpack_require__(137);

	var _linkLoaded2 = _interopRequireDefault(_linkLoaded);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Wait until all the HTMLLinkElement's are properly loaded
	 *
	 * @name 		stylesheetsReady
	 * @param 		{Array}<HTMLLinkElement> 		links 			The HTMLLinkElement tags to process
	 * @param 		{Function} 						[cb=null] 		An optional callback function to call when all the links are loaded
	 * @return 		{Promise} 										The promise that will be resolved when all the links are loaded
	 *
	 * @example 	js
	 * import stylesheetsReady from 'sugarcss/js/dom/stylesheetsReady'
	 * stylesheetsReady([
	 * 		myHTMLLinkElement1,
	 * 		myHTMLLinkElement2
	 * ]).then(() => {
	 * 		// do something when all the links are loaded
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function stylesheetsReady(links) {
		var cb = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;


		var neededStylesheetsStack = links;
		var neededStylesheetsCount = links.length;
		var loadedStylesheedsCount = 0;
		var loadedStylesheetsCallbacks = [];
		var loadedStylesheedsProcess = false;
		var stylesheetsDependenciesStatus = false;

		return new Promise(function (resolve, reject) {

			if (stylesheetsDependenciesStatus) {
				cb !== null && cb();
				resolve();
				return;
			}

			// check if has some needed stylesheeds
			if (!neededStylesheetsCount) {
				// update the stylesheetsDependenciesStatus
				stylesheetsDependenciesStatus = true;
				// no dependencies or already loaded
				cb !== null && cb();
				resolve();
				return;
			}

			// add the callback into the loaded stylesheets stack
			// add the the callback stack
			loadedStylesheetsCallbacks.push(function () {
				cb !== null && cb();
				resolve();
			});

			// check if already a process of checking for loaded
			// stylesheets
			if (!loadedStylesheedsProcess) {

				// update the status
				loadedStylesheedsProcess = true;

				if (neededStylesheetsStack.length) {
					[].forEach.call(neededStylesheetsStack, function (link) {
						// check loaded
						(0, _linkLoaded2.default)(link).then(function (link) {
							// update the loaded stylesheet count
							loadedStylesheedsCount++;
							// check if all stylesheets has been loaded
							if (loadedStylesheedsCount >= neededStylesheetsCount) {

								// update the stylesheetsDependenciesStatus
								stylesheetsDependenciesStatus = true;
								// loop on all the loadedStylesheetsCallbacks
								loadedStylesheetsCallbacks.forEach(function (callback) {
									// apply the callback
									callback();
								});
							}
						}, function (error) {
							// something goes wrong...
							console.error('The following link as not been loaded properly...', error);
						});
					});
				}
			}
		});
	}

/***/ },
/* 137 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = linkLoaded;
	/**
	 * Wait until the passed HTMLLinkElement is fully loaded
	 *
	 * @name 		linkLoaded
	 * @param 		{HTMLLinkElement} 			link  		The link tag to check the loading state
	 * @param 		{Function}					[cb=null] 	An optional callback to call
	 * @return 		{Promise} 								The promise that will be resolved
	 *
	 * @example  	js
	 * import linkLoaded from 'sugarcss/js/dom/linkLoaded'
	 * linkLoaded(myCoolHTMLLinlElement).then((link) => {
	 * 		// do something when the link is loaded
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function alreadyLoaded(link) {
		var href = link.href;
		var result = false;
		for (var i = 0; i < document.styleSheets.length; i++) {
			if (document.styleSheets[i].href && document.styleSheets[i].href.match(href)) {
				if (!document.styleSheets[i].cssRules || document.styleSheets[i].cssRules.length == 0) {
					// Fallback. There is a request for the css file, but it failed.
					break;
				}
				// the css is already loaded
				result = true;
			} else if (i == document.styleSheets.length - 1) {
				// Fallback. There is no request for the css file.
			}
		}
		return result;
	}

	function linkLoaded(link) {
		var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		return new Promise(function (resolve, reject) {
			// check if image is already loaded
			if (alreadyLoaded(link)) {
				// resolve promise
				resolve(link);
				// call the callback if exist
				callback != null && callback(link);
			} else {

				var img = document.createElement('img');

				// wait until loaded
				// console.log('CHECK LOADING', link.href);
				// we load the css into an image
				// when the image is in error more
				// that mean that the css is loaded
				img.addEventListener('error', function (e) {
					// console.log('LOADED', e);
					// resolve the promise
					resolve(link);
					// callback if exist
					callback != null && callback(link);
				});
				// listen for error
				// img.addEventListener('error', (e) => {
				// 	console.error('ERROR', e);
				// 	// reject
				// 	reject(e);
				// }, false);

				// set url
				img.src = link.href;
				// document.body.appendChild(img);
			}
		});
	}

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = undefined;

	var _customEvent = __webpack_require__(139);

	var _customEvent2 = _interopRequireDefault(_customEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _customEvent2.default;

	/**
	 * @constructor
	 * @param  		{String} 	name 		The event name
	 * @param 		{Object} 	settings 	The event settings
	 */

	/**
	 * Set if the event is cancelable or not
	 * @setting
	 * @name 		cancelable
	 * @type 		{Boolean}
	 * @default 	true
	 */

	/**
	 * Set if the event will bubble or not
	 * @setting
	 * @name 		bubbles
	 * @type 		{Boolean}
	 * @default 	true
	 */

	/**
	 * Pass an object that will be sent with the event
	 * @setting
	 * @name 		detail
	 * @type 		{Object}
	 * @default 	null
	 */
	/**
	 * @class 		SEvent
	 * Proxy class to create custom events that can be dispatched
	 * through the standard dispatch method on any HTMLElement
	 *
	 * @example 	js
	 * let myEvent = new SEvent('myCoolEvent', {
	 * 		cancelable : true,
	 * 		bubbles : false,
	 * 		detail : {
	 * 			// some datas to send with the event
	 * 		}
	 * });
	 * // dispatch the event from an HTMLElement
	 * myHTMLElement.dispatch(myEvent);
	 *
	 * @see 		https://www.npmjs.com/package/customevent
	 * @author 		Olivier Bossel<olivier.bossel@gmail.com>
	 */

/***/ },
/* 139 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var NativeCustomEvent = global.CustomEvent;

	function useNative () {
	  try {
	    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
	    return  'cat' === p.type && 'bar' === p.detail.foo;
	  } catch (e) {
	  }
	  return false;
	}

	/**
	 * Cross-browser `CustomEvent` constructor.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
	 *
	 * @public
	 */

	module.exports = useNative() ? NativeCustomEvent :

	// IE >= 9
	'function' === typeof document.createEvent ? function CustomEvent (type, params) {
	  var e = document.createEvent('CustomEvent');
	  if (params) {
	    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
	  } else {
	    e.initCustomEvent(type, false, false, void 0);
	  }
	  return e;
	} :

	// IE <= 8
	function CustomEvent (type, params) {
	  var e = document.createEventObject();
	  e.type = type;
	  if (params) {
	    e.bubbles = Boolean(params.bubbles);
	    e.cancelable = Boolean(params.cancelable);
	    e.detail = params.detail;
	  } else {
	    e.bubbles = false;
	    e.cancelable = false;
	    e.detail = void 0;
	  }
	  return e;
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = dataset;

	var _uncamelize = __webpack_require__(4);

	var _uncamelize2 = _interopRequireDefault(_uncamelize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// @TODO : delete this method and find a way to replace it by a polyfill
	function dataset(elm, key) {
		var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

		if (!elm.getAttribute) return;
		if (!value) {
			return elm.dataset[key] || getAttribute('data-' + (0, _uncamelize2.default)(key));
		} else {
			// try to set the value
			var _dataset = elm.dataset;
			if (_dataset) {
				if (elm.dataset[key]) {
					elm.dataset[key] = value;
				} else {
					// set the data through setAttribute
					elm.setAttribute('data-' + (0, _uncamelize2.default)(key), value);
				}
			} else {
				// set the data through setAttribute
				// cause no support for dataset
				elm.setAttribute('data-' + (0, _uncamelize2.default)(key), value);
			}
			// return the element
			return elm;
		}
	}

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = dispatchEvent;

	var _SEvent = __webpack_require__(138);

	var _SEvent2 = _interopRequireDefault(_SEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Helper to quickly display an event with some optional data attached to it
	 *
	 * @name 		dispatchEvent
	 * @param 		{HTMLElement} 					target  		The element to dispatch the event from
	 * @param 		{String} 						name 			The event name to dispatch
	 * @param 		{Mixed} 						data 			The data to attache to the event
	 *
	 * @example  	js
	 * import dispatchEvent from 'sugarcss/js/dom/dispatchEvent'
	 * dispatchEvent(myCoolHTMLElement, 'myCoolEventName', {
	 * 		var1 : 'value1'
	 * });
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function dispatchEvent(target, name) {
	  var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

	  // create new event
	  var e = new _SEvent2.default(name, {
	    detail: data
	  });
	  target.dispatchEvent(e);
	}

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var baseSet = __webpack_require__(143);

	/**
	 * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
	 * it's created. Arrays are created for missing index properties while objects
	 * are created for all other missing properties. Use `_.setWith` to customize
	 * `path` creation.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.set(object, 'a[0].b.c', 4);
	 * console.log(object.a[0].b.c);
	 * // => 4
	 *
	 * _.set(object, ['x', '0', 'y', 'z'], 5);
	 * console.log(object.x[0].y.z);
	 * // => 5
	 */
	function set(object, path, value) {
	  return object == null ? object : baseSet(object, path, value);
	}

	module.exports = set;


/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(144),
	    castPath = __webpack_require__(145),
	    isIndex = __webpack_require__(99),
	    isKey = __webpack_require__(151),
	    isObject = __webpack_require__(56),
	    toKey = __webpack_require__(152);

	/**
	 * The base implementation of `_.set`.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {Array|string} path The path of the property to set.
	 * @param {*} value The value to set.
	 * @param {Function} [customizer] The function to customize path creation.
	 * @returns {Object} Returns `object`.
	 */
	function baseSet(object, path, value, customizer) {
	  if (!isObject(object)) {
	    return object;
	  }
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = -1,
	      length = path.length,
	      lastIndex = length - 1,
	      nested = object;

	  while (nested != null && ++index < length) {
	    var key = toKey(path[index]),
	        newValue = value;

	    if (index != lastIndex) {
	      var objValue = nested[key];
	      newValue = customizer ? customizer(objValue, key, nested) : undefined;
	      if (newValue === undefined) {
	        newValue = isObject(objValue)
	          ? objValue
	          : (isIndex(path[index + 1]) ? [] : {});
	      }
	    }
	    assignValue(nested, key, newValue);
	    nested = nested[key];
	  }
	  return object;
	}

	module.exports = baseSet;


/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(43);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignValue;


/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(98),
	    stringToPath = __webpack_require__(146);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;


/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(147),
	    toString = __webpack_require__(148);

	/** Used to match property names within property paths. */
	var reLeadingDot = /^\./,
	    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  string = toString(string);

	  var result = [];
	  if (reLeadingDot.test(string)) {
	    result.push('');
	  }
	  string.replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(64);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(149);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(85),
	    isSymbol = __webpack_require__(150);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(97);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(98),
	    isSymbol = __webpack_require__(150);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(150);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(154);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is returned in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(145),
	    isKey = __webpack_require__(151),
	    toKey = __webpack_require__(152);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 155 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	// init a stack into the window
	if (!window.sugar) window.sugar = {};
	window.sugar._elements = new Map();
	window.sugar._elementsById = {};

	var SElementsManager = function () {
		function SElementsManager() {
			_classCallCheck(this, SElementsManager);
		}

		/**
	  * _getElementStack
	  * Return the element stack object used internaly to keep track of components, etc...
	  * @param 	{HTMLElement} 	elm 	The element to process
	  * @return 	{Object} 				The internal stack of the element
	  */
		SElementsManager.prototype._getElementStack = function _getElementStack(elm) {
			var inStackElement = null;
			if (typeof elm === 'string') {
				inStackElement = window.sugar._elementsById[elm];
			} else {
				inStackElement = window.sugar._elements.get(elm);
			}
			if (!inStackElement && elm.hasAttribute('s-element')) {
				inStackElement = {
					elements: {},
					components: {},
					originalElement: null
				};
				window.sugar._elements.set(elm, inStackElement);
				window.sugar._elementsById[elm.getAttribute('s-element')] = inStackElement;
			}
			return inStackElement;
		};

		/**
	  * registerComponent
	  * Register a component on a given element
	  * @param 	{HTMLElement} 	elm 		The element in which to register a component
	  * @param 	{SComponent} 	component 	The component to register
	  * @return 	{void}
	  */


		SElementsManager.prototype.registerComponent = function registerComponent(elm, component) {
			var inStackElement = this._getElementStack(elm);
			inStackElement.components[component.componentName] = component;
		};

		/**
	  * unregisterComponent
	  * Unregister a component on a given element
	  * @param 	{HTMLElement} 	elm 		The element in which to register a component
	  * @param 	{SComponent} 	component 	The component to register
	  * @return 	{void}
	  */


		SElementsManager.prototype.unregisterComponent = function unregisterComponent(elm, component) {
			var inStackElement = this._getElementStack(elm);
			delete inStackElement.components[component.componentName];
			// remove the s-component attribute if no more components
			if (Object.keys(inStackElement.components).length <= 0) {
				elm.removeAttribute('s-component');
			}
		};

		/**
	  * registerElement
	  * Register an SElement instance on a given element
	  * @param 	{HTMLElement} 	elm 		The element in which to register a component
	  * @param 	{SElement} 		element 	The SElement instance to register
	  * @return 	{void}
	  */


		SElementsManager.prototype.registerElement = function registerElement(elm, sElement) {
			var inStackElement = this._getElementStack(elm);
			// add the element into the element stack
			inStackElement.elements[sElement.elementId] = sElement;
			// save the element into the stacj
			inStackElement.elm = elm;
			// save the original element is is the first time
			// that this element is grabed from the DOM
			if (!inStackElement.originalElement) {
				var originalElement = elm.cloneNode(false);
				// remove the sugar component and element attribute
				originalElement.removeAttribute('s-element');
				originalElement.removeAttribute('s-component');
				inStackElement.originalElement = originalElement;
			}
		};

		/**
	  * unregisterElement
	  * Unregister an SElement instance on a given element
	  * @param 	{HTMLElement} 	elm 		The element in which to register a component
	  * @param 	{SElement} 		element 	The SElement instance to register
	  * @return 	{void}
	  */


		SElementsManager.prototype.unregisterElement = function unregisterElement(elm, sElement) {
			var inStackElement = this._getElementStack(elm);
			delete inStackElement.elements[sElement.elementId];
			// remove from the elementsById stack
			delete window.sugar._elementsById[sElement.elementId];
			// remove the s-component attribute if no more components
			if (Object.keys(inStackElement.elements).length <= 0) {
				elm.removeAttribute('s-element');
				window.sugar._elements.delete(elm);
			}
		};

		/**
	  * getComponents
	  * Return all the components inited on the given element
	  * @param 	{HTMLElement} 	elm 	The element to process
	  * @return 	{Object} 				The object of all components inited on this element
	  */


		SElementsManager.prototype.getComponents = function getComponents(elm) {
			var inStackElement = this._getElementStack(elm);
			if (!inStackElement) return null;
			return inStackElement.components;
		};

		/**
	  * getOriginalElement
	  * Return the original element before it has been processed by any components etc...
	  * @param 	{HTMLElement} 	elm 	The element to process
	  * @return 	{HTMLElement} 			The original element
	  */


		SElementsManager.prototype.getOriginalElement = function getOriginalElement(elm) {
			var inStackElement = this._getElementStack(elm);
			if (!inStackElement) return null;
			return inStackElement.originalElement;
		};

		/**
	  * getElementsCount
	  * Return the number of SElements instances that are inited on the given html element
	  * @param 	{HTMLElement} 	elm 	The element to process
	  * @return 	{Integer}				The count of SElement instances that are living on the particular node
	  */


		SElementsManager.prototype.getElementsCount = function getElementsCount(elm) {
			var inStackElement = this._getElementStack(elm);
			if (!inStackElement) return 0;
			return Object.keys(inStackElement.elements).length;
		};

		return SElementsManager;
	}();

	;

	if (!window.sugar) window.sugar = {};
	window.sugar.sElementsManager = new SElementsManager();
	exports.default = window.sugar.sElementsManager;

/***/ },
/* 156 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SDebug = function () {
		function SDebug() {
			_classCallCheck(this, SDebug);
		}

		SDebug.prototype.start = function start() {
			this._startTime = performance.now();
		};

		SDebug.prototype.stop = function stop() {
			var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

			this._stopTime = performance.now();
			console.warn(msg || 'PERFORMANCE', this._stopTime - this._startTime + 'ms');
		};

		return SDebug;
	}();

	if (!window.sugar) window.sugar = {};
	window.sugar.debug = new SDebug();
	exports.default = SDebug;

/***/ },
/* 157 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class 		SObject
	 * This is the main class that will be the base one for all the others.
	 * One class to rule them all...
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	var SObject =
	/**
	 * @constructor
	 */
	function SObject() {
	  _classCallCheck(this, SObject);
	};

	exports.default = SObject;

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _constructorName = __webpack_require__(159);

	var _constructorName2 = _interopRequireDefault(_constructorName);

	var _get2 = __webpack_require__(153);

	var _get3 = _interopRequireDefault(_get2);

	var _set2 = __webpack_require__(142);

	var _set3 = _interopRequireDefault(_set2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	/**
	 * @class 		SWathcer
	 * This class allows you to easily monitor some object properties and get the new and old value of it
	 *
	 * @example 	js
	 * // create the watcher instance
	 * const watcher = new SWatcher();
	 *
	 * // object to watch
	 * let myObject = {
	 * 		title : 'Hello World'
	 * };
	 *
	 * // watch the object
	 * watcher.watch(myObject, 'title', (newVal, oldVal) => {
	 *  	// do something when the title changes
	 * });
	 *
	 * // update the title
	 * myObject.title = 'Hello Universe';
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	var SWatcher = function () {

		/**
	  * @constructor
	  */
		function SWatcher() {
			_classCallCheck(this, SWatcher);

			this._watchStack = {};
		}

		/**
	  * Destroy the watcher
	  */


		// static setters = {
		// 	CSSStyleDeclaration : (obj, property, value) => {
		// 		obj.setProperty(property, value);
		// 	}
		// }

		/**
	  * Watch stack
	  * @type 		{Object}
	  */


		SWatcher.prototype.destroy = function destroy() {}
		// @TODO watcher destroy implementation


		/**
	  * Internal implementation of the defineProp
	  * @param 		{Object} 	obj 		The object to watch
	  * @param 		{String} 	property 	The property of the object to watch
	  * @param 		{Mixed} 	value 		The initial value of the property
	  * @param 		{String} 	objPath 	The object property path to watch
	  */
		;

		SWatcher.prototype._defineProp = function _defineProp(obj, property, value, objPath) {
			var _this2 = this;

			// do not define multiple time the description
			if (this._watchStack[objPath]) return;

			// store the current value
			var val = value;
			var descriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);

			// custom setter check
			var _set = function _set(value) {
				// check if have a custom setter for this object
				// if (customSetter) {
				// 	customSetter(obj, property, value);
				// 	val = value;
				// }
				// descriptor
				if (descriptor && descriptor.set) {
					var ret = descriptor.set(value);
					if (ret) {
						val = ret;
					} else {
						val = descriptor.get();
					}
				} else {
					val = value;
				}

				// apply the proxy for arrays, etc...
				val = _this2._applyProxy(val, objPath, function (newVal) {
					val = newVal;
				});
			};

			// get the setter
			// let customSetter;
			// for (let name in SWatcher.setters) {
			// 	if (__constructorName(obj) === name) {
			// 		customSetter = SWatcher.setters[name];
			// 		break;
			// 	}
			// }

			// set the value
			_set(value);

			// make sure we have the good descriptor
			var d = Object.getOwnPropertyDescriptor(obj, property);
			Object.defineProperty(obj, property, {
				get: function get() {
					var _val = val;
					if (descriptor && descriptor.get) {
						_val = descriptor.get();
					}
					return _val;
				},
				set: function set(v) {
					var oldValue = val;
					// internal set to use the good setter
					_set(v);
					// _notify of new update
					_this2._notify(objPath, val, oldValue);
				},
				configurable: descriptor && descriptor.configurable !== undefined ? descriptor.configurable : false,
				enumarable: descriptor && descriptor.enumarable !== undefined ? descriptor.enumarable : true
			});
		};

		/**
	  * Override some array methods to be able to notify of changes
	  * @param 		{Array} 	array 			The array to process
	  * @param 		{Array} 	methods 		The methods to override
	  * @param 		{String} 	objPath 		The object property path to watch
	  * @param 		{Function} 	setValueCb 		A callback function that will set the updated value
	  */


		SWatcher.prototype._overrideArrayMethod = function _overrideArrayMethod(array, methods, objPath, setValueCb) {
			var _this = this;

			// grab the old value
			var oldVal = array.slice(0);

			// loop on each methods to override
			methods.forEach(function (method) {
				array[method] = function () {
					// apply the push
					var ret = Array.prototype[method].apply(this, arguments);
					// set value callback
					setValueCb(this);
					// _notify
					_this._notify(objPath, this, oldVal);
					// return the new value
					return ret;
				};
			});
		};

		/**
	  * Apply a proxy on the variable to detect changes
	  * on arrays, etc...
	  * @param 		{Mixed} 	value 		The value on which to apply the proxy
	  * @param 		{String} 	objPath 	The object property path to watch
	  * @param 		{Function} 	setValueCb 	A function that will be responsible to set the new value intarnally
	  * @return 		{Mixed} 				Return the value
	  */


		SWatcher.prototype._applyProxy = function _applyProxy(value, objPath, setValueCb) {
			// if is an array
			if (value instanceof Array) {
				// override methods
				this._overrideArrayMethod(value, ['push', 'splice', 'pop', 'shift', 'unshift', 'reverse', 'sort'], objPath, setValueCb);
			}
			return value;
		};

		/**
	  * Watch something on an object
	  * @param 		{Object} 		object 		The object to watch
	  * @param 		{String} 		path 		The property path to watch on the object
	  * @param 		{Function} 		cb 			The callback called when the property is updated
	  */


		SWatcher.prototype.watch = function watch(object, path, cb) {
			var _this3 = this;

			// split the path by ',' to watch multiple properties
			if (typeof path === 'string') {
				path = path.split(',');
			}
			if (!path instanceof Array) {
				throw "The 'path' parameter has to be a string or an array...";
			}
			// loop on each path to watch
			path.forEach(function (p) {
				_this3._watch(object, p.trim(), cb);
			});
		};

		/**
	  * Internal watch$
	  * @param 		{Object} 		object 		The object to watch
	  * @param 		{String} 		path 		The property path to watch on the object
	  * @param 		{Function} 		cb 			The callback called when the property is updated
	  */


		SWatcher.prototype._watch = function _watch(object, path, cb) {
			// check if the path parameter has already a descriptor
			var split = path.split('.');
			var obj = object;
			var property = null;
			if (split.length > 1) {
				property = split.pop();
				obj = (0, _get3.default)(object, split.join('.'));
			} else {
				property = split[0];
			}
			var currentValue = null;
			currentValue = (0, _get3.default)(object, path);

			// if is undefined, create the value at null
			if (obj === undefined || currentValue === undefined) {
				(0, _set3.default)(obj, path, null);
				// _set(this, split.join('.'),null);
				// throw `It's not possible to watch the property ${path} cause it does not exist...`;
			};

			// define the property proxy
			this._defineProp(obj, property, currentValue, path);

			// register new watch
			if (!this._watchStack[path]) {
				this._watchStack[path] = [];
			}
			this._watchStack[path].push(cb);
		};

		/**
	  * Tell that something has changed
	  * @param 		{String} 		path 		The object property path that has been updated
	  * @param 		{Mixed} 		newValue 	The new property value
	  * @param 		{Mixed} 		oldValue 	The old property value
	  */


		SWatcher.prototype._notify = function _notify(path, newValue, oldValue) {
			if (this._watchStack[path] !== undefined && newValue !== oldValue) {
				this._watchStack[path].forEach(function (cb) {
					cb(newValue, oldValue);
				});
			}
		};

		return SWatcher;
	}();

	exports.default = SWatcher;

/***/ },
/* 159 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = constructorName;
	/**
	 * Return the constructor name of the passed object
	 *
	 * @name 		constructorName
	 * @param 		{Object} 			obj 		The object to get the constructor name from
	 * @return 		{String}						The constructor name
	 *
	 * @example 	js
	 * class MyCoolClass {
	 * 		// class implementation...
	 * }
	 * const myObj = new MyCoolClass();
	 * console.log(constructorName(myObj)); => MyCoolClass
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function constructorName(obj) {
	  var funcNameRegex = /function (.{1,})\(/;
	  var results = funcNameRegex.exec(obj.constructor.toString());
	  return results && results.length > 1 ? results[1] : "";
	}

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SWatcher = __webpack_require__(158);

	var _SWatcher2 = _interopRequireDefault(_SWatcher);

	var _camelize = __webpack_require__(5);

	var _camelize2 = _interopRequireDefault(_camelize);

	var _uncamelize = __webpack_require__(4);

	var _uncamelize2 = _interopRequireDefault(_uncamelize);

	var _autoCast = __webpack_require__(9);

	var _autoCast2 = _interopRequireDefault(_autoCast);

	var _uniqid = __webpack_require__(8);

	var _uniqid2 = _interopRequireDefault(_uniqid);

	var _set2 = __webpack_require__(142);

	var _set3 = _interopRequireDefault(_set2);

	var _dispatchEvent = __webpack_require__(141);

	var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
	                                                                                                                                                           * @class 		SBinder
	                                                                                                                                                           * This class allows to bind properties between objects, object to HTMLElement attribute and vice versa.
	                                                                                                                                                           *
	                                                                                                                                                           * @example		js
	                                                                                                                                                           * const binder = new SBinder();
	                                                                                                                                                           *
	                                                                                                                                                           * // keep in sync the myObject2.title with the myObject1.title property
	                                                                                                                                                           * binder.bindObjectPath2ObjectPath(myObject1, 'title', myObject2, 'title');
	                                                                                                                                                           *
	                                                                                                                                                           * // update and HTMLElement attribute when the myObject1.title is updated
	                                                                                                                                                           * binder.bindObjectPath2ElementAttribute(myObject1, 'title', myHTMLElement, 'title');
	                                                                                                                                                           *
	                                                                                                                                                           * // and more...
	                                                                                                                                                           *
	                                                                                                                                                           * @author		Olivier Bossel<olivier.bossel@gmail.com>
	                                                                                                                                                           */

	var SBinder = function () {

		/**
	  * @constructor
	  */


		/**
	  * Store all the mutation observers that are used to
	  * be notified when attributes are updated
	  * @type 		{Array}
	  */
		function SBinder() {
			_classCallCheck(this, SBinder);

			this._bindStack = {
				attr2obj: {},
				obj2attr: {}
			};
			this._mutationObservedElementsStack = [];
			this._digestsMutation = new Map();

			// init new watcher
			this._watcher = new _SWatcher2.default();
		}

		/**
	  * Bind object path 2 object path
	  * @param 		{Object} 	object1 	The source object that will be watched
	  * @param 		{String} 	path1 		The property path on the source object to watch
	  * @param 		{Object} 	object2 	The destination object that will be updated
	  * @param 		{String} 	path2 		The property path on the destination object to update
	  * @return 		{SBinder} 				The binder instance to allow chainability
	  */


		/**
	  * Store for each binded HTMLElement if each binded attributes are
	  * in digest phase to avoid multiple assignement of the same attribute
	  * in each digest phase
	  * @type 		{Map}
	  */


		/**
	  * Store all the bind objects settings
	  * @type 		{Object}
	  */


		SBinder.prototype.bindObjectPath2ObjectPath = function bindObjectPath2ObjectPath(object1, path1, object2, path2) {
			// watch the path to update the attribute accordingly
			this._watcher.watch(object1, path1, function (newVal, oldVal) {
				// do nothing is no
				if (newVal === oldVal) return;

				// set the new value
				(0, _set3.default)(object2, path2, newVal);
			});
			return this;
		};

		/**
	  * Bind element attribute to object path
	  * @param 		{HTMLElement} 	elm 		The source html element that will be watched
	  * @param 		{String} 		attribute  	The attribute name to watch on the element
	  * @param 		{Object} 		object 		The destination object that will be updated
	  * @param 		{String} 		path 		The property path on the destination object to update
	  * @return 		{SBinder} 					The binder instance to allow chainability
	  */


		SBinder.prototype.bindElementAttribute2ObjectPath = function bindElementAttribute2ObjectPath(elm, attribute, object, path) {

			// generate an bindId in the object if not already exist
			if (!object._binderId) object._binderId = 's-binder-' + (0, _uniqid2.default)();

			// observe the element
			this._observeDomElement(elm);

			// attr2obj
			if (!this._bindStack.attr2obj[attribute]) this._bindStack.attr2obj[attribute] = {};
			if (!this._bindStack.attr2obj[attribute][object._binderId + ':' + path]) {
				this._bindStack.attr2obj[attribute][object._binderId + ':' + path] = {
					object: object,
					path: path
				};
			}
			return this;
		};

		/**
	  * Bind object path to element attribute
	  * @param 		{Object} 		object 		The source object that will be watched
	  * @param 		{String} 		path 		The property path on the source object to watch
	  * @param 		{HTMLElement}	elm 		The HTMLElement that will be updated
	  * @param 		{String} 		attribute 	The attribute to update on the element
	  * @return 		{SBinder} 					The binder instance to allow chainability
	  */


		SBinder.prototype.bindObjectPath2ElementAttribute = function bindObjectPath2ElementAttribute(object, path, elm, attribute) {
			var _this = this;

			// generate an bindId in the object if not already exist
			if (!object._binderId) object._binderId = 's-binder-' + (0, _uniqid2.default)();

			// obj2attr
			if (!this._bindStack.obj2attr[object._binderId + ':' + path]) this._bindStack.obj2attr[object._binderId + ':' + path] = {};
			if (!this._bindStack.obj2attr[object._binderId + ':' + path][attribute]) {
				this._bindStack.obj2attr[object._binderId + ':' + path][attribute] = {
					elm: elm,
					attribute: attribute
				};
			}

			// watch the path to update the attribute accordingly
			this._watcher.watch(object, path, function (newVal, oldVal) {
				// get the digest attribute stack from the element
				var digest = _this._digestsMutation.get(elm);

				if (digest && digest[attribute]) return;
				if (newVal === oldVal) return;

				// loop on all attributes to update
				for (var _attribute in _this._bindStack.obj2attr[object._binderId + ':' + path]) {
					var watch = _this._bindStack.obj2attr[object._binderId + ':' + path][_attribute];

					// prevent from multiple same attribute assignement in the same digest process
					if (digest && digest[watch.attribute]) continue;
					if (!digest) digest = {};
					digest[watch.attribute] = true;
					_this._digestsMutation.set(elm, digest);

					// update the attribute
					watch.elm.setAttribute((0, _uncamelize2.default)(watch.attribute), newVal);

					// if the attribute is the value, trigger a change event
					if ((0, _uncamelize2.default)(watch.attribute) === 'value') {
						elm.value = newVal;
						(0, _dispatchEvent2.default)(watch.elm, 'change');
					}
				}
			});
			return this;
		};

		/**
	  * Destroy the binder
	  */


		SBinder.prototype.destroy = function destroy() {}
		// @TODO binder destroy implementation


		/**
	  * Observe DOM element
	  * @param 		{HTMLElement} 	elm 	The element to watch
	  */
		;

		SBinder.prototype._observeDomElement = function _observeDomElement(elm) {
			var _this2 = this;

			// check if already observe the element
			if (this._mutationObservedElementsStack.indexOf(elm) !== -1) return;
			this._mutationObservedElementsStack.push(elm);

			// check attributes changes to update settings
			var observer = new MutationObserver(function (mutations) {
				// loop on mutations
				mutations.forEach(function (mutation) {
					// update the attr property
					var val = (0, _autoCast2.default)(elm.getAttribute(mutation.attributeName));

					// make a new attribute
					var camelName = (0, _camelize2.default)(mutation.attributeName);

					// set that we are digesting this attribute on this element
					var digest = _this2._digestsMutation.get(elm);
					if (!digest) digest = {};
					digest[mutation.attributeName] = true;
					_this2._digestsMutation.set(elm, digest);

					// set all the objects values bound to this attribute
					if (_this2._bindStack.attr2obj[mutation.attributeName]) {
						// loop on each objects to update
						for (var objectPath in _this2._bindStack.attr2obj[mutation.attributeName]) {
							var watch = _this2._bindStack.attr2obj[mutation.attributeName][objectPath];

							// update the value
							(0, _set3.default)(watch.object, watch.path, val);
						}
					}
				});
				// restore the mutate state in the next loop
				setTimeout(function () {
					_this2._digestsMutation = new Map();
				});
			});
			// observe the node itself
			observer.observe(elm, {
				childList: false,
				attributes: true,
				characterData: true,
				subtree: false,
				attributeOldValue: true,
				characterDataOldValue: true
			});
		};

		return SBinder;
	}();

	exports.default = SBinder;

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _mustache = __webpack_require__(162);

	var _mustache2 = _interopRequireDefault(_mustache);

	var _dispatchEvent = __webpack_require__(141);

	var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

	var _SWatcher = __webpack_require__(158);

	var _SWatcher2 = _interopRequireDefault(_SWatcher);

	var _uniqid = __webpack_require__(8);

	var _uniqid2 = _interopRequireDefault(_uniqid);

	var _morphdom = __webpack_require__(163);

	var _morphdom2 = _interopRequireDefault(_morphdom);

	var _domReady = __webpack_require__(135);

	var _domReady2 = _interopRequireDefault(_domReady);

	var _get2 = __webpack_require__(153);

	var _get3 = _interopRequireDefault(_get2);

	var _autoCast = __webpack_require__(9);

	var _autoCast2 = _interopRequireDefault(_autoCast);

	var _matches = __webpack_require__(132);

	var _matches2 = _interopRequireDefault(_matches);

	var _querySelectorLive = __webpack_require__(11);

	var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

	var _strToHtml = __webpack_require__(164);

	var _strToHtml2 = _interopRequireDefault(_strToHtml);

	var _constructorName2 = __webpack_require__(159);

	var _constructorName3 = _interopRequireDefault(_constructorName2);

	var _closest = __webpack_require__(131);

	var _closest2 = _interopRequireDefault(_closest);

	var _propertyProxy = __webpack_require__(165);

	var _propertyProxy2 = _interopRequireDefault(_propertyProxy);

	var _sElementsManager = __webpack_require__(155);

	var _sElementsManager2 = _interopRequireDefault(_sElementsManager);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	if (!window.sugar) window.sugar = {};
	window.sugar._sTemplateData = {};

	/**
	 * @class 		STemplate 		{SOject}
	 * This class allows you to create complexe and dynamic templates that will stay
	 * in sync with his data object automatically.
	 * Under the hood, this class use the `morphdom` library that will be in charge of updating
	 * the minimum dom as needed.
	 *
	 * @example 	js
	 * // our data object
	 * const data = {
	 * 		title : 'Hello World'
	 * };
	 * // create an STemplate instance
	 * const myTemplate = new STemplate(`
	 * 		<div class="my-template">
	 *   		<h1>{{title}}</h1>
	 * 		</div>
	 * `, data);
	 * // append our template to the dom
	 * myTemplate.appendTo(document.querySelector('#myDiv'));
	 * // update the title at any point in time
	 * setTimeout(() => {
	 * 		data.title = 'Hello Universe';
	 * }, 2000);
	 *
	 *
	 * @see 		https://github.com/patrick-steele-idem/morphdom
	 * @author		Olivier Bossel <olivier.bossel@gmail.com>
	 */

	var STemplate = function () {

		/**
	  * Set an element to not discard
	  * @param 	{HTMLElement} 	elm 	The element to not discard
	  */


		/**
	  * Register a component integration function
	  * @param 	{Function} 		integrationFn 		The function used to set the integration attributes, etc into the component elements
	  */
		STemplate.doNotDiscard = function doNotDiscard(elm) {
			elm.setAttribute('s-template-do-not-discard', true);
			return STemplate;
		};

		/**
	  * Set an element to exclude completely from the STemplate engine
	  * @param 	{HTMLElement} 	elm 	The element to exclude
	  */


		/**
	  * Set an attribute to keep
	  * @param 	{HTMLElement} 	elm 	The element on which to keep an attribute
	  * @param 	{String} 		attr 	The attribute name to keep
	  */


		/**
	  * Store all the component integration functions registered
	  * @private
	  * @type 	{Object}
	  */


		STemplate.exclude = function exclude(elm) {
			elm.setAttribute('s-template-exclude', true);
			return STemplate;
		};

		/**
	  * Set an element to refresh completely when the STemplate handle it
	  * @param 	{HTMLElement} 	elm 	The element to refresh
	  */


		STemplate.refresh = function refresh(elm) {
			elm.setAttribute('s-template-refresh', true);
			return STemplate;
		};

		/**
	  * Check if an element is handled by an STemplate instance
	  * @param 		{HTMLElement} 	elm 	The element to check
	  * @return 		{Boolean} 				True if the element is handled by a template, false otherwise
	  */


		STemplate.isTemplate = function isTemplate(elm) {
			if (!elm.hasAttribute) return false;
			if (elm.hasAttribute('s-template-id')) return true;
			var components = _sElementsManager2.default.getComponents(elm);
			if (!components) return false;
			for (var key in components) {
				var component = components[key];
				if (component._isTemplateComponent) return true;
			}
			return false;
		};

		/**
	  * Store a uniqid that will be used as identifier for
	  * this particular class in the window.sTemplateClasses
	  * @type 	{String}
	  */


		/**
	  * Store the reference to html elements that have an id or a name
	  * @type 	{Object}
	  */


		/**
	  * Store the reference to the created dom structure
	  */


		/**
	  * Store the data object used to render the template
	  * @type 	{Object}
	  */


		/**
	  * Store the values of the model when it's an object or an array
	  * This is used to set in html a string value like 'object:10' that will
	  * match the current value in this stack
	  * @type 	{Array}
	  */


		/**
	  * Store the timeout used to update the template only once when multiple changes have been made
	  * @type 	{Number}
	  */


		/**
	  * Store the settings
	  * @type 	{Object}
	  */


		/**
	  * Constructor
	  */
		function STemplate(template) {
			var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			var _this = this;

			var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			var parentTemplate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

			_classCallCheck(this, STemplate);

			this.templateId = null;
			this.refs = {};
			this.dom = null;
			this.data = {};
			this._modelValuesStack = [];
			this._updateTimeout = null;
			this.settings = {

				/**
	    * A compile function to process the template
	    * This function will revieve the template and the data as parameters
	    * and need to return the compiled string version
	    * @setting
	    * @type 		{Function}
	    * @default 	null
	    */
				compile: null,

				/**
	    * Function called before any HTMLElement will be updated in the dom
	    * If this function return false, the element will not bein updated at all
	    * @setting
	    * @type 		{Function}
	    * @default  	null
	    */
				onBeforeElUpdated: null,

				/**
	    * Function called before any HTMLElement child will be updated in the dom
	    * If this function return false, the engine will not try to update this element children
	    * @setting
	    * @type 		{Function}
	    * @default  	null
	    */
				onBeforeElChildrenUpdated: null,

				/**
	    * Function called before any HTMLElement will be removed from the dom
	    * If this function return false, the element will not bein removed
	    * @setting
	    * @type 		{Function}
	    * @default  	null
	    */
				onBeforeElDiscarded: null

			};


			// save settings
			this.settings = _extends({}, this.settings, settings);

			// set the parent template
			if (parentTemplate) this.setParentTemplate(parentTemplate);

			// generate a uniqid for the template
			this.templateId = (0, _uniqid2.default)();

			// wrap the template into a div
			// with the templateId
			this.template = template;

			// if template is a string
			if (typeof this.template === 'string') {
				// set the s-template-id attribute in first template node
				this.template = this.template.replace('>', ' s-template-id="' + this.templateId + '">');
				this.templateString = this.template;
				this.dom = document.createElement('div');
			}
			// if the template is a node
			else if (this.template.nodeName) {
					this.template.setAttribute('s-template-id', this.templateId);

					// apply the integration in components
					// without rendering it
					this._applyIntegrationOnNode(this.template);
					[].forEach.call(this.template.querySelectorAll('[s-component]'), function (componentNode) {
						_this._applyIntegrationOnNode(componentNode);
					});

					// window.sugar.debug.start();
					// const clone = this.template.cloneNode(true);
					var clone = (0, _strToHtml2.default)(this.template.outerHTML);

					// clone the template to remove all the templates contents
					// cause each template has to care only about his scope and not
					// about the scope of nested onces...
					[].forEach.call(clone.querySelectorAll('[s-template-component]'), function (nestedTemplate) {
						nestedTemplate.innerHTML = '';
					});
					// remove all the element that has not to be touched
					[].forEach.call(clone.querySelectorAll('[s-template-exclude]'), function (elm) {
						elm.parentNode.removeChild(elm);
					});

					// replace all the s-element with their original versions
					[].forEach.call(clone.querySelectorAll('[s-element]'), function (elm) {
						// console.log('element', elm);
						var elementId = elm.getAttribute('s-element');
						var originalElement = _sElementsManager2.default.getOriginalElement(elementId);
						if (originalElement) {
							elm = (0, _morphdom2.default)(elm, originalElement, {
								onBeforeElUpdated: function onBeforeElUpdated(fromNode, toNode) {
									['s-template-keep', 's-template-exclude', 's-template-refresh', 's-template-do-not-update', 's-template-do-not-discard', 's-template-do-not-children-update'].forEach(function (attr) {
										if (fromNode.hasAttribute(attr) && !toNode.hasAttribute(attr)) {
											toNode.setAttribute(attr, fromNode.getAttribute(attr));
										}
									});
									return true;
								},
								onBeforeElChildrenUpdated: function onBeforeElChildrenUpdated(node) {
									// do not update children at all
									return false;
								}
							});
						}
					});
					this.templateString = clone.outerHTML.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
					this.dom = this.template;
				}

			// save the template instance into the dom
			this.dom._sTemplate = this;

			// set the data into instance
			this.data = data;

			// bound some methods into the data
			this.data.sTemplate = {
				value: function value(of) {
					var idx = _this._modelValuesStack.indexOf(of);
					if (idx !== -1) {
						return 'object:' + idx;
					} else {
						_this._modelValuesStack.push(of);
						var newIdx = _this._modelValuesStack.length - 1;
						return 'object:' + newIdx;
					}
					return of;
				}
			};

			// bound the class into the window to be apple to call it into
			// templates
			window.sugar._sTemplateData[this.templateId] = this.data;

			// instanciate a watcher
			this._watcher = new _SWatcher2.default();

			// watch each data
			for (var name in this.data) {
				(0, _propertyProxy2.default)(this.data, name, {
					set: function set(value) {
						if (typeof value === 'string') {
							if (value.match(/^this\\./g)) {
								// grab the path
								var path = value.replace('this.', '');
								// get the value from the data
								value = (0, _get3.default)(_this.data, path);
							} else if (value.match(/^window\\./g)) {
								var _path = value.replace('window.', '');
								value = (0, _get3.default)(window, _path);
							} else if (value.match(/^parent\\./g)) {
								// get parent template
								var _parentTemplate = _this._getParentTemplate();
								if (_parentTemplate && _parentTemplate.data) {
									var _v = (0, _get3.default)(_parentTemplate.data, value);
									if (_v) value = _v;
								} else {
									throw 'You try to access the "' + value + '" value but your template is not embeded in another one';
								}
							} else {
								// check if the value exist in the current data
								if (_this.data[value]) {
									value = (0, _get3.default)(_this.data, value);
								} else {
									// get parent template
									var _parentTemplate2 = _this._getParentTemplate();
									if (_parentTemplate2 && _parentTemplate2.data) {
										var _v2 = (0, _get3.default)(_parentTemplate2.data, value);
										if (_v2) value = _v2;
									}
								}
							}
						}
						return value;
					}
				});
				this._watcher.watch(this.data, name, function (newVal, oldVal) {
					// make update only once
					// by waiting next loop
					clearTimeout(_this._updateTimeout);
					_this._updateTimeout = setTimeout(function () {
						// render the template again
						_this._internalRender();
					});
				});
			}
		}

		/**
	  * _getParentTemplate
	  * Return the parent template instance if exist
	  * @return 	{STemplate}
	  */


		STemplate.prototype._getParentTemplate = function _getParentTemplate() {
			if (this._parentTemplate) return this._parentTemplate;
			// console.log('dom', this.dom);
			if (this.dom && this.dom.parentNode) {
				var parentTemplateNode = (0, _closest2.default)(this.dom, '[s-template-id]');
				// console.log('parent', this.dom, parentTemplateNode);
				if (parentTemplateNode && parentTemplateNode._sTemplate) {
					this._parentTemplate = parentTemplateNode._sTemplate;
				}
			}
			return this._parentTemplate;
		};

		/**
	  * setParentTemplate
	  * Set the parent STemplate instance.
	  * This is needed if you want your template to talk together through attributes
	  * @param 	{STemplate} 	template 	The parent template instance
	  */


		STemplate.prototype.setParentTemplate = function setParentTemplate(template) {
			if (!template instanceof STemplate) {
				throw 'the template passed to setParentTemplate is not a STemplate instance';
			}
			this._parentTemplate = template;
		};

		/**
	  * Compile the template
	  * @protected
	  * @param 		{String} 	template 	The template to compile
	  * @param 		{Object} 	data 		The data used to compile the template
	  * @return		{String} 				The compiled template string
	  */


		STemplate.prototype._compile = function _compile(template, data) {
			return template;
		};

		/**
	  * Render the template
	  * Usually, you don't need to call this by yourself. The template
	  * will be rendered again each time that a data is updated
	  */


		STemplate.prototype.render = function render() {
			this._internalRender();
		};

		/**
	  * Render the template
	  */


		STemplate.prototype._internalRender = function _internalRender() {
			var _this2 = this;

			// compile the template
			var compiled = '';
			if (this.settings.compile) {
				compiled = this.settings.compile(this.templateString, this.data);
			} else {
				compiled = this._compile(this.templateString, this.data);
			}
			// process compiled template
			compiled = this._processOutput(compiled);

			// remove all the elements that need to be fully refreshed
			[].forEach.call(this.dom.querySelectorAll('[s-template-refresh]'), function (elm) {
				// console.log('refresh', elm)
				elm.parentNode.removeChild(elm);
			});

			// set the new html
			this.dom = (0, _morphdom2.default)(this.dom, compiled.trim(), {
				onBeforeElChildrenUpdated: function onBeforeElChildrenUpdated(fromNode, toNode) {
					// don't care about no html elements
					// such has comments, text, etc...
					if (!fromNode.hasAttribute) return false;

					// update if is the template itself
					if (_this2.dom === fromNode) {
						return true;
					}

					// check the s-template-no-children-update attribute
					if (fromNode.hasAttribute('s-template-do-not-children-update') || fromNode.hasAttribute('s-template-exclude')) return false;

					// if the node if a template or a template component
					// we do not want to update his children
					// cause it's not our business
					if (STemplate.isTemplate(fromNode)) {
						return false;
					}

					// check if an onBeforeElUpdated is present in the settings
					if (_this2.settings.onBeforeElChildrenUpdated) {
						var res = _this2.settings.onBeforeElChildrenUpdated(fromNode, toNode);
						if (res === true || res === false) {
							return res;
						}
					}

					// update the children
					return true;
				},
				onBeforeElUpdated: function onBeforeElUpdated(fromNode, toNode) {
					// don't care about no html elements
					// such has comments, text, etc...
					if (!fromNode.hasAttribute) return false;

					// apply integration on component
					_this2._applyIntegrationOnNode(fromNode);

					// handle integration attributes
					['s-template-keep', 's-template-exclude', 's-template-refresh', 's-template-do-not-update', 's-template-do-not-discard', 's-template-do-not-children-update'].forEach(function (attr) {
						if (fromNode.hasAttribute(attr) && !toNode.hasAttribute(attr)) {
							toNode.setAttribute(attr, fromNode.getAttribute(attr));
						}
					});

					// handle the sTemplateKeepAttr attribute
					if (fromNode.hasAttribute('s-template-keep')) {
						var keep = fromNode.getAttribute('s-template-keep');
						keep = keep.replace(/\s/g, '').split(',');
						// loop on each attribute to keep
						keep.forEach(function (key) {
							if (fromNode.hasAttribute(key) && !toNode.hasAttribute(key)) {
								toNode.setAttribute(key, fromNode.getAttribute(key));
							}
						});
					}

					// update if is the template itself
					if (_this2.dom === fromNode) {
						return true;
					}

					// check the s-template-no-update attribute
					if (fromNode.hasAttribute('s-template-do-not-update') || fromNode.hasAttribute('s-template-exclude')) return false;

					// check if an onBeforeElUpdated is present in the settings
					if (_this2.settings.onBeforeElUpdated) {
						var res = _this2.settings.onBeforeElUpdated(fromNode, toNode);
						if (res === true || res === false) {
							return res;
						}
					}

					// update the element
					return true;
				},
				onElUpdated: function onElUpdated(node) {
					// check if an onBeforeElUpdated is present in the settings
					if (_this2.settings.onElUpdated) {
						_this2.settings.onElUpdated(node);
					}
				},
				onBeforeNodeDiscarded: function onBeforeNodeDiscarded(node) {
					// don't care about no html elements
					// such has comments, text, etc...
					if (!node.hasAttribute) return true;

					// check if the node match one of the element selector
					// to not discard
					if (node.hasAttribute('s-template-do-not-discard') || node.hasAttribute('s-template-exclude')) return false;

					// check if an onBeforeElUpdated is present in the settings
					if (_this2.settings.onBeforeElDiscarded) {
						var res = _this2.settings.onBeforeElDiscarded(fromNode, toNode);
						if (res === true || res === false) {
							return res;
						}
					}

					// discard the element
					return true;
				},
				onElDiscarded: function onElDiscarded(node) {
					// check if an onBeforeElUpdated is present in the settings
					if (_this2.settings.onElDiscarded) {
						_this2.settings.onElDiscarded(node);
					}
				}
			});

			// update refs
			this._updateRefs();

			// listen for changes of datas in the DOM
			// through the s-template-model attribute
			this._listenDataChangesInDom();
		};

		/**
	  * Update references
	  */


		STemplate.prototype._updateRefs = function _updateRefs() {
			var _this3 = this;

			// reset refs
			this.refs = {};
			// save the element itself
			this.refs.elm = this.dom;
			// search for name and id's
			[].forEach.call(this.dom.querySelectorAll('[id],[name]'), function (elm) {
				// get the id or name
				var id = elm.id || elm.getAttribute('name');
				// save the reference
				_this3.refs[id] = elm;
			});
		};

		/**
	  * Apply the STemplate integration on a node that has
	  * some components on it
	  * @param 		{HTMLElement} 	 node 		The node on which to apply the integration
	  */


		STemplate.prototype._applyIntegrationOnNode = function _applyIntegrationOnNode(node) {
			// check if is a component to render it
			var components = _sElementsManager2.default.getComponents(node);
			if (components) {
				// loop on each components to render themself
				for (var name in components) {
					var component = components[name];

					// if already integrated
					// do not launch the integration function
					if (component._sTemplateIntegrated !== true) {
						var constructorName = (0, _constructorName3.default)(component);
						var integrationFn = STemplate._componentsIntegrationFnStack[constructorName];
						if (integrationFn) {
							integrationFn(component);
							component._sTemplateIntegrated = true;
						}
						// loop on each prototypes to go up inheritence tree
						var proto = Object.getPrototypeOf(component);
						while (proto) {
							var _constructorName = (0, _constructorName3.default)(proto);
							var _integrationFn = STemplate._componentsIntegrationFnStack[_constructorName];
							if (_integrationFn) {
								_integrationFn(component);
							}
							proto = Object.getPrototypeOf(proto);
						}
					}
				}
			}
		};

		/**
	  * Update the data model from an s-template-model element
	  * @param 	{HTMLElement} 	element 	The s-template-model element
	  */


		STemplate.prototype._updateDataModelFromElement = function _updateDataModelFromElement(element) {

			// get the model from the element
			var model = element.getAttribute('s-template-model');

			// try to get into data
			var val = (0, _get3.default)(this.data, element.value);

			// if has a value into data
			// take that as value to set into model
			if (val) {
				this.data[model] = val;
			} else if (element.value.substr(0, 7) === 'object:') {
				var split = element.value.split(':');
				var idx = split[1];
				this.data[model] = this._modelValuesStack[idx];
			} else {
				this.data[model] = (0, _autoCast2.default)(element.value);
			}
		};

		/**
	  * Listen for changes of datas in dom
	  */


		STemplate.prototype._listenDataChangesInDom = function _listenDataChangesInDom() {
			var _this4 = this;

			// find elements that have a data binded into it
			[].forEach.call(this.dom.querySelectorAll('[s-template-model]'), function (elm) {
				// check if already binded
				var model = elm.getAttribute('s-template-model');

				if (!elm._sTemplateBinded) {
					elm._sTemplateBinded = true;
					elm.addEventListener('change', function (e) {
						// update the model from the element
						_this4._updateDataModelFromElement(e.target);
					});
					elm.addEventListener('keyup', function (e) {
						clearTimeout(_this4._keyUpTimeout);
						_this4._keyUpTimeout = setTimeout(function () {
							// update the model from the element
							_this4._updateDataModelFromElement(e.target);
						}, 1000);
					});
				}

				var htmlVal = _this4.data[model];

				// if the model value is not something like a string,
				// a number, etc, we build a stack to map actual model value
				// with a string identifier
				if (_this4.data[model] && (_typeof(_this4.data[model]) === 'object' || _this4.data[model] instanceof Array)) {
					// try to find the model into the stack
					var idx = _this4._modelValuesStack.indexOf(_this4.data[model]);
					// if we already have the value into the stack
					if (idx !== -1) {
						htmlVal = 'object:' + idx;
					} else {
						// we don't have the value into the stack
						// add it and set the new htmlVal
						_this4._modelValuesStack.push(_this4.data[model]);
						var newIdx = _this4._modelValuesStack.length - 1;
						htmlVal = 'object:' + newIdx;
						// console.log('htmlVal', htmlVal);
						// htmlVal = 'coco';
					}
				}

				// set the initial value coming from the model
				elm.value = htmlVal;
				if (htmlVal === null || htmlVal === undefined) {
					elm.removeAttribute('value');
				} else {
					elm.setAttribute('value', htmlVal);
				}
			});
		};

		/**
	  * Append the template to an HTMLElement
	  * @param 		{HTMLElement} 	to 		The element in which to append the template
	  */


		STemplate.prototype.appendTo = function appendTo(element) {
			element.appendChild(this.dom);
			// render
			this._internalRender();
		};

		/**
	  * Remove the template from the dom
	  */


		STemplate.prototype.remove = function remove() {
			this.dom.parentNode.removeChild(this.dom);
		};

		/**
	  * Process output to replace some things like the this., parent., etc...
	  * @param 		{String} 		renderedTemplate 		The rendered template returned by the settings.compile function
	  * @return 		{String} 								The processed template string
	  */


		STemplate.prototype._processOutput = function _processOutput(renderedTemplate) {
			var ret = renderedTemplate;

			// after compile callback
			// to have a chance to process the template
			// from outside
			if (this.settings.afterCompile) {
				ret = this.settings.afterCompile(ret);
			}

			// replace the parent.
			// if we have a parent template
			if (this._parentTemplate) {
				// replace all the this. with the proper window.sTemplateDataObjects reference
				var parentDotReg = new RegExp('parent\\.', 'g');
				ret = ret.replace(parentDotReg, 'window.sugar._sTemplateData.' + this._parentTemplate.templateId + '.');
			}

			// replace all the this. with the proper window.sTemplateDataObjects reference
			var thisDotReg = new RegExp('this\\.', 'g');
			ret = ret.replace(thisDotReg, 'window.sugar._sTemplateData.' + this.templateId + '.');

			// element regexp
			var dollarElementReg = new RegExp('\\$element', 'g');
			ret = ret.replace(dollarElementReg, 'this');

			// return the processed template
			return ret;
		};

		/**
	  * Destroy the template
	  */


		STemplate.prototype.destroy = function destroy() {
			// remove the template data into window
			delete window.sugar._sTemplateData[thi.templateId];
			// destroy watcher
			this._watcher.destroy();
			// delete reference to parentTemplate
			this._parentTemplate = null;
			// remove datas
			this.data = null;
		};

		return STemplate;
	}();

	STemplate._componentsIntegrationFnStack = {};

	STemplate.registerComponentIntegration = function (componentClassName, fn) {
		STemplate._componentsIntegrationFnStack[componentClassName] = fn;
	};

	STemplate.keepAttribute = function (elm, attr) {
		var keep = elm.getAttribute('s-template-keep');
		if (keep) {
			var keeps = keep.split(',');
			if (keeps.indexOf(attr) === -1) {
				keeps.push(attr);
			}
			elm.setAttribute('s-template-keep', keeps.join(','));
		} else {
			elm.setAttribute('s-template-keep', attr);
		}
		return STemplate;
	};

	exports.default = STemplate;

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */

	/*global define: false Mustache: true*/

	(function defineMustache (global, factory) {
	  if (typeof exports === 'object' && exports && typeof exports.nodeName !== 'string') {
	    factory(exports); // CommonJS
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); // AMD
	  } else {
	    global.Mustache = {};
	    factory(global.Mustache); // script, wsh, asp
	  }
	}(this, function mustacheFactory (mustache) {

	  var objectToString = Object.prototype.toString;
	  var isArray = Array.isArray || function isArrayPolyfill (object) {
	    return objectToString.call(object) === '[object Array]';
	  };

	  function isFunction (object) {
	    return typeof object === 'function';
	  }

	  /**
	   * More correct typeof string handling array
	   * which normally returns typeof 'object'
	   */
	  function typeStr (obj) {
	    return isArray(obj) ? 'array' : typeof obj;
	  }

	  function escapeRegExp (string) {
	    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
	  }

	  /**
	   * Null safe way of checking whether or not an object,
	   * including its prototype, has a given property
	   */
	  function hasProperty (obj, propName) {
	    return obj != null && typeof obj === 'object' && (propName in obj);
	  }

	  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
	  // See https://github.com/janl/mustache.js/issues/189
	  var regExpTest = RegExp.prototype.test;
	  function testRegExp (re, string) {
	    return regExpTest.call(re, string);
	  }

	  var nonSpaceRe = /\S/;
	  function isWhitespace (string) {
	    return !testRegExp(nonSpaceRe, string);
	  }

	  var entityMap = {
	    '&': '&amp;',
	    '<': '&lt;',
	    '>': '&gt;',
	    '"': '&quot;',
	    "'": '&#39;',
	    '/': '&#x2F;',
	    '`': '&#x60;',
	    '=': '&#x3D;'
	  };

	  function escapeHtml (string) {
	    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
	      return entityMap[s];
	    });
	  }

	  var whiteRe = /\s*/;
	  var spaceRe = /\s+/;
	  var equalsRe = /\s*=/;
	  var curlyRe = /\s*\}/;
	  var tagRe = /#|\^|\/|>|\{|&|=|!/;

	  /**
	   * Breaks up the given `template` string into a tree of tokens. If the `tags`
	   * argument is given here it must be an array with two string values: the
	   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
	   * course, the default is to use mustaches (i.e. mustache.tags).
	   *
	   * A token is an array with at least 4 elements. The first element is the
	   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
	   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
	   * all text that appears outside a symbol this element is "text".
	   *
	   * The second element of a token is its "value". For mustache tags this is
	   * whatever else was inside the tag besides the opening symbol. For text tokens
	   * this is the text itself.
	   *
	   * The third and fourth elements of the token are the start and end indices,
	   * respectively, of the token in the original template.
	   *
	   * Tokens that are the root node of a subtree contain two more elements: 1) an
	   * array of tokens in the subtree and 2) the index in the original template at
	   * which the closing tag for that section begins.
	   */
	  function parseTemplate (template, tags) {
	    if (!template)
	      return [];

	    var sections = [];     // Stack to hold section tokens
	    var tokens = [];       // Buffer to hold the tokens
	    var spaces = [];       // Indices of whitespace tokens on the current line
	    var hasTag = false;    // Is there a {{tag}} on the current line?
	    var nonSpace = false;  // Is there a non-space char on the current line?

	    // Strips all whitespace tokens array for the current line
	    // if there was a {{#tag}} on it and otherwise only space.
	    function stripSpace () {
	      if (hasTag && !nonSpace) {
	        while (spaces.length)
	          delete tokens[spaces.pop()];
	      } else {
	        spaces = [];
	      }

	      hasTag = false;
	      nonSpace = false;
	    }

	    var openingTagRe, closingTagRe, closingCurlyRe;
	    function compileTags (tagsToCompile) {
	      if (typeof tagsToCompile === 'string')
	        tagsToCompile = tagsToCompile.split(spaceRe, 2);

	      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
	        throw new Error('Invalid tags: ' + tagsToCompile);

	      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
	      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
	      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
	    }

	    compileTags(tags || mustache.tags);

	    var scanner = new Scanner(template);

	    var start, type, value, chr, token, openSection;
	    while (!scanner.eos()) {
	      start = scanner.pos;

	      // Match any text between tags.
	      value = scanner.scanUntil(openingTagRe);

	      if (value) {
	        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
	          chr = value.charAt(i);

	          if (isWhitespace(chr)) {
	            spaces.push(tokens.length);
	          } else {
	            nonSpace = true;
	          }

	          tokens.push([ 'text', chr, start, start + 1 ]);
	          start += 1;

	          // Check for whitespace on the current line.
	          if (chr === '\n')
	            stripSpace();
	        }
	      }

	      // Match the opening tag.
	      if (!scanner.scan(openingTagRe))
	        break;

	      hasTag = true;

	      // Get the tag type.
	      type = scanner.scan(tagRe) || 'name';
	      scanner.scan(whiteRe);

	      // Get the tag value.
	      if (type === '=') {
	        value = scanner.scanUntil(equalsRe);
	        scanner.scan(equalsRe);
	        scanner.scanUntil(closingTagRe);
	      } else if (type === '{') {
	        value = scanner.scanUntil(closingCurlyRe);
	        scanner.scan(curlyRe);
	        scanner.scanUntil(closingTagRe);
	        type = '&';
	      } else {
	        value = scanner.scanUntil(closingTagRe);
	      }

	      // Match the closing tag.
	      if (!scanner.scan(closingTagRe))
	        throw new Error('Unclosed tag at ' + scanner.pos);

	      token = [ type, value, start, scanner.pos ];
	      tokens.push(token);

	      if (type === '#' || type === '^') {
	        sections.push(token);
	      } else if (type === '/') {
	        // Check section nesting.
	        openSection = sections.pop();

	        if (!openSection)
	          throw new Error('Unopened section "' + value + '" at ' + start);

	        if (openSection[1] !== value)
	          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
	      } else if (type === 'name' || type === '{' || type === '&') {
	        nonSpace = true;
	      } else if (type === '=') {
	        // Set the tags for the next time around.
	        compileTags(value);
	      }
	    }

	    // Make sure there are no open sections when we're done.
	    openSection = sections.pop();

	    if (openSection)
	      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

	    return nestTokens(squashTokens(tokens));
	  }

	  /**
	   * Combines the values of consecutive text tokens in the given `tokens` array
	   * to a single token.
	   */
	  function squashTokens (tokens) {
	    var squashedTokens = [];

	    var token, lastToken;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      if (token) {
	        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
	          lastToken[1] += token[1];
	          lastToken[3] = token[3];
	        } else {
	          squashedTokens.push(token);
	          lastToken = token;
	        }
	      }
	    }

	    return squashedTokens;
	  }

	  /**
	   * Forms the given array of `tokens` into a nested tree structure where
	   * tokens that represent a section have two additional items: 1) an array of
	   * all tokens that appear in that section and 2) the index in the original
	   * template that represents the end of that section.
	   */
	  function nestTokens (tokens) {
	    var nestedTokens = [];
	    var collector = nestedTokens;
	    var sections = [];

	    var token, section;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      token = tokens[i];

	      switch (token[0]) {
	        case '#':
	        case '^':
	          collector.push(token);
	          sections.push(token);
	          collector = token[4] = [];
	          break;
	        case '/':
	          section = sections.pop();
	          section[5] = token[2];
	          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
	          break;
	        default:
	          collector.push(token);
	      }
	    }

	    return nestedTokens;
	  }

	  /**
	   * A simple string scanner that is used by the template parser to find
	   * tokens in template strings.
	   */
	  function Scanner (string) {
	    this.string = string;
	    this.tail = string;
	    this.pos = 0;
	  }

	  /**
	   * Returns `true` if the tail is empty (end of string).
	   */
	  Scanner.prototype.eos = function eos () {
	    return this.tail === '';
	  };

	  /**
	   * Tries to match the given regular expression at the current position.
	   * Returns the matched text if it can match, the empty string otherwise.
	   */
	  Scanner.prototype.scan = function scan (re) {
	    var match = this.tail.match(re);

	    if (!match || match.index !== 0)
	      return '';

	    var string = match[0];

	    this.tail = this.tail.substring(string.length);
	    this.pos += string.length;

	    return string;
	  };

	  /**
	   * Skips all text until the given regular expression can be matched. Returns
	   * the skipped string, which is the entire tail if no match can be made.
	   */
	  Scanner.prototype.scanUntil = function scanUntil (re) {
	    var index = this.tail.search(re), match;

	    switch (index) {
	      case -1:
	        match = this.tail;
	        this.tail = '';
	        break;
	      case 0:
	        match = '';
	        break;
	      default:
	        match = this.tail.substring(0, index);
	        this.tail = this.tail.substring(index);
	    }

	    this.pos += match.length;

	    return match;
	  };

	  /**
	   * Represents a rendering context by wrapping a view object and
	   * maintaining a reference to the parent context.
	   */
	  function Context (view, parentContext) {
	    this.view = view;
	    this.cache = { '.': this.view };
	    this.parent = parentContext;
	  }

	  /**
	   * Creates a new context using the given view with this context
	   * as the parent.
	   */
	  Context.prototype.push = function push (view) {
	    return new Context(view, this);
	  };

	  /**
	   * Returns the value of the given name in this context, traversing
	   * up the context hierarchy if the value is absent in this context's view.
	   */
	  Context.prototype.lookup = function lookup (name) {
	    var cache = this.cache;

	    var value;
	    if (cache.hasOwnProperty(name)) {
	      value = cache[name];
	    } else {
	      var context = this, names, index, lookupHit = false;

	      while (context) {
	        if (name.indexOf('.') > 0) {
	          value = context.view;
	          names = name.split('.');
	          index = 0;

	          /**
	           * Using the dot notion path in `name`, we descend through the
	           * nested objects.
	           *
	           * To be certain that the lookup has been successful, we have to
	           * check if the last object in the path actually has the property
	           * we are looking for. We store the result in `lookupHit`.
	           *
	           * This is specially necessary for when the value has been set to
	           * `undefined` and we want to avoid looking up parent contexts.
	           **/
	          while (value != null && index < names.length) {
	            if (index === names.length - 1)
	              lookupHit = hasProperty(value, names[index]);

	            value = value[names[index++]];
	          }
	        } else {
	          value = context.view[name];
	          lookupHit = hasProperty(context.view, name);
	        }

	        if (lookupHit)
	          break;

	        context = context.parent;
	      }

	      cache[name] = value;
	    }

	    if (isFunction(value))
	      value = value.call(this.view);

	    return value;
	  };

	  /**
	   * A Writer knows how to take a stream of tokens and render them to a
	   * string, given a context. It also maintains a cache of templates to
	   * avoid the need to parse the same template twice.
	   */
	  function Writer () {
	    this.cache = {};
	  }

	  /**
	   * Clears all cached templates in this writer.
	   */
	  Writer.prototype.clearCache = function clearCache () {
	    this.cache = {};
	  };

	  /**
	   * Parses and caches the given `template` and returns the array of tokens
	   * that is generated from the parse.
	   */
	  Writer.prototype.parse = function parse (template, tags) {
	    var cache = this.cache;
	    var tokens = cache[template];

	    if (tokens == null)
	      tokens = cache[template] = parseTemplate(template, tags);

	    return tokens;
	  };

	  /**
	   * High-level method that is used to render the given `template` with
	   * the given `view`.
	   *
	   * The optional `partials` argument may be an object that contains the
	   * names and templates of partials that are used in the template. It may
	   * also be a function that is used to load partial templates on the fly
	   * that takes a single argument: the name of the partial.
	   */
	  Writer.prototype.render = function render (template, view, partials) {
	    var tokens = this.parse(template);
	    var context = (view instanceof Context) ? view : new Context(view);
	    return this.renderTokens(tokens, context, partials, template);
	  };

	  /**
	   * Low-level method that renders the given array of `tokens` using
	   * the given `context` and `partials`.
	   *
	   * Note: The `originalTemplate` is only ever used to extract the portion
	   * of the original template that was contained in a higher-order section.
	   * If the template doesn't use higher-order sections, this argument may
	   * be omitted.
	   */
	  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate) {
	    var buffer = '';

	    var token, symbol, value;
	    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
	      value = undefined;
	      token = tokens[i];
	      symbol = token[0];

	      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
	      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
	      else if (symbol === '>') value = this.renderPartial(token, context, partials, originalTemplate);
	      else if (symbol === '&') value = this.unescapedValue(token, context);
	      else if (symbol === 'name') value = this.escapedValue(token, context);
	      else if (symbol === 'text') value = this.rawValue(token);

	      if (value !== undefined)
	        buffer += value;
	    }

	    return buffer;
	  };

	  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
	    var self = this;
	    var buffer = '';
	    var value = context.lookup(token[1]);

	    // This function is used to render an arbitrary template
	    // in the current context by higher-order sections.
	    function subRender (template) {
	      return self.render(template, context, partials);
	    }

	    if (!value) return;

	    if (isArray(value)) {
	      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
	        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
	      }
	    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
	      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
	    } else if (isFunction(value)) {
	      if (typeof originalTemplate !== 'string')
	        throw new Error('Cannot use higher-order sections without the original template');

	      // Extract the portion of the original template that the section contains.
	      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

	      if (value != null)
	        buffer += value;
	    } else {
	      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
	    }
	    return buffer;
	  };

	  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
	    var value = context.lookup(token[1]);

	    // Use JavaScript's definition of falsy. Include empty arrays.
	    // See https://github.com/janl/mustache.js/issues/186
	    if (!value || (isArray(value) && value.length === 0))
	      return this.renderTokens(token[4], context, partials, originalTemplate);
	  };

	  Writer.prototype.renderPartial = function renderPartial (token, context, partials) {
	    if (!partials) return;

	    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
	    if (value != null)
	      return this.renderTokens(this.parse(value), context, partials, value);
	  };

	  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return value;
	  };

	  Writer.prototype.escapedValue = function escapedValue (token, context) {
	    var value = context.lookup(token[1]);
	    if (value != null)
	      return mustache.escape(value);
	  };

	  Writer.prototype.rawValue = function rawValue (token) {
	    return token[1];
	  };

	  mustache.name = 'mustache.js';
	  mustache.version = '2.2.1';
	  mustache.tags = [ '{{', '}}' ];

	  // All high-level mustache.* functions use this writer.
	  var defaultWriter = new Writer();

	  /**
	   * Clears all cached templates in the default writer.
	   */
	  mustache.clearCache = function clearCache () {
	    return defaultWriter.clearCache();
	  };

	  /**
	   * Parses and caches the given template in the default writer and returns the
	   * array of tokens it contains. Doing this ahead of time avoids the need to
	   * parse templates on the fly as they are rendered.
	   */
	  mustache.parse = function parse (template, tags) {
	    return defaultWriter.parse(template, tags);
	  };

	  /**
	   * Renders the `template` with the given `view` and `partials` using the
	   * default writer.
	   */
	  mustache.render = function render (template, view, partials) {
	    if (typeof template !== 'string') {
	      throw new TypeError('Invalid template! Template should be a "string" ' +
	                          'but "' + typeStr(template) + '" was given as the first ' +
	                          'argument for mustache#render(template, view, partials)');
	    }

	    return defaultWriter.render(template, view, partials);
	  };

	  // This is here for backwards compatibility with 0.4.x.,
	  /*eslint-disable */ // eslint wants camel cased function name
	  mustache.to_html = function to_html (template, view, partials, send) {
	    /*eslint-enable*/

	    var result = mustache.render(template, view, partials);

	    if (isFunction(send)) {
	      send(result);
	    } else {
	      return result;
	    }
	  };

	  // Export the escaping function so that the user may override it.
	  // See https://github.com/janl/mustache.js/issues/244
	  mustache.escape = escapeHtml;

	  // Export these mainly for testing, but also for advanced usage.
	  mustache.Scanner = Scanner;
	  mustache.Context = Context;
	  mustache.Writer = Writer;

	}));


/***/ },
/* 163 */
/***/ function(module, exports) {

	'use strict';
	// Create a range object for efficently rendering strings to elements.
	var range;

	var doc = typeof document !== 'undefined' && document;

	var testEl = doc ?
	    doc.body || doc.createElement('div') :
	    {};

	var NS_XHTML = 'http://www.w3.org/1999/xhtml';

	var ELEMENT_NODE = 1;
	var TEXT_NODE = 3;
	var COMMENT_NODE = 8;

	// Fixes <https://github.com/patrick-steele-idem/morphdom/issues/32>
	// (IE7+ support) <=IE7 does not support el.hasAttribute(name)
	var hasAttributeNS;

	if (testEl.hasAttributeNS) {
	    hasAttributeNS = function(el, namespaceURI, name) {
	        return el.hasAttributeNS(namespaceURI, name);
	    };
	} else if (testEl.hasAttribute) {
	    hasAttributeNS = function(el, namespaceURI, name) {
	        return el.hasAttribute(name);
	    };
	} else {
	    hasAttributeNS = function(el, namespaceURI, name) {
	        return !!el.getAttributeNode(name);
	    };
	}

	function toElement(str) {
	    if (!range && doc.createRange) {
	        range = doc.createRange();
	        range.selectNode(doc.body);
	    }

	    var fragment;
	    if (range && range.createContextualFragment) {
	        fragment = range.createContextualFragment(str);
	    } else {
	        fragment = doc.createElement('body');
	        fragment.innerHTML = str;
	    }
	    return fragment.childNodes[0];
	}

	var specialElHandlers = {
	    /**
	     * Needed for IE. Apparently IE doesn't think that "selected" is an
	     * attribute when reading over the attributes using selectEl.attributes
	     */
	    OPTION: function(fromEl, toEl) {
	        fromEl.selected = toEl.selected;
	        if (fromEl.selected) {
	            fromEl.setAttribute('selected', '');
	        } else {
	            fromEl.removeAttribute('selected', '');
	        }
	    },
	    /**
	     * The "value" attribute is special for the <input> element since it sets
	     * the initial value. Changing the "value" attribute without changing the
	     * "value" property will have no effect since it is only used to the set the
	     * initial value.  Similar for the "checked" attribute, and "disabled".
	     */
	    INPUT: function(fromEl, toEl) {
	        fromEl.checked = toEl.checked;
	        if (fromEl.checked) {
	            fromEl.setAttribute('checked', '');
	        } else {
	            fromEl.removeAttribute('checked');
	        }

	        if (fromEl.value !== toEl.value) {
	            fromEl.value = toEl.value;
	        }

	        if (!hasAttributeNS(toEl, null, 'value')) {
	            fromEl.removeAttribute('value');
	        }

	        fromEl.disabled = toEl.disabled;
	        if (fromEl.disabled) {
	            fromEl.setAttribute('disabled', '');
	        } else {
	            fromEl.removeAttribute('disabled');
	        }
	    },

	    TEXTAREA: function(fromEl, toEl) {
	        var newValue = toEl.value;
	        if (fromEl.value !== newValue) {
	            fromEl.value = newValue;
	        }

	        if (fromEl.firstChild) {
	            fromEl.firstChild.nodeValue = newValue;
	        }
	    }
	};

	function noop() {}

	/**
	 * Returns true if two node's names are the same.
	 *
	 * NOTE: We don't bother checking `namespaceURI` because you will never find two HTML elements with the same
	 *       nodeName and different namespace URIs.
	 *
	 * @param {Element} a
	 * @param {Element} b The target element
	 * @return {boolean}
	 */
	function compareNodeNames(fromEl, toEl) {
	    var fromNodeName = fromEl.nodeName;
	    var toNodeName = toEl.nodeName;

	    if (fromNodeName === toNodeName) {
	        return true;
	    }

	    if (toEl.actualize &&
	        fromNodeName.charCodeAt(0) < 91 && /* from tag name is upper case */
	        toNodeName.charCodeAt(0) > 90 /* target tag name is lower case */) {
	        // If the target element is a virtual DOM node then we may need to normalize the tag name
	        // before comparing. Normal HTML elements that are in the "http://www.w3.org/1999/xhtml"
	        // are converted to upper case
	        return fromNodeName === toNodeName.toUpperCase();
	    } else {
	        return false;
	    }
	}

	/**
	 * Create an element, optionally with a known namespace URI.
	 *
	 * @param {string} name the element name, e.g. 'div' or 'svg'
	 * @param {string} [namespaceURI] the element's namespace URI, i.e. the value of
	 * its `xmlns` attribute or its inferred namespace.
	 *
	 * @return {Element}
	 */
	function createElementNS(name, namespaceURI) {
	    return !namespaceURI || namespaceURI === NS_XHTML ?
	        doc.createElement(name) :
	        doc.createElementNS(namespaceURI, name);
	}

	/**
	 * Loop over all of the attributes on the target node and make sure the original
	 * DOM node has the same attributes. If an attribute found on the original node
	 * is not on the new node then remove it from the original node.
	 *
	 * @param  {Element} fromNode
	 * @param  {Element} toNode
	 */
	function morphAttrs(fromNode, toNode) {
	    var attrs = toNode.attributes;
	    var i;
	    var attr;
	    var attrName;
	    var attrNamespaceURI;
	    var attrValue;
	    var fromValue;

	    if (toNode.assignAttributes) {
	        toNode.assignAttributes(fromNode);
	    } else {
	        for (i = attrs.length - 1; i >= 0; --i) {
	            attr = attrs[i];
	            attrName = attr.name;
	            attrNamespaceURI = attr.namespaceURI;
	            attrValue = attr.value;

	            if (attrNamespaceURI) {
	                attrName = attr.localName || attrName;
	                fromValue = fromNode.getAttributeNS(attrNamespaceURI, attrName);

	                if (fromValue !== attrValue) {
	                    fromNode.setAttributeNS(attrNamespaceURI, attrName, attrValue);
	                }
	            } else {
	                fromValue = fromNode.getAttribute(attrName);

	                if (fromValue !== attrValue) {
	                    fromNode.setAttribute(attrName, attrValue);
	                }
	            }
	        }
	    }

	    // Remove any extra attributes found on the original DOM element that
	    // weren't found on the target element.
	    attrs = fromNode.attributes;

	    for (i = attrs.length - 1; i >= 0; --i) {
	        attr = attrs[i];
	        if (attr.specified !== false) {
	            attrName = attr.name;
	            attrNamespaceURI = attr.namespaceURI;

	            if (attrNamespaceURI) {
	                attrName = attr.localName || attrName;

	                if (!hasAttributeNS(toNode, attrNamespaceURI, attrName)) {
	                    fromNode.removeAttributeNS(attrNamespaceURI, attrName);
	                }
	            } else {
	                if (!hasAttributeNS(toNode, null, attrName)) {
	                    fromNode.removeAttribute(attrName);
	                }
	            }
	        }
	    }
	}

	/**
	 * Copies the children of one DOM element to another DOM element
	 */
	function moveChildren(fromEl, toEl) {
	    var curChild = fromEl.firstChild;
	    while (curChild) {
	        var nextChild = curChild.nextSibling;
	        toEl.appendChild(curChild);
	        curChild = nextChild;
	    }
	    return toEl;
	}

	function defaultGetNodeKey(node) {
	    return node.id;
	}

	function morphdom(fromNode, toNode, options) {
	    if (!options) {
	        options = {};
	    }

	    if (typeof toNode === 'string') {
	        if (fromNode.nodeName === '#document' || fromNode.nodeName === 'HTML') {
	            var toNodeHtml = toNode;
	            toNode = doc.createElement('html');
	            toNode.innerHTML = toNodeHtml;
	        } else {
	            toNode = toElement(toNode);
	        }
	    }

	    var getNodeKey = options.getNodeKey || defaultGetNodeKey;
	    var onBeforeNodeAdded = options.onBeforeNodeAdded || noop;
	    var onNodeAdded = options.onNodeAdded || noop;
	    var onBeforeElUpdated = options.onBeforeElUpdated || noop;
	    var onElUpdated = options.onElUpdated || noop;
	    var onBeforeNodeDiscarded = options.onBeforeNodeDiscarded || noop;
	    var onNodeDiscarded = options.onNodeDiscarded || noop;
	    var onBeforeElChildrenUpdated = options.onBeforeElChildrenUpdated || noop;
	    var childrenOnly = options.childrenOnly === true;

	    // This object is used as a lookup to quickly find all keyed elements in the original DOM tree.
	    var fromNodesLookup = {};
	    var keyedRemovalList;

	    function addKeyedRemoval(key) {
	        if (keyedRemovalList) {
	            keyedRemovalList.push(key);
	        } else {
	            keyedRemovalList = [key];
	        }
	    }

	    function walkDiscardedChildNodes(node, skipKeyedNodes) {
	        if (node.nodeType === ELEMENT_NODE) {
	            var curChild = node.firstChild;
	            while (curChild) {

	                var key = undefined;

	                if (skipKeyedNodes && (key = getNodeKey(curChild))) {
	                    // If we are skipping keyed nodes then we add the key
	                    // to a list so that it can be handled at the very end.
	                    addKeyedRemoval(key);
	                } else {
	                    // Only report the node as discarded if it is not keyed. We do this because
	                    // at the end we loop through all keyed elements that were unmatched
	                    // and then discard them in one final pass.
	                    onNodeDiscarded(curChild);
	                    if (curChild.firstChild) {
	                        walkDiscardedChildNodes(curChild, skipKeyedNodes);
	                    }
	                }

	                curChild = curChild.nextSibling;
	            }
	        }
	    }

	    /**
	     * Removes a DOM node out of the original DOM
	     *
	     * @param  {Node} node The node to remove
	     * @param  {Node} parentNode The nodes parent
	     * @param  {Boolean} skipKeyedNodes If true then elements with keys will be skipped and not discarded.
	     * @return {undefined}
	     */
	    function removeNode(node, parentNode, skipKeyedNodes) {
	        if (onBeforeNodeDiscarded(node) === false) {
	            return;
	        }

	        if (parentNode) {
	            parentNode.removeChild(node);
	        }

	        onNodeDiscarded(node);
	        walkDiscardedChildNodes(node, skipKeyedNodes);
	    }

	    // // TreeWalker implementation is no faster, but keeping this around in case this changes in the future
	    // function indexTree(root) {
	    //     var treeWalker = document.createTreeWalker(
	    //         root,
	    //         NodeFilter.SHOW_ELEMENT);
	    //
	    //     var el;
	    //     while((el = treeWalker.nextNode())) {
	    //         var key = getNodeKey(el);
	    //         if (key) {
	    //             fromNodesLookup[key] = el;
	    //         }
	    //     }
	    // }

	    // // NodeIterator implementation is no faster, but keeping this around in case this changes in the future
	    //
	    // function indexTree(node) {
	    //     var nodeIterator = document.createNodeIterator(node, NodeFilter.SHOW_ELEMENT);
	    //     var el;
	    //     while((el = nodeIterator.nextNode())) {
	    //         var key = getNodeKey(el);
	    //         if (key) {
	    //             fromNodesLookup[key] = el;
	    //         }
	    //     }
	    // }

	    function indexTree(node) {
	        if (node.nodeType === ELEMENT_NODE) {
	            var curChild = node.firstChild;
	            while (curChild) {
	                var key = getNodeKey(curChild);
	                if (key) {
	                    fromNodesLookup[key] = curChild;
	                }

	                // Walk recursively
	                indexTree(curChild);

	                curChild = curChild.nextSibling;
	            }
	        }
	    }

	    indexTree(fromNode);

	    function handleNodeAdded(el) {
	        onNodeAdded(el);

	        var curChild = el.firstChild;
	        while (curChild) {
	            var nextSibling = curChild.nextSibling;

	            var key = getNodeKey(curChild);
	            if (key) {
	                var unmatchedFromEl = fromNodesLookup[key];
	                if (unmatchedFromEl && compareNodeNames(curChild, unmatchedFromEl)) {
	                    curChild.parentNode.replaceChild(unmatchedFromEl, curChild);
	                    morphEl(unmatchedFromEl, curChild);
	                }
	            }

	            handleNodeAdded(curChild);
	            curChild = nextSibling;
	        }
	    }

	    function morphEl(fromEl, toEl, childrenOnly) {
	        var toElKey = getNodeKey(toEl);
	        var curFromNodeKey;

	        if (toElKey) {
	            // If an element with an ID is being morphed then it is will be in the final
	            // DOM so clear it out of the saved elements collection
	            delete fromNodesLookup[toElKey];
	        }

	        if (toNode.isSameNode && toNode.isSameNode(fromNode)) {
	            return;
	        }

	        if (!childrenOnly) {
	            if (onBeforeElUpdated(fromEl, toEl) === false) {
	                return;
	            }

	            morphAttrs(fromEl, toEl);
	            onElUpdated(fromEl);

	            if (onBeforeElChildrenUpdated(fromEl, toEl) === false) {
	                return;
	            }
	        }

	        if (fromEl.nodeName !== 'TEXTAREA') {
	            var curToNodeChild = toEl.firstChild;
	            var curFromNodeChild = fromEl.firstChild;
	            var curToNodeKey;

	            var fromNextSibling;
	            var toNextSibling;
	            var matchingFromEl;

	            outer: while (curToNodeChild) {
	                toNextSibling = curToNodeChild.nextSibling;
	                curToNodeKey = getNodeKey(curToNodeChild);

	                while (curFromNodeChild) {
	                    if (curToNodeChild.isSameNode && curToNodeChild.isSameNode(curFromNodeChild)) {
	                        return;
	                    }

	                    curFromNodeKey = getNodeKey(curFromNodeChild);
	                    fromNextSibling = curFromNodeChild.nextSibling;

	                    var curFromNodeType = curFromNodeChild.nodeType;

	                    var isCompatible = undefined;

	                    if (curFromNodeType === curToNodeChild.nodeType) {
	                        if (curFromNodeType === ELEMENT_NODE) {
	                            // Both nodes being compared are Element nodes

	                            if (curToNodeKey) {
	                                // The target node has a key so we want to match it up with the correct element
	                                // in the original DOM tree
	                                if (curToNodeKey !== curFromNodeKey) {
	                                    // The current element in the original DOM tree does not have a matching key so
	                                    // let's check our lookup to see if there is a matching element in the original
	                                    // DOM tree
	                                    if ((matchingFromEl = fromNodesLookup[curToNodeKey])) {
	                                        if (curFromNodeChild.nextSibling === matchingFromEl) {
	                                            // Special case for single element removals. To avoid removing the original
	                                            // DOM node out of the tree (since that can break CSS transitions, etc.),
	                                            // we will instead discard the current node and wait until the next
	                                            // iteration to properly match up the keyed target element with its matching
	                                            // element in the original tree
	                                            isCompatible = false;
	                                        } else {
	                                            // We found a matching keyed element somewhere in the original DOM tree.
	                                            // Let's moving the original DOM node into the current position and morph
	                                            // it.

	                                            // NOTE: We use insertBefore instead of replaceChild because we want to go through
	                                            // the `removeNode()` function for the node that is being discarded so that
	                                            // all lifecycle hooks are correctly invoked
	                                            fromEl.insertBefore(matchingFromEl, curFromNodeChild);

	                                            if (curFromNodeKey) {
	                                                // Since the node is keyed it might be matched up later so we defer
	                                                // the actual removal to later
	                                                addKeyedRemoval(curFromNodeKey);
	                                            } else {
	                                                // NOTE: we skip nested keyed nodes from being removed since there is
	                                                //       still a chance they will be matched up later
	                                                removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);

	                                            }
	                                            fromNextSibling = curFromNodeChild.nextSibling;
	                                            curFromNodeChild = matchingFromEl;
	                                        }
	                                    } else {
	                                        // The nodes are not compatible since the "to" node has a key and there
	                                        // is no matching keyed node in the source tree
	                                        isCompatible = false;
	                                    }
	                                }
	                            } else if (curFromNodeKey) {
	                                // The original has a key
	                                isCompatible = false;
	                            }

	                            isCompatible = isCompatible !== false && compareNodeNames(curFromNodeChild, curToNodeChild);
	                            if (isCompatible) {
	                                // We found compatible DOM elements so transform
	                                // the current "from" node to match the current
	                                // target DOM node.
	                                morphEl(curFromNodeChild, curToNodeChild);
	                            }

	                        } else if (curFromNodeType === TEXT_NODE || curFromNodeType == COMMENT_NODE) {
	                            // Both nodes being compared are Text or Comment nodes
	                            isCompatible = true;
	                            // Simply update nodeValue on the original node to
	                            // change the text value
	                            curFromNodeChild.nodeValue = curToNodeChild.nodeValue;
	                        }
	                    }

	                    if (isCompatible) {
	                        // Advance both the "to" child and the "from" child since we found a match
	                        curToNodeChild = toNextSibling;
	                        curFromNodeChild = fromNextSibling;
	                        continue outer;
	                    }

	                    // No compatible match so remove the old node from the DOM and continue trying to find a
	                    // match in the original DOM. However, we only do this if the from node is not keyed
	                    // since it is possible that a keyed node might match up with a node somewhere else in the
	                    // target tree and we don't want to discard it just yet since it still might find a
	                    // home in the final DOM tree. After everything is done we will remove any keyed nodes
	                    // that didn't find a home
	                    if (curFromNodeKey) {
	                        // Since the node is keyed it might be matched up later so we defer
	                        // the actual removal to later
	                        addKeyedRemoval(curFromNodeKey);
	                    } else {
	                        // NOTE: we skip nested keyed nodes from being removed since there is
	                        //       still a chance they will be matched up later
	                        removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
	                    }

	                    curFromNodeChild = fromNextSibling;
	                }

	                // If we got this far then we did not find a candidate match for
	                // our "to node" and we exhausted all of the children "from"
	                // nodes. Therefore, we will just append the current "to" node
	                // to the end
	                if (curToNodeKey && (matchingFromEl = fromNodesLookup[curToNodeKey]) && compareNodeNames(matchingFromEl, curToNodeChild)) {
	                    fromEl.appendChild(matchingFromEl);
	                    morphEl(matchingFromEl, curToNodeChild);
	                } else {
	                    var onBeforeNodeAddedResult = onBeforeNodeAdded(curToNodeChild);
	                    if (onBeforeNodeAddedResult !== false) {
	                        if (onBeforeNodeAddedResult) {
	                            curToNodeChild = onBeforeNodeAddedResult;
	                        }

	                        if (curToNodeChild.actualize) {
	                            curToNodeChild = curToNodeChild.actualize(fromEl.ownerDocument || doc);
	                        }
	                        fromEl.appendChild(curToNodeChild);
	                        handleNodeAdded(curToNodeChild);
	                    }
	                }

	                curToNodeChild = toNextSibling;
	                curFromNodeChild = fromNextSibling;
	            }

	            // We have processed all of the "to nodes". If curFromNodeChild is
	            // non-null then we still have some from nodes left over that need
	            // to be removed
	            while (curFromNodeChild) {
	                fromNextSibling = curFromNodeChild.nextSibling;
	                if ((curFromNodeKey = getNodeKey(curFromNodeChild))) {
	                    // Since the node is keyed it might be matched up later so we defer
	                    // the actual removal to later
	                    addKeyedRemoval(curFromNodeKey);
	                } else {
	                    // NOTE: we skip nested keyed nodes from being removed since there is
	                    //       still a chance they will be matched up later
	                    removeNode(curFromNodeChild, fromEl, true /* skip keyed nodes */);
	                }
	                curFromNodeChild = fromNextSibling;
	            }
	        }

	        var specialElHandler = specialElHandlers[fromEl.nodeName];
	        if (specialElHandler) {
	            specialElHandler(fromEl, toEl);
	        }
	    } // END: morphEl(...)

	    var morphedNode = fromNode;
	    var morphedNodeType = morphedNode.nodeType;
	    var toNodeType = toNode.nodeType;

	    if (!childrenOnly) {
	        // Handle the case where we are given two DOM nodes that are not
	        // compatible (e.g. <div> --> <span> or <div> --> TEXT)
	        if (morphedNodeType === ELEMENT_NODE) {
	            if (toNodeType === ELEMENT_NODE) {
	                if (!compareNodeNames(fromNode, toNode)) {
	                    onNodeDiscarded(fromNode);
	                    morphedNode = moveChildren(fromNode, createElementNS(toNode.nodeName, toNode.namespaceURI));
	                }
	            } else {
	                // Going from an element node to a text node
	                morphedNode = toNode;
	            }
	        } else if (morphedNodeType === TEXT_NODE || morphedNodeType === COMMENT_NODE) { // Text or comment node
	            if (toNodeType === morphedNodeType) {
	                morphedNode.nodeValue = toNode.nodeValue;
	                return morphedNode;
	            } else {
	                // Text node to something else
	                morphedNode = toNode;
	            }
	        }
	    }

	    if (morphedNode === toNode) {
	        // The "to node" was not compatible with the "from node" so we had to
	        // toss out the "from node" and use the "to node"
	        onNodeDiscarded(fromNode);
	    } else {
	        morphEl(morphedNode, toNode, childrenOnly);

	        // We now need to loop over any keyed nodes that might need to be
	        // removed. We only do the removal if we know that the keyed node
	        // never found a match. When a keyed node is matched up we remove
	        // it out of fromNodesLookup and we use fromNodesLookup to determine
	        // if a keyed node has been matched up or not
	        if (keyedRemovalList) {
	            for (var i=0, len=keyedRemovalList.length; i<len; i++) {
	                var elToRemove = fromNodesLookup[keyedRemovalList[i]];
	                if (elToRemove) {
	                    removeNode(elToRemove, elToRemove.parentNode, false);
	                }
	            }
	        }
	    }

	    if (!childrenOnly && morphedNode !== fromNode && fromNode.parentNode) {
	        if (morphedNode.actualize) {
	            morphedNode = morphedNode.actualize(fromNode.ownerDocument || doc);
	        }
	        // If we had to swap out the from node with a new node because the old
	        // node was not compatible with the target node then we need to
	        // replace the old DOM node in the original DOM tree. This is only
	        // possible if the original DOM node was part of a DOM tree which
	        // we know is the case if it has a parent node.
	        fromNode.parentNode.replaceChild(morphedNode, fromNode);
	    }

	    return morphedNode;
	}

	module.exports = morphdom;


/***/ },
/* 164 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = strToHtml;
	function strToHtml(string) {
		if (document !== undefined && document.createElement !== undefined) {
			var cont = document.createElement('div');
			cont.innerHTML = string;
			if (cont.children.length === 1) {
				return cont.children[0];
			} else {
				return cont;
			}
		}
		return string;
	}

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = propertyProxy;

	var _get2 = __webpack_require__(153);

	var _get3 = _interopRequireDefault(_get2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Create a proxy for and object property.
	 * This gives you the possibility to process the data of the property
	 * when it is getted or setted.
	 *
	 * @name 		propertyProxy
	 * @param 		{Object} 		obj 			The object on which to create the proxy
	 * @param 		{String} 		property 		The property name that will be proxied
	 * @param 		{Object} 		descriptor 		A descriptor object that contains at least a get or a set method, or both
	 * @param 		{Boolean} 		applySetter 	If need to apply the descriptor setter directly on the current value or not
	 *
	 * @example 	js
	 * const myObject = {
	 * 		title : 'World'
	 * };
	 * // create the proxy
	 * propertyProxy(myObject, 'title', {
	 * 		get : (value) => {
	 * 			return `Hello ${value}`;
	 * 		},
	 * 		set : (value) => {
	 * 			return `Youhou ${value}`;
	 * 		}
	 * });
	 * console.log(myObject.title) => 'Hello World';
	 * myObject.title = 'Universe';
	 * console.log(myObject.title) => 'Hello Youhou Universe';
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function propertyProxy(obj, property, _descriptor) {
		var applySetter = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;


		// store the current value
		var val = (0, _get3.default)(obj, property);
		var descriptor = Object.getOwnPropertyDescriptor(obj.prototype || obj, property);

		// custom setter check
		var _set = function _set(value) {

			if (_descriptor.set) {
				value = _descriptor.set(value);
			}

			// descriptor
			if (descriptor && descriptor.set) {
				var ret = descriptor.set(value);
				if (ret) {
					val = ret;
				} else {
					val = descriptor.get();
				}
			} else {
				val = value;
			}
		};

		// apply the setter if needed
		if (applySetter) _set(val);

		// make sure we have the good descriptor
		var d = Object.getOwnPropertyDescriptor(obj, property);
		Object.defineProperty(obj, property, {
			get: function get() {
				var _val = val;
				if (_descriptor.get) {
					_val = _descriptor.get(_val);
				}
				if (descriptor && descriptor.get) {
					_val = descriptor.get();
				}
				return _val;
			},
			set: function set(v) {
				// const oldValue = val;
				// internal set to use the good setter
				_set(v);
				// notify of new update
				// this.notify(objPath, val, oldValue);
			},
			configurable: descriptor && descriptor.configurable !== undefined ? descriptor.configurable : false,
			enumarable: descriptor && descriptor.enumarable !== undefined ? descriptor.enumarable : true
		});

		// return the value
		return val;
	}

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _domReady = __webpack_require__(135);

	var _domReady2 = _interopRequireDefault(_domReady);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// prepare a settings object to store
	// the getted settings from the css
	var settings = {};

	// wait the css to be loaded
	/**
	 * Store all the sugar settings grabed from your scss settings
	 * @type 		{Object}
	 * @name 		settings
	 */

	// imports
	(0, _domReady2.default)(function () {
		var settingsElm = document.createElement('div');
		settingsElm.classList.add('s-settings');
		document.body.appendChild(settingsElm);
		var _settings = window.getComputedStyle(document.querySelector('.s-settings'), ':after').getPropertyValue('content');
		if (_settings) {
			_settings = _settings.replace(/\\"/g, '"');
			// _settings = _settings.replace(/\\\'\\"/g,'"').replace(/\\"\\\'/g,'"');
			// _settings = _settings.replace(/\'\\"/g,'"').replace(/\\"\'/g,'"');
			// _settings = _settings.replace(/'"/g,'"').replace(/"'/g,'"');
			_settings = _settings.slice(1, _settings.length - 1);
			_settings = JSON.parse(_settings);

			Object.assign(settings, _settings);
			// settings = {...settings, ..._settings};
		}
	});

	// export the settings
	module.exports = settings;

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = next;

	var _matches = __webpack_require__(132);

	var _matches2 = _interopRequireDefault(_matches);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Browse the passed element next siblings to find the first element that matches the passed selector
	 *
	 * @name 		next
	 * @param 		{HTMLElement} 					elm  		The element to start on
	 * @param 		{String} 						selector 	A css selector to search for
	 * @return 		{HTMLElement} 								The element found or null
	 *
	 * @example  	js
	 * import next from 'sugarcss/js/dom/next'
	 * const nextElm = next(myCoolElement, '.my-cool-class');
	 * if (nextElm) {
	 * 		// we have found en element that matches the selector
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function next(elm, selector) {
	  elm = elm.nextSibling;
	  while (elm) {
	    if ((0, _matches2.default)(elm, selector)) {
	      return elm;
	    }
	    elm = elm.nextSibling;
	  }
	  return false;
	}

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = previous;

	var _matches = __webpack_require__(132);

	var _matches2 = _interopRequireDefault(_matches);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Browse the passed element previous siblings to find the first element that matches the passed selector
	 *
	 * @name 		previous
	 * @param 		{HTMLElement} 					elm  		The element to start on
	 * @param 		{String} 						selector 	A css selector to search for
	 * @return 		{HTMLElement} 								The element found or null
	 *
	 * @example  	js
	 * import previous from 'sugarcss/js/dom/previous'
	 * const previousElm = previous(myCoolElement, '.my-cool-class');
	 * if (previousElm) {
	 * 		// we have found en element that matches the selector
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function previous(elm, selector) {
	  elm = elm.previousSibling;
	  while (elm) {
	    if ((0, _matches2.default)(elm, selector)) {
	      return elm;
	    }
	    elm = elm.previousSibling;
	  }
	  return false;
	}

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = offset;

	var _getTranslateProperties = __webpack_require__(170);

	var _getTranslateProperties2 = _interopRequireDefault(_getTranslateProperties);

	var _getBoundingClientRect = __webpack_require__(127);

	var _getBoundingClientRect2 = _interopRequireDefault(_getBoundingClientRect);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get the offset top and left of the passed element from the document top left point
	 *
	 * @name 		offset
	 * @param 		{HTMLElement} 					elm  		The element to get the offset from
	 * @return 		{Object} 									The offset top and left object
	 *
	 * @example  	js
	 * import offset from 'sugarcss/js/dom/offset'
	 * const offsetElm = offset(myCoolElement);
	 * // output : { top : 200, left : 300 }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function offset(elm) {
		var body = void 0,
		    box = void 0,
		    clientLeft = void 0,
		    clientTop = void 0,
		    docEl = void 0,
		    left = void 0,
		    scrollLeft = void 0,
		    scrollTop = void 0,
		    top = void 0,
		    translates = void 0,
		    transX = void 0,
		    transY = void 0;
		// box = __getBoundingClientRect(elm);
		box = elm.getBoundingClientRect();
		body = document.body;
		docEl = document.documentElement;
		scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
		scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;
		clientTop = docEl.clientTop || body.clientTop || 0;
		clientLeft = docEl.clientLeft || body.clientLeft || 0;
		translates = (0, _getTranslateProperties2.default)(elm);
		transX = translates.x;
		transY = translates.y;
		top = box.top + scrollTop - clientTop + transY;
		left = box.left + scrollLeft - clientLeft + transX;
		return {
			top: Math.round(top),
			left: Math.round(left)
		};
	}

/***/ },
/* 170 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = getTranslateProperties;
	/**
	 * Get a translate properties of an HTMLElement
	 *
	 * @name 		getTranslateProperties
	 * @param 		{HTMLElement} 					elm  		The element to get the properties from
	 * @return 		{Object} 									The translate x,y and z properties
	 *
	 * @example  	js
	 * import getTranslateProperties from 'sugarcss/js/dom/getTranslateProperties'
	 * const props = getTranslateProperties(myCoolHTMLElement);
	 * // output format
	 * // {
	 * // 	x : 100,
	 * // 	y : 0,
	 * // 	z : 0
	 * // }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function getTranslateProperties(elm) {
		if (!window.getComputedStyle) return;
		var idx = void 0,
		    mat = void 0,
		    style = void 0,
		    transform = void 0;
		style = getComputedStyle(elm);
		transform = style.transform || style.webkitTransform || style.mozTransform || style.msTransform;
		mat = transform.match(/^matrix3d\((.+)\)$/);
		if (mat) {
			return {
				x: parseFloat(mat[1].split(', ')[12]),
				y: parseFloat(mat[1].split(', ')[13]),
				z: parseFloat(mat[1].split(', ')[14])
			};
		}
		mat = transform.match(/^matrix\((.+)\)$/);
		if (mat) {
			return {
				x: parseFloat(mat[1].split(', ')[4]),
				y: parseFloat(mat[1].split(', ')[5]),
				z: parseFloat(mat[1].split(', ')[6])
			};
		} else {
			return {
				x: 0,
				y: 0,
				z: 0
			};
		}
	}

/***/ },
/* 171 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = scrollTop;
	/**
	 * document.scrollTop polyfill
	 */
	function scrollTop() {
	  return window.pageYOffset || document.scrollTop || document.body.scrollTop;
	}

/***/ },
/* 172 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = insertAfter;
	/**
	 * Insert an HTMLElement after another HTMLElement
	 *
	 * @name 		insertAfter
	 * @param 		{HTMLElement} 				elm  		The element to insert
	 * @param 		{HTMLElement} 				refElm 		The element after which to insert the passed element
	 *
	 * @example  	js
	 * import insertAfter from 'sugarcss/js/dom/insertAfter'
	 * insertAfter(myElementToInsert, theReferenceElement);
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function insertAfter(elm, refElm) {
	  // next sibling of ref elm
	  var nextSibling = refElm.nextSibling;
	  if (!nextSibling) {
	    refElm.parentNode.appendChild(elm);
	  } else {
	    refElm.parentNode.insertBefore(elm, nextSibling);
	  }
	}

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Observable = __webpack_require__(12);

	_Observable.Observable.prototype.groupByTimeout = function (properties) {
		var _this = this;

		var observable = new _Observable.Observable(function (subscriber) {
			var source = _this;
			var timeout = null;
			var stack = [];

			// subscribe to the source
			var subscription = source.subscribe(function (elm) {
				// add the element to stack
				stack.push(elm);
				// clear the timeout
				clearTimeout(timeout);
				// set a new timeout to wait next loop to
				// send the elements into the stream
				timeout = setTimeout(function () {
					// send the stack downward
					subscriber.next(stack);
					// clean stack
					stack = [];
				});
			}, function (error) {
				return subscriber.error(error);
			}, function () {
				return subscriber.complete();
			});

			// make sure we return the subscription
			return subscription;
		});

		// return the observable
		return observable;
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SActivateComponent = __webpack_require__(175);

	var _SActivateComponent2 = _interopRequireDefault(_SActivateComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SActivateComponent2.default;

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SComponent2 = __webpack_require__(3);

	var _SComponent3 = _interopRequireDefault(_SComponent2);

	var _scrollTop = __webpack_require__(171);

	var _scrollTop2 = _interopRequireDefault(_scrollTop);

	var _uniqid = __webpack_require__(8);

	var _uniqid2 = _interopRequireDefault(_uniqid);

	var _querySelectorLive = __webpack_require__(11);

	var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

	var _STemplate = __webpack_require__(161);

	var _STemplate2 = _interopRequireDefault(_STemplate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Sugar-activate.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               #
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               #
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author   Olivier Bossel <olivier.bossel@gmail.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @created  20.01.16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @updated  20.01.16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version  1.0.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// save all the activate elements
	if (!window._sActivateStack) {
		window._sActivateStack = {};
	}

	// Actual activate element class

	var SActivateComponent = function (_SComponent) {
		_inherits(SActivateComponent, _SComponent);

		/**
	  * Setup
	  */
		SActivateComponent.setup = function setup(type, settings) {
			var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sActivate';

			_SComponent3.default.setup(name, type, settings);
		};

		/**
	  * targets
	  * Store all the targets of the component
	  * @type 	[Array]
	  */


		/**
	  * _parentActivateComponent
	  * Store the parent activate component instance
	  * to activate it when this component is activated
	  * @type 	{SActivateComponent}
	  */


		/**
	  * Constructor
	  */
		function SActivateComponent(elm) {
			var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sActivate';

			_classCallCheck(this, SActivateComponent);

			var _this = _possibleConstructorReturn(this, _SComponent.call(this, name, elm, {
				target: '@',
				id: null,
				group: null,
				activeTargetClass: null,
				activeClass: 'active',
				history: true,
				anchor: true,
				toggle: false,
				trigger: 'click',
				unactivateTrigger: null,
				unactivateTimeout: 200,
				preventScroll: false,
				beforeActivate: null,
				afterActivate: null,
				beforeUnactivate: null,
				afterUnactivate: null
			}, settings));

			_this.targets = [];
			_this._parentActivateComponent = null;
			return _this;
		}

		/**
	  * Init
	  */


		SActivateComponent.prototype._init = function _init() {
			var _this2 = this;

			// init component
			_SComponent.prototype._init.call(this);

			// watch some attributes
			this.watch('attr.href,attr.' + this.componentName + ',attr.' + this.componentName + 'Target', function (newVal, oldVal) {
				_this2.update();
			});

			// update references
			this.update();

			// handle history if needed
			if (this.settings.history) {
				this._handleHistory();
			}

			if (!this._getGroup(this.elm)) {
				[].forEach.call(this.elm.parentNode.childNodes, function (sibling) {
					if (!_this2._getGroup(_this2.elm) && sibling.nodeName != '#text' && sibling.nodeName != '#coment') {
						var target = _this2._getTarget(sibling);
						if (target) {
							var sibling_grp = _this2._getGroup(sibling);
							if (sibling_grp && sibling.sActivateGeneratedGroup) {
								_this2.elm.setAttribute(_this2.componentNameDash + '-group', sibling_grp);
							}
						}
					}
				});

				// if we don't have any group yet
				if (!this._getGroup(this.elm)) {
					// if ( ! this.dataset(`${this.componentName}Group`)) {
					this.elm.setAttribute(this.componentNameDash + '-group', 'group-' + Math.round(Math.random() * 99999999));
					// this.dataset(`${this.componentName}Group`, 'group-'+Math.round(Math.random()*99999999));
					this.elm.sActivateGeneratedGroup = true;
				}
			}

			// check if we are in another s-activate element
			this._parentActivateComponent = this._getClosestActivateComponent();

			// listen for click
			this.elm.addEventListener(this.settings.trigger, function (e) {
				// if (e.target !== this.elm) return;
				e.preventDefault();
				// clear unactivate timeout
				clearTimeout(_this2._unactivateSetTimeout);
				// if toggle
				if (_this2.settings.toggle && _this2.isActive()) {
					// unactivate
					_this2.unactivate();
					// check if has a hash
					if (_this2.settings.history) {
						window.history.back();
					}
				} else {
					if (_this2.settings.history) {
						// simply activate again if the same id that anchor
						// this can happened when an element has history to false
						if (document.location.hash && document.location.hash === _this2.settings.id) {
							_this2._activate();
						} else {
							// save the scroll position
							// this._scrollTop = __scrollTop();
							// simply change the hash
							// the event listener will take care of activate the
							// good element
							if (_this2.settings.preventScroll) {
								window.history.pushState({
									url: _this2.settings.id
								}, null, '' + document.location.pathname + _this2.settings.id);
								_this2._processHistoryChange();
							} else {
								document.location.hash = '' + _this2.settings.id;
							}
						}
					} else {
						// activate the element
						_this2._activate();
					}
				}
			});

			// wait a loop to activate the element if needed
			// we wait to be sure all the elements on the pages have
			// been inited
			setTimeout(function () {
				// manage the active class
				if (_this2.elm.classList.contains(_this2.settings.activeClass)) {
					_this2._activate();
				}
				// check with anchor if need to activate the element
				if (_this2.settings.anchor) {
					var hash = document.location.hash;
					if (hash) {
						if (hash.substr(1) === _this2.settings.id) {
							_this2._activate();
						}
					}
				}
			});
		};

		/**
	  * enable
	  * Enable the component
	  * Called automatically by the _onAdded method
	  * @return 	{SActivateComponent}
	  */


		SActivateComponent.prototype.enable = function enable() {
			_SComponent.prototype.enable.call(this);
		};

		/**
	  * disable
	  * Disable the component
	  * Called automatically by the _onRemoved method
	  * @return 	{SActivateComponent}
	  */


		SActivateComponent.prototype.disable = function disable() {
			_SComponent.prototype.disable.call(this);
		};

		/**
	  * When the element is added to the dom
	  */


		SActivateComponent.prototype._onAdded = function _onAdded() {
			var _this3 = this;

			_SComponent.prototype._onAdded.call(this);
			// check if has an unactivate trigger
			var unactivate_trigger = this.settings.unactivateTrigger;
			if (unactivate_trigger) {
				this.elm.addEventListener(unactivate_trigger, this._onElmUnactivate.bind(this));
				if (unactivate_trigger == 'mouseleave' || unactivate_trigger == 'mouseout') {
					[].forEach.call(this.targets, function (target) {
						target.addEventListener('mouseenter', _this3._onTargetMouseEnter.bind(_this3));
						target.addEventListener(unactivate_trigger, _this3._onTargetUnactivate.bind(_this3));
					});
				}
			}
		};

		/**
	  * When the element is removed from dom
	  */


		SActivateComponent.prototype._onRemoved = function _onRemoved() {
			var _this4 = this;

			if (this.settings.unactivateTrigger) {
				this.elm.removeEventListener(this.settings.unactivateTrigger, this._onElmUnactivate);
				[].forEach.call(this.targets, function (target) {
					target.removeEventListener('mouseenter', _this4._onTargetMouseEnter);
					target.removeEventListener(_this4.settings.unactivateTrigger, _this4._onTargetUnactivate);
				});
			}
			_SComponent.prototype._onRemoved.call(this);
		};

		/**
	  * Destroy routine
	  */


		SActivateComponent.prototype.destroy = function destroy() {
			delete window._sActivateStack[this.settings.id];
			_SComponent.prototype.destroy.call(this);
		};

		/**
	  * Element unactivate
	  */


		SActivateComponent.prototype._onElmUnactivate = function _onElmUnactivate(e) {
			var _this5 = this;

			this._unactivateSetTimeout = setTimeout(function () {
				_this5.unactivate();
			}, this.settings.unactivateTimeout);
		};

		/**
	  * Targer mouseenter callback
	  */


		SActivateComponent.prototype._onTargetMouseEnter = function _onTargetMouseEnter(e) {
			// clear the unactivate timeout
			clearTimeout(this._unactivateSetTimeout);
		};

		/**
	  * Target uncactivate callback
	  */


		SActivateComponent.prototype._onTargetUnactivate = function _onTargetUnactivate(e) {
			var _this6 = this;

			this._unactivateSetTimeout = setTimeout(function () {
				_this6.unactivate();
			}, this.settings.unactivateTimeout);
		};

		/**
	  * Get target
	  */


		SActivateComponent.prototype._getTarget = function _getTarget(elm) {
			if (elm[this.componentName]) {
				return elm[this.componentName].target;
			}
			return elm.getAttribute('data-' + this.componentNameDash) || elm.getAttribute(this.componentNameDash) || elm.getAttribute('href');
		};

		/**
	  * Get group
	  */


		SActivateComponent.prototype._getGroup = function _getGroup(elm) {
			return elm.getAttribute(this.componentNameDash + '-group') || elm.getAttribute('data-' + this.componentNameDash + '-group');
		};

		/**
	  * Check if is active
	  */


		SActivateComponent.prototype.isActive = function isActive() {
			return this.elm.classList.contains(this.settings.activeClass);
		};

		/**
	  * Activate the element
	  */


		SActivateComponent.prototype._activate = function _activate() {
			var _this7 = this;

			// before activate callback
			this.settings.beforeActivate && this.settings.beforeActivate(this);

			// unactive all group elements
			var grp = this._getGroup(this.elm);
			[].forEach.call(document.body.querySelectorAll('[data-' + this.componentNameDash + '-group="' + grp + '"],[' + this.componentNameDash + '-group="' + grp + '"]'), function (group_elm) {
				// get the api
				var api = group_elm[_this7.componentName];
				// unactive element
				if (api) {
					api.unactivate();
				}
			});

			// activate the element
			this.elm.classList.add(this.settings.activeClass);

			// activate all the targets
			[].forEach.call(this.targets, function (target_elm) {
				// remove the active class on target
				target_elm.classList.add(_this7.settings.activeTargetClass || _this7.settings.activeClass);
			});

			// if has a perent, activate it
			if (this._parentActivateComponent) {
				this._parentActivateComponent._activate();
			}

			// callback
			this.settings.afterActivate && this.settings.afterActivate(this);
		};

		/**
	  * Handle history
	  */


		SActivateComponent.prototype._handleHistory = function _handleHistory() {
			var _this8 = this;

			if (!this.settings.preventScroll) {
				window.addEventListener('hashchange', function (e) {
					_this8._processHistoryChange();
				});
			} else {
				window.addEventListener('popstate', function (e) {
					_this8._processHistoryChange();
				});
			}
		};

		/**
	  * Process history change
	  */


		SActivateComponent.prototype._processHistoryChange = function _processHistoryChange() {
			var hash = document.location.hash;
			if (hash) {
				if (hash.substr(1) === this.settings.id) {
					this._activate();
				}
			}
		};

		/**
	  * Activate the element
	  */


		SActivateComponent.prototype.activate = function activate() {
			if (this.settings.history) {
				if (this.settings.preventScroll) {
					window.history.pushState(null, null, document.location.pathname + '#' + this.settings.id);
					this._processHistoryChange();
				} else {
					document.location.hash = this.settings.id;
				}
			} else {
				// activate simply
				this._activate();
			}
		};

		/**
	  * Unactive
	  */


		SActivateComponent.prototype.unactivate = function unactivate() {
			var _this9 = this;

			// before unactivate
			this.settings.beforeUnactivate && this.settings.onBeforeUnactivate(this);

			// unactive the item itself
			this.elm.classList.remove(this.settings.activeClass);

			// unactive targets
			[].forEach.call(this.targets, function (target) {
				target.classList.remove(_this9.settings.activeTargetClass || _this9.settings.activeClass);
			});

			// callback
			this.settings.afterUnactivate && this.settings.afterUnactivate(this);
		};

		/**
	  * Update targets, etc...
	  */


		SActivateComponent.prototype.update = function update() {
			var _this10 = this;

			var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;


			// get the target
			this.target = this.attr[this.componentName] || this.attr.href;

			// if the target is an id
			// and the setting "id" is not set
			// set the setting with the target id
			if (!this.settings.id && typeof this.target === 'string' && this.target.substr(0, 1) !== '.') {
				if (this.target.substr(0, 1) === '#') {
					this.settings.id = this.target.substr(1);
				} else {
					this.settings.id = this.target;
				}
			} else if (!this.settings.id) {
				this.settings.id = (0, _uniqid2.default)();
			}

			// if don't have any target
			// mean that it's the element itself
			// so check if already an id
			// otherwise, set a new one
			if (!this.target) {
				var id = this.componentNameDash + '-' + (0, _uniqid2.default)();
				if (this.elm.getAttribute('id') == null) {
					this.elm.setAttribute('id', id);
				}
				this.target = '#' + id;
			}

			// save in stack id an id exist
			if (this.settings.id) {
				window._sActivateStack[this.settings.id] = this;
			}

			// update the targets array
			if (this.target) {
				this.targets = scope.querySelectorAll(this.target);
				[].forEach.call(this.targets, function (t) {
					t._sActivateTrigger = _this10.elm;
				});
			} else {
				this.targets = [];
			}
		};

		/**
	  * Get closest
	  */


		SActivateComponent.prototype._getClosestActivateComponent = function _getClosestActivateComponent() {
			var elm = this.elm.parentNode;
			while (elm && elm != document) {
				if (elm._sActivateTrigger // if the element is a target of an activate component
				// && elm._sActivateTrigger[this.componentName] // and the trigger is the same instance type
				&& elm._sActivateTrigger !== this.elm) {
					return elm._sActivateTrigger[this.componentName];
				}
				elm = elm.parentNode;
			}
			return false;
		};

		return SActivateComponent;
	}(_SComponent3.default);

	// STemplate integration


	_STemplate2.default.registerComponentIntegration('SActivateComponent', function (component) {
		component.targets.forEach(function (target) {
			_STemplate2.default.keepAttribute(target, 'id');
		});
	});

	// expose in window.sugar
	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.SActivateComponent = SActivateComponent;

	// export
	exports.default = SActivateComponent;

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SValidateComponent = __webpack_require__(177);

	var _SValidateComponent2 = _interopRequireDefault(_SValidateComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SValidateComponent2.default;

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _SComponent2 = __webpack_require__(3);

	var _SComponent3 = _interopRequireDefault(_SComponent2);

	var _querySelectorLive = __webpack_require__(11);

	var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

	var _extend2 = __webpack_require__(178);

	var _extend3 = _interopRequireDefault(_extend2);

	var _closest = __webpack_require__(131);

	var _closest2 = _interopRequireDefault(_closest);

	var _color = __webpack_require__(188);

	var _color2 = _interopRequireDefault(_color);

	var _email = __webpack_require__(189);

	var _email2 = _interopRequireDefault(_email);

	var _url = __webpack_require__(190);

	var _url2 = _interopRequireDefault(_url);

	var _number = __webpack_require__(191);

	var _number2 = _interopRequireDefault(_number);

	var _integer = __webpack_require__(192);

	var _integer2 = _interopRequireDefault(_integer);

	var _STemplate = __webpack_require__(161);

	var _STemplate2 = _interopRequireDefault(_STemplate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * SValidateComponent.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Component that allows to stick an element to the top of the screen
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author   Olivier Bossel <olivier.bossel@gmail.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @created  25.07.16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @updated  25.07.16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version  1.0.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var SValidateComponent = function (_SComponent) {
		_inherits(SValidateComponent, _SComponent);

		/**
	  * Setup
	  */
		SValidateComponent.setup = function setup(type, settings) {
			var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sValidate';

			_SComponent3.default.setup(name, type, settings);
		};

		/**
	  * Registered validators
	  * @type 	{Object}
	  */


		/**
	  * Messages
	  * @type 	{Object}
	  */


		/**
	  * Register a validator
	  * @param 	{String} 	name 		The name of the validator
	  * @param 	{Object} 	validator 	The validator settings
	  */
		SValidateComponent.registerValidator = function registerValidator(name) {
			var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			// check settings
			if (!settings.validate || typeof settings.validate !== 'function') {
				throw 'The validator ' + name + ' need his validate setting to be a function that return true or false';
			}
			// set the new validator
			SValidateComponent.validators[name] = settings;
		};

		/**
	  * _isValid
	  * Store if the field is valid or not
	  * @type 	{Boolean}
	  */


		/**
	  * _isDirty
	  * Store if the field is dirty or not
	  * @type 	{Boolean}
	  */


		/**
	  * Constructor
	  */
		function SValidateComponent(elm) {
			var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sValidate';

			_classCallCheck(this, SValidateComponent);

			var _this = _possibleConstructorReturn(this, _SComponent.call(this, name, elm, {

				/**
	    * validate
	    * The list of validators to apply on the element
	    * @type 	{String}
	    */
				validate: '@',

				/**
	    * on
	    * Specify when the validation has to be triggered
	    * @type 	{String}
	    */
				on: 'change',

				/**
	    * timeout
	    * Specify a timeout before validating the field
	    * @type 	{Integer}
	    */
				timeout: 200,

				/**
	    * validators
	    * Store the specific validators settings for this particular instance
	    * @type 	{Object}
	    */
				validators: {},

				/**
	    * messages
	    * Store the specific messages wanted for this particular instance
	    * @type 	{Object}
	    */
				messages: {},

				/**
	    * apply
	    * The function to use to apply the error message
	    * @type 	{Object}
	    */
				apply: {},

				/**
	    * dirtyClass
	    * The class applied on the element itself when it has been touch like a virgin
	    */
				dirtyClass: 'is-dirty',

				/**
	    * validClass
	    * The class applied on the element itself when it is valid
	    * @type 	{String}
	    */
				validClass: 'is-valid',

				/**
	    * invalidClass
	    * The class applied on the element itself when it is invalid
	    * @type 	{String}
	    */
				invalidClass: 'is-invalid',

				/**
	    * requiredClass
	    * The class applied on the element itself when it is required
	    * This is applied AFTER the validation
	    * @type 	{String}
	    */
				requiredClass: 'is-required'

			}, settings));

			_this._isValid = true;
			_this._isDirty = false;
			return _this;
		}

		/**
	  * Init
	  */


		SValidateComponent.prototype._init = function _init() {
			var _this2 = this;

			// init component
			_SComponent.prototype._init.call(this);

			// extend messages with the static ones
			this._messages = _extends({}, SValidateComponent.messages, this.settings.messages);

			// extend validators with the static ones
			this._validators = (0, _extend3.default)(SValidateComponent.validators, this.settings.validators);

			// apply standard validators
			this._applyStandardValidators();

			// listen when to trigger the validation
			if (this.settings.on) {

				// if is a select, a checkbox or a radio

				this.elm.addEventListener(this.settings.on, function (e) {
					// validate directly if no timeout
					if (!_this2.settings.timeout) _this2.validate();else {
						// wait before validating
						clearTimeout(_this2._timeout);
						_this2._timeout = setTimeout(function () {
							_this2.validate();
						}, _this2.settings.timeout);
					}
				});
			}

			// try to find the closest form to listen when it is submitted
			var formElm = (0, _closest2.default)(this.elm, 'form');
			this._formElm = formElm;
			if (formElm) {
				formElm.setAttribute('novalidate', true);
				// formElm._sValidateComponentSubmitHandler = true;
				formElm.addEventListener('submit', function (e) {
					var isValid = _this2.validate();
					// validate the input
					if (!isValid) {
						e.preventDefault();
					}
				});
			}
		};

		/**
	  * render
	  * Render the component
	  * @return 	{void}
	  */


		SValidateComponent.prototype.render = function render() {
			// if is dirty
			if (this._isDirty) {
				this.addComponentClass(this.elm, null, null, 'dirty');
				if (this._isValid) {
					this.removeComponentClass(this.elm, null, null, 'invalid');
					this.addComponentClass(this.elm, null, null, 'valid');
				} else {
					this.addComponentClass(this.elm, null, null, 'invalid');
					this.removeComponentClass(this.elm, null, null, 'valid');
				}
			}
		};

		/**
	  * Apply the validation
	  */


		SValidateComponent.prototype.validate = function validate() {

			var invalidType = null;
			var applyFn = null;
			var message = null;

			// set that is dirty
			this._isDirty = true;

			// loop on each validators and launch them
			var validators = this.settings.validate.split(',');
			for (var i = 0; i < validators.length; i++) {
				var name = validators[i];

				// check if the value is null and the validator name if not
				// "required" to not launch the validation
				if (!this.getValue() && name !== 'required') continue;

				// process to validation
				if (this._validators[name] && !this._validators[name].validate(this)) {

					// set the invalid type
					invalidType = name;

					// set the invalid class on the element itself
					this._isValid = false;

					// get the message
					message = this._validators[name].message;
					if (typeof message === 'function') message = message(this, this._messages[name]);else message = this._messages[name];
					// apply the error message
					applyFn = this.settings.apply[name] || this.settings.apply['default'];
					// stop the loop
					break;
				}
			}

			// if it's the same invalid type
			// do nothing
			if (this._invalidType && this._invalidType === invalidType) {
				this._isValid = false;
				return false;
			} else if (invalidType) {
				// save the invalid type
				this._invalidType = invalidType;
			}

			// unapply
			if (this._unApply) {
				this._unApply();
				this._unApply = null;
			}

			if (applyFn) {
				this._unApply = applyFn(this.elm, message);
			}

			if (!invalidType) {
				this._isValid = true;
			} else {
				this._isValid = false;
			}

			// render
			this.render();

			// the input is valid
			return this._isValid;
		};

		/**
	  * Get the value
	  */


		SValidateComponent.prototype.getValue = function getValue() {
			var value = this.elm.value;
			if (value === '') return null;
			return value;
		};

		/**
	  * Apply standard validators
	  * This check the element attributes like the type, required, etc...
	  * to apply the standard validators
	  */


		SValidateComponent.prototype._applyStandardValidators = function _applyStandardValidators() {
			var validators = this.settings.validate;
			if (validators) validators = validators.split(',');else validators = [];
			var type = this.attr.type;
			// required
			if (this.attr.required !== undefined && validators.indexOf('required') === -1) {
				validators.push('required');
			}

			// range
			if (this.attr.min && this.attr.max) {
				if (validators.indexOf('range') === -1) {
					validators.push('range');
				}
			} else {
				// max
				if (this.attr.max && validators.indexOf('max') === -1) {
					validators.push('max');
				}
				// min
				if (this.attr.min && validators.indexOf('min') === -1) {
					validators.push('min');
				}
			}
			// maxlength
			if (this.attr.maxlength && validators.indexOf('maxlength') === -1) {
				validators.push('maxlength');
			}
			// pattern
			if (this.attr.pattern && validators.indexOf('pattern') === -1) {
				validators.push('pattern');
			}
			// number
			if (type === 'number' && validators.indexOf('number') === -1) {
				validators.push('number');
			}
			// range
			if (type === 'range' && validators.indexOf('range') === -1) {
				validators.push('range');
			}
			// color
			if (type === 'color' && validators.indexOf('color') === -1) {
				validators.push('color');
			}
			// email
			if (type === 'email' && validators.indexOf('email') === -1) {
				validators.push('email');
			}
			// url
			if (type === 'url' && validators.indexOf('url') === -1) {
				validators.push('url');
			}
			// set the validators back in settings
			this.settings.validate = validators.join(',');
		};

		return SValidateComponent;
	}(_SComponent3.default);

	// required validator


	SValidateComponent.validators = {};
	SValidateComponent.messages = {
		required: 'This field is required',
		min: 'This field value must greater or equal than %min',
		max: 'This field value must lower or equal than %max',
		maxlength: 'This field must be shorter than %maxlength',
		pattern: 'This field must respect this pattern "%pattern"',
		integer: 'This field must be an integer',
		number: 'This field must be a number',
		range: 'This field must stand between %min and %max',
		email: 'This field must be a valid email address',
		color: 'This field must be a valid color',
		url: 'This field must be a valid url'
	};
	SValidateComponent.registerValidator('required', {
		validate: function validate(api) {
			if (api.attr.required === undefined) return true;
			return api.getValue() !== null;
		}
	});

	// min validator
	SValidateComponent.registerValidator('min', {
		validate: function validate(api) {
			var value = api.getValue();
			return value !== null && value >= api.attr.min;
		},
		message: function message(api, _message) {
			return _message.replace('%min', api.attr.min);
		}
	});

	// max validator
	SValidateComponent.registerValidator('max', {
		validate: function validate(api) {
			var value = api.getValue();
			return value !== null && value <= api.attr.max;
		},
		message: function message(api, _message2) {
			return _message2.replace('%max', api.attr.max);
		}
	});

	// range validator
	SValidateComponent.registerValidator('range', {
		validate: function validate(api) {
			var value = api.getValue();
			return value !== null && value <= api.attr.max && value >= api.attr.min;
		},
		message: function message(api, _message3) {
			return _message3.replace('%max', api.attr.max).replace('%min', api.attr.min);
		}
	});

	// maxlength validator
	SValidateComponent.registerValidator('maxlength', {
		validate: function validate(api) {
			return api.getValue().toString().length <= api.attr.maxlength;
		},
		message: function message(api, _message4) {
			return _message4.replace('%maxlength', api.attr.maxlength);
		}
	});

	// pattern validator
	SValidateComponent.registerValidator('pattern', {
		validate: function validate(api) {
			var reg = new RegExp(api.attr.pattern);
			return api.getValue().toString().match(reg);
		},
		message: function message(api, _message5) {
			return _message5.replace('%pattern', api.attr.pattern);
		}
	});

	// number validator
	SValidateComponent.registerValidator('number', {
		validate: function validate(api) {
			return (0, _number2.default)(api.getValue());
		}
	});

	// integer validator
	SValidateComponent.registerValidator('integer', {
		validate: function validate(api) {
			return (0, _integer2.default)(api.getValue());
		}
	});

	// color validator
	SValidateComponent.registerValidator('color', {
		validate: function validate(api) {
			return (0, _color2.default)(api.getValue());
		}
	});

	// email validator
	SValidateComponent.registerValidator('email', {
		validate: function validate(api) {
			return (0, _email2.default)(api.getValue());
		}
	});

	// url validator
	SValidateComponent.registerValidator('url', {
		validate: function validate(api) {
			return (0, _url2.default)(api.getValue());
		}
	});

	// STemplate integration
	_STemplate2.default.registerComponentIntegration('SValidateComponent', function (component) {
		_STemplate2.default.keepAttribute(component.elm, 'class');
		if (component._formElm) {
			_STemplate2.default.keepAttribute(component._formElm, 'novalidate');
		}
	});

	// expose in window.sugar
	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.SValidateComponent = SValidateComponent;

	// export
	exports.default = SValidateComponent;

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(179);


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(180),
	    createAssigner = __webpack_require__(181),
	    keysIn = __webpack_require__(185);

	/**
	 * This method is like `_.assign` except that it iterates over own and
	 * inherited source properties.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assign
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * function Bar() {
	 *   this.c = 3;
	 * }
	 *
	 * Foo.prototype.b = 2;
	 * Bar.prototype.d = 4;
	 *
	 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
	 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
	 */
	var assignIn = createAssigner(function(object, source) {
	  copyObject(source, keysIn(source), object);
	});

	module.exports = assignIn;


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(144);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var baseRest = __webpack_require__(182),
	    isIterateeCall = __webpack_require__(184);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return baseRest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = (assigner.length > 3 && typeof customizer == 'function')
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(183);

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
	 *
	 * @private
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 */
	function baseRest(func, start) {
	  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    index = -1;
	    var otherArgs = Array(start + 1);
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = baseRest;


/***/ },
/* 183 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  switch (args.length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(43),
	    isArrayLike = __webpack_require__(95),
	    isIndex = __webpack_require__(99),
	    isObject = __webpack_require__(56);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	var arrayLikeKeys = __webpack_require__(91),
	    baseKeysIn = __webpack_require__(186),
	    isArrayLike = __webpack_require__(95);

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
	}

	module.exports = keysIn;


/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(56),
	    isPrototype = __webpack_require__(101),
	    nativeKeysIn = __webpack_require__(187);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  if (!isObject(object)) {
	    return nativeKeysIn(object);
	  }
	  var isProto = isPrototype(object),
	      result = [];

	  for (var key in object) {
	    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = baseKeysIn;


/***/ },
/* 187 */
/***/ function(module, exports) {

	/**
	 * This function is like
	 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * except that it includes inherited enumerable properties.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function nativeKeysIn(object) {
	  var result = [];
	  if (object != null) {
	    for (var key in Object(object)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = nativeKeysIn;


/***/ },
/* 188 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = isColor;
	/**
	 * Check if the passed value is a color
	 *
	 * @name 		isColor
	 * @param 		{Mixed} 		value 		The value to check
	 * @return 		{Boolean} 					The check result
	 *
	 * @example 	js
	 * isColor('red') => true
	 * isColor('#fff') => true
	 * isColor('hello') => false
	 *
	 * @see 		http://stackoverflow.com/questions/6386090/validating-css-color-names
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function isColor(value) {
	  var ele = document.createElement("div");
	  ele.style.color = value;
	  return ele.style.color.split(/\s+/).join('').toLowerCase();
	}

/***/ },
/* 189 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = isEmail;
	/**
	 * Check if the passed value is a valid email address
	 *
	 * @name 		isEmail
	 * @param 		{Mixed} 		value 		The value to check
	 * @return 		{Boolean} 					The check result
	 *
	 * @example 	js
	 * isEmail('john.doe@gmail.com') => true
	 * isEmail('plop@yop.com') => true
	 * isEmail('hello') => false
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function isEmail(data) {
	  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(data);
	}

/***/ },
/* 190 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = isUrl;
	/**
	 * Check if the passed value is a valid url
	 *
	 * @name 		isUrl
	 * @param 		{Mixed} 		value 		The value to check
	 * @return 		{Boolean} 					The check result
	 *
	 * @example 	js
	 * isUrl('http://google.com') => true
	 * isUrl('ftp://web.coco.com:2222') => true
	 * isUrl('hello') => false
	 */
	function isUrl(data) {
	  var strRegex = "^((https|http|ftp|rtsp|mms)?://)" + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
	  + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
	  + "|" // 允许IP和DOMAIN（域名）
	  + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
	  + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
	  + "[a-z]{2,6})" // first level domain- .com or .museum
	  + "(:[0-9]{1,4})?" // 端口- :80
	  + "((/?)|" // a slash isn't required if there is no file name
	  + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
	  var re = new RegExp(strRegex);
	  return re.test(data);
	}

/***/ },
/* 191 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = isNumber;
	/**
	 * Check if the passed value is a number
	 *
	 * @name 		isNumber
	 * @param 		{Mixed} 		value 		The value to check
	 * @return 		{Boolean} 					The check result
	 *
	 * @example 	js
	 * isNumber(12) => true
	 * isNumber(22.3) => true
	 * isNumber('20') => false
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function isNumber(source) {
	  return !isNaN(parseFloat(source)) && isFinite(source);
	}

/***/ },
/* 192 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = isInteger;
	/**
	 * Check if the passed value is an integer
	 *
	 * @name 		isInteger
	 * @param 		{Mixed} 		value 		The value to check
	 * @return 		{Boolean} 					The check result
	 *
	 * @example 	js
	 * isInteger(10) => true
	 * isInteger('hello') => false
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function isInteger(data) {
	  return !isNaN(data) && function (x) {
	    return (x | 0) === x;
	  }(parseFloat(data));
	}

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _STrianglifyComponent = __webpack_require__(194);

	var _STrianglifyComponent2 = _interopRequireDefault(_STrianglifyComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _STrianglifyComponent2.default;

/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SComponent2 = __webpack_require__(3);

	var _SComponent3 = _interopRequireDefault(_SComponent2);

	var _STemplate = __webpack_require__(161);

	var _STemplate2 = _interopRequireDefault(_STemplate);

	var _trianglify = __webpack_require__(195);

	var _trianglify2 = _interopRequireDefault(_trianglify);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	__webpack_require__(236);

	var STrianglifyComponent = function (_SComponent) {
		_inherits(STrianglifyComponent, _SComponent);

		/**
	  * @constructor
	  * @param 		{HTMLElement} 		elm 					The element on which to create the trianglify effect
	  * @param 		{Object} 			settings 				The component settings
	  * @param 		{String} 			[name="sTrianglify"]	The component name
	  */
		function STrianglifyComponent(elm) {
			var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sTrianglify';

			_classCallCheck(this, STrianglifyComponent);

			var _this = _possibleConstructorReturn(this, _SComponent.call(this, name, elm, {

				/**
	    * The width of the generated trianglify picture
	    * @setting
	    * @type 		{Number}
	    * @default 	elm.offsetWith
	    */
				width: null,

				/**
	    * The height of the generated trianglify picture
	    * @setting
	    * @type 		{Number}
	    * @default 	elm.offsetHeight
	    */
				height: null,

				/**
	    * The size of each cell that will compose the trianglify picture
	    * @setting
	    * @type 		{Number}
	    * @default 	75
	    */
				cellSize: 75,

				/**
	    * Decimal value between 0 and 1 (inclusive), defaults to 0.75. Specify the amount of randomness used when generating triangles.
	    * @setting
	    * @type 		{Number}
	    * @default 	0.75
	    */
				variance: .75,

				/**
	    * Seeds the random number generator to create repeatable patterns. When set to null, the random number will be seeded with random values from the environment. An example usage would be passing in blog post titles as the seed to generate unique trianglify patterns for every post on a blog that won't change when the page reloads.
	    * @setting
	    * @type 		{Number}
	    * @default 	null
	    */
				seed: null,

				/**
	    * String or array of CSS-formatted colors, default is 'random'.
	    * Specify the color gradient used on the x axis.
	    * @setting
	    * @type 		{Array}{String}
	    * @default 	random
	    */
				xColors: 'random',

				/**
	    * String or array of CSS-formatted colors, default is 'match_x'.
	    * When set to 'match_x' the same gradient will be used on both axes. Otherwise, accepts the same options as xColors.
	    * @setting
	    * @type 		{Array}{String}
	    * @default 	match_x
	    */
				yColors: 'match_x',

				/**
	    *  Set the color space used for generating gradients. Supported values are rgb, hsv, hsl, hsi, lab and hcl.
	    * @setting
	    * @type 		{String}
	    * @default 	lab
	    */
				colorSpace: 'lab',

				/**
	    * Specify a custom function for coloring triangles, defaults to null. Accepts a function to override the standard gradient coloring that takes the x,y coordinates of a triangle's centroid as arguments and returns a CSS-formatted color string representing the color that triangle should have.
	    * @setting
	    * @type 		{Function}
	    * @default 	null
	    * @example 	js
	    * var colorFunc = function(x, y) {
	    * 	return 'hsl('+Math.floor(Math.abs(x*y)*360)+',80%,60%)';
	    * };
	    * var pattern = Trianglify({colorFunction: colorFunc})
	    */
				colorFunction: null,

				/**
	    * Specify the width of the stroke on triangle shapes in the pattern. The default value is the ideal value for eliminating antialiasing artifacts when rendering patterns to a canvas.
	    * @setting
	    * @type 		{Number}
	    * @default 	1.51
	    */
				strokeWidth: 1.51,

				/**
	    * Array of points ([x, y]) to trianglulate. When not specified an array randomised points is generated filling the space.
	    * @setting
	    * @type 		{Array}
	    * @default 	null
	    */
				points: null

			}, settings));

			console.log(_this.settings);
			return _this;
		}

		/**
	  * Init
	  */


		STrianglifyComponent.prototype._init = function _init() {
			// init component
			_SComponent.prototype._init.call(this);
		};

		/**
	  * Enable the component
	  */


		STrianglifyComponent.prototype.enable = function enable() {
			_SComponent.prototype.enable.call(this);
			this.addComponentClass(this.elm);
			window.addResizeListener(this.elm, this._onElmResize.bind(this));
		};

		/**
	  * Disable the component
	  */


		STrianglifyComponent.prototype.disable = function disable() {
			_SComponent.prototype.disable.call(this);
			this.removeComponentClass(this.elm);
			window.removeResizeListener(this.elm, this._onElmResize);
		};

		/**
	  * When the element is resized
	  */


		STrianglifyComponent.prototype._onElmResize = function _onElmResize() {
			// create a new trianglify
			var trianglify = (0, _trianglify2.default)({
				width: this.settings.width || this.elm.offsetWidth,
				height: this.settings.height || this.elm.offsetHeight,
				cell_size: this.settings.cellSize || this.elm.offsetHeight * 2,
				x_colors: this.settings.xColors,
				y_colors: this.settings.yColors,
				color_space: this.settings.colorSpace,
				variance: this.settings.variance,
				seed: this.settings.seed,
				color_function: this.settings.colorFunction,
				stroke_width: this.settings.strokeWidth,
				points: this.settings.points
			});
			this.elm.style.backgroundImage = 'url(' + trianglify.png() + ')';
		};

		return STrianglifyComponent;
	}(_SComponent3.default);

	// STemplate integration


	_STemplate2.default.registerComponentIntegration('STrianglifyComponent', function (component) {
		_STemplate2.default.keepAttribute(component.elm, 'style');
	});

	// expose in window.sugar
	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.STrianglifyComponent = STrianglifyComponent;

	// export
	exports.default = STrianglifyComponent;

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * Trianglify.js
	 * by @qrohlf
	 *
	 * Licensed under the GPLv3
	 */

	var delaunay = __webpack_require__(196);
	var seedrandom = __webpack_require__(197);
	var chroma = __webpack_require__(230); //PROBLEM: chroma.js is nearly 32k in size
	var colorbrewer = __webpack_require__(231); //We could use the chroma.js colorbrewer, but it's got some ugly stuff so we use our own subset.
	var _generate_points = __webpack_require__(232);

	var Pattern = __webpack_require__(233);

	var defaults = {
	  width: 600,                       // Width of pattern
	  height: 400,                      // Height of pattern
	  cell_size: 75,                    // Size of the cells used to generate a randomized grid
	  variance: 0.75,                   // how much to randomize the grid
	  seed: null,                       // Seed for the RNG
	  x_colors: 'random',               // X color stops
	  y_colors: 'match_x',              // Y color stops
	  palette: colorbrewer,             // Palette to use for 'random' color option
	  color_space: 'lab',               // Color space used for gradient construction & interpolation
	  color_function: null,             // Color function f(x, y) that returns a color specification that is consumable by chroma-js
	  stroke_width: 1.51,               // Width of stroke. Defaults to 1.51 to fix an issue with canvas antialiasing.
	  points: undefined                 // An Array of [x,y] coordinates to trianglulate. Defaults to undefined, and points are generated.
	};

	/*********************************************************
	*
	* Main function that is exported to the global namespace
	*
	**********************************************************/

	function Trianglify(opts) {
	  var rand;
	  
	  // apply defaults
	  opts = _merge_opts(defaults, opts);

	  // setup seedable RNG
	  rand = seedrandom(opts.seed);

	  // randomize colors if requested
	  if (opts.x_colors === 'random') opts.x_colors = _random_from_palette();
	  if (opts.y_colors === 'random') opts.y_colors = _random_from_palette();
	  if (opts.y_colors === 'match_x') opts.y_colors = opts.x_colors;

	  // some sanity-checking
	  if (!(opts.width > 0 && opts.height > 0)) {
	    throw new Error("Width and height must be numbers greater than 0");
	  }

	  if (opts.cell_size < 2) {
	    throw new Error("Cell size must be greater than 2.");
	  }

	  // Setup the color gradient function
	  var gradient;

	  if (opts.color_function) {
	    gradient = function(x, y) {
	      return chroma(opts.color_function(x, y));
	    };
	  } else {
	    var x_color = chroma.scale(opts.x_colors).mode(opts.color_space);
	    var y_color = chroma.scale(opts.y_colors).mode(opts.color_space);
	    gradient = function(x, y) {
	      return chroma.interpolate(x_color(x), y_color(y), 0.5, opts.color_space);
	    };
	  }

	  // Figure out key dimensions

	  // it's a pain to prefix width and height with opts all the time, so let's
	  // give them proper variables to refer to
	  var width = opts.width;
	  var height = opts.height;

	  // How many cells we're going to have on each axis (pad by 2 cells on each edge)
	  var cells_x = Math.floor((width + 4 * opts.cell_size) / opts.cell_size);
	  var cells_y = Math.floor((height + 4 * opts.cell_size) / opts.cell_size);

	  // figure out the bleed widths to center the grid
	  var bleed_x = ((cells_x * opts.cell_size) - width)/2;
	  var bleed_y = ((cells_y * opts.cell_size) - height)/2;

	  // how much can out points wiggle (+/-) given the cell padding?
	  var variance = opts.cell_size * opts.variance / 2;

	  // Set up normalizers
	  var norm_x = function(x) {
	    return _map(x, [-bleed_x, width+bleed_x], [0, 1]);
	  };

	  var norm_y = function(y) {
	    return _map(y, [-bleed_y, height+bleed_y], [0, 1]);
	  };

	  // generate a point mesh
	  var points = opts.points || _generate_points(width, height, bleed_x, bleed_y, opts.cell_size, variance, rand);

	  // delaunay.triangulate gives us indices into the original coordinate array
	  var geom_indices = delaunay.triangulate(points);

	  // iterate over the indices in groups of three to flatten them into polygons, with color lookup
	  var triangles = [];
	  var lookup_point = function(i) { return points[i];};
	  for (var i=0; i < geom_indices.length; i += 3) {
	    var vertices = [geom_indices[i], geom_indices[i+1], geom_indices[i+2]].map(lookup_point);
	    var centroid = _centroid(vertices);
	    var color = gradient(norm_x(centroid.x), norm_y(centroid.y)).hex();
	    triangles.push([color, vertices]);
	  }
	  return Pattern(triangles, opts);


	  /*********************************************************
	  *
	  * Private functions
	  *
	  **********************************************************/

	  function _map(num, in_range, out_range ) {
	    return ( num - in_range[0] ) * ( out_range[1] - out_range[0] ) / ( in_range[1] - in_range[0] ) + out_range[0];
	  }

	  //triangles only!
	  function _centroid(d) {
	    return {
	      x: (d[0][0] + d[1][0] + d[2][0])/3,
	      y: (d[0][1] + d[1][1] + d[2][1])/3
	    };
	  }

	  // select a random palette from colorbrewer
	  function _random_from_palette() {
	    if (opts.palette instanceof Array) {
	      return opts.palette[Math.floor(rand()*opts.palette.length)];
	    }

	    var keys = Object.keys(opts.palette);
	    return opts.palette[keys[Math.floor(rand()*keys.length)]];
	  }

	  // shallow extend (sort of) for option defaults
	  function _merge_opts(defaults, options) {
	    var out = {};

	    // shallow-copy defaults so we don't mutate the input objects (bad)
	    for (var key in defaults) {
	      out[key] = defaults[key];
	    }

	    for (key in options) {
	      if (defaults.hasOwnProperty(key)) {
	        out[key] = options[key]; // override defaults with options
	      } else {
	        throw new Error(key+" is not a configuration option for Trianglify. Check your spelling?");
	      }
	    }
	    return out;
	  }

	} //end of Trianglify function closure

	// exports
	Trianglify.colorbrewer = colorbrewer;
	Trianglify.defaults = defaults;
	module.exports = Trianglify;


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	var Delaunay;

	(function() {
	  "use strict";

	  var EPSILON = 1.0 / 1048576.0;

	  function supertriangle(vertices) {
	    var xmin = Number.POSITIVE_INFINITY,
	        ymin = Number.POSITIVE_INFINITY,
	        xmax = Number.NEGATIVE_INFINITY,
	        ymax = Number.NEGATIVE_INFINITY,
	        i, dx, dy, dmax, xmid, ymid;

	    for(i = vertices.length; i--; ) {
	      if(vertices[i][0] < xmin) xmin = vertices[i][0];
	      if(vertices[i][0] > xmax) xmax = vertices[i][0];
	      if(vertices[i][1] < ymin) ymin = vertices[i][1];
	      if(vertices[i][1] > ymax) ymax = vertices[i][1];
	    }

	    dx = xmax - xmin;
	    dy = ymax - ymin;
	    dmax = Math.max(dx, dy);
	    xmid = xmin + dx * 0.5;
	    ymid = ymin + dy * 0.5;

	    return [
	      [xmid - 20 * dmax, ymid -      dmax],
	      [xmid            , ymid + 20 * dmax],
	      [xmid + 20 * dmax, ymid -      dmax]
	    ];
	  }

	  function circumcircle(vertices, i, j, k) {
	    var x1 = vertices[i][0],
	        y1 = vertices[i][1],
	        x2 = vertices[j][0],
	        y2 = vertices[j][1],
	        x3 = vertices[k][0],
	        y3 = vertices[k][1],
	        fabsy1y2 = Math.abs(y1 - y2),
	        fabsy2y3 = Math.abs(y2 - y3),
	        xc, yc, m1, m2, mx1, mx2, my1, my2, dx, dy;

	    /* Check for coincident points */
	    if(fabsy1y2 < EPSILON && fabsy2y3 < EPSILON)
	      throw new Error("Eek! Coincident points!");

	    if(fabsy1y2 < EPSILON) {
	      m2  = -((x3 - x2) / (y3 - y2));
	      mx2 = (x2 + x3) / 2.0;
	      my2 = (y2 + y3) / 2.0;
	      xc  = (x2 + x1) / 2.0;
	      yc  = m2 * (xc - mx2) + my2;
	    }

	    else if(fabsy2y3 < EPSILON) {
	      m1  = -((x2 - x1) / (y2 - y1));
	      mx1 = (x1 + x2) / 2.0;
	      my1 = (y1 + y2) / 2.0;
	      xc  = (x3 + x2) / 2.0;
	      yc  = m1 * (xc - mx1) + my1;
	    }

	    else {
	      m1  = -((x2 - x1) / (y2 - y1));
	      m2  = -((x3 - x2) / (y3 - y2));
	      mx1 = (x1 + x2) / 2.0;
	      mx2 = (x2 + x3) / 2.0;
	      my1 = (y1 + y2) / 2.0;
	      my2 = (y2 + y3) / 2.0;
	      xc  = (m1 * mx1 - m2 * mx2 + my2 - my1) / (m1 - m2);
	      yc  = (fabsy1y2 > fabsy2y3) ?
	        m1 * (xc - mx1) + my1 :
	        m2 * (xc - mx2) + my2;
	    }

	    dx = x2 - xc;
	    dy = y2 - yc;
	    return {i: i, j: j, k: k, x: xc, y: yc, r: dx * dx + dy * dy};
	  }

	  function dedup(edges) {
	    var i, j, a, b, m, n;

	    for(j = edges.length; j; ) {
	      b = edges[--j];
	      a = edges[--j];

	      for(i = j; i; ) {
	        n = edges[--i];
	        m = edges[--i];

	        if((a === m && b === n) || (a === n && b === m)) {
	          edges.splice(j, 2);
	          edges.splice(i, 2);
	          break;
	        }
	      }
	    }
	  }

	  Delaunay = {
	    triangulate: function(vertices, key) {
	      var n = vertices.length,
	          i, j, indices, st, open, closed, edges, dx, dy, a, b, c;

	      /* Bail if there aren't enough vertices to form any triangles. */
	      if(n < 3)
	        return [];

	      /* Slice out the actual vertices from the passed objects. (Duplicate the
	       * array even if we don't, though, since we need to make a supertriangle
	       * later on!) */
	      vertices = vertices.slice(0);

	      if(key)
	        for(i = n; i--; )
	          vertices[i] = vertices[i][key];

	      /* Make an array of indices into the vertex array, sorted by the
	       * vertices' x-position. */
	      indices = new Array(n);

	      for(i = n; i--; )
	        indices[i] = i;

	      indices.sort(function(i, j) {
	        return vertices[j][0] - vertices[i][0];
	      });

	      /* Next, find the vertices of the supertriangle (which contains all other
	       * triangles), and append them onto the end of a (copy of) the vertex
	       * array. */
	      st = supertriangle(vertices);
	      vertices.push(st[0], st[1], st[2]);
	      
	      /* Initialize the open list (containing the supertriangle and nothing
	       * else) and the closed list (which is empty since we havn't processed
	       * any triangles yet). */
	      open   = [circumcircle(vertices, n + 0, n + 1, n + 2)];
	      closed = [];
	      edges  = [];

	      /* Incrementally add each vertex to the mesh. */
	      for(i = indices.length; i--; edges.length = 0) {
	        c = indices[i];

	        /* For each open triangle, check to see if the current point is
	         * inside it's circumcircle. If it is, remove the triangle and add
	         * it's edges to an edge list. */
	        for(j = open.length; j--; ) {
	          /* If this point is to the right of this triangle's circumcircle,
	           * then this triangle should never get checked again. Remove it
	           * from the open list, add it to the closed list, and skip. */
	          dx = vertices[c][0] - open[j].x;
	          if(dx > 0.0 && dx * dx > open[j].r) {
	            closed.push(open[j]);
	            open.splice(j, 1);
	            continue;
	          }

	          /* If we're outside the circumcircle, skip this triangle. */
	          dy = vertices[c][1] - open[j].y;
	          if(dx * dx + dy * dy - open[j].r > EPSILON)
	            continue;

	          /* Remove the triangle and add it's edges to the edge list. */
	          edges.push(
	            open[j].i, open[j].j,
	            open[j].j, open[j].k,
	            open[j].k, open[j].i
	          );
	          open.splice(j, 1);
	        }

	        /* Remove any doubled edges. */
	        dedup(edges);

	        /* Add a new triangle for each edge. */
	        for(j = edges.length; j; ) {
	          b = edges[--j];
	          a = edges[--j];
	          open.push(circumcircle(vertices, a, b, c));
	        }
	      }

	      /* Copy any remaining open triangles to the closed list, and then
	       * remove any triangles that share a vertex with the supertriangle,
	       * building a list of triplets that represent triangles. */
	      for(i = open.length; i--; )
	        closed.push(open[i]);
	      open.length = 0;

	      for(i = closed.length; i--; )
	        if(closed[i].i < n && closed[i].j < n && closed[i].k < n)
	          open.push(closed[i].i, closed[i].j, closed[i].k);

	      /* Yay, we're done! */
	      return open;
	    },
	    contains: function(tri, p) {
	      /* Bounding box test first, for quick rejections. */
	      if((p[0] < tri[0][0] && p[0] < tri[1][0] && p[0] < tri[2][0]) ||
	         (p[0] > tri[0][0] && p[0] > tri[1][0] && p[0] > tri[2][0]) ||
	         (p[1] < tri[0][1] && p[1] < tri[1][1] && p[1] < tri[2][1]) ||
	         (p[1] > tri[0][1] && p[1] > tri[1][1] && p[1] > tri[2][1]))
	        return null;

	      var a = tri[1][0] - tri[0][0],
	          b = tri[2][0] - tri[0][0],
	          c = tri[1][1] - tri[0][1],
	          d = tri[2][1] - tri[0][1],
	          i = a * d - b * c;

	      /* Degenerate tri. */
	      if(i === 0.0)
	        return null;

	      var u = (d * (p[0] - tri[0][0]) - b * (p[1] - tri[0][1])) / i,
	          v = (a * (p[1] - tri[0][1]) - c * (p[0] - tri[0][0])) / i;

	      /* If we're outside the tri, fail. */
	      if(u < 0.0 || v < 0.0 || (u + v) > 1.0)
	        return null;

	      return [u, v];
	    }
	  };

	  if(true)
	    module.exports = Delaunay;
	})();


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	// A library of seedable RNGs implemented in Javascript.
	//
	// Usage:
	//
	// var seedrandom = require('seedrandom');
	// var random = seedrandom(1); // or any seed.
	// var x = random();       // 0 <= x < 1.  Every bit is random.
	// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.

	// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
	// Period: ~2^116
	// Reported to pass all BigCrush tests.
	var alea = __webpack_require__(198);

	// xor128, a pure xor-shift generator by George Marsaglia.
	// Period: 2^128-1.
	// Reported to fail: MatrixRank and LinearComp.
	var xor128 = __webpack_require__(201);

	// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
	// Period: 2^192-2^32
	// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
	var xorwow = __webpack_require__(202);

	// xorshift7, by François Panneton and Pierre L'ecuyer, takes
	// a different approach: it adds robustness by allowing more shifts
	// than Marsaglia's original three.  It is a 7-shift generator
	// with 256 bits, that passes BigCrush with no systmatic failures.
	// Period 2^256-1.
	// No systematic BigCrush failures reported.
	var xorshift7 = __webpack_require__(203);

	// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
	// very long period that also adds a Weyl generator. It also passes
	// BigCrush with no systematic failures.  Its long period may
	// be useful if you have many generators and need to avoid
	// collisions.
	// Period: 2^4128-2^32.
	// No systematic BigCrush failures reported.
	var xor4096 = __webpack_require__(204);

	// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
	// number generator derived from ChaCha, a modern stream cipher.
	// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
	// Period: ~2^127
	// No systematic BigCrush failures reported.
	var tychei = __webpack_require__(205);

	// The original ARC4-based prng included in this library.
	// Period: ~2^1600
	var sr = __webpack_require__(206);

	sr.alea = alea;
	sr.xor128 = xor128;
	sr.xorwow = xorwow;
	sr.xorshift7 = xorshift7;
	sr.xor4096 = xor4096;
	sr.tychei = tychei;

	module.exports = sr;


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
	// http://baagoe.com/en/RandomMusings/javascript/
	// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
	// Original work is under MIT license -

	// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
	//
	// Permission is hereby granted, free of charge, to any person obtaining a copy
	// of this software and associated documentation files (the "Software"), to deal
	// in the Software without restriction, including without limitation the rights
	// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	// copies of the Software, and to permit persons to whom the Software is
	// furnished to do so, subject to the following conditions:
	// 
	// The above copyright notice and this permission notice shall be included in
	// all copies or substantial portions of the Software.
	// 
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	// THE SOFTWARE.



	(function(global, module, define) {

	function Alea(seed) {
	  var me = this, mash = Mash();

	  me.next = function() {
	    var t = 2091639 * me.s0 + me.c * 2.3283064365386963e-10; // 2^-32
	    me.s0 = me.s1;
	    me.s1 = me.s2;
	    return me.s2 = t - (me.c = t | 0);
	  };

	  // Apply the seeding algorithm from Baagoe.
	  me.c = 1;
	  me.s0 = mash(' ');
	  me.s1 = mash(' ');
	  me.s2 = mash(' ');
	  me.s0 -= mash(seed);
	  if (me.s0 < 0) { me.s0 += 1; }
	  me.s1 -= mash(seed);
	  if (me.s1 < 0) { me.s1 += 1; }
	  me.s2 -= mash(seed);
	  if (me.s2 < 0) { me.s2 += 1; }
	  mash = null;
	}

	function copy(f, t) {
	  t.c = f.c;
	  t.s0 = f.s0;
	  t.s1 = f.s1;
	  t.s2 = f.s2;
	  return t;
	}

	function impl(seed, opts) {
	  var xg = new Alea(seed),
	      state = opts && opts.state,
	      prng = xg.next;
	  prng.int32 = function() { return (xg.next() * 0x100000000) | 0; }
	  prng.double = function() {
	    return prng() + (prng() * 0x200000 | 0) * 1.1102230246251565e-16; // 2^-53
	  };
	  prng.quick = prng;
	  if (state) {
	    if (typeof(state) == 'object') copy(state, xg);
	    prng.state = function() { return copy(xg, {}); }
	  }
	  return prng;
	}

	function Mash() {
	  var n = 0xefc8249d;

	  var mash = function(data) {
	    data = data.toString();
	    for (var i = 0; i < data.length; i++) {
	      n += data.charCodeAt(i);
	      var h = 0.02519603282416938 * n;
	      n = h >>> 0;
	      h -= n;
	      h *= n;
	      n = h >>> 0;
	      h -= n;
	      n += h * 0x100000000; // 2^32
	    }
	    return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
	  };

	  return mash;
	}


	if (module && module.exports) {
	  module.exports = impl;
	} else if (__webpack_require__(199) && __webpack_require__(200)) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
	  this.alea = impl;
	}

	})(
	  this,
	  (typeof module) == 'object' && module,    // present in node.js
	  __webpack_require__(199)   // present with an AMD loader
	);



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ },
/* 199 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 200 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;

	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {// A Javascript implementaion of the "xor128" prng algorithm by
	// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

	(function(global, module, define) {

	function XorGen(seed) {
	  var me = this, strseed = '';

	  me.x = 0;
	  me.y = 0;
	  me.z = 0;
	  me.w = 0;

	  // Set up generator function.
	  me.next = function() {
	    var t = me.x ^ (me.x << 11);
	    me.x = me.y;
	    me.y = me.z;
	    me.z = me.w;
	    return me.w ^= (me.w >>> 19) ^ t ^ (t >>> 8);
	  };

	  if (seed === (seed | 0)) {
	    // Integer seed.
	    me.x = seed;
	  } else {
	    // String seed.
	    strseed += seed;
	  }

	  // Mix in string seed, then discard an initial batch of 64 values.
	  for (var k = 0; k < strseed.length + 64; k++) {
	    me.x ^= strseed.charCodeAt(k) | 0;
	    me.next();
	  }
	}

	function copy(f, t) {
	  t.x = f.x;
	  t.y = f.y;
	  t.z = f.z;
	  t.w = f.w;
	  return t;
	}

	function impl(seed, opts) {
	  var xg = new XorGen(seed),
	      state = opts && opts.state,
	      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
	  prng.double = function() {
	    do {
	      var top = xg.next() >>> 11,
	          bot = (xg.next() >>> 0) / 0x100000000,
	          result = (top + bot) / (1 << 21);
	    } while (result === 0);
	    return result;
	  };
	  prng.int32 = xg.next;
	  prng.quick = prng;
	  if (state) {
	    if (typeof(state) == 'object') copy(state, xg);
	    prng.state = function() { return copy(xg, {}); }
	  }
	  return prng;
	}

	if (module && module.exports) {
	  module.exports = impl;
	} else if (__webpack_require__(199) && __webpack_require__(200)) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
	  this.xor128 = impl;
	}

	})(
	  this,
	  (typeof module) == 'object' && module,    // present in node.js
	  __webpack_require__(199)   // present with an AMD loader
	);



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {// A Javascript implementaion of the "xorwow" prng algorithm by
	// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper

	(function(global, module, define) {

	function XorGen(seed) {
	  var me = this, strseed = '';

	  // Set up generator function.
	  me.next = function() {
	    var t = (me.x ^ (me.x >>> 2));
	    me.x = me.y; me.y = me.z; me.z = me.w; me.w = me.v;
	    return (me.d = (me.d + 362437 | 0)) +
	       (me.v = (me.v ^ (me.v << 4)) ^ (t ^ (t << 1))) | 0;
	  };

	  me.x = 0;
	  me.y = 0;
	  me.z = 0;
	  me.w = 0;
	  me.v = 0;

	  if (seed === (seed | 0)) {
	    // Integer seed.
	    me.x = seed;
	  } else {
	    // String seed.
	    strseed += seed;
	  }

	  // Mix in string seed, then discard an initial batch of 64 values.
	  for (var k = 0; k < strseed.length + 64; k++) {
	    me.x ^= strseed.charCodeAt(k) | 0;
	    if (k == strseed.length) {
	      me.d = me.x << 10 ^ me.x >>> 4;
	    }
	    me.next();
	  }
	}

	function copy(f, t) {
	  t.x = f.x;
	  t.y = f.y;
	  t.z = f.z;
	  t.w = f.w;
	  t.v = f.v;
	  t.d = f.d;
	  return t;
	}

	function impl(seed, opts) {
	  var xg = new XorGen(seed),
	      state = opts && opts.state,
	      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
	  prng.double = function() {
	    do {
	      var top = xg.next() >>> 11,
	          bot = (xg.next() >>> 0) / 0x100000000,
	          result = (top + bot) / (1 << 21);
	    } while (result === 0);
	    return result;
	  };
	  prng.int32 = xg.next;
	  prng.quick = prng;
	  if (state) {
	    if (typeof(state) == 'object') copy(state, xg);
	    prng.state = function() { return copy(xg, {}); }
	  }
	  return prng;
	}

	if (module && module.exports) {
	  module.exports = impl;
	} else if (__webpack_require__(199) && __webpack_require__(200)) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
	  this.xorwow = impl;
	}

	})(
	  this,
	  (typeof module) == 'object' && module,    // present in node.js
	  __webpack_require__(199)   // present with an AMD loader
	);



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {// A Javascript implementaion of the "xorshift7" algorithm by
	// François Panneton and Pierre L'ecuyer:
	// "On the Xorgshift Random Number Generators"
	// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf

	(function(global, module, define) {

	function XorGen(seed) {
	  var me = this;

	  // Set up generator function.
	  me.next = function() {
	    // Update xor generator.
	    var X = me.x, i = me.i, t, v, w;
	    t = X[i]; t ^= (t >>> 7); v = t ^ (t << 24);
	    t = X[(i + 1) & 7]; v ^= t ^ (t >>> 10);
	    t = X[(i + 3) & 7]; v ^= t ^ (t >>> 3);
	    t = X[(i + 4) & 7]; v ^= t ^ (t << 7);
	    t = X[(i + 7) & 7]; t = t ^ (t << 13); v ^= t ^ (t << 9);
	    X[i] = v;
	    me.i = (i + 1) & 7;
	    return v;
	  };

	  function init(me, seed) {
	    var j, w, X = [];

	    if (seed === (seed | 0)) {
	      // Seed state array using a 32-bit integer.
	      w = X[0] = seed;
	    } else {
	      // Seed state using a string.
	      seed = '' + seed;
	      for (j = 0; j < seed.length; ++j) {
	        X[j & 7] = (X[j & 7] << 15) ^
	            (seed.charCodeAt(j) + X[(j + 1) & 7] << 13);
	      }
	    }
	    // Enforce an array length of 8, not all zeroes.
	    while (X.length < 8) X.push(0);
	    for (j = 0; j < 8 && X[j] === 0; ++j);
	    if (j == 8) w = X[7] = -1; else w = X[j];

	    me.x = X;
	    me.i = 0;

	    // Discard an initial 256 values.
	    for (j = 256; j > 0; --j) {
	      me.next();
	    }
	  }

	  init(me, seed);
	}

	function copy(f, t) {
	  t.x = f.x.slice();
	  t.i = f.i;
	  return t;
	}

	function impl(seed, opts) {
	  if (seed == null) seed = +(new Date);
	  var xg = new XorGen(seed),
	      state = opts && opts.state,
	      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
	  prng.double = function() {
	    do {
	      var top = xg.next() >>> 11,
	          bot = (xg.next() >>> 0) / 0x100000000,
	          result = (top + bot) / (1 << 21);
	    } while (result === 0);
	    return result;
	  };
	  prng.int32 = xg.next;
	  prng.quick = prng;
	  if (state) {
	    if (state.x) copy(state, xg);
	    prng.state = function() { return copy(xg, {}); }
	  }
	  return prng;
	}

	if (module && module.exports) {
	  module.exports = impl;
	} else if (__webpack_require__(199) && __webpack_require__(200)) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
	  this.xorshift7 = impl;
	}

	})(
	  this,
	  (typeof module) == 'object' && module,    // present in node.js
	  __webpack_require__(199)   // present with an AMD loader
	);


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
	//
	// This fast non-cryptographic random number generator is designed for
	// use in Monte-Carlo algorithms. It combines a long-period xorshift
	// generator with a Weyl generator, and it passes all common batteries
	// of stasticial tests for randomness while consuming only a few nanoseconds
	// for each prng generated.  For background on the generator, see Brent's
	// paper: "Some long-period random number generators using shifts and xors."
	// http://arxiv.org/pdf/1104.3115.pdf
	//
	// Usage:
	//
	// var xor4096 = require('xor4096');
	// random = xor4096(1);                        // Seed with int32 or string.
	// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
	// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
	//
	// For nonzero numeric keys, this impelementation provides a sequence
	// identical to that by Brent's xorgens 3 implementaion in C.  This
	// implementation also provides for initalizing the generator with
	// string seeds, or for saving and restoring the state of the generator.
	//
	// On Chrome, this prng benchmarks about 2.1 times slower than
	// Javascript's built-in Math.random().

	(function(global, module, define) {

	function XorGen(seed) {
	  var me = this;

	  // Set up generator function.
	  me.next = function() {
	    var w = me.w,
	        X = me.X, i = me.i, t, v;
	    // Update Weyl generator.
	    me.w = w = (w + 0x61c88647) | 0;
	    // Update xor generator.
	    v = X[(i + 34) & 127];
	    t = X[i = ((i + 1) & 127)];
	    v ^= v << 13;
	    t ^= t << 17;
	    v ^= v >>> 15;
	    t ^= t >>> 12;
	    // Update Xor generator array state.
	    v = X[i] = v ^ t;
	    me.i = i;
	    // Result is the combination.
	    return (v + (w ^ (w >>> 16))) | 0;
	  };

	  function init(me, seed) {
	    var t, v, i, j, w, X = [], limit = 128;
	    if (seed === (seed | 0)) {
	      // Numeric seeds initialize v, which is used to generates X.
	      v = seed;
	      seed = null;
	    } else {
	      // String seeds are mixed into v and X one character at a time.
	      seed = seed + '\0';
	      v = 0;
	      limit = Math.max(limit, seed.length);
	    }
	    // Initialize circular array and weyl value.
	    for (i = 0, j = -32; j < limit; ++j) {
	      // Put the unicode characters into the array, and shuffle them.
	      if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
	      // After 32 shuffles, take v as the starting w value.
	      if (j === 0) w = v;
	      v ^= v << 10;
	      v ^= v >>> 15;
	      v ^= v << 4;
	      v ^= v >>> 13;
	      if (j >= 0) {
	        w = (w + 0x61c88647) | 0;     // Weyl.
	        t = (X[j & 127] ^= (v + w));  // Combine xor and weyl to init array.
	        i = (0 == t) ? i + 1 : 0;     // Count zeroes.
	      }
	    }
	    // We have detected all zeroes; make the key nonzero.
	    if (i >= 128) {
	      X[(seed && seed.length || 0) & 127] = -1;
	    }
	    // Run the generator 512 times to further mix the state before using it.
	    // Factoring this as a function slows the main generator, so it is just
	    // unrolled here.  The weyl generator is not advanced while warming up.
	    i = 127;
	    for (j = 4 * 128; j > 0; --j) {
	      v = X[(i + 34) & 127];
	      t = X[i = ((i + 1) & 127)];
	      v ^= v << 13;
	      t ^= t << 17;
	      v ^= v >>> 15;
	      t ^= t >>> 12;
	      X[i] = v ^ t;
	    }
	    // Storing state as object members is faster than using closure variables.
	    me.w = w;
	    me.X = X;
	    me.i = i;
	  }

	  init(me, seed);
	}

	function copy(f, t) {
	  t.i = f.i;
	  t.w = f.w;
	  t.X = f.X.slice();
	  return t;
	};

	function impl(seed, opts) {
	  if (seed == null) seed = +(new Date);
	  var xg = new XorGen(seed),
	      state = opts && opts.state,
	      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
	  prng.double = function() {
	    do {
	      var top = xg.next() >>> 11,
	          bot = (xg.next() >>> 0) / 0x100000000,
	          result = (top + bot) / (1 << 21);
	    } while (result === 0);
	    return result;
	  };
	  prng.int32 = xg.next;
	  prng.quick = prng;
	  if (state) {
	    if (state.X) copy(state, xg);
	    prng.state = function() { return copy(xg, {}); }
	  }
	  return prng;
	}

	if (module && module.exports) {
	  module.exports = impl;
	} else if (__webpack_require__(199) && __webpack_require__(200)) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
	  this.xor4096 = impl;
	}

	})(
	  this,                                     // window object or global
	  (typeof module) == 'object' && module,    // present in node.js
	  __webpack_require__(199)   // present with an AMD loader
	);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {// A Javascript implementaion of the "Tyche-i" prng algorithm by
	// Samuel Neves and Filipe Araujo.
	// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf

	(function(global, module, define) {

	function XorGen(seed) {
	  var me = this, strseed = '';

	  // Set up generator function.
	  me.next = function() {
	    var b = me.b, c = me.c, d = me.d, a = me.a;
	    b = (b << 25) ^ (b >>> 7) ^ c;
	    c = (c - d) | 0;
	    d = (d << 24) ^ (d >>> 8) ^ a;
	    a = (a - b) | 0;
	    me.b = b = (b << 20) ^ (b >>> 12) ^ c;
	    me.c = c = (c - d) | 0;
	    me.d = (d << 16) ^ (c >>> 16) ^ a;
	    return me.a = (a - b) | 0;
	  };

	  /* The following is non-inverted tyche, which has better internal
	   * bit diffusion, but which is about 25% slower than tyche-i in JS.
	  me.next = function() {
	    var a = me.a, b = me.b, c = me.c, d = me.d;
	    a = (me.a + me.b | 0) >>> 0;
	    d = me.d ^ a; d = d << 16 ^ d >>> 16;
	    c = me.c + d | 0;
	    b = me.b ^ c; b = b << 12 ^ d >>> 20;
	    me.a = a = a + b | 0;
	    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
	    me.c = c = c + d | 0;
	    b = b ^ c;
	    return me.b = (b << 7 ^ b >>> 25);
	  }
	  */

	  me.a = 0;
	  me.b = 0;
	  me.c = 2654435769 | 0;
	  me.d = 1367130551;

	  if (seed === Math.floor(seed)) {
	    // Integer seed.
	    me.a = (seed / 0x100000000) | 0;
	    me.b = seed | 0;
	  } else {
	    // String seed.
	    strseed += seed;
	  }

	  // Mix in string seed, then discard an initial batch of 64 values.
	  for (var k = 0; k < strseed.length + 20; k++) {
	    me.b ^= strseed.charCodeAt(k) | 0;
	    me.next();
	  }
	}

	function copy(f, t) {
	  t.a = f.a;
	  t.b = f.b;
	  t.c = f.c;
	  t.d = f.d;
	  return t;
	};

	function impl(seed, opts) {
	  var xg = new XorGen(seed),
	      state = opts && opts.state,
	      prng = function() { return (xg.next() >>> 0) / 0x100000000; };
	  prng.double = function() {
	    do {
	      var top = xg.next() >>> 11,
	          bot = (xg.next() >>> 0) / 0x100000000,
	          result = (top + bot) / (1 << 21);
	    } while (result === 0);
	    return result;
	  };
	  prng.int32 = xg.next;
	  prng.quick = prng;
	  if (state) {
	    if (typeof(state) == 'object') copy(state, xg);
	    prng.state = function() { return copy(xg, {}); }
	  }
	  return prng;
	}

	if (module && module.exports) {
	  module.exports = impl;
	} else if (__webpack_require__(199) && __webpack_require__(200)) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return impl; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
	  this.tychei = impl;
	}

	})(
	  this,
	  (typeof module) == 'object' && module,    // present in node.js
	  __webpack_require__(199)   // present with an AMD loader
	);



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*
	Copyright 2014 David Bau.

	Permission is hereby granted, free of charge, to any person obtaining
	a copy of this software and associated documentation files (the
	"Software"), to deal in the Software without restriction, including
	without limitation the rights to use, copy, modify, merge, publish,
	distribute, sublicense, and/or sell copies of the Software, and to
	permit persons to whom the Software is furnished to do so, subject to
	the following conditions:

	The above copyright notice and this permission notice shall be
	included in all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
	EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
	CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
	TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
	SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

	*/

	(function (pool, math) {
	//
	// The following constants are related to IEEE 754 limits.
	//
	var global = this,
	    width = 256,        // each RC4 output is 0 <= x < 256
	    chunks = 6,         // at least six RC4 outputs for each double
	    digits = 52,        // there are 52 significant digits in a double
	    rngname = 'random', // rngname: name for Math.random and Math.seedrandom
	    startdenom = math.pow(width, chunks),
	    significance = math.pow(2, digits),
	    overflow = significance * 2,
	    mask = width - 1,
	    nodecrypto;         // node.js crypto module, initialized at the bottom.

	//
	// seedrandom()
	// This is the seedrandom function described above.
	//
	function seedrandom(seed, options, callback) {
	  var key = [];
	  options = (options == true) ? { entropy: true } : (options || {});

	  // Flatten the seed string or build one from local entropy if needed.
	  var shortseed = mixkey(flatten(
	    options.entropy ? [seed, tostring(pool)] :
	    (seed == null) ? autoseed() : seed, 3), key);

	  // Use the seed to initialize an ARC4 generator.
	  var arc4 = new ARC4(key);

	  // This function returns a random double in [0, 1) that contains
	  // randomness in every bit of the mantissa of the IEEE 754 value.
	  var prng = function() {
	    var n = arc4.g(chunks),             // Start with a numerator n < 2 ^ 48
	        d = startdenom,                 //   and denominator d = 2 ^ 48.
	        x = 0;                          //   and no 'extra last byte'.
	    while (n < significance) {          // Fill up all significant digits by
	      n = (n + x) * width;              //   shifting numerator and
	      d *= width;                       //   denominator and generating a
	      x = arc4.g(1);                    //   new least-significant-byte.
	    }
	    while (n >= overflow) {             // To avoid rounding up, before adding
	      n /= 2;                           //   last byte, shift everything
	      d /= 2;                           //   right using integer math until
	      x >>>= 1;                         //   we have exactly the desired bits.
	    }
	    return (n + x) / d;                 // Form the number within [0, 1).
	  };

	  prng.int32 = function() { return arc4.g(4) | 0; }
	  prng.quick = function() { return arc4.g(4) / 0x100000000; }
	  prng.double = prng;

	  // Mix the randomness into accumulated entropy.
	  mixkey(tostring(arc4.S), pool);

	  // Calling convention: what to return as a function of prng, seed, is_math.
	  return (options.pass || callback ||
	      function(prng, seed, is_math_call, state) {
	        if (state) {
	          // Load the arc4 state from the given state if it has an S array.
	          if (state.S) { copy(state, arc4); }
	          // Only provide the .state method if requested via options.state.
	          prng.state = function() { return copy(arc4, {}); }
	        }

	        // If called as a method of Math (Math.seedrandom()), mutate
	        // Math.random because that is how seedrandom.js has worked since v1.0.
	        if (is_math_call) { math[rngname] = prng; return seed; }

	        // Otherwise, it is a newer calling convention, so return the
	        // prng directly.
	        else return prng;
	      })(
	  prng,
	  shortseed,
	  'global' in options ? options.global : (this == math),
	  options.state);
	}
	math['seed' + rngname] = seedrandom;

	//
	// ARC4
	//
	// An ARC4 implementation.  The constructor takes a key in the form of
	// an array of at most (width) integers that should be 0 <= x < (width).
	//
	// The g(count) method returns a pseudorandom integer that concatenates
	// the next (count) outputs from ARC4.  Its return value is a number x
	// that is in the range 0 <= x < (width ^ count).
	//
	function ARC4(key) {
	  var t, keylen = key.length,
	      me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];

	  // The empty key [] is treated as [0].
	  if (!keylen) { key = [keylen++]; }

	  // Set up S using the standard key scheduling algorithm.
	  while (i < width) {
	    s[i] = i++;
	  }
	  for (i = 0; i < width; i++) {
	    s[i] = s[j = mask & (j + key[i % keylen] + (t = s[i]))];
	    s[j] = t;
	  }

	  // The "g" method returns the next (count) outputs as one number.
	  (me.g = function(count) {
	    // Using instance members instead of closure state nearly doubles speed.
	    var t, r = 0,
	        i = me.i, j = me.j, s = me.S;
	    while (count--) {
	      t = s[i = mask & (i + 1)];
	      r = r * width + s[mask & ((s[i] = s[j = mask & (j + t)]) + (s[j] = t))];
	    }
	    me.i = i; me.j = j;
	    return r;
	    // For robust unpredictability, the function call below automatically
	    // discards an initial batch of values.  This is called RC4-drop[256].
	    // See http://google.com/search?q=rsa+fluhrer+response&btnI
	  })(width);
	}

	//
	// copy()
	// Copies internal state of ARC4 to or from a plain object.
	//
	function copy(f, t) {
	  t.i = f.i;
	  t.j = f.j;
	  t.S = f.S.slice();
	  return t;
	};

	//
	// flatten()
	// Converts an object tree to nested arrays of strings.
	//
	function flatten(obj, depth) {
	  var result = [], typ = (typeof obj), prop;
	  if (depth && typ == 'object') {
	    for (prop in obj) {
	      try { result.push(flatten(obj[prop], depth - 1)); } catch (e) {}
	    }
	  }
	  return (result.length ? result : typ == 'string' ? obj : obj + '\0');
	}

	//
	// mixkey()
	// Mixes a string seed into a key that is an array of integers, and
	// returns a shortened string seed that is equivalent to the result key.
	//
	function mixkey(seed, key) {
	  var stringseed = seed + '', smear, j = 0;
	  while (j < stringseed.length) {
	    key[mask & j] =
	      mask & ((smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++));
	  }
	  return tostring(key);
	}

	//
	// autoseed()
	// Returns an object for autoseeding, using window.crypto and Node crypto
	// module if available.
	//
	function autoseed() {
	  try {
	    if (nodecrypto) { return tostring(nodecrypto.randomBytes(width)); }
	    var out = new Uint8Array(width);
	    (global.crypto || global.msCrypto).getRandomValues(out);
	    return tostring(out);
	  } catch (e) {
	    var browser = global.navigator,
	        plugins = browser && browser.plugins;
	    return [+new Date, global, plugins, global.screen, tostring(pool)];
	  }
	}

	//
	// tostring()
	// Converts an array of charcodes to a string
	//
	function tostring(a) {
	  return String.fromCharCode.apply(0, a);
	}

	//
	// When seedrandom.js is loaded, we immediately mix a few bits
	// from the built-in RNG into the entropy pool.  Because we do
	// not want to interfere with deterministic PRNG state later,
	// seedrandom will not call math.random on its own again after
	// initialization.
	//
	mixkey(math.random(), pool);

	//
	// Nodejs and AMD support: export the implementation as a module using
	// either convention.
	//
	if ((typeof module) == 'object' && module.exports) {
	  module.exports = seedrandom;
	  // When in node.js, try using crypto package for autoseeding.
	  try {
	    nodecrypto = __webpack_require__(207);
	  } catch (ex) {}
	} else if (true) {
	  !(__WEBPACK_AMD_DEFINE_RESULT__ = function() { return seedrandom; }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// End anonymous scope, and pass initial values.
	})(
	  [],     // pool: entropy pool starts empty
	  Math    // math: package containing random, pow, and seedrandom
	);


/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var rng = __webpack_require__(212)

	function error () {
	  var m = [].slice.call(arguments).join(' ')
	  throw new Error([
	    m,
	    'we accept pull requests',
	    'http://github.com/dominictarr/crypto-browserify'
	    ].join('\n'))
	}

	exports.createHash = __webpack_require__(214)

	exports.createHmac = __webpack_require__(227)

	exports.randomBytes = function(size, callback) {
	  if (callback && callback.call) {
	    try {
	      callback.call(this, undefined, new Buffer(rng(size)))
	    } catch (err) { callback(err) }
	  } else {
	    return new Buffer(rng(size))
	  }
	}

	function each(a, f) {
	  for(var i in a)
	    f(a[i], i)
	}

	exports.getHashes = function () {
	  return ['sha1', 'sha256', 'sha512', 'md5', 'rmd160']
	}

	var p = __webpack_require__(228)(exports)
	exports.pbkdf2 = p.pbkdf2
	exports.pbkdf2Sync = p.pbkdf2Sync


	// the least I can do is make error messages for the rest of the node.js/crypto api.
	each(['createCredentials'
	, 'createCipher'
	, 'createCipheriv'
	, 'createDecipher'
	, 'createDecipheriv'
	, 'createSign'
	, 'createVerify'
	, 'createDiffieHellman'
	], function (name) {
	  exports[name] = function () {
	    error('sorry,', name, 'is not implemented yet')
	  }
	})

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(208).Buffer))

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(209)
	var ieee754 = __webpack_require__(210)
	var isArray = __webpack_require__(211)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(208).Buffer, (function() { return this; }())))

/***/ },
/* 209 */
/***/ function(module, exports) {

	'use strict'

	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	function init () {
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i]
	    revLookup[code.charCodeAt(i)] = i
	  }

	  revLookup['-'.charCodeAt(0)] = 62
	  revLookup['_'.charCodeAt(0)] = 63
	}

	init()

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ },
/* 210 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 211 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, Buffer) {(function() {
	  var g = ('undefined' === typeof window ? global : window) || {}
	  _crypto = (
	    g.crypto || g.msCrypto || __webpack_require__(213)
	  )
	  module.exports = function(size) {
	    // Modern Browsers
	    if(_crypto.getRandomValues) {
	      var bytes = new Buffer(size); //in browserify, this is an extended Uint8Array
	      /* This will not work in older browsers.
	       * See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
	       */
	    
	      _crypto.getRandomValues(bytes);
	      return bytes;
	    }
	    else if (_crypto.randomBytes) {
	      return _crypto.randomBytes(size)
	    }
	    else
	      throw new Error(
	        'secure random number generation not supported by this browser\n'+
	        'use chrome, FireFox or Internet Explorer 11'
	      )
	  }
	}())

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(208).Buffer))

/***/ },
/* 213 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(215)

	var md5 = toConstructor(__webpack_require__(224))
	var rmd160 = toConstructor(__webpack_require__(226))

	function toConstructor (fn) {
	  return function () {
	    var buffers = []
	    var m= {
	      update: function (data, enc) {
	        if(!Buffer.isBuffer(data)) data = new Buffer(data, enc)
	        buffers.push(data)
	        return this
	      },
	      digest: function (enc) {
	        var buf = Buffer.concat(buffers)
	        var r = fn(buf)
	        buffers = null
	        return enc ? r.toString(enc) : r
	      }
	    }
	    return m
	  }
	}

	module.exports = function (alg) {
	  if('md5' === alg) return new md5()
	  if('rmd160' === alg) return new rmd160()
	  return createHash(alg)
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(208).Buffer))

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var exports = module.exports = function (alg) {
	  var Alg = exports[alg]
	  if(!Alg) throw new Error(alg + ' is not supported (we accept pull requests)')
	  return new Alg()
	}

	var Buffer = __webpack_require__(208).Buffer
	var Hash   = __webpack_require__(216)(Buffer)

	exports.sha1 = __webpack_require__(217)(Buffer, Hash)
	exports.sha256 = __webpack_require__(222)(Buffer, Hash)
	exports.sha512 = __webpack_require__(223)(Buffer, Hash)


/***/ },
/* 216 */
/***/ function(module, exports) {

	module.exports = function (Buffer) {

	  //prototype class for hash functions
	  function Hash (blockSize, finalSize) {
	    this._block = new Buffer(blockSize) //new Uint32Array(blockSize/4)
	    this._finalSize = finalSize
	    this._blockSize = blockSize
	    this._len = 0
	    this._s = 0
	  }

	  Hash.prototype.init = function () {
	    this._s = 0
	    this._len = 0
	  }

	  Hash.prototype.update = function (data, enc) {
	    if ("string" === typeof data) {
	      enc = enc || "utf8"
	      data = new Buffer(data, enc)
	    }

	    var l = this._len += data.length
	    var s = this._s = (this._s || 0)
	    var f = 0
	    var buffer = this._block

	    while (s < l) {
	      var t = Math.min(data.length, f + this._blockSize - (s % this._blockSize))
	      var ch = (t - f)

	      for (var i = 0; i < ch; i++) {
	        buffer[(s % this._blockSize) + i] = data[i + f]
	      }

	      s += ch
	      f += ch

	      if ((s % this._blockSize) === 0) {
	        this._update(buffer)
	      }
	    }
	    this._s = s

	    return this
	  }

	  Hash.prototype.digest = function (enc) {
	    // Suppose the length of the message M, in bits, is l
	    var l = this._len * 8

	    // Append the bit 1 to the end of the message
	    this._block[this._len % this._blockSize] = 0x80

	    // and then k zero bits, where k is the smallest non-negative solution to the equation (l + 1 + k) === finalSize mod blockSize
	    this._block.fill(0, this._len % this._blockSize + 1)

	    if (l % (this._blockSize * 8) >= this._finalSize * 8) {
	      this._update(this._block)
	      this._block.fill(0)
	    }

	    // to this append the block which is equal to the number l written in binary
	    // TODO: handle case where l is > Math.pow(2, 29)
	    this._block.writeInt32BE(l, this._blockSize - 4)

	    var hash = this._update(this._block) || this._hash()

	    return enc ? hash.toString(enc) : hash
	  }

	  Hash.prototype._update = function () {
	    throw new Error('_update must be implemented by subclass')
	  }

	  return Hash
	}


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
	 * in FIPS PUB 180-1
	 * Version 2.1a Copyright Paul Johnston 2000 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for details.
	 */

	var inherits = __webpack_require__(218).inherits

	module.exports = function (Buffer, Hash) {

	  var A = 0|0
	  var B = 4|0
	  var C = 8|0
	  var D = 12|0
	  var E = 16|0

	  var W = new (typeof Int32Array === 'undefined' ? Array : Int32Array)(80)

	  var POOL = []

	  function Sha1 () {
	    if(POOL.length)
	      return POOL.pop().init()

	    if(!(this instanceof Sha1)) return new Sha1()
	    this._w = W
	    Hash.call(this, 16*4, 14*4)

	    this._h = null
	    this.init()
	  }

	  inherits(Sha1, Hash)

	  Sha1.prototype.init = function () {
	    this._a = 0x67452301
	    this._b = 0xefcdab89
	    this._c = 0x98badcfe
	    this._d = 0x10325476
	    this._e = 0xc3d2e1f0

	    Hash.prototype.init.call(this)
	    return this
	  }

	  Sha1.prototype._POOL = POOL
	  Sha1.prototype._update = function (X) {

	    var a, b, c, d, e, _a, _b, _c, _d, _e

	    a = _a = this._a
	    b = _b = this._b
	    c = _c = this._c
	    d = _d = this._d
	    e = _e = this._e

	    var w = this._w

	    for(var j = 0; j < 80; j++) {
	      var W = w[j] = j < 16 ? X.readInt32BE(j*4)
	        : rol(w[j - 3] ^ w[j -  8] ^ w[j - 14] ^ w[j - 16], 1)

	      var t = add(
	        add(rol(a, 5), sha1_ft(j, b, c, d)),
	        add(add(e, W), sha1_kt(j))
	      )

	      e = d
	      d = c
	      c = rol(b, 30)
	      b = a
	      a = t
	    }

	    this._a = add(a, _a)
	    this._b = add(b, _b)
	    this._c = add(c, _c)
	    this._d = add(d, _d)
	    this._e = add(e, _e)
	  }

	  Sha1.prototype._hash = function () {
	    if(POOL.length < 100) POOL.push(this)
	    var H = new Buffer(20)
	    //console.log(this._a|0, this._b|0, this._c|0, this._d|0, this._e|0)
	    H.writeInt32BE(this._a|0, A)
	    H.writeInt32BE(this._b|0, B)
	    H.writeInt32BE(this._c|0, C)
	    H.writeInt32BE(this._d|0, D)
	    H.writeInt32BE(this._e|0, E)
	    return H
	  }

	  /*
	   * Perform the appropriate triplet combination function for the current
	   * iteration
	   */
	  function sha1_ft(t, b, c, d) {
	    if(t < 20) return (b & c) | ((~b) & d);
	    if(t < 40) return b ^ c ^ d;
	    if(t < 60) return (b & c) | (b & d) | (c & d);
	    return b ^ c ^ d;
	  }

	  /*
	   * Determine the appropriate additive constant for the current iteration
	   */
	  function sha1_kt(t) {
	    return (t < 20) ?  1518500249 : (t < 40) ?  1859775393 :
	           (t < 60) ? -1894007588 : -899497514;
	  }

	  /*
	   * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	   * to work around bugs in some JS interpreters.
	   * //dominictarr: this is 10 years old, so maybe this can be dropped?)
	   *
	   */
	  function add(x, y) {
	    return (x + y ) | 0
	  //lets see how this goes on testling.
	  //  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  //  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  //  return (msw << 16) | (lsw & 0xFFFF);
	  }

	  /*
	   * Bitwise rotate a 32-bit number to the left.
	   */
	  function rol(num, cnt) {
	    return (num << cnt) | (num >>> (32 - cnt));
	  }

	  return Sha1
	}


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	var formatRegExp = /%[sdj%]/g;
	exports.format = function(f) {
	  if (!isString(f)) {
	    var objects = [];
	    for (var i = 0; i < arguments.length; i++) {
	      objects.push(inspect(arguments[i]));
	    }
	    return objects.join(' ');
	  }

	  var i = 1;
	  var args = arguments;
	  var len = args.length;
	  var str = String(f).replace(formatRegExp, function(x) {
	    if (x === '%%') return '%';
	    if (i >= len) return x;
	    switch (x) {
	      case '%s': return String(args[i++]);
	      case '%d': return Number(args[i++]);
	      case '%j':
	        try {
	          return JSON.stringify(args[i++]);
	        } catch (_) {
	          return '[Circular]';
	        }
	      default:
	        return x;
	    }
	  });
	  for (var x = args[i]; i < len; x = args[++i]) {
	    if (isNull(x) || !isObject(x)) {
	      str += ' ' + x;
	    } else {
	      str += ' ' + inspect(x);
	    }
	  }
	  return str;
	};


	// Mark that a method should not be used.
	// Returns a modified function which warns once by default.
	// If --no-deprecation is set, then it is a no-op.
	exports.deprecate = function(fn, msg) {
	  // Allow for deprecating things in the process of starting up.
	  if (isUndefined(global.process)) {
	    return function() {
	      return exports.deprecate(fn, msg).apply(this, arguments);
	    };
	  }

	  if (process.noDeprecation === true) {
	    return fn;
	  }

	  var warned = false;
	  function deprecated() {
	    if (!warned) {
	      if (process.throwDeprecation) {
	        throw new Error(msg);
	      } else if (process.traceDeprecation) {
	        console.trace(msg);
	      } else {
	        console.error(msg);
	      }
	      warned = true;
	    }
	    return fn.apply(this, arguments);
	  }

	  return deprecated;
	};


	var debugs = {};
	var debugEnviron;
	exports.debuglog = function(set) {
	  if (isUndefined(debugEnviron))
	    debugEnviron = process.env.NODE_DEBUG || '';
	  set = set.toUpperCase();
	  if (!debugs[set]) {
	    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
	      var pid = process.pid;
	      debugs[set] = function() {
	        var msg = exports.format.apply(exports, arguments);
	        console.error('%s %d: %s', set, pid, msg);
	      };
	    } else {
	      debugs[set] = function() {};
	    }
	  }
	  return debugs[set];
	};


	/**
	 * Echos the value of a value. Trys to print the value out
	 * in the best way possible given the different types.
	 *
	 * @param {Object} obj The object to print out.
	 * @param {Object} opts Optional options object that alters the output.
	 */
	/* legacy: obj, showHidden, depth, colors*/
	function inspect(obj, opts) {
	  // default options
	  var ctx = {
	    seen: [],
	    stylize: stylizeNoColor
	  };
	  // legacy...
	  if (arguments.length >= 3) ctx.depth = arguments[2];
	  if (arguments.length >= 4) ctx.colors = arguments[3];
	  if (isBoolean(opts)) {
	    // legacy...
	    ctx.showHidden = opts;
	  } else if (opts) {
	    // got an "options" object
	    exports._extend(ctx, opts);
	  }
	  // set default options
	  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
	  if (isUndefined(ctx.depth)) ctx.depth = 2;
	  if (isUndefined(ctx.colors)) ctx.colors = false;
	  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
	  if (ctx.colors) ctx.stylize = stylizeWithColor;
	  return formatValue(ctx, obj, ctx.depth);
	}
	exports.inspect = inspect;


	// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
	inspect.colors = {
	  'bold' : [1, 22],
	  'italic' : [3, 23],
	  'underline' : [4, 24],
	  'inverse' : [7, 27],
	  'white' : [37, 39],
	  'grey' : [90, 39],
	  'black' : [30, 39],
	  'blue' : [34, 39],
	  'cyan' : [36, 39],
	  'green' : [32, 39],
	  'magenta' : [35, 39],
	  'red' : [31, 39],
	  'yellow' : [33, 39]
	};

	// Don't use 'blue' not visible on cmd.exe
	inspect.styles = {
	  'special': 'cyan',
	  'number': 'yellow',
	  'boolean': 'yellow',
	  'undefined': 'grey',
	  'null': 'bold',
	  'string': 'green',
	  'date': 'magenta',
	  // "name": intentionally not styling
	  'regexp': 'red'
	};


	function stylizeWithColor(str, styleType) {
	  var style = inspect.styles[styleType];

	  if (style) {
	    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
	           '\u001b[' + inspect.colors[style][1] + 'm';
	  } else {
	    return str;
	  }
	}


	function stylizeNoColor(str, styleType) {
	  return str;
	}


	function arrayToHash(array) {
	  var hash = {};

	  array.forEach(function(val, idx) {
	    hash[val] = true;
	  });

	  return hash;
	}


	function formatValue(ctx, value, recurseTimes) {
	  // Provide a hook for user-specified inspect functions.
	  // Check that value is an object with an inspect function on it
	  if (ctx.customInspect &&
	      value &&
	      isFunction(value.inspect) &&
	      // Filter out the util module, it's inspect function is special
	      value.inspect !== exports.inspect &&
	      // Also filter out any prototype objects using the circular check.
	      !(value.constructor && value.constructor.prototype === value)) {
	    var ret = value.inspect(recurseTimes, ctx);
	    if (!isString(ret)) {
	      ret = formatValue(ctx, ret, recurseTimes);
	    }
	    return ret;
	  }

	  // Primitive types cannot have properties
	  var primitive = formatPrimitive(ctx, value);
	  if (primitive) {
	    return primitive;
	  }

	  // Look up the keys of the object.
	  var keys = Object.keys(value);
	  var visibleKeys = arrayToHash(keys);

	  if (ctx.showHidden) {
	    keys = Object.getOwnPropertyNames(value);
	  }

	  // IE doesn't make error fields non-enumerable
	  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
	  if (isError(value)
	      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
	    return formatError(value);
	  }

	  // Some type of object without properties can be shortcutted.
	  if (keys.length === 0) {
	    if (isFunction(value)) {
	      var name = value.name ? ': ' + value.name : '';
	      return ctx.stylize('[Function' + name + ']', 'special');
	    }
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    }
	    if (isDate(value)) {
	      return ctx.stylize(Date.prototype.toString.call(value), 'date');
	    }
	    if (isError(value)) {
	      return formatError(value);
	    }
	  }

	  var base = '', array = false, braces = ['{', '}'];

	  // Make Array say that they are Array
	  if (isArray(value)) {
	    array = true;
	    braces = ['[', ']'];
	  }

	  // Make functions say that they are functions
	  if (isFunction(value)) {
	    var n = value.name ? ': ' + value.name : '';
	    base = ' [Function' + n + ']';
	  }

	  // Make RegExps say that they are RegExps
	  if (isRegExp(value)) {
	    base = ' ' + RegExp.prototype.toString.call(value);
	  }

	  // Make dates with properties first say the date
	  if (isDate(value)) {
	    base = ' ' + Date.prototype.toUTCString.call(value);
	  }

	  // Make error with message first say the error
	  if (isError(value)) {
	    base = ' ' + formatError(value);
	  }

	  if (keys.length === 0 && (!array || value.length == 0)) {
	    return braces[0] + base + braces[1];
	  }

	  if (recurseTimes < 0) {
	    if (isRegExp(value)) {
	      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
	    } else {
	      return ctx.stylize('[Object]', 'special');
	    }
	  }

	  ctx.seen.push(value);

	  var output;
	  if (array) {
	    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
	  } else {
	    output = keys.map(function(key) {
	      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
	    });
	  }

	  ctx.seen.pop();

	  return reduceToSingleString(output, base, braces);
	}


	function formatPrimitive(ctx, value) {
	  if (isUndefined(value))
	    return ctx.stylize('undefined', 'undefined');
	  if (isString(value)) {
	    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
	                                             .replace(/'/g, "\\'")
	                                             .replace(/\\"/g, '"') + '\'';
	    return ctx.stylize(simple, 'string');
	  }
	  if (isNumber(value))
	    return ctx.stylize('' + value, 'number');
	  if (isBoolean(value))
	    return ctx.stylize('' + value, 'boolean');
	  // For some reason typeof null is "object", so special case here.
	  if (isNull(value))
	    return ctx.stylize('null', 'null');
	}


	function formatError(value) {
	  return '[' + Error.prototype.toString.call(value) + ']';
	}


	function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
	  var output = [];
	  for (var i = 0, l = value.length; i < l; ++i) {
	    if (hasOwnProperty(value, String(i))) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          String(i), true));
	    } else {
	      output.push('');
	    }
	  }
	  keys.forEach(function(key) {
	    if (!key.match(/^\d+$/)) {
	      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
	          key, true));
	    }
	  });
	  return output;
	}


	function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
	  var name, str, desc;
	  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
	  if (desc.get) {
	    if (desc.set) {
	      str = ctx.stylize('[Getter/Setter]', 'special');
	    } else {
	      str = ctx.stylize('[Getter]', 'special');
	    }
	  } else {
	    if (desc.set) {
	      str = ctx.stylize('[Setter]', 'special');
	    }
	  }
	  if (!hasOwnProperty(visibleKeys, key)) {
	    name = '[' + key + ']';
	  }
	  if (!str) {
	    if (ctx.seen.indexOf(desc.value) < 0) {
	      if (isNull(recurseTimes)) {
	        str = formatValue(ctx, desc.value, null);
	      } else {
	        str = formatValue(ctx, desc.value, recurseTimes - 1);
	      }
	      if (str.indexOf('\n') > -1) {
	        if (array) {
	          str = str.split('\n').map(function(line) {
	            return '  ' + line;
	          }).join('\n').substr(2);
	        } else {
	          str = '\n' + str.split('\n').map(function(line) {
	            return '   ' + line;
	          }).join('\n');
	        }
	      }
	    } else {
	      str = ctx.stylize('[Circular]', 'special');
	    }
	  }
	  if (isUndefined(name)) {
	    if (array && key.match(/^\d+$/)) {
	      return str;
	    }
	    name = JSON.stringify('' + key);
	    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
	      name = name.substr(1, name.length - 2);
	      name = ctx.stylize(name, 'name');
	    } else {
	      name = name.replace(/'/g, "\\'")
	                 .replace(/\\"/g, '"')
	                 .replace(/(^"|"$)/g, "'");
	      name = ctx.stylize(name, 'string');
	    }
	  }

	  return name + ': ' + str;
	}


	function reduceToSingleString(output, base, braces) {
	  var numLinesEst = 0;
	  var length = output.reduce(function(prev, cur) {
	    numLinesEst++;
	    if (cur.indexOf('\n') >= 0) numLinesEst++;
	    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
	  }, 0);

	  if (length > 60) {
	    return braces[0] +
	           (base === '' ? '' : base + '\n ') +
	           ' ' +
	           output.join(',\n  ') +
	           ' ' +
	           braces[1];
	  }

	  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
	}


	// NOTE: These type checking functions intentionally don't use `instanceof`
	// because it is fragile and can be easily faked with `Object.create()`.
	function isArray(ar) {
	  return Array.isArray(ar);
	}
	exports.isArray = isArray;

	function isBoolean(arg) {
	  return typeof arg === 'boolean';
	}
	exports.isBoolean = isBoolean;

	function isNull(arg) {
	  return arg === null;
	}
	exports.isNull = isNull;

	function isNullOrUndefined(arg) {
	  return arg == null;
	}
	exports.isNullOrUndefined = isNullOrUndefined;

	function isNumber(arg) {
	  return typeof arg === 'number';
	}
	exports.isNumber = isNumber;

	function isString(arg) {
	  return typeof arg === 'string';
	}
	exports.isString = isString;

	function isSymbol(arg) {
	  return typeof arg === 'symbol';
	}
	exports.isSymbol = isSymbol;

	function isUndefined(arg) {
	  return arg === void 0;
	}
	exports.isUndefined = isUndefined;

	function isRegExp(re) {
	  return isObject(re) && objectToString(re) === '[object RegExp]';
	}
	exports.isRegExp = isRegExp;

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}
	exports.isObject = isObject;

	function isDate(d) {
	  return isObject(d) && objectToString(d) === '[object Date]';
	}
	exports.isDate = isDate;

	function isError(e) {
	  return isObject(e) &&
	      (objectToString(e) === '[object Error]' || e instanceof Error);
	}
	exports.isError = isError;

	function isFunction(arg) {
	  return typeof arg === 'function';
	}
	exports.isFunction = isFunction;

	function isPrimitive(arg) {
	  return arg === null ||
	         typeof arg === 'boolean' ||
	         typeof arg === 'number' ||
	         typeof arg === 'string' ||
	         typeof arg === 'symbol' ||  // ES6 symbol
	         typeof arg === 'undefined';
	}
	exports.isPrimitive = isPrimitive;

	exports.isBuffer = __webpack_require__(220);

	function objectToString(o) {
	  return Object.prototype.toString.call(o);
	}


	function pad(n) {
	  return n < 10 ? '0' + n.toString(10) : n.toString(10);
	}


	var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	              'Oct', 'Nov', 'Dec'];

	// 26 Feb 16:19:34
	function timestamp() {
	  var d = new Date();
	  var time = [pad(d.getHours()),
	              pad(d.getMinutes()),
	              pad(d.getSeconds())].join(':');
	  return [d.getDate(), months[d.getMonth()], time].join(' ');
	}


	// log is just a thin wrapper to console.log that prepends a timestamp
	exports.log = function() {
	  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
	};


	/**
	 * Inherit the prototype methods from one constructor into another.
	 *
	 * The Function.prototype.inherits from lang.js rewritten as a standalone
	 * function (not on Function.prototype). NOTE: If this file is to be loaded
	 * during bootstrapping this function needs to be rewritten using some native
	 * functions as prototype setup using normal JavaScript does not work as
	 * expected during bootstrapping (see mirror.js in r114903).
	 *
	 * @param {function} ctor Constructor function which needs to inherit the
	 *     prototype.
	 * @param {function} superCtor Constructor function to inherit prototype from.
	 */
	exports.inherits = __webpack_require__(221);

	exports._extend = function(origin, add) {
	  // Don't do anything if add isn't an object
	  if (!add || !isObject(add)) return origin;

	  var keys = Object.keys(add);
	  var i = keys.length;
	  while (i--) {
	    origin[keys[i]] = add[keys[i]];
	  }
	  return origin;
	};

	function hasOwnProperty(obj, prop) {
	  return Object.prototype.hasOwnProperty.call(obj, prop);
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(219)))

/***/ },
/* 219 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};

	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }


	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }



	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 220 */
/***/ function(module, exports) {

	module.exports = function isBuffer(arg) {
	  return arg && typeof arg === 'object'
	    && typeof arg.copy === 'function'
	    && typeof arg.fill === 'function'
	    && typeof arg.readUInt8 === 'function';
	}

/***/ },
/* 221 */
/***/ function(module, exports) {

	if (typeof Object.create === 'function') {
	  // implementation from standard node.js 'util' module
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  };
	} else {
	  // old school shim for old browsers
	  module.exports = function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor
	    var TempCtor = function () {}
	    TempCtor.prototype = superCtor.prototype
	    ctor.prototype = new TempCtor()
	    ctor.prototype.constructor = ctor
	  }
	}


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	
	/**
	 * A JavaScript implementation of the Secure Hash Algorithm, SHA-256, as defined
	 * in FIPS 180-2
	 * Version 2.2-beta Copyright Angel Marin, Paul Johnston 2000 - 2009.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 *
	 */

	var inherits = __webpack_require__(218).inherits

	module.exports = function (Buffer, Hash) {

	  var K = [
	      0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
	      0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
	      0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
	      0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
	      0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
	      0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
	      0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
	      0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
	      0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
	      0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
	      0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
	      0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
	      0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
	      0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
	      0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
	      0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
	    ]

	  var W = new Array(64)

	  function Sha256() {
	    this.init()

	    this._w = W //new Array(64)

	    Hash.call(this, 16*4, 14*4)
	  }

	  inherits(Sha256, Hash)

	  Sha256.prototype.init = function () {

	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0

	    this._len = this._s = 0

	    return this
	  }

	  function S (X, n) {
	    return (X >>> n) | (X << (32 - n));
	  }

	  function R (X, n) {
	    return (X >>> n);
	  }

	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }

	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }

	  function Sigma0256 (x) {
	    return (S(x, 2) ^ S(x, 13) ^ S(x, 22));
	  }

	  function Sigma1256 (x) {
	    return (S(x, 6) ^ S(x, 11) ^ S(x, 25));
	  }

	  function Gamma0256 (x) {
	    return (S(x, 7) ^ S(x, 18) ^ R(x, 3));
	  }

	  function Gamma1256 (x) {
	    return (S(x, 17) ^ S(x, 19) ^ R(x, 10));
	  }

	  Sha256.prototype._update = function(M) {

	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var T1, T2

	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0

	    for (var j = 0; j < 64; j++) {
	      var w = W[j] = j < 16
	        ? M.readInt32BE(j * 4)
	        : Gamma1256(W[j - 2]) + W[j - 7] + Gamma0256(W[j - 15]) + W[j - 16]

	      T1 = h + Sigma1256(e) + Ch(e, f, g) + K[j] + w

	      T2 = Sigma0256(a) + Maj(a, b, c);
	      h = g; g = f; f = e; e = d + T1; d = c; c = b; b = a; a = T1 + T2;
	    }

	    this._a = (a + this._a) | 0
	    this._b = (b + this._b) | 0
	    this._c = (c + this._c) | 0
	    this._d = (d + this._d) | 0
	    this._e = (e + this._e) | 0
	    this._f = (f + this._f) | 0
	    this._g = (g + this._g) | 0
	    this._h = (h + this._h) | 0

	  };

	  Sha256.prototype._hash = function () {
	    var H = new Buffer(32)

	    H.writeInt32BE(this._a,  0)
	    H.writeInt32BE(this._b,  4)
	    H.writeInt32BE(this._c,  8)
	    H.writeInt32BE(this._d, 12)
	    H.writeInt32BE(this._e, 16)
	    H.writeInt32BE(this._f, 20)
	    H.writeInt32BE(this._g, 24)
	    H.writeInt32BE(this._h, 28)

	    return H
	  }

	  return Sha256

	}


/***/ },
/* 223 */
/***/ function(module, exports, __webpack_require__) {

	var inherits = __webpack_require__(218).inherits

	module.exports = function (Buffer, Hash) {
	  var K = [
	    0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,
	    0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,
	    0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,
	    0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,
	    0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,
	    0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,
	    0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,
	    0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,
	    0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,
	    0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,
	    0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,
	    0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,
	    0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,
	    0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,
	    0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,
	    0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,
	    0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,
	    0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,
	    0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,
	    0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,
	    0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,
	    0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,
	    0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,
	    0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,
	    0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,
	    0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,
	    0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,
	    0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,
	    0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,
	    0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,
	    0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,
	    0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,
	    0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,
	    0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,
	    0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,
	    0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,
	    0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,
	    0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,
	    0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,
	    0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817
	  ]

	  var W = new Array(160)

	  function Sha512() {
	    this.init()
	    this._w = W

	    Hash.call(this, 128, 112)
	  }

	  inherits(Sha512, Hash)

	  Sha512.prototype.init = function () {

	    this._a = 0x6a09e667|0
	    this._b = 0xbb67ae85|0
	    this._c = 0x3c6ef372|0
	    this._d = 0xa54ff53a|0
	    this._e = 0x510e527f|0
	    this._f = 0x9b05688c|0
	    this._g = 0x1f83d9ab|0
	    this._h = 0x5be0cd19|0

	    this._al = 0xf3bcc908|0
	    this._bl = 0x84caa73b|0
	    this._cl = 0xfe94f82b|0
	    this._dl = 0x5f1d36f1|0
	    this._el = 0xade682d1|0
	    this._fl = 0x2b3e6c1f|0
	    this._gl = 0xfb41bd6b|0
	    this._hl = 0x137e2179|0

	    this._len = this._s = 0

	    return this
	  }

	  function S (X, Xl, n) {
	    return (X >>> n) | (Xl << (32 - n))
	  }

	  function Ch (x, y, z) {
	    return ((x & y) ^ ((~x) & z));
	  }

	  function Maj (x, y, z) {
	    return ((x & y) ^ (x & z) ^ (y & z));
	  }

	  Sha512.prototype._update = function(M) {

	    var W = this._w
	    var a, b, c, d, e, f, g, h
	    var al, bl, cl, dl, el, fl, gl, hl

	    a = this._a | 0
	    b = this._b | 0
	    c = this._c | 0
	    d = this._d | 0
	    e = this._e | 0
	    f = this._f | 0
	    g = this._g | 0
	    h = this._h | 0

	    al = this._al | 0
	    bl = this._bl | 0
	    cl = this._cl | 0
	    dl = this._dl | 0
	    el = this._el | 0
	    fl = this._fl | 0
	    gl = this._gl | 0
	    hl = this._hl | 0

	    for (var i = 0; i < 80; i++) {
	      var j = i * 2

	      var Wi, Wil

	      if (i < 16) {
	        Wi = W[j] = M.readInt32BE(j * 4)
	        Wil = W[j + 1] = M.readInt32BE(j * 4 + 4)

	      } else {
	        var x  = W[j - 15*2]
	        var xl = W[j - 15*2 + 1]
	        var gamma0  = S(x, xl, 1) ^ S(x, xl, 8) ^ (x >>> 7)
	        var gamma0l = S(xl, x, 1) ^ S(xl, x, 8) ^ S(xl, x, 7)

	        x  = W[j - 2*2]
	        xl = W[j - 2*2 + 1]
	        var gamma1  = S(x, xl, 19) ^ S(xl, x, 29) ^ (x >>> 6)
	        var gamma1l = S(xl, x, 19) ^ S(x, xl, 29) ^ S(xl, x, 6)

	        // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	        var Wi7  = W[j - 7*2]
	        var Wi7l = W[j - 7*2 + 1]

	        var Wi16  = W[j - 16*2]
	        var Wi16l = W[j - 16*2 + 1]

	        Wil = gamma0l + Wi7l
	        Wi  = gamma0  + Wi7 + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0)
	        Wil = Wil + gamma1l
	        Wi  = Wi  + gamma1  + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0)
	        Wil = Wil + Wi16l
	        Wi  = Wi  + Wi16 + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0)

	        W[j] = Wi
	        W[j + 1] = Wil
	      }

	      var maj = Maj(a, b, c)
	      var majl = Maj(al, bl, cl)

	      var sigma0h = S(a, al, 28) ^ S(al, a, 2) ^ S(al, a, 7)
	      var sigma0l = S(al, a, 28) ^ S(a, al, 2) ^ S(a, al, 7)
	      var sigma1h = S(e, el, 14) ^ S(e, el, 18) ^ S(el, e, 9)
	      var sigma1l = S(el, e, 14) ^ S(el, e, 18) ^ S(e, el, 9)

	      // t1 = h + sigma1 + ch + K[i] + W[i]
	      var Ki = K[j]
	      var Kil = K[j + 1]

	      var ch = Ch(e, f, g)
	      var chl = Ch(el, fl, gl)

	      var t1l = hl + sigma1l
	      var t1 = h + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0)
	      t1l = t1l + chl
	      t1 = t1 + ch + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0)
	      t1l = t1l + Kil
	      t1 = t1 + Ki + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0)
	      t1l = t1l + Wil
	      t1 = t1 + Wi + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0)

	      // t2 = sigma0 + maj
	      var t2l = sigma0l + majl
	      var t2 = sigma0h + maj + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0)

	      h  = g
	      hl = gl
	      g  = f
	      gl = fl
	      f  = e
	      fl = el
	      el = (dl + t1l) | 0
	      e  = (d + t1 + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	      d  = c
	      dl = cl
	      c  = b
	      cl = bl
	      b  = a
	      bl = al
	      al = (t1l + t2l) | 0
	      a  = (t1 + t2 + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0
	    }

	    this._al = (this._al + al) | 0
	    this._bl = (this._bl + bl) | 0
	    this._cl = (this._cl + cl) | 0
	    this._dl = (this._dl + dl) | 0
	    this._el = (this._el + el) | 0
	    this._fl = (this._fl + fl) | 0
	    this._gl = (this._gl + gl) | 0
	    this._hl = (this._hl + hl) | 0

	    this._a = (this._a + a + ((this._al >>> 0) < (al >>> 0) ? 1 : 0)) | 0
	    this._b = (this._b + b + ((this._bl >>> 0) < (bl >>> 0) ? 1 : 0)) | 0
	    this._c = (this._c + c + ((this._cl >>> 0) < (cl >>> 0) ? 1 : 0)) | 0
	    this._d = (this._d + d + ((this._dl >>> 0) < (dl >>> 0) ? 1 : 0)) | 0
	    this._e = (this._e + e + ((this._el >>> 0) < (el >>> 0) ? 1 : 0)) | 0
	    this._f = (this._f + f + ((this._fl >>> 0) < (fl >>> 0) ? 1 : 0)) | 0
	    this._g = (this._g + g + ((this._gl >>> 0) < (gl >>> 0) ? 1 : 0)) | 0
	    this._h = (this._h + h + ((this._hl >>> 0) < (hl >>> 0) ? 1 : 0)) | 0
	  }

	  Sha512.prototype._hash = function () {
	    var H = new Buffer(64)

	    function writeInt64BE(h, l, offset) {
	      H.writeInt32BE(h, offset)
	      H.writeInt32BE(l, offset + 4)
	    }

	    writeInt64BE(this._a, this._al, 0)
	    writeInt64BE(this._b, this._bl, 8)
	    writeInt64BE(this._c, this._cl, 16)
	    writeInt64BE(this._d, this._dl, 24)
	    writeInt64BE(this._e, this._el, 32)
	    writeInt64BE(this._f, this._fl, 40)
	    writeInt64BE(this._g, this._gl, 48)
	    writeInt64BE(this._h, this._hl, 56)

	    return H
	  }

	  return Sha512

	}


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	var helpers = __webpack_require__(225);

	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len)
	{
	  /* append padding */
	  x[len >> 5] |= 0x80 << ((len) % 32);
	  x[(((len + 64) >>> 9) << 4) + 14] = len;

	  var a =  1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d =  271733878;

	  for(var i = 0; i < x.length; i += 16)
	  {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;

	    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
	    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
	    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
	    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
	    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
	    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
	    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
	    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
	    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
	    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
	    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
	    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
	    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
	    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
	    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
	    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

	    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
	    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
	    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
	    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
	    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
	    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
	    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
	    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
	    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
	    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
	    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
	    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
	    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
	    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
	    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
	    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

	    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
	    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
	    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
	    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
	    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
	    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
	    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
	    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
	    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
	    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
	    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
	    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
	    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
	    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
	    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
	    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

	    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
	    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
	    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
	    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
	    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
	    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
	    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
	    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
	    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
	    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
	    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
	    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
	    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
	    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
	    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
	    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	  }
	  return Array(a, b, c, d);

	}

	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t)
	{
	  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
	}
	function md5_ff(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t)
	{
	  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t)
	{
	  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y)
	{
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	}

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt)
	{
	  return (num << cnt) | (num >>> (32 - cnt));
	}

	module.exports = function md5(buf) {
	  return helpers.hash(buf, core_md5, 16);
	};


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var intSize = 4;
	var zeroBuffer = new Buffer(intSize); zeroBuffer.fill(0);
	var chrsz = 8;

	function toArray(buf, bigEndian) {
	  if ((buf.length % intSize) !== 0) {
	    var len = buf.length + (intSize - (buf.length % intSize));
	    buf = Buffer.concat([buf, zeroBuffer], len);
	  }

	  var arr = [];
	  var fn = bigEndian ? buf.readInt32BE : buf.readInt32LE;
	  for (var i = 0; i < buf.length; i += intSize) {
	    arr.push(fn.call(buf, i));
	  }
	  return arr;
	}

	function toBuffer(arr, size, bigEndian) {
	  var buf = new Buffer(size);
	  var fn = bigEndian ? buf.writeInt32BE : buf.writeInt32LE;
	  for (var i = 0; i < arr.length; i++) {
	    fn.call(buf, arr[i], i * 4, true);
	  }
	  return buf;
	}

	function hash(buf, fn, hashSize, bigEndian) {
	  if (!Buffer.isBuffer(buf)) buf = new Buffer(buf);
	  var arr = fn(toArray(buf, bigEndian), buf.length * chrsz);
	  return toBuffer(arr, hashSize, bigEndian);
	}

	module.exports = { hash: hash };

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(208).Buffer))

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {
	module.exports = ripemd160



	/*
	CryptoJS v3.1.2
	code.google.com/p/crypto-js
	(c) 2009-2013 by Jeff Mott. All rights reserved.
	code.google.com/p/crypto-js/wiki/License
	*/
	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	// Constants table
	var zl = [
	    0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	    7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	    3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	    1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	    4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13];
	var zr = [
	    5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	    6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	    15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	    8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	    12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11];
	var sl = [
	     11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	    7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	    11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	      11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	    9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ];
	var sr = [
	    8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	    9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	    9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	    15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	    8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ];

	var hl =  [ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E];
	var hr =  [ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000];

	var bytesToWords = function (bytes) {
	  var words = [];
	  for (var i = 0, b = 0; i < bytes.length; i++, b += 8) {
	    words[b >>> 5] |= bytes[i] << (24 - b % 32);
	  }
	  return words;
	};

	var wordsToBytes = function (words) {
	  var bytes = [];
	  for (var b = 0; b < words.length * 32; b += 8) {
	    bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
	  }
	  return bytes;
	};

	var processBlock = function (H, M, offset) {

	  // Swap endian
	  for (var i = 0; i < 16; i++) {
	    var offset_i = offset + i;
	    var M_offset_i = M[offset_i];

	    // Swap
	    M[offset_i] = (
	        (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	        (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	    );
	  }

	  // Working variables
	  var al, bl, cl, dl, el;
	  var ar, br, cr, dr, er;

	  ar = al = H[0];
	  br = bl = H[1];
	  cr = cl = H[2];
	  dr = dl = H[3];
	  er = el = H[4];
	  // Computation
	  var t;
	  for (var i = 0; i < 80; i += 1) {
	    t = (al +  M[offset+zl[i]])|0;
	    if (i<16){
	        t +=  f1(bl,cl,dl) + hl[0];
	    } else if (i<32) {
	        t +=  f2(bl,cl,dl) + hl[1];
	    } else if (i<48) {
	        t +=  f3(bl,cl,dl) + hl[2];
	    } else if (i<64) {
	        t +=  f4(bl,cl,dl) + hl[3];
	    } else {// if (i<80) {
	        t +=  f5(bl,cl,dl) + hl[4];
	    }
	    t = t|0;
	    t =  rotl(t,sl[i]);
	    t = (t+el)|0;
	    al = el;
	    el = dl;
	    dl = rotl(cl, 10);
	    cl = bl;
	    bl = t;

	    t = (ar + M[offset+zr[i]])|0;
	    if (i<16){
	        t +=  f5(br,cr,dr) + hr[0];
	    } else if (i<32) {
	        t +=  f4(br,cr,dr) + hr[1];
	    } else if (i<48) {
	        t +=  f3(br,cr,dr) + hr[2];
	    } else if (i<64) {
	        t +=  f2(br,cr,dr) + hr[3];
	    } else {// if (i<80) {
	        t +=  f1(br,cr,dr) + hr[4];
	    }
	    t = t|0;
	    t =  rotl(t,sr[i]) ;
	    t = (t+er)|0;
	    ar = er;
	    er = dr;
	    dr = rotl(cr, 10);
	    cr = br;
	    br = t;
	  }
	  // Intermediate hash value
	  t    = (H[1] + cl + dr)|0;
	  H[1] = (H[2] + dl + er)|0;
	  H[2] = (H[3] + el + ar)|0;
	  H[3] = (H[4] + al + br)|0;
	  H[4] = (H[0] + bl + cr)|0;
	  H[0] =  t;
	};

	function f1(x, y, z) {
	  return ((x) ^ (y) ^ (z));
	}

	function f2(x, y, z) {
	  return (((x)&(y)) | ((~x)&(z)));
	}

	function f3(x, y, z) {
	  return (((x) | (~(y))) ^ (z));
	}

	function f4(x, y, z) {
	  return (((x) & (z)) | ((y)&(~(z))));
	}

	function f5(x, y, z) {
	  return ((x) ^ ((y) |(~(z))));
	}

	function rotl(x,n) {
	  return (x<<n) | (x>>>(32-n));
	}

	function ripemd160(message) {
	  var H = [0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0];

	  if (typeof message == 'string')
	    message = new Buffer(message, 'utf8');

	  var m = bytesToWords(message);

	  var nBitsLeft = message.length * 8;
	  var nBitsTotal = message.length * 8;

	  // Add padding
	  m[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	  m[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	      (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	      (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	  );

	  for (var i=0 ; i<m.length; i += 16) {
	    processBlock(H, m, i);
	  }

	  // Swap endian
	  for (var i = 0; i < 5; i++) {
	      // Shortcut
	    var H_i = H[i];

	    // Swap
	    H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	          (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	  }

	  var digestbytes = wordsToBytes(H);
	  return new Buffer(digestbytes);
	}



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(208).Buffer))

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {var createHash = __webpack_require__(214)

	var zeroBuffer = new Buffer(128)
	zeroBuffer.fill(0)

	module.exports = Hmac

	function Hmac (alg, key) {
	  if(!(this instanceof Hmac)) return new Hmac(alg, key)
	  this._opad = opad
	  this._alg = alg

	  var blocksize = (alg === 'sha512') ? 128 : 64

	  key = this._key = !Buffer.isBuffer(key) ? new Buffer(key) : key

	  if(key.length > blocksize) {
	    key = createHash(alg).update(key).digest()
	  } else if(key.length < blocksize) {
	    key = Buffer.concat([key, zeroBuffer], blocksize)
	  }

	  var ipad = this._ipad = new Buffer(blocksize)
	  var opad = this._opad = new Buffer(blocksize)

	  for(var i = 0; i < blocksize; i++) {
	    ipad[i] = key[i] ^ 0x36
	    opad[i] = key[i] ^ 0x5C
	  }

	  this._hash = createHash(alg).update(ipad)
	}

	Hmac.prototype.update = function (data, enc) {
	  this._hash.update(data, enc)
	  return this
	}

	Hmac.prototype.digest = function (enc) {
	  var h = this._hash.digest()
	  return createHash(this._alg).update(this._opad).update(h).digest(enc)
	}


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(208).Buffer))

/***/ },
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	var pbkdf2Export = __webpack_require__(229)

	module.exports = function (crypto, exports) {
	  exports = exports || {}

	  var exported = pbkdf2Export(crypto)

	  exports.pbkdf2 = exported.pbkdf2
	  exports.pbkdf2Sync = exported.pbkdf2Sync

	  return exports
	}


/***/ },
/* 229 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {module.exports = function(crypto) {
	  function pbkdf2(password, salt, iterations, keylen, digest, callback) {
	    if ('function' === typeof digest) {
	      callback = digest
	      digest = undefined
	    }

	    if ('function' !== typeof callback)
	      throw new Error('No callback provided to pbkdf2')

	    setTimeout(function() {
	      var result

	      try {
	        result = pbkdf2Sync(password, salt, iterations, keylen, digest)
	      } catch (e) {
	        return callback(e)
	      }

	      callback(undefined, result)
	    })
	  }

	  function pbkdf2Sync(password, salt, iterations, keylen, digest) {
	    if ('number' !== typeof iterations)
	      throw new TypeError('Iterations not a number')

	    if (iterations < 0)
	      throw new TypeError('Bad iterations')

	    if ('number' !== typeof keylen)
	      throw new TypeError('Key length not a number')

	    if (keylen < 0)
	      throw new TypeError('Bad key length')

	    digest = digest || 'sha1'

	    if (!Buffer.isBuffer(password)) password = new Buffer(password)
	    if (!Buffer.isBuffer(salt)) salt = new Buffer(salt)

	    var hLen, l = 1, r, T
	    var DK = new Buffer(keylen)
	    var block1 = new Buffer(salt.length + 4)
	    salt.copy(block1, 0, 0, salt.length)

	    for (var i = 1; i <= l; i++) {
	      block1.writeUInt32BE(i, salt.length)

	      var U = crypto.createHmac(digest, password).update(block1).digest()

	      if (!hLen) {
	        hLen = U.length
	        T = new Buffer(hLen)
	        l = Math.ceil(keylen / hLen)
	        r = keylen - (l - 1) * hLen

	        if (keylen > (Math.pow(2, 32) - 1) * hLen)
	          throw new TypeError('keylen exceeds maximum length')
	      }

	      U.copy(T, 0, 0, hLen)

	      for (var j = 1; j < iterations; j++) {
	        U = crypto.createHmac(digest, password).update(U).digest()

	        for (var k = 0; k < hLen; k++) {
	          T[k] ^= U[k]
	        }
	      }

	      var destPos = (i - 1) * hLen
	      var len = (i == l ? r : hLen)
	      T.copy(DK, destPos, 0, len)
	    }

	    return DK
	  }

	  return {
	    pbkdf2: pbkdf2,
	    pbkdf2Sync: pbkdf2Sync
	  }
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(208).Buffer))

/***/ },
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {// Generated by CoffeeScript 1.6.2
	/** echo  * @license echo  * while read i do echo  *  done echo
	*/


	(function() {
	  var Color, K, PITHIRD, TWOPI, X, Y, Z, bezier, brewer, chroma, clip_rgb, colors, cos, css2rgb, hex2rgb, hsi2rgb, hsl2rgb, hsv2rgb, lab2lch, lab2rgb, lab_xyz, lch2lab, lch2rgb, limit, luminance, luminance_x, rgb2hex, rgb2hsi, rgb2hsl, rgb2hsv, rgb2lab, rgb2lch, rgb_xyz, root, type, unpack, xyz_lab, xyz_rgb, _ref;

	  chroma = function(x, y, z, m) {
	    return new Color(x, y, z, m);
	  };

	  if ((typeof module !== "undefined" && module !== null) && (module.exports != null)) {
	    module.exports = chroma;
	  }

	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return chroma;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {
	    root = typeof exports !== "undefined" && exports !== null ? exports : this;
	    root.chroma = chroma;
	  }

	  chroma.color = function(x, y, z, m) {
	    return new Color(x, y, z, m);
	  };

	  chroma.hsl = function(h, s, l, a) {
	    return new Color(h, s, l, a, 'hsl');
	  };

	  chroma.hsv = function(h, s, v, a) {
	    return new Color(h, s, v, a, 'hsv');
	  };

	  chroma.rgb = function(r, g, b, a) {
	    return new Color(r, g, b, a, 'rgb');
	  };

	  chroma.hex = function(x) {
	    return new Color(x);
	  };

	  chroma.css = function(x) {
	    return new Color(x);
	  };

	  chroma.lab = function(l, a, b) {
	    return new Color(l, a, b, 'lab');
	  };

	  chroma.lch = function(l, c, h) {
	    return new Color(l, c, h, 'lch');
	  };

	  chroma.hsi = function(h, s, i) {
	    return new Color(h, s, i, 'hsi');
	  };

	  chroma.gl = function(r, g, b, a) {
	    return new Color(r * 255, g * 255, b * 255, a, 'gl');
	  };

	  chroma.interpolate = function(a, b, f, m) {
	    if ((a == null) || (b == null)) {
	      return '#000';
	    }
	    if (type(a) === 'string') {
	      a = new Color(a);
	    }
	    if (type(b) === 'string') {
	      b = new Color(b);
	    }
	    return a.interpolate(f, b, m);
	  };

	  chroma.mix = chroma.interpolate;

	  chroma.contrast = function(a, b) {
	    var l1, l2;

	    if (type(a) === 'string') {
	      a = new Color(a);
	    }
	    if (type(b) === 'string') {
	      b = new Color(b);
	    }
	    l1 = a.luminance();
	    l2 = b.luminance();
	    if (l1 > l2) {
	      return (l1 + 0.05) / (l2 + 0.05);
	    } else {
	      return (l2 + 0.05) / (l1 + 0.05);
	    }
	  };

	  chroma.luminance = function(color) {
	    return chroma(color).luminance();
	  };

	  chroma._Color = Color;

	  /**
	      chroma.js
	  
	      Copyright (c) 2011-2013, Gregor Aisch
	      All rights reserved.
	  
	      Redistribution and use in source and binary forms, with or without
	      modification, are permitted provided that the following conditions are met:
	  
	      * Redistributions of source code must retain the above copyright notice, this
	        list of conditions and the following disclaimer.
	  
	      * Redistributions in binary form must reproduce the above copyright notice,
	        this list of conditions and the following disclaimer in the documentation
	        and/or other materials provided with the distribution.
	  
	      * The name Gregor Aisch may not be used to endorse or promote products
	        derived from this software without specific prior written permission.
	  
	      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	      DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
	      INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
	      BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	      DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	      OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	      NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
	      EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	  
	      @source: https://github.com/gka/chroma.js
	  */


	  Color = (function() {
	    function Color() {
	      var a, arg, args, m, me, me_rgb, x, y, z, _i, _len, _ref, _ref1, _ref2, _ref3, _ref4;

	      me = this;
	      args = [];
	      for (_i = 0, _len = arguments.length; _i < _len; _i++) {
	        arg = arguments[_i];
	        if (arg != null) {
	          args.push(arg);
	        }
	      }
	      if (args.length === 0) {
	        _ref = [255, 0, 255, 1, 'rgb'], x = _ref[0], y = _ref[1], z = _ref[2], a = _ref[3], m = _ref[4];
	      } else if (type(args[0]) === "array") {
	        if (args[0].length === 3) {
	          _ref1 = args[0], x = _ref1[0], y = _ref1[1], z = _ref1[2];
	          a = 1;
	        } else if (args[0].length === 4) {
	          _ref2 = args[0], x = _ref2[0], y = _ref2[1], z = _ref2[2], a = _ref2[3];
	        } else {
	          throw 'unknown input argument';
	        }
	        m = (_ref3 = args[1]) != null ? _ref3 : 'rgb';
	      } else if (type(args[0]) === "string") {
	        x = args[0];
	        m = 'hex';
	      } else if (type(args[0]) === "object") {
	        _ref4 = args[0]._rgb, x = _ref4[0], y = _ref4[1], z = _ref4[2], a = _ref4[3];
	        m = 'rgb';
	      } else if (args.length >= 3) {
	        x = args[0];
	        y = args[1];
	        z = args[2];
	      }
	      if (args.length === 3) {
	        m = 'rgb';
	        a = 1;
	      } else if (args.length === 4) {
	        if (type(args[3]) === "string") {
	          m = args[3];
	          a = 1;
	        } else if (type(args[3]) === "number") {
	          m = 'rgb';
	          a = args[3];
	        }
	      } else if (args.length === 5) {
	        a = args[3];
	        m = args[4];
	      }
	      if (a == null) {
	        a = 1;
	      }
	      if (m === 'rgb') {
	        me._rgb = [x, y, z, a];
	      } else if (m === 'gl') {
	        me._rgb = [x * 255, y * 255, z * 255, a];
	      } else if (m === 'hsl') {
	        me._rgb = hsl2rgb(x, y, z);
	        me._rgb[3] = a;
	      } else if (m === 'hsv') {
	        me._rgb = hsv2rgb(x, y, z);
	        me._rgb[3] = a;
	      } else if (m === 'hex') {
	        me._rgb = hex2rgb(x);
	      } else if (m === 'lab') {
	        me._rgb = lab2rgb(x, y, z);
	        me._rgb[3] = a;
	      } else if (m === 'lch') {
	        me._rgb = lch2rgb(x, y, z);
	        me._rgb[3] = a;
	      } else if (m === 'hsi') {
	        me._rgb = hsi2rgb(x, y, z);
	        me._rgb[3] = a;
	      }
	      me_rgb = clip_rgb(me._rgb);
	    }

	    Color.prototype.rgb = function() {
	      return this._rgb.slice(0, 3);
	    };

	    Color.prototype.rgba = function() {
	      return this._rgb;
	    };

	    Color.prototype.hex = function() {
	      return rgb2hex(this._rgb);
	    };

	    Color.prototype.toString = function() {
	      return this.name();
	    };

	    Color.prototype.hsl = function() {
	      return rgb2hsl(this._rgb);
	    };

	    Color.prototype.hsv = function() {
	      return rgb2hsv(this._rgb);
	    };

	    Color.prototype.lab = function() {
	      return rgb2lab(this._rgb);
	    };

	    Color.prototype.lch = function() {
	      return rgb2lch(this._rgb);
	    };

	    Color.prototype.hsi = function() {
	      return rgb2hsi(this._rgb);
	    };

	    Color.prototype.gl = function() {
	      return [this._rgb[0] / 255, this._rgb[1] / 255, this._rgb[2] / 255, this._rgb[3]];
	    };

	    Color.prototype.luminance = function(lum, mode) {
	      var cur_lum, eps, max_iter, test;

	      if (mode == null) {
	        mode = 'rgb';
	      }
	      if (!arguments.length) {
	        return luminance(this._rgb);
	      }
	      if (lum === 0) {
	        this._rgb = [0, 0, 0, this._rgb[3]];
	      }
	      if (lum === 1) {
	        this._rgb = [255, 255, 255, this._rgb[3]];
	      }
	      cur_lum = luminance(this._rgb);
	      eps = 1e-7;
	      max_iter = 20;
	      test = function(l, h) {
	        var lm, m;

	        m = l.interpolate(0.5, h, mode);
	        lm = m.luminance();
	        if (Math.abs(lum - lm) < eps || !max_iter--) {
	          return m;
	        }
	        if (lm > lum) {
	          return test(l, m);
	        }
	        return test(m, h);
	      };
	      this._rgb = (cur_lum > lum ? test(new Color('black'), this) : test(this, new Color('white'))).rgba();
	      return this;
	    };

	    Color.prototype.name = function() {
	      var h, k;

	      h = this.hex();
	      for (k in chroma.colors) {
	        if (h === chroma.colors[k]) {
	          return k;
	        }
	      }
	      return h;
	    };

	    Color.prototype.alpha = function(alpha) {
	      if (arguments.length) {
	        this._rgb[3] = alpha;
	        return this;
	      }
	      return this._rgb[3];
	    };

	    Color.prototype.css = function(mode) {
	      var hsl, me, rgb, rnd;

	      if (mode == null) {
	        mode = 'rgb';
	      }
	      me = this;
	      rgb = me._rgb;
	      if (mode.length === 3 && rgb[3] < 1) {
	        mode += 'a';
	      }
	      if (mode === 'rgb') {
	        return mode + '(' + rgb.slice(0, 3).map(Math.round).join(',') + ')';
	      } else if (mode === 'rgba') {
	        return mode + '(' + rgb.slice(0, 3).map(Math.round).join(',') + ',' + rgb[3] + ')';
	      } else if (mode === 'hsl' || mode === 'hsla') {
	        hsl = me.hsl();
	        rnd = function(a) {
	          return Math.round(a * 100) / 100;
	        };
	        hsl[0] = rnd(hsl[0]);
	        hsl[1] = rnd(hsl[1] * 100) + '%';
	        hsl[2] = rnd(hsl[2] * 100) + '%';
	        if (mode.length === 4) {
	          hsl[3] = rgb[3];
	        }
	        return mode + '(' + hsl.join(',') + ')';
	      }
	    };

	    Color.prototype.interpolate = function(f, col, m) {
	      /*
	      interpolates between colors
	      f = 0 --> me
	      f = 1 --> col
	      */

	      var dh, hue, hue0, hue1, lbv, lbv0, lbv1, me, res, sat, sat0, sat1, xyz0, xyz1;

	      me = this;
	      if (m == null) {
	        m = 'rgb';
	      }
	      if (type(col) === "string") {
	        col = new Color(col);
	      }
	      if (m === 'hsl' || m === 'hsv' || m === 'lch' || m === 'hsi') {
	        if (m === 'hsl') {
	          xyz0 = me.hsl();
	          xyz1 = col.hsl();
	        } else if (m === 'hsv') {
	          xyz0 = me.hsv();
	          xyz1 = col.hsv();
	        } else if (m === 'hsi') {
	          xyz0 = me.hsi();
	          xyz1 = col.hsi();
	        } else if (m === 'lch') {
	          xyz0 = me.lch();
	          xyz1 = col.lch();
	        }
	        if (m.substr(0, 1) === 'h') {
	          hue0 = xyz0[0], sat0 = xyz0[1], lbv0 = xyz0[2];
	          hue1 = xyz1[0], sat1 = xyz1[1], lbv1 = xyz1[2];
	        } else {
	          lbv0 = xyz0[0], sat0 = xyz0[1], hue0 = xyz0[2];
	          lbv1 = xyz1[0], sat1 = xyz1[1], hue1 = xyz1[2];
	        }
	        if (!isNaN(hue0) && !isNaN(hue1)) {
	          if (hue1 > hue0 && hue1 - hue0 > 180) {
	            dh = hue1 - (hue0 + 360);
	          } else if (hue1 < hue0 && hue0 - hue1 > 180) {
	            dh = hue1 + 360 - hue0;
	          } else {
	            dh = hue1 - hue0;
	          }
	          hue = hue0 + f * dh;
	        } else if (!isNaN(hue0)) {
	          hue = hue0;
	          if ((lbv1 === 1 || lbv1 === 0) && m !== 'hsv') {
	            sat = sat0;
	          }
	        } else if (!isNaN(hue1)) {
	          hue = hue1;
	          if ((lbv0 === 1 || lbv0 === 0) && m !== 'hsv') {
	            sat = sat1;
	          }
	        } else {
	          hue = Number.NaN;
	        }
	        if (sat == null) {
	          sat = sat0 + f * (sat1 - sat0);
	        }
	        lbv = lbv0 + f * (lbv1 - lbv0);
	        if (m.substr(0, 1) === 'h') {
	          res = new Color(hue, sat, lbv, m);
	        } else {
	          res = new Color(lbv, sat, hue, m);
	        }
	      } else if (m === 'rgb') {
	        xyz0 = me._rgb;
	        xyz1 = col._rgb;
	        res = new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
	      } else if (m === 'lab') {
	        xyz0 = me.lab();
	        xyz1 = col.lab();
	        res = new Color(xyz0[0] + f * (xyz1[0] - xyz0[0]), xyz0[1] + f * (xyz1[1] - xyz0[1]), xyz0[2] + f * (xyz1[2] - xyz0[2]), m);
	      } else {
	        throw "color mode " + m + " is not supported";
	      }
	      res.alpha(me.alpha() + f * (col.alpha() - me.alpha()));
	      return res;
	    };

	    Color.prototype.premultiply = function() {
	      var a, rgb;

	      rgb = this.rgb();
	      a = this.alpha();
	      return chroma(rgb[0] * a, rgb[1] * a, rgb[2] * a, a);
	    };

	    Color.prototype.darken = function(amount) {
	      var lch, me;

	      if (amount == null) {
	        amount = 20;
	      }
	      me = this;
	      lch = me.lch();
	      lch[0] -= amount;
	      return chroma.lch(lch).alpha(me.alpha());
	    };

	    Color.prototype.darker = function(amount) {
	      return this.darken(amount);
	    };

	    Color.prototype.brighten = function(amount) {
	      if (amount == null) {
	        amount = 20;
	      }
	      return this.darken(-amount);
	    };

	    Color.prototype.brighter = function(amount) {
	      return this.brighten(amount);
	    };

	    Color.prototype.saturate = function(amount) {
	      var lch, me;

	      if (amount == null) {
	        amount = 20;
	      }
	      me = this;
	      lch = me.lch();
	      lch[1] += amount;
	      return chroma.lch(lch).alpha(me.alpha());
	    };

	    Color.prototype.desaturate = function(amount) {
	      if (amount == null) {
	        amount = 20;
	      }
	      return this.saturate(-amount);
	    };

	    return Color;

	  })();

	  clip_rgb = function(rgb) {
	    var i;

	    for (i in rgb) {
	      if (i < 3) {
	        if (rgb[i] < 0) {
	          rgb[i] = 0;
	        }
	        if (rgb[i] > 255) {
	          rgb[i] = 255;
	        }
	      } else if (i === 3) {
	        if (rgb[i] < 0) {
	          rgb[i] = 0;
	        }
	        if (rgb[i] > 1) {
	          rgb[i] = 1;
	        }
	      }
	    }
	    return rgb;
	  };

	  css2rgb = function(css) {
	    var hsl, i, m, rgb, _i, _j, _k, _l;

	    css = css.toLowerCase();
	    if ((chroma.colors != null) && chroma.colors[css]) {
	      return hex2rgb(chroma.colors[css]);
	    }
	    if (m = css.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/)) {
	      rgb = m.slice(1, 4);
	      for (i = _i = 0; _i <= 2; i = ++_i) {
	        rgb[i] = +rgb[i];
	      }
	      rgb[3] = 1;
	    } else if (m = css.match(/rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/)) {
	      rgb = m.slice(1, 5);
	      for (i = _j = 0; _j <= 3; i = ++_j) {
	        rgb[i] = +rgb[i];
	      }
	    } else if (m = css.match(/rgb\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
	      rgb = m.slice(1, 4);
	      for (i = _k = 0; _k <= 2; i = ++_k) {
	        rgb[i] = Math.round(rgb[i] * 2.55);
	      }
	      rgb[3] = 1;
	    } else if (m = css.match(/rgba\(\s*(\-?\d+(?:\.\d+)?)%,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
	      rgb = m.slice(1, 5);
	      for (i = _l = 0; _l <= 2; i = ++_l) {
	        rgb[i] = Math.round(rgb[i] * 2.55);
	      }
	      rgb[3] = +rgb[3];
	    } else if (m = css.match(/hsl\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*\)/)) {
	      hsl = m.slice(1, 4);
	      hsl[1] *= 0.01;
	      hsl[2] *= 0.01;
	      rgb = hsl2rgb(hsl);
	      rgb[3] = 1;
	    } else if (m = css.match(/hsla\(\s*(\-?\d+(?:\.\d+)?),\s*(\-?\d+(?:\.\d+)?)%\s*,\s*(\-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)/)) {
	      hsl = m.slice(1, 4);
	      hsl[1] *= 0.01;
	      hsl[2] *= 0.01;
	      rgb = hsl2rgb(hsl);
	      rgb[3] = +m[4];
	    }
	    return rgb;
	  };

	  hex2rgb = function(hex) {
	    var a, b, g, r, rgb, u;

	    if (hex.match(/^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)) {
	      if (hex.length === 4 || hex.length === 7) {
	        hex = hex.substr(1);
	      }
	      if (hex.length === 3) {
	        hex = hex.split("");
	        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	      }
	      u = parseInt(hex, 16);
	      r = u >> 16;
	      g = u >> 8 & 0xFF;
	      b = u & 0xFF;
	      return [r, g, b, 1];
	    }
	    if (hex.match(/^#?([A-Fa-f0-9]{8})$/)) {
	      if (hex.length === 9) {
	        hex = hex.substr(1);
	      }
	      u = parseInt(hex, 16);
	      r = u >> 24 & 0xFF;
	      g = u >> 16 & 0xFF;
	      b = u >> 8 & 0xFF;
	      a = u & 0xFF;
	      return [r, g, b, a];
	    }
	    if (rgb = css2rgb(hex)) {
	      return rgb;
	    }
	    throw "unknown color: " + hex;
	  };

	  hsi2rgb = function(h, s, i) {
	    /*
	    borrowed from here:
	    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
	    */

	    var b, g, r, _ref;

	    _ref = unpack(arguments), h = _ref[0], s = _ref[1], i = _ref[2];
	    h /= 360;
	    if (h < 1 / 3) {
	      b = (1 - s) / 3;
	      r = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
	      g = 1 - (b + r);
	    } else if (h < 2 / 3) {
	      h -= 1 / 3;
	      r = (1 - s) / 3;
	      g = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
	      b = 1 - (r + g);
	    } else {
	      h -= 2 / 3;
	      g = (1 - s) / 3;
	      b = (1 + s * cos(TWOPI * h) / cos(PITHIRD - TWOPI * h)) / 3;
	      r = 1 - (g + b);
	    }
	    r = limit(i * r * 3);
	    g = limit(i * g * 3);
	    b = limit(i * b * 3);
	    return [r * 255, g * 255, b * 255];
	  };

	  hsl2rgb = function() {
	    var b, c, g, h, i, l, r, s, t1, t2, t3, _i, _ref, _ref1;

	    _ref = unpack(arguments), h = _ref[0], s = _ref[1], l = _ref[2];
	    if (s === 0) {
	      r = g = b = l * 255;
	    } else {
	      t3 = [0, 0, 0];
	      c = [0, 0, 0];
	      t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
	      t1 = 2 * l - t2;
	      h /= 360;
	      t3[0] = h + 1 / 3;
	      t3[1] = h;
	      t3[2] = h - 1 / 3;
	      for (i = _i = 0; _i <= 2; i = ++_i) {
	        if (t3[i] < 0) {
	          t3[i] += 1;
	        }
	        if (t3[i] > 1) {
	          t3[i] -= 1;
	        }
	        if (6 * t3[i] < 1) {
	          c[i] = t1 + (t2 - t1) * 6 * t3[i];
	        } else if (2 * t3[i] < 1) {
	          c[i] = t2;
	        } else if (3 * t3[i] < 2) {
	          c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6;
	        } else {
	          c[i] = t1;
	        }
	      }
	      _ref1 = [Math.round(c[0] * 255), Math.round(c[1] * 255), Math.round(c[2] * 255)], r = _ref1[0], g = _ref1[1], b = _ref1[2];
	    }
	    return [r, g, b];
	  };

	  hsv2rgb = function() {
	    var b, f, g, h, i, p, q, r, s, t, v, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6;

	    _ref = unpack(arguments), h = _ref[0], s = _ref[1], v = _ref[2];
	    v *= 255;
	    if (s === 0) {
	      r = g = b = v;
	    } else {
	      if (h === 360) {
	        h = 0;
	      }
	      if (h > 360) {
	        h -= 360;
	      }
	      if (h < 0) {
	        h += 360;
	      }
	      h /= 60;
	      i = Math.floor(h);
	      f = h - i;
	      p = v * (1 - s);
	      q = v * (1 - s * f);
	      t = v * (1 - s * (1 - f));
	      switch (i) {
	        case 0:
	          _ref1 = [v, t, p], r = _ref1[0], g = _ref1[1], b = _ref1[2];
	          break;
	        case 1:
	          _ref2 = [q, v, p], r = _ref2[0], g = _ref2[1], b = _ref2[2];
	          break;
	        case 2:
	          _ref3 = [p, v, t], r = _ref3[0], g = _ref3[1], b = _ref3[2];
	          break;
	        case 3:
	          _ref4 = [p, q, v], r = _ref4[0], g = _ref4[1], b = _ref4[2];
	          break;
	        case 4:
	          _ref5 = [t, p, v], r = _ref5[0], g = _ref5[1], b = _ref5[2];
	          break;
	        case 5:
	          _ref6 = [v, p, q], r = _ref6[0], g = _ref6[1], b = _ref6[2];
	      }
	    }
	    r = Math.round(r);
	    g = Math.round(g);
	    b = Math.round(b);
	    return [r, g, b];
	  };

	  K = 18;

	  X = 0.950470;

	  Y = 1;

	  Z = 1.088830;

	  lab2lch = function() {
	    var a, b, c, h, l, _ref;

	    _ref = unpack(arguments), l = _ref[0], a = _ref[1], b = _ref[2];
	    c = Math.sqrt(a * a + b * b);
	    h = Math.atan2(b, a) / Math.PI * 180;
	    return [l, c, h];
	  };

	  lab2rgb = function(l, a, b) {
	    /*
	    adapted to match d3 implementation
	    */

	    var g, r, x, y, z, _ref, _ref1;

	    if (l !== void 0 && l.length === 3) {
	      _ref = l, l = _ref[0], a = _ref[1], b = _ref[2];
	    }
	    if (l !== void 0 && l.length === 3) {
	      _ref1 = l, l = _ref1[0], a = _ref1[1], b = _ref1[2];
	    }
	    y = (l + 16) / 116;
	    x = y + a / 500;
	    z = y - b / 200;
	    x = lab_xyz(x) * X;
	    y = lab_xyz(y) * Y;
	    z = lab_xyz(z) * Z;
	    r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);
	    g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
	    b = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);
	    return [limit(r, 0, 255), limit(g, 0, 255), limit(b, 0, 255), 1];
	  };

	  lab_xyz = function(x) {
	    if (x > 0.206893034) {
	      return x * x * x;
	    } else {
	      return (x - 4 / 29) / 7.787037;
	    }
	  };

	  xyz_rgb = function(r) {
	    return Math.round(255 * (r <= 0.00304 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - 0.055));
	  };

	  lch2lab = function() {
	    /*
	    Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel. These formulas were invented by David Dalrymple to obtain maximum contrast without going out of gamut if the parameters are in the range 0-1.
	    A saturation multiplier was added by Gregor Aisch
	    */

	    var c, h, l, _ref;

	    _ref = unpack(arguments), l = _ref[0], c = _ref[1], h = _ref[2];
	    h = h * Math.PI / 180;
	    return [l, Math.cos(h) * c, Math.sin(h) * c];
	  };

	  lch2rgb = function(l, c, h) {
	    var L, a, b, g, r, _ref, _ref1;

	    _ref = lch2lab(l, c, h), L = _ref[0], a = _ref[1], b = _ref[2];
	    _ref1 = lab2rgb(L, a, b), r = _ref1[0], g = _ref1[1], b = _ref1[2];
	    return [limit(r, 0, 255), limit(g, 0, 255), limit(b, 0, 255)];
	  };

	  luminance = function(r, g, b) {
	    var _ref;

	    _ref = unpack(arguments), r = _ref[0], g = _ref[1], b = _ref[2];
	    r = luminance_x(r);
	    g = luminance_x(g);
	    b = luminance_x(b);
	    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
	  };

	  luminance_x = function(x) {
	    x /= 255;
	    if (x <= 0.03928) {
	      return x / 12.92;
	    } else {
	      return Math.pow((x + 0.055) / 1.055, 2.4);
	    }
	  };

	  rgb2hex = function() {
	    var b, g, r, str, u, _ref;

	    _ref = unpack(arguments), r = _ref[0], g = _ref[1], b = _ref[2];
	    u = r << 16 | g << 8 | b;
	    str = "000000" + u.toString(16);
	    return "#" + str.substr(str.length - 6);
	  };

	  rgb2hsi = function() {
	    /*
	    borrowed from here:
	    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
	    */

	    var TWOPI, b, g, h, i, min, r, s, _ref;

	    _ref = unpack(arguments), r = _ref[0], g = _ref[1], b = _ref[2];
	    TWOPI = Math.PI * 2;
	    r /= 255;
	    g /= 255;
	    b /= 255;
	    min = Math.min(r, g, b);
	    i = (r + g + b) / 3;
	    s = 1 - min / i;
	    if (s === 0) {
	      h = 0;
	    } else {
	      h = ((r - g) + (r - b)) / 2;
	      h /= Math.sqrt((r - g) * (r - g) + (r - b) * (g - b));
	      h = Math.acos(h);
	      if (b > g) {
	        h = TWOPI - h;
	      }
	      h /= TWOPI;
	    }
	    return [h * 360, s, i];
	  };

	  rgb2hsl = function(r, g, b) {
	    var h, l, max, min, s, _ref;

	    if (r !== void 0 && r.length >= 3) {
	      _ref = r, r = _ref[0], g = _ref[1], b = _ref[2];
	    }
	    r /= 255;
	    g /= 255;
	    b /= 255;
	    min = Math.min(r, g, b);
	    max = Math.max(r, g, b);
	    l = (max + min) / 2;
	    if (max === min) {
	      s = 0;
	      h = Number.NaN;
	    } else {
	      s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
	    }
	    if (r === max) {
	      h = (g - b) / (max - min);
	    } else if (g === max) {
	      h = 2 + (b - r) / (max - min);
	    } else if (b === max) {
	      h = 4 + (r - g) / (max - min);
	    }
	    h *= 60;
	    if (h < 0) {
	      h += 360;
	    }
	    return [h, s, l];
	  };

	  rgb2hsv = function() {
	    var b, delta, g, h, max, min, r, s, v, _ref;

	    _ref = unpack(arguments), r = _ref[0], g = _ref[1], b = _ref[2];
	    min = Math.min(r, g, b);
	    max = Math.max(r, g, b);
	    delta = max - min;
	    v = max / 255.0;
	    if (max === 0) {
	      h = Number.NaN;
	      s = 0;
	    } else {
	      s = delta / max;
	      if (r === max) {
	        h = (g - b) / delta;
	      }
	      if (g === max) {
	        h = 2 + (b - r) / delta;
	      }
	      if (b === max) {
	        h = 4 + (r - g) / delta;
	      }
	      h *= 60;
	      if (h < 0) {
	        h += 360;
	      }
	    }
	    return [h, s, v];
	  };

	  rgb2lab = function() {
	    var b, g, r, x, y, z, _ref;

	    _ref = unpack(arguments), r = _ref[0], g = _ref[1], b = _ref[2];
	    r = rgb_xyz(r);
	    g = rgb_xyz(g);
	    b = rgb_xyz(b);
	    x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / X);
	    y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / Y);
	    z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / Z);
	    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
	  };

	  rgb_xyz = function(r) {
	    if ((r /= 255) <= 0.04045) {
	      return r / 12.92;
	    } else {
	      return Math.pow((r + 0.055) / 1.055, 2.4);
	    }
	  };

	  xyz_lab = function(x) {
	    if (x > 0.008856) {
	      return Math.pow(x, 1 / 3);
	    } else {
	      return 7.787037 * x + 4 / 29;
	    }
	  };

	  rgb2lch = function() {
	    var a, b, g, l, r, _ref, _ref1;

	    _ref = unpack(arguments), r = _ref[0], g = _ref[1], b = _ref[2];
	    _ref1 = rgb2lab(r, g, b), l = _ref1[0], a = _ref1[1], b = _ref1[2];
	    return lab2lch(l, a, b);
	  };

	  /*
	      chroma.js
	  
	      Copyright (c) 2011-2013, Gregor Aisch
	      All rights reserved.
	  
	      Redistribution and use in source and binary forms, with or without
	      modification, are permitted provided that the following conditions are met:
	  
	      * Redistributions of source code must retain the above copyright notice, this
	        list of conditions and the following disclaimer.
	  
	      * Redistributions in binary form must reproduce the above copyright notice,
	        this list of conditions and the following disclaimer in the documentation
	        and/or other materials provided with the distribution.
	  
	      * The name Gregor Aisch may not be used to endorse or promote products
	        derived from this software without specific prior written permission.
	  
	      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	      DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
	      INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
	      BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	      DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	      OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	      NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
	      EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	  
	      @source: https://github.com/gka/chroma.js
	  */


	  chroma.scale = function(colors, positions) {
	    var classifyValue, f, getClass, getColor, resetCache, setColors, setDomain, tmap, _colorCache, _colors, _correctLightness, _domain, _fixed, _max, _min, _mode, _nacol, _numClasses, _out, _pos, _spread;

	    _mode = 'rgb';
	    _nacol = chroma('#ccc');
	    _spread = 0;
	    _fixed = false;
	    _domain = [0, 1];
	    _colors = [];
	    _out = false;
	    _pos = [];
	    _min = 0;
	    _max = 1;
	    _correctLightness = false;
	    _numClasses = 0;
	    _colorCache = {};
	    setColors = function(colors, positions) {
	      var c, col, _i, _j, _ref, _ref1, _ref2;

	      if (colors == null) {
	        colors = ['#ddd', '#222'];
	      }
	      if ((colors != null) && type(colors) === 'string' && (((_ref = chroma.brewer) != null ? _ref[colors] : void 0) != null)) {
	        colors = chroma.brewer[colors];
	      }
	      if (type(colors) === 'array') {
	        colors = colors.slice(0);
	        for (c = _i = 0, _ref1 = colors.length - 1; 0 <= _ref1 ? _i <= _ref1 : _i >= _ref1; c = 0 <= _ref1 ? ++_i : --_i) {
	          col = colors[c];
	          if (type(col) === "string") {
	            colors[c] = chroma(col);
	          }
	        }
	        if (positions != null) {
	          _pos = positions;
	        } else {
	          _pos = [];
	          for (c = _j = 0, _ref2 = colors.length - 1; 0 <= _ref2 ? _j <= _ref2 : _j >= _ref2; c = 0 <= _ref2 ? ++_j : --_j) {
	            _pos.push(c / (colors.length - 1));
	          }
	        }
	      }
	      resetCache();
	      return _colors = colors;
	    };
	    setDomain = function(domain) {
	      if (domain == null) {
	        domain = [];
	      }
	      /*
	      # use this if you want to display a limited number of data classes
	      # possible methods are "equalinterval", "quantiles", "custom"
	      */

	      _domain = domain;
	      _min = domain[0];
	      _max = domain[domain.length - 1];
	      resetCache();
	      if (domain.length === 2) {
	        return _numClasses = 0;
	      } else {
	        return _numClasses = domain.length - 1;
	      }
	    };
	    getClass = function(value) {
	      var i, n;

	      if (_domain != null) {
	        n = _domain.length - 1;
	        i = 0;
	        while (i < n && value >= _domain[i]) {
	          i++;
	        }
	        return i - 1;
	      }
	      return 0;
	    };
	    tmap = function(t) {
	      return t;
	    };
	    classifyValue = function(value) {
	      var i, maxc, minc, n, val;

	      val = value;
	      if (_domain.length > 2) {
	        n = _domain.length - 1;
	        i = getClass(value);
	        minc = _domain[0] + (_domain[1] - _domain[0]) * (0 + _spread * 0.5);
	        maxc = _domain[n - 1] + (_domain[n] - _domain[n - 1]) * (1 - _spread * 0.5);
	        val = _min + ((_domain[i] + (_domain[i + 1] - _domain[i]) * 0.5 - minc) / (maxc - minc)) * (_max - _min);
	      }
	      return val;
	    };
	    getColor = function(val, bypassMap) {
	      var c, col, f0, i, k, p, t, _i, _ref;

	      if (bypassMap == null) {
	        bypassMap = false;
	      }
	      if (isNaN(val)) {
	        return _nacol;
	      }
	      if (!bypassMap) {
	        if (_domain.length > 2) {
	          c = getClass(val);
	          t = c / (_numClasses - 1);
	        } else {
	          t = f0 = _min !== _max ? (val - _min) / (_max - _min) : 0;
	          t = f0 = (val - _min) / (_max - _min);
	          t = Math.min(1, Math.max(0, t));
	        }
	      } else {
	        t = val;
	      }
	      if (!bypassMap) {
	        t = tmap(t);
	      }
	      k = Math.floor(t * 10000);
	      if (_colorCache[k]) {
	        col = _colorCache[k];
	      } else {
	        if (type(_colors) === 'array') {
	          for (i = _i = 0, _ref = _pos.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
	            p = _pos[i];
	            if (t <= p) {
	              col = _colors[i];
	              break;
	            }
	            if (t >= p && i === _pos.length - 1) {
	              col = _colors[i];
	              break;
	            }
	            if (t > p && t < _pos[i + 1]) {
	              t = (t - p) / (_pos[i + 1] - p);
	              col = chroma.interpolate(_colors[i], _colors[i + 1], t, _mode);
	              break;
	            }
	          }
	        } else if (type(_colors) === 'function') {
	          col = _colors(t);
	        }
	        _colorCache[k] = col;
	      }
	      return col;
	    };
	    resetCache = function() {
	      return _colorCache = {};
	    };
	    setColors(colors, positions);
	    f = function(v) {
	      var c;

	      c = getColor(v);
	      if (_out && c[_out]) {
	        return c[_out]();
	      } else {
	        return c;
	      }
	    };
	    f.domain = function(domain, classes, mode, key) {
	      var d;

	      if (mode == null) {
	        mode = 'e';
	      }
	      if (!arguments.length) {
	        return _domain;
	      }
	      if (classes != null) {
	        d = chroma.analyze(domain, key);
	        if (classes === 0) {
	          domain = [d.min, d.max];
	        } else {
	          domain = chroma.limits(d, mode, classes);
	        }
	      }
	      setDomain(domain);
	      return f;
	    };
	    f.mode = function(_m) {
	      if (!arguments.length) {
	        return _mode;
	      }
	      _mode = _m;
	      resetCache();
	      return f;
	    };
	    f.range = function(colors, _pos) {
	      setColors(colors, _pos);
	      return f;
	    };
	    f.out = function(_o) {
	      _out = _o;
	      return f;
	    };
	    f.spread = function(val) {
	      if (!arguments.length) {
	        return _spread;
	      }
	      _spread = val;
	      return f;
	    };
	    f.correctLightness = function(v) {
	      if (!arguments.length) {
	        return _correctLightness;
	      }
	      _correctLightness = v;
	      resetCache();
	      if (_correctLightness) {
	        tmap = function(t) {
	          var L0, L1, L_actual, L_diff, L_ideal, max_iter, pol, t0, t1;

	          L0 = getColor(0, true).lab()[0];
	          L1 = getColor(1, true).lab()[0];
	          pol = L0 > L1;
	          L_actual = getColor(t, true).lab()[0];
	          L_ideal = L0 + (L1 - L0) * t;
	          L_diff = L_actual - L_ideal;
	          t0 = 0;
	          t1 = 1;
	          max_iter = 20;
	          while (Math.abs(L_diff) > 1e-2 && max_iter-- > 0) {
	            (function() {
	              if (pol) {
	                L_diff *= -1;
	              }
	              if (L_diff < 0) {
	                t0 = t;
	                t += (t1 - t) * 0.5;
	              } else {
	                t1 = t;
	                t += (t0 - t) * 0.5;
	              }
	              L_actual = getColor(t, true).lab()[0];
	              return L_diff = L_actual - L_ideal;
	            })();
	          }
	          return t;
	        };
	      } else {
	        tmap = function(t) {
	          return t;
	        };
	      }
	      return f;
	    };
	    f.colors = function(out) {
	      var i, samples, _i, _j, _len, _ref;

	      if (out == null) {
	        out = 'hex';
	      }
	      colors = [];
	      samples = [];
	      if (_domain.length > 2) {
	        for (i = _i = 1, _ref = _domain.length; 1 <= _ref ? _i < _ref : _i > _ref; i = 1 <= _ref ? ++_i : --_i) {
	          samples.push((_domain[i - 1] + _domain[i]) * 0.5);
	        }
	      } else {
	        samples = _domain;
	      }
	      for (_j = 0, _len = samples.length; _j < _len; _j++) {
	        i = samples[_j];
	        colors.push(f(i)[out]());
	      }
	      return colors;
	    };
	    return f;
	  };

	  if ((_ref = chroma.scales) == null) {
	    chroma.scales = {};
	  }

	  chroma.scales.cool = function() {
	    return chroma.scale([chroma.hsl(180, 1, .9), chroma.hsl(250, .7, .4)]);
	  };

	  chroma.scales.hot = function() {
	    return chroma.scale(['#000', '#f00', '#ff0', '#fff'], [0, .25, .75, 1]).mode('rgb');
	  };

	  /*
	      chroma.js
	  
	      Copyright (c) 2011-2013, Gregor Aisch
	      All rights reserved.
	  
	      Redistribution and use in source and binary forms, with or without
	      modification, are permitted provided that the following conditions are met:
	  
	      * Redistributions of source code must retain the above copyright notice, this
	        list of conditions and the following disclaimer.
	  
	      * Redistributions in binary form must reproduce the above copyright notice,
	        this list of conditions and the following disclaimer in the documentation
	        and/or other materials provided with the distribution.
	  
	      * The name Gregor Aisch may not be used to endorse or promote products
	        derived from this software without specific prior written permission.
	  
	      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	      DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
	      INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
	      BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	      DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	      OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	      NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
	      EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	  
	      @source: https://github.com/gka/chroma.js
	  */


	  chroma.analyze = function(data, key, filter) {
	    var add, k, r, val, visit, _i, _len;

	    r = {
	      min: Number.MAX_VALUE,
	      max: Number.MAX_VALUE * -1,
	      sum: 0,
	      values: [],
	      count: 0
	    };
	    if (filter == null) {
	      filter = function() {
	        return true;
	      };
	    }
	    add = function(val) {
	      if ((val != null) && !isNaN(val)) {
	        r.values.push(val);
	        r.sum += val;
	        if (val < r.min) {
	          r.min = val;
	        }
	        if (val > r.max) {
	          r.max = val;
	        }
	        r.count += 1;
	      }
	    };
	    visit = function(val, k) {
	      if (filter(val, k)) {
	        if ((key != null) && type(key) === 'function') {
	          return add(key(val));
	        } else if ((key != null) && type(key) === 'string' || type(key) === 'number') {
	          return add(val[key]);
	        } else {
	          return add(val);
	        }
	      }
	    };
	    if (type(data) === 'array') {
	      for (_i = 0, _len = data.length; _i < _len; _i++) {
	        val = data[_i];
	        visit(val);
	      }
	    } else {
	      for (k in data) {
	        val = data[k];
	        visit(val, k);
	      }
	    }
	    r.domain = [r.min, r.max];
	    r.limits = function(mode, num) {
	      return chroma.limits(r, mode, num);
	    };
	    return r;
	  };

	  chroma.limits = function(data, mode, num) {
	    var assignments, best, centroids, cluster, clusterSizes, dist, i, j, kClusters, limits, max, max_log, min, min_log, mindist, n, nb_iters, newCentroids, p, pb, pr, repeat, sum, tmpKMeansBreaks, value, values, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _s, _t, _u, _v, _w;

	    if (mode == null) {
	      mode = 'equal';
	    }
	    if (num == null) {
	      num = 7;
	    }
	    if (type(data) === 'array') {
	      data = chroma.analyze(data);
	    }
	    min = data.min;
	    max = data.max;
	    sum = data.sum;
	    values = data.values.sort(function(a, b) {
	      return a - b;
	    });
	    limits = [];
	    if (mode.substr(0, 1) === 'c') {
	      limits.push(min);
	      limits.push(max);
	    }
	    if (mode.substr(0, 1) === 'e') {
	      limits.push(min);
	      for (i = _i = 1, _ref1 = num - 1; 1 <= _ref1 ? _i <= _ref1 : _i >= _ref1; i = 1 <= _ref1 ? ++_i : --_i) {
	        limits.push(min + (i / num) * (max - min));
	      }
	      limits.push(max);
	    } else if (mode.substr(0, 1) === 'l') {
	      if (min <= 0) {
	        throw 'Logarithmic scales are only possible for values > 0';
	      }
	      min_log = Math.LOG10E * Math.log(min);
	      max_log = Math.LOG10E * Math.log(max);
	      limits.push(min);
	      for (i = _j = 1, _ref2 = num - 1; 1 <= _ref2 ? _j <= _ref2 : _j >= _ref2; i = 1 <= _ref2 ? ++_j : --_j) {
	        limits.push(Math.pow(10, min_log + (i / num) * (max_log - min_log)));
	      }
	      limits.push(max);
	    } else if (mode.substr(0, 1) === 'q') {
	      limits.push(min);
	      for (i = _k = 1, _ref3 = num - 1; 1 <= _ref3 ? _k <= _ref3 : _k >= _ref3; i = 1 <= _ref3 ? ++_k : --_k) {
	        p = values.length * i / num;
	        pb = Math.floor(p);
	        if (pb === p) {
	          limits.push(values[pb]);
	        } else {
	          pr = p - pb;
	          limits.push(values[pb] * pr + values[pb + 1] * (1 - pr));
	        }
	      }
	      limits.push(max);
	    } else if (mode.substr(0, 1) === 'k') {
	      /*
	      implementation based on
	      http://code.google.com/p/figue/source/browse/trunk/figue.js#336
	      simplified for 1-d input values
	      */

	      n = values.length;
	      assignments = new Array(n);
	      clusterSizes = new Array(num);
	      repeat = true;
	      nb_iters = 0;
	      centroids = null;
	      centroids = [];
	      centroids.push(min);
	      for (i = _l = 1, _ref4 = num - 1; 1 <= _ref4 ? _l <= _ref4 : _l >= _ref4; i = 1 <= _ref4 ? ++_l : --_l) {
	        centroids.push(min + (i / num) * (max - min));
	      }
	      centroids.push(max);
	      while (repeat) {
	        for (j = _m = 0, _ref5 = num - 1; 0 <= _ref5 ? _m <= _ref5 : _m >= _ref5; j = 0 <= _ref5 ? ++_m : --_m) {
	          clusterSizes[j] = 0;
	        }
	        for (i = _n = 0, _ref6 = n - 1; 0 <= _ref6 ? _n <= _ref6 : _n >= _ref6; i = 0 <= _ref6 ? ++_n : --_n) {
	          value = values[i];
	          mindist = Number.MAX_VALUE;
	          for (j = _o = 0, _ref7 = num - 1; 0 <= _ref7 ? _o <= _ref7 : _o >= _ref7; j = 0 <= _ref7 ? ++_o : --_o) {
	            dist = Math.abs(centroids[j] - value);
	            if (dist < mindist) {
	              mindist = dist;
	              best = j;
	            }
	          }
	          clusterSizes[best]++;
	          assignments[i] = best;
	        }
	        newCentroids = new Array(num);
	        for (j = _p = 0, _ref8 = num - 1; 0 <= _ref8 ? _p <= _ref8 : _p >= _ref8; j = 0 <= _ref8 ? ++_p : --_p) {
	          newCentroids[j] = null;
	        }
	        for (i = _q = 0, _ref9 = n - 1; 0 <= _ref9 ? _q <= _ref9 : _q >= _ref9; i = 0 <= _ref9 ? ++_q : --_q) {
	          cluster = assignments[i];
	          if (newCentroids[cluster] === null) {
	            newCentroids[cluster] = values[i];
	          } else {
	            newCentroids[cluster] += values[i];
	          }
	        }
	        for (j = _r = 0, _ref10 = num - 1; 0 <= _ref10 ? _r <= _ref10 : _r >= _ref10; j = 0 <= _ref10 ? ++_r : --_r) {
	          newCentroids[j] *= 1 / clusterSizes[j];
	        }
	        repeat = false;
	        for (j = _s = 0, _ref11 = num - 1; 0 <= _ref11 ? _s <= _ref11 : _s >= _ref11; j = 0 <= _ref11 ? ++_s : --_s) {
	          if (newCentroids[j] !== centroids[i]) {
	            repeat = true;
	            break;
	          }
	        }
	        centroids = newCentroids;
	        nb_iters++;
	        if (nb_iters > 200) {
	          repeat = false;
	        }
	      }
	      kClusters = {};
	      for (j = _t = 0, _ref12 = num - 1; 0 <= _ref12 ? _t <= _ref12 : _t >= _ref12; j = 0 <= _ref12 ? ++_t : --_t) {
	        kClusters[j] = [];
	      }
	      for (i = _u = 0, _ref13 = n - 1; 0 <= _ref13 ? _u <= _ref13 : _u >= _ref13; i = 0 <= _ref13 ? ++_u : --_u) {
	        cluster = assignments[i];
	        kClusters[cluster].push(values[i]);
	      }
	      tmpKMeansBreaks = [];
	      for (j = _v = 0, _ref14 = num - 1; 0 <= _ref14 ? _v <= _ref14 : _v >= _ref14; j = 0 <= _ref14 ? ++_v : --_v) {
	        tmpKMeansBreaks.push(kClusters[j][0]);
	        tmpKMeansBreaks.push(kClusters[j][kClusters[j].length - 1]);
	      }
	      tmpKMeansBreaks = tmpKMeansBreaks.sort(function(a, b) {
	        return a - b;
	      });
	      limits.push(tmpKMeansBreaks[0]);
	      for (i = _w = 1, _ref15 = tmpKMeansBreaks.length - 1; _w <= _ref15; i = _w += 2) {
	        if (!isNaN(tmpKMeansBreaks[i])) {
	          limits.push(tmpKMeansBreaks[i]);
	        }
	      }
	    }
	    return limits;
	  };

	  /**
	  	ColorBrewer colors for chroma.js
	  
	  	Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The 
	  	Pennsylvania State University.
	  
	  	Licensed under the Apache License, Version 2.0 (the "License"); 
	  	you may not use this file except in compliance with the License.
	  	You may obtain a copy of the License at	
	  	http://www.apache.org/licenses/LICENSE-2.0
	  
	  	Unless required by applicable law or agreed to in writing, software distributed
	  	under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
	  	CONDITIONS OF ANY KIND, either express or implied. See the License for the
	  	specific language governing permissions and limitations under the License.
	  
	      @preserve
	  */


	  chroma.brewer = brewer = {
	    OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
	    PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
	    BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
	    Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
	    BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
	    YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
	    YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
	    Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
	    RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
	    Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
	    YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
	    Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
	    GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
	    Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
	    YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
	    PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
	    Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
	    PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
	    Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
	    RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
	    RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
	    PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
	    PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
	    RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
	    BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
	    RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
	    PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],
	    Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
	    Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
	    Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
	    Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
	    Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
	    Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
	    Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
	    Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2']
	  };

	  /**
	  	X11 color names
	  
	  	http://www.w3.org/TR/css3-color/#svg-color
	  */


	  chroma.colors = colors = {
	    indigo: "#4b0082",
	    gold: "#ffd700",
	    hotpink: "#ff69b4",
	    firebrick: "#b22222",
	    indianred: "#cd5c5c",
	    yellow: "#ffff00",
	    mistyrose: "#ffe4e1",
	    darkolivegreen: "#556b2f",
	    olive: "#808000",
	    darkseagreen: "#8fbc8f",
	    pink: "#ffc0cb",
	    tomato: "#ff6347",
	    lightcoral: "#f08080",
	    orangered: "#ff4500",
	    navajowhite: "#ffdead",
	    lime: "#00ff00",
	    palegreen: "#98fb98",
	    darkslategrey: "#2f4f4f",
	    greenyellow: "#adff2f",
	    burlywood: "#deb887",
	    seashell: "#fff5ee",
	    mediumspringgreen: "#00fa9a",
	    fuchsia: "#ff00ff",
	    papayawhip: "#ffefd5",
	    blanchedalmond: "#ffebcd",
	    chartreuse: "#7fff00",
	    dimgray: "#696969",
	    black: "#000000",
	    peachpuff: "#ffdab9",
	    springgreen: "#00ff7f",
	    aquamarine: "#7fffd4",
	    white: "#ffffff",
	    orange: "#ffa500",
	    lightsalmon: "#ffa07a",
	    darkslategray: "#2f4f4f",
	    brown: "#a52a2a",
	    ivory: "#fffff0",
	    dodgerblue: "#1e90ff",
	    peru: "#cd853f",
	    lawngreen: "#7cfc00",
	    chocolate: "#d2691e",
	    crimson: "#dc143c",
	    forestgreen: "#228b22",
	    darkgrey: "#a9a9a9",
	    lightseagreen: "#20b2aa",
	    cyan: "#00ffff",
	    mintcream: "#f5fffa",
	    silver: "#c0c0c0",
	    antiquewhite: "#faebd7",
	    mediumorchid: "#ba55d3",
	    skyblue: "#87ceeb",
	    gray: "#808080",
	    darkturquoise: "#00ced1",
	    goldenrod: "#daa520",
	    darkgreen: "#006400",
	    floralwhite: "#fffaf0",
	    darkviolet: "#9400d3",
	    darkgray: "#a9a9a9",
	    moccasin: "#ffe4b5",
	    saddlebrown: "#8b4513",
	    grey: "#808080",
	    darkslateblue: "#483d8b",
	    lightskyblue: "#87cefa",
	    lightpink: "#ffb6c1",
	    mediumvioletred: "#c71585",
	    slategrey: "#708090",
	    red: "#ff0000",
	    deeppink: "#ff1493",
	    limegreen: "#32cd32",
	    darkmagenta: "#8b008b",
	    palegoldenrod: "#eee8aa",
	    plum: "#dda0dd",
	    turquoise: "#40e0d0",
	    lightgrey: "#d3d3d3",
	    lightgoldenrodyellow: "#fafad2",
	    darkgoldenrod: "#b8860b",
	    lavender: "#e6e6fa",
	    maroon: "#800000",
	    yellowgreen: "#9acd32",
	    sandybrown: "#f4a460",
	    thistle: "#d8bfd8",
	    violet: "#ee82ee",
	    navy: "#000080",
	    magenta: "#ff00ff",
	    dimgrey: "#696969",
	    tan: "#d2b48c",
	    rosybrown: "#bc8f8f",
	    olivedrab: "#6b8e23",
	    blue: "#0000ff",
	    lightblue: "#add8e6",
	    ghostwhite: "#f8f8ff",
	    honeydew: "#f0fff0",
	    cornflowerblue: "#6495ed",
	    slateblue: "#6a5acd",
	    linen: "#faf0e6",
	    darkblue: "#00008b",
	    powderblue: "#b0e0e6",
	    seagreen: "#2e8b57",
	    darkkhaki: "#bdb76b",
	    snow: "#fffafa",
	    sienna: "#a0522d",
	    mediumblue: "#0000cd",
	    royalblue: "#4169e1",
	    lightcyan: "#e0ffff",
	    green: "#008000",
	    mediumpurple: "#9370db",
	    midnightblue: "#191970",
	    cornsilk: "#fff8dc",
	    paleturquoise: "#afeeee",
	    bisque: "#ffe4c4",
	    slategray: "#708090",
	    darkcyan: "#008b8b",
	    khaki: "#f0e68c",
	    wheat: "#f5deb3",
	    teal: "#008080",
	    darkorchid: "#9932cc",
	    deepskyblue: "#00bfff",
	    salmon: "#fa8072",
	    darkred: "#8b0000",
	    steelblue: "#4682b4",
	    palevioletred: "#db7093",
	    lightslategray: "#778899",
	    aliceblue: "#f0f8ff",
	    lightslategrey: "#778899",
	    lightgreen: "#90ee90",
	    orchid: "#da70d6",
	    gainsboro: "#dcdcdc",
	    mediumseagreen: "#3cb371",
	    lightgray: "#d3d3d3",
	    mediumturquoise: "#48d1cc",
	    lemonchiffon: "#fffacd",
	    cadetblue: "#5f9ea0",
	    lightyellow: "#ffffe0",
	    lavenderblush: "#fff0f5",
	    coral: "#ff7f50",
	    purple: "#800080",
	    aqua: "#00ffff",
	    whitesmoke: "#f5f5f5",
	    mediumslateblue: "#7b68ee",
	    darkorange: "#ff8c00",
	    mediumaquamarine: "#66cdaa",
	    darksalmon: "#e9967a",
	    beige: "#f5f5dc",
	    blueviolet: "#8a2be2",
	    azure: "#f0ffff",
	    lightsteelblue: "#b0c4de",
	    oldlace: "#fdf5e6"
	  };

	  /*
	      chroma.js
	  
	      Copyright (c) 2011-2013, Gregor Aisch
	      All rights reserved.
	  
	      Redistribution and use in source and binary forms, with or without
	      modification, are permitted provided that the following conditions are met:
	  
	      * Redistributions of source code must retain the above copyright notice, this
	        list of conditions and the following disclaimer.
	  
	      * Redistributions in binary form must reproduce the above copyright notice,
	        this list of conditions and the following disclaimer in the documentation
	        and/or other materials provided with the distribution.
	  
	      * The name Gregor Aisch may not be used to endorse or promote products
	        derived from this software without specific prior written permission.
	  
	      THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
	      AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	      IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
	      DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
	      INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
	      BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
	      DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	      OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
	      NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
	      EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	  
	      @source: https://github.com/gka/chroma.js
	  */


	  type = (function() {
	    /*
	    for browser-safe type checking+
	    ported from jQuery's $.type
	    */

	    var classToType, name, _i, _len, _ref1;

	    classToType = {};
	    _ref1 = "Boolean Number String Function Array Date RegExp Undefined Null".split(" ");
	    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
	      name = _ref1[_i];
	      classToType["[object " + name + "]"] = name.toLowerCase();
	    }
	    return function(obj) {
	      var strType;

	      strType = Object.prototype.toString.call(obj);
	      return classToType[strType] || "object";
	    };
	  })();

	  limit = function(x, min, max) {
	    if (min == null) {
	      min = 0;
	    }
	    if (max == null) {
	      max = 1;
	    }
	    if (x < min) {
	      x = min;
	    }
	    if (x > max) {
	      x = max;
	    }
	    return x;
	  };

	  unpack = function(args) {
	    if (args.length >= 3) {
	      return args;
	    } else {
	      return args[0];
	    }
	  };

	  TWOPI = Math.PI * 2;

	  PITHIRD = Math.PI / 3;

	  cos = Math.cos;

	  /*
	  interpolates between a set of colors uzing a bezier spline
	  */


	  bezier = function(colors) {
	    var I, I0, I1, c, lab0, lab1, lab2, lab3, _ref1, _ref2, _ref3;

	    colors = (function() {
	      var _i, _len, _results;

	      _results = [];
	      for (_i = 0, _len = colors.length; _i < _len; _i++) {
	        c = colors[_i];
	        _results.push(chroma(c));
	      }
	      return _results;
	    })();
	    if (colors.length === 2) {
	      _ref1 = (function() {
	        var _i, _len, _results;

	        _results = [];
	        for (_i = 0, _len = colors.length; _i < _len; _i++) {
	          c = colors[_i];
	          _results.push(c.lab());
	        }
	        return _results;
	      })(), lab0 = _ref1[0], lab1 = _ref1[1];
	      I = function(t) {
	        var i, lab;

	        lab = (function() {
	          var _i, _results;

	          _results = [];
	          for (i = _i = 0; _i <= 2; i = ++_i) {
	            _results.push(lab0[i] + t * (lab1[i] - lab0[i]));
	          }
	          return _results;
	        })();
	        return chroma.lab.apply(chroma, lab);
	      };
	    } else if (colors.length === 3) {
	      _ref2 = (function() {
	        var _i, _len, _results;

	        _results = [];
	        for (_i = 0, _len = colors.length; _i < _len; _i++) {
	          c = colors[_i];
	          _results.push(c.lab());
	        }
	        return _results;
	      })(), lab0 = _ref2[0], lab1 = _ref2[1], lab2 = _ref2[2];
	      I = function(t) {
	        var i, lab;

	        lab = (function() {
	          var _i, _results;

	          _results = [];
	          for (i = _i = 0; _i <= 2; i = ++_i) {
	            _results.push((1 - t) * (1 - t) * lab0[i] + 2 * (1 - t) * t * lab1[i] + t * t * lab2[i]);
	          }
	          return _results;
	        })();
	        return chroma.lab.apply(chroma, lab);
	      };
	    } else if (colors.length === 4) {
	      _ref3 = (function() {
	        var _i, _len, _results;

	        _results = [];
	        for (_i = 0, _len = colors.length; _i < _len; _i++) {
	          c = colors[_i];
	          _results.push(c.lab());
	        }
	        return _results;
	      })(), lab0 = _ref3[0], lab1 = _ref3[1], lab2 = _ref3[2], lab3 = _ref3[3];
	      I = function(t) {
	        var i, lab;

	        lab = (function() {
	          var _i, _results;

	          _results = [];
	          for (i = _i = 0; _i <= 2; i = ++_i) {
	            _results.push((1 - t) * (1 - t) * (1 - t) * lab0[i] + 3 * (1 - t) * (1 - t) * t * lab1[i] + 3 * (1 - t) * t * t * lab2[i] + t * t * t * lab3[i]);
	          }
	          return _results;
	        })();
	        return chroma.lab.apply(chroma, lab);
	      };
	    } else if (colors.length === 5) {
	      I0 = bezier(colors.slice(0, 3));
	      I1 = bezier(colors.slice(2, 5));
	      I = function(t) {
	        if (t < 0.5) {
	          return I0(t * 2);
	        } else {
	          return I1((t - 0.5) * 2);
	        }
	      };
	    }
	    return I;
	  };

	  chroma.interpolate.bezier = bezier;

	}).call(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)(module)))

/***/ },
/* 231 */
/***/ function(module, exports) {

	/*
	 * colorbrewer.js
	 *
	 * Colorbrewer colors, by Cindy Brewer
	 */

	module.exports = {
	  YlGn: ["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"],
	  YlGnBu: ["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"],
	  GnBu: ["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"],
	  BuGn: ["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"],
	  PuBuGn: ["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"],
	  PuBu: ["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"],
	  BuPu: ["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"],
	  RdPu: ["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"],
	  PuRd: ["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"],
	  OrRd: ["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"],
	  YlOrRd: ["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"],
	  YlOrBr: ["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"],
	  Purples: ["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"],
	  Blues: ["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"],
	  Greens: ["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"],
	  Oranges: ["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"],
	  Reds: ["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"],
	  Greys: ["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"],
	  PuOr: ["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],
	  BrBG: ["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],
	  PRGn: ["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],
	  PiYG: ["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],
	  RdBu: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],
	  RdGy: ["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],
	  RdYlBu: ["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],
	  Spectral: ["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],
	  RdYlGn: ["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"]
	};

/***/ },
/* 232 */
/***/ function(module, exports) {

	function generate_grid(width, height, bleed_x, bleed_y, cell_size, variance, rand_fn) {
	  var w = width + bleed_x;
	  var h = height + bleed_y;
	  var half_cell_size = cell_size * 0.5;
	  var double_v = variance * 2;
	  var negative_v = -variance;

	  var points = [];
	  for (var i = -bleed_x; i < w; i += cell_size) {
	    for (var j = -bleed_y; j < h; j += cell_size) {
	      var x = (i + half_cell_size) + (rand_fn() * double_v + negative_v);
	      var y = (j + half_cell_size) + (rand_fn() * double_v + negative_v);
	      points.push([Math.floor(x), Math.floor(y)]);
	    }
	  }

	  return points;
	}

	module.exports = generate_grid;


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/*
	 * Pattern.js
	 * Contains rendering implementations for trianglify-generated geometry
	 */

	// conditionally load jsdom if we don't have a browser environment available.
	var doc = (typeof document !== "undefined") ? document : __webpack_require__(234).jsdom('<html/>');

	function Pattern(polys, opts) {

	  // SVG rendering method
	  function render_svg(svgOpts) {
	    var svg = doc.createElementNS("http://www.w3.org/2000/svg", 'svg');
	    svg.setAttribute('width', opts.width);
	    svg.setAttribute('height', opts.height);
	    if (svgOpts && svgOpts.includeNamespace) {
	      svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
	    }

	    polys.forEach(function(poly) {
	      var path = doc.createElementNS("http://www.w3.org/2000/svg", 'path');
	      path.setAttribute("d", "M" + poly[1].join("L") + "Z");
	      path.setAttribute("fill", poly[0]);
	      path.setAttribute("stroke", poly[0]);
	      path.setAttribute("stroke-width", opts.stroke_width);
	      svg.appendChild(path);
	    });

	    return svg;
	  }

	  // Canvas rendering method
	  function render_canvas(canvas) {
	    // check for canvas support
	    var ctx;
	    if (typeof process !== "undefined") {
	      try {
	        __webpack_require__(235);
	      } catch (e) {
	        throw Error('The optional node-canvas dependency is needed for Trianglify to render using canvas in node.');
	      }
	    }

	    if (!canvas) {
	      canvas = doc.createElement('canvas');
	    }

	    canvas.setAttribute('width', opts.width);
	    canvas.setAttribute('height', opts.height);
	    ctx = canvas.getContext("2d");
	    ctx.canvas.width = opts.width;
	    ctx.canvas.height = opts.height;

	    polys.forEach(function(poly) {
	      ctx.fillStyle = ctx.strokeStyle = poly[0];
	      ctx.lineWidth = opts.stroke_width;
	      ctx.beginPath();
	      ctx.moveTo.apply(ctx, poly[1][0]);
	      ctx.lineTo.apply(ctx, poly[1][1]);
	      ctx.lineTo.apply(ctx, poly[1][2]);
	      ctx.fill();
	      ctx.stroke();
	    });

	    return canvas;
	  }

	  // PNG rendering method
	  // currently returns a data url as a string since toBlob support really isn't there yet...
	  function render_png() {
	    return render_canvas().toDataURL("image/png");
	  }

	  // Return an object with all the relevant functions/properties attached to it
	  return {
	    polys: polys,
	    opts: opts,
	    svg: render_svg,
	    canvas: render_canvas,
	    png: render_png
	  };
	}

	module.exports = Pattern;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(219)))

/***/ },
/* 234 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 235 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 236 */
/***/ function(module, exports) {

	/**
	* Detect Element Resize
	*
	* https://github.com/sdecima/javascript-detect-element-resize
	* Sebastian Decima
	*
	* version: 0.5.3
	**/

	(function () {
		var attachEvent = document.attachEvent,
			stylesCreated = false;
		
		if (!attachEvent) {
			var requestFrame = (function(){
				var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
									function(fn){ return window.setTimeout(fn, 20); };
				return function(fn){ return raf(fn); };
			})();
			
			var cancelFrame = (function(){
				var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame ||
									   window.clearTimeout;
			  return function(id){ return cancel(id); };
			})();

			function resetTriggers(element){
				var triggers = element.__resizeTriggers__,
					expand = triggers.firstElementChild,
					contract = triggers.lastElementChild,
					expandChild = expand.firstElementChild;
				contract.scrollLeft = contract.scrollWidth;
				contract.scrollTop = contract.scrollHeight;
				expandChild.style.width = expand.offsetWidth + 1 + 'px';
				expandChild.style.height = expand.offsetHeight + 1 + 'px';
				expand.scrollLeft = expand.scrollWidth;
				expand.scrollTop = expand.scrollHeight;
			};

			function checkTriggers(element){
				return element.offsetWidth != element.__resizeLast__.width ||
							 element.offsetHeight != element.__resizeLast__.height;
			}
			
			function scrollListener(e){
				var element = this;
				resetTriggers(this);
				if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
				this.__resizeRAF__ = requestFrame(function(){
					if (checkTriggers(element)) {
						element.__resizeLast__.width = element.offsetWidth;
						element.__resizeLast__.height = element.offsetHeight;
						element.__resizeListeners__.forEach(function(fn){
							fn.call(element, e);
						});
					}
				});
			};
			
			/* Detect CSS Animations support to detect element display/re-attach */
			var animation = false,
				animationstring = 'animation',
				keyframeprefix = '',
				animationstartevent = 'animationstart',
				domPrefixes = 'Webkit Moz O ms'.split(' '),
				startEvents = 'webkitAnimationStart animationstart oAnimationStart MSAnimationStart'.split(' '),
				pfx  = '';
			{
				var elm = document.createElement('fakeelement');
				if( elm.style.animationName !== undefined ) { animation = true; }    
				
				if( animation === false ) {
					for( var i = 0; i < domPrefixes.length; i++ ) {
						if( elm.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
							pfx = domPrefixes[ i ];
							animationstring = pfx + 'Animation';
							keyframeprefix = '-' + pfx.toLowerCase() + '-';
							animationstartevent = startEvents[ i ];
							animation = true;
							break;
						}
					}
				}
			}
			
			var animationName = 'resizeanim';
			var animationKeyframes = '@' + keyframeprefix + 'keyframes ' + animationName + ' { from { opacity: 0; } to { opacity: 0; } } ';
			var animationStyle = keyframeprefix + 'animation: 1ms ' + animationName + '; ';
		}
		
		function createStyles() {
			if (!stylesCreated) {
				//opacity:0 works around a chrome bug https://code.google.com/p/chromium/issues/detail?id=286360
				var css = (animationKeyframes ? animationKeyframes : '') +
						'.resize-triggers { ' + (animationStyle ? animationStyle : '') + 'visibility: hidden; opacity: 0; } ' +
						'.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: \" \"; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
					head = document.head || document.getElementsByTagName('head')[0],
					style = document.createElement('style');
				
				style.type = 'text/css';
				if (style.styleSheet) {
					style.styleSheet.cssText = css;
				} else {
					style.appendChild(document.createTextNode(css));
				}

				head.appendChild(style);
				stylesCreated = true;
			}
		}
		
		window.addResizeListener = function(element, fn){
			if (attachEvent) element.attachEvent('onresize', fn);
			else {
				if (!element.__resizeTriggers__) {
					if (getComputedStyle(element).position == 'static') element.style.position = 'relative';
					createStyles();
					element.__resizeLast__ = {};
					element.__resizeListeners__ = [];
					(element.__resizeTriggers__ = document.createElement('div')).className = 'resize-triggers';
					element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' +
																							'<div class="contract-trigger"></div>';
					element.appendChild(element.__resizeTriggers__);
					resetTriggers(element);
					element.addEventListener('scroll', scrollListener, true);
					
					/* Listen for a css animation to detect element display/re-attach */
					animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function(e) {
						if(e.animationName == animationName)
							resetTriggers(element);
					});
				}
				element.__resizeListeners__.push(fn);
			}
		};
		
		window.removeResizeListener = function(element, fn){
			if (attachEvent) element.detachEvent('onresize', fn);
			else {
				element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
				if (!element.__resizeListeners__.length) {
						element.removeEventListener('scroll', scrollListener);
						element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__);
				}
			}
		}
	})();

/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SAddthisComponent = __webpack_require__(238);

	var _SAddthisComponent2 = _interopRequireDefault(_SAddthisComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SAddthisComponent2.default;

/***/ },
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SComponent2 = __webpack_require__(3);

	var _SComponent3 = _interopRequireDefault(_SComponent2);

	var _STemplate = __webpack_require__(161);

	var _STemplate2 = _interopRequireDefault(_STemplate);

	var _dispatchEvent = __webpack_require__(141);

	var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

	var _querySelectorLive = __webpack_require__(11);

	var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * SAddthisComponent.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Component that allows to stick an element to the top of the screen
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author   Olivier Bossel <olivier.bossel@gmail.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @created  25.07.16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @updated  25.07.16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version  1.0.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	var _sAddThisLoaded = null;

	var SAddthisComponent = function (_SComponent) {
		_inherits(SAddthisComponent, _SComponent);

		/**
	  * Constructor
	  */
		function SAddthisComponent(elm) {
			var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sAddthis';

			_classCallCheck(this, SAddthisComponent);

			// set the pubid in window if exist in settings
			var _this = _possibleConstructorReturn(this, _SComponent.call(this, name, elm, {
				/**
	    * pubid
	    * The public id used to reach addthis service
	    * @type 	{String}
	    */
				pubid: null,

				/**
	    * url
	    * The url to share
	    * @type 	{String}
	    */
				url: window.location.url,

				/**
	    * title
	    * The title to share
	    * @type 	{String}
	    */
				title: document.title,

				/**
	    * description
	    * The description to share
	    * @type 	{String}
	    */
				description: null,

				/**
	    * swfurl
	    * The swfurl to share
	    * @type 	{String}
	    */
				swfurl: null,

				/**
	    * width
	    * The width of the popup
	    * @type 	{String}
	    */
				width: null,

				/**
	    * height
	    * The height of the popup
	    * @type 	{String}
	    */
				height: null,

				/**
	    * email_template
	    * The email_template to share
	    * @type 	{String}
	    */
				email_template: null,

				/**
	    * email_vars
	    * The email_vars to share
	    * @type 	{String}
	    */
				email_vars: null

			}, settings));

			_this._addthis = null;
			if (_this.settings.pubid) {
				window.addthis_config = window.addthis_config || {};
				window.addthis_config.pubid = _this.settings.pubid;
			}
			return _this;
		}

		/**
	  * Init
	  */


		/**
	  * _addthis
	  * Store the addthis instance
	  * @type 	{Object}
	  */


		SAddthisComponent.prototype._init = function _init() {
			// init component
			_SComponent.prototype._init.call(this);
		};

		/**
	  * _initDependencies
	  * Init the dependencies
	  * @return 	{Array} 	An array of promises to resolve before init
	  */


		SAddthisComponent.prototype._initDependencies = function _initDependencies() {
			var _this2 = this;

			return [new Promise(function (resolve, reject) {

				// check if already loaded
				if (window.addthis) {
					_this2._addthis = window.addthis;
					resolve(_this2._addthis);
					return;
				}
				// if already a loader
				if (_sAddThisLoaded) {
					document.body.addEventListener('addthis:loaded', function (e) {
						_this2._addthis = window.addthis;
						resolve(_this2._addthis);
					});
					return;
				}

				// map the loaded function into the window
				_sAddThisLoaded = function _sAddThisLoaded() {
					_this2._addthis = window.addthis;
					_this2._addthis.init();
					(0, _dispatchEvent2.default)(document.body, 'addthis:loaded');
					resolve(_this2._addthis);
				};
				// check if addThis is loaded
				(function checkIfLoaded() {
					if (window.addthis) {
						_sAddThisLoaded();
						return;
					}
					setTimeout(checkIfLoaded, 50);
				})();
				// add the script the the page
				var script = document.createElement('script');
				script.type = 'text/javascript';
				script.src = 'http://s7.addthis.com/js/300/addthis_widget.js#async=1';
				document.body.appendChild(script);
			})];
		};

		/**
	  * enable
	  * Enable the component
	  * @return 	{SAddthisComponent}
	  */


		SAddthisComponent.prototype.enable = function enable() {
			_SComponent.prototype.enable.call(this);

			// init the button
			this._addthis.toolbox(this.elm, window.addthis_config || {}, this.settings);
		};

		return SAddthisComponent;
	}(_SComponent3.default);

	// expose in window.sugar


	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.SAddthisComponent = SAddthisComponent;

	// export
	exports.default = SAddthisComponent;

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SDrawerComponent = __webpack_require__(240);

	var _SDrawerComponent2 = _interopRequireDefault(_SDrawerComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SDrawerComponent2.default;

/***/ },
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SComponent2 = __webpack_require__(3);

	var _SComponent3 = _interopRequireDefault(_SComponent2);

	var _querySelectorLive = __webpack_require__(11);

	var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

	var _getTransitionProperties = __webpack_require__(241);

	var _getTransitionProperties2 = _interopRequireDefault(_getTransitionProperties);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Sugar-activate.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               #
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               #
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author   Olivier Bossel <olivier.bossel@gmail.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @created  20.01.16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @updated  20.01.16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version  1.0.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	if (!window._sDrawerStack) {
		window._sDrawerStack = {};
	}

	// Actual activate element class

	var SDrawerComponent = function (_SComponent) {
		_inherits(SDrawerComponent, _SComponent);

		/**
	  * Setup
	  */
		SDrawerComponent.setup = function setup(type, settings) {
			_SComponent3.default.setup('sDrawer', type, settings);
		};

		/**
	  * Constructor
	  */


		function SDrawerComponent(elm) {
			var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			_classCallCheck(this, SDrawerComponent);

			// get the name
			var _this = _possibleConstructorReturn(this, _SComponent.call(this, 'sDrawer', elm, {
				name: '@',
				closeOnClick: true,
				handleHash: true
			}, settings));

			_this.componentName = _this.settings.name;

			// add the class into the stack
			window._sDrawerStack[_this.componentName] = _this;
			return _this;
		}

		/**
	  * Init
	  */


		SDrawerComponent.prototype._init = function _init() {
			var _this2 = this;

			// init component
			_SComponent.prototype._init.call(this);

			// try to find the drawer background
			this.bkg = document.querySelector('[s-drawer-bkg="' + this.componentName + '"]');
			if (!this.bkg) {
				this.bkg = document.createElement('div');
				this.bkg.setAttribute('s-drawer-bkg', this.componentName);
				// insert in the page
				this.elm.parentElement.insertBefore(this.bkg, this.elm.parentElement.firstChild);
			}

			// try to find the drawer overlay
			this.overlay = document.querySelector('[s-drawer-overlay="' + this.componentName + '"]');
			if (!this.overlay) {
				this.overlay = document.createElement('label');
				this.overlay.setAttribute('for', this.componentName);
				this.overlay.setAttribute('s-drawer-overlay', this.componentName);
				// insert in the page
				this.elm.parentElement.insertBefore(this.overlay, this.elm.parentElement.firstChild);
			}

			// try to find the toggle
			this.toggle = document.querySelector('[s-drawer-toggle="' + this.componentName + '"]');
			if (!this.toggle) {
				this.toggle = document.createElement('input');
				this.toggle.setAttribute('name', this.componentName);
				this.toggle.setAttribute('id', this.componentName);
				this.toggle.setAttribute('type', 'checkbox');
				this.toggle.setAttribute('s-drawer-toggle', this.componentName);
				// insert into page
				this.elm.parentElement.insertBefore(this.toggle, this.elm.parentElement.firstChild);
			}

			// listen for change on the toggle
			this.toggle.addEventListener('change', function (e) {
				var name = e.target.name;
				if (e.target.checked) {
					document.body.classList.add('s-drawer-' + _this2.componentName);
				} else {
					document.body.classList.remove('s-drawer-' + _this2.componentName);
				}
			});

			// listen for click on links into the drawer to close it
			if (this.settings.closeOnClick) {
				this.elm.addEventListener('click', function (e) {
					if (e.target.nodeName.toLowerCase() == 'a') {
						// close the drawer
						_this2.close();
					}
				});
			}

			// if handle hach
			if (this.settings.handleHash) {
				if (document.location.hash) {
					var hash = document.location.hash.substr(1);
					if (hash == this.componentName) {
						this.open();
					}
				}
			}
		};

		/**
	  * Open
	  */


		SDrawerComponent.prototype.open = function open() {
			// check the toggle
			this.toggle.setAttribute('checked', true);
			document.body.add('s-drawer-' + this.componentName);
			return this;
		};

		/**
	  * Close
	  */


		SDrawerComponent.prototype.close = function close() {
			var _this3 = this;

			// uncheck the toggle
			this.toggle.removeAttribute('checked');
			var transition = (0, _getTransitionProperties2.default)(this.elm);
			setTimeout(function () {
				document.body.classList.remove('s-drawer-' + _this3.componentName);
			}, transition.totalDuration);
			return this;
		};

		/**
	  * Check if is opened
	  */


		SDrawerComponent.prototype.isOpen = function isOpen() {
			return this.toggle.checked;
		};

		return SDrawerComponent;
	}(_SComponent3.default);

	// expose in window.sugar


	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.SDrawerComponent = SDrawerComponent;

	// export modules
	exports.default = SDrawerComponent;

/***/ },
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = getTransitionProperties;

	var _getStyleProperty = __webpack_require__(242);

	var _getStyleProperty2 = _interopRequireDefault(_getStyleProperty);

	var _autoCast = __webpack_require__(9);

	var _autoCast2 = _interopRequireDefault(_autoCast);

	var _toMs = __webpack_require__(243);

	var _toMs2 = _interopRequireDefault(_toMs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get the css transition properties from an HTMLElement in an object format
	 *
	 * @name 		getTransitionProperties
	 * @param 		{HTMLElement} 					elm  		The element to get the properties from
	 * @return 		{Object} 									The animation properties
	 *
	 * @example  	js
	 * import getTransitionProperties from 'sugarcss/js/dom/getTransitionProperties'
	 * const props = getTransitionProperties(myCoolHTMLElement);
	 * // output format
	 * // {
	 * // 	property : ['all'],
	 * // 	duration : [200],
	 * // 	delay : [0],
	 * // 	timingFunction : ['linear'],
	 * // 	totalDuration : 200
	 * // }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */

	function splitIfNeeded(what, separator) {
		if (what.indexOf(separator) !== -1) {
			return what.split(separator).map(function (item) {
				return item.trim();
			});
		}
		return [what];
	}

	function getTransitionProperties(elm) {
		// get the transition properties
		var property = (0, _getStyleProperty2.default)(elm, 'transition-property');
		var duration = (0, _getStyleProperty2.default)(elm, 'transition-duration') || 0;
		var timingFunction = (0, _getStyleProperty2.default)(elm, 'transition-timing-function');
		var delay = (0, _getStyleProperty2.default)(elm, 'transition-delay');

		// return the transition object
		var props = {
			property: splitIfNeeded(property, ','),
			duration: splitIfNeeded(duration, ',').map(function (value) {
				return (0, _toMs2.default)(value);
			}),
			delay: splitIfNeeded(delay, ',').map(function (value) {
				return (0, _toMs2.default)(value);
			}),
			timingFunction: splitIfNeeded(timingFunction, ',')
		};
		var totalDuration = 0;
		var i = 0;
		var delays = [0].concat(props.delay);
		[0].concat(props.duration).forEach(function (val) {
			if (val + delays[i] > totalDuration) {
				totalDuration = val + delays[i];
			}
			i++;
		});
		props.totalDuration = totalDuration;
		return props;
	}

/***/ },
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = getStyleProperty;

	var _camelize = __webpack_require__(5);

	var _camelize2 = _interopRequireDefault(_camelize);

	var _autoCast = __webpack_require__(9);

	var _autoCast2 = _interopRequireDefault(_autoCast);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get a style property on the passed element through the computed style.
	 * This function try to store the actual style to not trigger more that 1 redraw
	 * each js execution loop.
	 *
	 * @name 		getStyleProperty
	 * @param 		{HTMLElement} 					elm  		The element to get style from
	 * @param 		{String} 						property 	The css property to get
	 * @return 		{Mixed} 									The style value
	 *
	 * @example  	js
	 * import getStyleProperty from 'sugarcss/js/dom/getStyleProperty'
	 * const opacity = getStyleProperty(myCoolHTMLElement, 'opacity');
	 *
	 * @see 		https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function getStyleProperty(elm, property) {

	  // caching mecanisme
	  setTimeout(function () {
	    elm._sComputedStyle = null;
	  });

	  var computed = elm._sComputedStyle || window.getComputedStyle(elm);
	  elm._sComputedStyle = computed;

	  var prefixes = ['', 'webkit-', 'moz-', 'ms-', 'o-', 'khtml-'];
	  for (var i = 0; i < prefixes.length; i++) {
	    var prefix = prefixes[i];
	    var value = computed[(0, _camelize2.default)('' + prefix + property)];
	    if (value && value.trim() !== '') return (0, _autoCast2.default)(value);
	  }
	  return null;
	}

/***/ },
/* 243 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.default = toMs;
	function toMs(string) {
		// parse the string to int to get the lenght of the suffix
		// if (string.substr(0,1) === '.') string = '0${string}';
		var value = parseFloat(string);
		var valueLength = ('' + value).length;
		var suffix = string.substr(valueLength);
		// switch on suffix
		switch (suffix) {
			case 'ms':
				// milisecond
				return value;
				break;
			case 's': // seconds
			default:
				return value * 1000;
				break;
		}
	}

/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SRippleComponent = __webpack_require__(245);

	var _SRippleComponent2 = _interopRequireDefault(_SRippleComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SRippleComponent2.default;

/***/ },
/* 245 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SComponent2 = __webpack_require__(3);

	var _SComponent3 = _interopRequireDefault(_SComponent2);

	var _offset = __webpack_require__(169);

	var _offset2 = _interopRequireDefault(_offset);

	var _SParticlesSystemComponent = __webpack_require__(246);

	var _SParticlesSystemComponent2 = _interopRequireDefault(_SParticlesSystemComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); } /*
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Sugar-activate.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               #
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * This little js file allow you to detect when an element has been inserted in the page in conjunction with the scss mixin
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               #
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author   Olivier Bossel <olivier.bossel@gmail.com>
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @created  20.01.16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @updated  20.01.16
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version  1.0.0
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


	// class
	var SRippleComponent = function (_SComponent) {
		_inherits(SRippleComponent, _SComponent);

		/**
	  * Setup
	  */
		SRippleComponent.setup = function setup(type, settings) {
			_SComponent3.default.setup('sRipple', type, settings);
		};

		/**
	  * Container
	  */


		/**
	  * Ripple elements
	  */


		/**
	  * Constructor
	  */
		function SRippleComponent(elm) {
			var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sRipple';

			_classCallCheck(this, SRippleComponent);

			var _this = _possibleConstructorReturn(this, _SComponent.call(this, name, elm, {
				contains: true,
				centered: false,
				delay: 130, // delay in ms between each ripple
				count: 1, // number of ripple to trigger on click
				spread: 0 // spread distance for each ripple
			}, settings));

			_this.containerElm = null;
			_this.rippleElms = [];
			return _this;
		}

		/**
	  * On added to dom
	  */


		SRippleComponent.prototype._init = function _init() {
			// init component
			_SComponent.prototype._init.call(this);

			// listen for click
			this.elm.addEventListener('click', this.handleClick.bind(this));
		};

		/**
	  * Handle click
	  */


		SRippleComponent.prototype.handleClick = function handleClick(e) {
			// create new particle system
			var particlesSystemElm = document.createElement('div');
			this.addComponentClass(particlesSystemElm, 'container');
			var particleElm = document.createElement('div');
			this.addComponentClass(particleElm, 'particle');

			var emitterX = void 0,
			    emitterY = void 0;
			if (this.settings.centered) {
				emitterX = this.elm.offsetWith * .5;
				emitterY = this.elm.offsetHeight * .5;
			} else {
				var elmOffset = (0, _offset2.default)(this.elm);
				emitterX = e.pageX - elmOffset.left;
				emitterY = e.pageY - elmOffset.top;
			}

			var particlesSystem = new _SParticlesSystemComponent2.default(particlesSystemElm, {
				emitterX: emitterX + 'px',
				emitterY: emitterY + 'px',
				amount: this.settings.count,
				spread: this.settings.spread,
				particleElm: particleElm,
				duration: this.settings.delay * this.settings.count,
				onComplete: function onComplete() {
					particlesSystemElm.parentNode.removeChild(particlesSystemElm);
				}
			});

			// set position if needed
			var position = this.elm.style.position;
			if (!position) {
				this.elm.style.position = 'relative';
			}

			if (this.settings.contains) {
				particlesSystemElm.style.overflow = 'hidden';
			}

			// add a new ripple
			this.elm.appendChild(particlesSystemElm);
		};

		return SRippleComponent;
	}(_SComponent3.default);

	// expose in window.sugar


	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.SRippleComponent = SRippleComponent;

	// export modules
	exports.default = SRippleComponent;

/***/ },
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SParticlesSystemComponent = __webpack_require__(247);

	var _SParticlesSystemComponent2 = _interopRequireDefault(_SParticlesSystemComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SParticlesSystemComponent2.default;

/***/ },
/* 247 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SComponent2 = __webpack_require__(3);

	var _SComponent3 = _interopRequireDefault(_SComponent2);

	var _SParticleComponent = __webpack_require__(248);

	var _SParticleComponent2 = _interopRequireDefault(_SParticleComponent);

	var _setRecursiveTimeout = __webpack_require__(251);

	var _setRecursiveTimeout2 = _interopRequireDefault(_setRecursiveTimeout);

	var _querySelectorLive = __webpack_require__(11);

	var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var SParticlesSystemComponent = function (_SComponent) {
		_inherits(SParticlesSystemComponent, _SComponent);

		/**
	  * Setup
	  */
		SParticlesSystemComponent.setup = function setup(type, settings) {
			_SComponent3.default.setup('sParticlesSystem', type, settings);
		};

		/**
	  * Constructor
	  */


		function SParticlesSystemComponent(elm) {
			var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sParticlesSystem';

			_classCallCheck(this, SParticlesSystemComponent);

			return _possibleConstructorReturn(this, _SComponent.call(this, name, elm, {
				emitterX: 0,
				emitterY: 0,
				spread: 0,
				amount: 5,
				timeoutSpread: 0,
				duration: null,
				particleClass: null,
				particleElm: null,
				particleClassSelection: 'random',
				onComplete: null
			}, settings));
		}

		/**
	  * Init
	  */


		SParticlesSystemComponent.prototype._init = function _init() {
			var _this2 = this;

			// init component
			_SComponent.prototype._init.call(this);

			var particleClsIdx = 0;

			// init the particle creation system
			(0, _setRecursiveTimeout2.default)(function (idx) {
				// create new particle
				var particleElm = document.createElement('div');
				if (_this2.settings.particleElm) {
					particleElm = _this2.settings.particleElm.cloneNode(true);
				}

				// set particle position
				particleElm.style.top = _this2.settings.emitterY;
				particleElm.style.left = _this2.settings.emitterX;
				particleElm.style.marginLeft = -_this2.settings.spread + Math.round(Math.random() * _this2.settings.spread * 2) + 'px';
				particleElm.style.marginRight = -_this2.settings.spread + Math.round(Math.random() * _this2.settings.spread * 2) + 'px';

				// add attributes to particle if needed

				var cls = _this2.settings.particleClass;
				if (cls instanceof Array) {
					if (_this2.settings.particleClassSelection === 'random') {
						cls = Math.round(Math.random() * (cls.length - 1));
					} else {
						cls = cls[particleClsIdx];
						particleClsIdx = particleClsIdx + 1 < cls.length - 1 ? particleClsIdx + 1 : 0;
					}
				}
				if (_this2.settings.particleClass) {
					particleElm.classList.add(_this2.settings.particleClass);
				}
				var particle = new _SParticleComponent2.default(particleElm, {
					class: cls
				});
				// add the particle to the element
				_this2.elm.appendChild(particleElm);
			}, this.settings.duration / this.settings.amount, this.settings.duration, this.settings.timeoutSpread);

			// detect the end of the particles
			setTimeout(function () {
				if (_this2.settings.onComplete) _this2.settings.onComplete();
			}, this.settings.duration + 1000 / this.settings.amount);
		};

		return SParticlesSystemComponent;
	}(_SComponent3.default);

	// expose in window.sugar


	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.SParticlesSystemComponent = SParticlesSystemComponent;

	// export modules
	exports.default = SParticlesSystemComponent;

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SParticleComponent = __webpack_require__(249);

	var _SParticleComponent2 = _interopRequireDefault(_SParticleComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _SParticleComponent2.default;

/***/ },
/* 249 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _SComponent2 = __webpack_require__(3);

	var _SComponent3 = _interopRequireDefault(_SComponent2);

	var _getAnimationProperties = __webpack_require__(250);

	var _getAnimationProperties2 = _interopRequireDefault(_getAnimationProperties);

	var _querySelectorLive = __webpack_require__(11);

	var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

	var SParticleComponent = function (_SComponent) {
		_inherits(SParticleComponent, _SComponent);

		/**
	  * Setup
	  */
		SParticleComponent.setup = function setup(type, settings) {
			_SComponent3.default.setup('sParticle', type, settings);
		};

		/**
	  * Constructor
	  */


		function SParticleComponent(elm) {
			var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var name = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sParticle';

			_classCallCheck(this, SParticleComponent);

			// set class if needed
			var _this = _possibleConstructorReturn(this, _SComponent.call(this, name, elm, {
				class: null
			}, settings));

			if (_this.settings.class) {
				_this.elm.classList.add(_this.settings.class);
			}
			return _this;
		}

		/**
	  * When added
	  */


		SParticleComponent.prototype._onAdded = function _onAdded() {
			var _this2 = this;

			// get the animation properties
			var animation = (0, _getAnimationProperties2.default)(this.elm);

			// wait till the animation is finished to remove the particle from DOM
			setTimeout(function () {
				if (_this2.elm.parentNode) {
					_this2.elm.parentNode.removeChild(_this2.elm);
				}
			}, animation.totalDuration);
		};

		/**
	  * _onRemoved
	  * When removed
	  * @return 	{void}
	  */


		SParticleComponent.prototype._onRemoved = function _onRemoved() {
			// destroy
			this.destroy();
		};

		return SParticleComponent;
	}(_SComponent3.default);

	// expose in window.sugar


	if (window.sugar == null) {
		window.sugar = {};
	}
	window.sugar.SParticleComponent = SParticleComponent;

	// export modules
	exports.default = SParticleComponent;

/***/ },
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.default = getAnimationProperties;

	var _getStyleProperty = __webpack_require__(242);

	var _getStyleProperty2 = _interopRequireDefault(_getStyleProperty);

	var _toMs = __webpack_require__(243);

	var _toMs2 = _interopRequireDefault(_toMs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Get the css animation properties from an HTMLElement in an object format
	 *
	 * @name 		getAnimationProperties
	 * @param 		{HTMLElement} 					elm  		The element to get the properties from
	 * @return 		{Object} 									The animation properties
	 *
	 * @example  	js
	 * import getAnimationProperties from 'sugarcss/js/dom/getAnimationProperties'
	 * const props = getAnimationProperties(myCoolHTMLElement);
	 * // output format
	 * // {
	 * // 	name : ['animation1'],
	 * // 	duration : [200],
	 * // 	delay : [0],
	 * // 	timingFunction : ['linear'],
	 * // 	iterationCount : [1],
	 * // 	direction : ['forward'],
	 * // 	totalDuration : 200
	 * // }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com>
	 */

	function splitIfNeeded(what, separator) {
		if (what.indexOf(separator) !== -1) {
			return what.split(separator).map(function (item) {
				return item.trim();
			});
		}
		return what;
	}
	function getAnimationProperties(elm) {
		// get the animation properties
		var name = (0, _getStyleProperty2.default)(elm, 'animation-name') || '';
		var duration = (0, _getStyleProperty2.default)(elm, 'animation-duration') || '0s';
		var timingFunction = (0, _getStyleProperty2.default)(elm, 'animation-timing-function') || 'linear';
		var delay = (0, _getStyleProperty2.default)(elm, 'animation-delay') || '0s';
		var iterationCount = (0, _getStyleProperty2.default)(elm, 'animation-iteration-count') || 1;
		var direction = (0, _getStyleProperty2.default)(elm, 'animation-direction') || 'normal';

		// return the animation object
		var props = {
			name: name.split(','),
			duration: duration.split(',').map(function (value) {
				return (0, _toMs2.default)(value);
			}),
			delay: ('' + delay).split(',').map(function (value) {
				return (0, _toMs2.default)(value);
			}),
			timingFunction: timingFunction.split(','),
			iterationCount: ('' + iterationCount).split(','),
			direction: direction.split(',')
		};
		var totalDuration = 0;
		var i = 0;
		var delays = [0].concat(props.delay);
		[0].concat(props.duration).forEach(function (val) {
			if (val + delays[i] > totalDuration) {
				totalDuration = val + delays[i];
			}
		});
		props.totalDuration = totalDuration;
		return props;
	}

/***/ },
/* 251 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports.default = setRecursiveTimeout;
	/**
	 * This utils function allows you to call a passed function each x time during a certain duration
	 *
	 * @name 			setRecursiveTimeout
	 * @param 		{Function} 		fn 				The function to execute
	 * @param 		{Number} 		timeout 		The time between each execution
	 * @param 		{Number} 		duration 		The duration of the timeout
	 * @param 		{Number}		[spread=0] 		An optional spread time that will be used to randomize the function executions times
	 * @return 		{Function} 		clearer 		A function that you can use to clear the timeout before it ends by itself
	 *
	 * @example 		js
	 * setRecursiveTimeout(() => {
	 * 		// I will be executed 10 times
	 * }, 1000, 10000);
	 *
	 * @author 			Olivier Bossel <olivier.bossel@gmail.com>
	 */
	function setRecursiveTimeout(fn, timeout, duration) {
		var spread = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;


		var idx = 0;
		var currentDuration = 0;
		var timeoutFn = null;

		(function tick() {

			// call the function
			fn(idx);

			// update current duration
			currentDuration += timeout;
			idx++;

			// recursive call until end
			if (!duration || duration === -1 || currentDuration < duration) {
				var spreadValue = -spread + Math.round(Math.random(spread * 2));
				timeoutFn = setTimeout(tick, timeout + spreadValue);
			}
		})();

		// return the clear function to be able to stop the timeout
		return function () {
			// clear the timeout
			clearTimeout(timeoutFn);
		};
	}

/***/ },
/* 252 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var SColor = function () {

	    /**
	     * Constructor
	     * @param {object} color The color description like (#ff0000 | rgba(...) | hsl(...) | hsv(...) | {r:255,r:140,b:23,a:40})
	     * @return {object} The color instance
	     */


	    /**
	     * Internal alpha value
	     * @type {number}
	     */


	    /**
	     * Internal green value
	     * @type {number}
	     */


	    /**
	     * Original color value
	     * @type {object}
	     */


	    /**
	     * Static color names map
	     */
	    function SColor(color) {
	        _classCallCheck(this, SColor);

	        this.originalSColor = null;
	        this._r = null;
	        this._g = null;
	        this._b = null;
	        this._a = 1;
	        this._format = null;


	        // save the original color
	        this.originalSColor = color;

	        // try to get the color from the map
	        if (typeof color == 'string' && SColor.colors[color.toLowerCase()]) {
	            color = SColor.colors[color.toLowerCase()];
	        }

	        // parse the input color to
	        // split into rgba values
	        this._parse(color);
	    }

	    /**
	     * Parse
	     * @param {object} color The color to parse like (#ff0000 | rgba(...) | hsl(...) | hsv(...) | {r:255,r:140,b:23,a:40})
	     * @return {object} The rgba representation of the passed color
	     */


	    /**
	     * Current format
	     * This is used to know what format to print in toString for exemple
	     * @type {string}
	     */


	    /**
	     * Internal blue value
	     * @type {number}
	     */


	    /**
	     * Internal red value
	     * @type {number}
	     */


	    /**
	     * Default toString format
	     */


	    SColor.prototype._parse = function _parse(color) {
	        // detecting input format
	        if (typeof color == 'string') {
	            color = color.replace(/\s/g, '');
	            if (color.indexOf('rgb') != -1) {
	                color = this.parseRgba(color);
	            } else if (color.indexOf('hsv') != -1) {
	                color = this.parseHsv(color);
	                color = this.hsv2rgba(color.h, color.s, color.v);
	            } else if (color.indexOf('hsl') != -1) {
	                color = this.parseHsl(color);
	                color = this.hsl2rgba(color.h, color.s, color.l);
	            } else if (color.substring(0, 1) == '#') {
	                color = this.hex2rgba(color);
	            }
	        } else if ((typeof color === "undefined" ? "undefined" : _typeof(color)) == 'object') {
	            if (!(color.r && color.g && color.b) || !(color.h && color.s && color.l) || !(color.h && color.s && color.v)) {
	                throw 'The passed color object ' + color.toString() + ' is not valid';
	            }
	        } else {
	            throw 'The passed color ' + color.toString() + ' is not valid';
	        }
	        // assign new color values
	        this.r = color.r;
	        this.g = color.g;
	        this.b = color.b;
	        this.a = color.a;
	        // return the parsed color
	        return color;
	    };

	    /**
	     * Concert color
	     * @param {string} format The format wanted as output like (rgba,hsl,hsv and hex)
	     * @return {object} The color in wanted object format
	     */


	    SColor.prototype.convert2 = function convert2(format) {
	        switch (format) {
	            case 'rgba':
	                return this.rgba2rgba(this.r, this.g, this.b, this.a);
	                break;
	            case 'hsl':
	                return this.rgba2hsl(this.r, this.g, this.b, this.a);
	                break;
	            case 'hsv':
	                return this.rgba2hsv(this.r, this.g, this.b, this.a);
	                break;
	            case 'hex':
	                return this.rgba2hex(this.r, this.g, this.b, this.a);
	                break;
	        }
	    };

	    /**
	     * Parse RGBA
	     * @param {string} rgbaString The rgba string (rgba(r,g,b,a)) to parse
	     * @return {object} The rgba object representation
	     */


	    SColor.prototype.parseRgba = function parseRgba(rgbaString) {
	        rgbaString = rgbaString.toLowerCase();
	        var string = rgbaString.replace('rgba(', '').replace(')', '').replace(/\s/g, '');
	        var array = string.split(',');
	        return {
	            r: parseInt(array[0]),
	            g: parseInt(array[1]),
	            b: parseInt(array[2]),
	            a: parseInt(array[3])
	        };
	    };

	    /**
	     * Parse HSL
	     * @param {string} hslString The hsl string (hsl(h,s,l)) to parse
	     * @return {object} The hsl object representation
	     */


	    SColor.prototype.parseHsl = function parseHsl(hslString) {
	        hslString = hslString.toLowerCase();
	        var string = hslString.replace('hsl(', '').replace(')', '').replace(/\s/g, '');
	        var array = string.split(',');
	        return {
	            h: parseFloat(array[0]),
	            s: parseFloat(array[1]),
	            l: parseFloat(array[2])
	        };
	    };

	    /**
	     * Parse HSV
	     * @param {string} hsvString The hsv string (hsv(h,s,v)) to parse
	     * @return {object} The hsv object representation
	     */


	    SColor.prototype.parseHsv = function parseHsv(hsvString) {
	        hsvString = hsvString.toLowerCase();
	        var string = hsvString.replace('hsv(', '').replace(')', '').replace(/\s/g, '');
	        var array = string.split(',');
	        return {
	            h: parseFloat(array[0]),
	            s: parseFloat(array[1]),
	            v: parseFloat(array[2])
	        };
	    };

	    /**
	     * RGBA to HEX
	     * @param {number} r The red value between 0-255
	     * @param {number} g The green value between 0-255
	     * @param {number} b The blue value between 0-255
	     * @param {number} a The alpha value between 0-100|0-1
	     * @return {string} The hex string representation like #ff004f
	     */


	    SColor.prototype.rgba2hex = function rgba2hex(r, g, b) {
	        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

	        var alpha = '';
	        if (a != 1 && a != 100) {
	            if (a < 1) {
	                a = 255 * a;
	            } else if (a > 1) {
	                a = 255 / 100 * a;
	            }
	            a = Math.round(a);
	            alpha = parseInt(a, 10).toString(16);
	        }
	        return '#' + ("0" + parseInt(r, 10).toString(16)).slice(-2) + ("0" + parseInt(g, 10).toString(16)).slice(-2) + ("0" + parseInt(b, 10).toString(16)).slice(-2) + alpha;
	    };

	    /**
	     * RGBA to RGBA
	     * @param {number} r The red value between 0-255
	     * @param {number} g The green value between 0-255
	     * @param {number} b The blue value between 0-255
	     * @param {number} a The alpha value between 0-100|0-1
	     * @return {object} The rgba object representation
	     */


	    SColor.prototype.rgba2rgba = function rgba2rgba(r, g, b, a) {
	        a = parseFloat(a);
	        if (a > 1) a = 1 / 100 * a;
	        return {
	            r: r,
	            g: g,
	            b: b,
	            a: a
	        };
	    };

	    /**
	     * Hex to RGBA
	     * @param {string} hex The hex string to convert
	     * @return {object} The rgba object representation
	     */


	    SColor.prototype.hex2rgba = function hex2rgba(hex) {
	        hex = hex.replace('#', '');
	        var r = parseInt(hex.substring(0, 2), 16);
	        var g = parseInt(hex.substring(2, 4), 16);
	        var b = parseInt(hex.substring(4, 6), 16);
	        var a = 1;
	        if (hex.length == 8) {
	            a = 1 / 255 * parseInt(hex.substring(6, 8), 16);
	        }
	        return {
	            r: r,
	            g: g,
	            b: b,
	            a: a
	        };
	    };

	    /**
	     * HSV to RGBA
	     * @param {number} h The hue value between 0-360
	     * @param {number} s The saturation value between 0-100|0-1
	     * @param {number} v The value value between 0-100|0-1
	     * @param {number} a The alpha value between 0-100|0-1
	     * @return {object} The rgba object representation
	     */


	    SColor.prototype.hsv2rgba = function hsv2rgba(h, s, v) {
	        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

	        // manage arguments
	        h = parseFloat(h);
	        s = parseFloat(s);
	        v = parseFloat(v);
	        a = parseFloat(a);
	        if (h > 1) h = 1 / 360 * h;
	        if (s > 1) s = 1 / 100 * s;
	        if (v > 1) v = 1 / 100 * v;
	        if (a > 1) a = 1 / 100 * a;

	        var r, g, b, i, f, p, q, t;
	        i = Math.floor(h * 6);
	        f = h * 6 - i;
	        p = v * (1 - s);
	        q = v * (1 - f * s);
	        t = v * (1 - (1 - f) * s);
	        switch (i % 6) {
	            case 0:
	                r = v, g = t, b = p;
	                break;
	            case 1:
	                r = q, g = v, b = p;
	                break;
	            case 2:
	                r = p, g = v, b = t;
	                break;
	            case 3:
	                r = p, g = q, b = v;
	                break;
	            case 4:
	                r = t, g = p, b = v;
	                break;
	            case 5:
	                r = v, g = p, b = q;
	                break;
	        }
	        return {
	            r: Math.round(r * 255),
	            g: Math.round(g * 255),
	            b: Math.round(b * 255),
	            a: a
	        };
	    };

	    /**
	     * HSL to RGBA
	     * @param {number} h The hue value between 0-360
	     * @param {number} s The saturation value between 0-100|0-1
	     * @param {number} l The luminence value between 0-100|0-1
	     * @param {number} a The alpha value between 0-100|0-1
	     * @return {object} The rgba object representation
	     */


	    SColor.prototype.hsl2rgba = function hsl2rgba(h, s, l) {
	        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

	        // manage arguments
	        h = parseFloat(h);
	        s = parseFloat(s);
	        l = parseFloat(l);
	        a = parseFloat(a);
	        if (h > 1) h = 1 / 360 * h;
	        if (s > 1) s = 1 / 100 * s;
	        if (l > 1) l = 1 / 100 * l;
	        if (a > 1) a = 1 / 100 * a;

	        var r = void 0,
	            g = void 0,
	            b = void 0;
	        if (s == 0) {
	            r = g = b = l; // achromatic
	        } else {
	            var hue2rgb = function hue2rgb(p, q, t) {
	                if (t < 0) t += 1;
	                if (t > 1) t -= 1;
	                if (t < 1 / 6) return p + (q - p) * 6 * t;
	                if (t < 1 / 2) return q;
	                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
	                return p;
	            };

	            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
	            var p = 2 * l - q;
	            r = hue2rgb(p, q, h + 1 / 3);
	            g = hue2rgb(p, q, h);
	            b = hue2rgb(p, q, h - 1 / 3);
	        }

	        return {
	            r: Math.round(r * 255),
	            g: Math.round(g * 255),
	            b: Math.round(b * 255),
	            a: a
	        };
	    };

	    /**
	     * RGBA to HSV
	     * @param {number} r The red value between 0-255
	     * @param {number} g The green value between 0-255
	     * @param {number} b The blue value between 0-255
	     * @param {number} a The alpha value between 0-100|0-1
	     * @return {object} The hsv object representation
	     */


	    SColor.prototype.rgba2hsv = function rgba2hsv(r, g, b) {
	        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

	        var min = Math.min(r, g, b),
	            max = Math.max(r, g, b),
	            delta = max - min,
	            h = void 0,
	            s = void 0,
	            v = max;

	        v = Math.floor(max / 255 * 100);
	        if (max != 0) s = Math.floor(delta / max * 100);else {
	            // black
	            return [0, 0, 0];
	        }

	        if (r == max) h = (g - b) / delta; // between yellow & magenta
	        else if (g == max) h = 2 + (b - r) / delta; // between cyan & yellow
	            else h = 4 + (r - g) / delta; // between magenta & cyan

	        h = Math.floor(h * 60); // degrees
	        if (h < 0) h += 360;

	        return {
	            h: h,
	            s: s,
	            v: v
	        };
	    };

	    /**
	     * RGBA to HSL
	     * @param {number} r The red value between 0-255
	     * @param {number} g The green value between 0-255
	     * @param {number} b The blue value between 0-255
	     * @param {number} a The alpha value between 0-100|0-1
	     * @return {object} The hsl object representation
	     */


	    SColor.prototype.rgba2hsl = function rgba2hsl(r, g, b) {
	        var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;

	        r /= 255, g /= 255, b /= 255;
	        var max = Math.max(r, g, b),
	            min = Math.min(r, g, b);
	        var h = void 0,
	            s = void 0,
	            l = (max + min) / 2;

	        if (max == min) {
	            h = s = 0; // achromatic
	        } else {
	            var d = max - min;
	            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
	            switch (max) {
	                case r:
	                    h = (g - b) / d + (g < b ? 6 : 0);
	                    break;
	                case g:
	                    h = (b - r) / d + 2;
	                    break;
	                case b:
	                    h = (r - g) / d + 4;
	                    break;
	            }
	            h /= 6;
	        }
	        return {
	            h: Math.floor(h * 360),
	            s: Math.floor(s * 100),
	            l: Math.floor(l * 100)
	        };
	    };

	    /**
	     * To hex
	     * @return {string} The hex string representation
	     */


	    SColor.prototype.toHex = function toHex() {
	        return this.convert2('hex');
	    };

	    /**
	     * To hsl
	     * @return {object} The hsl object representation
	     */


	    SColor.prototype.toHsl = function toHsl() {
	        return this.convert2('hsl');
	    };

	    /**
	     * To hsv
	     * @return {object} The hsv object representation
	     */


	    SColor.prototype.toHsv = function toHsv() {
	        return this.convert2('hsv');
	    };

	    /**
	     * To rgba
	     * @return {object} The rgba object representation
	     */


	    SColor.prototype.toRgba = function toRgba() {
	        return this.convert2('rgba');
	    };

	    /**
	     * Get the red value
	     * @return {number} The red value
	     */


	    /**
	     * Reset to the original color
	     */
	    SColor.prototype.reset = function reset() {
	        // parse again the color
	        this._parse(this.originalSColor);
	    };

	    /**
	     * Desaturate
	     * @param {number} amount The amount of desaturation wanted between 0-100
	     * @return {object} The color instance to maintain chainability
	     */


	    SColor.prototype.desaturate = function desaturate(amount) {
	        amount = parseInt(amount);
	        var n = new SColor(this.toHex());
	        n.s -= amount;
	        return n;
	    };

	    /**
	     * Saturate
	     * @param {number} amount The amount of saturation wanted between 0-100
	     * @return {object} The color instance to maintain chainability
	     */


	    SColor.prototype.saturate = function saturate(amount) {
	        amount = parseInt(amount);
	        var n = new SColor(this.toHex());
	        n.s += amount;
	        return n;
	    };

	    /**
	     * Grayscale
	     * @return {object} The color instance to maintain chainability
	     */


	    SColor.prototype.grayscale = function grayscale() {
	        var n = new SColor(this.toHex());
	        n.s = 0;
	        return n;
	    };

	    /**
	     * Spin
	     * @param {number} amount The amount of hue spin wanted between 0-360
	     * @return {object} The color instance to maintain chainability
	     */


	    SColor.prototype.spin = function spin(amount) {
	        amount = parseInt(amount);
	        var hue = this.h;
	        var newHue = hue + amount;
	        if (newHue > 360) {
	            newHue -= 360;
	        }
	        var n = new SColor(this.toHex());
	        n.h = newHue;
	        return n;
	    };

	    /**
	     * Transparentize
	     * @param {number} amount The amount of transparence to apply between 0-100|0-1
	     * @return {object} The color instance to maintain chainability
	     */


	    SColor.prototype.transparentize = function transparentize(amount) {
	        amount = parseFloat(amount);
	        var n = new SColor(this.toHex());
	        n.a -= amount;
	        return n;
	    };

	    /**
	     * Set the alpha
	     * @param {number} alpha The new alpha value to apply between 0-100|0-1
	     * @return {object} The color instance to maintain chainability
	     */


	    SColor.prototype.alpha = function alpha(_alpha) {
	        _alpha = parseFloat(_alpha);
	        var n = new SColor(this.toHex());
	        n.a = _alpha;
	        return n;
	    };

	    /**
	     * Opacify
	     * @param {number} amount The amount of transparence to remove between 0-100|0-1
	     * @return {object} The color instance to maintain chainability
	     */


	    SColor.prototype.opacify = function opacify(amount) {
	        amount = parseFloat(amount);
	        var n = new SColor(this.toHex());
	        n.a += amount;
	        return n;
	    };

	    /**
	     * Darken
	     * @param {number} amount The amount of darkness (of the nightmare of the shadow) to apply between 0-100
	     * @return {object} The color instance to maintain chainabiliy
	     */


	    SColor.prototype.darken = function darken(amount) {
	        amount = parseInt(amount);
	        var n = new SColor(this.toHex());
	        n.l -= amount;
	        return n;
	    };

	    /**
	     * Lighten
	     * @param {number} amount The amount of lightness (of the sky of the angels) to apply between 0-100
	     * @return {object} The color instance to maintain chainability
	     */


	    SColor.prototype.lighten = function lighten(amount) {
	        amount = parseInt(amount);
	        var n = new SColor(this.toHex());
	        n.l += amount;
	        return n;
	    };

	    /**
	     * To hex string
	     * @return {string} The hex string representation of the color
	     */


	    SColor.prototype.toHexString = function toHexString() {
	        return this.convert2('hex');
	    };

	    /**
	     * To rgba string
	     * @return {string} The rgba string representation of the color
	     */


	    SColor.prototype.toRgbaString = function toRgbaString() {
	        return "rgba(" + this._r + "," + this._g + "," + this._b + "," + this._a + ")";
	    };

	    /**
	     * To hsl string
	     * @return {string} The hsl string representation of the color
	     */


	    SColor.prototype.toHslString = function toHslString() {
	        var hsl = this.convert2('hsl');
	        return "hsl(" + hsl.h + "," + hsl.s + "," + hsl.l + ")";
	    };

	    /**
	     * To hsv string
	     * @return {string} The hsv string representation of the color
	     */


	    SColor.prototype.toHsvString = function toHsvString() {
	        var hsv = this.convert2('hsv');
	        return "hsv(" + hsv.h + "," + hsv.s + "," + hsv.v + ")";
	    };

	    /**
	     * To string
	     * @return {string} The rgba string representation of the color
	     */


	    SColor.prototype.toString = function toString() {
	        var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	        if (!format) {
	            format = SColor.toStringFormat;
	        }
	        switch (format) {
	            case 'hex':
	                return this.toHexString();
	                break;
	            case 'hsl':
	                return this.toHslString();
	                break;
	            case 'hsv':
	                return this.toHsvString();
	                break;
	            case 'rgba':
	            default:
	                return this.toRgbaString();
	                break;
	        }
	    };

	    _createClass(SColor, [{
	        key: "r",
	        get: function get() {
	            return this._r;
	        }

	        /**
	         * Set the red value
	         * @param {number} value 	The new red value between 0-255
	         */
	        ,
	        set: function set(value) {
	            value = parseInt(value);
	            value = value > 255 ? 255 : value;
	            this._r = value;
	        }

	        /**
	         * Get the green value
	         * @return {number} The green value
	         */

	    }, {
	        key: "g",
	        get: function get() {
	            return this._g;
	        }

	        /**
	         * Set the green value
	         * @param {number} value 	The new green value between 0-255
	         */
	        ,
	        set: function set(value) {
	            value = parseInt(value);
	            value = value > 255 ? 255 : value;
	            this._g = value;
	        }

	        /**
	         * Get the blue value
	         * @return {number} The blue value
	         */

	    }, {
	        key: "b",
	        get: function get() {
	            return this._b;
	        }

	        /**
	         * Set the blue value
	         * @param {number} value 	The new blue value between 0-255
	         */
	        ,
	        set: function set(value) {
	            value = parseInt(value);
	            value = value > 255 ? 255 : value;
	            this._b = value;
	        }

	        /**
	         * Get the alpha value
	         * @return {number} The alpha value
	         */

	    }, {
	        key: "a",
	        get: function get() {
	            return this._a;
	        }

	        /**
	         * Set the alpha value
	         * @param {number} value 	The new alpha value between 0-100|0-1
	         */
	        ,
	        set: function set(value) {
	            value = parseFloat(value);
	            value = value > 1 ? 1 / 100 * value : value;
	            value = value > 1 ? 1 : value;
	            this._a = value;
	        }

	        /**
	         * @return {number} 	The luminence value
	         */

	    }, {
	        key: "l",
	        get: function get() {
	            return this.convert2('hsl').l;
	        }

	        /**
	         * @param  {number} 	value 	The new luminence value between 0-100
	         */
	        ,
	        set: function set(value) {
	            var hsl = this.convert2('hsl');
	            value = parseInt(value);
	            value = value > 100 ? 100 : value;
	            hsl.l = value;
	            var rgba = this.hsl2rgba(hsl.h, hsl.s, hsl.l);
	            this.r = rgba.r;
	            this.g = rgba.g;
	            this.b = rgba.b;
	        }

	        /**
	         * @return {number} 	The saturation value
	         */

	    }, {
	        key: "s",
	        get: function get() {
	            return this.convert2('hsl').s;
	        }

	        /**
	         * @param {number} 	value 	The new saturation value between 0-100
	         */
	        ,
	        set: function set(value) {
	            var hsl = this.convert2('hsl');
	            value = parseInt(value);
	            value = value > 100 ? 100 : value;
	            hsl.s = value;
	            var rgba = this.hsl2rgba(hsl.h, hsl.s, hsl.l);
	            this.r = rgba.r;
	            this.g = rgba.g;
	            this.b = rgba.b;
	        }

	        /**
	         * @return {number} 	The value
	         */

	    }, {
	        key: "v",
	        get: function get() {
	            return this.convert2('hsv').v;
	        }

	        /**
	         * @param  {number} 	value 	The new value
	         */
	        ,
	        set: function set(value) {
	            var hsv = this.convert2('hsv');
	            value = parseInt(value);
	            value = value > 100 ? 100 : value;
	            hsv.v = value;
	            var rgba = this.hsv2rgba(hsv.h, hsv.s, hsv.v);
	            this.r = rgba.r;
	            this.g = rgba.g;
	            this.b = rgba.b;
	        }

	        /**
	         * Get the hue
	         * @return {number} The current hue
	         */

	    }, {
	        key: "h",
	        get: function get() {
	            return this.convert2('hsl').h;
	        }

	        /**
	         * @param {number}	value 	The new hue value between 0-360
	         */
	        ,
	        set: function set(value) {
	            var hsl = this.convert2('hsl');
	            value = parseInt(value);
	            value = value > 360 ? 360 : value;
	            hsl.h = value;
	            var rgba = this.hsl2rgba(hsl.h, hsl.s, hsl.l);
	            this.r = rgba.r;
	            this.g = rgba.g;
	            this.b = rgba.b;
	        }
	    }]);

	    return SColor;
	}();

	SColor.colors = {
	    "aliceblue": "#f0f8ff",
	    "antiquewhite": "#faebd7",
	    "aqua": "#00ffff",
	    "aquamarine": "#7fffd4",
	    "azure": "#f0ffff",
	    "beige": "#f5f5dc",
	    "bisque": "#ffe4c4",
	    "black": "#000000",
	    "blanchedalmond": "#ffebcd",
	    "blue": "#0000ff",
	    "blueviolet": "#8a2be2",
	    "brown": "#a52a2a",
	    "burlywood": "#deb887",
	    "cadetblue": "#5f9ea0",
	    "chartreuse": "#7fff00",
	    "chocolate": "#d2691e",
	    "coral": "#ff7f50",
	    "cornflowerblue": "#6495ed",
	    "cornsilk": "#fff8dc",
	    "crimson": "#dc143c",
	    "cyan": "#00ffff",
	    "darkblue": "#00008b",
	    "darkcyan": "#008b8b",
	    "darkgoldenrod": "#b8860b",
	    "darkgray": "#a9a9a9",
	    "darkgreen": "#006400",
	    "darkkhaki": "#bdb76b",
	    "darkmagenta": "#8b008b",
	    "darkolivegreen": "#556b2f",
	    "darkorange": "#ff8c00",
	    "darkorchid": "#9932cc",
	    "darkred": "#8b0000",
	    "darksalmon": "#e9967a",
	    "darkseagreen": "#8fbc8f",
	    "darkslateblue": "#483d8b",
	    "darkslategray": "#2f4f4f",
	    "darkturquoise": "#00ced1",
	    "darkviolet": "#9400d3",
	    "deeppink": "#ff1493",
	    "deepskyblue": "#00bfff",
	    "dimgray": "#696969",
	    "dodgerblue": "#1e90ff",
	    "firebrick": "#b22222",
	    "floralwhite": "#fffaf0",
	    "forestgreen": "#228b22",
	    "fuchsia": "#ff00ff",
	    "gainsboro": "#dcdcdc",
	    "ghostwhite": "#f8f8ff",
	    "gold": "#ffd700",
	    "goldenrod": "#daa520",
	    "gray": "#808080",
	    "green": "#008000",
	    "greenyellow": "#adff2f",
	    "honeydew": "#f0fff0",
	    "hotpink": "#ff69b4",
	    "indianred ": "#cd5c5c",
	    "indigo": "#4b0082",
	    "ivory": "#fffff0",
	    "khaki": "#f0e68c",
	    "lavender": "#e6e6fa",
	    "lavenderblush": "#fff0f5",
	    "lawngreen": "#7cfc00",
	    "lemonchiffon": "#fffacd",
	    "lightblue": "#add8e6",
	    "lightcoral": "#f08080",
	    "lightcyan": "#e0ffff",
	    "lightgoldenrodyellow": "#fafad2",
	    "lightgrey": "#d3d3d3",
	    "lightgreen": "#90ee90",
	    "lightpink": "#ffb6c1",
	    "lightsalmon": "#ffa07a",
	    "lightseagreen": "#20b2aa",
	    "lightskyblue": "#87cefa",
	    "lightslategray": "#778899",
	    "lightsteelblue": "#b0c4de",
	    "lightyellow": "#ffffe0",
	    "lime": "#00ff00",
	    "limegreen": "#32cd32",
	    "linen": "#faf0e6",
	    "magenta": "#ff00ff",
	    "maroon": "#800000",
	    "mediumaquamarine": "#66cdaa",
	    "mediumblue": "#0000cd",
	    "mediumorchid": "#ba55d3",
	    "mediumpurple": "#9370d8",
	    "mediumseagreen": "#3cb371",
	    "mediumslateblue": "#7b68ee",
	    "mediumspringgreen": "#00fa9a",
	    "mediumturquoise": "#48d1cc",
	    "mediumvioletred": "#c71585",
	    "midnightblue": "#191970",
	    "mintcream": "#f5fffa",
	    "mistyrose": "#ffe4e1",
	    "moccasin": "#ffe4b5",
	    "navajowhite": "#ffdead",
	    "navy": "#000080",
	    "oldlace": "#fdf5e6",
	    "olive": "#808000",
	    "olivedrab": "#6b8e23",
	    "orange": "#ffa500",
	    "orangered": "#ff4500",
	    "orchid": "#da70d6",
	    "palegoldenrod": "#eee8aa",
	    "palegreen": "#98fb98",
	    "paleturquoise": "#afeeee",
	    "palevioletred": "#d87093",
	    "papayawhip": "#ffefd5",
	    "peachpuff": "#ffdab9",
	    "peru": "#cd853f",
	    "pink": "#ffc0cb",
	    "plum": "#dda0dd",
	    "powderblue": "#b0e0e6",
	    "purple": "#800080",
	    "red": "#ff0000",
	    "rosybrown": "#bc8f8f",
	    "royalblue": "#4169e1",
	    "saddlebrown": "#8b4513",
	    "salmon": "#fa8072",
	    "sandybrown": "#f4a460",
	    "seagreen": "#2e8b57",
	    "seashell": "#fff5ee",
	    "sienna": "#a0522d",
	    "silver": "#c0c0c0",
	    "skyblue": "#87ceeb",
	    "slateblue": "#6a5acd",
	    "slategray": "#708090",
	    "snow": "#fffafa",
	    "springgreen": "#00ff7f",
	    "steelblue": "#4682b4",
	    "tan": "#d2b48c",
	    "teal": "#008080",
	    "thistle": "#d8bfd8",
	    "tomato": "#ff6347",
	    "turquoise": "#40e0d0",
	    "violet": "#ee82ee",
	    "wheat": "#f5deb3",
	    "white": "#ffffff",
	    "whitesmoke": "#f5f5f5",
	    "yellow": "#ffff00",
	    "yellowgreen": "#9acd32"
	};
	SColor.toStringFormat = 'rgba';
	exports.default = SColor;

/***/ },
/* 253 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	/* **********************************************
	     Begin prism-core.js
	********************************************** */

	var _self = (typeof window !== 'undefined')
		? window   // if in browser
		: (
			(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
		);

	/**
	 * Prism: Lightweight, robust, elegant syntax highlighting
	 * MIT license http://www.opensource.org/licenses/mit-license.php/
	 * @author Lea Verou http://lea.verou.me
	 */

	var Prism = (function(){

	// Private helper vars
	var lang = /\blang(?:uage)?-(\w+)\b/i;
	var uniqueId = 0;

	var _ = _self.Prism = {
		util: {
			encode: function (tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
				} else if (_.util.type(tokens) === 'Array') {
					return tokens.map(_.util.encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			type: function (o) {
				return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
			},

			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			// Deep clone a language definition (e.g. to extend it)
			clone: function (o) {
				var type = _.util.type(o);

				switch (type) {
					case 'Object':
						var clone = {};

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = _.util.clone(o[key]);
							}
						}

						return clone;

					case 'Array':
						// Check for existence for IE8
						return o.map && o.map(function(v) { return _.util.clone(v); });
				}

				return o;
			}
		},

		languages: {
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Insert a token before another token in a language literal
			 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
			 * we cannot just provide an object, we need anobject and a key.
			 * @param inside The key (or language id) of the parent
			 * @param before The key to insert before. If not provided, the function appends instead.
			 * @param insert Object with the key/value pairs to insert
			 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || _.languages;
				var grammar = root[inside];

				if (arguments.length == 2) {
					insert = arguments[1];

					for (var newToken in insert) {
						if (insert.hasOwnProperty(newToken)) {
							grammar[newToken] = insert[newToken];
						}
					}

					return grammar;
				}

				var ret = {};

				for (var token in grammar) {

					if (grammar.hasOwnProperty(token)) {

						if (token == before) {

							for (var newToken in insert) {

								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						ret[token] = grammar[token];
					}
				}

				// Update references in other language definitions
				_.languages.DFS(_.languages, function(key, value) {
					if (value === root[inside] && key != inside) {
						this[key] = ret;
					}
				});

				return root[inside] = ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function(o, callback, type, visited) {
				visited = visited || {};
				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
							visited[_.util.objId(o[i])] = true;
							_.languages.DFS(o[i], callback, null, visited);
						}
						else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
							visited[_.util.objId(o[i])] = true;
							_.languages.DFS(o[i], callback, i, visited);
						}
					}
				}
			}
		},
		plugins: {},

		highlightAll: function(async, callback) {
			var env = {
				callback: callback,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run("before-highlightall", env);

			var elements = env.elements || document.querySelectorAll(env.selector);

			for (var i=0, element; element = elements[i++];) {
				_.highlightElement(element, async === true, env.callback);
			}
		},

		highlightElement: function(element, async, callback) {
			// Find language
			var language, grammar, parent = element;

			while (parent && !lang.test(parent.className)) {
				parent = parent.parentNode;
			}

			if (parent) {
				language = (parent.className.match(lang) || [,''])[1].toLowerCase();
				grammar = _.languages[language];
			}

			// Set language on the element, if not present
			element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}

			var code = element.textContent;

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			_.hooks.run('before-sanity-check', env);

			if (!env.code || !env.grammar) {
				_.hooks.run('complete', env);
				return;
			}

			_.hooks.run('before-highlight', env);

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function(evt) {
					env.highlightedCode = evt.data;

					_.hooks.run('before-insert', env);

					env.element.innerHTML = env.highlightedCode;

					callback && callback.call(env.element);
					_.hooks.run('after-highlight', env);
					_.hooks.run('complete', env);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			}
			else {
				env.highlightedCode = _.highlight(env.code, env.grammar, env.language);

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				callback && callback.call(element);

				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
			}
		},

		highlight: function (text, grammar, language) {
			var tokens = _.tokenize(text, grammar);
			return Token.stringify(_.util.encode(tokens), language);
		},

		tokenize: function(text, grammar, language) {
			var Token = _.Token;

			var strarr = [text];

			var rest = grammar.rest;

			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			tokenloop: for (var token in grammar) {
				if(!grammar.hasOwnProperty(token) || !grammar[token]) {
					continue;
				}

				var patterns = grammar[token];
				patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

				for (var j = 0; j < patterns.length; ++j) {
					var pattern = patterns[j],
						inside = pattern.inside,
						lookbehind = !!pattern.lookbehind,
						greedy = !!pattern.greedy,
						lookbehindLength = 0,
						alias = pattern.alias;

					pattern = pattern.pattern || pattern;

					for (var i=0; i<strarr.length; i++) { // Don’t cache length as it changes during the loop

						var str = strarr[i];

						if (strarr.length > text.length) {
							// Something went terribly wrong, ABORT, ABORT!
							break tokenloop;
						}

						if (str instanceof Token) {
							continue;
						}

						pattern.lastIndex = 0;

						var match = pattern.exec(str),
						    delNum = 1;

						// Greedy patterns can override/remove up to two previously matched tokens
						if (!match && greedy && i != strarr.length - 1) {
							// Reconstruct the original text using the next two tokens
							var nextToken = strarr[i + 1].matchedStr || strarr[i + 1],
							    combStr = str + nextToken;

							if (i < strarr.length - 2) {
								combStr += strarr[i + 2].matchedStr || strarr[i + 2];
							}

							// Try the pattern again on the reconstructed text
							pattern.lastIndex = 0;
							match = pattern.exec(combStr);
							if (!match) {
								continue;
							}

							var from = match.index + (lookbehind ? match[1].length : 0);
							// To be a valid candidate, the new match has to start inside of str
							if (from >= str.length) {
								continue;
							}
							var to = match.index + match[0].length,
							    len = str.length + nextToken.length;

							// Number of tokens to delete and replace with the new match
							delNum = 3;

							if (to <= len) {
								if (strarr[i + 1].greedy) {
									continue;
								}
								delNum = 2;
								combStr = combStr.slice(0, len);
							}
							str = combStr;
						}

						if (!match) {
							continue;
						}

						if(lookbehind) {
							lookbehindLength = match[1].length;
						}

						var from = match.index + lookbehindLength,
						    match = match[0].slice(lookbehindLength),
						    to = from + match.length,
						    before = str.slice(0, from),
						    after = str.slice(to);

						var args = [i, delNum];

						if (before) {
							args.push(before);
						}

						var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

						args.push(wrapped);

						if (after) {
							args.push(after);
						}

						Array.prototype.splice.apply(strarr, args);
					}
				}
			}

			return strarr;
		},

		hooks: {
			all: {},

			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i=0, callback; callback = callbacks[i++];) {
					callback(env);
				}
			}
		}
	};

	var Token = _.Token = function(type, content, alias, matchedStr, greedy) {
		this.type = type;
		this.content = content;
		this.alias = alias;
		// Copy of the full string this token was created from
		this.matchedStr = matchedStr || null;
		this.greedy = !!greedy;
	};

	Token.stringify = function(o, language, parent) {
		if (typeof o == 'string') {
			return o;
		}

		if (_.util.type(o) === 'Array') {
			return o.map(function(element) {
				return Token.stringify(element, language, o);
			}).join('');
		}

		var env = {
			type: o.type,
			content: Token.stringify(o.content, language, parent),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language,
			parent: parent
		};

		if (env.type == 'comment') {
			env.attributes['spellcheck'] = 'true';
		}

		if (o.alias) {
			var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
			Array.prototype.push.apply(env.classes, aliases);
		}

		_.hooks.run('wrap', env);

		var attributes = '';

		for (var name in env.attributes) {
			attributes += (attributes ? ' ' : '') + name + '="' + (env.attributes[name] || '') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';

	};

	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _self.Prism;
		}
	 	// In worker
		_self.addEventListener('message', function(evt) {
			var message = JSON.parse(evt.data),
			    lang = message.language,
			    code = message.code,
			    immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);

		return _self.Prism;
	}

	//Get current script and highlight
	var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

	if (script) {
		_.filename = script.src;

		if (document.addEventListener && !script.hasAttribute('data-manual')) {
			if(document.readyState !== "loading") {
				requestAnimationFrame(_.highlightAll, 0);
			}
			else {
				document.addEventListener('DOMContentLoaded', _.highlightAll);
			}
		}
	}

	return _self.Prism;

	})();

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = Prism;
	}

	// hack for components to work correctly in node.js
	if (typeof global !== 'undefined') {
		global.Prism = Prism;
	}


	/* **********************************************
	     Begin prism-markup.js
	********************************************** */

	Prism.languages.markup = {
		'comment': /<!--[\w\W]*?-->/,
		'prolog': /<\?[\w\W]+?\?>/,
		'doctype': /<!DOCTYPE[\w\W]+?>/,
		'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
		'tag': {
			pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
			inside: {
				'tag': {
					pattern: /^<\/?[^\s>\/]+/i,
					inside: {
						'punctuation': /^<\/?/,
						'namespace': /^[^\s>\/:]+:/
					}
				},
				'attr-value': {
					pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
					inside: {
						'punctuation': /[=>"']/
					}
				},
				'punctuation': /\/?>/,
				'attr-name': {
					pattern: /[^\s>\/]+/,
					inside: {
						'namespace': /^[^\s>\/:]+:/
					}
				}

			}
		},
		'entity': /&#?[\da-z]{1,8};/i
	};

	// Plugin to make entity title show the real entity, idea by Roman Komarov
	Prism.hooks.add('wrap', function(env) {

		if (env.type === 'entity') {
			env.attributes['title'] = env.content.replace(/&amp;/, '&');
		}
	});

	Prism.languages.xml = Prism.languages.markup;
	Prism.languages.html = Prism.languages.markup;
	Prism.languages.mathml = Prism.languages.markup;
	Prism.languages.svg = Prism.languages.markup;


	/* **********************************************
	     Begin prism-css.js
	********************************************** */

	Prism.languages.css = {
		'comment': /\/\*[\w\W]*?\*\//,
		'atrule': {
			pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
		'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
		'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
		'property': /(\b|\B)[\w-]+(?=\s*:)/i,
		'important': /\B!important\b/i,
		'function': /[-a-z0-9]+(?=\()/i,
		'punctuation': /[(){};:]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);

	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'style': {
				pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
				lookbehind: true,
				inside: Prism.languages.css,
				alias: 'language-css'
			}
		});
		
		Prism.languages.insertBefore('inside', 'attr-value', {
			'style-attr': {
				pattern: /\s*style=("|').*?\1/i,
				inside: {
					'attr-name': {
						pattern: /^\s*style/i,
						inside: Prism.languages.markup.tag.inside
					},
					'punctuation': /^\s*=\s*['"]|['"]\s*$/,
					'attr-value': {
						pattern: /.+/i,
						inside: Prism.languages.css
					}
				},
				alias: 'language-css'
			}
		}, Prism.languages.markup.tag);
	}

	/* **********************************************
	     Begin prism-clike.js
	********************************************** */

	Prism.languages.clike = {
		'comment': [
			{
				pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
				lookbehind: true
			},
			{
				pattern: /(^|[^\\:])\/\/.*/,
				lookbehind: true
			}
		],
		'string': {
			pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
			greedy: true
		},
		'class-name': {
			pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
			lookbehind: true,
			inside: {
				punctuation: /(\.|\\)/
			}
		},
		'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
		'boolean': /\b(true|false)\b/,
		'function': /[a-z0-9_]+(?=\()/i,
		'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
		'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
		'punctuation': /[{}[\];(),.:]/
	};


	/* **********************************************
	     Begin prism-javascript.js
	********************************************** */

	Prism.languages.javascript = Prism.languages.extend('clike', {
		'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
		'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
		// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
		'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
	});

	Prism.languages.insertBefore('javascript', 'keyword', {
		'regex': {
			pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
			lookbehind: true,
			greedy: true
		}
	});

	Prism.languages.insertBefore('javascript', 'string', {
		'template-string': {
			pattern: /`(?:\\\\|\\?[^\\])*?`/,
			greedy: true,
			inside: {
				'interpolation': {
					pattern: /\$\{[^}]+\}/,
					inside: {
						'interpolation-punctuation': {
							pattern: /^\$\{|\}$/,
							alias: 'punctuation'
						},
						rest: Prism.languages.javascript
					}
				},
				'string': /[\s\S]+/
			}
		}
	});

	if (Prism.languages.markup) {
		Prism.languages.insertBefore('markup', 'tag', {
			'script': {
				pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
				lookbehind: true,
				inside: Prism.languages.javascript,
				alias: 'language-javascript'
			}
		});
	}

	Prism.languages.js = Prism.languages.javascript;

	/* **********************************************
	     Begin prism-file-highlight.js
	********************************************** */

	(function () {
		if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
			return;
		}

		self.Prism.fileHighlight = function() {

			var Extensions = {
				'js': 'javascript',
				'py': 'python',
				'rb': 'ruby',
				'ps1': 'powershell',
				'psm1': 'powershell',
				'sh': 'bash',
				'bat': 'batch',
				'h': 'c',
				'tex': 'latex'
			};

			if(Array.prototype.forEach) { // Check to prevent error in IE8
				Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function (pre) {
					var src = pre.getAttribute('data-src');

					var language, parent = pre;
					var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
					while (parent && !lang.test(parent.className)) {
						parent = parent.parentNode;
					}

					if (parent) {
						language = (pre.className.match(lang) || [, ''])[1];
					}

					if (!language) {
						var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
						language = Extensions[extension] || extension;
					}

					var code = document.createElement('code');
					code.className = 'language-' + language;

					pre.textContent = '';

					code.textContent = 'Loading…';

					pre.appendChild(code);

					var xhr = new XMLHttpRequest();

					xhr.open('GET', src, true);

					xhr.onreadystatechange = function () {
						if (xhr.readyState == 4) {

							if (xhr.status < 400 && xhr.responseText) {
								code.textContent = xhr.responseText;

								Prism.highlightElement(code);
							}
							else if (xhr.status >= 400) {
								code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
							}
							else {
								code.textContent = '✖ Error: File does not exist or is empty';
							}
						}
					};

					xhr.send(null);
				});
			}

		};

		document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);

	})();

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 254 */
/***/ function(module, exports) {

	Prism.languages.scss = Prism.languages.extend('css', {
		'comment': {
			pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,
			lookbehind: true
		},
		'atrule': {
			pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
			inside: {
				'rule': /@[\w-]+/
				// See rest below
			}
		},
		// url, compassified
		'url': /(?:[-a-z]+-)*url(?=\()/i,
		// CSS selector regex is not appropriate for Sass
		// since there can be lot more things (var, @ directive, nesting..)
		// a selector must start at the end of a property or after a brace (end of other rules or nesting)
		// it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
		// the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
		// can "pass" as a selector- e.g: proper#{$erty})
		// this one was hard to do, so please be careful if you edit this one :)
		'selector': {
			// Initial look-ahead is used to prevent matching of blank selectors
			pattern: /(?=\S)[^@;\{\}\(\)]?([^@;\{\}\(\)]|&|#\{\$[-_\w]+\})+(?=\s*\{(\}|\s|[^\}]+(:|\{)[^\}]+))/m,
			inside: {
				'placeholder': /%[-_\w]+/
			}
		}
	});

	Prism.languages.insertBefore('scss', 'atrule', {
		'keyword': [
			/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i,
			{
				pattern: /( +)(?:from|through)(?= )/,
				lookbehind: true
			}
		]
	});

	Prism.languages.insertBefore('scss', 'property', {
		// var and interpolated vars
		'variable': /\$[-_\w]+|#\{\$[-_\w]+\}/
	});

	Prism.languages.insertBefore('scss', 'function', {
		'placeholder': {
			pattern: /%[-_\w]+/,
			alias: 'selector'
		},
		'statement': /\B!(?:default|optional)\b/i,
		'boolean': /\b(?:true|false)\b/,
		'null': /\bnull\b/,
		'operator': {
			pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
			lookbehind: true
		}
	});

	Prism.languages.scss['atrule'].inside.rest = Prism.util.clone(Prism.languages.scss);

/***/ }
/******/ ])
});
;