




## Methods


### closestNotVisible

Go up the dom three to find the first element that is not visible.
Not visible mean that has either an opacity to 0, a visibility to hidden or a display to none



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to start on  |  required  |

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** The element found or null
#### Example
```js
	import closestNotVisible from 'sugarcss/js/dom/closestNotVisible'
const closestElm = closest(myCoolElement);
if (closestElm) {
		// we have found en element is not visible
}

```
Author : Olivier Bossel <olivier.bossel@gmail.com>