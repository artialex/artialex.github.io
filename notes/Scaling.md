---
tags: [done]
---

# Scaling

<!--
- stretching if `i > 1`
- shrinking if `0 > i > 1`
-->

$$
	\w = S \v
$$

## 2D Scaling

Scaling along one axis

$$
\BA
	S(a_x) =
		\BM a_x & 0 \\ 0 & 1 \EM
		\BM v_1 \\ v_2 \EM
	=
		\BM a v_1 \\ v_2 \EM
\EA
$$

Uniform scaling -- same scale factor for each axis

$$
	S(a) =
		\BM a_x & 0 \\ 0 & a_y \EM
		\BM v_1 \\ v_2 \EM
	=
		\BM a_x v_1 \\ a_y v_2 \EM
$$

Nonuniform scaling -- different scale factor for each axis

$$
	S(a_x, b_y) =
		\BM a_x & 0 \\ 0 & b_y \EM
		\BM v_1 \\ v_2 \EM
	=
		\BM a_x v_1 \\ b_y v_2 \EM
$$

## 3D Scaling

Scaling along one axis

$$
	S(a_x) =
		\BM a_x & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \EM
		\BM v_1 \\ v_2 \\ v_3 \EM
	=
		\BM a v_1 \\ v_2 \\ v_3 \EM
$$

Uniform scaling -- same scale factor for each axis

$$
	S(a) =
		\BM a_x & 0 & 0 \\ 0 & a_y & 0 \\ 0 & 0 & a_z \EM
		\BM v_1 \\ v_2 \\ v_3 \EM
	=
		\BM a_x v_1 \\ a_y v_2 \\ a_z v_3 \EM
$$

Nonuniform scaling -- different scale factor for each axis

$$
	S(a_x, b_y, c_z) =
		\BM a_x & 0 & 0 \\ 0 & b_y & 0 \\ 0 & 0 & c_z \EM
		\BM v_1 \\ v_2 \\ v_3 \EM
	=
		\BM a_x v_1 \\ b_y v_2 \\ c_z v_3 \EM
$$

Scaling along three arbitrary axes defined by vectors $\vec{i}$, $\vec{j}$ and $\vec{k}$

$$
	S(a_i, b_j, c_k) =
		\BM
			i_x & j_x & k_x \\
			i_y & j_y & k_y \\
			i_z & j_z & k_z
		\EM
		\BM a_i & 0 & 0 \\ 0 & b_j & 0 \\ 0 & 0 & c_k \EM
		\BM
			i_x & j_x & k_x \\
			i_y & j_y & k_y \\
			i_z & j_z & k_z
		\EM^{-1}
		\BM v_1 \\ v_2 \\ v_3 \EM
$$

<!--

### Визуализация

<iframe
  width="400"
  height="400"
  frameBorder="no"
  src="https://www.desmos.com/calculator/9ubd3gq2s2?embed"
/>

### Примеры

$$
\begin{bmatrix}
3 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 1 \\
\end{bmatrix}
\begin{bmatrix}
2 \\ 4 \\ 3
\end{bmatrix}
=
\begin{bmatrix}
6 \\ 8 \\ 3
\end{bmatrix}
$$

-->
