'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mixwith = require('../../../js/vendors/mixwith');

var _SWebComponentMixin = require('../../../js/core/SWebComponentMixin');

var _SWebComponentMixin2 = _interopRequireDefault(_SWebComponentMixin);

var _next = require('../../../js/dom/next');

var _next2 = _interopRequireDefault(_next);

var _previous = require('../../../js/dom/previous');

var _previous2 = _interopRequireDefault(_previous);

var _offset = require('../../../js/dom/offset');

var _offset2 = _interopRequireDefault(_offset);

var _offsetParent = require('../../../js/dom/offsetParent');

var _offsetParent2 = _interopRequireDefault(_offsetParent);

var _scrollTop = require('../../../js/dom/scrollTop');

var _scrollTop2 = _interopRequireDefault(_scrollTop);

var _uniqid = require('../../../js/utils/uniqid');

var _uniqid2 = _interopRequireDefault(_uniqid);

var _insertAfter = require('../../../js/dom/insertAfter');

var _insertAfter2 = _interopRequireDefault(_insertAfter);

var _dispatchEvent = require('../../../js/dom/dispatchEvent');

var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);

var _SEvent = require('../../../js/classes/SEvent');

var _SEvent2 = _interopRequireDefault(_SEvent);

var _style = require('../../../js/dom/style');

var _style2 = _interopRequireDefault(_style);

var _sTemplateIntegrator = require('../../../js/core/sTemplateIntegrator');

var _sTemplateIntegrator2 = _interopRequireDefault(_sTemplateIntegrator);

var _querySelectorLive = require('../../../js/dom/querySelectorLive');

