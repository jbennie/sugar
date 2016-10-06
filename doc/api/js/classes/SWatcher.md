# SWathcer
This class allows you to easily monitor some object properties and get the new and old value of it


- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
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



-----------------------------
## API
-----------------------------

### destroy()
Destroy the watcher
- Privacy : **Public**




### watch({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } object, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } path, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> } cb)
Watch something on an object
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
object | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The object to watch | required | 
path | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The property path to watch on the object | required | 
cb | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }** | The callback called when the property is updated | required | 



