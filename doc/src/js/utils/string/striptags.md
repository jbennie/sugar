# striptags

Strip tags of an html string


### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
html  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The html string to process  |  required  |
allowableTags  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The tags that are allowed like <h1><h2>...  |  required  |

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The processed string without tags

### Example
```js
	import striptags from 'coffeekraken-sugar/js/utils/strings/striptags'
striptags('<p><span>Hello</span> world</p>', '<span>') // <span>Hello</span> world
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)







## Methods


### parseAllowableTags

Return an array containing tags that are allowed to pass through the
algorithm.