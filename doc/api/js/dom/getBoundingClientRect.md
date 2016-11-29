




## Methods


### closest

Proxy to the HTMLElement.getBoundingClientRect function.
This proxy make some optimisations like it store in cache the
result in the element while no invalidate actions has been made
like scrolling or resizing the window...



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to start on  |  required  |

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** The bouding client rect object
#### Example
```js
	import getBoundingClientRect from 'sugarcss/js/dom/getBoundingClientRect'
const rect = getBoundingClientRect(myCoolHTMLElement);

```
Author : Olivier Bossel <olivier.bossel@gmail.com>