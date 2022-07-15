# User Defined Operators

Capri is designed with user extensibility in mind. Because of that, defining your own operators is a key feature that it offers.

## Defining operators
Defining an operator is similar to defining a function, except you must specify a fixity and a precedence.
```
// Exponentiation operator
op infixr 10 ** (base, exp) {
    let mut count = 0;
    let mut res = 1;
    while cout < res {
        res = res * base;
        count = count + 1;
    };
    res
};
```
```
2 ** 6 // Evaluates to 64
```
All possibile fixities are: `infix`, `infixl`, `infixr`, `prefix`, `postfix`. The precedence can be an arbitrarily large positive integer.