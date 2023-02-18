---
tags: [linal]
aliases: [Inner product, Scalar product]
---

# Dot product

...also known as the _scalar product_, is a linear algebraic
operation that takes two vectors of the same dimension and returns a scalar value.

$$
Vector \cdot Vector \xrightarrow{\text{Dot product}} Scalar
$$

---

Common formula

$$

    \u \cdot \v
    =
    u_1 v_1 + u_2 v_2 + \ldots + u_n v_n
    =
    \sum_{i=1}^{n} u_i v_i


$$

$$

    \u \cdot \v = \|\u\|\|\v\|\cos\theta


$$

For vectors representing 2D points:

$$
\u \cdot \v = u_1 v_1 + u_2 v_2
$$

::dotproduct

Relation with an angle:

$$
    \theta
	= \arccos (\frac{\u \cdot \v}{\|\u\|\|\v\|})
	= \arccos (\hat{\Green u}\cdot\hat{\Blue v})
$$

Can be represented as [[Matrix · Matrix operation]]

$$

    \u \cdot \v =
    \BM u_1 \\ u_2 \\ \vdots \\ u_n \EM
    \cdot
    \BM	v_1 \\ v_2 \\ \vdots \\ v_n \EM
    =
    \BM
    	u_1 & u_2 & \ldots & u_n
    \EM
    \BM
    	v_1 \\ v_2 \\ \vdots \\ v_n
    \EM


$$

## Properties

$$

\BA
\u \cdot \v & = \v \cdot \u \\
\u \cdot (\v + \vec{\Orange w}) & = \u \cdot \v + \u \cdot \vec{\Orange w} \\
\u \cdot \u & = \|\u\|^2 \\
|\u \cdot \v| & \leq \|\u\|\|\v\|
\EA


$$

## Notes

- Dot product can be represented as $\|\text{proj} \ \vec{x}\| \|\vec{x}\|$
- :mark[info] Dot product shows how similar two sequences of numbers representing a vector. It lets meassure their divergence
- :mark[info] If dot product is 0, then vectors are perpendicular
- :mark[info] Unit vector is a vector with the magnitude of 1
- _Analogy_. Solar panels. The energy gain depends on their relative position to the sun
- _Analogy_. Boosting platforms in race games. Approaching them at the angle will give a lesser speed boost than going right behind them
  $$
