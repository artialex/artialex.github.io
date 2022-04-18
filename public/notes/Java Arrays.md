---
tags: [java]
---

# Java Arrays

Arrays have *fixed size*

Initializing

```java
int[] ints = {1, 2, 3, 4, 5};
// or
var ints = new int[] {1, 2, 3, 4, 5};

var notInit = new int[10];
var empty = new int[0];

int[][] twoDimensional = {
	{1, 2, 3},
	{4, 5, 6},
	{7, 8, 9},
};
var twoDimensionalNotInit = new int[5][5];
```

Operations

```java
var ints = new int[] {1, 2, 3, 4, 5};

// Size
System.out.println(ints.length);

// Reading, writing
System.out.println(ints[0]);
ints[0] = 7;
System.out.println(ints[0]);

// Copying
int[] copy = ints.clone();

// Equality check
System.out.println(ints == copy); // false

System.out.println(Arrays.equals(ints, copy)); // true
System.out.println(Arrays.deepEquals(ints, copy)); // for multi-dimensional arrays

// Sorting
Arrays.sort(ints);
```
