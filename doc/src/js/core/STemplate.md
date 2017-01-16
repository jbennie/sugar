# STemplate  extends {SOject}
This class allows you to create complexe and dynamic templates that will stay
in sync with his data object automatically.
Under the hood, this class use the `morphdom` library that will be in charge of updating
the minimum dom as needed.

#### Example
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
See more : [https://github.com/patrick-steele-idem/morphdom](https://github.com/patrick-steele-idem/morphdom)

Author : Olivier Bossel <olivier.bossel@gmail.com>




## Settings

Here's the list of available settings.

### compile

A compile function to process the template
This function will revieve the template and the data as parameters
and need to return the compiled string version

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**

Default : **null**


### onDataUpdate

Function called when a data is updated with his new and old value as parameter

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### onBeforeElUpdated

Function called before any HTMLElement will be updated in the dom
If this function return false, the element will not bein updated at all

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**

Default : **null**


### onBeforeElChildrenUpdated

Function called before any HTMLElement child will be updated in the dom
If this function return false, the engine will not try to update this element children

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**

Default : **null**


### onBeforeElDiscarded

Function called before any HTMLElement will be removed from the dom
If this function return false, the element will not bein removed

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**

Default : **null**


### onElDiscarded

Function called after any HTMLElement has been removed from the dom

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


## Properties


### templateId

Store a uniqid that will be used as identifier for
this particular class in the window.sTemplateClasses

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### refs

Store the reference to html elements that have an id or a name

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**


### data

Store the data object used to render the template

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**


### settings

Store the settings

Type : **{ [Object](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object) }**


## Methods


### getParentTemplate

Get the parent template instance


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
of  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element to get the parent template from  |  required  |

Return **{ STemplate }** The parent template instance found in the html


### domNode

Store the reference to the created dom structure


### beforeCompile

Function that runs before the template will be compiled so that you can have a change to process it if needed
before it will be passed to the compile step


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
template  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The template before compilation  |  required  |

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The processed template to pass to compilation step


### afterCompile

Function that runs after the template has been compiled so that you can have a chance to process it if needed
before that the dom will be updated


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
compiledTemplate  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The compiled template  |  required  |

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) , [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The processed template


### beforeRender

Function that runs before the template will be rendered in the dom so that you can have a change to process it if needed
before it will be passed to the render step


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
template  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The template before compilation  |  required  |

Return **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }** The processed template to pass to render step


### afterRender

Function that runs after the template has been rendered to the dom so that you can have a chance to process it if needed


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
inDomTemplate  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The dom element that represent the template  |  required  |


### constructor

Constructor


### isNodeBelongToMe

Check if the passed node is part of this template


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
node  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The node to test  |  required  |

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** True if part of this template, false if not


### setDomNode

Set the dom node in which to render the template


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
node  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The node that will represent the template  |  required  |


### setParentTemplate

Set the parent STemplate instance.
This is needed if you want your template to talk together through attributes


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
template  |  **{ STemplate }**  |  The parent template instance  |  required  |


### render

Render the template
Usually, you don't need to call this by yourself. The template
will be rendered again each time that a data is updated


### patchDom

Patch the dom with the passed template string


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
template  |  **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**  |  The template to use to patch the dom  |  required  |

Return **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }** The HTMLElement that represent the template in the dom


### appendTo

Append the template to an HTMLElement


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
to  |  **{ [HTMLElement](https://developer.mozilla.org/fr/docs/Web/API/HTMLElement) }**  |  The element in which to append the template  |  required  |


### remove

Remove the template from the dom


### destroy

Destroy the template