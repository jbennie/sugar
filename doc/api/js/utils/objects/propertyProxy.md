




## Methods


### propertyProxy




Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
obj  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**  |  The object on which to create the proxy  |  required  |
property  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The property name that will be proxied  |  required  |
descriptor  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**  |  A descriptor object that contains at least a get or a set method, or both  |  required  |
applySetter  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }**  |  If need to apply the descriptor setter directly on the current value or not  |  required  |

#### Example
```js
	const myObject = {
		title : 'World'
};
// create the proxy
propertyProxy(myObject, 'title', {
		get : (value) => {
			return `Hello ${value}`;
		},
		set : (value) => {
			return `Youhou ${value}`;
		}
});
console.log(myObject.title) => 'Hello World';
myObject.title = 'Universe';
console.log(myObject.title) => 'Hello Youhou Universe';

```
Author : Olivier Bossel <olivier.bossel@gmail.com>