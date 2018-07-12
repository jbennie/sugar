# attributesObservable

Observe attributes on an HTMLElement and get mutations through the observable subscription



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
target  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to observe  |  required  |
settings  |  **{ MutationObserverInit }**  |  The mutation observer settings  |  required  |

Return **{ Observable }** The mutation observable

### Example
```js
	import attributesObservable from 'sugarcss/js/dom/attributesObservable'
attributesObservable(myCoolHTMLElement).subscribe((mutation) => {
		// do something with the mutation
});
```
See : **See more** : [https://developer.mozilla.org/en/docs/Web/API/MutationObserver](https://developer.mozilla.org/en/docs/Web/API/MutationObserver)

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)





## Settings

Here's the list of available setting(s).

### attributes

List of attributes to observe

Type : **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**

Default : **null**