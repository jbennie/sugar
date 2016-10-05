# SAjaxRequest
Class that represent an ajax request that will be passed to an SAjax instance

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
params | **Object** | The request params | required | 

- Author **Olivier Bossel<olivier.bossel@gmail.com>**

#### Sample
```language-undefined
const request = new SAjaxRequest({
 	url : '/api/...',
 	method : 'GET',
 	data : {
 		myVar : 'myVal'
 	}
});

```


-----------------------------
## Properties
-----------------------------

### url : String
The url to call

### method : String = GET
The request method to use like GET, POST, DELETE or PUT

### cors : Boolean = true
Use the CORS or not (only for IE)

### cache : Boolean = true
Use the cache or not

### data : Object = null
The data that will be sent with the request in JSON format

### dataType : String = text
The data type expected from the response
Accepted dataType are : text | json | html

### contentType : String = null
Set the content type header to send with the request

### requestedWith : String = XMLHttpRequest
Set the X-Requested-With header

### auth : String = null
Set the Authorization header

### headers : Object = null
Set additional headers to send with the request


