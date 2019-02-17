# isHover

Check if the mouse is hover the passed HTMLElement


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
$elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The HTMLElement to check  |  required  |

### Example
```js
	import isHover from 'coffeekraken-sugar/js/dom/isHover'
const $myElm = document.querySelector('.my-elm')
if (isHover($myElm)) {
  // do something
}
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)