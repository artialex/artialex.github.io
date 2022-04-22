---
tags: [linal]
small: true
---

# Matrix · Vector operation

$$
	Matrix \cdot Vector \to Vector
$$

$$
A x = \BM
	a_{11} & a_{12} & \cdots & a_{1n} \\
	a_{21} & a_{22} & \cdots & a_{2n} \\
	\vdots & \vdots & \ddots & \vdots \\
	a_{1n} & a_{2n} & \cdots & a_{nn}
\EM
\BM x_1 \\ x_2 \\ \vdots \\ x_n \EM
= \BM
	a_{11} x_1 + a_{12} x_2 + \ldots + a_{1n} x_n \\
	a_{21} x_1 + a_{22} x_2 + \ldots + a_{2n} x_n \\
	\vdots \\
	a_{n1} x_1 + a_{n2} x_2 + \ldots + a_{nn} x_n \\
\EM
$$

$$
\text{2D: }
\BM
    a_{11} &a_{12} \\
    a_{21} & a_{22}
\EM
\BM x_1 \\ x_2 \EM
=
\BM
    a_{11}  x_1 + a_{12}  x_2 \\
    a_{21}  x_1 + a_{22}  x_2
\EM
$$

$$
\text{3D: }
\BM
    a_{11} & a_{12} & a_{13} \\
    a_{21} & a_{22} & a_{23} \\
    a_{31} & a_{32} & a_{33}
\EM
\BM x_1 \\ x_2 \\ x_3 \EM
=
\BM
    a_{11} x_1 + a_{12} x_2 + a_{13} x_3 \\
    a_{21} x_1 + a_{22} x_2 + a_{23} x_3 \\
    a_{31} x_1 + a_{32} x_2 + a_{33} x_3
\EM
$$

## Impossible operations

Number of _rows_ does not match with the number of _columns_

$$
    \BA
        \BM x \\ y \EM
        \BM	a & c \\ b & d \EM
        & = (undefined)
        \\
        \BM	a & c \\ b & d \EM
        \BM x & y \EM
        & =	(undefined)
    \EA
$$

## Related

- [[Matrix · Matrix operation]]
