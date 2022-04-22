---
tags: [algo, ds, wip]
---

# Algorithms & Data Structures

<!--

Data Structure состоит из Data Types

| Data type                  | Data Structure                                           |
| -------------------------- | -------------------------------------------------------- |
| Variable                   | Collections                                              |
| Abstract                   | Concrete                                                 |
| Contains values, not data  | Contains various data types                              |
| Can be reassigned directly | Values can be changes using special methods, e.g. `push` |
| Integer, Character         | Stack, Queue, Tree                                       |

-->

## Data structures

Data structure is a _way to store information_; it's _high-level abstraction over low-level data_

Data structures can be _contiguous_ i.e. located in a single slab of a memory (array, matrix, heap, hash table)
or they can be _linked_ i.e. located in a distinct chunks of memory bound by pointers (list, tree, graph)

<!--

# Node

Basic data structure, a simple *container for a value* + pointer to the next node (can be `null`)

Nodes are used in linked lists, trees, graphs

Узлы используются в [[Связные списки!связных списках]], [[Деревья!деревьях]], [[Графы!графах]]

## Notes

- Nodes can be *Child nodes* and *Parent nodes*
- *Edge* is a connection between nodes
- *Leaf node* has no children, *Root node* has no parent
- *Sibling nodes* connected to the same parent node
- *Vertex* is the same as Node


- Node

Collections

- [[Array]], Typed Array
- Buffer
- [[List]], Linked List
- Stack & [[Queue]] / Deque, Async Queue

Node, Graph, Tree (Rotation & Balancing), Binary tree, Trie, Hierarchical tree


Other, Heap, Automata

-->

## Algorithms

Algorithm is a _way to solve a problem_; it's a _sequence of actions transforming one set of data to another_

[[Algorithm complexity]]

<!--

Quicksort

1. Choose an element in array, define it as a _pivot point_
2. Compare the rest element with the pivot and make three arrays: one with element less than pivot,
   one with elements equals to pivot, and one with elements bigger than pivot
3. Recursively execute the same sequence of operations for arrays with lesser or higher elements, if their length is more than 1

```js
function quicksort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let pivot = arr[Math.floor(arr.length / 2)]

  let fst = arr.filter((_) => _ < pivot)
  let mid = arr.filter((_) => _ === pivot)
  let lst = arr.filter((_) => _ > pivot)

  return [...quicksort(fst), ...mid, ...quicksort(lst)]
}
```

Types of algorithms:

- Sorting: Quicksort, Mergesort, Heapsort
- Searching: Binary search, Hash table, BST, Red-Black BST
- Graph traversals: BFS, DFS, Prim, Kruskal, Dijkstra
- Strings: Radix sort, Trie, KMP, Regexps, data compression
- Advanced: B-tree, suffix array, maxflow
- Pathfinding: A\* pathfinding, DFS (Bad), BFS (Bad),Dijkstra (Better), AStar Euclid (Best) AStar Manhattan (Best)

- Histograms
- Trees: balanced tree

Greedy algorithms, Rucksack problem, Travelling salesman problem, Combinatorial explosion

Strategies are:

- brute force, iteration, pointer / two pointers
- memoization, recursion (recursion vs while, fibonacci, tail-wind), divide & conquer, backtracking search (8 queens problem)
- Dynamic programming, metaprogramming

Every algorithm has a concept called _complexity_, O-notation, O(1), O(n), complexity analysis

Algorithm effectiveness

In Java collections already coupled with algorithms, in C++ it is not necessary true

## Questions

- Learn how memory works
- Concept of _hash function_, hashtable, hashmap
- lookup

## Buzzworld

- [[How to solve algorithmic tasks]]
- [[Edge list]]
- [[Heap]]
- [[Pathfinding]], Path-following
- [[Типы данных]]
- Сложность по времени
  - O-нотация
- Сложность по памяти
- Жадные алгоритмы, область применения
- Рекурсия
- "Разделяй и властвуй"
- Представление в памяти
- Битовые маски
- Фильтр Блума
- Алгоритм Хаффмана
- [[Boolean]]
- [[Character]]
- [[Floating-point number]]
- Fixed-point number
- [[Integer]]
- Reference / Pointer
- Enumerated type
- Date Time
- Cmposite Types
  - Array
  - Record
  - Union
- [[Character]]

* Binary Search Tree
* Дерево 2-3-4
* Обход графа
* Поиск кратчайшего пути
* [[Breadth-first search]]
* [[Depth-first search]]

## Abstract data types

- [[Array]]
- [[List]]
- Stack
- Map, Dictionary _or_ Associative array
- Set

## Data structures

- [[Node]]
- [[Array]]
  - Resizeable Array, Array List
  - Sorted Array
- Hash table
- Skip List
- [[Graph theory]]
  - [[Tree]]
    - Balanced tree
    - [[Binary tree]]
      - Бинарный поиск
    - Red-Black Tree
  - [[Linked List]]
    - Двусвязные списки (Doubly Linked Lists)
    - Стек (Stack)
    - Очередь (Queue)
    - Double-ended Queue
      - [[Priority queue]]
- Pile
- [[Эффективность алгоритмов]]
- Квадратичная
- Пирамидальная
- [[Insertion sort]]
- [[Быстрая сортировка]]

* [[Backtracking search]]
* [[Поиск пути]]

-->
