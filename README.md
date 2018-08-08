# shy-type
Shy-type is a minimal runtime type safety library for javascript.

It's mainly intended for user cases where bigger more robust solutions,
like [Flow](https://flow.org/) or [Typescript](https://www.typescriptlang.org/), are not feasible. 
Scenarios where types can not be determined before runtime are also good user cases.
Form validation is however not something it is designed for, 
as error messages are focused on being programmer friendly (i.e. not end user friendly).

The library has no dependencies and is very small. It runs in both node and most browsers.

## Checks

Shy has checker functions for all the basic javascipt types:
 
 - boolean 
 - int
 - number
 - string
 - function 
 - object
 - array


## Example

Checkers take the value to check as the first (and only obligatory) argument.
```js
// Passing check
type.bool(true)

// Failing check (throws TypeError)
type.bool("true")
```

Checks return the value. This simplifies checking results of calculation.
```js
var manhattanDistance = type.num(x + y)
```

Adding hints can improve solving bugs. Know which check failed, even after minification.
```js
// Passing check with hint 
// (returns value, ignoring hint)
type.str("George", "Name of great mathematician")

// Failing check with hint 
// (throws TypeError "User id in DB - Expected 'George' to be a number")
type.int("George", "User id in DB")
```

One of the main usage areas is safe guarding public functions.
```js
function hello(name) {
	console.info("Hello " + type.str(name, "Name of person"))	
}


function fibonacci(n) {
	type.int(n)
	if (n<=1) {
		return 1;
	} else {
		return fibonacci(n-1) + fibonacci(n-2)
	}
}
```

Use destructuring assignment if you prefer compact calls.
```js
// Optional shorter names
const {bool, int, num, str, fun, obj, arr} = require('shy-type')

bool(true, "George?");

``` 
