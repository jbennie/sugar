




## Methods


### inViewportStatusChange

Monitor when the passed element enter or exit the viewport



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to monitor  |  required  |
onEnter  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  Callback when the element enter the viewport  |  required  |
onExit  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  Callback when the element exit the viewport  |  required  |

Return **{ InViewportStatusChangeDetector }** The in viewport status change detector instance
#### Example
```js
	import inViewportStatusChange from 'sugarcss/js/dom/inViewportStatusChange'
const detector = inViewportStatusChange(myCoolHTMLElement, () => {
		// i'm now in the viewport
}, () => {
		// i'm now out of the viewport
});

// stop listening
detector.destroy();

```
Author : Olivier Bossel <olivier.bossel@gmail.com>