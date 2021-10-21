---
tags: [done]
---

# 2D Rotation

Rotation matrix

$$
\BA
	R(\theta) & =
	\BM
		\cos \theta & -\sin \theta \\
		\sin \theta & \cos \theta
	\EM
	\\
	R(90 \degree) & =
	\BM \color{lightgray}0 & -1 \\ 1 & \color{lightgray}0	\EM
\EA
$$

Examples

$$
R (90 \degree) \BM v_1 \\ v_2 \EM
=
\BM -v_2 \\ v_1 \EM
$$

Rotation formula

$$
	\BM w_1 \\ w_2 \EM =
	\BM v_1 \\ v_2 \EM \cos \theta
	+
	\BM -v_2 \\ v_1 \EM \sin \theta
$$

$$
\BA
	w_1 & = v_1 \cos \theta - v_2 \sin \theta \\
	w_2 & = v_2 \cos \theta + v_1 \sin \theta
\EA
$$

visual:
:::
Rotation2D
:::

Rotation about an arbitrary axis $i$ through an angle $\theta$

$$
	R_i(\theta) =
	\BM
		\cos \theta + (1 - \cos \theta) i^2_1 &
		(1 - \cos \theta) i_1 i_2 - i_3 \sin \theta
	\EM
$$
