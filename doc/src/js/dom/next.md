# Methods


## next

Browse the passed element next siblings to find the first element that matches the passed selector



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to start on  |  required  |
selector  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  A css selector to search for  |  required  |

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The element found or null

### Example
```js
	import next from 'sugarcss/js/dom/next'
const nextElm = next(myCoolElement, '.my-cool-class');
if (nextElm) {
		// we have found en element that matches the selector
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>