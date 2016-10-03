# SAjax

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
*
// optionally listen for data through observable
ajx.observable.subscribe((response) => {
		// do something with the response here...
}, (error) => {
		// something went wrong
}, () => {
		// all the requests have been sent
});
*
// send and listen for data
ajx.send().then((response) => {
		// do something with response here...
}, (error) => {
		// something went wrong...
});
```

### Constructor

#### Parameters

Name | Type | Description | Optional | Default
------------ | ------------ | ------------ | ------------ | ------------
request | **SAjaxRequest** | The request object used to make ajax call | required | 
settings | **Object** | Some settings around the request | optional | {}

## Settings
Here's the available settings

### sendInterval
Set the interval time between each requests if the sendCount setting is specified
- Type **Number**
- Default **1000**

### sendCount
Set how many times the request has to be sent
- Type **Integer**
- Default **null**

### beforeSend
A function that will be called before each requests to have a change to update some request params
Must return the new request params
Will recieve the actual request params and the request count as parameter
- Type **Function**
- Default **null**

## API

### send()
Send the request and return a promise

Return **Promise** The promise through which you will be notified when data are here


