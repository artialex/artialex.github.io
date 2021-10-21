---
tags: [done]
---

# Matrix

Matrix is just a way to store data

Algebraic representation of a matrix is _n-dimensional list_

- [[Determinant]]
- Span
- Rank

<!--

- Прямая сумма
- Ранг

-->

## Types

- [[Zero matrix]]
- [[Diagonal matrix]]
  - [[Identity matrix]]
- [[Inverse matrix]]
- Orthogonal matrix: $M^{-1} = M^T$

## Operations

- [[Matrix addition]]
- [[Matrix transposition]]
- Matrix multiplication
  - [[Matrix · Scalar operation]]
  - [[Matrix · Matrix operation]]
  - [[Matrix · Vector operation]]

<!--* Разложение матриц -- представление матрицы в виде произведения матриц-->

## Notes

- Real numbers are 1x1 matrices
- A linear equation system could be represented as [[Matrix · Vector operation|a product of a matrix and a vector]]

$$
\begin{cases}
	3x + 2y - 3z = -13 \\
	4x - 3y + 6z = 7 \\
	x - z = -5
\end{cases}
$$

$$
\begin{bmatrix}
	3 & 2 & -3 \\ 4 & -3 & 6 \\ 1 & 0 & -1
\end{bmatrix}
\begin{bmatrix}
	x \\ y \\ z
\end{bmatrix}
=
\begin{bmatrix}
	-13 \\ 7 \\ -5
\end{bmatrix}
$$

## Related

- [[Vector]]
- [[Linear transformations]]
