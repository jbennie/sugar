# STemplate
This class allows you to create complexe and dynamic templates that will stay
in sync with his data object automatically.
Under the hood, this class use the `morphdom` library that will be in charge of updating
the minimum dom as needed.


- Extends **{SOject}**
- Author **Olivier Bossel <olivier.bossel@gmail.com>**

#### Sample
```language-undefined
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

### compile : Function = null
A compile function to process the template
This function will revieve the template and the data as parameters
and need to return the compiled string version

### onBeforeElUpdated : Function = null
Function called before any HTMLElement will be updated in the dom
If this function return false, the element will not bein updated at all

### onBeforeElChildrenUpdated : Function = null
Function called before any HTMLElement child will be updated in the dom
If this function return false, the engine will not try to update this element children

### onBeforeElDiscarded : Function = null
Function called before any HTMLElement will be removed from the dom
If this function return false, the element will not bein removed

-----------------------------
## Properties
-----------------------------

### templateId : String
Store a uniqid that will be used as identifier for
this particular class in the window.sTemplateClasses

### refs : Object
Store the reference to html elements that have an id or a name

### data : Object
Store the data object used to render the template

### settings : Object
Store the settings

-----------------------------
## API
-----------------------------

### static registerComponentIntegration(integrationFn : Function)
Register a component integration function
- Privacy : **Public**
- **Static**


Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
integrationFn | **Function** | The function used to set the integration attributes, etc into the component elements | required | 


### static keepAttribute(elm : HTMLElement, attr : String)
Set an attribute to keep
- Privacy : **Public**
- **Static**


Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element on which to keep an attribute | required | 
attr | **String** | The attribute name to keep | required | 


### static doNotDiscard(elm : HTMLElement)
Set an element to not discard
- Privacy : **Public**
- **Static**


Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to not discard | required | 


### static exclude(elm : HTMLElement)
Set an element to exclude completely from the STemplate engine
- Privacy : **Public**
- **Static**


Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to exclude | required | 


### static refresh(elm : HTMLElement)
Set an element to refresh completely when the STemplate handle it
- Privacy : **Public**
- **Static**


Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to refresh | required | 


### static isTemplate(elm : HTMLElement) : Boolean
Check if an element is handled by an STemplate instance
- Privacy : **Public**
- **Static**
- Return : **Boolean** : True if the element is handled by a template, false otherwise

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
elm | **HTMLElement** | The element to check | required | 


### dom()
Store the reference to the created dom structure
- Privacy : **Public**




### constructor()
Constructor
- Privacy : **Public**




### setParentTemplate(template : STemplate)
setParentTemplate
Set the parent STemplate instance.
This is needed if you want your template to talk together through attributes
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
template | **STemplate** | The parent template instance | required | 


### _compile(template : String, data : Object) : String
Compile the template
- Privacy : **Protected**

- Return : **String** : The compiled template string

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
template | **String** | The template to compile | required | 
data | **Object** | The data used to compile the template | required | 


### render()
Render the template
Usually, you don't need to call this by yourself. The template
will be rendered again each time that a data is updated
- Privacy : **Public**




### appendTo(to : HTMLElement)
Append the template to an HTMLElement
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
to | **HTMLElement** | The element in which to append the template | required | 


### remove()
Remove the template from the dom
- Privacy : **Public**




### destroy()
Destroy the template
- Privacy : **Public**





