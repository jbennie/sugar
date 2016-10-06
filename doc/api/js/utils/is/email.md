


-----------------------------
## API
-----------------------------

### isEmail({ Mixed } value) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }
Check if the passed value is a valid email address

- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** : The check result

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
value | **{ Mixed }** | The value to check | required | 


#### Sample
```js
isEmail('john.doe@gmail.com') => true
isEmail('plop@yop.com') => true
isEmail('hello') => false

```


