---
tags: [java]
---

# Java Objects

Java objects has fixed-size area inside *Java Heap*. This is why arrays are of fixed size

Object properties can't be referenced

Every object has its own identity

## Memory representation

```java
class Point { 
	int x, y;
	// Constructor...
}

let p1 = new Point(1, 2);
let p2 = new Point(3, 4);

```

![[Pasted image 20210924205528.png]]

```java
p1 = p2
p1.x = 7
```

![[Pasted image 20210924205715.png]]





`equals()` has following properties: 

- `a.equals(a) == true` (reflexivity)
- `a.equals(b) == b.equals(a)` (symmetry)
- `a.equals(b) && b.equals(c) == a.equals(c)` (transitivity)
- `a.equals(null) == false`



*Records* have pretty `toString()` implementation by default
