---
tags: [linal, index]
---

# Linear transformations

Linear transformations are represented through square [[Matrix|matrices]]. Knowing how the transforms work with base vectors is enough to understand how they will work with any other vectors

Common transformation formula:

$$
	\vw = L \vv + \Green{\vec{t}}
$$

$$
	\BM w_1 \\ w_2 \\ w_3 \EM
	=
	\BM
		\i_1 & \j_1 & \k_1 \\
		\i_2 & \j_2 & \k_2 \\
		\i_3 & \j_3 & \k_3
	\EM
	\BM \v_1 \\ \v_2 \\ \v_3 \EM
	+
	\BM \t_1 \\ \t_2 \\ \t_3 \EM
$$

$$
\BA
	\w_1 (\v_1, \v_2, \v_3) & = \i_1 \v_1 + \j_1 \v_2 + \k_1 \v_3 + \t_1 \\
	\w_2 (\v_1, \v_2, \v_3) & = \i_2 \v_1 + \j_2 \v_2 + \k_2 \v_3 + \t_2 \\
	\w_3 (\v_1, \v_2, \v_3) & = \i_3 \v_1 + \j_3 \v_2 + \k_3 \v_3 + \t_3
\EA
$$

- resulting vector $\vw$
- initial vector $\vv$
- linear transformation matrix $L$
- origin translation vector $\vt$
- axis transformation vectors $\vi$, $\vj$ and $\vk$

_Basic linear transformations_ include many 3x3 transformations ([[Scaling]], [[Reflection]], [[Rotation]], [[Shear]], [[Projection]]) and one 4x4 transformation (Translation)

$$
F =
\BM
\begin{array}{ccc:c}
	\l_{11} & \l_{12} & \l_{13} & \t_1 \\
	\l_{21} & \l_{22} & \l_{23} & \t_2 \\
	\l_{31} & \l_{32} & \l_{33} & \t_3 \\
	\hdashline
	\dn & \dn & \dn & 1
\end{array}
\EM
$$

_Complex linear transformations_ can be achieved through the composition of basic transformations, for example:

$$
\w = SR\v
$$

- resulting vector $\vec{w}$
- initial vector $\vec{v}$
- scaling matrix $S$
- rotation matrix $R$

---

## Related

- [[Affine transformations]]
