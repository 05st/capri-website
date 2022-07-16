---
sidebar_position: 5
---

# Module System
It's important for large codebases to be split apart and organized into different sections, each serving their own purpose. Capri provides a module system for this reason.

Every `.capri` file is a module (the name of the module does not necessarily have to be the name of the file). The path to it from the root project directory will be the module path. For example, if you have a project organized like this:

- Project
    - someDirectory
        - test.capri (`module test;`)
    - main.capri (`module main;`)

The qualified name for the `test` module would be `someDirectory::test`, and the qualified name for the `main` module will just simply be `main`. The compiler requires a module named `main` to be at the very top level of the project (and it must contain a `main` function).

## Creating and importing modules
Every `.capri` file is a module and therefore needs a module definition on the very first line. A module definition is simply `module <module name>;`.

To import a module, use the `import` keyword (e.g. `import someDirectory::test;`). The path to the imported module is always absolute (from the project root directory), and not relative to the module that's importing it.

## Circular dependencies
The compiler performs dependency checking and any circular dependencies will result in a compile time error. Well-organized code should not have to result to mutually recursive modules.

## Controlling visibility with `pub`
By default, any imports and top-level definitions made in a module are not exported. Use the `pub` keyword to indicate that a certain top-level definition should be made public, or use it to indicate that imports should be 'passed down'. For example:
```
module example;

import abc::xyz;
pub import some::other::mod;

pub type MyType = {a: i64, b: bool};

fn privateFunction() { ... };
pub fn publicFunction() { ... };
```
Any module which imports `example` will behave as if they also imported `some::other::mod`, and they will also have access to `MyType` and `publicFunction`.