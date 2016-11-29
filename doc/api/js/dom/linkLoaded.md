




## Methods


### linkLoaded

Wait until the passed HTMLLinkElement is fully loaded



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
link  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLLinkElement" target="_blank" title="HTMLLinkElement">HTMLLinkElement</a> }**  |  The link tag to check the loading state  |  required  |
cb  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  An optional callback to call  |  optional  |  null

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }** The promise that will be resolved
#### Example
```js
	import linkLoaded from 'sugarcss/js/dom/linkLoaded'
linkLoaded(myCoolHTMLLinlElement).then((link) => {
		// do something when the link is loaded
});

```
Author : Olivier Bossel <olivier.bossel@gmail.com>