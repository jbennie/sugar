# SWebComponent

Extends **HTMLElement**

Base class that abstract a lot of dirty work in order to create nice and clean webcomponents.
Features:
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
	- componentWillReceiveProp
	- componentWillReceiveProps
	- render
	- componentUnmount
- **Mount dependencies** : This will allows you to set some promises that have to be resolved before mounting the component


### Example
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
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


## Constructor

Constructor

**Protected**





## Properties


### props

Store all the props of the component
Props are actual computed props with attributes

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{}**


### defaultProps

Return the default props for the component.
Need to take care of the passed props parameter and mix it at the
end of your default props


Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

#### Example
```js
	getDefaultProps(props = {}) {
		return super.getDefaultProps({
			myCoolProp : null,
			...props
		});
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)

**Static**


### defaultProps

Get the default props for this particular instance

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**


### defaultCss

Get the default css of the component

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### mountDependencies

Return an array of props to set on the dom

Type : **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**

**Static**


### mountDependencies

Get an array of promises to resolve before mounting the component.

Type : **{ Array<Promise> }**


## Methods


### define

Define the new web component


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
name  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The name of the component  |  required  |
componentClassOrExt  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) , [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The component class or the HTML tag to extend like "input", "button", etc...  |  optional  |  null
ext  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) , [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The HTML tag to extend like "input", "button", etc...  |  required  |

**Static**


### setDefaultProps

Set some default props for a specific component


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
props  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  A props object to set  |  required  |
tagname  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The tagname of the component you want to setting up  |  optional  |  null

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)

**Static**


### physicalProps

Return an array of props to set on the dom

**Static**


### physicalProps

Get physical props for this particular instance

Return **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }** The physical props array


### requiredProps

Return an array of required props to init the component

**Static**


### requiredProps

Get the required props array for this particular instance

Return **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }** An array of required props


### defaultCss

Specify the default css for the component


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
componentName  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The camelcase component name  |  required  |
componentNameDash  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The dashcase component name  |  required  |

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The default css for the component

**Static**


### componentCreated

Called directly when the component is created. This act like a constructor.


#### Example
```js
	componentCreated() {
		// call parent method
		super.componentCreated();
		// do something here...
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


### componentWillMount

Method called before the component will actually mount and BEFORE the the mountDependencies to be resolved or not.
This is a good place to do directl when the component is attached in the DOM but before any dependencies are resolved


#### Example
```js
	componentWillMount() {
		// call parent method
		super.componentWillMount();
		// do something here...
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


### componentMount

Method called right after that the component has been added in the dom,
after and only if the mountDependencies are resolved
and before the initial render.


#### Example
```js
	componentMount() {
		// call parent method
		super.componentMount();
		// do something here...
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


### render

Apply all the updated that you need in the dom for the component to reflect the props


#### Example
```js
	render() {
		// call the parent method
		super.render();
		// apply some classes, properties, styles, etc... in the dom
		// in order to reflect the props object state
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


### componentUnmount

Method called when the component need to unmount itself cause it has been removed from the DOM tree and the props.unmountTimeout is passed.


#### Example
```js
	componentUnmount() {
		// call parent method
		super.componentUnmount();
		// do something here...
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


### dispatchComponentEvent

Dispatch an event from the tag with namespaced event name
This will dispatch actually two events :
1. {tagName}.{name} : example : s-datepicker.change
2. {name} 		   : example : change



#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
name  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The event name  |  required  |
data  |  **{ Mixed }**  |  Some data to attach to the event  |  required  |


### setProps

Set a bunch of properties at once


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
props  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  An object of props to set  |  optional  |  {}


### setProp

Set a property


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
prop  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The property name to set  |  required  |
value  |  **{ Mixed }**  |  The new property value  |  required  |


### getProp

Get a property


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
prop  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The property name to get  |  required  |

Return **{ Mixed }** The property value or null


### setState

Set a new state


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
newState  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The new state to merge with the actual one  |  required  |

Return **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }** The new state computed


### setStateValue

Set a property


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
prop  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The property name to set  |  required  |
value  |  **{ Mixed }**  |  The new property value  |  required  |


### getState

Get a state property


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
prop  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The state property to retrieve  |  optional  |  null

Return **{ Mixed }** The requested state value or the full state object


### getPreviousPropsStack

Get the previous props stack

Return **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }** The previous props stack


### getNextPropsStack

Get the next props stack

Return **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }** The next props stack


### componentWillReceiveProp

Method called when the component will receive new props


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
prop  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The property name  |  required  |
newVal  |  **{ Mixed }**  |  The new property value  |  required  |
oldVal  |  **{ Mixed }**  |  The old property value  |  required  |

#### Example
```js
	componentWillReceiveProp(prop, newVal, oldVal) {
 	switch(prop) {
 		case ...
   			// do something...
			break;
 	}
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


### shouldComponentAcceptProp

Method that check if a property passed to the component has to be accepted or not.


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
prop  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The property name  |  required  |

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** If true, the property will be accepted, if false, it will not be considered as a property


### isComponentMounted

Check if component is mounted

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** true if mounted, false if not


### mutate

Mutate the dom using an optimize requestAnimationFrame technique


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  The callback to exexute  |  required  |


### componentClassName

Set a class that will be construct with the componentNameDash,
an optional element and modifier


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
element  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The element name  |  optional  |  null
modifier  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The modifier name  |  optional  |  null
state  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The state name  |  optional  |  null

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The generated class


### componentSelector

Get a component selector class built with the passed element, modifier and state parameters


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
element  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The element name  |  optional  |  null
modifier  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The modifier name  |  optional  |  null
state  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The state name  |  optional  |  null

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The generated class


### hasComponentClass

Check if the passed element has the component class generated by the element and modifier argument


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to check  |  required  |
element  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The element name  |  optional  |  null
modifier  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The modifier name  |  optional  |  null
state  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The state name  |  optional  |  null

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** The check result


### addComponentClass

Add a class on the passed element that will be construct with the componentNameDash,
an optional element, modifier and state


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
element  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The element name  |  optional  |  null
modifier  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The modifier name  |  optional  |  null
state  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The state name  |  optional  |  null

Return **{ SComponent} }** The component itself


### removeComponentClass

Remove a class on the passed element that will be construct with the componentNameDash,
an optional element, modifier and state


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
element  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The element name  |  optional  |  null
modifier  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The modifier name  |  optional  |  null
state  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The state name  |  optional  |  null

Return **{ SComponent} }** The component itself