---
tags: [ds, graph, tree]
---

# Tree

Tree is a graph

Forest is a set of trees

- [[Binary tree]]

<!--

Дерево -- это [[Graph connectivity|связный]] [[Graph cyclicity|ациклический]] граф


viz:
:::
graph {
bgcolor = transparent
fontname = Nunito
fontsize = 10
node [
fixedsize = true
shape = circle
width = 0.1
height = 0.1
fontname = Nunito
fontsize = 0
fillcolor = black
style = filled
]
edge [
arrowsize = 1
arrowhead = open
]
a -- b -- с
f -- {e, d}
e -- {g, h}
d -- i
k -- {l, m, n}
}
:::
_Лес_ -- это множество _деревьев_

Root node

## Типы

- [[Linked List]]!en[](Linked list)

### Rooted tree

viz:
:::
digraph {
bgcolor = transparent
fontname = Nunito
fontsize = 10
node [
fixedsize = true
shape = circle
width = .1
height = .1
fontname = Nunito
fontsize = 0
fillcolor = black
style = filled
]
edge [
arrowsize = 0.6
arrowhead = open
]
subgraph cluster_0 {
label = "In-tree"
a [fillcolor = dodgerblue color = dodgerblue]
{d, e} -> b
{f, g} -> c
{b, c} -> a
}
subgraph cluster_1 {
label = "Out-tree"
1 [fillcolor = forestgreen color = forestgreen]
1 -> {2, 3}
2 -> {4, 5}
3 -> 6
}
}
:::
-->

### Заметки

- :mark[!] Любое дерево является [[Двудольный граф|двудольным графом]]

---

- [Introduction to Trees](https://www.youtube.com/watch?v=1-l_UOFi1Xw)
