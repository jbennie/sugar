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
import __querySelectorLive from '../dom/querySelectorLive'
import __next from '../dom/next'
import __previous from '../dom/previous'
import __offset from '../dom/offset'
import __scrollTop from '../dom/scrollTop'
import __uniqid from '../tools/uniqid'
import SEvent from '../core/SEvent'

// Select
class SSelectComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings) {
		SComponent.setup('sSelect', type, settings);
	}

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}) {
		super('sSelect', elm, {
			onOpen : null,
			onClose : null,
			search : true,
			searchPlaceholder : 'Search...',
			internalSearch : true,
			minCharactersForSearch : 3,
			screenMargin : 50
		}, settings);

		// init
		this.initProxy(this.init.bind(this));
	}

	// onVisible() {
	// 	console.log('VISIBLE');
	// }

	/**
	 * On added to dom
	 */
	init() {

		// utils variables
		this._openOnFocus = false;
		this._currentActiveOption = null; // save the current keyboard selected item

		// generate a custom id
		this.id = __uniqid();

		// set the id to the element to
		// be able to reach it and listen for
		// new items in it
		this.elm.setAttribute('data-s-select', this.id);

		// build html structure
		this._buildHTML();

		// display or not the search
		if ( ! this.settings.search) {
			this.search_container.style.position = 'absolute';
			this.search_container.style.left = '-120vw';
		}

		// make sure when we click that we focus on the search field
		this.container.addEventListener('click', (e) => {
			this.search_field.focus();
		});

		// prevent default behavior on click in options container
		this.options_container.addEventListener('click', (e) => {
			e.preventDefault();
		});

		// open on click
		this.container.addEventListener('click', (e) => {
			// open
			if ( ! this.isOpen()) {
				this.open();
			}
		});

		// prevent scroll into the options
		this.options_container.addEventListener('mousewheel', (ev) => {
			let _this = ev.currentTarget;
			let scrollTop = _this.scrollTop;
			let scrollHeight = _this.scrollHeight;
			let height = _this.offsetHeight;
			let delta = ev.wheelDelta;
			if (ev.type == 'DOMMouseScroll') {
				delta = ev.originalEvent.details * -40;
			}
			let up = delta > 0
			let prevent = () => {
				ev.stopPropagation();
				ev.preventDefault();
				ev.returnValue = false;
				return false;
			}
			if ( ! up && -delta > scrollHeight - height - scrollTop) {
				// Scrolling down, but this will take us past the bottom.
				_this.scrollTop = scrollHeight;
				prevent();
			} else if (up && delta > scrollTop) {
				// Scrolling up, but this will take us past the top.
				_this.scrollTop = 0;
				prevent();
			}
		});
		// this.dropdown.addEventListener('DOMMouseScroll', (e) => {
		// 	e.preventDefault();
		// 	e.stopPropagation();
		// });

		// manage the keyup event
		let _onKeyUpFn = (e) => {
			this._onKeyUp(e);
		}
		let _onKeyDownFn = (e) => {
			this._onKeyDown(e);
		}
		let _onScrollResizeFn = (e) => {
			this._onScrollResize(e);
		}
		this.elm.addEventListener('open', (e) => {
			document.addEventListener('keyup', _onKeyUpFn);
			document.addEventListener('keydown', _onKeyDownFn);
			window.addEventListener('scroll', _onScrollResizeFn);
			window.addEventListener('resize', _onScrollResizeFn);
		});
		this.elm.addEventListener('close', (e) => {
			document.removeEventListener('keyup', _onKeyUpFn);
			document.removeEventListener('keydown', _onKeyDownFn);
			window.removeEventListener('scroll', _onScrollResizeFn);
			window.removeEventListener('resize', _onScrollResizeFn);
		});

		// listen for click outside of the dropdown
		document.addEventListener('click', (e) => {
			if ( ! this.container.contains(e.target)) {
				this.close();
			}
		});

		// listen for change on base select
		// to set the selected items
		this.elm.addEventListener('change', (e) => {
			this._setSelected();
		});

		// listen for focus in search field to activate the field
		this.search_field.addEventListener('focus', (e) => {
			this._openOnFocus = true;
			this.open();
			setTimeout(() => {
				this._openOnFocus = false;
			}, 200);
		});

		// listen for keyup on search field
		let internalSearch = this.settings.internalSearch;
		let search = this.settings.search;
		const searchFieldFn = (e) => {
			// trigger custom event
			let event = new SEvent('search');
			this.elm.dispatchEvent(event);
			// on search callback
			let onSearch = this.settings.onSearch;
			if (onSearch) onSearch(e.target.value);
			// check if internal search
			this._search();
		}
		if (internalSearch && search) {
			this.search_field.addEventListener('keyup', searchFieldFn);
			this.search_field.addEventListener('search', searchFieldFn);
		}

		// listen for new elements in the select
		__querySelectorLive('[data-s-select="'+this.id+'"] > option, [data-s-select="'+this.id+'"] > optgroup', {
			groupNodes : true,
			rootNode : this.elm,
			onNodeRemoved : (nodes) => {
				this.refresh();
			}
		}).subscribe((elms) => {
			// refresh the select
			this.refresh();
		});
	}

	/**
	 * Search
	 */
	_search() {
		// loop on each options
		[].forEach.call(this.options_container.querySelectorAll('.s-select__option'), (option) => {
			// check if is a value in the search field
			if (this.search_field.value && this.search_field.value.length >= this.settings.minCharactersForSearch) {
				// check if we find the text in the option
				let regexp = new RegExp("(" + this.search_field.value + ")(?!([^<]+)?>)",'gi');
				// search the tokens in html
				let replace = option._s_innerHTML.replace(regexp, '<span class="s-select__search-result">$1</span>');
				if (option._s_innerHTML.match(regexp)) {
					option.innerHTML = replace;
				} else {
					// reset the activate item if need to be hided
					if (option == this._currentActiveOption) {
						this._currentActiveOption = null;
					}
					option.classList.add('s-select__option--hidden');
				}
			} else {
				option.innerHTML = option._s_innerHTML;
				option.classList.remove('s-select__option--hidden');
			}
		});

		// set position
		this._setPosition();

	}

	/**
	 * On scroll or resize
	 */
	_onScrollResize(e) {
		// clearTimeout(this._scrollResizeTimeout);
		// this._scrollResizeTimeout = setTimeout(() => {
			// console.log('set POSITION');
			this._setPosition();
		// }, 100);
	}

	_onKeyUp(e) {
		if ((e.keyCode == 9 // tab
			|| e.keyCode == 27 // escape
			) && this.isOpen()) {
			if ( ! this._openOnFocus) {
				this.close();
			}
		}
	}

	/**
	 * On key down
	 */
	_onKeyDown(e) {
		switch(e.keyCode) {
			case 40: // down
				this._activateNext();
				e.preventDefault();
			break;
			case 38: // up
				this._activatePrevious();
				e.preventDefault();
			break;
			case 13: // enter
				this._selectActivated();
				e.preventDefault();
			break;
			case 8: // backspace
				if (this.search_field.focus && this.search_field.value == '') {
					// remove the last item
					this.removeLast();
				}
			break;
		}
	}

	/**
	 * Select next with keyboard
	 */
	_activateNext() {
		// remove active class if exist
		if (this._currentActiveOption) {
			this._currentActiveOption.classList.remove('active');
		}
		// check if already an item is selected
		if ( ! this._currentActiveOption) {
			this._currentActiveOption = this.options_container.querySelector('.s-select__option:not(.s-select__option--disabled):not(.s-select__option--hidden):first-child');

		} else {
			// try to get the next sibling
			this._currentActiveOption = __next(this._currentActiveOption, '.s-select__option:not(.s-select__option--disabled):not(.s-select__option--hidden)');
		}
		// activate the element
		if (this._currentActiveOption) {
			this._currentActiveOption.classList.add('active');
		}
	}

	/**
	 * Select previous with keyboard
	 */
	_activatePrevious() {
		// remove active class if exist
		if (this._currentActiveOption) {
			this._currentActiveOption.classList.remove('active');
		}
		// check if already an item is selected
		if ( ! this._currentActiveOption) {
			this._currentActiveOption = this.options_container.querySelector('.s-select__option:not(.s-select__option--disabled):not(.s-select__option--hidden):last-child');

		} else {
			// try to get the next sibling
			this._currentActiveOption = __previous(this._currentActiveOption, '.s-select__option:not(.s-select__option--disabled):not(.s-select__option--hidden)');
		}
		// activate the element
		if (this._currentActiveOption) {
			this._currentActiveOption.classList.add('active');
		}
	}

	/**
	 * Select activated item
	 */
	_selectActivated() {
		// check if an activated element exist
		if (this._currentActiveOption) {
			this.select(this._currentActiveOption._s_select_source_option);
		}
	}

	_appendNew() {
		let opt = document.createElement('option');
		opt.innerHTML = 'Coco';
		this.elm.appendChild(opt);
		setTimeout(() => {
			this._appendNew();
		}, 0 + Math.random() * 1000);
	}

	/**
	 * Create html structure
	 */
	_buildHTML() {
		let container = document.createElement('div');
		container.setAttribute('class',this.elm.getAttribute('class') + ' s-select');

		// multiple class
		if (this.elm.getAttribute('multiple') != null) {
			container.classList.add('s-select--multiple');
		}

		let selection_container = document.createElement('div');
		selection_container.setAttribute('class', 's-select__selection-container');

		let selection_aligner = document.createElement('div');
		selection_aligner.setAttribute('class', 's-select__selection-aligner');

		let dropdown = document.createElement('div');
		dropdown.setAttribute('class', 's-select__dropdown');
		dropdown.style.fontSize = '1rem';

		// search
		let search_container = document.createElement('div');
		search_container.setAttribute('class','s-select__search-container');
		let search_field = document.createElement('input');
		search_field.setAttribute('type', 'search');
		if (search_field.type != 'search') {
			search_field.type = 'text';
		}
		search_field.setAttribute('placeholder', this.settings.searchPlaceholder);
		search_field.setAttribute('class', 's-select__search-field');

		// options
		let options_container = document.createElement('div');
		options_container.setAttribute('class', 's-select__options');

		// append to document
		search_container.appendChild(search_field);

		dropdown.appendChild(search_container);
		dropdown.appendChild(options_container);

		// container.appendChild(open_checkbox);
		container.appendChild(selection_container);
		container.appendChild(dropdown);

		// append the element right before the select
		this.elm.parentNode.insertBefore(container, this.elm);

		// hide element
		this.elm.style.position = 'absolute';
		this.elm.style.left = '-120vw';
		this.elm.style.opacity = 0;
		this.elm.tabIndex = -1;
		// this.elm.style.height = '400px';

		// save into object
		this.container = container;
		this.dropdown = dropdown;
		this.search_container = search_container;
		this.selection_container = selection_container;
		this.search_field = search_field;
		this.options_container = options_container;
	}

	/**
	 * Handle click on option
	 */
	_handleOptionClick(_s_option, e) {

		// check if is a multiple
		if ( ! this.isMultiple()) {
			// select the element in the source select
			_s_option._s_select_source_option.selected = true;
			// close
			this.close();
		} else {

			_s_option._s_select_source_option.selected = ! _s_option._s_select_source_option.selected;

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
		let event = new SEvent('change');
		this.elm.dispatchEvent(event);
	}

	/**
	 * Set selected elements
	 */
	 _setSelected() {
	 	// loop on selected option to activate them
	 	let areSomeSelectedItems = false;
	 	[].forEach.call(this.elm.options, (option) => {
	 		// apply the active class
	 		if (option._s_select_option) {
	 			if (option.selected) {
	 				if (option.innerHTML != '') {
	 					areSomeSelectedItems = true;
	 				}
	 				option._s_select_option.classList.add('selected');
	 			} else {
	 				option._s_select_option.classList.remove('selected');
	 			}
	 		}
	 	});
	 	// set the selection
	 	this.selection_container.innerHTML = '';
	 	if (this.isMultiple()) {
	 		// loop on each selected items
	 		[].forEach.call(this.elm.options, (option) => {
	 			if (option.selected) {
	 				// get the content
	 				let content = option.innerHTML;
	 				// create the tag
	 				let tag = document.createElement('div');
	 				tag.classList.add('s-select__selection-tag');
	 				tag.innerHTML = content;
	 				let close = document.createElement('span');
	 				close.classList.add('s-select__selection-tag-close');
	 				close.addEventListener('click', (e) => {
	 					option.selected = false;
	 					// trigger change event
						let event = new SEvent('change');
						this.elm.dispatchEvent(event);
	 				});
	 				tag.addEventListener('dblclick', (e) => {
	 					option.selected = false;
	 					// trigger change event
						let event = new SEvent('change');
						this.elm.dispatchEvent(event);
	 				})
	 				tag.appendChild(close);
	 				this.selection_container.appendChild(tag);
	 			}
	 		});
	 	} else {
	 		// get the selected one
	 		let selected_idx = this.elm.options.selectedIndex;
	 		if (selected_idx != -1) {
	 			// set the selected
	 			let selection = document.createElement('div');
	 			selection.classList.add('s-select__selection');
	 			selection.innerHTML = this.elm.options[selected_idx].innerHTML;
	 			this.selection_container.appendChild(selection);
	 		}
	 	}

	 	if ( ! areSomeSelectedItems) {
	 		let placeholder = this.elm.getAttribute('placeholder');
	 		if (placeholder) {
	 			let selection = document.createElement('div');
	 			selection.classList.add('s-select__selection');
	 			selection.classList.add('input--placeholder');
	 			selection.innerHTML = placeholder;
	 			this.container.classList.add('s-select--placeholder');
	 			this.selection_container.appendChild(selection);
	 		}
	 	} else {
	 		this.container.classList.remove('s-select--placeholder');
	 	}
	 }

	/**
	 * Set position
	 */
	_setPosition() {
		// get the position of the container
		let dropdownOffset = __offset(this.dropdown);
		let dropdownTop = dropdownOffset.top - __scrollTop();
		let containerTop = __offset(this.container).top - __scrollTop();
		let dropdownFullHeight = this.options_container.scrollHeight + this.search_container.offsetHeight;
		let optionsFullHeight = this.options_container.scrollHeight;
		let optionsHeight = this.options_container.offsetHeight;
		let screenMargin = this.settings.screenMargin;
		let optionsMinHeight = parseInt(window.getComputedStyle(this.options_container).getPropertyValue('min-height'));

		// check if the min-height has been reached
		if ( containerTop + this.container.offsetHeight + this.search_container.offsetHeight + optionsMinHeight + screenMargin > window.innerHeight) {
		// if (optionsHeight < optionsFullHeight && optionsHeight <= optionsMinHeight ) {
			this.container.classList.add('s-select--dropup');
			// console.log(top + h, window.innerHeight);
			if (containerTop - dropdownFullHeight - screenMargin < 0) {
				this.options_container.style.height = window.innerHeight - (window.innerHeight - containerTop) - this.search_container.offsetHeight - screenMargin + 'px';
			} else {
				this.options_container.style.height = 'auto';
			}
		} else {
			this.container.classList.remove('s-select--dropup');
			// console.log(top + h, window.innerHeight);
			if (dropdownTop + dropdownFullHeight + screenMargin > window.innerHeight) {
				this.options_container.style.height = window.innerHeight - dropdownTop - this.search_container.offsetHeight - screenMargin + 'px';
			} else {
				this.options_container.style.height = 'auto';
			}
		}
	}

	/**
	 * Handle optgroup
	 */
	_handleOptgroup(_optgroup) {
		// create the choice
		let option = document.createElement('div');
		option.classList.add('s-select__optgroup');

		// get the content
		let content = _optgroup.getAttribute('label');

		// get the content
		let source = _optgroup.getAttribute('data-s-select-option-source');
		if (source) {
			// try to get into document
			source = document.querySelector(source);
			if (source) {
				option.appendChild(source);
				option.classList.add('s-select__optgroup--custom');
			} else {
				option.innerHTML = content;
			}
		} else {
			option.innerHTML = content;
		}

		// append new choice
		this.options_container.appendChild(option);
	}

	/**
	 * Handle option
	 */
	_handleOption(_option, in_optgroup = false) {

		// check if is an optiongroup
		if (_option.nodeName.toLowerCase() == 'optgroup') {
			this._handleOptgroup(_option);
			[].forEach.call(_option.querySelectorAll(':scope > option'), (option) => {
				this._handleOption(option, true);
			});
			return;
		}

		// create the choice
		let option = document.createElement('div');
		option.classList.add('s-select__option');

		// check if in optgroup
		if (in_optgroup) {
			option.classList.add('s-select__option--in-optgroup');
		}

		// check if disabled
		if (_option.disabled) {
			option.classList.add('s-select__option--disabled');
		}

		// save the option reference into html element
		// to be able to activate it in the base select
		option._s_select_source_option = _option;

		// save the s_option into the base option
		// to be able to activate the s_option later
		_option._s_select_option = option;

		// get the content
		let content = _option.innerHTML;

		// get the content
		let source = _option.getAttribute('data-s-select-option-source');
		if (source) {
			// try to get into document
			source = document.querySelector(source);
			if (source) {
				option.appendChild(source);
				option.classList.add('s-select__option--custom');
			} else {
				option.innerHTML = content;
			}
		} else {
			if ( ! content) return;
			option.innerHTML = content;
		}

		// save the html to restore later on search
		option._s_innerHTML = option.innerHTML;

		// add a click event on the option
		option.addEventListener('click', (e) => {
			this._handleOptionClick(e.currentTarget, e);
		});

		// add the listener for the hover
		option.addEventListener('mouseover', (e) => {
			this._currentActiveOption = option;
		});

		// append new choice
		this.options_container.appendChild(option);
	}

	/**
	 * Refresh
	 */
	refresh() {
		// empty the options
		let options_parent = this.options_container.parentNode;
		options_parent.removeChild(this.options_container);
		this.options_container.innerHTML = '';

		// create the options tree
		[].forEach.call(this.elm.querySelectorAll(':scope > option, :scope > optgroup'), (elm) => {
			// handle option
			this._handleOption(elm);
		}, this.elm);

		// set selected the first time
		this._setSelected();

		// append again in dom the options
		options_parent.appendChild(this.options_container);

		// set position
		if (this.isOpen()) {
			this._setPosition();
		}
	}

	/**
	 * Select an option in source select
	 */
	select(option) {
		// check if we have the s-select option targer
		if (option._s_select_option) {
			this._handleOptionClick(option._s_select_option);
		} else if (option._s_select_source_option) {
			this._handleOptionClick(option);
		}
	}

	/**
	 * Remove last
	 */
	removeLast() {
		let last = null;
		[].forEach.call(this.elm.options, (option) => {
			if (option.selected) {
				last = option;
			}
		});
		// unselect the last
		if (last) {
			last.selected = false;
			// trigger change event
			let event = new SEvent('change');
			this.elm.dispatchEvent(event);
		}
	}

	/**
	 * Add event listener
	 */
	addEventListener(event, callback, capture) {
		this.elm.addEventListener(event, callback, capture);
	}

	/**
	 * Remove event listener
	 */
	removeEventListener(event, callback, capture) {
		this.elm.removeEventListener(event, callback, capture);
	}

	/**
	 * Is multiple
	 */
	isMultiple() {
		return this.elm.getAttribute('multiple') != null;
	}

	/**
	 * Is opened
	 */
	isOpen() {
		return this.container.classList.contains('s-select--opened');
	}

	/**
	 * Close
	 */
	close() {
		this.container.classList.remove('s-select--opened');
		// unactivate the option if one exist
		if (this._currentActiveOption) {
			this._currentActiveOption.classList.remove('active');
		}
		// remove the dropup class
		this._clearDropupTimeout = setTimeout(() => {
			this.container.classList.remove('s-select--dropup');
		},500);
		// dispatch close event
		let event = new SEvent('close');
		this.elm.dispatchEvent(event);
		// handle onClose callback
		let onClose = this.settings.onClose;
		if (onClose) { onClose(); }
	}

	/**
	 * Close
	 */
	open() {
		this.container.classList.add('s-select--opened');
		// set position
		clearTimeout(this._clearDropupTimeout);
		this._setPosition();
		// dispatch open event
		let event = new SEvent('open');
		this.elm.dispatchEvent(event);
		// manage onOpen callback
		let onOpen = this.settings.onOpen;
		if (onOpen) { onOpen(); }
	}

}

// initOn
SSelectComponent.initOn = function(selector, settings = {}) {
	// init the select
	return __querySelectorLive(selector).subscribe((elm) => {
		new SSelectComponent(elm, settings);
	});
};

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SSelectComponent = SSelectComponent;

// export modules
export default SSelectComponent;
