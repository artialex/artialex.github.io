---
tags: [done]
---

# Unit vector

::aliases[Normalized vector, Direction vector]

A vector with a [[Vector magnitude|magnitude]] of 1

Denoted as $\hat{v}$

::vectors{type=unit-vector}

<!--
```latex unit_vector
\begin{tikzpicture}
    % Help
    \clip (-0.4, -0.4) rectangle (4.4, 4.4);
    \draw [help lines, lightgray] (-1, -1) grid (5, 5);
    \draw [->] (-4, 0) -- (4, 0) coordinate (x axis) node [below right] {$x$};
    \draw [->] (0, -4) -- (0, 4) coordinate (y axis) node [above left] {$y$};
    % Image
    \coordinate (O) at (0, 0);
    \draw [gray, dashed] (O) circle (1);
    \coordinate (A) at (3, 2);
    \draw [vec, dashed, thick] [->] (0, 0) -- (A) node [midway, above] {$\vec v$};
    \draw [proj] (A) -- ($(-4, 0)!(A)!(4, 0)$);
    \draw [proj] (A) -- ($(0, -4)!(A)!(0, 4)$);
    \node [\Color, below, fill = white] at (3, 0) {$3$};
    \node [\Color, left, fill = white] at (0, 2) {$2$};
    \draw [vec] [->] (O) -- ($(O)!1cm!(A)$) node [midway, above] {$\hat v$};
\end{tikzpicture}
```
-->

_Normalizing a vector_ is a process of finding a normalized vector for a vector $\vec{\Green v}$:

$$
\hat{\Green v} = \frac{\vec{\Green v}}{\|\vec{\Green v}\|}
$$

### Notes

- Used in cases when _only the direction_ is needed
- Sometimes they are also called _normal vectors_ which is not quite correct
