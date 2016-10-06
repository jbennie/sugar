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
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The HTMLElement to handle | required | 

- Extends **{ [SObject](/api/js/core/SObject.md) }**
- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
```js
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

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm
Store the actual DOM element that the SElement instance manage

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } attr
Store the element attributes in object format
This object will reflect the HTML state into the dom
and will keep updated until the SElement instance has been destroyed

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } originalElement
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




### remove({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm = this.elm) : { [SElement](/api/js/core/SElement.md) }
Remove the element from the dom
- Privacy : **Public**

- Return : **{ [SElement](/api/js/core/SElement.md) }** : The SElement instance itself to maintain chainability

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element to remove | optional | this.elm


### append({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm = this.elm, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } to = null) : { [SElement](/api/js/core/SElement.md) }
Append the element into the dom
- Privacy : **Public**

- Return : **{ [SElement](/api/js/core/SElement.md) }** : The instance itself to maintain chainability

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element to append | optional | this.elm
to | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The container in which to append the element | optional | null


### watch({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } path, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> } cb)
Watch a property on the SElement instance
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
path | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The object property path to watch | required | 
cb | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }** | The callback called when the property has been updated | required | 


### isElementAttached() : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }
Return if the element is attached into the dom or not
This mean that the element live into the DOM document. It this is false,
that mean that the element live into another HTML element into the memory
- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** : The attached status


### isElementAdded() : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }
Return if the element is added into the dom or not
This mean that the element is has been added into the dom
but it can live into another HTML element in memory and not
in the document
- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** : The attached status



