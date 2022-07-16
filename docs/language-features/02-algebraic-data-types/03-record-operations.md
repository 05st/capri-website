# Record Operations
To interact with records, Capri provides a few record operations: extension, restriction, and selection.

## Record extension
Extending a record simply means adding another field (row) to it. The syntax is `{field | recordBeingExtended}`.
```
type Person = {name: str, age: i64, height: f64};
type EmployedPerson = {salary: f64 | Person};
```
```
let bob: Person = {name = "Bob", age = 17, height = 170.18};
let joe: EmployedPerson = {salary = 123.45 | bob};
```

## Record restriction
Restriction is essentially the inverse of extension. You remove a row from the record. The syntax is `{recordBeingRestricted - label}`.
```
bob == {joe - salary}
```

## Record selection
This is just simply indexing a record. (Syntax `record.label`).
```
print(bob.name) // Outputs 'Bob'
```