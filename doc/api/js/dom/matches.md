




## Methods


### matches

Polyfill for the Element.matches function



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to check  |  required  |
selector  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The selector to check on the element  |  required  |

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** If the element match the selector or not
#### Example
```js
	import matches from 'sugarcss/js/dom/matches'
if (matches(myCoolHTMLElement, '.my-cool-css-selector')) {
		// the element match the selector
}

```
Author : Olivier Bossel <olivier.bossel@gmail.com>