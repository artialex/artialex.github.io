---
tags: [map]
---

# Graph theory

Graph is a structure containing [[Graph vertex|vertices]], and [[Graph edge|edges]] between vertices. They are also called [[Graph vertex|nodes]] and [[Graph edge|links]] respectively

## Properties

- [[Graph orientation|Orientation]]
- [[Graph cyclicity|Cyclicity]]
- [[Graph weight|Weight]]
- [[Graph connectivity|Connectivity]]

<!--
## Типы графов

- [[Complete graph]]
	- Турнир !en[](Tournament) -- это полный ориентированный граф
- [[Двудольный граф|Двудольный граф, биграф]] !en[](Bipartite graph)
- [[Tree]]
	- [[Binary tree]]
	- !en[Звезда](Star) -- это граф, в котором все ребра исходят из одной вершины, $S_k = K_{1,k}$
		- !en[Клешня](Claw) -- это звезда с тремя ребрами, $K_{1,3}$
- Regular graph
- Ациклические графы не содержат циклов
- Пустой (нулевой) граф
	- Единичный граф
- Плоский (планарный) граф
- Multigraph allow adjacent nodes have more than one link

-->
<!--
[[Cool graphs]]

|Циклы|Макс.<br />дочерних<br />узлов у узла|Макс.<br />родительских<br />узлов у узла|Структура|
|:--:|:--:|:--:|:--:|
|Могут быть|Inf.|Inf.|Ориентированный графа|
|Нет|Inf.|Inf.|Цикличный граф|
|Нет|Inf.|1|[[Tree]]|
|Нет|1|1|[[Linked List]]|
-->

## Representations

- [[Adjacency matrix]]
- [[Adjacency list]]
- Edge list
- Incidence matrix

## Algorithms

- [[Depth-first search]]
- [[Breadth-first search]]

## Traversions

_TODO_

## Operations

_TODO_

<!--
### Понятия

- !en[Подграф](Subgraph)
- !en[Плотность](Density)
	- !en[Плотный граф](Dense)
	- !en[Разреженный граф](Sparse)

### Аномалии

- Self loop
- Parallel edges (multigraphs)
-->

### Notation

- Graph: $G$
  - Edge: $(u, v), (u, v, w)$
- Set of vertices: $V$
- Set of edges: $E$
  - Set of arcs: $A$

---

### Ссылки

- [Graph Theory](https://www.youtube.com/watch?v=09_LlHjoEiY) 📺
- [Игра с плоскими графами](http://pulzed.com/demo/tronix2/) 🎮
