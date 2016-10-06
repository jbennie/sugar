


-----------------------------
## API
-----------------------------

### whenProperty(Object object, String property, Function checkFn = null) : (Promise)
Resolve a promise when the wanted property on the passed object exist or pass the check function provided

- Privacy : **Public**

- Return : **(Promise)** : The promise that will be resolved when the property exist on the object (and that it passes the checkFn)

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
object | **Object** | The object on which to monitor the property | required | 
property | **String** | The property to monitor | required | 
checkFn | **Function** | An optional function to check the property. The promise is resolved when this function return true | optional | null


#### Sample
```js
import whenProperty from 'sugarcss/js/utils/objects/whenProperty'

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


