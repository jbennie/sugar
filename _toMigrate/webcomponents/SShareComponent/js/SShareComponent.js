import SWebComponent from '../../../js/core/SWebComponent'
import Sharer from 'sharer.npm.js'
import sTemplateIntegrator from '../../../js/core/sTemplateIntegrator'

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
			 * @default 	document.title
			 */
			title : null,

			/**
			 * Set the url to share
			 * @prop
			 * @type 		{String}
			 * @default 	document.location.href
			 */
			url : null,

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
			 * @default 	document.title
			 */
			subject : null,

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
			 * @default 	meta[description]
			 */
			description : null,

			/**
			 * Set the caption to share (tumblr,vk)
			 * @prop
			 * @type 		{String}
			 * @default 	document.title
			 */
			caption : null,

			/**
			 * Set the tags to share comma separated (tumblr)
			 * @prop
			 * @type 		{String}
			 */
			tags : null
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

		// set cursor
		this.style.cursor = 'pointer';

		// list all attributes available for each platforms
		this._platformAttrs = {
			twitter : ['title','url','hashtags','via'],
			facebook : ['url'],
			linkedin : ['url'],
			googleplus : ['url'],
			email : ['title','url','to','subject'],
			whatsapp : ['title','url'],
			telegram : ['title','url'],
			viber : ['title','url'],
			pinterest : ['url','image','description'],
			tumblr : ['url','title','caption','tags'],
			hackernews : ['url','title'],
			reddit : ['url'],
			vk : ['url','title','image','caption'],
			buffer : ['url','title','via','picture'],
			xing : ['url','title'],
			line : ['url','title'],
			instapaper : ['url','title','description'],
			pocket : ['url'],
			digg : ['url'],
			stumbleupon : ['title','url'],
			flipboard : ['title','url'],
			weibo : ['url','title','image','apikey','relateui'],
			renren : ['url'],
			myspace : ['url','title','description'],
			blogger : ['url','title','description'],
			baidu : ['url','title'],
			okru : ['url','title']
		};

		// listen for click on the element
		this.addEventListener('click', this._onClick.bind(this));
	}

	/**
	 * Get default share attributes
	 * @param 		{String} 		attr 		The attribute name to process
	 * @return 		{String} 					The default attribute
	 */
	_getDefaultShareAttriute(attr) {
		switch(attr) {
			case 'title':
			case 'subject':
			case 'caption':
				return document.title;
			break;
			case 'description':
				const descElm = document.querySelector('meta[name="description"]');
				if (descElm && descElm.content) return descElm.content;
			break;
			case 'url':
				let href = this.getAttribute('href');
				return (href && href !== '#') ? href : document.location.href;
			break;
		}
		return null;
	}

	/**
	 * Handle click
	 * @param 		{Event} 		e 		The click event
	 */
	_onClick(e) {
		// loop on platform attributes
		if ( ! this._platformAttrs[this.props.platform]) return;
		e.preventDefault();
		this.setAttribute('data-sharer', this.props.platform);
		this._platformAttrs[this.props.platform].forEach((attr) => {
			if (this.hasAttribute(`data-${attr}`)) return;
			let val = this.props[attr];
			if ( ! val) {
				val = this._getDefaultShareAttriute(attr);
			}
			if (val) {
				this.setAttribute(`data-${attr}`, val);
			}
		});

		// create a new sharer
		const sharer = new Sharer(this);
		sharer.share();
	}
}

sTemplateIntegrator.registerComponentIntegration(SShareComponent, (component) => {
	sTemplateIntegrator.ignore(component, {
		style : true
	});
});
