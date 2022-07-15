# Recursion
It's essential for a functional programming language to allow functions being defined in terms of themselves (recursively).

## Defining recursive functions
```
fn factorial(n)
    if n <= 1
        1
    else
        n * factorial(n - 1);
```