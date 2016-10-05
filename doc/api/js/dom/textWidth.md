


-----------------------------
## API
-----------------------------

### textWidth(source : String{HTMLElement}) : Number
Get the text width in px of a passed string or the passed HTMLElement

- Privacy : **Public**

- Return : **Number** : The calculated width of the text

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
source | **String{HTMLElement}** | The source to process | required | 


#### Sample
```language-undefined
import textWidth from 'sugarcss/js/dom/textWidth'
// text of an HTMLElement
const width = textWidth(myCoolHTMLElement);

// text directly (no font-size management so it's less accurate...)
const width = textWidth('Hello World');

```


