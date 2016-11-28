
# SAjaxRequest
Class that represent an ajax request that will be passed to an SAjax instance

#### Example
```js
	const request = new SAjaxRequest({
 	url : '/api/...',
 	method : 'GET',
 	data : {
 		myVar : 'myVal'
 	}
});

```
Author : Olivier Bossel<olivier.bossel@gmail.com>
## Constructor

Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
params  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**  |  The request params  |  required  |



## Properties


### url

The url to call

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**

### method

The request method to use like GET, POST, DELETE or PUT

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**
Default : **GET**

### cors

Use the CORS or not (only for IE)

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }**
Default : **true**

### cache

Use the cache or not

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }**
Default : **true**

### data

The data that will be sent with the request in JSON format

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**
Default : **null**

### dataType

The data type expected from the response
Accepted dataType are : text | json | html

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**
Default : **text**

### contentType

Set the content type header to send with the request

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**
Default : **null**

### requestedWith

Set the X-Requested-With header

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**
Default : **XMLHttpRequest**

### auth

Set the Authorization header

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**
Default : **null**

### headers

Set additional headers to send with the request

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**
Default : **null**
