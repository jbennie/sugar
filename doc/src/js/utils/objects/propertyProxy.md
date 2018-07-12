# propertyProxy

Create a proxy for and object property.
This gives you the possibility to process the data of the property
when it is getted or setted.



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
obj  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The object on which to create the proxy  |  required  |
property  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The property name that will be proxied  |  required  |
descriptor  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  A descriptor object that contains at least a get or a set method, or both  |  required  |
applySetterAtStart  |  **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**  |  If need to apply the descriptor setter directly on the current value or not  |  required  |

### Example
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
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)