# textWidth

Get the text width in px of a passed string or the passed HTMLElement



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
source  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) , [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The source to process  |  required  |

Return **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }** The calculated width of the text

### Example
```js
	import textWidth from 'coffeekraken-sugar/js/dom/textWidth'
// text of an HTMLElement
const width = textWidth(myCoolHTMLElement);

// text directly (no font-size management so it's less accurate...)
const width = textWidth('Hello World');
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)