---
tags: [linal, done]
---

# Scaling

Common scaling formula:

<!--
- stretching if `i > 1`
- shrinking if `0 > i > 1`
-->

$$
	\vw = S \vv
$$

2D scaling along one axis

$$
\BA
	S(\a_x) =
		\BM \a_x & \dn \\ \dn & 1 \EM
		\BM \v_1 \\ \v_2 \EM
	=
		\BM \a \v_1 \\ \v_2 \EM
\EA

$$
$$

\BA
	S(\a_y) =
		\BM 1 & \dn \\ \dn & \a_y \EM
		\BM \v_1 \\ \v_2 \EM
	=
		\BM \v_1 \\ \a \v_2 \EM
\EA

$$

*Uniform scaling* -- same scale factor for each axis

$$
	S(\a) =
		\BM \a_x & \dn \\ \dn & \a_y \EM
		\BM \v_1 \\ \v_2 \EM
	=
		\BM \a_x \v_1 \\ \a_y \v_2 \EM
$$

*Nonuniform scaling* -- different scale factor for each axis

$$
	S(\a_x, \b_y) =
		\BM \a_x & \dn \\ \dn & \b_y \EM
		\BM \v_1 \\ \v_2 \EM
	=
		\BM \a_x \v_1 \\ \b_y \v_2 \EM
$$


3D scaling along one axis

$$
	S(\a_x) =
		\BM \a_x & \dn & \dn \\ \dn & 1 & \dn \\ \dn & \dn & 1 \EM
		\BM \v_1 \\ \v_2 \\ \v_3 \EM
	=
		\BM \a \v_1 \\ \v_2 \\ \v_3 \EM
$$

$$
	S(\a_y) =
		\BM 1 & \dn & \dn \\ \dn & \a_y & \dn \\ \dn & \dn & 1 \EM
		\BM \v_1 \\ \v_2 \\ \v_3 \EM
	=
		\BM \v_1 \\ \a \v_2 \\ \v_3 \EM
$$

$$
	S(\a_z) =
		\BM 1 & \dn & \dn \\ \dn & 1 & \dn \\ \dn & \dn & \a_z \EM
		\BM \v_1 \\ \v_2 \\ \v_3 \EM
	=
		\BM \v_1 \\ \v_2 \\ \a \v_3 \EM
$$

_Uniform scaling_ -- same scale factor for each axis

$$
	S(\a) =
		\BM \a_x & \dn & \dn \\ \dn & \a_y & \dn \\ \dn & \dn & \a_z \EM
		\BM \v_1 \\ \v_2 \\ \v_3 \EM
	=
		\BM \a_x \v_1 \\ \a_y \v_2 \\ \a_z \v_3 \EM
$$

_Nonuniform scaling_ -- different scale factor for each axis

$$
	S(\a_x, \b_y, \c_z) =
		\BM \a_x & \dn & \dn \\ \dn & \b_y & \dn \\ \dn & \dn & \c_z \EM
		\BM \v_1 \\ \v_2 \\ \v_3 \EM
	=
		\BM \a_x \v_1 \\ \b_y \v_2 \\ \c_z \v_3 \EM
$$

Scaling along three arbitrary axes defined by vectors $\vi$, $\vj$ and $\vk$

$$
	S(\a_i, \b_j, \c_k) =
		\BM
			\i_x & \j_x & \k_x \\
			\i_y & \j_y & \k_y \\
			\i_z & \j_z & \k_z
		\EM
		\BM
			\a_i & \dn  & \dn \\
			\dn  & \b_j & \dn \\
			\dn  & \dn  & \c_k
		\EM
		\BM
			\i_x & \j_x & \k_x \\
			\i_y & \j_y & \k_y \\
			\i_z & \j_z & \k_z
		\EM^{-1}
		\BM \v_1 \\ \v_2 \\ \v_3 \EM
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
