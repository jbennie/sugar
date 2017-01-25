# closestNotVisible

Go up the dom three to find the first element that is not visible.
Not visible mean that has either an opacity to 0, a visibility to hidden or a display to none



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to start on  |  required  |

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The element found or null

### Example
```js
	import closestNotVisible from 'sugarcss/js/dom/closestNotVisible'
const closestElm = closest(myCoolElement);
if (closestElm) {
		// we have found en element is not visible
}
```
Author : Olivier Bossel <olivier.bossel@gmail.com>