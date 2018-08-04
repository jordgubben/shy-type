# shy-type
Shy-type (or just "Shy" for short) is a minimal runtime type safety library. 

It's mainly intended for usercases where bigger robuster solutions,
like [Flow](https://flow.org/) or [Typescript](https://www.typescriptlang.org/), are not feasible. 
Scenarios where types can not be determined before runtime are also good user cases.
Form validation is however not something it is designed for, 
as error messages are focused beeing programmer friendly (i.e. not end user friendly).


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

```js

// Passing check (returns value)
type.bool(true)

// Failing check (throws TypeError)
type.bool("true")

// Check with hint (throws TypeError with hint included in message)
type.str("George", "Name of great mathematician")


// Common user case - Defensive programming in functions
function hello(name) {
	console.info("Hello " + type.str(name, "Name of person"))	
}
```

Use destructuring assignment is you prefer compact calls
```js
// Optional shorter names
const {bool, int, num, str, fun, obj, arr} = require('shy-type')


``` 
