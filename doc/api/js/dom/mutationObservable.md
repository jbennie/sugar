




## Methods


### mutationObservable

Observe mutations on an HTMLElement and get them through the observable subscription



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
target  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to observe  |  required  |
settings  |  **{ MutationObserverInit }**  |  The mutation observer settings  |  required  |

Return **{ Observable }** The mutation observable
#### Example
```js
	import mutationObservable from 'sugarcss/js/dom/mutationObservable'
mutationObservable(myCoolHTMLElement).subscribe((mutation) => {
		// do something with the mutation
});

```
Author : Olivier Bossel <olivier.bossel@gmail.com>