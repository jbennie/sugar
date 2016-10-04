# SElement
This class allows to wrap an HTMLElement with a lot of useful features like:
- Keep in sync element attributes with this.attr property
- Complete and powerfull lifecycle management
 	- When the element is added : `_onAdded`
 	- The element is bein inited : `_init`
 	- Life of your element...
 	- The element is destroyed : `destroy`
 		- Either by calling manually the `destroy` method...
 		- ...or when the element is not in the dom anymore since the settings.autoDestroyTimeout
 - Watch some element property through a simple `watch` method
 - And more...

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The HTMLElement to handle | required | 

- Extends **{SObject}**
- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
```language-undefined
// create a new element
class myElement extends SElement {
		constructor(elm) {
			super(elm);
		}
		_init() {
			super._init();
			// do something when my element is inited
		}
		_onAdded() {
			super._onAdded();
			// do something when my element is added to the dom
		}
		destroy() {
			// handle the destroy routine of my element
			super.destroy();
		}
		// my element methods here...
}

```


-----------------------------
## Properties
-----------------------------

### elm : HTMLElement
Store the actual DOM element that the SElement instance manage

### attr : Object
Store the element attributes in object format
This object will reflect the HTML state into the dom
and will keep updated until the SElement instance has been destroyed

### originalElement : HTMLElement
Original HTMLElement before any SElement manipulation

-----------------------------
## API
-----------------------------

### _onRemoved()
When the element has been removed from the dom
- Privacy : **Protected**




### _onAdded()
When the element has been added to the dom
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




### destroy()
Destroy element routine
- Privacy : **Public**




### remove(elm : HTMLElement = this.elm) : SElement
Remove the element from the dom
- Privacy : **Public**

- Return : **SElement** : The SElement instance itself to maintain chainability

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to remove | optional | this.elm


### append(elm : HTMLElement = this.elm, to : HTMLElement = null) : SElement
Append the element into the dom
- Privacy : **Public**

- Return : **SElement** : The instance itself to maintain chainability

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to append | optional | this.elm
to | **HTMLElement** | The container in which to append the element | optional | null


### watch(path : String, cb : Function)
Watch a property on the SElement instance
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
path | **String** | The object property path to watch | required | 
cb | **Function** | The callback called when the property has been updated | required | 


### isElementAttached() : Boolean
Return if the element is attached into the dom or not
This mean that the element live into the DOM document. It this is false,
that mean that the element live into another HTML element into the memory
- Privacy : **Public**

- Return : **Boolean** : The attached status


### isElementAdded() : Boolean
Return if the element is added into the dom or not
This mean that the element is has been added into the dom
but it can live into another HTML element in memory and not
in the document
- Privacy : **Public**

- Return : **Boolean** : The attached status



