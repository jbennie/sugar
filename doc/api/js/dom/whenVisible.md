




## Methods


### whenVisible

Monitor an HTMLElement to be notified when it is visible



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to monitor  |  required  |
cb  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  An optional callback to call when the element is visible  |  optional  |  null

Return **(Promise)** The promise that will be resolved when the element is visible
#### Example
```js
	import whenVisible from 'sugarcss/js/dom/whenVisible'
whenVisible(myCoolHTMLElement).then((elm) => {
		// do something with your element that is now visible
});

```
Author : Olivier Bossel <olivier.bossel@gmail.com>