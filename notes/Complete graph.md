# Complete graph

Graph where every vertex has an edge with every other vertex

$$
K_n
$$

viz: circo
:::
graph {
bgcolor = transparent
node [
shape = circle
width = 0.1
height = 0.1
fixedsize = true
fontsize = 0
fillcolor = black
style = filled
]
subgraph a {
a0 -- {a1}
}
subgraph x {
x0 -- {x1 x2}
x1 -- {x2}
}
subgraph b {
b0 -- {b1 b2 b3}
b1 -- {b2 b3}
b2 -- {b3}
}
subgraph c {
c0 -- {c1 c2 c3 c4}
c1 -- {c2 c3 c4}
c2 -- {c3 c4}
c3 -- {c4}
}
subgraph d {
d0 -- {d1 d2 d3 d4 d5}
d1 -- {d2 d3 d4 d5}
d2 -- {d3 d4 d5}
d3 -- {d4 d5}
d4 -- {d5}
}
subgraph e {
e0 -- {e1 e2 e3 e4 e5 e6}
e1 -- {e2 e3 e4 e5 e6}
e2 -- {e3 e4 e5 e6}
e3 -- {e4 e5 e6}
e4 -- {e5 e6}
e5 -- {e6}
}
subgraph g {
g0 -- {g1 g2 g3 g4 g5 g6 g7}
g1 -- {g2 g3 g4 g5 g6 g7}
g2 -- {g3 g4 g5 g6 g7}
g3 -- {g4 g5 g6 g7}
g4 -- {g5 g6 g7}
g5 -- {g6 g7}
g6 -- {g7}
}

}
:::

## Complement graph

A complement graph completes a graph to complete graph

```latex complementary_graph
\tikzstyle{every node} = [
	fill,
	circle,
	inner sep = 0cm,
	minimum width = 0.3cm
]
\def\x{3}
\begin{tikzpicture}
    \draw
		node (1) at (0,   0) {}
        node (2) at (0,  \x) {}
        node (3) at (\x, \x) {}
        node (4) at (\x,  0) {}
	;
    \draw
		[thick]
		(1) -- (2) -- (3) -- (4) -- (1)
	;
    \draw
		[dashed, gray]
		(1) -- (3) (2) -- (4)
	;
\end{tikzpicture}

\hspace{1cm}

\begin{tikzpicture}
    \draw
        node (1) at (0,   0) {}
        node (2) at (0,  \x) {}
        node (3) at (\x, \x) {}
        node (4) at (\x,  0) {}
    ;
    \draw
        [dashed, gray]
        (1) -- (2) -- (3) -- (4) -- (1)
    ;
    \draw
		[thick]
        (1) -- (3)
        (2) -- (4)
    ;
\end{tikzpicture}
```
