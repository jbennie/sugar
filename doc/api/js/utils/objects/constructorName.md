


-----------------------------
## API
-----------------------------

### constructorName({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } obj) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }
Return the constructor name of the passed object

- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** : The constructor name

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
obj | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The object to get the constructor name from | required | 


#### Sample
```js
class MyCoolClass {
		// class implementation...
}
const myObj = new MyCoolClass();
console.log(constructorName(myObj)); => MyCoolClass

```


