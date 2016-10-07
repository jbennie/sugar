

-----------------------------
## Properties
-----------------------------

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } validators
Registered validators

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } messages
Messages

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } validate
validate
The list of validators to apply on the element

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } on
on
Specify when the validation has to be triggered

### { Integer } timeout
timeout
Specify a timeout before validating the field

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } validators
validators
Store the specific validators settings for this particular instance

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } messages
messages
Store the specific messages wanted for this particular instance

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } apply
apply
The function to use to apply the error message

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } validClass
validClass
The class applied on the element itself when it is valid

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } invalidClass
invalidClass
The class applied on the element itself when it is invalid

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } requiredClass
requiredClass
The class applied on the element itself when it is required
This is applied AFTER the validation

-----------------------------
## API
-----------------------------

### SComponent()

- Privacy : **Public**




### static setup()
Setup
- Privacy : **Public**
- **Static**



### static registerValidator({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> } name, { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> } validator)
Register a validator
- Privacy : **Public**
- **Static**


Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
name | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/String" target="_blank" title="String">String</a> }** | The name of the validator | required | 
validator | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The validator settings | required | 


### constructor()
Constructor
- Privacy : **Public**




### dirtyClass()
dirtyClass
The class applied on the element itself when it has been touch like a virgin
- Privacy : **Public**




### render() : { void }
render
Render the component
- Privacy : **Public**

- Return : **{ void }** : undefined


### validate()
Apply the validation
- Privacy : **Public**




### getValue()
Get the value
- Privacy : **Public**





