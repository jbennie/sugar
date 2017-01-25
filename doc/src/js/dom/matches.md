# matches

Polyfill for the Element.matches function



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to check  |  required  |
selector  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The selector to check on the element  |  required  |

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** If the element match the selector or not

### Example
```js
	import matches from 'sugarcss/js/dom/matches'
if (matches(myCoolHTMLElement, '.my-cool-css-selector')) {
		// the element match the selector
}
```
See more : [https://developer.mozilla.org/en/docs/Web/API/Element/matches](https://developer.mozilla.org/en/docs/Web/API/Element/matches)

Author : Olivier Bossel <olivier.bossel@gmail.com>