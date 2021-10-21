# Java

JIT-компиляция — компиляция по мере необходимости

- Two modes of KVM: client & server 
- Classloader
- GC; Links, Values & References
- Error handling
- Threads, synchronization

Questions

- What is a hash function?

## Java API

- JDBC: Java DataBase Connectivity  
- RMI: Remote Method Invocation  
- Java Security  
- JFC: Java Fundamental Classes  
- Java 2D  
- Internationalization  
- JNDI: Java Naming and Directory Interface  
- JavaMail  
- Java 3D  
- Java Media  
- Enterprise JavaBeans
  
### Java Functional interfaces  
  
- Function: one argument, returns a function result, used for chaining  
- Supplier: no arguments, returns a value of some type  
- Consumer: one argument, operates with provided value  
- Comparator: compares values  
  
### Java Optionals  
  
How often they are used?  
  
### Java Streams  
  
What to use: `.stream` or `.parallelStream`?  
  
### Java Associative Arrays (Hash Maps)  
  
  
###   
  
[[Java Code Snippets]]
  
### Каркас коллекций

viz:
:::
digraph h {
	bgcolor = transparent
	node [ shape = plain fontname = "Fantasque Sans Mono" ]
	edge [ arrowsize = 0.5 dir = back style = dashed ]		
	{
		node [ fontcolor = forestgreen ]
		i [ label = Iterable ]
		c [ label = Collection ]
		l [ label = List ]
		q [ label = Queue ]
		d [ label = Deque ]
		s [ label = Set ]
		ss [ label = SortedSet]
	}
	{
		node [ fontcolor = dodgerblue ]
		al [ label = ArrayList ]
		ll [ label = LinkedList ]
		v [ label = Vector ]
		st [ label = Stack ]
		pq [ label = PriorityQueue ]
		ad [ label = ArrayDeque ]
		ts [ label = TreeSet ]
		hs [ label = HashSet ]
		lhs [ label = LinkedHashSet ]
	}
 	i -> c
	c -> {l q s}
	q -> d
	s -> ss
	{
		edge [ style = solid ]
		l -> {al}
		{d l} -> ll
		d -> ad
		q -> pq
		l -> v -> st
		ss -> ts
		s -> {hs lhs}
	}
	{
		rank = same
		al pq hs
	}
	{
		rank = same
		ll ad lhs
	}

}


:::

viz:
:::
digraph h {
	bgcolor = transparent
	node [ shape = plain fontname = "Fantasque Sans Mono" ]
	edge [ arrowsize = 0.5 dir = back style = dashed ]		
	{
		node [ fontcolor = forestgreen ]
		m [ label = Map ]
		sm [ label = SortedMap ]
	}
	{
		node [ fontcolor = dodgerblue ]
		hm [ label = HashMap ]
		ht [ label = HashTable ]
		tm [ label = TreeMap ]
	}
	m -> sm
	{
		edge [ style = solid ]
		m -> {ht hm}
		sm -> tm
	}
}
:::

- RandomAccess
- Iterator
    - ListIterator
- Map
    - SortedMap
        - Navigable Map
- Iterable
    - Collection
        - List
        - Set
            - SortedSet
                - NavigableSet
        - Queue
            - Deque


### Ссылки

- https://github.com/iluwatar/java-design-patterns