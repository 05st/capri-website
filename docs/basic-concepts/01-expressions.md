# Expressions
In Capri, nearly everything is an expression by design. An expression is something that has a value.

## Literal expressions
Literal expressions are simply things like integer/float literals, boolean literals, string literals, character literals, and so on.
```
// Integers
123
981245172

// Floats
12.34
3.14159

// Booleans
true
false

// Unit
()
```

## Block expressions
Even code blocks are treated as expressions! They evaluate to whatever the last expression is. If there is no final expression, they implicitly evaluate into `()` (unit).
```
// This code block evaluates to 12.34
{
    abc;
    let stuff = xyz();
    12.34
}

// There's no final expression in this one - so it implicitly evaluates into a ()
{
    let res = call_some_func(42);
    if res { ... } else { ... };
    12.34; // This is not an expression, it's an expression statement
}
```

## If expressions
```
if cond a b
```

## Match expressions
```
match xyz {
    // ...
}
```

---

We will discuss if expressions, match expressions, and even lambda expressions later on.