---
tags: [algo, graph]
---

# DFS

Stands for **D**epth-**F**irst **S**earch

Tries to find the way _as fast as possible_ but does not guarantee this way will be the shortest

<!--
;Белый
:Вершина не посещена
;Серый
:Вершина посещена, но может иметь смежную вершину, которая не была посещена
;Черный
:Вершина посещена, как и все смежные с ней вершины

-->

```
interface Node<T> {
	value: T
	children: Node<T>[]
}

function dfs<T>(start: Node<T>, target: T) {
	if (start.value === target) {
		return start
	}
	
	for (let child of start.children) {
		let result = dfs(child, target);
		
		if (result != null) {
			return result
		}
	}
	
	return null
}

```

---
