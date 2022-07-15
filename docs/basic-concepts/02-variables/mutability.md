# Mutability
By default, all variables are immutable. This means you can't assign to them (mutate them).
```
let message = "hello";
message = "goodbye"; // ERROR: 'message' is immutable
```

## Declaring mutable variables
To declare a variable as mutable, use the `mut` keyword before the variable name.
```
let mut message = "hello";
message = "goodbye";
```