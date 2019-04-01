# insertAfter

Insert an HTMLElement after another HTMLElement



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to insert  |  required  |
refElm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element after which to insert the passed element  |  required  |

### Example
```js
	import insertAfter from 'coffeekraken-sugar/js/dom/insertAfter'
insertAfter(myElementToInsert, theReferenceElement);
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)