**Collections** are containers for related values

- Collections *only store references* to objects 
	- Arrays of primitive values are exceptions
- Collections are named with `<Implementation><Interface>` pattern
	- `ArrayList` is a list (*interface*) with an array (*Implementation*) under the hood
	- `HashMap` is a map (*interface*) with a hash table (*Implementation*) under the hood

## Java collections

![[Collection Interfaces]]

![[Concurrent collection interfaces]]

![[List implementations]]

![[Set implementations]]

![[Map implementations]]

![[Queue implementations]]

## Other collections

- `ImmutableList`, `ImmutableSet`, `ImmutableMap`, etc...
- `Multiset` or `Bag` count how many times an element has been added
- `Multimap` is an convenient structure for `Map<K, List<V>>` or `Map<K, Set<V>>`
- `BiMap` works both sides, allowing to get *key* by *value*
- `RangeSet`, `RangeMap` for storing disjoint ranges
- `LoadingCache` allows to have a timer for elements

Related

- [[Stream API]]



##### Unmodifiable collections
![[Creating maps]]

---

-  [[RU] Collections](https://habr.com/ru/company/luxoft/blog/256877/)