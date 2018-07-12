# SWatcher

This class allows you to easily monitor some object properties and get the new and old value of it


### Example
```js
	// create the watcher instance
const watcher = new SWatcher();

// object to watch
let myObject = {
		title : 'Hello World'
};

// watch the object
watcher.watch(myObject, 'title', (newVal, oldVal) => {
 	// do something when the title changes
});

// update the title
myObject.title = 'Hello Universe';
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


## Constructor







## Methods


### destroy

Destroy the watcher


### watch

Watch something on an object


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
object  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  The object to watch  |  required  |
path  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The property path to watch on the object  |  required  |
cb  |  **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**  |  The callback called when the property is updated  |  required  |