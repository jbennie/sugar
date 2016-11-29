




## Methods


### previous

Browse the passed element previous siblings to find the first element that matches the passed selector



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to start on  |  required  |
selector  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  A css selector to search for  |  required  |

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** The element found or null
#### Example
```js
	import previous from 'sugarcss/js/dom/previous'
const previousElm = previous(myCoolElement, '.my-cool-class');
if (previousElm) {
		// we have found en element that matches the selector
}

```
Author : Olivier Bossel <olivier.bossel@gmail.com>