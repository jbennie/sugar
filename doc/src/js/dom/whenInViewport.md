# whenInViewport

Monitor an HTMLElement to be notified when it is in the viewport



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to monitor  |  required  |
offset  |  **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**  |  An offset that represent the distance before entering the viewport for the detection or an object with top, right, bottom and left offsets  |  optional  |  50

Return **{ (Promise) }** The promise that will be resolved when the element is in the viewport

### Example
```js
	import whenInViewport from 'sugarcss/js/dom/whenInViewport'
whenInViewport(myCoolHTMLElement).then((elm) => {
		// do something with your element that has entered the viewport...
});
```
Author : Olivier Bossel <olivier.bossel@gmail.com>