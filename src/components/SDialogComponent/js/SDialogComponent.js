/*
 * SDialogComponent.js
 *
 * Component that allows to stick an element to the top of the screen
 *
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  25.07.16
 * @updated  25.07.16
 * @version  1.0.0
 */
import SComponent from '../../../js/core/SComponent'
import __querySelectorLive from '../../../js/dom/querySelectorLive';
import __scrollTop from '../../../js/dom/scrollTop'
import __offset from '../../../js/dom/offset'
import __strToHtml from '../../../js/utils/string/strToHtml'
import __getAnimationProperties from '../../../js/dom/getAnimationProperties'
import __style from '../../../js/dom/style'
import __insertAfter from '../../../js/dom/insertAfter'
import __dispatchEvent from '../../../js/dom/dispatchEvent'
import SAjax from '../../../js/classes/SAjax'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'


class SDialogComponent extends SComponent {

	/**
	 * Counter
	 */
	static counter = 0;

	/**
	 * _content
	 * Store the content of the dialog.
	 * The content is getted either from the s-dialog attribute itself, either from an href attribute or from the element DOM itself¨
	 * @type 	{HTML}
	 */
	_content = null;

	/**
	 * _html
	 * Store the html representation of the dialog
	 * @type 	{HTMLElement}
	 */
	_html = null;

	/**
	 * _allowModalClose
	 * Define if we can close the dialog when the modal setting is true
	 * @type 	{Boolean}
	 */
	_allowModalClose = false;

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sDialog') {
		super(elm, {

			/**
			 * content
			 * Specify the content to use for the dialog
			 * Can be an html id selector like "#myCoolContent"
			 * an url to load by through ajax like "myCoolContent.html"
			 * a mix like "myCoolContent.html#myCoolContent"
			 * or nothing. In this case, the element itself will be the dialog content
			 * @type 	{String}
			 */
			content : '@',

			/**
			 * The dialog id that can be used to open the dialog through the url hash
			 * @setting
			 * @type 		{String}
			 * @default 	null
			 */
			id : '@id',

			/**
			 * modal
			 * Specify if the dialog is a modal or not
			 * @type 	{Boolean}
			 */
			modal : false,

			/**
			 * onOpen
			 * Callback when the modal opens
			 * @type 	{Function}
			 */
			onOpen : null,

			/**
			 * openOn
			 * Set when to open the dialog
			 * This can be 'click'|'hover'|'init'
			 * @type 	{String}
			 */
			openOn : 'click',

			...settings

		}, name);
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();

		// get the content string
		this.settings.content = this.settings.content || this.elm.getAttribute('href');

		// check hash change
		if (this.settings.id) {
			this._processHashChange();
			window.addEventListener('hashchange', (e) => {
		 		this._processHashChange();
			});
			window.addEventListener('popstate', (e) => {
				this._processHashChange();
			});
		}

