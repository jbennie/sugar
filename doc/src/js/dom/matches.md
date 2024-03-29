# matches

Polyfill for the Element.matches function



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to check  |  required  |
selector  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The selector to check on the element  |  required  |

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** If the element match the selector or not

### Example
```js
	import matches from 'coffeekraken-sugar/js/dom/matches'
if (matches(myCoolHTMLElement, '.my-cool-css-selector')) {
		// the element match the selector
}
```
See : **See more** : [https://developer.mozilla.org/en/docs/Web/API/Element/matches](https://developer.mozilla.org/en/docs/Web/API/Element/matches)

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)