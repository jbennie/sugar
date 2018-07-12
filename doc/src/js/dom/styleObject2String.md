# styleObject2String

Transform a style object to inline string separated by ;



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
styleObj  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  An object of style to apply  |  required  |

Return **{ (String) }** The string style representation

### Example
```js
	import styleObject2String from 'sugarcss/js/dom/styleObject2String'
const styleString = styleObject2String({
		paddingLeft : '20px',
		display : 'block'
});
// output => padding-left:20px; display:block;
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)