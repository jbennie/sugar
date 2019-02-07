# nodeIndex

Return the inde of the passed node inside the html


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
node  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The node to get the index for  |  required  |

Return **{ Integer }** The index of the node inside the html

### Example
```js
	import nodeIndex from 'coffeekraken-sugar/js/dom/nodeIndex'
// assuming:
// <li>item #1</li>
// <li class="match">item #2</li>
// <li>item #3</li>
nodeIndex(document.querySelector('.match')) // 1
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)