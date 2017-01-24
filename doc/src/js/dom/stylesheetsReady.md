# Methods


## stylesheetsReady

Wait until all the HTMLLinkElement's are properly loaded



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
links  |  **{ Array<HTMLLinkElement> }**  |  The HTMLLinkElement tags to process  |  required  |
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  An optional callback function to call when all the links are loaded  |  optional  |  null

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** The promise that will be resolved when all the links are loaded

### Example
```js
	import stylesheetsReady from 'sugarcss/js/dom/stylesheetsReady'
stylesheetsReady([
		myHTMLLinkElement1,
		myHTMLLinkElement2
]).then(() => {
		// do something when all the links are loaded
});
```
Author : Olivier Bossel <olivier.bossel@gmail.com>

Default : **null) {**