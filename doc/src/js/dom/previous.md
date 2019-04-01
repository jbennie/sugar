# previous

Browse the passed element previous siblings to find the first element that matches the passed selector



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to start on  |  required  |
selector  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  A css selector to search for  |  required  |

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The element found or null

### Example
```js
	import previous from 'coffeekraken-sugar/js/dom/previous'
const previousElm = previous(myCoolElement, '.my-cool-class');
if (previousElm) {
		// we have found en element that matches the selector
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)