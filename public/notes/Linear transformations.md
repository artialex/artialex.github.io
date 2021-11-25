---
tags: [linal]
---

# Linear transformations

Linear transformations are represented through square [[Matrix|matrices]]. Knowing how the transforms work with base vectors is enough to understand how they will work with any other vectors

Common transformation formula:

$$
	\w = L \v + \vec{t}
$$

$$
	\BM w_1 \\ w_2 \\ w_3 \EM
	=
	\BM
		i_1 & j_1 & k_1 \\
		i_2 & j_2 & k_2 \\
		i_3 & j_3 & k_3
	\EM
	\BM v_1 \\ v_2 \\ v_3 \EM
	+
	\BM t_1 \\ t_2 \\ t_3 \EM
$$

$$
\BA
	w_1 (v_1, v_2, v_3) & = i_1 v_1 + j_1 v_2 + k_1 v_3 + t_1 \\
	w_2 (v_1, v_2, v_3) & = i_2 v_1 + j_2 v_2 + k_2 v_3 + t_2 \\
	w_3 (v_1, v_2, v_3) & = i_3 v_1 + j_3 v_2 + k_3 v_3 + t_3
\EA
$$

## Basic transformations

3x3 transformations

- [[Scaling]]
- [[Reflection]]
- [[Rotation]]
- [[Shear]]
- [[Projection]]

4x4 transformations

- Translation

$$
F =
\BM
\begin{array}{ccc:c}
	l_{11} & l_{12} & l_{13} & t_1 \\
	l_{21} & l_{22} & l_{23} & t_2 \\
	l_{31} & l_{32} & l_{33} & t_3 \\
	\hdashline
	0 & 0 & 0 & 1
\end{array}
\EM
$$

## Complex transformations

Complex transformations could be achieved through the composition of basic transformations

$$
\w = SR\v
$$

---

- resulting vector $\vec{w}$
- initial vector $\vec{v}$
- linear transformation matrix $L$
- scaling matrix $S$
- rotation matrix $R$
- origin translation vector $\vec{t}$
- axis transformation vectors $\vec{i}$, $\vec{j}$ and $\vec{k}$
- 4&times;4 matrix $F$

### Related

- [[Affine transformations]]
