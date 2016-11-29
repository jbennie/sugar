




## Methods


### getTranslateProperties

Get a translate properties of an HTMLElement



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to get the properties from  |  required  |

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** The translate x,y and z properties
#### Example
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
Author : Olivier Bossel <olivier.bossel@gmail.com>