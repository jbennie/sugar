# closest

Go up the dom three to find the first element that matches the passed selector



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to start on  |  required  |
selector  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) , [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  A css selector to search for or a check function that will be used  |  required  |

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The element found or null

### Example
```js
	import closest from 'sugarcss/js/dom/closest'
const closestElm = closest(myCoolElement, '.my-cool-class');
if (closestElm) {
		// we have found en element that matches the selector
}
// the selector param can be a function that need to return either true or false like so:
closest(myCoolElement, (elm) => {
  return elm.hasAttribute('my-cool-attribute')
})
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)