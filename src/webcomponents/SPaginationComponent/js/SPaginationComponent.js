import SWebSTemplateComponent from '../../../js/core/SWebSTemplateComponent'
import __getAnimationProperties from '../../../js/dom/getAnimationProperties'
import __style from '../../../js/dom/style'
import Flatpickr from 'flatpickr/dist/flatpickr'
import __dispatchEvent from '../../../js/dom/dispatchEvent'
import _get from 'lodash/get'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'
import __formSerialize from 'form-serialize'
import __sendForm from '../../../js/dom/sendForm'

export default class SPaginationComponent extends SWebSTemplateComponent {

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

		}
	}

	/**
	 * Default template data
	 * @definition 		SWebTemplateComponent.defaultTemplateData
	 */
	static get defaultTemplateData() {
		return {

		};
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 */
	static get physicalProps() {
		return []
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();


	}

	/**
	 * Unmount component
	 * @definition 		SWebComponent.componentUnmount
	 */
	componentUnmount() {
		super.componentUnmount();
	}
}

// STemplate integration
sTemplateIntegrator.registerComponentIntegration('SPaginationComponent', (component) => {

});
