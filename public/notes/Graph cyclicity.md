---
tags: [ds, graph]
---

# Graph cyclicity

Graph can be *cyclic* or *acyclic*

## Acyclic graph

Например, граф зависимостей при компиляции программы

<!--
viz: dot
:::
digraph {
	rankdir   = LR
	bgcolor   = transparent
	arrowsize = .1
	node [
		shape     = circle
		width     = 0.15
		height    = 0.15
		fixedsize = true
		fontsize  = 0
		fillcolor = black
		style     = bold
	]
	edge [
		arrowsize = .8
		arrowhead = open
	]
	subgraph a {
		a -> {y с d}
		с -> f
		y -> b
		{с d} -> e -> i
		{b f} -> g -> h
	}
}
:::
-->