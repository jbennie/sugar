## Methods


### closest

Proxy to the HTMLElement.getBoundingClientRect function.
This proxy make some optimisations like it store in cache the
result in the element while no invalidate actions has been made
like scrolling or resizing the window...



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to start on  |  required  |

Return **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }** The bouding client rect object

#### Example
```js
	import getBoundingClientRect from 'sugarcss/js/dom/getBoundingClientRect'
const rect = getBoundingClientRect(myCoolHTMLElement);
```
See more : [https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect](https://developer.mozilla.org/en/docs/Web/API/Element/getBoundingClientRect)

Author : Olivier Bossel <olivier.bossel@gmail.com>

Default : **[]**