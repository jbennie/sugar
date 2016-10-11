# STemplate <span class="s-smaller-rel">extends { SOject }</span>
This class allows you to create complexe and dynamic templates that will stay
in sync with his data object automatically.
Under the hood, this class use the `morphdom` library that will be in charge of updating
the minimum dom as needed.


- Extends **{ SOject }**
- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
```js
// our data object
const data = {
		title : 'Hello World'
};
// create an STemplate instance
const myTemplate = new STemplate(`
		<div class="my-template">
  		<h1>{{title}}</h1>
		</div>
`, data);
// append our template to the dom
myTemplate.appendTo(document.querySelector('#myDiv'));
// update the title at any point in time
setTimeout(() => {
		data.title = 'Hello Universe';
}, 2000);


```

-----------------------------
## Settings
-----------------------------

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> } compile = null
A compile function to process the template
This function will revieve the template and the data as parameters
and need to return the compiled string version

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> } onBeforeElUpdated = null
Function called before any HTMLElement will be updated in the dom
If this function return false, the element will not bein updated at all

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> } onBeforeElChildrenUpdated = null
Function called before any HTMLElement child will be updated in the dom
If this function return false, the engine will not try to update this element children

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> } onBeforeElDiscarded = null
Function called before any HTMLElement will be removed from the dom
If this function return false, the element will not bein removed

-----------------------------
## Properties
-----------------------------

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } templateId
Store a uniqid that will be used as identifier for
this particular class in the window.sTemplateClasses

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } refs
Store the reference to html elements that have an id or a name

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } data
Store the data object used to render the template

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } settings
Store the settings

-----------------------------
## API
-----------------------------

### static registerComponentIntegration({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> } integrationFn)
Register a component integration function
- Privacy : **Public**
- **Static**


Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
integrationFn | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }** | The function used to set the integration attributes, etc into the component elements | required | 


### static keepAttribute({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } attr)
Set an attribute to keep
- Privacy : **Public**
- **Static**


Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element on which to keep an attribute | required | 
attr | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The attribute name to keep | required | 


### static doNotDiscard({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm)
Set an element to not discard
- Privacy : **Public**
- **Static**


Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element to not discard | required | 


### static exclude({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm)
Set an element to exclude completely from the STemplate engine
- Privacy : **Public**
- **Static**


Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element to exclude | required | 


### static refresh({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm)
Set an element to refresh completely when the STemplate handle it
- Privacy : **Public**
- **Static**


Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element to refresh | required | 


### static isTemplate({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } elm) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }
Check if an element is handled by an STemplate instance
- Privacy : **Public**
- **Static**
- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** : True if the element is handled by a template, false otherwise

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element to check | required | 


### dom()
Store the reference to the created dom structure
- Privacy : **Public**




### constructor()
Constructor
- Privacy : **Public**




### setParentTemplate({ [STemplate](/data/web/sugar/repo/src/js/core/STemplate.js) } template)
setParentTemplate
Set the parent STemplate instance.
This is needed if you want your template to talk together through attributes
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
template | **{ [STemplate](/data/web/sugar/repo/src/js/core/STemplate.js) }** | The parent template instance | required | 


### _compile({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } template, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } data) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }
Compile the template
- Privacy : **Protected**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** : The compiled template string

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
template | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The template to compile | required | 
data | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The data used to compile the template | required | 


### render()
Render the template
Usually, you don't need to call this by yourself. The template
will be rendered again each time that a data is updated
- Privacy : **Public**




### appendTo({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> } to)
Append the template to an HTMLElement
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
to | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** | The element in which to append the template | required | 


### remove()
Remove the template from the dom
- Privacy : **Public**




### destroy()
Destroy the template
- Privacy : **Public**





