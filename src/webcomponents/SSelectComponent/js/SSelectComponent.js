import { mix } from 'mixwith'
import SWebComponentMixin from '../../../js/core/SWebComponentMixin'
import __next from '../../../js/dom/next'
import __previous from '../../../js/dom/previous'
import __offset from '../../../js/dom/offset'
import __offsetParent from '../../../js/dom/offsetParent'
import __scrollTop from '../../../js/dom/scrollTop'
import __uniqid from '../../../js/utils/uniqid'
import __insertAfter from '../../../js/dom/insertAfter'
import __dispatchEvent from '../../../js/dom/dispatchEvent'
import SEvent from '../../../js/classes/SEvent'
import __style from '../../../js/dom/style'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'
import __querySelectorLive from '../../../js/dom/querySelectorLive'

require('../../../js/utils/rxjs/operators/groupByTimeout');

export default class SSelectComponent extends mix(HTMLSelectElement).with(SWebComponentMixin) {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {
			onOpen : null,
			onClose : null,
			search : true,
			resetAllowed : true,
			searchPlaceholder : 'Search...',
			internalSearch : true,
			minCharactersForSearch : 3,
			screenMargin : 50
		}
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// utils variables
		this._openOnFocus = false;
		this._currentActiveOption = null; // save the current keyboard selected item

		// build html structure
		this._buildHTML();

		// display or not the search
		if ( ! this.props.search) {
			this._searchContainerElm.style.position = 'absolute';
			this._searchContainerElm.style.left = '-120vw';
		}

		// make sure when we click that we focus on the search field
		this._containerElm.addEventListener('click', (e) => {
			if (this.props.search) {
				this._searchFieldElm.focus();
			}
		});

		// prevent default behavior on click in options container
		this.optionsContainerElm.addEventListener('click', (e) => {
			e.preventDefault();
		});

		// open on click
		this._containerElm.addEventListener('click', (e) => {
			// do not open when the click is on an option
			if (this.hasComponentClass(e.target, 'option')) return;
			// open
			if ( ! this.isOpened()) {
				this.open();
			}
		});

