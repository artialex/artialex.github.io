---
tags: [ds, graph]
---

# Graph orientation

Graph can be _oriented_, _unoriented_ and _mixed_

## Oriented graph

$$
G = (V, E)
$$

::insertion[graph]{type=oriented}

<!--

viz: neato
:::
graph {
	bgcolor   = transparent
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
	subgraph a {
		a0 -- a1 -- a2 -- a0
	}
}
:::
-->

## Unoriented graph

$$
G = (V, A)
$$

::insertion[graph]{type=unoriented}

<!--
viz: neato
:::
digraph {
	bgcolor   = transparent
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
		arrowsize = 1
		arrowhead = open
	]
	subgraph a {
		a0 -> a1 -> a2 -> a0
	}
}
:::
-->

## Mixed graph

$$
G = (V, E, A)
$$

::insertion[graph]{type=mixed}

<!--
viz: neato
:::
digraph {
	bgcolor   = transparent
	arrowsize = .1
	margin = 0
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
		arrowsize = 1
		arrowhead = open
	]
	subgraph a {
		a0 -> a1 -> a2
		a2 -> a0 [ dir = none ]
	}
}
:::
-->
