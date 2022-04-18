---
tags: [combinatorics]
---

# Permutations

A permutation is a [[Combinations|Combination]] in which _order is important_

## K-permutation

K-permutation is a selection of $k$ items from a set. For example, shuffles of card deck

$$
	P(n) = n! \quad \quad P(n, k) = \frac{n!}{(n-k)!}
$$

### $n = 4$

::combinatorics{type=permutations n=4 k=4}
::combinatorics{type=permutations n=4 k=3}
::combinatorics{type=permutations n=4 k=2}

### $n = 3$

::combinatorics{type=permutations n=3 k=3}
::combinatorics{type=permutations n=3 k=2}

## K-multipermutation

_k-multipermutation_ or _k-permutation with repetitions_ allows repetitions. For example, mechanical lock

$$
	\bar{P}(n,k) = n^k
$$

### $n = 4$

::combinatorics{type=multipermutations n=4 k=4}
::combinatorics{type=multipermutations n=4 k=3}
::combinatorics{type=multipermutations n=4 k=2}

### $n = 3$

::combinatorics{type=multipermutations n=3 k=3}
::combinatorics{type=multipermutations n=3 k=2}

## Multiset permutation

$$
	\begin{pmatrix} n \\ k_1, k_2, \cdots, k_m \end{pmatrix} =
	\frac{n!}{k_1! \times k_2! \times \cdots \times k_m!}
$$
