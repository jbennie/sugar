import { Mixin } from '../vendors/mixwith'
import __autoCast from '../utils/string/autoCast'
import __camelize from '../utils/string/camelize'
import __uniqid from '../utils/uniqid'
import __upperFirst from '../utils/string/upperFirst'
import sSettings from './sSettings'
import fastdom from 'fastdom'
import __dispatchEvent from '../dom/dispatchEvent'
import __whenInViewport from '../dom/whenInViewport'
import __whenVisible from '../dom/whenVisible'
import __matches from '../dom/matches'
import __closest from '../dom/closest'
import __whenAttribute from '../dom/whenAttribute'
import __propertyProxy from '../utils/objects/propertyProxy'
import __domReady from '../dom/domReady'
import __prependChild from '../dom/prependChild'

if ( ! window.sugar) window.sugar = {};
if ( ! window.sugar._webComponentsStack) window.sugar._webComponentsStack = {};
if ( ! window.sugar._webComponentsDefaultPropsStack) window.sugar._webComponentsDefaultPropsStack = {};
if ( ! window.sugar._templateWebComponents) window.sugar._templateWebComponents = {};
if ( ! window.sugar._webComponentCss) window.sugar._webComponentCss = {};

export default Mixin((superclass) => class extends superclass {

	/**
	* Define the new web component
	* @param 			{String} 			name 		The name of the component
	* @param 			{SWebComponent} 	component 	The component class
	*/
	static define(name, component, ext = null) {
		const componentName = __upperFirst(__camelize(name));
		const componentNameDash = name;
		window.sugar._webComponentsStack[componentName] = component;

		// register the webcomponent
		let webcomponent;
		if (document.registerElement) {
			webcomponent = document.registerElement(name, {
				prototype : component.prototype,
				extends : ext
			});
		} else if (window.customElements) {
			webcomponent = window.customElements.define(name, component, {
				extends : ext
			});
		} else {
			throw `Your browser does not support either document.registerElement or window.customElements.define webcomponents specification...`;
		}

		// fix for firefox and surely other crapy browser...
		// this make sur that the (static) methods of the component
		// are present on the webcomponent itself
		Object.keys(component).forEach((key) => {
			if ( ! webcomponent[key]) {
				webcomponent[key] = component[key];
			}
		});

		// handle css
		component._injectCss(component, componentName, componentNameDash);

		// return the webcomponent instance
		return webcomponent;
	}

	/**
	* Inject css into html
	* @param 		{String} 		componentName 		The component name
	* @param 		{String} 		componentNameDash 	The dash formated component name
	*/
	static _injectCss(componentClass, componentName, componentNameDash) {
		// __domReady().then(() => {
		// check if component has a css to be injected into the page
		if (window.sugar._webComponentCss[componentName] === undefined) {
			let css = '';
			let comp = componentClass;
			while(comp) {
				if (comp.css) {
					css += comp.css(componentName, componentNameDash);
				}
				comp = Object.getPrototypeOf(comp);
			}
			if (css) {
				css = css.replace(/[\s]+/g,' ');
				window.sugar._webComponentCss[componentName] = css;
				// fastdom.mutate(() => {
				const styleElm = document.createElement('style');
				styleElm.setAttribute('name', componentName);
				styleElm.innerHTML = css;
				__prependChild(styleElm, document.head);
				// document.head.appendChild(styleElm);
				// });
			} else {
				window.sugar._webComponentCss[componentName] = false;
			}
		}
		// });
	}

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
	* @example
	* getDefaultProps(props = {}) {
	* 		return super.getDefaultProps({
	* 			myCoolProp : null,
	* 			...props
	* 		});
	* }
	*
	* @author 		Olivier Bossel <olivier.bossel@gmail.com>
	*/
	static get defaultProps() {
		return {
			mountWhen : null
		};
	}

	static setDefaultProps(props, tagname = null) {
		// if a tagname is specified, we store the default props for a
		// particular tagname
		if (tagname) {
			tagname = [].concat(tagname);
			tagname.forEach((tag) => {
				tag = __upperFirst(__camelize(tag));
				window.sugar._webComponentsDefaultPropsStack[tag] = {
					...window.sugar._webComponentsDefaultPropsStack[tag] || {},
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
	* @return 		{Object} 			The default props
	*/
	get defaultProps() {
		let props = window.sugar._webComponentsStack[this._componentName].defaultProps;
		let comp = window.sugar._webComponentsStack[this._componentName];
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
		if (window.sugar._webComponentsDefaultPropsStack[this._componentName]) {
			props = {
				...props,
				...window.sugar._webComponentsDefaultPropsStack[this._componentName]
			}
		}
		return props;
	}

	/**
	* Return an array of props to set on the dom
	*/
	static get physicalProps() {
		return [];
	}

	/**
	* Get physical props for this particular instance
	* @return 		{Object} 			The physical props array
	*/
	get physicalProps() {
		let props = window.sugar._webComponentsStack[this._componentName].physicalProps;
		let comp = window.sugar._webComponentsStack[this._componentName];
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
		return props;
	}

	/**
	* Return an array of required props to init the component
	*/
	static get requiredProps() {
		return [];
	}

	/**
	* Get the required props array for this particular instance
	* @return 		{Array} 			An array of required props
	*/
	get requiredProps() {
		let props = window.sugar._webComponentsStack[this._componentName].requiredProps;
		let comp = window.sugar._webComponentsStack[this._componentName];
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
		return props;
	}

	/**
	* Component css
	*/
	static css(componentName, componentNameDash) {
		return '';
	}

	get css() {
		let css = '';
		let comp = window.sugar._webComponentsStack[this._componentName];
		while(comp) {
			if (comp.css) {
				css += comp.css(this._componentName, this._componentNameDash);
			}
			comp = Object.getPrototypeOf(comp);
		}
		return css;
	}

	/**
	* Return an array of props to set on the dom
	*/
	static get mountDependencies() {
		return [];
		// return [function() {
		// 	return new Promise((resolve, reject) => {
		// 		let isTemplate = false;
		// 		resolve();
		// 		if (this._typeOf.indexOf('STemplateWebComponent')) {
		// 			resolve();
		// 		} else {
		// 			setTimeout(() => {
		// 				resolve();
		// 			});
		// 		}
		// 	});
		// }];
	}

	/**
	* Get physical props for this particular instance
	* @return 		{Object} 			The physical props array
	*/
	get mountDependencies() {
		let deps = window.sugar._webComponentsStack[this._componentName].mountDependencies;
		let comp = window.sugar._webComponentsStack[this._componentName];
		while(comp) {
			if (comp.mountDependencies) {
				comp.mountDependencies.forEach((dep) => {
					if (typeof(dep) === 'function') {
						dep = dep.bind(this);
						dep = dep();
					}
					if (deps.indexOf(dep) === -1) {
						deps.push(dep);
					}
				});
			}
			comp = Object.getPrototypeOf(comp);
		}
		return deps;
	}

	/**
	* When the component is created
	*/
	createdCallback() {

		// props
		this.props = {};

		// track the lifecyle
		this._lifecycle = {
			componentWillMount : false,
			componentMount : false,
			componentDidMount : false,
			componentWillUnmount : false,
			componentUnmount : false,
			componentDidUnmount : false
		};

		// if ( ! document.body.contains(this)) return;

		// component will mount only if part of the active document
		this.componentWillMount();
	}

	/**
	* When the element is attached
	*/
	attachedCallback() {

		// check if need to launch the will mount
		// if ( ! this._lifecycle.componentWillMount) {
		// 	this.componentWillMount();
		// }

		// update attached status
		this._componentAttached = true;

		// wait until dependencies are ok
		this._whenMountDependenciesAreOk().then(() => {
			// switch on the mountWhen prop
			switch(this.props.mountWhen) {
				case 'inViewport':
				__whenInViewport(this).then(() => {
					this._mountComponent();
				});
				break;
				case 'mouseover':
				this.addEventListener('mouseover', this._onMouseoverComponentMount.bind(this));
				break;
				case 'isVisible':
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

	/**
	* When any of the component attribute changes
	*/
	attributeChangedCallback(attribute, oldVal, newVal) {

		// stop if component has not been mounted
		// if ( ! this._lifecycle.componentWillMount) {
		// 	return;
		// }

		// cast the new val
		newVal = __autoCast(newVal);

		// keep an original attribute name
		const _attribute = attribute;

		// process the attribute to camelCase
		attribute = __camelize(attribute);

		// handle the case when newVal is undefined (added attribute whithout any value)
		if (newVal === undefined
			&& this.hasAttribute(_attribute)
		) {
			newVal = true;
		}

		// do nothing if the value is already the same
		if (this.props[attribute] === newVal) return;

		// set the new prop
		this.setProp(attribute, newVal);
	}

	/**
	* Method called before the component will be added in the dom.
	* You will not have access to the siblings, etc here.
	* This is the place to init your component, just like a constructor
	*
	* @example
	* componentWillMount() {
	* 		// call parent method
	* 		super.componentWillMount();
	* 		// do something here...
	* }
	*
	* @author 		Olivier Bossel <olivier.bossel@gmail.com>
	*/
	componentWillMount() {

		// update lifecycle state
		this._lifecycle.componentWillMount = true;

		// dispatch event
		this.onComponentWillMount && this.onComponentWillMount();
		// this.dispatchComponentEvent('componentWillMount');

		// internal properties
		this._nextPropsStack = {};
		this._prevPropsStack = {};
		this._nextPropsTimeout = null;
		this._componentMounted = false;
		this._componentAttached = false;
		this._fastdomSetProp = null;

		// set the componentName
		const sourceName = this.getAttribute('is') || this.tagName.toLowerCase()
		this._componentNameDash = sourceName;
		this._componentName = __upperFirst(__camelize(sourceName));

		// save each instances into the element _sComponents stack
		// this._typeOf = [];
		// let comp = window.sugar._webComponentsStack[this._componentName];
		// while(comp) {
		// 	let funcNameRegex = /function (.{1,})\(/;
		// 	const res = (funcNameRegex).exec(comp.toString());
		// 	if (res && res[1]) {
		// 		if ( this._typeOf.indexOf(res[1]) === -1) {
		// 			this._typeOf.push(res[1]);
		// 		}
		// 	}
		// 	comp = Object.getPrototypeOf(comp);
		// }

		// default props init
		this.props = Object.assign({}, this.defaultProps, this.props);

		// compute props
		this._computeProps();

		// props proxy
		// this._initPropsProxy();

		// check the required props
		this.requiredProps.forEach((prop) => {
			if ( ! this.props[prop]) {
				throw `The "${this._componentNameDash}" component need the "${prop}" property in order to work`;
			}
		});
	}

	/**
	* Method called right after that the component has been added in the dom,
	* and before the initial render
	* This is the first place where you will have access to the dom.
	*
	* @example
	* componentMount() {
	* 		// call parent method
	* 		super.componentMount();
	* 		// do something here...
	* }
	*
	* @author 		Olivier Bossel <olivier.bossel@gmail.com>
	*/
	componentMount() {
		// update the lifecycle state
		this._lifecycle.componentMount = true;
		// update the status
		this._componentMounted = true;
		// dispatch event
		this.onComponentMount && this.onComponentMount();
		// this.dispatchComponentEvent('componentMount');
	}

	/**
	* Method called after the initial component render
	*
	* @example
	* componentDidMount() {
	* 		// call parent method
	* 		super.componentDidMount();
	* 		// do something here...
	* }
	*
	* @author 		Olivier Bossel <olivier.bossel@gmail.com>
	*/
	componentDidMount() {
		// update lifecycle state
		this._lifecycle.componentDidMount = true;
		// dispatch event
		this.onComponentDidMount && this.onComponentDidMount();
		// this.dispatchComponentEvent('componentDidMount');
	}

	/**
	* Method called right before the render when some props have been updated.
	* This method is not called before the initial render
	*
	* @param 		{Object} 		nextProps 			An object that represent the props that have been updated
	* @param 		{Array} 		nextPropsArray 		An array representation of the nextProps object [{name:...,value:...}]
	*
	* @example
	* componentWillUpdate() {
	* 		// call parent method
	* 		super.componentWillUpdate();
	* 		// do something here...
	* }
	*
	* @author 		Olivier Bossel <olivier.bossel@gmail.com>
	*/
	componentWillUpdate(nextProps) {
		// dispatch event
		this.onComponentWillUpdate && this.onComponentWillUpdate(nextProps);
		// this.dispatchComponentEvent('componentWillUpdate', nextProps);
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
	* @author 		Olivier Bossel <olivier.bossel@gmail.com>
	*/
	render() {
		// dispatch event
		this.onComponentRender && this.onComponentRender();
		// this.dispatchComponentEvent('componentRender');
	}

	componentDidUpdate(prevProps) {
		// dispatch event
		this.onComponentDidUpdate && this.onComponentDidUpdate(prevProps);
		// this.dispatchComponentEvent('componentDidUpdate', prevProps);
	}

	componentWillUnmount() {
		// update lifecycle state
		this._lifecycle.componentWillUnmount = true;
		// dispatch event
		this.onComponentWillUnmount && this.onComponentWillUnmount();
		// this.dispatchComponentEvent('componentWillUnmount');
	}

	componentUnmount() {
		// update lifecycle state
		this._lifecycle.componentUnmount = true;
		// update the status
		this._componentMounted = false;
		// dispatch event
		this.onComponentUnmount && this.onComponentUnmount();
		// this.dispatchComponentEvent('componentUnmount');
	}

	componentDidUnmount() {
		// update lifecycle state
		this._lifecycle.componentDidUnmount = true;
		// dispatch event
		this.onComponentDidUnmount && this.onComponentDidUnmount();
		// this.dispatchComponentEvent('componentDidUnmount');
	}

	/**
	* When mount dependencies
	* @return 			{Promise} 				A promise that will be resolved when the dependencies are resolved
	*/
	_whenMountDependenciesAreOk() {
		const promise = new Promise((resolve, reject) => {
			if ( ! this.mountDependencies.length) {
				resolve();
			} else {
				// resolve all the promises
				Promise.all(this.mountDependencies).then(() => {
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
		for(let key in this.props) {
			__propertyProxy(this, key, {
				get : () => {
					return this.props[key];
				},
				set : (value) => {
					this.setProp(key, value);
				}
			});
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
		fastdom.clear(this._fastdomSetProp);
		this._fastdomSetProp = this.mutate(() => {
			// sometimes, the component has been unmounted between the
			// fastdom execution, so we stop here if it's the case
			if ( ! this._componentAttached) return;
			// init
			this.componentMount();
			// render
			this.render();
			// component did mount
			this.componentDidMount();
		});

	}

	/**
	* When the component is detached
	*/
	detachedCallback() {
		// update attached status
		this._componentAttached = false;
		// will unmount
		this.componentWillUnmount();
		// wait next frame
		fastdom.clear(this._fastdomSetProp);
		this._fastdomSetProp = this.mutate(() => {
			// unmount only if the component is mounted
			if ( ! this._componentMounted) return;
			// unmount
			this.componentUnmount();
			// did unmount
			this.componentDidUnmount();
		});
	}

	/**
	* Dispatch an event from the tag with namespaced event name
	* This will dispatch actually two events :
	* 1. {tagName}.{name} : example : s-datepicker.change
	* 2. {name} 		   : example : change
	*
	* @param		{String} 		name 		The event name
	* @param 		{Mixed} 		data 		Some data to attach to the event
	*/
	dispatchComponentEvent(name, data = null) {
		__dispatchEvent(this, name, data);
		__dispatchEvent(this, `${this.tagName.toLowerCase()}.${name}`, data);
	}

	/**
	* Set properties
	*/
	setProps(props = {}) {
		// set each props
		for (let key in props) {
			this.setProp(key, props[key]);
		}
		return this;
	}

	/**
	* Set a property
	*/
	setProp(prop, value) {

		// save the oldVal
		const _oldVal = this.props[prop];

		// stop if same value
		if (_oldVal === value) return;

		// set the prop
		this.props[prop] = value

		// handle physical props
		this._handlePhysicalProps(prop, value);

		// if the component is not mounted
		// we do nothing here...
		if ( ! this.isComponentMounted()) return;

		// create the stacks
		this._prevPropsStack[prop] = _oldVal;
		this._nextPropsStack[prop] = value;

		// component will receive prop
		if (this.componentWillReceiveProp) {
			this.componentWillReceiveProp(prop, value, _oldVal);
		}

		// wait till next frame
		fastdom.clear(this._fastdomSetProp);
		this._fastdomSetProp = fastdom.mutate(() => {

			// create array version of each stacks
			const nextPropsArray = [],
			prevPropsArray = [];
			for (let key in this._nextPropsStack) {
				const val = this._nextPropsStack[key];
				nextPropsArray.push({
					name : key,
					value : val
				});
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

			// component will update
			this.componentWillUpdate(this._nextPropsStack, nextPropsArray);

			// render the component
			this.render();

			// component did update
			this.componentDidUpdate(this._prevPropsStack, prevPropsArray);
		});
	}

	/**
	* Check if component is mounted
	* @return 			{Boolean} 			true if mounted, false if not
	*/
	isComponentMounted() {
		return this._componentMounted;
	}

	/**
	* Handle physical props by setting or not the prop
	* on the dom element as attribute
	*/
	_handlePhysicalProps(prop, value) {
		// check if is a physical prop to set it in the dom
		const physicalProps = this.physicalProps;
		if (physicalProps.indexOf(prop) !== -1) {
			// set the prop on the node
			if (value !== 0
				&& (value === false || value === 'null' || ! value)
			) {
				this.removeAttribute(prop);
			} else if (typeof(value) === 'object') {
				this.setAttribute(prop, JSON.stringify(value));
			} else if (typeof(value) === 'function') {
				this.setAttribute(prop, 'fn');
			} else {
				this.setAttribute(prop, value);
			}
		}
	}

	/**
	* Compute props by mixing settings with attributes presents on the component
	*/
	_computeProps() {
		for (let i=0; i<this.attributes.length; i++) {
			const attr = this.attributes[i];
			if ( ! attr.value) {
				// the attribute has no value but it is present
				// so we assume the prop value is true
				this.props[__camelize(attr.name)] = true
				continue;
			}
			// cast the value
			this.props[__camelize(attr.name)] = __autoCast(attr.value);
		}

		// handle physicalProps
		for (let key in this.props) {
			const value = this.props[key];
			// handle physical props
			this._handlePhysicalProps(key, value);
		}
	}

	/**
	* Mutate the dom using an optimize requestAnimationFrame technique
	* @param 		{Function} 		cb 			The callback to exexute
	*/
	mutate(cb) {
		return fastdom.mutate(cb);
	}

	/**
	* componentClassName
	* Set a class that will be construct with the componentNameDash,
	* an optional element and modifier
	* @param 	{String} 	[element=null] 		The element name
	* @param 	{String} 	[modifier=null] 	The modifier name
	* @param 	{String} 	[state=null] 		The state name
	* @return 	{String} 						The generated class
	*/
	componentClassName(element = null, modifier = null, state = null) {
		// if the method is BEM
		let sel = this._componentNameDash;
		// @TODO : handle the sSettings at component load
		if ( false && sSettings && sSettings.selector.method.toLowerCase() === 'smaccs') {
			if (element) {
				sel += `-${element}`;
			}
			if (modifier) {
				sel += `-${modifier}`;
			}
			if (state) {
				sel += ` is-${state}`;
			}
		} else {
			if (element) {
				sel += `__${element}`;
			}
			if (modifier) {
				sel += `--${modifier}`;
			}
			if (state) {
				sel += `--${state}`;
			}
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
	* hasComponentClass
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
