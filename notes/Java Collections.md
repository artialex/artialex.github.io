---
tags: [java]
---

# Java Collections

_Collections_ are containers for related values

Collections _only store references_ to objects. The exception are arrays of primitive values

Collections are named with `<Implementation><Interface>` pattern. Examples include:

- `ArrayList` is a list (_interface_) with an array (_Implementation_) under the hood
- `HashMap` is a map (_interface_) with a hash table (_Implementation_) under the hood

How are they different from arrays? Collections are a level higher in abstraction than arrays, their size is not fixed, they have utility methods, they cannot hold primitives, they use underlying data structures (such as array, for example)

Some collection interfaces:

- `Iterable` means that collection has an iterator, and is traversable using `for (T value: collection) { ... }`
- `Collection` is basic interface for all Iterable collections

## Lists

List is a sequence of elements: Various list examples:

|                        |                                                           |
| :--------------------- | :-------------------------------------------------------- |
| `ArrayList`            | Backed by array. Widely used                              |
| `LinkedList`           | Backed by Doubly-linked list.Rarely used                  |
| `Vector`               | Obsolete and not used                                     |
| `CopyOnWriteArrayList` | Creates a copy of itself on every change (multi-threaded) |

Creating an immutable list:

```java
var list = List.of("Java", "JavaScript", "Python")
```

Creating a mutable list:

```java
var list = new ArrayList(List.of("Java", "JavaScript", "Python"))
```

## Sets

Set is a sequence of _unique_ elements. `SortedSet` allows sorting. `NavigableSet` has methods for quick navigation. Set examples:

|                         |                                                              |
| :---------------------- | :----------------------------------------------------------- |
| `HashSet`               | Backed by hashtable. Widely used                             |
| `LinkedHashSet`         | Backed by _linked list and hashtable_. Keeps insertion order |
| `TreeSet`               | Backed by red-black tree. Sorted                             |
| `EnumSet`               | Set containing enums                                         |
| `CopyOnWriteArraySet`   | Multi-threaded                                               |
| `ConcurrentSkipListSet` | Thread-safe alternative to `TreeSet`. Multi-threaded         |
| `BitSet`                | Special case. Does not actually implement `Set`              |

Creating an immutable set:

```java
var set = Set.of("JavaScript", "Java", "Kotlin");
```

Creating a mutable set:

```java
var set = new HashSet(Set.of("JavaScript", "Java", "Kotlin"));
```

## Maps

`Map` is a sequence of key-value entries. `SortedMap` allows sorting. `NavigableMap` has methods for quick navigation. Map examples:

|                   |                                                                                          |
| :---------------- | :--------------------------------------------------------------------------------------- |
| `HashMap`         | Backed by hashtable. Widely used                                                         |
| `IdentityHashMap` | Like a `HashMap` but keys are compared using `==` operator. Graph friendly. Spoof attack |
| `WeakHashMap`     | Like a `HashMap` but keys are _weak references_. Cache friendly                          |
| `LinkedHashMap`   | Backed by linked list & hash-table. Keeps insertion order                                |
| `TreeMap`         | Backed by red-black tree. Sorted by keys                                                 |
| `EnumMap`         | Has enums as keys                                                                        |
| `hashTable`       | Obsolete and not used                                                                    |

Creating an immutable map:

```java
var map1 = Map.of("name", "Alex", "location", "Moscow");
var map2 = Map.ofEntries(Map.entry("name", "Alex"),	Map.entry("location", "Moscow"));
```

Creating a mutable map:

```java
var map1 = new HashMap(Map.of("name", "Alex", "location", "Moscow"));
var map2 = new HashMap(Map.ofEntries(Map.entry("name", "Alex"), Map.entry("location", "Moscow")));
```

## Queues

`Queue` is a LIFO (Last In First Out) collection. `Deque` is a double-ended queue

|                 |                                                       |
| :-------------- | :---------------------------------------------------- |
| `ArrayDeque`    | Double ended queue backed by `ArrayList`. Widely used |
| `LinkedList`    | Implements `Queue` interface as well                  |
| `PriorityQueue` | Queue backed by heap. Sorted. Cannot contain `null`   |
| `Stack`         | Obsolete and not used                                 |

Other collections include:

- `ImmutableList`, `ImmutableSet`, `ImmutableMap`, etc...
- `Multiset` or `Bag` count how many times an element has been added
- `Multimap` is an convenient structure for `Map<K, List<V>>` or `Map<K, Set<V>>`
- `BiMap` which works both sides, allowing to get _key_ by _value_
- `RangeSet`, `RangeMap` for storing disjoint ranges
- `LoadingCache` allows to have a timer for elements

There are also concurrent collections:

- `BlockingQueue` - multi-threading, supports conditional locks
  - `TransferQueue` - allows to block inserting thread
  - `BlockingDeque`
- `ConcurrentMap` - thread-safe map
  - `ConcurrentNavigableMap`

## TODO

- Unmodifiable collections
