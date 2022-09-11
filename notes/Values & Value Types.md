---
tags: [java]
---

# Values & Value Types

Java has 8 primitive value types:

- `boolean`, `byte`, `short`, `int`, `long`, `float`, `double`, `char`

Each primitive has a _wrapper_ type:

- `Boolean`, `Byte`, `Short`, `Integer`, `Long`, `Float`, `Double`, `Character`

Java doesn't have _unsigned_ value types

`double` should be preferred to `float`

Boolean operator's table:

| Operation | Operator            | Short Circuit Operator    | Compound Assign      |
| :-------- | :------------------ | :------------------------ | :------------------- |
| and       | `&`                 | `&&`                      | `&=`                 |
| or        | <code>&#124;</code> | <code>&#124;&#124;</code> | <code>&#124;=</code> |
| xor       | `^`, `!=`           |                           | `^=`                 |
| equals    | `==`                |
| not       | `!`                 |                           | `^= true`            |

Numbers' range

| Value Type | Range                                                                | Range Bin                      |
| :--------- | :------------------------------------------------------------------- | :----------------------------- |
| `byte`     | $-128 \ \dots \ 127$                                                 | $-2^7 \ \dots \ 2^7-1$         |
| `short`    | $-32768 \ \dots \ 32767$                                             | $-2^{15} \ \dots \ 2^{15}-1$   |
| `int`      | $-2147483648 \ \dots \ 2147483647$                                   | $-2^{31} \ \dots \ 2^{31}-1$   |
| `long`     | $\approx-9 \cdot 10^{18} \ \dots \ \approx 9 \cdot 10^{18}$          | $-2^{63} \ \dots \ 2^{63}-1$   |
| `float`    | $\approx 1.4 \cdot 10^{-45} \ \dots \ \approx 3.4 \cdot 10^{38}$     | $-2^{-149} \ \dots \ (2-2^{-23}) \cdot 2^{127}$                    |
| `double`   | $\approx 4.9 \cdot 10^{-324} \ \dots \ \approx 1.798 \cdot 10^{308}$ | $-2^{-1074} \ \dots \ (2-2^{-52}) \cdot 2^{1023}$                     |

Special numbers

- `+0.0` `-0.0`
- `Infinity`, `-Infinity`, `Double.POSITIVE_INFINITY`, `Double.NEGATIVE_INFINITY`
- `NaN`, `Double.NaN`
- `BigDecimal`
- `BigEnteger`

Character is *half-Number-like* value type

| Value Type | Range               | Range Bin              |
| ---------- | ------------------- | ---------------------- |
| `char`     | $0 \ \dots \ 65535$ | $0 \ \dots \ 2^{16}-1$ |

Java has 1 referential value types -- `null` which is also called _reference_

Java has a special value type of `void`

## Notes

Values can be assigned to a variables

Values _can't be changed_, instead variables are assigned with new value

Values are copied when passing as a method argument

<!--

|            | Value Type | Value Example  |
| ---------- | ---------- | -------------- |
| Booleans   | `boolean`  | `true`,`false` |
| Integers   | `byte`     | `42`, `-1`     |
|            | `short`    | `42`, `-1`     |
|            | `int`      | `42`, `-1`     |
|            | `long`     | `42L`, `-1L`   |
| Floats     | `float`    | `1.0`, `1.0f`  |
|            | `double`   | `1.0D`         |
| Characters | `char`     | `'a'`          |

- [[Values & Value Types]]
- Value types
  - [[Numbers (Java)]]
  - [[Strings]]
  - [[Booleans]]
- Literals
- [[Strings]]
  - `String` / `char`
  - Concatenation
  - Interpolation
  - String.format
  - Guids
-->