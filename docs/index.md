# Capri Documentation
Welcome to the Capri docs. If you believe any changes should be made here, please click the **Edit on GitHub** button on the very top right and open a pull request.

# Getting Started
## Installation
You can install Capri in one of two ways:

- Compiling it from source
- Downloading a precompiled binary

### Compiling From Source
1. Ensure [Stack](https://docs.haskellstack.org/en/stable/README/) and [Git](https://git-scm.com/) are installed. *
2. Clone the git repository `git clone https://github.com/05st/capri`.
3. Run `stack build` inside the cloned repository.
4. The resulting binary can be found under `./.stack-work/dist/<something>/build/capri-exe/`.

*\* It's recommended to install Stack via [ghcup](https://www.haskell.org/ghcup/).*

### Downloading Precompiled Binaries
Check the [releases](https://github.com/05st/capri/releases) page for the latest precompiled binaries.

## Usage
**Using the Capri compiler requires [`clang`](https://clang.llvm.org/get_started.html) to be installed at the very least.** It's recommended to have the rest of [LLVM](https://github.com/llvm/llvm-project) installed as the compiler will be able to make additional optimizations.

### Source Directory
Running the compiler without any arguments will treat the current directory as the project source directory (i.e. where all of your `.cpr` files are). To manually specify the source directory, use the `-d` (`--dir`) option as shown.
```bash
capri -d path/to/dir/
```

### Standard Library
By default, the compiler will include the standard library. To disallow this, use the `--no-stl` flag.
```bash
capri --no-stl
```

### Output Path
To specify the output path, use the `-o` (`--out`) option.
```bash
capri -o path/to/output
```

---

Use the `-h` flag for information on all command line options.

# Basic Concepts
## Expressions
In Capri, nearly everything is an expression by design. An expression is something that has a value.

### Literal Expressions
Literal expressions are simply things like integer/float literals, boolean literals, string literals, character literals, and so on.
```rust
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

### Block Expressions
Even code blocks are treated as expressions! They evaluate to whatever the last expression is. If there is no final expression, they implicitly evaluate into `()` (unit).
```rust
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

### If Expressions
```rust
if cond a b
```

### Match Expressions
```rust
match xyz {
    // ...
}
```

---

We will discuss if expressions, match expressions, and even lambda expressions later on.

## Variables
Declaring, initializing, and using variables are some of the most fundamental ideas in programming.

### Declaring and Initializing Variables
```rust
let abc = 10;
let xyz = false;
```
In Capri, all variables must be initialized when declared.

### Using Variables
```rust
let a = 1;
let b = 2;
a + b // Evalues to 3
```

### Mutability
By default, all variables are immutable. This means you can't assign to them (mutate them).
```rust
let message = "hello";
message = "goodbye"; // ERROR: 'message' is immutable
```

### Declaring Mutable Variables
To declare a variable as mutable, use the `mut` keyword before the variable name.
```rust
let mut message = "hello";
message = "goodbye";
```

## Functions
Functions are a cruicial aspect of programming - any decent programming language should support defining functions and procedures. Capri in particular puts a strong emphasis on [functional programming](https://en.wikipedia.org/wiki/Functional_programming): to build up complexity through the composition of simpler functions.

### Defining Functions
Functions can be defined with the `fn` keyword.
Type annotations are optional as the compiler supports type inference.
(However, until parametric polymorphism is implemented, you may have to add some type annotations to prevent the compiler from inferring a polymorphic function).

All functions evaluate to a single expression if there is no `return` statement.
```rust
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

### Calling Functions
Functions are invoked as one would normally expect.
```rust
greet("Capri"); // Outputs 'Hello, Capri'
addFive(example()); // Evaluates to 128
```

### Recursion
It's essential for a functional programming language to allow functions being defined in terms of themselves (recursively).

```rust
fn factorial(n)
    if n <= 1
        1
    else
        n * factorial(n - 1);
```

# Language Features
Moving on from basic programming concepts. These are the features which make Capri stand out.

## User Defined Operators
Capri is designed with user extensibility in mind. Because of that, defining your own operators is a key feature that it offers.

Defining an operator is similar to defining a function, except you must specify a fixity and a precedence.
```rust
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
```rust
2 ** 6 // Evaluates to 64
```
All possibile fixities are: `infix`, `infixl`, `infixr`, `prefix`, `postfix`. The precedence can be an arbitrarily large positive integer.

## Algebraic Data Types
The expressive type system is an important part of Capri, which is why being able to define new data types is an esssential feature. [Algebraic data types](https://en.wikipedia.org/wiki/Algebraic_data_type) are new types created by composing other data types. All algebraic data types are ultimately composed from the base types.

### Records
Records, also known as product types, are very similar to structs from languages such as C. In Capri they are slightly different as record types are *anonymous*.
```rust
type Person = {name: str, age: i64, height: f64};
```
To use records, there are a few record operations which we will see next.

### Enums
Enums are also known as sum types. They are identical to enums found in other languages such as Rust.
Unlike record types, enums are not anonymous - allowing them to be defined recursively *([Isorecursive types](https://en.wikipedia.org/wiki/Recursive_data_type#Isorecursive_types))*.

```rust
enum MaybeStr = <just(str), none>;

enum BinaryTree = <item(i32), left(BinaryTree*), right(BinaryTree*)>;
```

Enums are handled through pattern matching (with match expressions).

### Using Records
To interact with records, Capri provides a few record operations: *extension*, *restriction*, and *selection*.

#### Record Extension
Extending a record simply means adding another field (row) to it. The syntax is `{field | recordBeingExtended}`.
```rust
type Person = {name: str, age: i64, height: f64};
type EmployedPerson = {salary: f64 | Person};
```
```rust
let bob: Person = {name = "Bob", age = 17, height = 170.18};
let joe: EmployedPerson = {salary = 123.45 | bob};
```

#### Record Restriction
Restriction is essentially the inverse of extension. You remove a row from the record. The syntax is `{recordBeingRestricted - label}`.
```rust
bob == {joe - salary}
```

#### Record Selection
This is just simply indexing a record. (Syntax `record.label`).
```rust
print(bob.name) // Outputs 'Bob'
```

### Using Enums
To extract values from an enum, you must pattern match against it and handle all of the different possible cases. Currently, Capri does not perform static exhaustiveness checks - meaning, an unhandled case in a match expression will result in a runtime error.

```rust
enum MaybeStr = <just(str), none>;

fn test(a) {
    match a {
        MaybeStr::just(s) => print(s),
        MaybeStr::none => print("none")
    };
};

fn main() {
    let abc = MaybeStr::just("exists");
    let xyz = MaybeStr::none;

    test(abc); // Outputs 'exists'
    test(xyz); // Outputs 'none'
};
```

## Module System
It's important for large codebases to be split apart and organized into different sections, each serving their own purpose. Capri provides a module system for this reason.

Every `.capri` file is a module (the name of the module does not necessarily have to be the name of the file). The path to it from the root project directory will be the module path. For example, if you have a project organized like this:

- Project
    - someDirectory
        - test.capri (`module test;`)
    - main.capri (`module main;`)

The qualified name for the `test` module would be `someDirectory::test`, and the qualified name for the `main` module will just simply be `main`. The compiler requires a module named `main` to be at the very top level of the project (and it must contain a `main` function).

### Creating and Importing Modules
Every `.capri` file is a module and therefore needs a module definition on the very first line. A module definition is simply `module <module name>;`.

To import a module, use the `import` keyword (e.g. `import someDirectory::test;`). The path to the imported module is always absolute (from the project root directory), and not relative to the module that's importing it.

### Circular Dependencies
The compiler performs dependency checking and any circular dependencies will result in a compile time error. Well-organized code should not have to result to mutually recursive modules.

### Controlling Visibility With `pub`
By default, any imports and top-level definitions made in a module are not exported. Use the `pub` keyword to indicate that a certain top-level definition should be made public, or use it to indicate that imports should be 'passed down'. For example:
```rust
module example;
import abc::xyz;
pub import some::other::mod;
pub type MyType = {a: i64, b: bool};
fn privateFunction() { ... };
pub fn publicFunction() { ... };
```
Any module which imports `example` will behave as if they also imported `some::other::mod`, and they will also have access to `MyType` and `publicFunction`.

## Polymorphism
As one of Capri's aims is to be a functional programming language, being able to define polymorphism is an essential feature. Currently Capri only supports parametric polymorphism, but ad-hoc polymorphism and row polymorphism are planned.

### Parametric Polymorphism
```rust
// The identity function
fn id(x)
    x;

fn main() {
    print(id(123)); // Outputs 123
    print(id("abc")); // Outputs 'abc'
};
```

---

Under the hood, polymorphism essentially acts as syntactic sugar. The compiler goes through a *monomorphization pass* where it finds all the types a polymorphic function has been instantiated with, and generates copies of the function for each unique instantiation. 

# Miscellaneous
## Calling External Functions
Capri provides the `extern` keyword to interact with functions defined elsewhere. Essentially, it adds a dummy entry into the typing environment when semantic analysis happens, and it is up to the programmer to ensure that the function will exist when compiled. **By using this keyword, you are throwing away any guarantees made by the static analysis in the compiler.** Currently it's used by the standard library.

```rust
module io;
extern printf : str, str -> unit;
fn print(text: str): unit {
    printf("%s", text);
};
// ...
```

**The `extern` keyword may be removed/changed at any time, so it's not recommended to be used unless absolutely necessary.**