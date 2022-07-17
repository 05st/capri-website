# Usage
Make sure you have a C compiler installed. On Linux, it's highly recommended to use [`gcc`](https://gcc.gnu.org/), on Windows [`tcc`](https://bellard.org/tcc/) works well, and on macOS [`clang`](https://clang.llvm.org/) should already be available.

## Source directory
Running the compiler without any arguments will treat the current directory as the project source directory (i.e. where all of your `.cpr` files are). To manually specify the source directory, use the `-d` (`--dir`) option as shown:
```bash
capri -d path/to/dir/
```

## Standard library
By default, the compiler will look for the `CAPRI_STL` environment variable to search for the standard library directory. To avoid this, you can manually specify the path (`--stl`), or ask the compiler to not include the standard library at all (`--no-stl`).
```bash
capri --stl path/to/stl/dir/

capri --no-stl
```

## C compiler
The default C compiler Capri invokes is `gcc`. To change this, use the `-c` (`--cc`) option. For example, to use `tcc` instead:
```bash
capri -c tcc
```

## Output path
To specify the output path, use the `-o` (`--out`) option.
```bash
capri -o path/to/a.out
```

---

Use the `-h` flag for a list of all command line options.