---
tags: [java]
---

**Collections** are containers for related values

- Collections *only store references* to objects 
	- Arrays of primitive values are exceptions
- Collections are named with `<Implementation><Interface>` pattern
	- `ArrayList` is a list (*interface*) with an array (*Implementation*) under the hood
	- `HashMap` is a map (*interface*) with a hash table (*Implementation*) under the hood

- [[Arrays]]

## Java collections

Collection Interfaces

- `Iterable` - collection has an iterator, and is traversable using `for (T value: collection) { ... }`
	- `Collection` is basic interface for all Iterable collections
		- `List` is a sequence of elements
		- `Set` is a sequence of unique elements
			- `SortedSet`
			- `NavigableSet` has methods for quick navigation
		- `Queue` is LIFO collection
			- `Deque` is a double-ended queue
		- `Map` is a sequence of key-value entries
			- `SortedMap`
			- `NavigableMap` has methods for quick navigation

- [[Lists]]
- [[Sets]]
- [[Maps]]
- [[Queues]]

## Other collections

- `ImmutableList`, `ImmutableSet`, `ImmutableMap`, etc...
- `Multiset` or `Bag` count how many times an element has been added
- `Multimap` is an convenient structure for `Map<K, List<V>>` or `Map<K, Set<V>>`
- `BiMap` works both sides, allowing to get *key* by *value*
- `RangeSet`, `RangeMap` for storing disjoint ranges
- `LoadingCache` allows to have a timer for elements

Related

<!--
- [[Concurrent collection interfaces]]
- [[Concurrent collections]]
-->

##### Unmodifiable collections

---

-  [[RU] Collections](https://habr.com/ru/company/luxoft/blog/256877/)



