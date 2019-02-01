require('es6-object-assign').polyfill();

import { Mixin } from '../vendors/mixwith'
import __autoCast from '../utils/string/autoCast'
import _extend from 'lodash/extend'
import __camelize from '../utils/string/camelize'
import __uncamelize from '../utils/string/uncamelize'
import __upperFirst from '../utils/string/upperFirst'
import __fastdom from 'fastdom'
import __dispatchEvent from '../dom/dispatchEvent'
import __whenInViewport from '../dom/whenInViewport'
import __whenVisible from '../dom/whenVisible'
import __prependChild from '../dom/prependChild'
import __propertyProxy from '../utils/objects/propertyProxy'

/**
 * @name 		SWebComponent
 * @extends 	HTMLElement
 * Base class that abstract a lot of dirty work in order to create nice and clean webcomponents.
 * Features:
 * - Listen for attributes changes
 * - Mount the component at a certain point in time (inViewport, visible, etc...)
 * - **Automatically cast the attributes** to their proper js variable types (Array, Object, String, etc...)
 * - **Physical props** : Specify some props that will ALWAYS be present as attribute on the component for styling purpose
 * - Define some **default CSS** that will be injected in the head automatically
 * - Specify some **required props**
 * - **Full lifecycle management**:
 * 	- componentCreated
 * 	- componentWillMount
 * 	- componentMount
 * 	- componentWillReceiveProp
 * 	- componentWillReceiveProps
 * 	- render
 * 	- componentUnmount
 * - **Mount dependencies** : This will allows you to set some promises that have to be resolved before mounting the component
 *
 * @example 	js
 * import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
 * class MyCoolComponent extends SWebComponent {
 *
 *	\/**
 * 	 * Default props
 * 	 * @definition 		SWebComponent.defaultProps
 * 	 * @protected
 * 	 *\/
 * 	static get defaultProps() {
 * 		return {
 * 		};
 * 	}
 *
 * 	\/**
 * 	 * Css
 * 	 * @protected
 * 	 *\/
 * 	static defaultCss(componentName, componentNameDash) {
 * 		return `
 * 			${componentNameDash} {
 * 				display : block;
 * 			}
 * 		`;
 * 	}
 *
 * 	\/**
 * 	 * Component will mount
 *  	 * @definition 		SWebComponent.componentWillMount
 * 	 * @protected
 * 	 *\/
 * 	componentWillMount() {
 * 		super.componentWillMount();
 * 	}
 *
 * 	\/**
 * 	 * Mount component
 * 	 * @definition 		SWebComponent.componentMount
 * 	 * @protected
 * 	 *\/
 * 	componentMount() {
 * 		super.componentMount();
 * 	}
 *
 * 	\/**
 * 	 * Component unmount
 * 	 * @definition 		SWebComponent.componentUnmount
 * 	 * @protected
 * 	 *\/
 * 	componentUnmount() {
 * 		super.componentUnmount();
 * 	}
 *
 * 	\/**
 * 	 * Component will receive prop
 * 	 * @definition 		SWebComponent.componentWillReceiveProp
 * 	 * @protected
 * 	 *\/
 * 	componentWillReceiveProp(name, newVal, oldVal) {
 * 		switch(name) {
 * 		}
 * 	}
 * }
 *
 * // define your component
 * MyCoolComponent.define('my-cool-component', MyCoolComponent);
 *
 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
 */

if ( ! window.sugar) window.sugar = {};
if ( ! window.sugar._webComponentsClasses) window.sugar._webComponentsClasses = {};
if ( ! window.sugar._webComponentsDefaultProps) window.sugar._webComponentsDefaultProps = {};
if ( ! window.sugar._webComponentsDefaultCss) window.sugar._webComponentsDefaultCss = {};

