




## Methods


### whenTransitionEnd

Monitor an HTMLElement to be notified when his transition has ended



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to monitor  |  required  |
cb  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  An optional callback to call when the element transition has ended  |  optional  |  null

Return **(Promise)** The promise that will be resolved when the element transition has ended
#### Example
```js
	import whenTransitionEnd from 'sugarcss/js/dom/whenTransitionEnd'
whenTransitionEnd(myCoolHTMLElement).then((elm) => {
		// do something with your element transition has ended...
});

```
Author : Olivier Bossel <olivier.bossel@gmail.com>