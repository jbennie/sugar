




## Methods


### isVisible

Check if the passed HTMLElement is visible or not.
Visible mean that it has not an opacity of 0, not a visibility of hidden and not a display of none



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to check  |  required  |

Return **{Boolean** If the element is visible or not
#### Example
```js
	import isVisible from 'sugarcss/js/dom/isVisible'
if (isVisible(myCoolHTMLElement) {
		// i'm visible
}

```
Author : Olivier Bossel <olivier.bossel@gmail.com>