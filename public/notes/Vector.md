---
tags: [done]
---

# Vector

**Algebraic representation** of a vector is a _one-dimensional list_

$$
\vec{\Green v} = \BM a_1 \\ a_2 \\ \vdots \\ a_n \EM
\quad or \quad
\vec{\Green v} = \BM a_1 & a_2 & \ldots & a_n \EM
$$

**Geometrical representation** of a vector is _an arrow_ coming from
the origin of a coordinate space to the point which denoted either as
$x$ and $y$ coordinates or as an angle $\theta$ and a magnitude $\|\vec{v}\|$

::vectors{type=vector}

<!--
visual:
:::
Vector
:::

```latex vector
\begin{tikzpicture}
  % Help
  \clip (-0.4, -0.4) rectangle (4.4, 4.4);
  \draw [help lines, lightgray] (-1, -1) grid (5, 5);
  \draw [->] (-4, 0) -- (4, 0) coordinate (x axis) node [below right] {$x$};
  \draw [->] (0, -4) -- (0, 4) coordinate (y axis) node [above left] {$y$};
  % Image
  \coordinate (A) at (3, 2);
  \draw [vec] [->] (0, 0) -- (A) node [midway, above] {$\vec v$};
  \draw [proj] (A) -- ($(-4, 0)!(A)!(4, 0)$);
  \draw [proj] (A) -- ($(0, -4)!(A)!(0, 4)$);
  \node [\Color, below, fill = white] at (3, 0) {$3$};
  \node [\Color, left, fill = white] at (0, 2) {$2$};
\end{tikzpicture}
\hspace{4em}
\begin{tikzpicture}
  % Help
  \clip (-0.4, -0.4) rectangle (4.4, 4.4);
  % \draw [help lines, lightgray] (-1, -1) grid (5, 5);
  \draw [->] (-4, 0) -- (4, 0) coordinate (x axis) node [below right] {$x$};
  \draw [->] (0, -4) -- (0, 4) coordinate (y axis) node [above left] {$y$};
  % Image
  \coordinate (A) at (3, 2);
  \draw [vec] [->] (0, 0) -- (A) node [midway, above] {$\vec v$};
  \draw [help lines] (0, 0) circle (1) circle (2) circle (3) circle (4);
  % \draw [help lines] (0, 0) circle ({veclen(3, 2)});

  \draw [NavyBlue, dashed] (1.2, 0) arc [start angle=0, end angle=33, radius=1.2] node [midway, right] {$\theta$};
  \draw [NavyBlue, dashed] (0, 0) circle ({veclen(3, 2)});

  % \draw [proj] (A) -- ($(-4, 0)!(A)!(4, 0)$);
  % \draw [proj] (A) -- ($(0, -4)!(A)!(0, 4)$);
  % \node [\Color, below, fill = white] at (3, 0) {$3$};
  % \node [\Color, left, fill = white] at (0, 2) {$2$};
\end{tikzpicture}
```
-->

### Properties

- [[Vector magnitude]]
- Vector direction
- Vector orientation

### [[Vector & Matrix Operations|Operations]]

### Vector types

- Basis vector
- [[Zero vector]]
- [[Inverse vector]]
- [[Unit vector]]

### Notes

- A vector is a special case of a [[Matrix]]
- It's possible to represent a vector as a sum of scaled basis-vectors
- One can think of a vector as a sum of two unit vectors, $\hat{i} = \BM 1 \\ 0 \EM$ и $\hat{j} = \BM 0 \\ 1 \EM$. Then vector $\BM 3 \\ 2 \EM$ could be represented as a sum of two unit vectors: $3\BM 1 \\ 0 \EM + 2 \BM 0 \\ 1 \EM$
<!-- !mark[](info) Векторное поле -->

<!--
https://people.cs.clemson.edu/~dhouse/courses/405/notes/vectors.pdf
-->
