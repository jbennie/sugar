# getTranslateProperties

Get a translate properties of an HTMLElement



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to get the properties from  |  required  |

Return **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }** The translate x,y and z properties

### Example
```js
	import getTranslateProperties from 'sugarcss/js/dom/getTranslateProperties'
const props = getTranslateProperties(myCoolHTMLElement);
// output format
// {
// 	x : 100,
// 	y : 0,
// 	z : 0
// }
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)