		// handle openOn
		switch(this.settings.openOn) {
			case 'click':
				this.elm.addEventListener('click', (e) => {
					e.preventDefault();
					this.open();
				});
			break;
			case 'hover':
				this.elm.addEventListener('mouseover', (e) => {
					e.preventDefault();
					this.open();
				});
			break;
			case 'init':
				this.open();
			break;
		}
	}

	/**
	 * Process hash change
	 */
	_processHashChange() {
		clearTimeout(this._processHashChangeTimeout);
		this._processHashChangeTimeout = setTimeout(() => {
			const hash = document.location.hash;
			// if (! hash) return;
			if (hash && hash.substr(1) === this.settings.id) {
				this.open();
			} else if (this.isOpened()){
				this.close();
			}
		});
		// console.log('hash', hash);
	}

	/**
	 * Open the dialog
	 */
	open(content = null) {

		// id has an id, set it as hash
		if (this.settings.id
			&& (! document.location.hash
				|| document.location.hash.substr(1) !== this.settings.id
			)
		) {
			window.history.pushState({},null,`${document.location.search || ''}#${this.settings.id}`);
			// __dispatchEvent(window, 'hashchange');
		}

		// return a new promise
		return new Promise((resolve, reject) => {

			// save the resolve and reject promise callbacks to use them later
			this._resolve = resolve;
			this._reject = reject;

			// get content from passed parameter or settings
			content = content || this.settings.content;

			// try to load the content only if not already loaded
			if ( ! this._content) {

				// try to get the content of the dialog
				if ( ! content) {
					// the content of the dialog is the element itself
					this._content = this.elm;
					// open
					this._open();
				} else if (content.nodeName) {
					// the content if an HTMLElement
					this._content = content;
					// open
					this._open();
				} else if (content.substr(0,1) === '#') {
					// the content of the dialog is an element in the page
					this._content = document.querySelector(content);
					// open
					this._open();
				} else {
					// the content of the dialog is an ajax resource
					const ajx = new SAjax({
						url : content,
						method : 'GET',
						dataType : 'html'
					});
					ajx.send().then((response) => {
						// set the content
						this._content = response;
						// open
						this._open();
					});
				}
			} else {
				// the content has already been loaded once
				this._open();
			}

			// listen for escape key
			document.addEventListener('keyup', this._onKeyup.bind(this));

		});
	}

	/**
	 * Real open method that create the DOM content
	 */
	_open() {

		// add the body class
		this.addComponentClass(document.body, null, null, 'opened');

		// add the class on the element itself¨
		this.addComponentClass(this.elm, null, null, 'opened');

		// open counter
		SDialogComponent.counter++;

		// create the DOM structure
		if ( ! this._template) {

			this._html = __strToHtml(`
				<div class="${this.componentClassName()}" style="display: block; position: fixed; top: 0px; left: 0px; width: 100%; height: 100vh; overflow: auto; text-align: center; white-space: nowrap;">
					<div name="overlay" class="${this.componentClassName('overlay')}" style="position:fixed; top:0; left:0; width:100%; height:100%;"></div>
					<div style="width:0px; height:100%; display:inline-block; vertical-align:middle;"></div>
					<div name="content" class="${this.componentClassName('content')}" style="display: inline-block; text-align: left; margin: 0px auto; position: relative; vertical-align: middle; white-space: normal;" s-template-do-not-update>
						<!-- content will be here... -->
					</div>
					<div name="close" class="${this.componentClassName('close')}"></div>
				</div>
			`);

			this.refs = {
				elm : this._html,
				overlay : this._html.querySelector('[name="overlay"]'),
				content : this._html.querySelector('[name="content"]'),
				close : this._html.querySelector('[name="close"]')
			}

			// listen for click on the overlay
			// to close the dialog
			this.refs.overlay.addEventListener('click', (e) => {
				this.close(false);
			});
			this.refs.close.addEventListener('click', (e) => {
				this.close(false);
			});
			// if not a modal, make the cursor pointer on the overlay
			if ( ! this.settings.modal) {
				__style(this.refs.overlay, {
					cursor : 'pointer'
				});
			}
		}

		// set the content into the content of the template
		if (typeof(this._content) === 'string') {
			this.refs.content.innerHTML = this._content;
		} else if (this._content.nodeName !== undefined) {

			// try to save the position into dom to restore it on close
			if (this._content.parentNode) {
				this._domRestorePlaceholder = document.createElement('div');
				this._domRestorePlaceholder.setAttribute('s-dialog-restore-placeholder',true);
				__insertAfter(this._domRestorePlaceholder, this._content);
			}

			// append the content into the dialog
			this.refs.content.appendChild(this._content);
		}

		// try to find the s-dialog-ok and the s-dialog-cancel elements
		const okElms = this.refs.content.querySelectorAll(`[${this.componentNameDash}-ok]`);
		if (okElms.length) {
			[].forEach.call(okElms, (elm) => {
				if ( ! elm._SDialogCancelClickListener) {
					const value = elm.getAttribute(`${this.componentNameDash}-ok`);
					elm._SDialogCancelClickListener = true;
					elm.addEventListener('click', (e) => {
						this.ok(value);
					});
				}
			});
		}
		const cancelElms = this.refs.content.querySelectorAll(`[${this.componentNameDash}-cancel]`);
		if (cancelElms.length) {
			[].forEach.call(cancelElms, (elm) => {
				if ( ! elm._SDialogOkClickListener) {
					const value = elm.getAttribute(`${this.componentNameDash}-cancel`);
					elm._SDialogOkClickListener = true;
					elm.addEventListener('click', (e) => {
						this.cancel(value);
					});
				}
			});
		}

		// add the dialog to the body
		document.body.appendChild(this._html);

		this.settings.onOpen && this.settings.onOpen(this);

	}

	/**
	 * onKeyup
	 */
	_onKeyup(e) {
		e.preventDefault();
		// check if is escape key
		switch(e.keyCode) {
			case 27: // escape
				if (this.settings.modal) {
					this.close(false);
				} else {
					this.cancel(null);
				}
			break;
		}
	}

	/**
	 * Close
	 */
	close(force = true) {

		// check if is a modal
		if (this.settings.modal
			&& ! this._allowModalClose
			&& ! force) return;

		// reset the hash
		if (this.settings.id) {
			window.history.pushState(null, document.title, `${document.location.search || ''}#`);
			// __dispatchEvent(window, 'hashchange');
		}

		// add the out class to the dialog
		this.addComponentClass(this.refs.elm, null, null, 'out');

		// get animation properties
		const animationProperties = __getAnimationProperties(this.refs.elm);

		// do not listen for keyup anymore
		document.removeEventListener('keyup', this._onKeyup);

		// remove the class on the element itself
		this.removeComponentClass(this.elm, null, null, 'opened');

		// wait end animation to remove the dialog
		setTimeout(() => {

			// restore the place of the content if is a placeholder
			if (this._domRestorePlaceholder
				&& this._content.nodeName) {
				__insertAfter(this._content, this._domRestorePlaceholder);
				this._domRestorePlaceholder.parentNode.removeChild(this._domRestorePlaceholder);
			}

			// remove the out class
			this.removeComponentClass(this.refs.elm, null, null, 'out');

			// remove the container from the dom
			if (this._html) {
				this._html.parentNode.removeChild(this._html);
			}

			// update counter
			if ( SDialogComponent.counter > 0) {
				SDialogComponent.counter--;
			}
			// if no more dialog opened, remove the body class
			if (SDialogComponent.counter <= 0) {
				this.removeComponentClass(document.body, null, null, 'opened');
			}

		}, animationProperties.totalDuration);
	}

	/**
	 * Ok
	 * Validate the modal
	 */
	ok(value = null) {
		if ( ! this.isOpened()) return;
		// resolve the promise if exist
		if (this._resolve)
			this._resolve(value);
		// close the dialog
		this.close(true);
	}

	/**
	 * Cancel
	 * Cancel the modal by rejecting the promise
	 */
	cancel(value = null) {
		if ( ! this.isOpened()) return;
		// reject the promise if exist
		if (this._reject)
			this._reject(value);
		// close the dialog
		this.close(true);
	}

	/**
	 * Check if is opened
	 * @return 	{Boolean} 	If is opened or not
	 */
	isOpened() {
		return this.hasComponentClass(this.elm, null, null, 'opened');
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SDialogComponent = SDialogComponent;

// export
export default SDialogComponent;
