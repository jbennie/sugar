

-----------------------------
## Properties
-----------------------------

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } content
content
Specify the content to use for the dialog
Can be an html id selector like "#myCoolContent"
an url to load by through ajax like "myCoolContent.html"
a mix like "myCoolContent.html#myCoolContent"
or nothing. In this case, the element itself will be the dialog content

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> } modal
modal
Specify if the dialog is a modal or not

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> } onOpen
onOpen
Callback when the modal opens

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } openOn
openOn
Set when to open the dialog
This can be 'click'|'hover'|'init'

-----------------------------
## API
-----------------------------

### SComponent()

- Privacy : **Public**




### static setup()
Setup
- Privacy : **Public**
- **Static**



### static counter()
Counter
- Privacy : **Public**
- **Static**



### constructor()
Constructor
- Privacy : **Public**




### open()
Open the dialog
- Privacy : **Public**




### close()
Close
- Privacy : **Public**




### ok()
Ok
Validate the modal
- Privacy : **Public**




### cancel()
Cancel
Cancel the modal by rejecting the promise
- Privacy : **Public**




### isOpened() : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }
Check if is opened
- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** : If is opened or not



