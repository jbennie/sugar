
# STemplate  extends { SOject }
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
Author : Olivier Bossel <olivier.bossel@gmail.com>


## Settings

Here's the list of available settings that you can pass to the constructor

### compile

A compile function to process the template
This function will revieve the template and the data as parameters
and need to return the compiled string version

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**
Default : **null**

### onDataUpdate

Function called when a data is updated with his new and old value as parameter

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**

### onBeforeElUpdated

Function called before any HTMLElement will be updated in the dom
If this function return false, the element will not bein updated at all

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**
Default : **null**

### onBeforeElChildrenUpdated

Function called before any HTMLElement child will be updated in the dom
If this function return false, the engine will not try to update this element children

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**
Default : **null**

### onBeforeElDiscarded

Function called before any HTMLElement will be removed from the dom
If this function return false, the element will not bein removed

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**
Default : **null**

### onElDiscarded

Function called after any HTMLElement has been removed from the dom

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }**

## Properties


### templateId

Store a uniqid that will be used as identifier for
this particular class in the window.sTemplateClasses

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**

### refs

Store the reference to html elements that have an id or a name

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**

### data

Store the data object used to render the template

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**

### settings

Store the settings

Type : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**







## Methods


### getParentTemplate

Get the parent template instance


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
of  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element to get the parent template from  |  required  |

Return **{ STemplate }** The parent template instance found in the html

### domNode

Store the reference to the created dom structure


### beforeCompile

Function that runs before the template will be compiled so that you can have a change to process it if needed
before it will be passed to the compile step


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
template  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The template before compilation  |  required  |

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** The processed template to pass to compilation step

### afterCompile

Function that runs after the template has been compiled so that you can have a chance to process it if needed
before that the dom will be updated


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
|  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  compiledTemplate  |  required  |

Return **{String|HTMLElement}** The processed template

### beforeRender

Function that runs before the template will be rendered in the dom so that you can have a change to process it if needed
before it will be passed to the render step


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
template  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The template before compilation  |  required  |

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** The processed template to pass to render step

### afterRender

Function that runs after the template has been rendered to the dom so that you can have a chance to process it if needed


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
|  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  inDomTemplate  |  required  |


### constructor

Constructor


### isNodeBelongToMe

Check if the passed node is part of this template


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
node  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The node to test  |  required  |

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** True if part of this template, false if not

### setDomNode

Set the dom node in which to render the template


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
node  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The node that will represent the template  |  required  |


### setParentTemplate

Set the parent STemplate instance.
This is needed if you want your template to talk together through attributes


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
template  |  **{ STemplate }**  |  The parent template instance  |  required  |


### _compile

Compile the template


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
template  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The template to compile  |  required  |
data  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }**  |  The data used to compile the template  |  required  |

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** The compiled template string

### render

Render the template
Usually, you don't need to call this by yourself. The template
will be rendered again each time that a data is updated


### patchDom

Patch the dom with the passed template string


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
template  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }**  |  The template to use to patch the dom  |  required  |

Return **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }** The HTMLElement that represent the template in the dom

### appendTo

Append the template to an HTMLElement


Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
to  |  **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/API/HTMLElement" target="_blank" title="HTMLElement">HTMLElement</a> }**  |  The element in which to append the template  |  required  |


### remove

Remove the template from the dom


### destroy

Destroy the template
