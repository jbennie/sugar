# splitWords

Split each words inside an HTMLElement by scoping them inside some tags.
Here's an result sample for :
Hello World

```html
<span class="split-words">Hello</span>
<span class="split-words">World</span>
```


### Example
```js
	import __splitWords from 'coffeekraken-sugar/js/dom/splitLines'
const myCoolElement = document.querySelector('.my-cool-element');
__splitWords(myCoolElement);
```

### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The HTMLElement to split words in  |  required  |
tag  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The tag to use to split the words  |  optional  |  "p"
tagClass  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The class to apply on the tags  |  optional  |  "s-split-lines"

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The HTMLElement processed

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com)