# SEvent
let myEvent &#x3D; new SEvent(&#x27;myCoolEvent&#x27;, {
cancelable : true,
bubbles : false,
detail : {
// some datas to send with the event
}
});
// dispatch the event from an HTMLElement
myHTMLElement.dispatch(myEvent);
### Constructor

#### Parameters

Name | Type | Description | Optional | Default
------------ | ------------ | ------------ | ------------ | ------------
name | **String** | The | required | 
settings | **Object** | The | required | 

## Settings
Here&#x27;s the available settings

Name | Type | Description | Default
------------ | ------------ | ------------ | ------------
cancelable | **cancelable** | Set if the event is cancelable or not | true
bubbles | **bubbles** | Set if the event will bubble or not | true
detail | **detail** | Pass an object that will be sent with the event | null
## API


