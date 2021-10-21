---
tags: [done]
---

# Cross product

::aliases[Vector product]

Cross product is a vector that is perpendicular to both of the multiplied vectors. Vector's length equals to the area of the parallelogram obtained by duplicating and shifting the two multiplied vectors

<!--
Cross product only makes sense in 3D space, using
vectors representing 3D points. It returns a vector
that is perpendicular to both of the multiplied vectors
-->

$$
	Vector \times Vector \to Vector
$$

$$
	\BA
		\v \times \w & =
		\BM
			v_y w_z - w_y v_z \\
			v_z w_x - w_z v_x \\
			v_x w_y - w_x v_y \\
		\EM
		\\[1em]
		\v \times \w & =
		\BM
			\det \BM v_2 & v_3 \\ w_2 & w_3	\EM \\[1em]
			\det \BM v_3 & v_1 \\ w_3 & w_1	\EM \\[1em]
			\det \BM v_1 & v_2 \\ w_1 & w_2	\EM
		\EM
	\EA
$$

$$
\v \times \w =
[\v]_{\times} \w =
\BM 0 & -v_3 & v_2 \\ v_3 & 0 & -v_1 \\ -v_2 & v_1 & 0 \EM
\BM w_1 \\ w_2 \\ w_3 \EM
$$

### Properties

$$
\BA
    \v \times \w & = -(\w \times \v) \\
    \|\v\times\w\| & = \|\v\|\|\w\|\sin\theta \\
    \v \times \w & = -\w \times \v \\
    \v \times (\w + \u) & = \v \times \w + \v \times \u \\[0.5em]
    (\v \times \w) \times \u & \neq \v\times(\w\times\u)
\EA
$$

### Notes

- If $\hat{x}$, $\hat{y}$ and $\hat{z}$ are [[Unit vector|unit-vectors]] on the axes $x$, $y$ and $z$, then:
  $$
  \begin{array}{rl}
      \BA
          \hat{x} \times \hat{y} &= \hat{z} \\
          \hat{y} \times \hat{z} &= \hat{x} \\
          \hat{z} \times \hat{x} &= \hat{y}
      \EA
      &
      \BA
          \hat{y} \times \hat{x} = -\hat{z} \\
          \hat{z} \times \hat{y} = -\hat{x} \\
          \hat{x} \times \hat{z} = -\hat{y}
      \EA
  \end{array}
  $$
- The resulting vector is perpendicular to the original ones
- Cross product is a method for calculating a surface normal given two tangent vectors
- $\v \times \w$ gives a straight vector and $\w \times \v$ gives a reverse vector
- Используется для получения нормали плоскости, которая задается векторами
- _Аналогия._ Первый вектор - направление дула танка, второй - направление на место, куда надо выстрелить. Итоговый вектор показывает ось вращения башни танка
