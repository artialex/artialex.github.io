---
tags: [done]
---

# Combinations

Combination is a selection of items from a set in which _order is not important_ .

Combination of all items -- $C(n,n)$, does not make mathematical sense because it's always equals 1 (one possible way to combine all items in a set) so mostly _combination_ is an informal way to say _k-combination_

## K-combination

_K-combination_ is a selection of $k$ items from a set

$$
	C(n) = 1 \quad \quad C(n,k) = \frac{n!}{k!(n-k)!}
$$

### $n=5$

::combinatorics[combinations, 5, 4]
::combinatorics[combinations, 5, 3]
::combinatorics[combinations, 5, 2]

### $n=4$

::combinatorics[combinations, 4, 3]
::combinatorics[combinations, 4, 2]

### $n=3$

::combinatorics[combinations, 3, 2]

## K-multicombination

_K-multicombination_ or _k-combination with repetitions_ allows repetition of items

$$
	\bar{C}(n,k) = \frac{(n+k-1)!}{k!(n-1)!}
$$

### $n=5$

::combinatorics[multicombinations, 5, 4]
::combinatorics[multicombinations, 5, 3]
::combinatorics[multicombinations, 5, 2]

### $n=4$

::combinatorics[multicombinations, 4, 3]
::combinatorics[multicombinations, 4, 2]

### $n=3$

::combinatorics[multicombinations, 3, 2]

### Notes

Five card hands from a standard card deck:

$$
C(52, 5) = \frac{52!}{5!(52-5)!} = \frac{52 \times 51 \times 50 \times 49 \times 48}{5 \times 4 \times 3 \times 2 \times 1} = 2,598,960
$$

Examples of k-combination

- Lottery numbers
- Salad ingredients

Examples of k-multicombination

- Coins in a pocket
