


-----------------------------
## API
-----------------------------

### propertyProxy(obj : Object, property : String, descriptor : Object, applySetter : Boolean)

- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
obj | **Object** | The object on which to create the proxy | required | 
property | **String** | The property name that will be proxied | required | 
descriptor | **Object** | A descriptor object that contains at least a get or a set method, or both | required | 
applySetter | **Boolean** | If need to apply the descriptor setter directly on the current value or not | required | 


#### Sample
```language-undefined
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


