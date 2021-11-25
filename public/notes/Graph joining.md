---
tags: [ds, graph]
---

# Graph joining

viz:
:::
graph {
	subgraph cluster_a {
		a0 -- a1 -- a2 
		{
			rank = same
			a1 a2
		}
	}
}
:::