# styleString2Object

Transform a style string to an object representation



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
style  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The style string  |  required  |

Return **{ (Object) }** The string object representation

### Example
```js
	import styleString2Object from 'coffeekraken-sugar/js/dom/styleString2Object'
const styleString = styleString2Object('padding-left:20px; display:block;');
// output => {
//		paddingLeft : '20px',
// 		display : 'block'
// }
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)