# Methods


## closest

Go up the dom three to find the first element that matches the passed selector



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to start on  |  required  |
selector  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) , [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  A css selector to search for or a check function that will be used  |  required  |

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The element found or null

### Example
```js
	import closest from 'sugarcss/js/dom/closest'
const closestElm = closest(myCoolElement, '.my-cool-class');
if (closestElm) {
		// we have found en element that matches the selector
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>