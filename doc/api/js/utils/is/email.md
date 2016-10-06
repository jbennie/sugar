


-----------------------------
## API
-----------------------------

### isEmail(Mixed value) : Boolean
Check if the passed value is a valid email address

- Privacy : **Public**

- Return : **Boolean** : The check result

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
value | **Mixed** | The value to check | required | 


#### Sample
```js
isEmail('john.doe@gmail.com') => true
isEmail('plop@yop.com') => true
isEmail('hello') => false

```


