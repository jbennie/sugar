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

	var _querySelectorLive = __webpack_require__(11);

	var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	__webpack_require__(193);

	// s-activate
	(0, _querySelectorLive2.default)('[s-toggle]').once().subscribe(function (elm) {
		new _SActivateComponent2.default(elm, {
			toggle: true,
			history: false
		}, 'sToggle');
	});

	// s-select
	(0, _querySelectorLive2.default)('[s-select]').once().subscribe(function (elm) {
		new _SSelectComponent2.default(elm);
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
				console.log('refres');
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

				if (elm.hasAttribute('s-range')) {
					console.log('subscribe', _this2);
				}

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
				_this4.attr[(0, _camelize2.default)(attr.name)] = value !== undefined ? value : true;
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
				this.targets = document.querySelectorAll(this.target);
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
		// console.error('integrate', component);
		// STemplate.refresh(component.elm);
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
			if (this.attr.required && validators.indexOf('required') === -1) {
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

/***/ }
/******/ ])
});
;