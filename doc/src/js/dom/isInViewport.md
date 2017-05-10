# isInViewport

Check if the passed HTMLElement is in the viewport or not



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to insert  |  required  |
offset  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  An object of top, right, bottom and left offset used to detect the status or an object with top, right, bottom and left offsets  |  optional  |  50

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** If the element is in the viewport or not

### Example
```js
	import isInViewport from 'sugarcss/js/dom/isInViewport'
if (isInViewport(myCoolHTMLElement) {
		// i'm in the viewport
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>