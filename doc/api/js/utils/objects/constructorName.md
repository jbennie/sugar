


-----------------------------
## API
-----------------------------

### constructorName(obj : Object) : String
Return the constructor name of the passed object

- Privacy : **Public**

- Return : **String** : The constructor name

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
obj | **Object** | The object to get the constructor name from | required | 


#### Sample
```language-undefined
class MyCoolClass {
		// class implementation...
}
const myObj = new MyCoolClass();
console.log(constructorName(myObj)); => MyCoolClass

```


