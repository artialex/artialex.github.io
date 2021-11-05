Single-threaded

- `HashMap` is a map backed by hashtable
	- `IdentityHashMap` is like a `HashMap` but keys are compared with `==`
		- Graph friendly
		- Spoof attack 
	- `WeakHashMap` is ike a `HashMap` but keys are *weak references*
		- Cache friendly
- `LinkedHashMap` is a map backed by linked list & hashtable. Keeps insertion order
- `TreeMap` is a map backed by red-black tree. Sorted by keys
- `EnumMap` has enums as keys
- `HashTable` is obsolete and not used

Multi-threaded

- `ConcurrentHashMap` is a thread-safe `HashMap`
- `ConcurrentSkipListMap` is a thread-safe `TreeMap`