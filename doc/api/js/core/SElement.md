
# SElement  extends { SObject }
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

#### Example
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
Author : Olivier Bossel <olivier.bossel@gmail.com>
## Constructor

Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The HTMLElement to handle  |  required  |



## Properties


### elm

Store the actual DOM element that the SElement instance manage

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**

### attr

Store the element attributes in object format
This object will reflect the HTML state into the dom
and will keep updated until the SElement instance has been destroyed

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**

### originalElement

Original HTMLElement before any SElement manipulation

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**

## Methods


### initDependencies

Init dependencies at class level


### registerInitDependency

Register an init dependency at class level


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
fn  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  A function that return a new promise  |  required  |


### //

Listen changes on element


### _onRemoved

When the element has been removed from the dom


### _onAdded

When the element has been added to the dom


### _onAttached

When the element is added to the dom but was living
in another element in memory and that the _onAdded method
has already been trigerred


### _onDetached

When the element is not anymore in the current page
but still lives in another element in memory


### destroy

Destroy element routine


### remove

Remove the element from the dom


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to remove  |  optional  |  this.elm

Return **{ SElement }** The SElement instance itself to maintain chainability

### append

Append the element into the dom


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to append  |  optional  |  this.elm
to  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The container in which to append the element  |  optional  |  null

Return **{ SElement }** The instance itself to maintain chainability

### watch

Watch a property on the SElement instance


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
path  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The object property path to watch  |  required  |
cb  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  The callback called when the property has been updated  |  required  |


### isElementAttached

Return if the element is attached into the dom or not
This mean that the element live into the DOM document. It this is false,
that mean that the element live into another HTML element into the memory

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** The attached status

### isElementAdded

Return if the element is added into the dom or not
This mean that the element is has been added into the dom
but it can live into another HTML element in memory and not
in the document

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** The attached status