		// prevent scroll into the options
		this.optionsContainerElm.addEventListener('mousewheel', (ev) => {
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
		this.addEventListener('open', (e) => {
			document.addEventListener('keyup', _onKeyUpFn);
			document.addEventListener('keydown', _onKeyDownFn);
			document.addEventListener('click', _onDocumentClick);
			window.addEventListener('scroll', _onScrollResizeFn);
			window.addEventListener('resize', _onScrollResizeFn);
		});
		this.addEventListener('close', (e) => {
			document.removeEventListener('keyup', _onKeyUpFn);
			document.removeEventListener('keydown', _onKeyDownFn);
			document.removeEventListener('click', _onDocumentClick);
			window.removeEventListener('scroll', _onScrollResizeFn);
			window.removeEventListener('resize', _onScrollResizeFn);
		});

		// listen for change on base select
		// to set the selected items
		this.addEventListener('change', (e) => {
			this._setSelected();
		});

		// listen for focus in search field to activate the field
		this._searchFieldElm.addEventListener('focus', (e) => {
			this._openOnFocus = true;
			this.open();
			setTimeout(() => {
				this._openOnFocus = false;
			}, 200);
		});

		// listen for keyup on search field
		let internalSearch = this.props.internalSearch;
		let search = this.props.search;
		const searchFieldFn = (e) => {
			// trigger custom event
			let event = new SEvent('search');
			this.dispatchEvent(event);
			// on search callback
			let onSearch = this.props.onSearch;
			if (onSearch) onSearch(e.target.value);
			// check if internal search
			this._search();
		}
		if (internalSearch && search) {
			this._searchFieldElm.addEventListener('keyup', searchFieldFn);
			this._searchFieldElm.addEventListener('search', searchFieldFn);
		}

		// observe all changes into the select
		// to refresh our custom one
		let removedTimeout = null;
		this._refreshObserver = __querySelectorLive('option, optgroup', {
			rootNode : this,
			onNodeRemoved : (node) => {
				clearTimeout(removedTimeout);
				removedTimeout = setTimeout(() => {
					this.refresh();
				});
			}
		}).notIn('optgroup').groupByTimeout().subscribe((elms) => {
			this.refresh();
		});

		// first refresh
		this.refresh();

		// hide the select
		this._hideRealSelect();
		// append the element right after the real select
		__insertAfter(this._containerElm, this);
	}

	/**
	 * Component will receive prop
	 * @definition 		SWebComponent.componentWillReceiveProp
	 */
	componentWillReceiveProp(name, newVal, oldVal) {

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
	 * Search
	 */
	_search() {
		// loop on each options
		[].forEach.call(this.optionsContainerElm.querySelectorAll(this.componentSelector('option')), (option) => {
			// check if is a value in the search field
			if (this._searchFieldElm.value && this._searchFieldElm.value.length >= this.props.minCharactersForSearch) {
				// check if we find the text in the option
				let regexp = new RegExp("(" + this._searchFieldElm.value + ")(?!([^<]+)?>)",'gi');
				// search the tokens in html
				let replace = option._s_innerHTML.replace(regexp, `<span class="${this.componentClassName('search-result')}">$1</span>`);
				if (option._s_innerHTML.match(regexp)) {
					option.innerHTML = replace;
				} else {
					// reset the activate item if need to be hided
					if (option == this._currentActiveOption) {
						this._currentActiveOption = null;
					}
					this.addComponentClass(option, 'option', null, 'hidden');
				}
			} else {
				option.innerHTML = option._s_innerHTML;
				this.removeComponentClass(option, 'option', null, 'hidden');
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
		if ( ! this._containerElm.contains(e.target)) {
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
				if (this._searchFieldElm.focus && this._searchFieldElm.value == '') {
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
			this.removeComponentClass(this._currentActiveOption, 'option', null, 'active');
			this._currentActiveOption.classList.remove('active');
		}
		// check if already an item is selected
		if ( ! this._currentActiveOption) {
			this._currentActiveOption = this.optionsContainerElm.querySelector(`${this.componentSelector('option')}:not(${this.componentSelector('option', 'disabled')}):not(${this.componentSelector('option', 'hidden')}):first-child`);
		} else {
			// try to get the next sibling
			const next = __next(this._currentActiveOption, `${this.componentSelector('option')}:not(${this.componentSelector('option', 'disabled')}):not(${this.componentSelector('option', 'hidden')})`);
			if (next) this._currentActiveOption = next;
		}
		// activate the element
		if (this._currentActiveOption) {
			this.addComponentClass(this._currentActiveOption, 'option', null, 'active');
			this._currentActiveOption.classList.add('active');
			// scroll view
			const currentScroll = this._currentActiveOption.parentNode.scrollTop;
			const optionHeight = this._currentActiveOption.offsetHeight;
			if (currentScroll + optionHeight <= this._currentActiveOption.parentNode.scrollHeight) {
				this._currentActiveOption.parentNode.scrollTop += optionHeight;
			}
		}
	}

	/**
	 * Select previous with keyboard
	 */
	_activatePrevious() {
		// remove active class if exist
		if (this._currentActiveOption) {
			this.removeComponentClass(this._currentActiveOption, 'option', null, 'active');
			this._currentActiveOption.classList.remove('active');
		}
		// check if already an item is selected
		if ( ! this._currentActiveOption) {
			this._currentActiveOption = this.optionsContainerElm.querySelector(`${this.componentSelector('option')}:not(${this.componentSelector('option', 'disabled')}):not(${this.componentSelector('option', 'hidden')}):last-child`);
		} else {
			// try to get the next sibling
			const previous = __previous(this._currentActiveOption, `${this.componentSelector('option')}:not(${this.componentSelector('option', 'disabled')}):not(${this.componentSelector('option', 'hidden')})`);
			if (previous) this._currentActiveOption = previous;
		}
		// activate the element
		if (this._currentActiveOption) {
			this.addComponentClass(this._currentActiveOption, 'option', null, 'active');
			this._currentActiveOption.classList.add('active');
			// scroll to item
			const currentScroll = this._currentActiveOption.parentNode.scrollTop;
			const optionHeight = this._currentActiveOption.offsetHeight;
			if (currentScroll - optionHeight >= 0) {
				this._currentActiveOption.parentNode.scrollTop -= optionHeight;
			}
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
		container.setAttribute('class', this.getAttribute('class'));
		this.addComponentClass(container);

		// multiple class
		if (this.getAttribute('multiple') != null) {
			this.addComponentClass(container, null, 'multiple');
		}

		let selection_container = document.createElement('div');
		this.addComponentClass(selection_container, 'selection-container');

		let selection_aligner = document.createElement('div');
		this.addComponentClass(selection_aligner, 'selection-aligner');

		let dropdown = document.createElement('div');
		this.addComponentClass(dropdown, 'dropdown');
		dropdown.style.fontSize = '1rem';

		// search
		let search_container = document.createElement('div');
		this.addComponentClass(search_container, 'search-container');

		// search field
		let search_field = document.createElement('input');
		search_field.setAttribute('type', 'search');
		if (search_field.type != 'search') {
			search_field.type = 'text';
		}
		search_field.setAttribute('placeholder', this.props.searchPlaceholder);
		this.addComponentClass(search_field, 'search-field');

		// reset
		let resetElm = null;
		if (this.props.resetAllowed) {
			resetElm = document.createElement('button');
			resetElm.setAttribute('type', 'button');
			resetElm.addEventListener('click', (e) => {
				e.preventDefault();
				this.reset();
			});
			this.addComponentClass(resetElm, 'reset');
		}

		// options
		let options_container = document.createElement('div');
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
	}

	/**
	 * Hide the select
	 */
	_hideRealSelect() {
		// keep it in the viewport to avoid issues
		// when trying to get the select that is in the viewport,
		// etc...
		__style(this, {
			position : 'absolute',
			width : 0,
			height : 0,
			padding : 0,
			opacity : .01,
			pointerEvents : 'none',
			zIndex : -1
		});
		this.tabIndex = -1;
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
		__dispatchEvent(this, 'change');
	}

	/**
	 * Set selected elements
	 */
	 _setSelected() {
	 	// loop on selected option to activate them
	 	let areSomeSelectedItems = false;
	 	[].forEach.call(this.options, (option) => {
	 		// apply the active class
	 		if (option._s_select_option) {
	 			if (option.selected) {
	 				if (option.innerHTML != '') {
	 					areSomeSelectedItems = true;
	 				}
					this.addComponentClass(option._s_select_option, 'option', null, 'selected');
	 			} else {
					this.removeComponentClass(option._s_select_option, 'option', null, 'selected');
	 			}
	 		}
	 	});
	 	// set the selection
	 	this.selectionContainerElm.innerHTML = '';
	 	if (this.isMultiple()) {
	 		// loop on each selected items
	 		[].forEach.call(this.options, (option) => {
	 			if (option.selected) {
	 				// get the content
	 				let content = option.innerHTML;
	 				// create the tag
	 				let tag = document.createElement('div');
					this.addComponentClass(tag, 'selection-tag');
	 				tag.innerHTML = content;
	 				let close = document.createElement('span');
					this.addComponentClass(close, 'selection-tag-close');
	 				close.addEventListener('click', (e) => {
	 					option.selected = false;
	 					// trigger change event
						let event = new SEvent('change');
						this.dispatchEvent(event);
	 				});
	 				tag.addEventListener('dblclick', (e) => {
	 					option.selected = false;
	 					// trigger change event
						let event = new SEvent('change');
						this.dispatchEvent(event);
	 				})
	 				tag.appendChild(close);
	 				this.selectionContainerElm.appendChild(tag);
	 			}
	 		});
	 	} else {
	 		// get the selected one
	 		let selected_idx = this.options.selectedIndex;
	 		if (selected_idx != -1) {
	 			// set the selected
	 			let selection = document.createElement('div');
				this.addComponentClass(selection, 'selection');
	 			selection.innerHTML = this.options[selected_idx].innerHTML;
	 			this.selectionContainerElm.appendChild(selection);
	 		}
	 	}

	 	if ( ! areSomeSelectedItems) {
	 		let placeholder = this.getAttribute('placeholder');
	 		if (placeholder) {
	 			let selection = document.createElement('div');
				this.addComponentClass(selection, 'selection');
	 			selection.classList.add('input--placeholder');
	 			selection.innerHTML = placeholder;
				this.addComponentClass(this._containerElm, null, 'placeholder');
	 			this.selectionContainerElm.appendChild(selection);
	 		}
	 	} else {
			this.removeComponentClass(this._containerElm, null, 'placeholder');
	 	}
	 }

	/**
	 * Set position
	 */
	_setPosition() {
		// get the position of the container
		let dropdownOffset = __offset(this._dropdownElm);
		let dropdownTop = dropdownOffset.top - __scrollTop();
		let containerTop = __offset(this._containerElm).top - __scrollTop();
		let dropdownFullHeight = this.optionsContainerElm.scrollHeight + this._searchContainerElm.offsetHeight;
		let optionsFullHeight = this.optionsContainerElm.scrollHeight;
		let optionsHeight = this.optionsContainerElm.offsetHeight;
		let screenMargin = this.props.screenMargin;
		let optionsMinHeight = parseInt(window.getComputedStyle(this.optionsContainerElm).getPropertyValue('min-height'));

		// check if the min-height has been reached
		if ( containerTop + this._containerElm.offsetHeight + this._searchContainerElm.offsetHeight + optionsMinHeight + screenMargin > window.innerHeight) {
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
	}

	/**
	 * Handle optgroup
	 */
	_handleOptgroup(_optgroup) {
		// create the choice
		let option = document.createElement('div');
		this.addComponentClass(option, 'optgroup');

		// get the content
		let content = _optgroup.getAttribute('label');

		// get the content
		let source = _optgroup.getAttribute(`${this.componentNameDash}-option-source`);
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
		let content = _option.innerHTML;

		// get the content
		let source = _option.getAttribute(`${this.componentNameDash}-option-source`);
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
		this.optionsContainerElm.appendChild(option);
	}

	/**
	 * Refresh
	 */
	refresh() {
		// empty the options
		let options_parent = this.optionsContainerElm.parentNode;
		options_parent.removeChild(this.optionsContainerElm);
		this.optionsContainerElm.innerHTML = '';

		// create the options tree
		[].forEach.call(this.querySelectorAll(':scope > option, :scope > optgroup'), (elm) => {
			// handle option
			this._handleOption(elm);
		}, this);

		// set selected the first time
		this._setSelected();

		// append again in dom the options
		options_parent.appendChild(this.optionsContainerElm);

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
	 * Reset the select
	 */
	reset() {
		this.selectedIndex = -1;
		this.refresh();
		__dispatchEvent(this, 'change');
		__dispatchEvent(this, 'reset');
	}

	/**
	 * Remove last
	 */
	removeLast() {
		let last = null;
		[].forEach.call(this.options, (option) => {
			if (option.selected) {
				last = option;
			}
		});
		// unselect the last
		if (last) {
			last.selected = false;
			// trigger change event
			let event = new SEvent('change');
			this.dispatchEvent(event);
		}
	}

	/**
	 * Is multiple
	 */
	isMultiple() {
		return this.hasAttribute('multiple');
	}

	/**
	 * Is opened
	 */
	isOpened() {
		return this.hasComponentClass(this._containerElm, null, null, 'opened');
	}

	/**
	 * Close
	 */
	close() {
		this.removeComponentClass(this._containerElm, null, null, 'opened');

		// unactivate the option if one exist
		if (this._currentActiveOption) {
			this.removeComponentClass(this._currentActiveOption, 'option', null, 'active');
		}
		// remove the dropup class
		this._clearDropupTimeout = setTimeout(() => {
			this.removeComponentClass(this._containerElm, null, 'dropup');
		},500);
		// dispatch close event
		let event = new SEvent('close');
		this.dispatchEvent(event);
		// handle onClose callback
		let onClose = this.props.onClose;
		if (onClose) { onClose(); }
	}

	/**
	 * Close
	 */
	open() {
		this.addComponentClass(this._containerElm, null, null, 'opened');
		// set position
		clearTimeout(this._clearDropupTimeout);
		this._setPosition();
		// dispatch open event
		let event = new SEvent('open');
		this.dispatchEvent(event);
		// manage onOpen callback
		let onOpen = this.props.onOpen;
		if (onOpen) { onOpen(); }
	}
}

// STemplate integration
sTemplateIntegrator.registerComponentIntegration('SSelectComponent', (component) => {
	sTemplateIntegrator.ignore(component._containerElm);
	sTemplateIntegrator.ignore(component, {
		style : true
	});
});
