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
	- shouldComponentAcceptProp
	- componentWillReceiveProp
	- componentWillReceiveProps
	- shouldComponentUpdate
	- render
	- componentUnmount
- **Mount dependencies** : This will allows you to set some promises that have to be resolved before mounting the component

## Table of content

1. [Get Started](#get-started)
2. [Lifecycle](#lifecycle)
3. [Props](#props)
4. [Mount dependencies](#mount-dependencies)
5. [Default CSS](#default-css)
6. [Component boilerplate](#boilerplate)
7. [Full SWebComponent API documentation](../src/js/core/SWebComponentMixin.md)

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
4. **```componentWillReceiveProp(prop, newVal, oldVal)```** : When the component receive a new property
5. **```componentWillReceiveProps(nextProps)```** : When the component receive some new properties. It will be called after the componentWillReceiveProp with all the updated properties at once
6. **```render```** : Method called to update the DOM depending on the props
7. **```componentUnmount```** : Called when the component is unmouted

> Don't forget to call the ```super.{methodName}``` to ensure that you don't skip important features executions.

<a name="props"></a>
## Props

Each component expose his "state" through the ```this.props``` object. These props are reachable and settable through several methods:

#### Set a prop :

1. **```<my-component {propName}="{propValue}"></my-component>```**
2. **```this.setProp(prop, value)```**
3. **```this.setProps(propsObj)```**
4. **```this.props.{propName} = {propValue}```** : This use the Proxy capabilities of modern browsers. Try to use instead the ```this.setProp``` function to avoid issues with older browsers like IE11...
5. **```this.{propName} = {propValue}```** : The props are exposed directly in the component instance. This is mostly for frameworks like react etc... Do not use this as your main property setting method...

#### Get a prop :

1. **```const myProp = this.props.{propName}```**
2. **```const myProp = this.getProp({propName})```**
3. **```const myProp = this.{propName}```** : The props are exposed directly in the component instance. This is mostly for frameworks like react etc... Try to not use this as your main property getting method...

> Avoid using names of properties that already exists on the HTMLElement object. If you do so, you can have some unexpected issues...


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

1. The component extends the ```HTMLInputElement``` class
2. The ```HTMLInputElement``` is passed to the ```native``` function that abstract some dark instructions to allow the extend to work properly with native HTMLElement
3. The component is defined with a third parameter that represent the native DOM element to extend

You can now use your input component using the **is** notation like so:

```html
<input type="text" is="my-cool-input" />
```

<a name="boilerplate"></a>
## Boilerplate for quick start

We provide a nice boilerplate to dive right into your component development without the trouble of configuring anything.

#### [Check it out here](https://github.com/coffeekraken/s-boilerplate-component)
