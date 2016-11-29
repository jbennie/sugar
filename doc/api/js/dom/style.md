




## Methods


### style

Set or remove a css style property on an HTMLElement



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to process  |  required  |
styleObj  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**  |  An object of style to apply  |  required  |

Return **(Object)** The element applied style
#### Example
```js
	import style from 'sugarcss/js/dom/style'
style(myCoolHTMLElement, {
		paddingLeft : 20,
		display : null
});

```
Author : Olivier Bossel <olivier.bossel@gmail.com>