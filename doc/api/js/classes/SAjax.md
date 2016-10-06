# SAjax
Class that allows to simply handle ajax requests with ease.
This class give some useful features like :
- Promise support
- Observable support
- Recursive requests
-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
request | **{ [SAjaxRequest](/api/js/classes/SAjaxRequest.md) }** | The request object used to make ajax call | required | 
settings | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | Some settings around the request | optional | {}

- Extends **{ [SObject](/api/js/core/SObject.md) }**
- Author **Olivier Bossel<olivier.bossel@gmail.com>**

#### Sample
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

-----------------------------
## Settings
-----------------------------

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> } sendInterval = 1000
Set the interval time between each requests if the sendCount setting is specified

### { Integer } sendCount = null
Set how many times the request has to be sent

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> } beforeSend = null
A function that will be called before each requests to have a change to update some request params
Must return the new request params
Will recieve the actual request params and the request count as parameter

-----------------------------
## Properties
-----------------------------

### { <a class="link" href="https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md" target="_blank" title="Observable">Observable</a> }[https://github.com/ReactiveX/rxjs] observable
Store the observable instance on which you can subscribe for responses

-----------------------------
## API
-----------------------------

### send() : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }
Send the request and return a promise
- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise" target="_blank" title="Promise">Promise</a> }** : The promise through which you will be notified when data are here



