


-----------------------------
## API
-----------------------------

### setRecursiveTimeout(fn : Function, timeout : Number, duration : Number, spread : Number = 0) : Function
This utils function allows you to call a passed function each x time during a certain duration

- Privacy : **Public**

- Return : **Function** : clearer

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
fn | **Function** | The function to execute | required | 
timeout | **Number** | The time between each execution | required | 
duration | **Number** | The duration of the timeout | required | 
spread | **Number** | An optional spread time that will be used to randomize the function executions times | optional | 0


#### Sample
```language-undefined
setRecursiveTimeout(() => {
		// I will be executed 10 times
}, 1000, 10000);

```


