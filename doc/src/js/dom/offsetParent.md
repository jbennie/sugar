# offset

Get the offset top and left of the passed element from his parent top left point



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to get the offset from  |  required  |

Return **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }** The offset top and left object

### Example
```js
	import offsetParent from 'coffeekraken-sugar/js/dom/offsetParent'
const offsetParentElm = offsetParent(myCoolElement);
// output : { top : 200, left : 300 }
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)