




## Methods


### scrollTo




Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
target  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to scroll to  |  required  |
duration  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }**  |  The animation duration  |  required  |
easing  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  An easing Function  |  required  |
offset  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }**  |  The destination offset  |  required  |
align  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The destination align (top, center, bottom)  |  required  |
onFinish  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  A callback to call when the animation if finished  |  required  |

#### Example
```js
	import scrollTop from 'sugarcss/js/dom/scrollTo'
import easeInOutQuad from 'sugarcss/js/easings/easeInOutQuad'
scrollTo(myCoolHTMLElement, 2000, easeInOutQuad);

```
Author : Olivier Bossel <olivier.bossel@gmail.com>