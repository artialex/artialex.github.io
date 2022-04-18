---
tags: [linal, done]
---

# Vector & Matrix Operations

## Addition

Matrix + Matrix = Matrix

$$
\A + \B =
\BM a_{11} & a_{12} \\ a_{21} & a_{22} \EM
+
\BM b_{11} & b_{12} \\ b_{21} & b_{22} \EM
=
\BM
a_{11} + b_{11} & a_{12} + b_{12} \\
a_{21} + b_{21} & a_{22} + b_{22}
\EM
$$

Vector + Vector = Vector

<!-- ::vectoraddition -->

$$
\vec{\Green v}
+
\vec{\Blue w}
=
\BM v_1 \\ v_2 \EM
+
\BM w_1 \\ w_2 \EM
=
\BM v_1 + w_1 \\ v_2 + w_2 \EM
$$

## Multiplication

Vector · Vector = Scalar or **Dot Product**

$$
\v \cdot \w
=
v_1 w_1 + v_2 w_2 + \ldots + v_n w_n
=
\sum_{i=1}^{n} v_i w_i
$$

$$
\v \cdot \w = \|\v\|\|\w\|\cos\theta
$$

$$
\text{2D: }
\v \cdot \w = v_1 w_1 + v_2 w_2
\quad
\quad
\quad
\text{3D: }
\v \cdot \w = v_1 w_1 + v_2 w_2 + v_3 w_3
$$

Relation with an angle:

$$
\theta = \arccos(\frac{
\v \cdot \w
}{
\|\v\|\|\w\|
}) = \arccos (\hat{\Green v}\cdot\hat{\Blue w})
$$

Can be represented as [[Matrix · Matrix operation]]

$$
\v \cdot \w =
\BM v_1 \\ v_2 \\ \vdots \\ v_n \EM
\cdot
\BM	w_1 \\ w_2 \\ \vdots \\ w_n \EM
=
\BM
v_1 & v_2 & \ldots & v_n
\EM
\BM
w_1 \\ w_2 \\ \vdots \\ w_n
\EM
$$

- [[Cross product|Vector × Vector = Vector (Cross Product)]]
- [[Outer product|Vector ⊗ Vector = Matrix (Outer product)]]
- [[Triple product|Vector · Vector × Vector (Triple Product)]]

* [[Matrix · Scalar operation|Matrix · Scalar = Matrix]]
  - [[Vector · Scalar operation|Vector · Scalar = Vector]]
* [[Matrix · Matrix operation|Matrix · Matrix = Matrix]]
  - [[Matrix · Vector operation|Matrix · Vector = Matrix]]
