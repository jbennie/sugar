import SWebComponent from '../../../js/core/SWebComponent'
import Sharer from 'sharer.npm.js'

export default class SShareComponent extends SWebComponent {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 */
	static get defaultProps() {
		return {
			/**
			 * On which platform to share the content
			 * @prop
			 * @type 		{String}
			 */
			platform : null,

			/**
			 * Set the title to share
			 * @prop
			 * @type 		{String}
			 */
			title : document.title,

			/**
			 * Set the url to share
			 * @prop
			 * @type 		{String}
			 */
			title : document.location.href,

			/**
			 * Set a username to tweet through without @
			 * @prop
			 * @type 		{String}
			 */
			via : null,

			/**
			 * Set some hashtags to add to tweet comma separated without #
			 * @prop
			 * @type 		{String}
			 */
			hashtags : null,

			/**
			 * Set an email address to share to
			 * @prop
			 * @type 		{String}
			 */
			to : null,

			/**
			 * Set the email subject
			 * @prop
			 * @type 		{String}
			 */
			subject : document.title,

			/**
			 * Set the absolute image url to share through (pinterest,vk,weibo)
			 * @prop
			 * @type 		{String}
			 */
			image : null,

			/**
			 * Set the description to share (pinterest,instapaper,myspace,blogger,)
			 * @prop
			 * @type 		{String}
			 */
			description : null,

			/**
			 * Set the caption to share (tumblr,vk)
			 * @prop
			 * @type 		{String}
			 */
			caption : null,

			/**
			 * Set the tags to share comma separated (tumblr)
			 * @prop
			 * @type 		{String}
			 */
			tags : null,

			/**
			 * Set the title to share
			 * @prop
			 * @type 		{String}
			 */
			title : document.title
		}
	}

	/**
	 * Required props
	 * @definition 		SWebComponent.requiredProps
	 */
	static get requiredProps() {
		return ['platform'];
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 */
	componentMount() {
		super.componentMount();

		// listen for click on the element
		this.addEventListener('click', this._onClick.bind(this));

	}

	/**
	 * Handle click
	 * @param 		{Event} 		e 		The click event
	 */
	_onClick(e) {
		// set attributes on element
		for(let key in this.props) {
			if (key === 'platform') continue;
			if ( ! this.props[key] || this.hasAttribute(`data-${key}`)) continue;
			this.setAttribute(`data-${key}`, this.props[key]);
		}

		// create a new sharer
		const sharer = new Sharer(this);
		sharer.share();
	}
}
