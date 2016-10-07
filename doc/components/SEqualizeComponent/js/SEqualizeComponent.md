


-----------------------------
## API
-----------------------------

### SComponent()

- Privacy : **Public**




### static setup()
Setup
- Privacy : **Public**
- **Static**



### static columns()
Reference to all the columns by groups
Store value format :
groupId : {
		inProgress : false // set if an equalize in in progress on this group or not
		columns : [] // store all the columns
}
- Privacy : **Public**
- **Static**



### lines()
Lines stack
Store values as :
lineIdx : {
		height : ... // the height of the line
		columns : [] // all the columns in the line
}
- Privacy : **Public**




### equalizerElm()
Equalizer element
Store the element that will act as the equalizer inside the column itself
This is optional and if not exist, the element height will be setted
- Privacy : **Public**




### constructor()
Constructor
- Privacy : **Public**




### equalize()
Equalize
- Privacy : **Public**





