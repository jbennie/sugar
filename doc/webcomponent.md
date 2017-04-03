# Webcomponent

Sugar provide a nice stack for webcomponent development. This stack is basically composed of the ```SWebComponent``` js class that abstract a lot of dirty work work you like:

- Listen for attributes changes
- Mount the component at a certain point in time (inViewport, visible, etc...)
- **Automatically cast the attributes** to their proper js variable types (Array, Object, String, etc...)
- **Physical props** : Specify some props that will ALWAYS be present as attribute on the component for styling purpose
- Define some **default CSS** that will be injected in the head automatically
- Specify some **required props**
- **Full lifecycle management**:
	- componentCreated
	- componentWillMount
	- componentMount
	- componentDidMount
	- componentWillReceiveProp
	- componentWillReceiveProps
	- componentWillUpdate
	- render
	- componentDidUpdate
	- componentWillUnmount
	- componentUnmount
	- componentDidUnmount
- **Mount dependencies** : This will allows you to set some promises that havwe to be resolved before mounting the component

## Table of content

1. [Get Started](#get-started)
2. [Lifecycle](#lifecycle)
3. [Props](#props)
4. [The ```render``` method](#render-method)
5. [Mount dependencies](#mount-dependencies)
6. [Default CSS](#default-css)
7. [Component boilerplate](#boilerplate)
8. [Full SWebComponent API documentation](src/js/core/SWebComponentMixin.md)

<a name="get-started"></a>
## Get Started

Here's how to use the ```SWebComponent``` class :

```js
import SWebComponent from 'coffeekraken-sugar/js/core/SWebComponent'
class MyCoolComponent extends SWebComponent {

	/**
	 * Default props
	 * @definition 		SWebComponent.defaultProps
	 * @protected
	 */
	static get defaultProps() {
		return {
		};
	}

	/**
	 * Physical props
	 * @definition 		SWebComponent.physicalProps
	 * @protected
	 */
	static get physicalProps() {
		return [];
	}

	/**
	 * Css
	 * @protected
	 */
	static defaultCss(componentName, componentNameDash) {
		return `
			${componentNameDash} {
				display : block;
			}
		`;
	}

	/**
	 * Component will mount
 	 * @definition 		SWebComponent.componentWillMount
	 * @protected
	 */
	componentWillMount() {
		super.componentWillMount();
	}

	/**
	 * Mount component
	 * @definition 		SWebComponent.componentMount
	 * @protected
	 */
	componentMount() {
		super.componentMount();
	}

	/**
	 * Component unmount
	 * @definition 		SWebComponent.componentUnmount
	 * @protected
	 */
	componentUnmount() {
		super.componentUnmount();
	}

	/**
	 * Component will receive prop
	 * @definition 		SWebComponent.componentWillReceiveProp
	 * @protected
	 */
	componentWillReceiveProp(name, newVal, oldVal) {
		switch(name) {
		}
	}

	/**
	 * Render the component
	 * Here goes the code that reflect the this.props state on the actual html element
	 * @definition 		SWebComponent.render
	 * @protected
	 */
	render() {
		super.render();
	}
}

// define your component
MyCoolComponent.define('my-cool-component', MyCoolComponent);

```

<a name="lifecycle"></a>
## Lifecycle

Each component will have his own lifecycle. Here it is:

1. **```componentCreated```** : When the component has being created in memory
2. **```componentWillMount```** : Callded before the component is actually mounted and before the mountDependencies are resolved
3. **```componentMount```** : When the component is actually mounted
4. **```componentDidMount```** : Right after that the component has been mounted
5. **```componentWillReceiveProp(prop, newVal, oldVal)```** : When the component receive a new property
6. **```componentWillReceiveProps(nextProps)```** : When the component receive some new properties. It will be called after the componentWillReceiveProp with all the updated properties at once
7. **```componentWillUpdate(nextProps)```** : Before the component will be updated through the render method. If this return false, the render will not being called
8. **```render```** : Method called to update the DOM depending on the props
9. **```componentDidUpdate(prevProps)```** : Called after the render has been made
10. **```componentWillUnmount```** : Called just before the component will be unmounted
11. **```componentUnmount```** : Called when the component is unmouted
12. **```componentDidUnmount```** : Called after the component has been unmounted

> Don't forget to call the ```super.{methodName}``` to ensure that you don't skip important features executions.

<a name="props"></a>
## Props

Each component expose his "state" through the ```this.props``` object. These props are reachable and settable through several methods:

#### Set a prop :

1. **```<my-component {propName}="{propValue}"></my-component>```**
1. **```this.props.{propName} = {propValue}```**
2. **```this.setProp(prop, value)```**
3. **```this.setProps(propsObj)```**
4. **```this.{propName} = {propValue}```** : The props are exposed directly in the component instance. This is mostly for frameworks like react etc... Try to not use this as your main property setting method...

#### Get a prop :

1. **```const myProp = this.props.{propName}```**
2. **```const myProp = this.getProp({propName})```**
3. **```const myProp = this.{propName}```** : The props are exposed directly in the component instance. This is mostly for frameworks like react etc... Try to not use this as your main property getting method...

<a name="render-method"></a>
## The ```render``` method

Each component has his own lifecycle. In this lifecycle you will find the ```render``` method. This method will be called automatically and with some performance optimization at each of these steps:

1. When the component is **mounting**
2. When the component has **received one or more new props**

The purpose of this method is to reflect in the DOM his props. This mean that ideally, you will not touch the DOM outside of this method. Sometimes it's not possible to stick to this rule and it's fine as well. You will just need to check that the performance of your component is not degrading the overall user experience if you do so...


<a name="mount-dependencies"></a>
## Mount dependencies

You can specify some dependencies that the component has to respond before being mounted. This is useful to check that the context is ok for the component to be inited. Maybe your component need to be nested in another one and has to wait that this one has been inited before mounting itself...
Here's how to proceed:

```js
class MyCoolComponent extends SWebComponent {

	/**
	 * Mount dependencies
	 * @definition     SWebComponent.mountDependencies
	 * @protected
	 */
	static get mountDependencies() {
		// return an array of promised that represent your dependencies...
		return [function() {
			// here, the "this" will refer to the component instance
			// !!! do not use the arrow => function notation, otherwise the "this" will not be correctly bound...
			return new Promise((resolve) => {
				// your dependency logid here...
				setTimeout(resolve, 2000);
			});
		}]
	}
}
```

<a name="default-css"></a>
## Default CSS

You can easily define some default CSS for your component. This has to be done like so:

```js
class MyCoolComponent extends SWebComponent {

	/**
	 * Default CSS
	 * @definition     SWebComponent.defaultCss
	 * @protected
	 */
	static defaultCss(componentName, componentNameDash) {
		return `
			${componentNameDash} {
				display : block;
			}
			.${componentNameDash}__item {
				// something...
			}
			// etc...
		`;
	}
}
```

## Extend native elements

The custom elements specification allows to extend native DOM elements. You can has well do that through the ```SWebComponent``` class. Here's how to process:

```js
import native from 'coffeekraken-sugar/js/core/sNativeWebComponent'
class MyCoolInputComponent extends native(HTMLInputElement) {
	// component implementation...
}
MyCoolInputComponent.define('my-cool-input', MyCoolInputComponent, 'input');
```

You can see two things here:

1. The component extends the ```SInputWebComponent``` class
2. The component is defined with a third parameter that represent the native DOM element to extend

You can now use your input component using the **is** notation like so:

```html
<input type="text" is="my-cool-input" />
```

<a name="boilerplate"></a>
## Boilerplate for quick start

We provide a nice boilerplate to dive right into your component development without the trouble of configuring anything.

#### [Check it out here](https://github.com/coffeekraken/s-boilerplate-component)
