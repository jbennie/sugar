# SComponent
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

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
name | **String** | The component name in camelcase | required | 
elm | **HTMLElement** | The HTMLElement handled by this component | required | 
default_settings | **Object** | The default settings of the component | optional | {}
settings | **Object** | The settings passed to the component | optional | {}

- Extends **{SElement}**
- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
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

-----------------------------
## Settings
-----------------------------

### String initWhen
Define when the component has to be
initiated. It can be 'visible', 'inViewport', 'added', 'hover', 'click'

### Number autoDestroyTimeout
Define after how many time the component has to destroy itself
That starts when the component is not in the
dom of has been detached
-1 meand no auto destroy

### Function beforeInit
Callback before the component initialisation

### Function afterInit
Callback after the component initialisation

### Function beforeDestroy
Callback before the component is destroyed

### Function afterDestroy
afterDestroy
Callback after the component has been destroyed

### Function onAdded
Callback when the element is added to the dom

### Function onRemoved
Callback when the element is removed from the dom

### Function onAttached
Callback when the element is attached to the dom

### Function onDetached
Callback when the element is detached from the dom

### Function onEnabled
Callback when the element has just been enabled

### Function onDisabled
Callback when the element has just been disabled

-----------------------------
## Properties
-----------------------------

### Object settings
Store the component settings

### String componentId
Store the component uniqid

### String componentName
Store the name of the component in camelcase format

### String componentNameDash
Store the name of the component in dash format 's-date-...'

-----------------------------
## API
-----------------------------

### _init()
Init component
- Privacy : **Protected**




### _onAdded()
When the component is added to the dom
- Privacy : **Protected**




### _onRemoved()
When the component is removed from the dom
- Privacy : **Protected**




### _onAttached()
When the element is added to the dom but was living
in another element in memory and that the _onAdded method
has already been trigerred
- Privacy : **Protected**




### _onDetached()
When the element is not anymore in the current page
but still lives in another element in memory
- Privacy : **Protected**




### disable() : SComponent
Disable the component
- Privacy : **Public**

- Return : **SComponent** : The component instance itself


### enable() : SComponent
Enable the component
- Privacy : **Public**

- Return : **SComponent** : The component instance itself


### destroy() : SComponent
Destroy routine
- Privacy : **Public**

- Return : **SComponent** : The component instance itself


### componentClassName(String element = null, String modifier = null, String state = null) : String
componentClassName
Set a class that will be construct with the componentNameDash,
an optional element and modifier
- Privacy : **Public**

- Return : **String** : The generated class

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
element | **String** | The element name | optional | null
modifier | **String** | The modifier name | optional | null
state | **String** | The state name | optional | null


### componentSelector(String element = null, String modifier = null, String state = null) : String
Get a component selector class built with the passed element, modifier and state parameters
- Privacy : **Public**

- Return : **String** : The generated class

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
element | **String** | The element name | optional | null
modifier | **String** | The modifier name | optional | null
state | **String** | The state name | optional | null


### hasComponentClass(HTMLElement elm, String element = null, String modifier = null, String state = null) : Boolean
hasComponentClass
Check if the passed element has the component class generated by the element and modifier argument
- Privacy : **Public**

- Return : **Boolean** : The check result

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to check | required | 
element | **String** | The element name | optional | null
modifier | **String** | The modifier name | optional | null
state | **String** | The state name | optional | null


### addComponentClass(String element = null, String modifier = null, String state = null) : SComponent}
Add a class on the passed element that will be construct with the componentNameDash,
an optional element, modifier and state
- Privacy : **Public**

- Return : **SComponent}** : The component itself

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
element | **String** | The element name | optional | null
modifier | **String** | The modifier name | optional | null
state | **String** | The state name | optional | null


### removeComponentClass(String element = null, String modifier = null, String state = null) : SComponent}
Remove a class on the passed element that will be construct with the componentNameDash,
an optional element, modifier and state
- Privacy : **Public**

- Return : **SComponent}** : The component itself

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
element | **String** | The element name | optional | null
modifier | **String** | The modifier name | optional | null
state | **String** | The state name | optional | null


### watchSettings(Function callback)
Watch all settings
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
callback | **Function** | The callback to launch when a setting has changed | required | 


### isDestroyed() : Boolean
Return if the component has been destroyed
- Privacy : **Public**

- Return : **Boolean** : destroyed status


### isDisabled() : Boolean
Return if the component is disabled
- Privacy : **Public**

- Return : **Boolean** : disable status


### isEnabled() : Boolean
Return is the component is enabled
- Privacy : **Public**

- Return : **Boolean** : enable status



