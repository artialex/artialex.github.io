---
tags: [java]
---

# Sets

Single-threaded

- `HashSet` is a set backed by hashtable. Widely used
- `LinkedHashSet` is a set backed by linked list & hashtable. Keeps insertion order
- `TreeSet` is a set backed by red-black tree. Sorted
- `EnumSet` is a set with enums

Multi-threaded

- `CopyOnWriteArraySet`
- `ConcurrentSkipListSet` is thread-safe alternative to `TreeSet`

Special
- `BitSet` does not actually implement `Set`

Immutable set

```java
var set = Set.of("JavaScript", "Java", "Kotlin");
```

Mutable set

```java
var set = new HashSet(Set.of("JavaScript", "Java", "Kotlin"));
```