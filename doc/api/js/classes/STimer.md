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
duration | **number** | The duration of the timer in ms | optional | 1000
settings | **Object** | The settings for the timer | required | 

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

### Number tickInterval = 1000
Store the interval between ticks


### Integer tickCount = null
Set the number of tick wanted


### Boolean loop = false
Set if the timer has to loop



-----------------------------
## API
-----------------------------

### remaining() : Number
Return the remaining time in ms
- Privacy : **Public**

- Return : **Number** : The remaining time in ms


### duration(Number duration = null) : Number
Set or get the duration
- Privacy : **Public**

- Return : **Number** : The duration

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
duration | **Number** | Set the duration | optional | null


### onTick(Function A function to call on tick) : STimer
Register a function called on tick
- Privacy : **Public**

- Return : **STimer** : The timer instance

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
A function to call on tick | **Function** | undefined | required | 


### onComplete(Function A function to call on complete)
Register a function called on complete
- Privacy : **Public**



Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
A function to call on complete | **Function** | undefined | required | 


### reset(Boolean start) : STimer
Reset the timer
- Privacy : **Public**

- Return : **STimer** : undefined

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
start | **Boolean** | If the timer has to start after reseting or not | required | 


### start() : STimer
Start the timer
- Privacy : **Public**

- Return : **STimer** : undefined


### pause() : STimer
Pause the timer
- Privacy : **Public**

- Return : **STimer** : undefined


### stop() : STimer
Stop the timer
- Privacy : **Public**

- Return : **STimer** : undefined



