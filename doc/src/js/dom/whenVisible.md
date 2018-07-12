# whenVisible

Monitor an HTMLElement to be notified when it is visible



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to monitor  |  required  |
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  An optional callback to call when the element is visible  |  optional  |  null

Return **{ (Promise) }** The promise that will be resolved when the element is visible

### Example
```js
	import whenVisible from 'sugarcss/js/dom/whenVisible'
whenVisible(myCoolHTMLElement).then((elm) => {
		// do something with your element that is now visible
});
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)