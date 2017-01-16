## Methods


### scrollTo




Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
target  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to scroll to  |  required  |
duration  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The animation duration  |  required  |
easing  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  An easing Function  |  required  |
offset  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  The destination offset  |  required  |
align  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The destination align (top, center, bottom)  |  required  |
onFinish  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  A callback to call when the animation if finished  |  required  |

#### Example
```js
	import scrollTop from 'sugarcss/js/dom/scrollTo'
import easeInOutQuad from 'sugarcss/js/easings/easeInOutQuad'
scrollTo(myCoolHTMLElement, 2000, easeInOutQuad);
```
Author : Olivier Bossel <olivier.bossel@gmail.com>