var _querySelectorLive2 = _interopRequireDefault(_querySelectorLive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

require('../../../js/utils/rxjs/operators/groupByTimeout');

if (typeof HTMLSelectElement !== 'function') {
	var _HTMLSelectElement = function _HTMLSelectElement() {};
	_HTMLSelectElement.prototype = HTMLSelectElement.prototype;
	HTMLSelectElement = _HTMLSelectElement;
}

var SSelectComponent = function (_mix$with) {
	_inherits(SSelectComponent, _mix$with);

	function SSelectComponent() {
		_classCallCheck(this, SSelectComponent);

		return _possibleConstructorReturn(this, _mix$with.apply(this, arguments));
	}

	/**
  * Mount component
  * @definition 		SWebComponent.componentMount
  */
	SSelectComponent.prototype.componentMount = function componentMount() {
		var _this3 = this;

		_mix$with.prototype.componentMount.call(this);

		// utils variables
		this._openOnFocus = false;
		this._currentActiveOption = null; // save the current keyboard selected item

		// build html structure
		this._buildHTML();

		// display or not the search
		if (!this.props.search) {
			this._searchContainerElm.style.position = 'absolute';
			this._searchContainerElm.style.left = '-120vw';
		}

		// make sure when we click that we focus on the search field
		this._containerElm.addEventListener('click', function (e) {
			if (_this3.props.search) {
				_this3._searchFieldElm.focus();
			}
		});

		// prevent default behavior on click in options container
		this.optionsContainerElm.addEventListener('click', function (e) {
			e.preventDefault();
		});

		// open on click
		this._containerElm.addEventListener('click', function (e) {
			// do not open when the click is on an option
			if (_this3.hasComponentClass(e.target, 'option')) return;
			// open
			if (!_this3.isOpened()) {
				_this3.open();
			}
		});

		// prevent scroll into the options
		this.optionsContainerElm.addEventListener('mousewheel', function (ev) {
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
		this.addEventListener('open', function (e) {
			document.addEventListener('keyup', _onKeyUpFn);
			document.addEventListener('keydown', _onKeyDownFn);
			document.addEventListener('click', _onDocumentClick);
			window.addEventListener('scroll', _onScrollResizeFn);
			window.addEventListener('resize', _onScrollResizeFn);
		});
		this.addEventListener('close', function (e) {
			document.removeEventListener('keyup', _onKeyUpFn);
			document.removeEventListener('keydown', _onKeyDownFn);
			document.removeEventListener('click', _onDocumentClick);
			window.removeEventListener('scroll', _onScrollResizeFn);
			window.removeEventListener('resize', _onScrollResizeFn);
		});

		// listen for change on base select
		// to set the selected items
		this.addEventListener('change', function (e) {
			_this3._setSelected();
		});

		// listen for focus in search field to activate the field
		this._searchFieldElm.addEventListener('focus', function (e) {
			_this3._openOnFocus = true;
			_this3.open();
			setTimeout(function () {
				_this3._openOnFocus = false;
			}, 200);
		});

		// listen for keyup on search field
		var internalSearch = this.props.internalSearch;
		var search = this.props.search;
		var searchFieldFn = function searchFieldFn(e) {
			// trigger custom event
			var event = new _SEvent2.default('search');
			_this3.dispatchEvent(event);
			// on search callback
			var onSearch = _this3.props.onSearch;
			if (onSearch) onSearch(e.target.value);
			// check if internal search
			_this3._search();
		};
		if (internalSearch && search) {
			this._searchFieldElm.addEventListener('keyup', searchFieldFn);
			this._searchFieldElm.addEventListener('search', searchFieldFn);
		}

		// observe all changes into the select
		// to refresh our custom one
		var removedTimeout = null;
		this._refreshObserver = (0, _querySelectorLive2.default)('option, optgroup', {
			rootNode: this,
			onNodeRemoved: function onNodeRemoved(node) {
				clearTimeout(removedTimeout);
				removedTimeout = setTimeout(function () {
					_this3.refresh();
				});
			}
		}).notIn('optgroup').groupByTimeout().subscribe(function (elms) {
			_this3.refresh();
		});

		// first refresh
		this.refresh();

		// hide the select
		this._hideRealSelect();
		// append the element right after the real select
		(0, _insertAfter2.default)(this._containerElm, this);
	};

	/**
  * Component will receive prop
  * @definition 		SWebComponent.componentWillReceiveProp
  */


	SSelectComponent.prototype.componentWillReceiveProp = function componentWillReceiveProp(name, newVal, oldVal) {};

	/**
  * Destroy
  */


	SSelectComponent.prototype.destroy = function destroy() {
		if (this._refreshObserver) {
			this._refreshObserver.unsubscribe();
		}
		_mix$with.prototype.destroy.call(this);
	};

	/**
  * Search
  */


	SSelectComponent.prototype._search = function _search() {
		var _this4 = this;

		// loop on each options
		[].forEach.call(this.optionsContainerElm.querySelectorAll(this.componentSelector('option')), function (option) {
			// check if is a value in the search field
			if (_this4._searchFieldElm.value && _this4._searchFieldElm.value.length >= _this4.props.minCharactersForSearch) {
				// check if we find the text in the option
				var regexp = new RegExp("(" + _this4._searchFieldElm.value + ")(?!([^<]+)?>)", 'gi');
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
		if (!this._containerElm.contains(e.target)) {
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
				if (this._searchFieldElm.focus && this._searchFieldElm.value == '') {
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
			this._currentActiveOption = this.optionsContainerElm.querySelector(this.componentSelector('option') + ':not(' + this.componentSelector('option', 'disabled') + '):not(' + this.componentSelector('option', 'hidden') + '):first-child');
		} else {
			// try to get the next sibling
			var next = (0, _next2.default)(this._currentActiveOption, this.componentSelector('option') + ':not(' + this.componentSelector('option', 'disabled') + '):not(' + this.componentSelector('option', 'hidden') + ')');
			if (next) this._currentActiveOption = next;
		}
		// activate the element
		if (this._currentActiveOption) {
			this.addComponentClass(this._currentActiveOption, 'option', null, 'active');
			this._currentActiveOption.classList.add('active');
			// scroll view
			var currentScroll = this._currentActiveOption.parentNode.scrollTop;
			var optionHeight = this._currentActiveOption.offsetHeight;
			if (currentScroll + optionHeight <= this._currentActiveOption.parentNode.scrollHeight) {
				this._currentActiveOption.parentNode.scrollTop += optionHeight;
			}
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
			this._currentActiveOption = this.optionsContainerElm.querySelector(this.componentSelector('option') + ':not(' + this.componentSelector('option', 'disabled') + '):not(' + this.componentSelector('option', 'hidden') + '):last-child');
		} else {
			// try to get the next sibling
			var previous = (0, _previous2.default)(this._currentActiveOption, this.componentSelector('option') + ':not(' + this.componentSelector('option', 'disabled') + '):not(' + this.componentSelector('option', 'hidden') + ')');
			if (previous) this._currentActiveOption = previous;
		}
		// activate the element
		if (this._currentActiveOption) {
			this.addComponentClass(this._currentActiveOption, 'option', null, 'active');
			this._currentActiveOption.classList.add('active');
			// scroll to item
			var currentScroll = this._currentActiveOption.parentNode.scrollTop;
			var optionHeight = this._currentActiveOption.offsetHeight;
			if (currentScroll - optionHeight >= 0) {
				this._currentActiveOption.parentNode.scrollTop -= optionHeight;
			}
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
		var _this5 = this;

		var container = document.createElement('div');
		container.setAttribute('class', this.getAttribute('class'));
		this.addComponentClass(container);

		// multiple class
		if (this.getAttribute('multiple') != null) {
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
		search_field.setAttribute('placeholder', this.props.searchPlaceholder);
		this.addComponentClass(search_field, 'search-field');

		// reset
		var resetElm = null;
		if (this.props.resetAllowed) {
			resetElm = document.createElement('button');
			resetElm.setAttribute('type', 'button');
			resetElm.addEventListener('click', function (e) {
				e.preventDefault();
				_this5.reset();
			});
			this.addComponentClass(resetElm, 'reset');
		}

		// options
		var options_container = document.createElement('div');
		this.addComponentClass(options_container, 'options');

		// append to document
		search_container.appendChild(search_field);

		dropdown.appendChild(search_container);
		dropdown.appendChild(options_container);

		// container.appendChild(open_checkbox);
		container.appendChild(selection_container);
		if (resetElm) {
			container.appendChild(resetElm);
		}
		container.appendChild(dropdown);

		// hide the real select
		this._hideRealSelect();

		// save into object
		this._containerElm = container;
		this._dropdownElm = dropdown;
		this._searchContainerElm = search_container;
		this.selectionContainerElm = selection_container;
		this._searchFieldElm = search_field;
		this.optionsContainerElm = options_container;
	};

	/**
  * Hide the select
  */


	SSelectComponent.prototype._hideRealSelect = function _hideRealSelect() {
		// keep it in the viewport to avoid issues
		// when trying to get the select that is in the viewport,
		// etc...
		(0, _style2.default)(this, {
			position: 'absolute',
			width: 0,
			height: 0,
			padding: 0,
			opacity: .01,
			pointerEvents: 'none',
			zIndex: -1
		});
		this.tabIndex = -1;
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
			// 	if (this.options.selectedIndex) {
			// 		// find the current option position
			// 		let current_option_idx = 0,
			// 			found = false;
			// 		[].forEach.call(this.options, (opt) => {
			// 			if ( ! found && opt != _s_option._s_select_source_option) {
			// 				current_option_idx++;
			// 			} else {
			// 				found = true;
			// 			}
			// 		});

			// 		// select all the options inbetween
			// 		let first = this.options.selectedIndex;
			// 		let last = current_option_idx;
			// 		if (first > last) {
			// 			let _last = last;
			// 			last = first;
			// 			first = _last;
			// 		}
			// 		for (let i = first; i <= last; i++) {
			// 			if ( ! this.options[i].disabled) {
			// 				this.options[i].selected = true;
			// 			}
			// 		}
			// 	} else {
			// 		// telection
			// 		_s_option._s_select_source_option.selected = ! _s_option._s_select_source_option.selected;
			// 	}
			// } else {
			// 	// unactive all the options
			// 	[].forEach.call(this.options, (opt) => {
			// 		opt.selected = false;
			// 	});
			// 	// activate the item
			// 	_s_option._s_select_source_option.selected = true;
			// }
		}

		// trigger change event
		(0, _dispatchEvent2.default)(this, 'change');
	};

	/**
  * Set selected elements
  */


	SSelectComponent.prototype._setSelected = function _setSelected() {
		var _this6 = this;

		// loop on selected option to activate them
		var areSomeSelectedItems = false;
		[].forEach.call(this.options, function (option) {
			// apply the active class
			if (option._s_select_option) {
				if (option.selected) {
					if (option.innerHTML != '') {
						areSomeSelectedItems = true;
					}
					_this6.addComponentClass(option._s_select_option, 'option', null, 'selected');
				} else {
					_this6.removeComponentClass(option._s_select_option, 'option', null, 'selected');
				}
			}
		});
		// set the selection
		this.selectionContainerElm.innerHTML = '';
		if (this.isMultiple()) {
			// loop on each selected items
			[].forEach.call(this.options, function (option) {
				if (option.selected) {
					// get the content
					var content = option.innerHTML;
					// create the tag
					var tag = document.createElement('div');
					_this6.addComponentClass(tag, 'selection-tag');
					tag.innerHTML = content;
					var close = document.createElement('span');
					_this6.addComponentClass(close, 'selection-tag-close');
					close.addEventListener('click', function (e) {
						option.selected = false;
						// trigger change event
						var event = new _SEvent2.default('change');
						_this6.dispatchEvent(event);
					});
					tag.addEventListener('dblclick', function (e) {
						option.selected = false;
						// trigger change event
						var event = new _SEvent2.default('change');
						_this6.dispatchEvent(event);
					});
					tag.appendChild(close);
					_this6.selectionContainerElm.appendChild(tag);
				}
			});
		} else {
			// get the selected one
			var selected_idx = this.options.selectedIndex;
			if (selected_idx != -1) {
				// set the selected
				var selection = document.createElement('div');
				this.addComponentClass(selection, 'selection');
				selection.innerHTML = this.options[selected_idx].innerHTML;
				this.selectionContainerElm.appendChild(selection);
			}
		}

		if (!areSomeSelectedItems) {
			var placeholder = this.getAttribute('placeholder');
			if (placeholder) {
				var _selection = document.createElement('div');
				this.addComponentClass(_selection, 'selection');
				_selection.classList.add('input--placeholder');
				_selection.innerHTML = placeholder;
				this.addComponentClass(this._containerElm, null, 'placeholder');
				this.selectionContainerElm.appendChild(_selection);
			}
		} else {
			this.removeComponentClass(this._containerElm, null, 'placeholder');
		}
	};

	/**
  * Set position
  */


	SSelectComponent.prototype._setPosition = function _setPosition() {
		// get the position of the container
		var dropdownOffset = (0, _offset2.default)(this._dropdownElm);
		var dropdownTop = dropdownOffset.top - (0, _scrollTop2.default)();
		var containerTop = (0, _offset2.default)(this._containerElm).top - (0, _scrollTop2.default)();
		var dropdownFullHeight = this.optionsContainerElm.scrollHeight + this._searchContainerElm.offsetHeight;
		var optionsFullHeight = this.optionsContainerElm.scrollHeight;
		var optionsHeight = this.optionsContainerElm.offsetHeight;
		var screenMargin = this.props.screenMargin;
		var optionsMinHeight = parseInt(window.getComputedStyle(this.optionsContainerElm).getPropertyValue('min-height'));

		// check if the min-height has been reached
		if (containerTop + this._containerElm.offsetHeight + this._searchContainerElm.offsetHeight + optionsMinHeight + screenMargin > window.innerHeight) {
			// if (optionsHeight < optionsFullHeight && optionsHeight <= optionsMinHeight ) {
			this.addComponentClass(this._containerElm, null, 'dropup');
			// console.log(top + h, window.innerHeight);
			if (containerTop - dropdownFullHeight - screenMargin < 0) {
				this.optionsContainerElm.style.height = window.innerHeight - (window.innerHeight - containerTop) - this._searchContainerElm.offsetHeight - screenMargin + 'px';
			} else {
				this.optionsContainerElm.style.height = 'auto';
			}
		} else {
			this.removeComponentClass(this._containerElm, null, 'dropup');
			// console.log(top + h, window.innerHeight);
			if (dropdownTop + dropdownFullHeight + screenMargin > window.innerHeight) {
				this.optionsContainerElm.style.height = window.innerHeight - dropdownTop - this._searchContainerElm.offsetHeight - screenMargin + 'px';
			} else {
				this.optionsContainerElm.style.height = 'auto';
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
		this.optionsContainerElm.appendChild(option);
	};

	/**
  * Handle option
  */


	SSelectComponent.prototype._handleOption = function _handleOption(_option) {
		var _this7 = this;

		var in_optgroup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;


		// check if is an optiongroup
		if (_option.nodeName.toLowerCase() == 'optgroup') {
			this._handleOptgroup(_option);
			[].forEach.call(_option.querySelectorAll(':scope > option'), function (option) {
				_this7._handleOption(option, true);
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
			_this7._handleOptionClick(e.currentTarget, e);
		});

		// add the listener for the hover
		option.addEventListener('mouseover', function (e) {
			_this7._currentActiveOption = option;
		});

		// append new choice
		this.optionsContainerElm.appendChild(option);
	};

	/**
  * Refresh
  */


	SSelectComponent.prototype.refresh = function refresh() {
		var _this8 = this;

		// empty the options
		var options_parent = this.optionsContainerElm.parentNode;
		options_parent.removeChild(this.optionsContainerElm);
		this.optionsContainerElm.innerHTML = '';

		// create the options tree
		[].forEach.call(this.querySelectorAll(':scope > option, :scope > optgroup'), function (elm) {
			// handle option
			_this8._handleOption(elm);
		}, this);

		// set selected the first time
		this._setSelected();

		// append again in dom the options
		options_parent.appendChild(this.optionsContainerElm);

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
  * Reset the select
  */


	SSelectComponent.prototype.reset = function reset() {
		this.selectedIndex = -1;
		this.refresh();
		(0, _dispatchEvent2.default)(this, 'change');
		(0, _dispatchEvent2.default)(this, 'reset');
	};

	/**
  * Remove last
  */


	SSelectComponent.prototype.removeLast = function removeLast() {
		var last = null;
		[].forEach.call(this.options, function (option) {
			if (option.selected) {
				last = option;
			}
		});
		// unselect the last
		if (last) {
			last.selected = false;
			// trigger change event
			var event = new _SEvent2.default('change');
			this.dispatchEvent(event);
		}
	};

	/**
  * Is multiple
  */


	SSelectComponent.prototype.isMultiple = function isMultiple() {
		return this.hasAttribute('multiple');
	};

	/**
  * Is opened
  */


	SSelectComponent.prototype.isOpened = function isOpened() {
		return this.hasComponentClass(this._containerElm, null, null, 'opened');
	};

	/**
  * Close
  */


	SSelectComponent.prototype.close = function close() {
		var _this9 = this;

		this.removeComponentClass(this._containerElm, null, null, 'opened');

		// unactivate the option if one exist
		if (this._currentActiveOption) {
			this.removeComponentClass(this._currentActiveOption, 'option', null, 'active');
		}
		// remove the dropup class
		this._clearDropupTimeout = setTimeout(function () {
			_this9.removeComponentClass(_this9._containerElm, null, 'dropup');
		}, 500);
		// dispatch close event
		var event = new _SEvent2.default('close');
		this.dispatchEvent(event);
		// handle onClose callback
		var onClose = this.props.onClose;
		if (onClose) {
			onClose();
		}
	};

	/**
  * Close
  */


	SSelectComponent.prototype.open = function open() {
		this.addComponentClass(this._containerElm, null, null, 'opened');
		// set position
		clearTimeout(this._clearDropupTimeout);
		this._setPosition();
		// dispatch open event
		var event = new _SEvent2.default('open');
		this.dispatchEvent(event);
		// manage onOpen callback
		var onOpen = this.props.onOpen;
		if (onOpen) {
			onOpen();
		}
	};

	_createClass(SSelectComponent, null, [{
		key: 'defaultProps',


		/**
   * Default props
   * @definition 		SWebComponent.defaultProps
   */
		get: function get() {
			return {
				onOpen: null,
				onClose: null,
				search: true,
				resetAllowed: true,
				searchPlaceholder: 'Search...',
				internalSearch: true,
				minCharactersForSearch: 3,
				screenMargin: 50
			};
		}
	}]);

	return SSelectComponent;
}((0, _mixwith.mix)(HTMLSelectElement).with(_SWebComponentMixin2.default));

// STemplate integration


exports.default = SSelectComponent;
_sTemplateIntegrator2.default.registerComponentIntegration(SSelectComponent, function (component) {
	_sTemplateIntegrator2.default.ignore(component._containerElm);
	_sTemplateIntegrator2.default.ignore(component, {
		style: true
	});
});