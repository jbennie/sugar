# appendStylesheetLink

Append a stylesheet link to the page head


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
href  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  THe url to the stylesheet  |  required  |

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** A promise when the stylesheet is loaded with the link element as parameter

### Example
```js
	import appendStylesheetLink from 'coffeekraken-sugar/js/dom/appendStylesheetLink'
appendStylesheetLink('/dist/css/style.css')
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)