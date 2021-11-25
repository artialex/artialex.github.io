---
tags: [ds, graph]
---

# Graph vertex

::aliases[Graph node]

## Properties

- _Degree_ or _Valency_ -- number of edges coming out from this vertex

<!--
viz: neato
:::
graph {
	rankdir = LR
	bgcolor = transparent
	arrowsize = .1
	node [
		shape     = circle
		width     = 0.3
		height    = 0.3
		fixedsize = true
		fontname  = Nunito
		fontsize  = 10
	]
	edge [
		arrowsize = .6
		arrowhead = open
	]
	a [ label = 5 ]
	b [ label = 2 ]
 	c [ label = 2 ]
  	d [ label = 2 ]
   	e [ label = 2 ]
	z [ label = 1 xlabel = <
		<table border="0" cellborder="0" cellspacing="0">
			<tr><td><font color="#586e75">1</font></td></tr>
		</table>
	> ]
	x [ label = 0 xlabel = <
		<table border="0" cellborder="0" cellspacing="0">
			<tr><td><font color="#586e75">2</font></td></tr>
		</table>
	> ]
	{b c} -- a -- {d e}
	b -- d
	c -- e
	z -- a
}
:::
-->

## Vertex types

- _Leaf_ or _End vertex_ is a vertex with degree = 1
- _Isolated vertex_ is a vertex with degree = 0

<!--
- !en[Вершина](Vertex) -- $u, v$
- !en[Степень](Degree) *или* !en[Валентность](Valency) -- $\deg v$
-->
