# Algebraic Data Types
The expressive type system is an important part of Capri, which is why being able to define new data types is an esssential feature. [Algebraic data types](https://en.wikipedia.org/wiki/Algebraic_data_type) are new types created by composing other data types. All ADTs are eventually composed from the base types.

## Records
Records, also known as product types, are very similar to structs from languages such as C.
```
type Person = {name: str, age: i64, height: f64};
```
To use records, there are a few record operations which we will see next.

## Variants
Variants are also known as sum types. They are similar to enums found in other languages.
```
type Event = <key: char, mouse: i64>;
```
Variants are handled through pattern matching.