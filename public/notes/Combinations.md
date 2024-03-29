---
tags: [combinatorics]
---

# Combinations

Combination is a selection of items from a set in which _order is not important_ .

Combination of all items -- $C(n,n)$, does not make mathematical sense because it's always equals&nbsp;1 (one possible way to combine all items in a set) so mostly _combination_ is an informal way to say _k-combination_

## K-combination

_K-combination_ is a selection of $k$ items from a set.
For examples, lottery numbers, salad ingredients

$$
	C(n) = 1 \quad \quad C(n,k) = \frac{n!}{k!(n-k)!}
$$

If $n=5$

::combinatorics{type=combinations n=5 k=4}
::combinatorics{type=combinations n=5 k=3}
::combinatorics{type=combinations n=5 k=2}

If $n=4$

::combinatorics{type=combinations n=4 k=3}
::combinatorics{type=combinations n=4 k=2}

If $n=3$

::combinatorics{type=combinations n=3 k=2}

## K-multicombination

_K-multicombination_ or _k-combination with repetitions_ allows repetition of items.
For example coins in a pocket

$$
	\bar{C}(n,k) = \frac{(n+k-1)!}{k!(n-1)!}
$$

If $n=5$

::combinatorics{type=multicombinations n=5 k=4}
::combinatorics{type=multicombinations n=5 k=3}
::combinatorics{type=multicombinations n=5 k=2}

If $n=4$

::combinatorics{type=multicombinations n=4 k=3}
::combinatorics{type=multicombinations n=4 k=2}

If $n=3$

::combinatorics{type=multicombinations n=3 k=2}

## Notes

Five card hands from a standard card deck:

$$
	C(52, 5) = \frac{52!}{5!(52-5)!} = \frac{52 \times 51 \times 50 \times 49 \times 48}{5 \times 4 \times 3 \times 2 \times 1} = 2,598,960
$$
