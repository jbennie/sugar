


-----------------------------
## API
-----------------------------

### constructorName(Object obj) : String
Return the constructor name of the passed object

- Privacy : **Public**

- Return : **String** : The constructor name

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
obj | **Object** | The object to get the constructor name from | required | 


#### Sample
```js
class MyCoolClass {
		// class implementation...
}
const myObj = new MyCoolClass();
console.log(constructorName(myObj)); => MyCoolClass

```


