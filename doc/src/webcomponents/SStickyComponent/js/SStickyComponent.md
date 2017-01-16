## Properties


### topElm

Specify the top element to use as boundary

Type : **{ Element }**


### bottomElm

Specify the bottom element to use as boundary

Type : **{ Element }**


### offsetTop

An offset top that will be applied when sticked

Type : **{ number }**


### offsetBottom

An offset bottom that will be applied when sticked

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


### disabled

A boolean or a function that return if the sitcky effect is disabled

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) , [Function](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function) }**


### offsetTopDetection

A number that specify the offset top before triggering the sticky

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


### placeholder

in order to keep the same scroll height

Type : **{ [Boolean](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean) }**


### updateEvery

Specify the number of scroll event to wait before update the references and sizes

Type : **{ Integer }**


### resizeTimeout

How long to wait after a window resize before updating sizes etc...

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


### this._updateCounter

Update counter to update the sizes, offsets, etc not at each scroll event

Type : **{ Integer }**


### this._resetTimeout

Store the reset timeout to be able to clear it when needed

Type : **{ Timeout }**


### this._elmHeight

Store the sticked element height

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


### this._elmWidth

Store the element width to apply it when position is fixed, etc...

Type : **{ [Number](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number) }**


### this._topElm

Store the reference to the element used as top boundary

Type : **{ Element }**


### this._bottomElm

Store the reference to the element used as bottom boundary

Type : **{ Element }**


## Methods


### defaultProps

Default props


### componentWillMount

Component will mount


### componentMount

Mount component


### reset

Reset


### isSticked

Check if is sticked