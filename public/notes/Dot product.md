---
tags: [linal]
---

# Dot product

::aliases[Inner product, Scalar product]

$$
	Vector \cdot Vector \to Scalar
$$

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

For vectors representing 2D points:

$$
	\v \cdot \w = v_1 w_1 + v_2 w_2
$$

For vectors representing 3D points:

$$
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

::vectordotproduct

### Properties

$$
\BA
	\v \cdot \w & = \w \cdot \v \\
	\v \cdot (\w + \vec{\Orange u}) & = \v \cdot \w + \v \cdot \vec{\Orange u} \\[0.5em]
	\v \cdot \v & = \|\v\|^2 \\
	|\v \cdot \w| & \leq \|\v\|\|\w\|
\EA
$$

### Notes

- Dot product can be represented as $\|\text{proj} \ \vec{x}\| \|\vec{x}\|$
- :mark[info] Dot product shows how similar two sequences of numbers representing a vector. It lets meassure their divergence
- :mark[info] If dot product is 0, then vectors are perpendicular
- :mark[info] Unit vector is a vector with the magnitude of 1
- _Analogy_. Solar panels. The energy gain depends on their relative position to the sun
- _Analogy_. Boosting platforms in race games. Approaching them at the angle will give a lesser speed boost than going right behind them
