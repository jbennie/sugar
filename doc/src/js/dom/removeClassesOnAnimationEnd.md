# removeClassesOnAnimationEnd

Remove some classes on animation end



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to take care of  |  required  |
classes  |  **{ [Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array) }**  |  The classes to remove  |  required  |

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The element to mainain chainability

### Example
```js
	import removeClassesOnAnimationEnd from 'coffeekraken-sugar/js/dom/removeClassesOnAnimationEnd'
removeClassesOnAnimationEnd(myCoolElm, ['my-class'])
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)