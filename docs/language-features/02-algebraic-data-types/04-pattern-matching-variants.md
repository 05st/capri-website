# Pattern Matching Variants
To extract values from a variant, you must pattern match against it and handle all of the different possible cases. Otherwise, an unhandled case can result in a runtime panic.

```
module main;
import io;

type MaybeI64 = <just: i64, none: unit>;

fn doesMaybeExist(m: MaybeI64): str
    match m {
        just n => "exists",
        none a => "doesn't exist"
    };

fn main() {
    let testA: MaybeI64 = <just = 42>;
    let testB: MaybeI64 = <none = ()>;

    print(doesMaybeExist(testA)); // Outputs "exists"
    print(doesMaybeExist(testB)); // Outputs "doesn't exist"
};
```