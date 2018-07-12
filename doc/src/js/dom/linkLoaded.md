# linkLoaded

Wait until the passed HTMLLinkElement is fully loaded



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
link  |  **{ [HTMLLinkElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLLinkElement) }**  |  The link tag to check the loading state  |  required  |
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  An optional callback to call  |  optional  |  null

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** The promise that will be resolved

### Example
```js
	import linkLoaded from 'sugarcss/js/dom/linkLoaded'
linkLoaded(myCoolHTMLLinlElement).then((link) => {
		// do something when the link is loaded
});
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)