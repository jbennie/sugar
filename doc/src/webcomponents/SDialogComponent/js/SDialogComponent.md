## Constructor





## Properties


### counter

Store the number of dialogs opened in the page

Type : **{ Integer }**


### for

Specify the element that will trigger the dialog

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### content

Specify the content to use for the dialog
Can be an html id selector like "#myCoolContent"
an url to load by through ajax like "myCoolContent.html"
a mix like "myCoolContent.html#myCoolContent"
or nothing. In this case, the element itself will be the dialog content

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### id

The dialog id that can be used to open the dialog through the url hash

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### modal

Specify if the dialog is a modal or not

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### onOpen

Callback when the modal opens

Type : **{ [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### opened

Specify if the modal is opened or not

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### openOn

Set when to open the dialog
This can be 'click'|'hover'|'init'

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


## Methods


### defaultProps

Default props


### physicalProps

Physical props


### css

Component css


### componentMount

Mount component


### componentWillReceiveProp

Component will receive prop


### open

Open the dialog


### close

Close


### ok

Ok
Validate the modal


### cancel

Cancel
Cancel the modal by rejecting the promise


### isOpened

Check if is opened

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** If is opened or not