import SWebComponent from '../../../js/core/SWebComponent'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'
import SAjax from '../../../js/classes/SAjax'
import __strToHtml from '../../../js/utils/string/strToHtml'
import __insertAfter from '../../../js/dom/insertAfter'
import __style from '../../../js/dom/style'
import __getAnimationProperties from '../../../js/dom/getAnimationProperties'
import __sendForm from '../../../js/dom/sendForm'

export default class SDialogComponent extends SWebComponent {

	/**
	 * Store the number of dialogs opened in the page
	 * @type 	{Integer}
	 */
	static counter = 0;

	/**
	 * Store the content of the dialog.
	 * The content is getted either from the s-dialog attribute itself, either from an href attribute or from the element DOM itself¨
	 * @type 	{Mixed}
	 */
	_content = null;

	/**
	 * Store the html representation of the dialog
	 * @type 	{HTMLElement}
	 */
	_html = null;

	/**
	 * Define if we can close the dialog when the modal setting is true
	 * @type 	{Boolean}
	 */
	_allowModalClose = false;


	/**
	 * @constructor
	 */
	constructor() { super(); }

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {

			/**
			 * Specify the element that will trigger the dialog
			 * @prop
			 * @type 		{String}
			 */
			for : null,

			/**
			 * Specify the content to use for the dialog
			 * Can be an html id selector like "#myCoolContent"
			 * an url to load by through ajax like "myCoolContent.html"
			 * a mix like "myCoolContent.html#myCoolContent"
			 * or nothing. In this case, the element itself will be the dialog content
			 * @prop
			 * @type 	{String}
			 */
			content : null,

			/**
			 * The dialog id that can be used to open the dialog through the url hash
			 * @prop
			 * @type 		{String}
			 */
			id : null,

			/**
			 * Specify if the dialog is a modal or not
			 * @prop
			 * @type 	{Boolean}
			 */
			modal : false,

			/**
			 * Callback when the modal opens
			 * @prop
			 * @type 	{Function}
			 */
			onOpen : null,

			/**
			 * Specify if the modal is opened or not
			 * @prop
			 * @physicalProps
			 * @type 	{Boolean}
			 */
			opened : false,

			/**
			 * Set when to open the dialog
			 * This can be 'click'|'hover'|'init'
			 * @prop
			 * @type 	{String}
			 */
			openOn : 'click'
		}
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 */
	static get physicalProps() {
		return ['opened'];
	}

	/**
	 * Component css
	 */
	static css(componentName, componentNameDash) {
		return `
			body.${componentNameDash}--opened {
				overflow: hidden;
			}
			.${componentNameDash} {
				display : block;
				position : fixed;
				top : 0; left: 0;
				width : 100%; height : 100%;
				overflow : auto;
				text-align : center;
				white-space : nowrap;
				z-index:9999;
			}
			.${componentNameDash}__overlay {
				position:fixed;
				top:0;
				left:0;
				width:100%;
				height:100%;
			}
			.${componentNameDash}__aligner {
				width:0px; height:100%; display:inline-block; vertical-align:middle;
			}
			.${componentNameDash}__content {
				display: inline-block; text-align: left; margin: 0px auto; position: relative; vertical-align: middle; white-space: normal;
			}
		`;
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// check the for prop
		if (this.props.for) {
			this._triggerer = document.querySelector(`[name="${this.props.for}"],#${this.props.for}`);
		} else if (this.children && this.children.length === 1 && this.children[0] && this.children[0].tagName.toLowerCase() === 'a') {
			this._triggerer = this.children[0];
		} else {
			this._triggerer = this;
		}

		// check hash change
		if (this.props.id) {
			this._processHashChange();
			window.addEventListener('hashchange', (e) => {
		 		this._processHashChange();
			});
			window.addEventListener('popstate', (e) => {
				this._processHashChange();
			});
		}

		// check the triggerer if a form, mean that we need to open the
		// dialog on submit
		if (this._triggerer.tagName.toLowerCase() === 'form') {
			this._triggerer.addEventListener('submit', (e) => {
				// check validity first
				if ( ! e.target.checkValidity()) return;
				// prevent default form behavior
				e.preventDefault();
				// send form
				__sendForm(e.target).then((response) => {
					// remove the cached content
					this._content = null;
					// open the dialog
					this.open(__strToHtml(response));
				});
			});
		} else {
			// handle openOn
			switch(this.props.openOn) {
				case 'click':
					this._triggerer.addEventListener('click', (e) => {
						e.preventDefault();
						this.open();
					});
				break;
				case 'hover':
					this._triggerer.addEventListener('mouseover', (e) => {
						e.preventDefault();
						this.open();
					});
				break;
				case 'init':
					this._triggerer.addEventListener('click', (e) => {
						e.preventDefault();
					})
					this.open();
				break;
			}
		}
	}

