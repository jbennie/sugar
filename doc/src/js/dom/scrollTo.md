# scrollTo

Function that let you make a smooth page scroll to a specific element in the page



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
target  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to scroll to  |  required  |
duration  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The animation duration  |  required  |
easing  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  An easing Function  |  required  |
offset  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The destination offset  |  required  |
align  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The destination align (top, center, bottom)  |  required  |
onFinish  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  A callback to call when the animation if finished  |  required  |

### Example
```js
	import scrollTop from 'coffeekraken-sugar/js/dom/scrollTo'
import easeInOutQuad from 'coffeekraken-sugar/js/easings/easeInOutQuad'
scrollTo(myCoolHTMLElement, 2000, easeInOutQuad);
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)

Default : **false**