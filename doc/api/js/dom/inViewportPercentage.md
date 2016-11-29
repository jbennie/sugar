




## Methods


### inViewportPercentage

Return how many percent the passed element is visible in the viewport



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to get the in viewport percentage from  |  required  |

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }** The percentage visible in the viewport
#### Example
```js
	import inViewportPercentage from 'sugarcss/js/dom/inViewportPercentage'
const percentage = inViewportPercentage(myCoolHTMLElement);
// 20

```
Author : Olivier Bossel <olivier.bossel@gmail.com>