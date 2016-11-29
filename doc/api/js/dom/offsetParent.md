




## Methods


### offset

Get the offset top and left of the passed element from his parent top left point



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to get the offset from  |  required  |

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** The offset top and left object
#### Example
```js
	import offsetParent from 'sugarcss/js/dom/offsetParent'
const offsetParentElm = offsetParent(myCoolElement);
// output : { top : 200, left : 300 }

```
Author : Olivier Bossel <olivier.bossel@gmail.com>