


-----------------------------
## API
-----------------------------

### textWidth({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } source) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }
Get the text width in px of a passed string or the passed HTMLElement

- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }** : The calculated width of the text

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
source | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The source to process | required | 


#### Sample
```js
import textWidth from 'sugarcss/js/dom/textWidth'
// text of an HTMLElement
const width = textWidth(myCoolHTMLElement);

// text directly (no font-size management so it's less accurate...)
const width = textWidth('Hello World');

```


