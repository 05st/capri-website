# Calling C Functions
Capri provides the `extern` keyword to interact with functions defined elsewhere. Essentially, it adds a dummy entry into the typing environment when semantic analysis happens, and it is up to the programmer to ensure that the function will exist when compiled. By using this keyword, you are throwing away any guarantees made by the static analysis in the compiler. Currently it's used by the standard library.

```
module io;

extern printf : str, str -> unit;

fn print(text: str): unit {
    printf("%s", text);
};

// ...
```

**Note: the `extern` keyword may be removed/changed at any time, so it's not recommended to be used unless absolutely necessary.**