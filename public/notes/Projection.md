---
tags: [linal, wip]
---

# Projection

## Orthographic

## Perspective

### Parallel

orthographic, parallel

$$
\begin{aligned}
	P_x &=
	S(\begin{bmatrix}\dn & 1\end{bmatrix}, \dn) =
	\begin{bmatrix}
	1 & \dn \\ \dn & \dn
	\end{bmatrix}

	\\

	P_y &=
	S(\begin{bmatrix}1 & \dn\end{bmatrix}, \dn) =
	\begin{bmatrix}
	\dn & \dn \\ \dn & 1
	\end{bmatrix}
\end{aligned}
$$

$$
\begin{aligned}
	P_{xy} &=
		S(\begin{bmatrix}\dn & \dn & 1\end{bmatrix}, \dn) =
			\begin{bmatrix}
				1   & \dn & \dn \\
				\dn & 1   & \dn \\
				\dn & \dn & \dn
			\end{bmatrix}

	\\

	P_{xz} &=
		S(\begin{bmatrix}\dn & 1 & \dn\end{bmatrix}, \dn) =
			\begin{bmatrix}
				1   & \dn & \dn \\
				\dn & \dn & \dn \\
				\dn & \dn & 1
			\end{bmatrix}

	\\

	P_{yz} &=
		S(\begin{bmatrix}1 & \dn & \dn\end{bmatrix}, \dn) =
			\begin{bmatrix}
				\dn & \dn & \dn \\
				\dn & 1 & \dn \\
				\dn & \dn & 1
			\end{bmatrix}
\end{aligned}
$$

### Sequential

---

$$
\text{proj}_{\vw} \vv =
	\frac{1}{\|\vw\|^2}
	\BM
		\w_x^2 & \w_x \w_y & \w_x \w_z \\
		\w_x \w_y & \w_y^2 & \w_y \w_z \\
		\w_x \w_z & \w_y \w_z & \w_z^2 \\
	\EM
	\BM
		\v_x \\ \v_y \\ \v_z
	\EM
$$

<!--
https://people.cs.clemson.edu/~dhouse/courses/405/notes/projections.pdf
-->
