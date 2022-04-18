---
tags: [linal, done]
---

# Rotation

Common rotation formula:

$$
	\w = R\v
$$

- resulting vector $\w$
- initial vector $\v$
- rotation matrix $R$


<!--
+ [[Quarternion]]
-->

2D rotation matrix

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
R (90 \degree) \BM \v_1 \\ \v_2 \EM
=
\BM -\v_2 \\ \v_1 \EM
$$

Rotation formula

$$
	\BM \w_1 \\ \w_2 \EM =
	\BM \v_1 \\ \v_2 \EM \cos \theta
	+
	\BM -\v_2 \\ \v_1 \EM \sin \theta
$$

$$
\BA
	\w_1 & = \v_1 \cos \theta - \v_2 \sin \theta \\
	\w_2 & = \v_2 \cos \theta + \v_1 \sin \theta
\EA
$$

<!--
visual:
:::
Rotation2D
:::
-->

Rotation about an arbitrary axis $\vi$ through an angle $\theta$

$$
	R_i(\theta) =
	\BM
		\cos \theta + (1 - \cos \theta) \i^2_1 &
		(1 - \cos \theta) \i_1 \i_2 - \i_3 \sin \theta
	\EM
$$

3D Rotation matrices

$$
	R_x (\theta) =
	\BM
		1 & \color{lightgray}0 & \color{lightgray}0 \\
		\color{lightgray}0 & \cos \theta & -\sin \theta \\
		\color{lightgray}0 & \sin \theta & \cos \theta
	\EM
$$

$$
	R_y (\theta) =
	\BM
		\cos \theta & \color{lightgray}0 & \sin \theta \\
		\color{lightgray}0 & 1 & \color{lightgray}0 \\
		-\sin \theta & \color{lightgray}0 & \cos \theta
	\EM
$$

$$
	R_z (\theta) =
	\BM
		\cos \theta & -\sin \theta & \color{lightgray}0 \\
		\sin \theta & \cos \theta & \color{lightgray}0 \\
		\color{lightgray}0 & \color{lightgray}0 & 1
	\EM
$$

<!--
### Визуализация
<iframe
  width="400"
  height="400"
  frameBorder="no"
  src="https://www.desmos.com/calculator/iobg8vjwdo?embed"
/>
-->
