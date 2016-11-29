


## Settings

Here's the list of available settings that you can pass to the constructor

### attributes

List of attributes to observe

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array" target="_blank" title="Array">Array</a> }**
Default : **null**

## Properties



## Methods


### attributesObservable

Observe attributes on an HTMLElement and get mutations through the observable subscription



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
target  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to observe  |  required  |
settings  |  **{ MutationObserverInit }**  |  The mutation observer settings  |  required  |

Return **{ Observable }** The mutation observable
#### Example
```js
	import attributesObservable from 'sugarcss/js/dom/attributesObservable'
attributesObservable(myCoolHTMLElement).subscribe((mutation) => {
		// do something with the mutation
});

```
Author : Olivier Bossel <olivier.bossel@gmail.com>