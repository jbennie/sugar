


-----------------------------
## API
-----------------------------

### isUrl({ Mixed } value) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }
Check if the passed value is a valid url

- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** : The check result

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
value | **{ Mixed }** | The value to check | required | 


#### Sample
```js
isUrl('http://google.com') => true
isUrl('ftp://web.coco.com:2222') => true
isUrl('hello') => false
```


