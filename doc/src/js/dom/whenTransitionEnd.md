# whenTransitionEnd

Monitor an HTMLElement to be notified when his transition has ended



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to monitor  |  required  |
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  An optional callback to call when the element transition has ended  |  optional  |  null

Return **{ (Promise) }** The promise that will be resolved when the element transition has ended

### Example
```js
	import whenTransitionEnd from 'sugarcss/js/dom/whenTransitionEnd'
whenTransitionEnd(myCoolHTMLElement).then((elm) => {
		// do something with your element transition has ended...
});
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)