# SAjax
Class that allows to simply handle ajax requests with ease.
This class give some useful features like :
- Promise support
- Observable support
- Recursive requests
### Constructor

#### Parameters

Name | Type | Description | Optional | Default
------------ | ------------ | ------------ | ------------ | ------------
request | **SAjaxRequest[./SAjaxRequest]** | The | required | 
settings | **Object** | Some | optional | {}

## Settings
Here&#x27;s the available settings

Name | Type | Description | Default
------------ | ------------ | ------------ | ------------
undefined | **undefined** | Set the interval time between each requests if the sendCount setting is specified | 1000
undefined | **undefined** | Set how many times the request has to be sent | null
undefined | **undefined** | A function that will be called before each requests to have a change to update some request params
Must return the new request params
Will recieve the actual request params and the request count as parameter | null
## API


