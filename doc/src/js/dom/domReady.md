## Methods


### domReady

Wait that the dom is ready before resolving the promise
If you need that some css files are loaded before considering the dom as loaded
you can add the attribute 's-domready-dependency' on any css link tag



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  An optional callback that will be called when the dom is ready  |  required  |

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** A promise that will be resolved when the dom is ready

#### Example
```js
	import domReady from 'sugarcss/js/dom/domReady'
// using callback
domReady(() => {
		// do something
});
// using promise
domReady().then(() => {
		// do something
});
```
Author : Olivier Bossel <olivier.bossel@gmail.com>