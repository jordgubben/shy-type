# shy-type
Shy-type (or just "Shy" for short) is a minimal runtime type safety library. 

It's mainly intended for usercases where bigger robuster solutions,
like [Flow](https://flow.org/) or [Typescript](https://www.typescriptlang.org/), are not feasible. 
Scenarios where types can not be determined before runtime are also good user cases.
Form validation is however not something it is designed for, 
as error messages are focused beeing programmer friendly (i.e. not end user friendly).

The library ha no dependencies and is very small. It runs both node and browsers.

## Checks

Shy has checkers for all the basic javascipt types:
 
 - boolean 
 - int
 - number
 - string
 - function 
 - object
 - array


## Example

Checkers take the value to check as theor first (and only obligatory) argument.
```js
// Passing check
type.bool(true)

// Failing check (throws TypeError)
type.bool("true")
```

Checks return the value. This simplifies checking results of callculations.
```js
var manhattanDistance = type.num(x + y)
```

Hints can improve debugging. Know what went wrong, and not just where.
```js
// Passing check with hint (returns value, ignoring hint)
type.str("George", "Name of great mathematician")

// Failing check with hint (throws TypeError with hint included in message)
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

Use destructuring assignment is you prefer compact calls.
```js
// Optional shorter names
const {bool, int, num, str, fun, obj, arr} = require('shy-type')

``` 
