# whenAttribute

Resolve a promise when the wanted attribute on the passed HTMLElement exist or pass the check function provided



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The HTMLElement on which to monitor the property  |  required  |
attribute  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The attribute to monitor  |  required  |
checkFn  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  An optional function to check the attribute. The promise is resolved when this function return true  |  optional  |  null

Return **{ (Promise) }** The promise that will be resolved when the attribute exist on the element (and that it passes the checkFn)

### Example
```js
	import whenAttribute from 'sugarcss/js/dom/whenAttribute'
whenAttribute(myCoolHTMLElement, 'value').then((value) => {
		// the value attribute exist on the element
});
// with a checkFn
whenAttribute(myCoolHTMLElement, 'value', (newVal, oldVal) => {
		// make sure the value is a number
		return typeof(newVal) === 'number';
}).then((value) => {
		// do something with your number value...
});
```
Author : Olivier Bossel <olivier.bossel@gmail.com>