# InViewportStatusChangeDetector
This class allows you to monitor an HTMLElement and be notified when it enters or exit the viewport.

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to track | required | 

- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
```language-undefined
const detector = new InViewportStatusChangeDetector(myCoolHTMLElement);
detector.on('enter', (elm) => {
		// the element has entered the viewport
});
detector.on('exit', (elm) => {
		// the element has exit the viewport
});

```



-----------------------------
## API
-----------------------------

### on(status : String, cb : Function) : InViewportStatusChangeDetector
Add a callback
- Privacy : **Public**

- Return : **InViewportStatusChangeDetector** : The instance itself to maintain chainability

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
status | **String** | The status to track (enter|exit) | required | 
cb | **Function** | The callback to add | required | 


### off(status : String, cb : Function) : InViewportStatusChangeDetector
Remove a callback
- Privacy : **Public**

- Return : **InViewportStatusChangeDetector** : The instance itself to maintain chainability

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
status | **String** | The status to remove (enter|exit) | required | 
cb | **Function** | The callback to remove | required | 


### destroy()
Destroy the tracker
- Privacy : **Public**





