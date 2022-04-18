---
tags: [ds]
---

# Linked List

Linked list is a data structure containing a set of nodes.
Each node contains a reference (or two) to next (and previous) node of the list

$$
\def\arraystretch{1.5}
\begin{array}{c:c}
  \text{Read/Write} & 
  \text{Insert/Delete} \\
  \hline
  \color{red} O(n) & 
  \color{green} O(1) \\
\end{array}
$$


Used to implement other data structures: `Stack`, `Queue`, `Double-ended queue`, `Adjacency list`

Pointer to a linked list is the pointer to the first element of the list or `HEAD`

Single-linked list

$$
\boxed{1} 
\xrightarrow{next} 
\boxed{2} 
\xrightarrow{next} 
\boxed{3} 
\xrightarrow{next} 
null
$$

Double-linked list

$$
null 
\xleftarrow[prev]{} 
\boxed{1} 
\xrightleftharpoons[prev]{next} 
\boxed{2} 
\xrightleftharpoons[prev]{next} 
\boxed{3} 
\xrightarrow{next} 
null
$$


<!--

### Properties
- Length
- Element type
- Is sorted?
- Возможность прроизвольного доступа

```java
interface LinkedNode {
	int data;
	LinkedNode next;
}

interface LinkedList {
	LinkedNode first;
}

```

```java
interface DoublyLinkedNode {
	int data;
	LinkedNode prev;
	LinkedNode next;
}

interface DoublyLinkedList {
	DoublyLinkedNode first;
	DoublyLinkedNode last;
}
```

- Быстрое удаление -- удаление узла
- Быстрая вставка -- добавление узла

### Заметки

- Применяется для реализации [[Stack|стеков]] и [[Queue|очередей]]
- Применяется для реализации списков смежности в графах
- Циклический связанный список
	- удобен для реализации очереди
	- удобен для реализации переключения между какими-либо циклическими операциями, например переключением между выполняемыми программами
-->

Useful for iplementation of cyclic operations: for example, switching between programs