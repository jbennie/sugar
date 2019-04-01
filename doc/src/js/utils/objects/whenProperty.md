# whenProperty

Resolve a promise when the wanted property on the passed object exist or pass the check function provided



### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
object  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The object on which to monitor the property  |  required  |
property  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The property to monitor  |  required  |
checkFn  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  An optional function to check the property. The promise is resolved when this function return true  |  optional  |  null

Return **{ (Promise) }** The promise that will be resolved when the property exist on the object (and that it passes the checkFn)

### Example
```js
	import whenProperty from 'coffeekraken-sugar/js/utils/objects/whenProperty'

const myObj = {
 	title : 'Hello'
};

whenProperty(myObj, 'title').then((value) => {
		// the object has a title property now
});

// with a checkFn
whenProperty(myObj, 'title', (newVal, oldVal) => {
		// when the property is 'Hello World'
		return newVal === 'Hello World';
}).then((value) => {
		// do something with your Hello World
});

setTimeout(() => {
		// this will resolve the promise
		myObj.title = 'Hello World';
},1000);
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)