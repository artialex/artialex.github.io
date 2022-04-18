---
tags: [java]
---

# Functional elements in Java

## Stream API

There are a lot of ways to create a stream

```java
// from a collection
var stream = Arrays.asList("a", "b", "c").stream();

// from values
var stream = Stream.of("a", "b", "c");

// from an array
var array = new int[] {1, 2, 3, 4, 5};
var stream = Arrays.stream(array);

// from a file
var stream = Files.lines(Paths.get("/path/to/file"));

// from a string
var stream = "abc".chars();

// from `Stream.builder()`
var stream = Stream.builder().add("a").add("b").add("c").build();

// from `Stream.iterate()`
var stream = Stream.iterate(1, num -> num + 1);

// from `Stream.generate()`
var stream = Stream.generate(() -> "a");
```

It's also possible to create _parallel_ streams using `.parallelStream()` instead of `.stream()`

_Conveyor_ stream methods return a _new_ Stream, working as a _builder_

- `filter()`, `map()`
- `skip()`, `take()`
- `sorted()`
- `distinct()`
- `limit()`
- `peek()` - useful for debugging

_Terminal_ stream methods return other object such as collection, primitive value, `Optional`, etc...

- `findFirst()`, `findAny()` (both are _short-circuit_)
- `collect()`
- `count()`
- `anyMatch()` (_short-circuit_), `noneMatch()`, `allMatch()`
- `min()`, `max()`
- `forEach()`, `forEachOrdered()`
- `toArray()`
- `reduce()`

Stream can have _many conveyor_ methods and _one terminal_ method.

Streams are _similar to SQL_ queries

## Functional interfaces

- Function: one argument, returns a function result, used for chaining
- Supplier: no arguments, returns a value of some type
- Consumer: one argument, operates with provided value
- Comparator: compares values

## Optionals

Optionals should not be used as object properties

Optionals should not be used as list elements

Optionals can be used as return type

---

- [[RU] Quirks of Stream API](https://youtu.be/1_Zj3gS_a3E)
- [Optional as Return Type](https://www.baeldung.com/java-optional-return)
- [Functional Exceptions In Java](https://8thlight.com/blog/brian-gerstle/2019/01/22/fnl-exceptions-in-java.html)
