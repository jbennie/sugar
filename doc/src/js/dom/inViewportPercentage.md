# inViewportPercentage

Return how many percent the passed element is visible in the viewport



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to get the in viewport percentage from  |  required  |

Return **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }** The percentage visible in the viewport

### Example
```js
	import inViewportPercentage from 'coffeekraken-sugar/js/dom/inViewportPercentage'
const percentage = inViewportPercentage(myCoolHTMLElement);
// 20
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)