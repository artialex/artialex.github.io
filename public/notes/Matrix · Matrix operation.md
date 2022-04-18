---
tags: [linal, done]
small: true
---

# Matrix · Matrix operation

$$
	Matrix \cdot Matrix \to Matrix
$$

Each element of resulting matrix is a [[Dot product|dot product]] of corresponding _row_ and _column_

When multiplying two matrices, $\Green a_{\Green r \times \Green c}$ and $\Blue b_{\Blue r \times \Blue c}$, $\Green c$ and $\Blue r$ should be the same

$$
\A_{\Green r \times c} \B_{r \times \Blue c}  
= 
\C_{\Green r \times \Blue c}
$$
<!--
    c_{ij} &= \sum^b_{k=1} a_{ik}b_{kj}

-->
For square 2D matrices

$$
\A\B =
\BM
    a_{11} b_{11} + a_{12} b_{21} &
    a_{11} b_{12} + a_{12} b_{22} \\
    a_{21} b_{11} + a_{22} b_{21} &
    a_{21} b_{12} + a_{22} b_{22}
\EM
$$

<!--
## Properties

$$
\BA
  (\A\B)\C & = \A(\B\C) \\
  (\A+\B)\C & = \A\C+\B\C \\[0.5em]
  \A\B & \Red{\neq} \B\A \\
  \A I & = I \A \\[0.5em]
  (\x\A)\B & = \x(\A\B)  = \A(\x\B) \\[0.5em]
  (\A\B)^T & = \B^T\A^T \\
  (\A_1\A_1 \dots \A_n)^T & = {\A_n}^T \dots {\A_2}^T{\A_1}^T
\EA
$$
-->

## Examples

$$
\BM -4 & 1 \\ 3 & 2 \\ 5 & 5 \EM
\BM 1 & 3 & 0 \\ 2 & 2 & 5 \EM
 =
\BM -2 & -10 & 5 \\ 7 & 13 & 10 \\ 15 & 25 & 25 \EM
$$

$$
\BM 1 & 3 & 0 \\ 2 & 2 & 5 \EM
\BM -4 & 1 \\ 3 & 2 \\ 5 & 5 \EM
=
undefined
$$

<!--
```latex matrix_multiplication
\documentclass[margin=1pt]{standalone}

\usepackage{tikz}

\begin{document}
\begin{tikzpicture}[every node/.style = {font=\large}]
    \draw (0, 0) grid (3, 3);
    \draw [shift={(0, 0.2)}] (0, 3) grid (3, 5);
    \draw [shift={(-0.2, 0)}] (-2, 0) grid (0, 3);
    \node at (-1.7, 2.5) {$-4$};
    \node at (-0.7, 2.5) {$1$};
    \node at (-1.7, 1.5) {$3$};
    \node at (-0.7, 1.5) {$2$};
    \node at (-1.7, 0.5) {$5$};
    \node at (-0.7, 0.5) {$5$};
    \node at (0.5, 4.7) {$1$};
    \node at (1.5, 4.7) {$3$};
    \node at (2.5, 4.7) {$0$};
    \node at (0.5, 3.7) {$2$};
    \node at (1.5, 3.7) {$2$};
    \node at (2.5, 3.7) {$5$};
	\node at (0.5, 2.5) {$-2$};
	\node at (1.5, 2.5) {$-10$};
	\node at (2.5, 2.5) {$5$};
	\node at (0.5, 1.5) {$7$};
	\node at (1.5, 1.5) {$13$};
	\node at (2.5, 1.5) {$10$};
	\node at (0.5, 0.5) {$15$};
	\node at (1.5, 0.5) {$25$};
	\node at (2.5, 0.5) {$25$};
    \node at (-2.2, 1.5) [left] {$a_{3 \times 2}$};
    \node at (1.5, 5.2) [above] {$b_{2 \times 3}$};
    \node at (3, 1.5) [right] {$K_{3 \times 3}$};
    \node at (-1.2, 4.2) {\huge$\times$};
\end{tikzpicture}
\end{document}
```
-->

## Related

- [[Matrix · Vector operation]]
- [[Linear transformations]]
