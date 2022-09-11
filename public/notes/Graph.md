---
tags: [ds, graph, index]
---

# Graph

Graph ($G$) is a structure containing nodes (or vetices) and links (or edges)

- Graph: $G$

Nodes have _degree_ or _valency_ -- number of links coming out from this node.
_Leaf_ or _End node_ is a node with degree of 1.
_Isolated node_ is a node with degree of 0.

- Node: $u$
- Set of nodes: $V$

Links can be _arcs_ or directed links

- Link: $(u, v)$, $(u, v, w)$ -- latter with weight
- Set of links, arcs: $E$, $A$

## Properties

Graphs can be [[Graph orientation|oriented, unoriented or mixed]]

Graphs can be [[Graph cyclicity|cyclic or acyclic]]

Graphs can be [[Graph weight|weighted or unweighted]]

Graphs can be [[Graph connectivity|connected or disconnected]]

## Types

There are many _types_ of a graph such as [[Tree|tree]], [[Complete graph| complete graph]], etc

## Representations

Graph can be _represented_ in code as adjacency matrix, adjacency list, edge list

## Operations

Edge contraction or Vertex involving, Vertex splitting, Graph union, [[Graph joining]], Graph product

## Traversals

Walk (Trail, Path), Cycle, Slef-loop

## Algorithms

Pathfinding, [[DFS]], [[BFS]]

<!--
### Понятия
- !en[Подграф](Subgraph)
- !en[Плотность](Density)
	- !en[Плотный граф](Dense)
	- !en[Разреженный граф](Sparse)
- [[Notes graph]]

https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/tutorial/

# Двудольный граф, биграф

aliases:
:::
Bipartite graph
:::

Все вершины двудольного графа можно разбить на две части, без граней между вершинами одной части

viz:
:::
graph {
	bgcolor = transparent
	arrowsize = .1
	node [
		shape     = circle
		width     = 0.1
		height    = 0.1
		fixedsize = true
		fontsize  = 0
		fillcolor = black
		style     = filled
	]
	edge [
		arrowsize = .6
		arrowhead = open
	]
	subgraph cluster_a {
		style = rounded
		color = lightgray
		a b c
	}
	subgraph cluster_b {
	  	style = rounded
		color = lightgray
		d e
	}
	{a b c} -- {d e}
}
:::



https://condor.depaul.edu/ichu/csc383/notes/notes9/Graph.html

-->
