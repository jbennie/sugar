


-----------------------------
## API
-----------------------------

### inViewportStatusChange(elm : HTMLElement, onEnter : Function, onExit : Function) : InViewportStatusChangeDetector
Monitor when the passed element enter or exit the viewport

- Privacy : **Public**

- Return : **InViewportStatusChangeDetector** : The in viewport status change detector instance

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to monitor | required | 
onEnter | **Function** | Callback when the element enter the viewport | required | 
onExit | **Function** | Callback when the element exit the viewport | required | 


#### Sample
```language-undefined
import inViewportStatusChange from 'sugarcss/js/dom/inViewportStatusChange'
const detector = inViewportStatusChange(myCoolHTMLElement, () => {
		// i'm now in the viewport
}, () => {
		// i'm now out of the viewport
});

// stop listening
detector.destroy();

```


