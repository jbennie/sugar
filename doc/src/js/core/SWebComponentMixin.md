# define

Define the new web component


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
name  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The name of the component  |  required  |
component  |  **{ SWebComponent }**  |  The component class  |  required  |

Default : **null) {**






## Properties


### props

Store all the props of the component
Props are actual computed props with attributes

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**

Default : **{}**


## Methods


### defaultProps

Return the default props for the component.
Need to take care of the passed props parameter and mix it at the
end of your default props


#### Example
```js
	getDefaultProps(props = {}) {
		return super.getDefaultProps({
			myCoolProp : null,
			...props
		});
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


### defaultProps

Get the default props for this particular instance

Return **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }** The default props


### physicalProps

Return an array of props to set on the dom


### physicalProps

Get physical props for this particular instance

Return **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }** The physical props array


### requiredProps

Return an array of required props to init the component


### requiredProps

Get the required props array for this particular instance

Return **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }** An array of required props


### css

Component css


### mountDependencies

Return an array of props to set on the dom


### mountDependencies

Get physical props for this particular instance

Return **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }** The physical props array


### createdCallback

When the component is created


### attachedCallback

When the element is attached


### attributeChangedCallback

When any of the component attribute changes


### componentWillMount

Method called before the component will be added in the dom.
You will not have access to the siblings, etc here.
This is the place to init your component, just like a constructor


#### Example
```js
	componentWillMount() {
		// call parent method
		super.componentWillMount();
		// do something here...
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


### componentMount

Method called right after that the component has been added in the dom,
and before the initial render
This is the first place where you will have access to the dom.


#### Example
```js
	componentMount() {
		// call parent method
		super.componentMount();
		// do something here...
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


### componentDidMount

Method called after the initial component render


#### Example
```js
	componentDidMount() {
		// call parent method
		super.componentDidMount();
		// do something here...
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


### componentWillUpdate




Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
nextProps  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  An object that represent the props that have been updated  |  required  |
nextPropsArray  |  **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**  |  An array representation of the nextProps object [{name:...,value:...}]  |  required  |

#### Example
```js
	componentWillUpdate() {
		// call parent method
		super.componentWillUpdate();
		// do something here...
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>


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
Author : Olivier Bossel <olivier.bossel@gmail.com>


### detachedCallback

When the component is detached


### dispatchComponentEvent

Dispatch an event from the tag with namespaced event name
This will dispatch actually two events :
1. {tagName}.{name} : example : s-datepicker.change
2. {name} 		   : example : change



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
name  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The event name  |  required  |
data  |  **{ Mixed }**  |  Some data to attach to the event  |  required  |

Default : **null) {**


### setProps

Set properties

Default : **{}) {**


### setProp

Set a property


### isComponentMounted

Check if component is mounted

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** true if mounted, false if not


### mutate

Mutate the dom using an optimize requestAnimationFrame technique


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  The callback to exexute  |  required  |


### componentClassName

componentClassName
Set a class that will be construct with the componentNameDash,
an optional element and modifier


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
element  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The element name  |  optional  |  null
modifier  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The modifier name  |  optional  |  null
state  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The state name  |  optional  |  null

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The generated class

Default : **null, modifier = null, state = null) {**


### componentSelector

Get a component selector class built with the passed element, modifier and state parameters


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
element  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The element name  |  optional  |  null
modifier  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The modifier name  |  optional  |  null
state  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The state name  |  optional  |  null

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The generated class

Default : **null, modifier = null, state = null) {**


### hasComponentClass

hasComponentClass
Check if the passed element has the component class generated by the element and modifier argument


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to check  |  required  |
element  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The element name  |  optional  |  null
modifier  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The modifier name  |  optional  |  null
state  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The state name  |  optional  |  null

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** The check result

Default : **null, modifier = null, state = null) {**


### addComponentClass

Add a class on the passed element that will be construct with the componentNameDash,
an optional element, modifier and state


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
element  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The element name  |  optional  |  null
modifier  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The modifier name  |  optional  |  null
state  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The state name  |  optional  |  null

Return **{ SComponent} }** The component itself

Default : **null, modifier = null, state = null) {**


### removeComponentClass

Remove a class on the passed element that will be construct with the componentNameDash,
an optional element, modifier and state


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
element  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The element name  |  optional  |  null
modifier  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The modifier name  |  optional  |  null
state  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The state name  |  optional  |  null

Return **{ SComponent} }** The component itself

Default : **null, modifier = null, state = null) {**