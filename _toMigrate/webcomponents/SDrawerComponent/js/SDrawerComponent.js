import SWebComponent from '../../../js/core/SWebComponent'
import __getTransitionProperties from '../../../js/dom/getTransitionProperties'

export default class SDrawerComponent extends SWebComponent {

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
			name : null,
			closeOnClick : true,
			handleHash : true,
		}
	}

	/**
	 * Required props
	 * @definition 		SWebComponent.requiredProps
	 */
	static get requiredProps() {
		return ['name'];
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// try to find the drawer background
		this.bkg = document.querySelector(`${this._componentNameDash}-bkg[for="${this.props.name}"]`);
		if ( ! this.bkg) {
			this.bkg = document.createElement(`${this._componentNameDash}-bkg`);
			this.mutate(() => {
				this.bkg.setAttribute('for', this.props.name);
				// insert in the page
				this.parentElement.insertBefore(this.bkg, this.parentElement.firstChild);
			});
		}

		// try to find the drawer overlay
		this.overlay = document.querySelector(`label[is="${this._componentNameDash}-overlay"][for="${this.props.name}"]`);
		if ( ! this.overlay) {
			this.overlay = document.createElement('label');
			this.overlay.setAttribute('for', this.props.name);
			this.overlay.setAttribute('is', `${this._componentNameDash}-overlay`);
			this.mutate(() => {
				// insert in the page
				this.parentElement.insertBefore(this.overlay, this.parentElement.firstChild);
			});
		}

		// try to find the toggle
		this.toggle = document.querySelector(`input[is="${this._componentNameDash}-toggle"][name="${this.props.name}"]`);
		if ( ! this.toggle) {
			this.toggle = document.createElement('input');
			this.toggle.setAttribute('name', this.props.name);
			this.toggle.setAttribute('id', this.props.name);
			this.toggle.setAttribute('type', 'checkbox');
			this.toggle.setAttribute('is', `${this._componentNameDash}-toggle`);
			this.mutate(() => {
				// insert into page
				this.parentElement.insertBefore(this.toggle, this.parentElement.firstChild);
			});
		}

		// listen for change on the toggle
		this.toggle.addEventListener('change', (e) => {
			let name = e.target.name;
			this.mutate(() => {
				if (e.target.checked) {
					document.body.classList.add(`${this._componentNameDash}-${this.props.name}`);
				} else {
					document.body.classList.remove(`${this._componentNameDash}-${this.props.name}`);
				}
			});
		});

		// listen for click on links into the drawer to close it
		if (this.props.closeOnClick) {
			this.addEventListener('click', (e) => {
				if (e.target.nodeName.toLowerCase() == 'a') {
					// close the drawer
					this.close();
				}
			});
		}

		// if handle hach
		if (this.props.handleHash) {
			if (document.location.hash) {
				let hash = document.location.hash.substr(1);
				if (hash == this.props.name) {
					this.open();
				}
			}
		}
	}

	/**
	 * Open
	 */
	open() {
		// check the toggle
		this.mutate(() => {
			this.toggle.setAttribute('checked', true);
			document.body.classList.add(`${this._componentNameDash}-${this.props.name}`);
		});
		return this;
	}

	/**
	 * Close
	 */
	close() {
		// uncheck the toggle
		this.mutate(() => {
			this.toggle.removeAttribute('checked');
		});

		const transition = __getTransitionProperties(this);
		setTimeout(() => {
			this.mutate(() => {
				document.body.classList.remove(`${this._componentNameDash}-${this.props.nane}`);
			});
		}, transition.totalDuration);
		return this;
	}

	/**
	 * Check if is opened
	 */
	isOpen() {
		return (this.toggle.checked);
	}
}
