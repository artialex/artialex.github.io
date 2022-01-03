---
tags: [java]
---

# Maps

Single-threaded

- `HashMap` is a map backed by hashtable
	- `IdentityHashMap` is like a `HashMap` but keys are compared with `==`
		- Graph friendly
		- Spoof attack 
	- `WeakHashMap` is like a `HashMap` but keys are *weak references*
		- Cache friendly
- `LinkedHashMap` is a map backed by linked list & hash-table. Keeps insertion order
- `TreeMap` is a map backed by red-black tree. Sorted by keys
- `EnumMap` has enums as keys
- `HashTable` is obsolete and not used

Multi-threaded

- `ConcurrentHashMap` is a thread-safe `HashMap`
- `ConcurrentSkipListMap` is a thread-safe `TreeMap`

Immutable map

```java
var map1 = Map.of(
	"name", "Alex", 
	"location", "Moscow"
);

var map2 = Map.ofEntries(
	Map.entry("name", "Alex"),
	Map.entry("location", "Moscow")
);
```

Mutable map

```java
var map1 = new HashMap(Map.of(
	"name", "Alex", 
	"location", "Moscow"
));

var map2 = new HashMap(Map.ofEntries(
	Map.entry("name", "Alex"),
	Map.entry("location", "Moscow")
));
```