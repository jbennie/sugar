# dispatchEvent




Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
target  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to dispatch the event from  |  required  |
name  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The event name to dispatch  |  required  |
data  |  **{ Mixed }**  |  The data to attache to the event  |  required  |

### Example
```js
	import dispatchEvent from 'sugarcss/js/dom/dispatchEvent'
dispatchEvent(myCoolHTMLElement, 'myCoolEventName', {
		var1 : 'value1'
});
```
Author : Olivier Bossel <olivier.bossel@gmail.com>