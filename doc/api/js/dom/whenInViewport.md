




## Methods


### whenInViewport

Monitor an HTMLElement to be notified when it is in the viewport



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to monitor  |  required  |
cb  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  An optional callback to call when the element is in the viewport  |  optional  |  null

Return **(Promise)** The promise that will be resolved when the element is in the viewport
#### Example
```js
	import whenInViewport from 'sugarcss/js/dom/whenInViewport'
whenInViewport(myCoolHTMLElement).then((elm) => {
		// do something with your element that has entered the viewport...
});

```
Author : Olivier Bossel <olivier.bossel@gmail.com>