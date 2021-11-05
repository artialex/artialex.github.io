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