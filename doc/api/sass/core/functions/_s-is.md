


-----------------------------
## API
-----------------------------

### s-is({Mixed} $value, {String} $type) : {Boolean}
Check if the passed value is of a certain type

Here's the available types that you can check
- mixed => mean anything
- null
- url
- px
- pt
- rem
- em
- percent | %
- vw
- vh
- ex
- ch
- cm
- mm
- in
- pc
- s | second
- boolean | bool
- function
- number
- int | integer
- string
- color
- list
- map
- deg | degree
- list-{type} => check if is a list of the specified type
- map-{type} => check if is a map of the specified type

- Privacy : **Public**

- Return : **{Boolean}** : true if match the type, false if not

Name | Type | Description | Status | Default
------------ | ------------ | ------------ | ------------ | ------------
$value | **{Mixed}** | The value to check | required | 
$type | **{String}** | The type to check | required | 


#### Sample
```scss
s-is(hello, string) // => true
s-is('hello', string) // => true
s-is(#fff, color) // => true
s-is(hello #fff, list-color) // => false
s-is(#fff #ddd, list-color) // => true
// etc...

```


