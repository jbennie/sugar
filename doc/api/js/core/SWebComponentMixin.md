



## Properties


### props

Store all the props of the component
Props are actual computed props with attributes

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**

## Methods


### define

Define the new web component


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
name  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The name of the component  |  required  |
component  |  **{ SWebComponent }**  |  The component class  |  required  |


### get

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

### get

Get the default props for this particular instance

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** The default props

### get

Return an array of props to set on the dom


### get

Get physical props for this particular instance

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** The physical props array

### get

Return an array of required props to init the component


### get

Get the required props array for this particular instance

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array" target="_blank" title="Array">Array</a> }** An array of required props

### css

Component css


### get

Return an array of props to set on the dom


### get

Get physical props for this particular instance

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** The physical props array

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
nextProps  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**  |  An object that represent the props that have been updated  |  required  |
nextPropsArray  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array" target="_blank" title="Array">Array</a> }**  |  An array representation of the nextProps object [{name:...,value:...}]  |  required  |

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

### createdCallback

When the component is created


### attachedCallback

When the element is attached


### detachedCallback

When the component is detached


### attributeChangedCallback

When any of the component attribute changes


### dispatchComponentEvent

Dispatch an event from the tag with namespaced event name
This will dispatch actually two events :
1. {tagName}.{name} : example : s-datepicker.change
2. {name} 		   : example : change



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
name  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The event name  |  required  |
data  |  **{ Mixed }**  |  Some data to attach to the event  |  required  |


### setProps

Set properties


### setProp

Set a property


### isComponentMounted

Check if component is mounted

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** true if mounted, false if not

### mutate

Mutate the dom using an optimize requestAnimationFrame technique


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
cb  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  The callback to exexute  |  required  |


### componentClassName

componentClassName
Set a class that will be construct with the componentNameDash,
an optional element and modifier


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
element  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The element name  |  optional  |  null
modifier  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The modifier name  |  optional  |  null
state  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The state name  |  optional  |  null

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** The generated class

### componentSelector

Get a component selector class built with the passed element, modifier and state parameters


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
element  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The element name  |  optional  |  null
modifier  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The modifier name  |  optional  |  null
state  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The state name  |  optional  |  null

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** The generated class

### hasComponentClass

hasComponentClass
Check if the passed element has the component class generated by the element and modifier argument


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to check  |  required  |
element  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The element name  |  optional  |  null
modifier  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The modifier name  |  optional  |  null
state  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The state name  |  optional  |  null

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** The check result

### addComponentClass

Add a class on the passed element that will be construct with the componentNameDash,
an optional element, modifier and state


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
element  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The element name  |  optional  |  null
modifier  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The modifier name  |  optional  |  null
state  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The state name  |  optional  |  null

Return **{ SComponent }}** The component itself

### removeComponentClass

Remove a class on the passed element that will be construct with the componentNameDash,
an optional element, modifier and state


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
element  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The element name  |  optional  |  null
modifier  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The modifier name  |  optional  |  null
state  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The state name  |  optional  |  null

Return **{ SComponent }}** The component itself