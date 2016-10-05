


-----------------------------
## API
-----------------------------

### isUrl(value : Mixed) : Boolean
Check if the passed value is a valid url

- Privacy : **Public**

- Return : **Boolean** : The check result

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
value | **Mixed** | The value to check | required | 


#### Sample
```language-undefined
isUrl('http://google.com') => true
isUrl('ftp://web.coco.com:2222') => true
isUrl('hello') => false
```


