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
import SComponent from '../../../js/core/SComponent'
import __next from '../../../js/dom/next'
import __previous from '../../../js/dom/previous'
import __offset from '../../../js/dom/offset'
import __scrollTop from '../../../js/dom/scrollTop'
import __uniqid from '../../../js/tools/uniqid'
import __insertAfter from '../../../js/dom/insertAfter'
import SEvent from '../../../js/core/SEvent'
import __mutationObservable from '../../../js/dom/mutationObservable'
import STemplate from '../../../js/core/STemplate'

require('../../../js/rxjs/operators/groupByTimeout');

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
	}

	/**
	 * Init the component
	 */
	_init() {
		// init component
		super._init();

		// utils variables
		this._openOnFocus = false;
		this._currentActiveOption = null; // save the current keyboard selected item

		// generate a custom id
		this.id = __uniqid();

		// build html structure
		this._buildHTML();

		// display or not the search
		if ( ! this.settings.search) {
			this.search_container.style.position = 'absolute';
			this.search_container.style.left = '-120vw';
		}

		// make sure when we click that we focus on the search field
		this.container.addEventListener('click', (e) => {
			if (this.settings.search) {
				this.search_field.focus();
			}
		});

		// prevent default behavior on click in options container
		this.options_container.addEventListener('click', (e) => {
			e.preventDefault();
		});

		// open on click
		this.container.addEventListener('click', (e) => {
			// do not open when the click is on an option
			if (e.target.hasAttribute(this.componentItemAttributeName('option'))) return;
			// open
			if ( ! this.isOpened()) {
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
		let _onDocumentClick = (e) => {
			this._onDocumentClick(e);
		}
		this.elm.addEventListener('open', (e) => {
			document.addEventListener('keyup', _onKeyUpFn);
			document.addEventListener('keydown', _onKeyDownFn);
			document.addEventListener('click', _onDocumentClick);
			window.addEventListener('scroll', _onScrollResizeFn);
			window.addEventListener('resize', _onScrollResizeFn);
		});
		this.elm.addEventListener('close', (e) => {
			document.removeEventListener('keyup', _onKeyUpFn);
			document.removeEventListener('keydown', _onKeyDownFn);
			document.removeEventListener('click', _onDocumentClick);
			window.removeEventListener('scroll', _onScrollResizeFn);
			window.removeEventListener('resize', _onScrollResizeFn);
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

		// observe all changes into the select
		// to refresh our custom one
		this._refreshObserver = __mutationObservable(this.elm, {
			childList : true,
			attributes : true,
			characterData : true,
			subtree : true
		}).groupByTimeout().subscribe((mutation) => {
			this.refresh();
		});

		// first refresh
		this.refresh();
	}

	/**
	 * Destroy
	 */
	destroy() {
		if (this._refreshObserver) {
			this._refreshObserver.unsubscribe();
		}
		super.destroy();
	}

	/**
	 * disable
	 * When the component is disabled
	 */
	disable() {
		// disable in parent class
		super.disable();
		// show the select
		this._showRealSelect();
		// remove the container
		if (this.container.parentNode) {
			this.container.parentNode.removeChild(this.container);
		}
	}

	/**
	 * enable
	 * When the component is enabled
	 */
	enable() {
		// enable in parent class
		super.enable();
		// hide the select
		this._hideRealSelect();
		// append the element right after the real select
		__insertAfter(this.container, this.elm);
	}

	/**
	 * onRemoved
	 */
	_onRemoved() {
		// remove the container from the dom
		if (this.container.parentNode) {
			this.container.parentNode.removeChild(this.container);
		}
		// parent method
		super._onRemoved();
	}

	/**
	 * onAdded
	 */
	_onAdded() {
		// parent method
		super._onAdded();

		// append the element right after the real select
		__insertAfter(this.container, this.elm);
	}

	/**
	 * Search
	 */
	_search() {
		// loop on each options
		[].forEach.call(this.options_container.querySelectorAll(`${this.componentItemSelector('option')}`), (option) => {
			// check if is a value in the search field
			if (this.search_field.value && this.search_field.value.length >= this.settings.minCharactersForSearch) {
				// check if we find the text in the option
				let regexp = new RegExp("(" + this.search_field.value + ")(?!([^<]+)?>)",'gi');
				// search the tokens in html
				let replace = option._s_innerHTML.replace(regexp, `<span ${this.componentItemAttributeName('searchResult')}>$1</span>`);
				if (option._s_innerHTML.match(regexp)) {
					option.innerHTML = replace;
				} else {
					// reset the activate item if need to be hided
					if (option == this._currentActiveOption) {
						this._currentActiveOption = null;
					}
					this.setComponentItemName(option, 'optionHidden');
				}
			} else {
				option.innerHTML = option._s_innerHTML;
				this.removeComponentItemName(option, 'optionHidden');
			}
		});

		// set position
		this._setPosition();

	}

	/**
	 * On scroll or resize
	 */
	_onScrollResize(e) {
		this._setPosition();
	}

	/**
	 * When the user click outside of the select
	 */
	_onDocumentClick(e) {
		if ( ! this.container.contains(e.target)) {
			this.close();
		}
	}

	_onKeyUp(e) {
		if ((e.keyCode == 9 // tab
			|| e.keyCode == 27 // escape
		) && this.isOpened()) {
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
			this.removeComponentItemName(this._currentActiveOption, 'optionActive');
		}
		// check if already an item is selected
		if ( ! this._currentActiveOption) {
			this._currentActiveOption = this.options_container.querySelector(`${this.componentItemSelector('option')}:not(${this.componentItemSelector('optionDisabled')}:not(${this.componentItemSelector('optionHidden')}):first-child`);
		} else {
			// try to get the next sibling
			this._currentActiveOption = __next(this._currentActiveOption, `${this.componentItemSelector('option')}:not(${this.componentItemSelector('optionDisabled')}:not(${this.componentItemSelector('optionHidden')})`);
		}
		// activate the element
		if (this._currentActiveOption) {
			this.setComponentItemName(this._currentActiveOption, 'optionActive');
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
			this._currentActiveOption = this.options_container.querySelector(`${this.componentItemSelector('option')}:not(${this.componentItemSelector('optionDisabled')}):not(${this.componentItemSelector('optionHidden')}):last-child`);
		} else {
			// try to get the next sibling
			this._currentActiveOption = __previous(this._currentActiveOption, `${this.componentItemSelector('option')}:not(${this.componentItemSelector('optionDisabled')}):not(${this.componentItemSelector('optionHidden')})`);
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

	/**
	 * Create html structure
	 */
	_buildHTML() {

		let container = document.createElement('div');
		container.setAttribute('class', this.elm.getAttribute('class'));
		this.setComponentItemName(container, 'container');

		// multiple class
		if (this.elm.getAttribute('multiple') != null) {
			this.setComponentItemName(container, 'multiple');
		}

		let selection_container = document.createElement('div');
		this.setComponentItemName(selection_container, 'selectionContainer');

		let selection_aligner = document.createElement('div');
		this.setComponentItemName(selection_aligner, 'selectionAligner');

		let dropdown = document.createElement('div');
		this.setComponentItemName(dropdown, 'dropdown');
		dropdown.style.fontSize = '1rem';

		// search
		let search_container = document.createElement('div');
		this.setComponentItemName(search_container, 'searchContainer');

		// search field
		let search_field = document.createElement('input');
		search_field.setAttribute('type', 'search');
		if (search_field.type != 'search') {
			search_field.type = 'text';
		}
		search_field.setAttribute('placeholder', this.settings.searchPlaceholder);
		this.setComponentItemName(search_field, 'searchField');

		// options
		let options_container = document.createElement('div');
		this.setComponentItemName(options_container, 'options');

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
	}

	/**
	 * Hide the select
	 */
	_hideRealSelect() {
		this.elm.style.position = 'absolute';
		this.elm.style.left = '-120vw';
		this.elm.style.opacity = 0;
		this.elm.tabIndex = -1;
	}

	/**
	 * Show the select
	 */
	_showRealSelect() {
		this.elm.style.position = null;
		this.elm.style.left = null;
		this.elm.style.opacity = 1;
		this.elm.tabIndex = null;
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
					this.setComponentItemName(option, 'optionSelected');
	 			} else {
					this.removeComponentItemName(option, 'optionSelected');
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
					this.setComponentItemName(tag, 'selectionTag');
	 				tag.innerHTML = content;
	 				let close = document.createElement('span');
					this.setComponentItemName(close, 'selectionTagClose');
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
				this.setComponentItemName(selection, 'selection');
	 			selection.innerHTML = this.elm.options[selected_idx].innerHTML;
	 			this.selection_container.appendChild(selection);
	 		}
	 	}

	 	if ( ! areSomeSelectedItems) {
	 		let placeholder = this.elm.getAttribute('placeholder');
	 		if (placeholder) {
	 			let selection = document.createElement('div');
				this.setComponentItemName(selection, 'selection');
	 			selection.classList.add('input--placeholder');
	 			selection.innerHTML = placeholder;
				this.setComponentItemName(this.container, 'hasPlaceholder');
	 			this.selection_container.appendChild(selection);
	 		}
	 	} else {
			this.removeComponentItemName(this.container, 'hasPlaceholder');
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
			this.setComponentItemName(this.container, 'dropup');
			// console.log(top + h, window.innerHeight);
			if (containerTop - dropdownFullHeight - screenMargin < 0) {
				this.options_container.style.height = window.innerHeight - (window.innerHeight - containerTop) - this.search_container.offsetHeight - screenMargin + 'px';
			} else {
				this.options_container.style.height = 'auto';
			}
		} else {
			this.removeComponentItemName(this.container, 'dropup');
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
		this.setComponentItemName(option, 'optgroup');

		// get the content
		let content = _optgroup.getAttribute('label');

		// get the content
		let source = _optgroup.getAttribute(`${this.componentNameDash}-option-source`);
		if (source) {
			// try to get into document
			source = document.querySelector(source);
			if (source) {
				option.appendChild(source);
				this.setComponentItemName(option, 'optgroupCustom');
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
		this.setComponentItemName(option, 'option');

		// check if in optgroup
		if (in_optgroup) {
			this.setComponentItemName(option, 'optionInOptgroup');
		}

		// check if disabled
		if (_option.disabled) {
			this.setComponentItemName(option, 'optionDisabled');
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
		let source = _option.getAttribute(`${this.componentNameDash}-option-source`);
		if (source) {
			// try to get into document
			source = document.querySelector(source);
			if (source) {
				option.appendChild(source);
				this.setComponentItemName(option, 'optionCustom');
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
		if (this.isOpened()) {
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
		return this.elm.hasAttribute('multiple');
	}

	/**
	 * Is opened
	 */
	isOpened() {
		return this.container.hasAttribute(this.componentItemAttributeName('opened'));
	}

	/**
	 * Close
	 */
	close() {
		this.removeComponentItemName(this.container, 'opened');

		// unactivate the option if one exist
		if (this._currentActiveOption) {
			this.removeComponentItemName(this._currentActiveOption, 'optionActive');
		}
		// remove the dropup class
		this._clearDropupTimeout = setTimeout(() => {
			this.removeComponentItemName(this.container, 'dropup');
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
		this.setComponentItemName(this.container, 'opened');
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

// STemplate integration
STemplate.registerComponentIntegration('SSelectComponent', (component) => {
	STemplate.keepAttribute(component.elm, 'style')
			 .exclude(component.container);
});

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SSelectComponent = SSelectComponent;

// export modules
export default SSelectComponent;
