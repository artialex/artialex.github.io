---
tags: [linal, done]
---

# Vector

**Algebraically** vector is _a one-dimensional list_

$$
\vv = \BM \a_1 \\ \a_2 \\ \vdots \\ \a_n \EM
\quad or \quad
\vv = \BM \a_1 & \a_2 & \ldots & \a_n \EM
$$

**Geometrically** vector is _an arrow_ coming from
the origin of a coordinate space to the point which denoted either as
$x$ and $y$ coordinates or as an angle $\theta$ and a magnitude $\|\vec{v}\|$

Vectors notated as $\vv$, $\vw$

Vector is a special case of a [[Matrix]]

## Properties

Magnitude of a vector can be found using this formula

$$
\|\vv|| =
\sqrt{\v_1^2 + \v_2^2 + \ldots + \v_n^2} =
\sqrt{\sum_{i=1}^{n} \v_i^2}
$$

$$
\text{2D: } \|\vv\| = \sqrt{\v_1^2 + \v_2^2}

\quad
\quad
\quad

\text{3D: } \|\vv\| = \sqrt{\v_1^2 + \v_2^2 + \v_3^2}
$$

#todo Direction and orientation

<!--
Properties

$$
\BA
\|\vv\| & \geq 0 \\
\|\vv\| & = 0 \ \text{if} \ \vv = [0, 0, \ldots, 0] \\
\|\vv\vw\| & = \|\vv\|\|\vw\| \\
\|\vv + \vw\| & \leq \|\vv\| + \|\vw\|
\EA
$$
-->

## Types

_Unit vector_ is a vector with a magnitude of 1.
Sometimes they are also called _normalized_ vectors which is not quite correct.
Used in cases when _only the direction_ is needed

_Normalizing a vector_ is a process of finding a normalized vector for a vector $\vv$:

_Direction vector_ is a unit vector that represents spatial direction

$$
\uv = \frac{\vv}{\|\vv\|}
$$

_Zero vector_ contains only zeroes

$$
\vo = \BM 0 & 0 & \dots & 0 \EM
$$

Each vector $\vv$ has an _inverse vector_ $-\vv$

$$
\vv + (-\vv) = 0
$$

#todo Basis vector

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

<!-- ::vectors{type=vector} -->

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

## Notes

- It's possible to represent a vector as a sum of scaled basis-vectors
- One can think of a vector as a sum of two unit vectors, $\uv = \BM 1 \\ 0 \EM$ и $\uw = \BM 0 \\ 1 \EM$. Then vector $\BM 3 \\ 2 \EM$ can be represented as a sum of two unit vectors: $3\BM 1 \\ 0 \EM + 2 \BM 0 \\ 1 \EM$


- Vector field

## Related

- [[Vector & Matrix Operations|Operations]]


-->
