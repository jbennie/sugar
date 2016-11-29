
# SComponent  extends { SElement }
This class allows to wrap an HTMLElement with a lot of useful features like:
- Settings management through API and element attributes
- Keep in sync element attributes with this.attr property
- Complete and powerfull lifecycle management
- When the component is added : `_onAdded`
- The component is bein inited : `_init`
- The component is bein enabled : `enable`
- Life of your component...
- The component is destroyed : `destroy`
- Either by calling manually the `destroy` method...
- ...or when the component is not in the dom anymore since the settings.autoDestroyTimeout
- The component is bein disabled : `disable`
- Watch some component property through a simple `watch` method
- Watch any settings update through the simple `watchSettings` method
- And more...

#### Example
```js
	// create a new component
class myComponent extends SComponent {
		constructor(elm, settings = {}, name = 'myComponent') {
			super(name, elm, {
				myCoolSettings : true
			}, settings)
		}
		_init() {
			super._init();
			// do something when my component is inited
		}
		_onAdded() {
			super._onAdded();
			// do something when my component is added to the dom
		}
		enable() {
			// do something when my component is enabled
			super.enable();
		}
		disable() {
			// do something when my component is disabled
			super.disable();
		}
		destroy() {
			// handle the destroy routine of my component
			super.destroy();
		}
		// my component methods here...
}

```
Author : Olivier Bossel <olivier.bossel@gmail.com>
## Constructor

Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
name  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The component name in camelcase  |  required  |
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The HTMLElement handled by this component  |  required  |
default_settings  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**  |  The default settings of the component  |  optional  |  {}
settings  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**  |  The settings passed to the component  |  optional  |  {}


## Settings

Here's the list of available settings that you can pass to the constructor

### initWhen

Define when the component has to be
initiated. It can be 'visible', 'inViewport', 'added', 'hover', 'click'

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**

### autoDestroyTimeout

Define after how many time the component has to destroy itself
That starts when the component is not in the
dom of has been detached
-1 meand no auto destroy

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }**

### beforeInit

Callback before the component initialisation

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**

### afterInit

Callback after the component initialisation

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**

### beforeDestroy

Callback before the component is destroyed

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**

### afterDestroy

afterDestroy
Callback after the component has been destroyed

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**

### onAdded

Callback when the element is added to the dom

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**

### onRemoved

Callback when the element is removed from the dom

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**

### onAttached

Callback when the element is attached to the dom

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**

### onDetached

Callback when the element is detached from the dom

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**

### onEnabled

Callback when the element has just been enabled

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**

### onDisabled

Callback when the element has just been disabled

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**

## Properties


### settings

Store the component settings

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**













### componentId

Store the component uniqid

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**

### componentName

Store the name of the component in camelcase format

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**

### componentNameDash

Store the name of the component in dash format 's-date-...'

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**

## Methods


### _init

Init component


### _onAdded

When the component is added to the dom


### _onRemoved

When the component is removed from the dom


### _onAttached

When the element is added to the dom but was living
in another element in memory and that the _onAdded method
has already been trigerred


### _onDetached

When the element is not anymore in the current page
but still lives in another element in memory


### disable

Disable the component

Return **{ SComponent }** The component instance itself

### enable

Enable the component

Return **{ SComponent }** The component instance itself

### destroy

Destroy routine

Return **{ SComponent }** The component instance itself

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

### watchSettings

Watch all settings


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
callback  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  The callback to launch when a setting has changed  |  required  |


### isDestroyed

Return if the component has been destroyed

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** destroyed status

### isDisabled

Return if the component is disabled

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** disable status

### isEnabled

Return is the component is enabled

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** enable status