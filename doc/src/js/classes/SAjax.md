# SAjax

Extends **SObject**

Class that allows to simply handle ajax requests with ease.
This class give some useful features like :
- Promise support
- Observable support
- Recursive requests

### Example
```js
	const ajx = new SAjax({
		url : 'api/...',
		method : 'GET',
		data : {
			myVar : 'myVal'
		}
}, {
		sendCount : 10,
		sendInterval : 2000,
		beforeSend : (request, sendCount) => {
			request.data.page = sendCount+1;
			return request;
		}
});

// optionally listen for data through observable
ajx.observable.subscribe((response) => {
		// do something with the response here...
}, (error) => {
		// something went wrong
}, () => {
		// all the requests have been sent
});

// send and listen for data
ajx.send().then((response) => {
		// do something with response here...
}, (error) => {
		// something went wrong...
});
```
Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)


## Constructor


#### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
request  |  **{ SAjaxRequest }**  |  The request object used to make ajax call  |  required  |
settings  |  **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**  |  Some settings around the request  |  optional  |  {}




## Settings

Here's the list of available setting(s).

### sendInterval

Set the interval time between each requests if the sendCount setting is specified

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**

Default : **1000**


### sendCount

Set how many times the request has to be sent

Type : **{ Integer }**

Default : **null**


### beforeSend

A function that will be called before each requests to have a change to update some request params
Must return the new request params
Will recieve the actual request params and the request count as parameter

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**

Default : **null**


### cache

A cache instance that will be used

Type : **{ SCache }**

Default : **null**


## Properties


### observable

Store the observable instance on which you can subscribe for responses

Type : **{ Observable }**

Default : **null**


## Methods


### send

Send the request and return a promise

Return **{ [Promise](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise) }** The promise through which you will be notified when data are here