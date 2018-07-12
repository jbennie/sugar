# style

Set or remove a css style property on an HTMLElement



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to process  |  required  |
styleObj  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  An object of style to apply  |  required  |

Return **{ (Object) }** The element applied style

### Example
```js
	import style from 'sugarcss/js/dom/style'
style(myCoolHTMLElement, {
		paddingLeft : 20,
		display : null
});
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)