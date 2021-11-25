---
tags: [linal, wip]
---

# Projection

## Orthographic

## Perspective

### Параллельное

orthographic, parallel

$$
\begin{aligned}
	P_x &=
	S(\begin{bmatrix}0 & 1\end{bmatrix}, 0) =
	\begin{bmatrix}
	1 & 0 \\ 0 & 0
	\end{bmatrix}

	\\

	P_y &=
	S(\begin{bmatrix}1 & 0\end{bmatrix}, 0) =
	\begin{bmatrix}
	0 & 0 \\ 0 & 1
	\end{bmatrix}
\end{aligned}
$$

$$
\begin{aligned}
	P_{xy} &=
	S(\begin{bmatrix}0 & 0 & 1\end{bmatrix}, 0) =
	\begin{bmatrix}
	1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0
	\end{bmatrix}

	\\

	P_{xz} &=
	S(\begin{bmatrix}0 & 1 & 0\end{bmatrix}, 0) =
	\begin{bmatrix}
	1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1
	\end{bmatrix}

	\\

	P_{yz} &=
	S(\begin{bmatrix}1 & 0 & 0\end{bmatrix}, 0) =
	\begin{bmatrix}
	0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1
	\end{bmatrix}
\end{aligned}
$$

### Последовательное

---

$$
\text{proj}_{\w} \v =
\frac{1}{\|\w\|^2}
\BM
	w_x^2 & w_x w_y & w_x w_z \\
	w_x w_y & w_y^2 & w_y w_z \\
	w_x w_z & w_y w_z & w_z^2 \\
\EM
\BM
	v_x \\ v_y \\ v_z
\EM
$$

<!--
https://people.cs.clemson.edu/~dhouse/courses/405/notes/projections.pdf
-->
