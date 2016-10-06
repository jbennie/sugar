# STimer
Class that let you create and handle timer with ease.
With this class you can set some callback function that will be
called each x ms or tell that you want your callbacks to be called
a certain number of time during the timer time.

-----------------------------
## Constructor
-----------------------------



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
duration | **{ number }** | The duration of the timer in ms | optional | 1000
settings | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object" target="_blank" title="Object">Object</a> }** | The settings for the timer | required | 

- Author **Olivier Bossel<olivier.bossel@gmail.com>**

#### Sample
```js
const myTimer = new STimer(2000, {
		tickCount : 5
});
myTimer.onTick((myTimer) => {
		// do something here...
});
myTimer.start();

```

-----------------------------
## Settings
-----------------------------

### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> } tickInterval = 1000
Store the interval between ticks


### { Integer } tickCount = null
Set the number of tick wanted


### { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> } loop = false
Set if the timer has to loop



-----------------------------
## API
-----------------------------

### remaining() : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }
Return the remaining time in ms
- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }** : The remaining time in ms


### duration({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> } duration = null) : { <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }
Set or get the duration
- Privacy : **Public**

- Return : **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }** : The duration

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
duration | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Number" target="_blank" title="Number">Number</a> }** | Set the duration | optional | null


### onTick({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> } A function to call on tick) : { [STimer](/api/js/classes/STimer.md) }
Register a function called on tick
- Privacy : **Public**

- Return : **{ [STimer](/api/js/classes/STimer.md) }** : The timer instance

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
A function to call on tick | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }** | undefined | required | 


### onComplete({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> } A function to call on complete)
Register a function called on complete
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
A function to call on complete | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Function" target="_blank" title="Function">Function</a> }** | undefined | required | 


### reset({ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> } start) : { [STimer](/api/js/classes/STimer.md) }
Reset the timer
- Privacy : **Public**

- Return : **{ [STimer](/api/js/classes/STimer.md) }** : undefined

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
start | **{ <a class="link" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Boolean" target="_blank" title="Boolean">Boolean</a> }** | If the timer has to start after reseting or not | required | 


### start() : { [STimer](/api/js/classes/STimer.md) }
Start the timer
- Privacy : **Public**

- Return : **{ [STimer](/api/js/classes/STimer.md) }** : undefined


### pause() : { [STimer](/api/js/classes/STimer.md) }
Pause the timer
- Privacy : **Public**

- Return : **{ [STimer](/api/js/classes/STimer.md) }** : undefined


### stop() : { [STimer](/api/js/classes/STimer.md) }
Stop the timer
- Privacy : **Public**

- Return : **{ [STimer](/api/js/classes/STimer.md) }** : undefined



