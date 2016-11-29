




## Methods


### setRecursiveTimeout

This utils function allows you to call a passed function each x time during a certain duration



Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
fn  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**  |  The function to execute  |  required  |
timeout  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }**  |  The time between each execution  |  required  |
duration  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }**  |  The duration of the timeout  |  required  |
spread  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }**  |  An optional spread time that will be used to randomize the function executions times  |  optional  |  0

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }** clearer
#### Example
```js
	setRecursiveTimeout(() => {
		// I will be executed 10 times
}, 1000, 10000);

```
Author : Olivier Bossel <olivier.bossel@gmail.com>