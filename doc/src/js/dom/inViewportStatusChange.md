# inViewportStatusChange

Monitor when the passed element enter or exit the viewport



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to monitor  |  required  |
onEnter  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  Callback when the element enter the viewport  |  required  |
onExit  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  Callback when the element exit the viewport  |  required  |

Return **{ InViewportStatusChangeDetector }** The in viewport status change detector instance

### Example
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
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)