	/**
	 * Component will receive prop
	 * @definition 		SWebComponent.componentWillReceiveProp
	 */
	componentWillReceiveProp(name, newVal, oldVal) {
		switch(name) {
			case 'opened':
				if (newVal) this._open();
				else this._close();
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
			if (hash && hash.substr(1) === this.props.id) {
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
		if (this.props.id
			&& (! document.location.hash
				|| document.location.hash.substr(1) !== this.props.id
			)
		) {
			window.history.pushState({},null,`${document.location.pathname || ''}${document.location.search || ''}#${this.props.id}`);
			// __dispatchEvent(window, 'hashchange');
		}

		// return a new promise
		return new Promise((resolve, reject) => {

			// save the resolve and reject promise callbacks to use them later
			this._resolve = resolve;
			this._reject = reject;

			// get content from passed parameter or settings
			content = content || this.props.content || this._triggerer.getAttribute('href');

			// try to load the content only if not already loaded
			if ( ! this._content) {

				// try to get the content of the dialog
				if ( ! content) {
					// the content of the dialog is the element itself
					this._content = this;
					// open
					this.setProp('opened', true);
				} else if (content.nodeName) {
					// the content if an HTMLElement
					this._content = content;
					// open
					this.setProp('opened', true);
				} else if (content.substr(0,1) === '#') {
					// the content of the dialog is an element in the page
					this._content = document.querySelector(content);
					// open
					this.setProp('opened', true);
				} else {
					// the content of the dialog is an ajax resource
					const ajx = new SAjax({
						url : content,
						method : 'GET'
					});
					ajx.send().then((response) => {
						// set the content
						this._content = response;
						// open
						this.setProp('opened', true);
					});
				}
			} else {
				// the content has already been loaded once
				this.setProp('opened', true);
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
		document.body.classList.add(`${this._componentNameDash}--opened`);

		// open counter
		SDialogComponent.counter++;

		// create the DOM structure
		if ( ! this._template) {

			this._html = __strToHtml(`
				<div class="${this._componentNameDash}">
					<div name="overlay" class="${this._componentNameDash}__overlay"></div>
					<div class="${this._componentNameDash}__aligner"></div>
					<div name="content" class="${this._componentNameDash}__content">
						<!-- content will be here... -->
					</div>
					<div name="close" class="${this._componentNameDash}__close"></div>
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
			if ( ! this.props.modal) {
				__style(this.refs.overlay, {
					cursor : 'pointer'
				});
			}

			// listen for close event
			this.refs.content.addEventListener(`${this._componentNameDash}:close`, (e) => {
				// close the dialog
				this.close();
			});
			this.refs.content.addEventListener(`${this._componentNameDash}:cancel`, (e, data = null) => {
				// close the dialog
				this.cancel(data);
			});
			this.refs.content.addEventListener(`${this._componentNameDash}:ok`, (e, data = null) => {
				// close the dialog
				this.ok(data);
			});
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
		const okElms = this.refs.content.querySelectorAll(`[${this._componentNameDash}-ok]`);
		if (okElms.length) {
			[].forEach.call(okElms, (elm) => {
				if ( ! elm._SDialogCancelClickListener) {
					const value = elm.getAttribute(`${this._componentNameDash}-ok`);
					elm._SDialogCancelClickListener = true;
					elm.addEventListener('click', (e) => {
						this.ok(value);
					});
				}
			});
		}
		const cancelElms = this.refs.content.querySelectorAll(`[${this._componentNameDash}-cancel]`);
		if (cancelElms.length) {
			[].forEach.call(cancelElms, (elm) => {
				if ( ! elm._SDialogOkClickListener) {
					const value = elm.getAttribute(`${this._componentNameDash}-cancel`);
					elm._SDialogOkClickListener = true;
					elm.addEventListener('click', (e) => {
						this.cancel(value);
					});
				}
			});
		}

		// add the dialog to the body
		document.body.appendChild(this._html);

		this.props.onOpen && this.props.onOpen(this);

	}

	/**
	 * onKeyup
	 */
	_onKeyup(e) {
		e.preventDefault();
		// check if is escape key
		switch(e.keyCode) {
			case 27: // escape
				if (this.props.modal) {
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
		if (this.props.modal
			&& ! this._allowModalClose
			&& ! force) return;

		// close
		this.setProp('opened', false);
	}

	/**
	 * Close
	 */
	_close() {
		// reset the hash
		if (this.props.id) {
			window.history.pushState(null, document.title, `${document.location.pathname || ''}${document.location.search || ''}#`);
			// __dispatchEvent(window, 'hashchange');
		}

		// add the out class to the dialog
		this.addComponentClass(this.refs.elm, null, null, 'out');

		// get animation properties
		const animationProperties = __getAnimationProperties(this.refs.elm);

		// do not listen for keyup anymore
		document.removeEventListener('keyup', this._onKeyup);

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
				document.body.classList.remove(`${this._componentNameDash}--opened`);
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
		try {
			if (this._resolve && value) {
				this._resolve(value);
			}
		} catch(e) {}
		// close the dialog
		this.close(true);
	}

	/**
	 * Cancel
	 * Cancel the modal by rejecting the promise
	 */
	cancel(value = null) {
		if ( ! this.isOpened()) return;
		try {
			// reject the promise if exist
			if (this._reject && value) {
				this._reject(value);
			}
		} catch(e) {}
		// close the dialog
		this.close(true);
	}

	/**
	 * Check if is opened
	 * @return 	{Boolean} 	If is opened or not
	 */
	isOpened() {
		return this.props.opened;
	}

}
