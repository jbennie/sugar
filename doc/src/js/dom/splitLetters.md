# splitLetters

Split each letters inside an HTMLElement by scoping them inside multiple tags.
Here's an result sample for : Hello World
```html
<span style="white-space:nowrap">
	<span class="split-letters">
		<span class="split-letters__letter">H</span>
	</span>
	<span class="split-letters">
		<span class="split-letters__letter">e</span>
	</span>
	<span class="split-letters">
		<span class="split-letters__letter">l</span>
	</span>
	<span class="split-letters">
		<span class="split-letters__letter">l</span>
	</span>
	<span class="split-letters">
		<span class="split-letters__letter">o</span>
	</span>
</span>
<span class="split-letters">
	<span class="split-letters__letter">&nbsp;</span>
</span>
<span style="white-space:nowrap">
	<span class="split-letters">
		<span class="split-letters__letter">W</span>
	</span>
	<span class="split-letters">
		<span class="split-letters__letter">o</span>
	</span>
	<span class="split-letters">
		<span class="split-letters__letter">r</span>
	</span>
	<span class="split-letters">
		<span class="split-letters__letter">l</span>
	</span>
	<span class="split-letters">
		<span class="split-letters__letter">d</span>
	</span>
</span>
```


### Example
```js
	import __splitLetters from 'coffeekraken-sugar/js/dom/splitLetters'
const myCoolElement = document.querySelector('.my-cool-element');
__splitLetters(myCoolElement);
```

Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
elm  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The HTMLElement to split letters in  |  required  |
tag  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The tag to use to split the letters  |  optional  |  "span"
tagClass  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The class to apply on the tags  |  optional  |  "s-split-letters"

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The HTMLElement processed

Author : Olivier Bossel <olivier.bossel@gmail.com>