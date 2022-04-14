---
tags: [algo, graph]
aliases: [DFS]
---

# Depth-first search

_TODO_

<!--
;Белый
:Вершина не посещена
;Серый
:Вершина посещена, но может иметь смежную вершину, которая не была посещена
;Черный
:Вершина посещена, как и все смежные с ней вершины

-->

```
function search(graph, start):
  foreach vertex in graph.vertices:
    pred[vertex] = -1
    color[vertex] = White
	visit(start)

functon start():
  color[u] = Gray
  foreach neighbor vertex of u:
    if color[vertex]
```

Tries to find the way _as fast as possible_ but does not guarantee this way will be the shortest
