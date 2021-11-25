---
tags: [java]
---

# Lists

Single-threaded
- `ArrayList` is an array-backed list. Widely used
- `LinkedList` is doubly-linked list. Rarely used
- `Vector` is obsolete and not used

Multi-threaded
- `CopyOnWriteArrayList` creates a new copy of itself on every change

Immutable list

```java
var list1 = List.of("Java", "JavaScript", "Python");
```

Mutable list

```java
var list1 = new ArrayList(List.of("Java", "JavaScript", "Python"));
```