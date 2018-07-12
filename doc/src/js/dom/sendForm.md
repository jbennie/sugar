# sendForm

Send a form through an ajax call and return back a promise resolved with the server response


### Example
```js
	import __sendForm from 'coffeekraken-sugar/js/dom/sendForm'
const myCoolForm = document.querySelector('.my-cool-form')
__sentForm(myCoolForm).then((response) => {
	// do something with the response
})
```

### Parameters
Name  |  Type  |  Description  |  Status  |  Default
------------  |  ------------  |  ------------  |  ------------  |  ------------
form  |  **{ HTMLFormElement }**  |  The form to send  |  required  |

Author : Olivier Bossel [olivier.bossel@gmail.com](mailto:olivier.bossel@gmail.com) [https://olivierbossel.com](https://olivierbossel.com)