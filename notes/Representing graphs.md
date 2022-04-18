---
tags: [ds, graph]
---

# Representing graphs

Most common graph representations are adjacency matrix and adjacency list

Adjacency matrix is a $V{\times}V$-matrix of boolean values

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

- Pros: The structure is very simple, it's memory-wise effective for dense graphs,
  quick search of edge weight $O(1)$
- Cons: INeffective edge iteration, ineffective for big graphs (takes a lot of memory), impossible to represent a multigraph

Adjacency list is an array of linked lists

$$
[0] \to [1] \to [2] \to [3]
\newline
[1] \to [0] \to [2]
\newline
[2] \to [0] \to [1]
\newline
[3] \to [0]
$$

- Pros: memory-wise effective for sparse graphs, effective edge iteration
- Cons: Ineffective search of edge weight $O(E)$, relatively complex structure

Less common representations are:

- _Edge list_ is an array of all edges $$(u, v, w)$$ [(C, A, 4)]
- _Incidence matrix_
