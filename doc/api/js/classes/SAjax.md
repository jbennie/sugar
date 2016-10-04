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
request | **SAjaxRequest** | The request object used to make ajax call | required | 
settings | **Object** | Some settings around the request | optional | {}

- Extends **{SObject}**
- Author **Olivier Bossel<olivier.bossel@gmail.com>**

#### Sample
```language-undefined
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

### sendInterval : Number = 1000
Set the interval time between each requests if the sendCount setting is specified

### sendCount : Integer = null
Set how many times the request has to be sent

### beforeSend : Function = null
A function that will be called before each requests to have a change to update some request params
Must return the new request params
Will recieve the actual request params and the request count as parameter

-----------------------------
## Properties
-----------------------------

### observable : Observable[https://github.com/ReactiveX/rxjs]
Store the observable instance on which you can subscribe for responses

-----------------------------
## API
-----------------------------

### send() : Promise
Send the request and return a promise
- Privacy : **Public**

- Return : **Promise** : The promise through which you will be notified when data are here



