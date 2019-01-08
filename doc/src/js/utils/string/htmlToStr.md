# htmlToStr

Return the string version of a dom node or the dom node and his children


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
html  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The HTMLElement to convert to string  |  required  |
deep  |  **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**  |  Include or not his children  |  optional  |  true

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The string version of the dom node

### Example
```js
	import htmlToStr from 'coffeekraken-sugar/js/utils/strings/htmlToStr'
const myDomNode = document.querySelector('.my-dom-node')
htmlToStr(myDomNode, false) // <div class="my-dom-node"></div>
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)