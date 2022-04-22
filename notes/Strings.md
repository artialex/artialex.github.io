---
tags: [java]
---

# Strings

- Strings are _immutable_
- Literals can be compared with `==`
  - Non-literals should be compared with `equals()`
  - `equalsIgnoreCase()`
- Literals are created inside _String Pool_
  - String Pool is inside _Java Heap_
- Interpolation is not there 😑
  - StringBuilder is used as a common concatenation tool
  - `String.format()` is okay to use for some momentary concatenation

## Notable differences from JavaScript

- `contains()` instead of `includes()`
- Strings are not primitives, they are of _referential_ type

## Also

- StringBuffer vs StringBuilder vs StringJoiner
- Guids
