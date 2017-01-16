## Methods


### mutationObservable

Observe mutations on an HTMLElement and get them through the observable subscription



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
target  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to observe  |  required  |
settings  |  **{ MutationObserverInit }**  |  The mutation observer settings  |  required  |

Return **{ Observable }** The mutation observable

#### Example
```js
	import mutationObservable from 'sugarcss/js/dom/mutationObservable'
mutationObservable(myCoolHTMLElement).subscribe((mutation) => {
		// do something with the mutation
});
```
See more : [https://developer.mozilla.org/en/docs/Web/API/MutationObserver](https://developer.mozilla.org/en/docs/Web/API/MutationObserver)

Author : Olivier Bossel <olivier.bossel@gmail.com>