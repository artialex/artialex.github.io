---
tags: [ds, graph, tree]
---

# Binary tree

Двоичное дерево -- это дерево, у узлов которых максимум два дочерних узла

Также соответствующая структура данных

```
class Node<T> {
	T data
	Node left
	Node right
}
```

viz:
:::
graph {
bgcolor = transparent
fontname = Nunito
fontsize = 10
node [
fixedsize = true
shape = circle
width = .3
fontname = Nunito
fontsize = 0
]
a -- {b c}
b -- {d e}
c -- {f g}
}
:::

### Типы

- Universal value tree
