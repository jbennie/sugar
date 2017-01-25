# whenInViewport

Monitor an HTMLElement to be notified when it is in the viewport



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to monitor  |  required  |
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  An optional callback to call when the element is in the viewport  |  optional  |  null

Return **{ (Promise) }** The promise that will be resolved when the element is in the viewport

### Example
```js
	import whenInViewport from 'sugarcss/js/dom/whenInViewport'
whenInViewport(myCoolHTMLElement).then((elm) => {
		// do something with your element that has entered the viewport...
});
```
Author : Olivier Bossel <olivier.bossel@gmail.com>

Default : **null) {**