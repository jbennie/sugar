# SWathcer
This class allows you to easily monitor some object properties and get the new and old value of it


- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
```language-undefined
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




### watch(object : Object, path : String, cb : Function)
Watch something on an object
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
object | **Object** | The object to watch | required | 
path | **String** | The property path to watch on the object | required | 
cb | **Function** | The callback called when the property is updated | required | 



