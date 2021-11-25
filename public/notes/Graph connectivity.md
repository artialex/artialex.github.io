---
tags: [ds, graph]
---

# Graph connectivity

## Connected graph

<!--
viz: neato
:::
graph {
	rotate = 90
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
	subgraph a {
		a0 -- a1 -- a2 -- a0
		a3 -- {a4 a5 a6}; a5 -- a6 -- a4
		a2 -- a3 -- a7
	}
}
:::
-->

## Disconnected graph

<!--
viz: neato
:::
graph {
	bgcolor = transparent
	rotate = 90
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
		a3 -- {a4 a5 a6}; a5 -- a6 -- a4
		a2 -- a3 -- a7 [ style = invis ]
	}
}
:::
-->