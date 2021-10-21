# Cool graphs

viz: neato
:::
digraph {	
	scale = 0.8
	bgcolor = transparent
	arrowsize = .1
	node [
		shape     = circle
		width     = 0.1
		height    = 0.1
		fixedsize = true
		fontsize  = 0
		fillcolor = black
		style     = bold
	]
	edge [
		arrowsize = .6
		arrowhead = open
	]
	subgraph a {
		a0 -> {a1, a2}
		a1 -> {a2, a3}
		a2 -> {a3, a4}
		a3 -> {a4, a5}
		a4 -> {a5, a6}
		a5 -> {a6, a7}
		a6 -> {a7, a0}
		a7 -> {a0, a1}
	}
	subgraph b {
		b0 -> b1 -> {b2, b3} -> b4 -> b5
	}
}
:::

viz: neato
:::
graph {
	scale = 0.8
	bgcolor = transparent
	arrowsize = .1
	node [
		shape     = circle
		width     = 0.1
		height    = 0.1
		fixedsize = true
		fontsize  = 0
		fillcolor = black
		style     = bold
	]
	edge [
		arrowsize = .6
		arrowhead = open
	]
	subgraph c {
		c0 -- c1 -- c2 -- c3 -- c4 -- c0
		c0 -- d0
		c1 -- d1
		c2 -- d2
		c3 -- d3
		c4 -- d4
		d0 -- d2 -- d4 -- d1 -- d3 -- d0 
 	}
}
:::

viz: neato
:::
graph {
	scale = 0.8
	bgcolor   = transparent
	arrowsize = .1
	ordering  = out
	node [
		shape     = circle
		width     = 0.1
		height    = 0.1
		fixedsize = true
		fontsize  = 0
		fillcolor = black
		style     = bold
	]
	edge [
		arrowsize = .6
		arrowhead = open
	]
	subgraph c {
		c0 -- c1 -- c2 -- c3 -- c4 -- c0
		d0 -- d1 -- d2 -- d3 -- d4 -- d5 -- d6 -- d7 -- d8 -- d9 -- d0
		e0 -- e1 -- e2 -- e3 -- e4 -- e0
		c0 -- d0 
		c1 -- d2 
		c2 -- d4 
		c3 -- d6 
		c4 -- d8 
		e0 -- d1
		e1 -- d3 
		e2 -- d5 
		e3 -- d7 
		e4 -- d9
 	}
}
:::

viz: neato
:::
graph {
	scale = 0.8
	bgcolor = transparent
	arrowsize = .1
	node [
		shape     = circle
		width     = 0.1
		height    = 0.1
		fixedsize = true
		fontsize  = 0
		fillcolor = black
		style     = bold
	]
	edge [
		arrowsize = .6
		arrowhead = open
	]
	subgraph c {
		c0 -- c1 -- c2 -- c3 -- c4 -- c5 -- c6 -- c7 -- c8 -- c0
		c0 -- d0
		c1 -- d1
		c2 -- d2
		c3 -- d3
		c4 -- d4
		c5 -- d5
		c6 -- d6
		c7 -- d7
		c8 -- d8
		d0 -- d2 -- d4 -- d6 -- d8 -- d1 -- d3 -- d5 -- d7 -- d0
 	}
}
:::

viz: neato
:::
graph {
	scale = 0.8
	bgcolor = transparent
	arrowsize = .1
	node [
		shape     = circle
		width     = 0.1
		height    = 0.1
		fixedsize = true
		fontsize  = 0
		fillcolor = black
		style     = bold
	]
	edge [
		arrowsize = .6
		arrowhead = open
	]
	subgraph c {
		c0 -- c1 -- c2 -- c3 -- c0
		c0 -- d0
		c1 -- d1
		c2 -- d2
		c3 -- d3
		d0 -- d1 -- d2 -- d3 -- d0
 	}
}
:::