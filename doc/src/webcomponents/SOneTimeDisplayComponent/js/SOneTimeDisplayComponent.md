## Constructor





## Properties


### timeout

How many times to hide the element when dismissed

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


### method

Set the method to use to store the component display status

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### name

Set the name used to save the cookie / localStorage or sessionStorage

Type : **{ [String](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String) }**


### disabled

Set if the element is disabled or not.
This will be removed if the element is enabled

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### enabled

Set if the element is enabled
This will be removed id the element is disabled

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


## Methods


### defaultProps

Default props


### physicalProps

Physical props


### componentMount

Mount component


### updateStatus

updateStatus
Update the element status


### reset

reset
Reset the storage


### isDismissed

isDismissed
Return if the component has been dismissed or not

Return **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }** The dismiss status


### getDismissedTimestamp

getDismissedTimestamp
Return the timestamp when the element has been dismissed

Return **{ Integer }** The timestampe when the element has been dismissed


### dismiss

dismiss
Dismiss the displayed element