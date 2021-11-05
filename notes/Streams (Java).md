# Streams (Java)

## Creating streams

from collection

```java
var collection = Arrays.asList("a", "b", "c");
var stream = collection.stream();
```

from values

```java
var stream = Stream.of("a", "b", "c");
```

from array

```java
var array = new int[] {1, 2, 3, 4, 5};
var stream = Arrays.stream(array);
```

from file

```java
var stream = Files.lines(Paths.get("/path/to/file"));
```

from string

```java
var stream = "abc".chars();
```

from `Stream.builder()`

```java
var stream = Stream.builder().add("a").add("b").add("c").build();
```

from `Stream.iterate()`

```java
var stream = Stream.iterate(1, num -> num + 1);
```

from `Stream.generate()`

```java
var stream = Stream.generate(() -> "a");
```

It's also possible to create _parallel_ streams using `.parallelStream()` instead of `.stream()`

## Stream Methods

**Conveyor** methods return a _new_ Stream (they work as a _builder_)

- `filter()`, `map()`
- `skip()`, `take()`
- `sorted()`
- `distinct()`
- `limit()`
- `peek()` - useful for debugging

**Terminal** methods return other object such as collection, primitive value, `Optional`, etc...

- `findFirst()`, `findAny()` (both are _short-circuit_)
- `collect()`
- `count()`
- `anyMatch()` (_short-circuit_), `noneMatch()`, `allMatch()`
- `min()`, `max()`
- `forEach()`, `forEachOrdered()`
- `toArray()`
- `reduce()`

Stream can have many conveyor methods and one terminal method.
It's similar to SQL queries

---

- [[RU] Quirks of Stream API](https://youtu.be/1_Zj3gS_a3E)
