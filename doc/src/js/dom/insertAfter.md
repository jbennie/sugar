## Methods


### insertAfter




Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to insert  |  required  |
refElm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element after which to insert the passed element  |  required  |

#### Example
```js
	import insertAfter from 'sugarcss/js/dom/insertAfter'
insertAfter(myElementToInsert, theReferenceElement);
```
Author : Olivier Bossel <olivier.bossel@gmail.com>