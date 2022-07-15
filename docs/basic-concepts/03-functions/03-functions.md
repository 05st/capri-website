# Functions
Functions are a cruicial aspect of programming - any decent programming language should support defining functions and procedures. Capri in particular puts a strong emphasis on [functional programming](https://en.wikipedia.org/wiki/Functional_programming): to build up complexity through the composition of simpler functions.

## Defining functions
Functions can be defined with the `fn` keyword.
Type annotations are optional as the compiler supports type inference.
(However, until parametric polymorphism is implemented, you may have to add some type annotations to prevent the compiler from inferring a polymorphic function).

All functions evaluate to a single expression if there is no `return` statement.
```
fn example()
    123;

fn addFive(n)
    n + 5;

fn greet(name: str): unit {
    print("Hello, ");
    print(name);
};

fn factorial(n) {
    if n == 0 { return 1; };
    // ...
};
```

## Calling functions
Functions are invoked as one would normally expect.
```
greet("Capri"); // Outputs 'Hello, Capri'
addFive(example()); // Evaluates to 128
```