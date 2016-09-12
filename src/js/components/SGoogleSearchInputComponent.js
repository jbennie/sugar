/*
 * SGoogleSearchInputComponent.js
 * This element allows you to manage same columns height very easily
 * @author   Olivier Bossel <olivier.bossel@gmail.com>
 * @created  04.07.16
 * @updated  04.07.16
 * @version  1.0.0
 */
import SComponent from '../core/SComponent'
import querySelectorLive from '../dom/querySelectorLive'
import imageLoaded from '../dom/imageLoaded';
import SDialogComponent from './SDialogComponent'

class SGoogleSearchInputComponent extends SComponent {

	/**
	 * Setup
	 */
	static setup(type, settings, name = 'sGoogleSearchInput') {
		SComponent.setup(name, type, settings);
	}

	/**
	 * Reference to all the columns by groups
	 * Store value format :
	 * groupId : {
	 * 		inProgress : false // set if an equalize in in progress on this group or not
	 * 		columns : [] // store all the columns
	 * }
	 */
	static columns = {};

	/**
	 * Lines stack
	 * Store values as :
	 * lineIdx : {
	 * 		height : ... // the height of the line
	 * 		columns : [] // all the columns in the line
	 * }
	 */
	lines = [];

	/**
	 * Equalizer element
	 * Store the element that will act as the equalizer inside the column itself
	 * This is optional and if not exist, the element height will be setted
	 */
	equalizerElm = null;

	/**
	 * Constructor
	 */
	constructor(elm, settings = {}, name = 'sGoogleSearchInput') {
		super(name, elm, {

			/**
			 * keywords
			 * @type 	{String}
			 */
			keywords : '@value'

		}, settings);
	}

	/**
	 * Init
	 */
	_init() {
		// init component
		super._init();
	}

	/**
	 * enable
	 * When the component is enabled
	 * @return 	{SGoogleSearchInputComponent}
	 */
	enable() {
		super.enable();
		this.elm.addEventListener('keyup', this._onKeyup.bind(this));
	}

	/**
	 * disable
	 * When the component is disabled
	 * @return 	{SGoogleSearchInputComponent}
	 */
	disable() {
		super.disable();
		this.elm.removeEventListener('keyup', this._onKeyup);
	}

	/**
	 * _onKeyup
	 * When the user has pressed a key into the field
	 * @param 	{Event} 	e 	The event
	 */
	_onKeyup(e) {
		console.log('keycode', e.keyCode);
		switch(e.keyCode) {
			case 13: // enter
				e.preventDefault();
				// create new dialog
				this._dialog = new SDialogComponent(document.createElement('div'));
				this._dialog.open('#google-search');
			break;
		}
	}
}

// expose in window.sugar
if (window.sugar == null) { window.sugar = {}; }
window.sugar.SGoogleSearchInputComponent = SGoogleSearchInputComponent;

// export
export default SGoogleSearchInputComponent;
