---
tags: [linal, done]
---

# Matrix

Matrix is _just a way to store data_

Algebraically matrix is an n-dimensional list

Real numbers are 1×1 matrices

A linear equation system can be represented as [[Matrix · Vector operation|a product of a matrix and a vector]]

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

## Properties

_Determinant_ ($\det$ or $\Delta$) of the matrix is a scalar value.
If both rows of a matrix are identical then determinant is 0

$$
\Delta =
\det \BM
\a_{11} & \b_{12} \\
\c_{21} & \d_{22}
\EM
=
\a_{11} \d_{22} - \b_{12} \c_{21}
$$

<!--
- Если определитель = 0, то такие матрицы называются *вырожденными*, все остальные -- *невырожденными*

Every matrix has a [[Determinant|determinant]], Span, Rank

- Прямая сумма
- Ранг

-->

## Types

_Zero matrix_ contains only _zeroes_

$$
\BA
	O_2 = \BM 0 & 0 \\ 0 & 0 \EM &&
	O_3 = \BM 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \EM
\EA
$$

_Diagonal matrix_ is a square matrix with non-zero values on a _main diagonal_ (rest values are zeroes)

$$
\BA
D_2 = \BM
2   & \dn \\
\dn & -1
\EM
&&
D_3 = \BM
7   & \dn & \dn \\
\dn & -2  & \dn \\
\dn & \dn & 4
\EM
\EA
$$

_Identity matrix_ is a special diagonal matrix with _ones_ on the main diagonal

$$
\BA
I_2 = \BM
1   & \dn \\
\dn & 1
\EM
&&
I_3 = \BM
1   & \dn & \dn \\
\dn & 1   & \dn \\
\dn & \dn & 1
\EM
\EA
$$

<!--
## Properties

$$
\A I = I \A = \A
$$
-->

_Inverse matrix_

$$
\A \A^{-1} = \A^{-1} \A = I
$$

Orthogonal matrix ($M^{-1} = M^T$)

## Operations

_Matrix operations_ include [[Matrix addition|addition]], [[Matrix transposition|transposition]], variuos matrix multiplications ([[Matrix · Scalar operation|Matrix · Scalar]], [[Matrix · Matrix operation|Matrix · Matrix]], [[Matrix · Vector operation|Matrix · Vector]])

<!--* Разложение матриц -- представление матрицы в виде произведения матриц-->