const SWebComponentMixin = Mixin((superclass) => class extends superclass {

	/**
	 * Define the new web component
	 * @param 			{String} 			name 		The name of the component
	 * @param 			{Object|String} 	[componentClassOrExt=null] 	The component class or the HTML tag to extend like "input", "button", etc...
	 * @param 			{Object|String}		ext 		The HTML tag to extend like "input", "button", etc...
	 */
	static define(name, componentOrExt = null, ext = null) {

		const component = (componentOrExt && typeof componentOrExt !== 'string') ? componentOrExt : this;
		const componentName = __upperFirst(__camelize(name));
		const componentNameDash = name;

		ext = (typeof componentOrExt === 'string') ? componentOrExt : ext;

		if (window.sugar._webComponentsClasses[componentName]) return;
		window.sugar._webComponentsClasses[componentName] = component;

		// register the webcomponent
		if (window.customElements) {
			const extendsObj = {};
			if (ext) {
				extendsObj.extends = ext;
			}
			window.customElements.define(name, component, extendsObj);
		} else if (document.registerElement) {
			document.registerElement(name, {
				prototype : component.prototype,
				extends : ext
			});
		} else {
			throw `Your browser does not support either document.registerElement or window.customElements.define webcomponents specification...`;
		}

		// create a proxy factory
		const webcomponent = function(props = {}) {
			if (ext) {
				return document.createElement(ext, name).setProps(props);
			}
			return document.createElement(name).setProps(props);
		}

		// fix for firefox and surely other crapy browser...
		// this make sur that the (static) methods of the component
		// are present on the webcomponent itself
		let staticFns = [];
		let comp = component;
		while(comp) {
			try {
				staticFns = staticFns.concat(
					Object.getOwnPropertyNames(comp).filter(prop => typeof comp[prop] === "function")
				);
				comp = Object.getPrototypeOf(comp);
			} catch(e) {
				break;
			}
		}
		const keys = staticFns.concat(Object.keys(component));
		keys.forEach(function (key) {
			if (!webcomponent[key]) {
				webcomponent[key] = component[key];
			}
		});

		// handle css
		component._injectDefaultCss(component, componentName, componentNameDash);

		// return the webcomponent instance
		return webcomponent;
	}

	/**
	 * Inject css into html
	 * @param 		{HTMLElement}	componentClass 		The component class for which to inject the base css
	 * @param 		{String} 		componentName 		The component name
	 * @param 		{String} 		componentNameDash 	The dash formated component name
	 */
	static _injectDefaultCss(componentClass, componentName, componentNameDash) {
		// check if component has a css to be injected into the page
		if (window.sugar._webComponentsDefaultCss[componentName] === undefined) {
			let css = '';
			let comp = componentClass;
			while(comp) {
				if (comp.defaultCss) {
					css += comp.defaultCss(componentName, componentNameDash);
				}
				comp = Object.getPrototypeOf(comp);
			}
			if (css) {
				css = css.replace(/[\s]+/g,' ');
				window.sugar._webComponentsDefaultCss[componentName] = css;
				const styleElm = document.createElement('style');
				styleElm.setAttribute('name', componentName);
				styleElm.innerHTML = css;
				__prependChild(styleElm, document.head);
			} else {
				window.sugar._webComponentsDefaultCss[componentName] = false;
			}
		}
	}

	/**
	 * Internal store for all the props of the component
	 * Props are actual computed props with attributes
	 * @type 		{Object}
	 */
	_props = {};

	/**
	 * Store all the props of the component
	 * Props are actual computed props with attributes
	 * @type 		{Object}
	 */
	props = {};

	/**
	 * Return the default props for the component.
	 * Need to take care of the passed props parameter and mix it at the
	 * end of your default props
	 *
	 * @type 	{Object}
	 * @example
	 * getDefaultProps(props = {}) {
	 * 		return super.getDefaultProps({
	 * 			myCoolProp : null,
	 * 			...props
	 * 		});
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
	 */
	static get defaultProps() {
		return {
			mountWhen : null,
			mountDependencies : [],
			unmountTimeout : 500
		};
	}

	/**
	 * Set some default props for a specific component
	 * @param 		{Object} 		props 			A props object to set
	 * @param 		{String} 		[tagname=null] 	The tagname of the component you want to setting up
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
	 */
	static setDefaultProps(props, tagname = null) {
		// if a tagname is specified, we store the default props for a
		// particular tagname
		if (tagname) {
			tagname = [].concat(tagname);
			tagname.forEach((tag) => {
				tag = __upperFirst(__camelize(tag));
				window.sugar._webComponentsDefaultProps[tag] = {
					...window.sugar._webComponentsDefaultProps[tag] || {},
					...props
				};
			});
		} else {
			const proto = this;
			proto._defaultProps = {
				...proto._defaultProps || {},
				...props
			};
		}
	}

	/**
	 * Get the default props for this particular instance
	 * @type  		{Object}
	 */
	get defaultProps() {

		// check if default props in cache to avoid multiple time
		// computing
		if (this._defaultPropsCache) return this._defaultPropsCache;

		// compute
		let props = window.sugar._webComponentsClasses[this.componentName].defaultProps;
		let comp = window.sugar._webComponentsClasses[this.componentName];
		while(comp) {
			if (comp.defaultProps) {
				props = {
					...comp.defaultProps,
					...props
				};
			}
			if (comp._defaultProps) {
				props = {
					...props,
					...comp._defaultProps
				};
			}
			comp = Object.getPrototypeOf(comp);
		}
		// extend with default props stored in the component default props stack by tagname
		if (window.sugar._webComponentsDefaultProps[this.componentName]) {
			props = {
				...props,
				...window.sugar._webComponentsDefaultProps[this.componentName]
			}
		}

		// save in cache
		this._defaultPropsCache = Object.assign({}, props);

		// return props
		return props;
	}

	/**
	 * Return an array of props to set on the dom
	 * @return 		{Array}
	 */
	static get physicalProps() {
		return [];
	}

	/**
	 * Get physical props for this particular instance
	 * @return 		{Array} 			The physical props array
	 */
	get physicalProps() {

		if (this._physicalPropsCache) return this._physicalPropsCache;

		let props = window.sugar._webComponentsClasses[this.componentName].physicalProps;
		let comp = window.sugar._webComponentsClasses[this.componentName];
		while(comp) {
			if (comp.physicalProps) {
				comp.physicalProps.forEach((prop) => {
					if (props.indexOf(prop) === -1) {
						props.push(prop);
					}
				});
			}
			comp = Object.getPrototypeOf(comp);
		}

		this._physicalPropsCache = props;

		return props;
	}

	/**
	 * Return an array of required props to init the component
	 * @return 		{Array}
	 */
	static get requiredProps() {
		return [];
	}

	/**
	 * Get the required props array for this particular instance
	 * @return 		{Array} 			An array of required props
	 */
	get requiredProps() {

		if (this._requiredPropsCache) return this._requiredPropsCache;

		let props = window.sugar._webComponentsClasses[this.componentName].requiredProps;
		let comp = window.sugar._webComponentsClasses[this.componentName];
		while(comp) {
			if (comp.requiredProps) {
				comp.requiredProps.forEach((prop) => {
					if (props.indexOf(prop) === -1) {
						props.push(prop);
					}
				});
			}
			comp = Object.getPrototypeOf(comp);
		}

		this._requiredPropsCache = props;

		return props;
	}

	/**
	 * Specify the default css for the component
	 * @param 		{String} 		componentName 		The camelcase component name
	 * @param 		{String} 		componentNameDash 	The dashcase component name
	 * @return 		{String} 							The default css for the component
	 */
	static defaultCss(componentName, componentNameDash) {
		return '';
	}

	/**
	 * Get the default css of the component
	 * @type 		{String}
	 */
	get defaultCss() {

		if (this._defaultCssCache) return this._defaultCssCache;

		let css = '';
		let comp = window.sugar._webComponentsClasses[this.componentName];
		while(comp) {
			if (comp.defaultCss) {
				css += comp.defaultCss(this.componentName, this.componentNameDash);
			}
			comp = Object.getPrototypeOf(comp);
		}

		this._defaultCssCache = css;

		return css;
	}

	/**
	 * Return an array of props to set on the dom
	 * @type 		{Array}
	 */
	static get mountDependencies() {
		return [];
	}

	/**
	 * Get an array of promises to resolve before mounting the component.
	 * @type 		{Array<Promise>}
	 */
	get mountDependencies() {

		let deps = [];
		let comp = window.sugar._webComponentsClasses[this.componentName];
		while(comp) {
			if (comp.mountDependencies) {
				comp.mountDependencies.forEach((dep) => {
					if (deps.indexOf(dep) === -1) {
						deps.push(dep);
					}
				});
			}
			comp = Object.getPrototypeOf(comp);
		}

		// props mount dependencies
		deps = deps.concat(this.props.mountDependencies);
		let finalDeps = [];
		deps.forEach((dep) => {
			if (typeof(dep) === 'function') {
				dep = dep.bind(this);
				dep = dep();
			}
			finalDeps.push(dep);
		});
		return finalDeps;
	}

	/**
	 * Constructor
	 * @protected
	 */
	constructor(...args) {
		const self = super(...args)
		self.init()
		return self
	}
	init() {
		this.createdCallback();
	}

	/**
	 * When the component is created.
	 * This is called even if the component is not attached in the DOM tree
	 * @protected
	 */
	createdCallback() {

		// props
		this.props = this.props || {};

		// track the lifecyle
		this._lifecycle = {
			componentWillMount : false,
			componentMount : false,
			componentUnmount : false,
		};

		// created callback
		this.componentCreated();
	}

	/**
	 * When the element is attached in the DOM tree
	 * @protected
	 */
	connectedCallback() {

		// if not already passed through the created process
		if ( ! this._lifecycle) this.createdCallback();

		// update attached status
		this._componentAttached = true;

		// clear the unmount timeout
		clearTimeout(this._unmountTimeout);

		// stop here if already mounted once
		if (this._lifecycle.componentMount || this._lifecycle.componentWillMount) return;

		// set the componentName
		const sourceName = this.getAttribute('is') || this.tagName.toLowerCase()
		this.componentNameDash = this._componentNameDash = sourceName;
		this.componentName = this._componentName = __upperFirst(__camelize(sourceName));

		// default props init
		this._props = Object.assign({}, this.defaultProps, this._props || {}, this.props);

		// if we have some initial props, we set them now
		if (this._initialProps) this.setProps(this._initialProps)

		// init properties proxy object
		if (window.Proxy) {
			this.props = new Proxy(this._props, {
				set : (target, property, value) => {
					// get the old value
					const oldVal = target[property];
					// apply the new value
					target[property] = value;
					// handle the new property value
					this._handleNewPropValue(property, value, oldVal);
					// notify the proxy that the property has been updated
					return true;
				},
				get : (target, property) => {
					// simply return the property value from the target
					return target[property];
				}
			});
		} else {
			this.props = this._props;
		}

		// listen for updates on the element itself
		// instead of using the attributesChangedCallback
		// cause with the attributesChangedCallback, you'll need to declare
		// at start which attributes to listen and this behavior is not suitable
		// for new attributes added after the component creation...
		const observer = new MutationObserver((mutationList) => {
			const mutatedAttributes = []
			mutationList.forEach((mutation) => {
				if (mutatedAttributes.indexOf(mutation.attributeName) === -1) {
					this._attributeMutationCallback(mutation.attributeName, mutation.oldValue, this.getAttribute(mutation.attributeName));
				}
				mutatedAttributes.push(mutation.attributeName);
			});
		});
		observer.observe(this, {
			attributes: true,
			attributeOldValue: true
		});

		// internal properties
		this._nextPropsStack = {};
		this._prevPropsStack = {};
		this._fastdomSetProp = null;

		// compute props
		this._initInitialAttributes();

		// props proxy
		this._initPropsProxy();

		// check the required props
		this.requiredProps.forEach((prop) => {
			if ( ! this.props[prop]) {
				throw `The "${this.componentNameDash}" component need the "${prop}" property in order to work`;
			}
		});

		// component will mount only if part of the active document
		this.componentWillMount();

		// wait until dependencies are ok
		this._whenMountDependenciesAreOk().then(() => {
			// switch on the mountWhen prop
			switch(this.props.mountWhen) {
				case 'inViewport':
				case 'isInViewport':
					__whenInViewport(this).then(() => {
						this._mountComponent();
					});
				break;
				case 'isMouseover':
				case 'mouseover':
					this.addEventListener('mouseover', this._onMouseoverComponentMount.bind(this));
				break;
				case 'isVisible':
				case 'visible':
					__whenVisible(this).then(() => {
						this._mountComponent();
					});
				break;
				default:
					// mount component directly
					this._mountComponent();
				break;
			}
		});
	}
	attachedCallback() { this.connectedCallback() }

	/**
	 * When any of the component attribute changes
	 * @param 		{String} 		attribute 		The attribute name that has changed
	 * @param 		{String}		oldVal 			The previous attribute value
	 * @param 		{String} 		newVal 			The new attribute value
	 * @protected
	 */
	_attributeMutationCallback(attribute, oldVal, newVal) {

		// stop if the attribute has not changed
		if (oldVal === newVal) return;

		// keep an original attribute name
		const _attribute = attribute;

		// process the attribute to camelCase
		attribute = __camelize(attribute);

		// if the property is not a real property
		if ( ! this.shouldComponentAcceptProp(attribute)) return;

		// cast the new val
		newVal = __autoCast(newVal);

		// handle the case when newVal is undefined (added attribute whithout any value)
		if ( (newVal === undefined || newVal === null || newVal === '')
			&& this.hasAttribute(_attribute)
		) {
			newVal = true;
		} else if (newVal === null
			&& ! this.hasAttribute(_attribute)
			&& this.props[attribute] === false
		) {
			// the attribute has been removed and
			// the prop is already to false
			return;
		}

		// do nothing if the value is already the same
		if (this.props[attribute] === newVal) return;

		// set the new prop
		this.setProp(attribute, newVal);
	}

	/**
	 * Called directly when the component is created. This act like a constructor.
	 *
	 * @example
	 * componentCreated() {
	 * 		// call parent method
	 * 		super.componentCreated();
	 * 		// do something here...
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
	 */
	componentCreated() {
	}

	/**
	 * Method called before the component will actually mount and BEFORE the the mountDependencies to be resolved or not.
	 * This is a good place to do directl when the component is attached in the DOM but before any dependencies are resolved
	 *
	 * @example
	 * componentWillMount() {
	 * 		// call parent method
	 * 		super.componentWillMount();
	 * 		// do something here...
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
	 */
	componentWillMount() {
		// protect from mounting multiple times when unecessary
		if (this._lifecycle.componentWillMount) return;

		// update lifecycle state
		this._lifecycle.componentWillMount = true;
	}

	/**
	 * Method called right after that the component has been added in the dom,
	 * after and only if the mountDependencies are resolved
	 * and before the initial render.
	 *
	 * @example
	 * componentMount() {
	 * 		// call parent method
	 * 		super.componentMount();
	 * 		// do something here...
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
	 */
	componentMount() {
		if (this._lifecycle.componentMount) return;
		// update the lifecycle state
		this._lifecycle.componentMount = true;
		// mark the component as mounted
		this.setAttribute('mounted', true);
	}

	/**
	 * Apply all the updated that you need in the dom for the component to reflect the props
	 *
	 * @example
	 * render() {
	 * 		// call the parent method
	 * 		super.render();
	 * 		// apply some classes, properties, styles, etc... in the dom
	 * 		// in order to reflect the props object state
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
	 */
	render() {
	}

	/**
	 * Method called when the component need to unmount itself cause it has been removed from the DOM tree and the props.unmountTimeout is passed.
	 *
	 * @example
	 * componentUnmount() {
	 * 		// call parent method
	 * 		super.componentUnmount();
	 * 		// do something here...
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
	 */
	componentUnmount() {
		if (this._lifecycle.componentUnmount) return;
		// update lifecycle state
		this._lifecycle.componentUnmount = true;
		// remove the component mounted attribute
		this.removeAttribute('mounted');
	}

	/**
	 * Check all the mountDependencies and try to resolve them.
	 * @return 			{Promise} 				A promise that will be resolved when the dependencies are resolved
	 */
	_whenMountDependenciesAreOk() {
		const promise = new Promise((resolve, reject) => {
			const deps = this.mountDependencies;
			if ( ! deps.length) {
				resolve();
			} else {
			// resolve all the promises
				Promise.all(deps).then(() => {
					resolve();
				});
			}
		});
		return promise;
	}

	/**
	 * Init props proxy.
	 * This will create a getter/setter accessor on the item itself
	 * that get and update his corresponding props.{name} property
	 */
	_initPropsProxy() {
		// loop on each props
		for(let key in this.defaultProps) {
			if (this.hasOwnProperty(key) || key in this) {
				if (this.props.debug) {
					console.warn(`The component ${this.componentNameDash} has already an "${key}" property... This property will not reflect the this.props['${key}'] value... Try to use a property name that does not already exist on an HTMLElement...`);
				}
				continue;
			}
			((key) => {
				Object.defineProperty(this, key, {
					get : () => {
						return this.props[key];
					},
					set : (value) => {
						this.setProp(key, __autoCast(value));
					},
					enumarable : true
				});
			})(key);
		}
	}

	/**
	 * On mouse over
	 */
	_onMouseoverComponentMount() {
		this._mountComponent();
		this.removeEventListener('mouseover', this._onMouseoverComponentMount);
	}

	/**
	 * Internal mount component method
	 */
	_mountComponent() {
		// wait next frame
		__fastdom.clear(this._fastdomSetProp);
		this._fastdomSetProp = this.mutate(() => {
			// sometimes, the component has been unmounted between the
			// fastdom execution, so we stop here if it's the case
			if ( ! this._componentAttached) return;
			// init
			this.componentMount();
			// render
			this.render();
		});

	}

	/**
	 * Detect when the component is detached from the DOM tree.
	 * @protected
	 */
	disconnectedCallback() {

		// update attached status
		this._componentAttached = false;

		// unmount timeout
		clearTimeout(this._unmountTimeout);
		this._unmountTimeout = setTimeout(() => {
			// wait next frame
			__fastdom.clear(this._fastdomSetProp);
			this._fastdomSetProp = this.mutate(() => {
				// unmount only if the component is mounted
				if ( ! this._lifecycle.componentMount) return;
				// unmount
				this.componentUnmount();
				// update lifecycle
				this._lifecycle.componentMount = false;
			});
		}, this.props.unmountTimeout);
	}
	detachedCallback() { this.disconnectedCallback() }

	/**
	 * Dispatch an event from the tag with namespaced event name
	 * This will dispatch actually two events :
	 * 1. {tagName}.{name} : example : s-datepicker.change
	 * 2. {name} 		   : example : change
	 *
	 * @param		{String} 		name 		The event name
	 * @param 		{Mixed} 		data 		Some data to attach to the event
	 */
	dispatchComponentEvent(name, data = null, fromElm = this) {
		__dispatchEvent(fromElm, name, data);
		__dispatchEvent(fromElm, `${this.tagName.toLowerCase()}.${name}`, data);
	}

	/**
	 * Set a bunch of properties at once
	 * @param 			{Object} 		[props={}] 		An object of props to set
	 */
	setProps(props = {}) {
		// set each props
		for (let key in props) {
			this.setProp(key, props[key]);
		}
		// return the component
		return this;
	}

	/**
	 * Set a property
	 * @param 			{String} 		prop 			The property name to set
	 * @param 			{Mixed} 		value 			The new property value
	 */
	setProp(prop, value, set = true) {

		// if the component is not attached to the dom, we don't have the props etc
		// so we save them inside an object that we will merge later in the props
		if ( ! this._componentAttached) {
			if ( ! this._initialProps) this._initialProps = {}
			this._initialProps[prop] = value
			return
		}

		// save the oldVal
		const oldVal = this.props[prop];

		// stop if same value
		if (oldVal === value) return;

		// set the prop
		this._props[prop] = value;

		// handle new value
		this._handleNewPropValue(prop, value, oldVal);

		// return the component
		return this;
	}

	/**
	 * Get a property
	 * @param 		{String} 		prop 			The property name to get
	 * @return 		{Mixed} 						The property value or null
	 */
	getProp(prop) {
		return this.props[prop];
	}

	/**
	 * Handle new property
	 * @param 		{String} 		prop 		The property name
	 * @param 		{Mixed} 		newVal 		The new property value
	 * @param 		{Mixed}			oldVal 		The old property value
	 */
	_handleNewPropValue(prop, newVal, oldVal) {

		// if the component is not mounted
		// we do nothing here...
		if ( ! this.isComponentMounted()) return;

		// create the stacks
		this._prevPropsStack[prop] = oldVal;
		this._nextPropsStack[prop] = newVal;

		// component will receive prop
		this.componentWillReceiveProp(prop, newVal, oldVal);

		// wait till next frame
		__fastdom.clear(this._fastdomSetProp);
		this._fastdomSetProp = __fastdom.mutate(() => {

			// create array version of each stacks
			const nextPropsArray = [],
			prevPropsArray = [];
			for (let key in this._nextPropsStack) {
				const val = this._nextPropsStack[key];
				nextPropsArray.push({
					name : key,
					value : val
				});

				// handle physical props
				this._handlePhysicalProp(key, val);

			}
			for (let key in this._prevPropsStack) {
				const val = this._prevPropsStack[key];
				prevPropsArray.push({
					name : key,
					value : val
				});
			}

			// call the will reveiveProps if exist
			if (this.componentWillReceiveProps) {
				this.componentWillReceiveProps(this._nextPropsStack, nextPropsArray);
			}

			// should component update
			if (this.shouldComponentUpdate && ! this.shouldComponentUpdate(this._nextPropsStack, this._prevPropsStack)) return;

			// render the component
			this.render();
		});
	}

	/**
	 * Get the previous props stack
	 * @return    {Object}    The previous props stack
	 */
	getPreviousPropsStack() {
		return this._prevPropsStack
	}

	/**
	 * Get the next props stack
	 * @return    {Object}    The next props stack
	 */
	getNextPropsStack() {
		return this._nextPropsStack
	}

	/**
	 * Method called when the component will receive new props
	 * @param 		{String} 		prop 		The property name
	 * @param 		{Mixed} 		newVal 		The new property value
	 * @param 		{Mixed}			oldVal 		The old property value
	 * @example 	js
	 * componentWillReceiveProp(prop, newVal, oldVal) {
	 *  	switch(prop) {
	 *  		case ...
	 *    			// do something...
	 * 			break;
	 *  	}
	 * }
	 *
	 * @author 		Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
	 */
	componentWillReceiveProp(prop, newVal, oldVal) {
		// do something
	}

	/**
	 * Method that check if a property passed to the component has to be accepted or not.
	 * @param 		{String} 			prop 		The property name
	 * @return 		{Boolean} 						If true, the property will be accepted, if false, it will not be considered as a property
	 */
	shouldComponentAcceptProp(prop) {
		return this.props[prop] !== undefined;
	}

	/**
	 * Check if component is mounted
	 * @return 			{Boolean} 			true if mounted, false if not
	 */
	isComponentMounted() {
		return this._lifecycle.componentMount;
	}

	/**
	 * Handle physical props by setting or not the prop
	 * on the dom element as attribute
	 * @param 			{String} 			prop 			The property to handle
	 * @param 			{Mixed} 			value 			The property value
	 * @author 			Olivier Bossel <olivier.bossel@gmail.com> (https://olivierbossel.com)
	 */
	_handlePhysicalProp(prop, value) {
		// check if is a physical prop to set it in the dom
		const physicalProps = this.physicalProps;
		if (physicalProps.indexOf(prop) !== -1) {
			// set the prop on the node
			if (value !== 0
				&& (value === false || value === 'null' || ! value)
			) {
				this.removeAttribute(__uncamelize(prop));
			} else if (typeof(value) === 'object') {
				this.setAttribute(__uncamelize(prop), JSON.stringify(value));
			} else if (typeof(value) === 'function') {
				this.setAttribute(__uncamelize(prop), 'fn');
			} else {
				this.setAttribute(__uncamelize(prop), value);
			}
		}
	}

	/**
	 * Compute props by mixing settings with attributes presents on the component
	 */
	_initInitialAttributes() {
		for (let i=0; i<this.attributes.length; i++) {
			const attr = this.attributes[i];
			const attrCamelName = __camelize(attr.name);
			// do not set if it's not an existing prop
			if ( ! this.shouldComponentAcceptProp(attrCamelName)) continue;
			// the attribute has no value but it is present
			// so we assume the prop value is true
			if ( ! attr.value) {
				this._props[attrCamelName] = true
				continue;
			}
			// cast the value
			this._props[attrCamelName] = __autoCast(attr.value);
		}

		// handle physicalProps
		for (let key in this.props) {
			const value = this.props[key];
			// handle physical props
			this._handlePhysicalProp(key, value);
		}
	}

	/**
	 * Mutate the dom using an optimize requestAnimationFrame technique
	 * @param 		{Function} 		cb 			The callback to exexute
	 */
	mutate(cb) {
		return __fastdom.mutate(cb);
	}

	/**
	 * Set a class that will be construct with the componentNameDash,
	 * an optional element and modifier
	 * @param 	{String} 	[element=null] 		The element name
	 * @param 	{String} 	[modifier=null] 	The modifier name
	 * @param 	{String} 	[state=null] 		The state name
	 * @return 	{String} 						The generated class
	 */
	componentClassName(element = null, modifier = null, state = null) {
		// if the method is BEM
		let sel = this.componentNameDash;
		if (element) {
			sel += `__${element}`;
		}
		if (modifier) {
			sel += `--${modifier}`;
		}
		if (state) {
			sel += `--${state}`;
		}
		return sel;
	}

	/**
	 * Get a component selector class built with the passed element, modifier and state parameters
	 * @param 	{String} 	[element=null] 		The element name
	 * @param 	{String} 	[modifier=null] 	The modifier name
	 * @param 	{String} 	[state=null] 		The state name
	 * @return 	{String} 						The generated class
	 */
	componentSelector(element = null, modifier = null, state = null) {
		let sel = this.componentClassName(element, modifier, state);
		sel = `.${sel}`.replace(' ','.');
		return sel;
	}

	/**
	 * Check if the passed element has the component class generated by the element and modifier argument
	 * @param 	{HTMLElement} 	elm 				The element to check
	 * @param 	{String} 		[element=null] 		The element name
	 * @param 	{String} 		[modifier=null] 	The modifier name
	 * @param 	{String} 		[state=null] 		The state name
	 * @return 	{Boolean} 							The check result
	 */
	hasComponentClass(elm, element = null, modifier = null, state = null) {
		// generate the class
		const cls = this.componentSelector(element, modifier, state);
		const _cls = cls.split('.');
		for (let i=0; i<_cls.length; i++) {
			const cl = _cls[i];
			if (cl && cl !== '') {
				if ( ! elm.classList.contains(cl)) {
					return false;
				}
			}
		}
		return true;
	}

	/**
	 * Add a class on the passed element that will be construct with the componentNameDash,
	 * an optional element, modifier and state
	 * @param 	{String} 	[element=null] 		The element name
	 * @param 	{String} 	[modifier=null] 	The modifier name
	 * @param 	{String} 	[state=null] 		The state name
	 * @return 	{SComponent}} 			The component itself
	 */
	addComponentClass(elm, element = null, modifier = null, state = null) {
		// if is an array
		if (elm instanceof Array
			|| elm instanceof NodeList
		) {
			[].forEach.call(elm, (el) => {
				this.addComponentClass(el, element, modifier, state);
			});
			return this;
		}

		// get the component class
		let cls = this.componentSelector(element, modifier, state);
		// loop on each classes to add
		cls.split('.').forEach((cl) => {
			if (cl && cl !== '') {
				this.mutate(() => {
					elm.classList.add(cl);
				});
			}
		});
		// return the instance to maintain chainability
		return this;
	}

	/**
	 * Remove a class on the passed element that will be construct with the componentNameDash,
	 * an optional element, modifier and state
	 * @param 	{String} 	[element=null] 		The element name
	 * @param 	{String} 	[modifier=null] 	The modifier name
	 * @param 	{String} 	[state=null] 		The state name
	 * @return 	{SComponent}} 					The component itself
	 */
	removeComponentClass(elm, element = null, modifier = null, state = null) {
		// if is an array
		if (elm instanceof Array
			|| elm instanceof NodeList
		) {
			[].forEach.call(elm, (el) => {
				this.removeComponentClass(el, element, modifier, state);
			});
			return this;
		}

		// get the component class
		let cls = this.componentSelector(element, modifier, state);
		// loop on each classes to add
		cls.split('.').forEach((cl) => {
			if (cl && cl !== '') {
				this.mutate(() => {
					elm.classList.remove(cl);
				});
			}
		});
		// return the instance to maintain chainability
		return this;
	}

});

// Export the mixin class
export default SWebComponentMixin;
