# strToHtml

Return the html (dom) version of a string


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
html  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The string to convert to dom nodes  |  required  |

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The dom nodes representation of the passed string

### Example
```js
	import strToHtml from 'coffeekraken-sugar/js/utils/strings/strToHtml'
const myString = '<p>Hello World</p>'
strToHtml(myString) // <p>Hello World</p>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)