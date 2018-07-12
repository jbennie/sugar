# getStyleProperty

Get a style property on the passed element through the computed style.
This function try to store the actual style to not trigger more that 1 redraw
each js execution loop.



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to get style from  |  required  |
property  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The css property to get  |  required  |

Return **{ Mixed }** The style value

### Example
```js
	import getStyleProperty from 'sugarcss/js/dom/getStyleProperty'
const opacity = getStyleProperty(myCoolHTMLElement, 'opacity');
```
See : **See more** : [https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle)

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)