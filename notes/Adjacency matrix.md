---
tags: [done]
---

# Adjacency matrix

$V{\times}V$-matrix of boolean values

$$
\BM
	0 & 1 & 0 & 1 & 0 & 0 \\
	1 & 0 & 0 & 1 & 1 & 0 \\
	0 & 0 & 0 & 0 & 1 & 1 \\
	1 & 1 & 0 & 0 & 1 & 0 \\
	0 & 1 & 1 & 1 & 0 & 0 \\
	0 & 0 & 1 & 0 & 0 & 1
\EM
$$

### Notes

- :mark[check] Effective memory-wise for dense graphs
- :mark[check] Quick search of edge weight $O(1)$
- :mark[check] Simple structure
- :mark[cross] Ineffective edge iteration
- :mark[cross] Ineffective in big graphs (takes a lot of memory)
- :mark[cross] Impossible to represent a multigraph
