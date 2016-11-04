import SWebComponent from '../../../js/core/SWebComponent'

export default class STooltipComponent extends SWebComponent {

	/**
	 * @constructor
	 */
	constructor() { super(); }

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 */
	static get physicalProps() {
		return ['align','color'];
	}

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {
			/**
			 * Set the tooltip alignement (tl|t|tr|l|c|r|bl|b|br)
			 * @prop
			 * @physicalProp
			 * @type 			{String}
			 */
			align : 't',

			/**
			 * Set the sugar color to use for the badge.
			 * @prop
			 * @physicalProp
			 * @type 			{String}
			 */
			color : 'default'
		}
	}

}
