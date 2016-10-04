


-----------------------------
## API
-----------------------------

### imageLoaded(img : HTMLImageElement, cb : Function = null) : Promise
Wait until the passed image is fully loaded

- Privacy : **Public**

- Return : **Promise** : The promise that will be resolved

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
img | **HTMLImageElement** | The image to check the loading state | required | 
cb | **Function** | An optional callback to call | optional | null


#### Sample
```language-undefined
import imageLoaded from 'sugarcss/js/dom/imageLoaded'
imageLoaded(myCoolHTMLImageElement).then((img) => {
		// do something when the image is loaded
});

```


