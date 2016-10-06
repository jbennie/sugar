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
```js
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

### String url
The url to call

### String method = GET
The request method to use like GET, POST, DELETE or PUT

### Boolean cors = true
Use the CORS or not (only for IE)

### Boolean cache = true
Use the cache or not

### Object data = null
The data that will be sent with the request in JSON format

### String dataType = text
The data type expected from the response
Accepted dataType are : text | json | html

### String contentType = null
Set the content type header to send with the request

### String requestedWith = XMLHttpRequest
Set the X-Requested-With header

### String auth = null
Set the Authorization header

### Object headers = null
Set additional headers to send with the request


