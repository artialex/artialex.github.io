---
tags: [ds, graph]
---

# Adjacency list

Array of linked lists <!-- [[Linked List|linked lists]] -->

<!--
<$viz text='
digraph G {
rankdir = LR
node [
shape = circle
width = .3
fontname = "Iosevka"
fontsize = 10
]
edge [
fontname = "Iosevka"
fontsize = 10
]
1 -> 4 [ label = 5 ]
1 -> 3 [ label = 7 ]
3 -> 4 [ label = 4 ]
1 -> 2 [ label = 3 dir = both ]
3 -> 2 [ label = 2 ]
}
'/>

||1|2|3|4|
|1|Inf|3|7|5|
|2|3|Inf|Inf|Inf|
|3|Inf|2|Inf|4|
|4|Inf|Inf|Inf|Inf|

<\$viz text='
digraph G {
node [
fixedsize = true
shape = circle
width = .3
fontname = "Iosevka"
fontsize = 10
]
edge [
fontname = "Iosevka"
fontsize = 10
]
v3 -> v0 [ label = 7 ]
v2 -> v4 [ label = 9 ]
v4 -> v1 [ label = 10 ]
v4 -> v5 [ label = 11 ]
v5 -> v2 [ label = 8 ]
}
'/>
-->

$$
\def\arraystretch{1.5}
   \begin{array}{c|cc}
   v0 & \to & v1 & \to & v4 \\
   v1 & \to & v0 & \to & v4 & \to & v2 & \to & v3 \\
   v2 & \to & v1 & \to & v3 \\
   v3 & \to & v1 & \to & v4 & \to & v2 \\
   v4 & \to & v3 & \to & v0 & \to & v1 \\
\end{array}
$$

### Notes

- :mark[check] Effective memory-wise for sparse graphs
- :mark[check] Effective edge iteration
- :mark[cross] Ineffective search of edge weight $O(E)$
- :mark[cross] Relatively complex structure
