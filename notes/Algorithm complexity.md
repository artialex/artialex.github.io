---
tags: [algo]
---

# Algorithm complexity

Only a *worst case* scenario complexity makes real sense  

## Time complexity

Constant time: $O(1)$

```python
def calc(numbers):
	return numbers[0]
```

Logarithmic time: $O(\lg n) \cdot O(1) = O(\lg n)$

```python
def calc(numbers):
	return calc()
```

Linear time: $O(n) + O(n) = O(2n) \approx O(n)$

```python
def calc(numbers):
	for num in numbers:
		# do smth...
	for num in numbers:
		# do smth...
```

Quadratic time: $O(n) \cdot O(n) = O(n^2)$

```python
def calc(numbers):
	for num in numbers:
		# do smth
		for num in numbers:
			# do smth
```

or $O(n) \cdot O(m) = O(nm)$

```python
def calc(numbers1, numbers2):
	for num1 in numbers1:
		# do smth
		for num2 in numbers2:
			# do smth
```

Exponential time: $O(2^n)$

Factorial time: $O(n!)$

## Space complexity

- [Big-O Cheat Sheet](https://www.bigocheatsheet.com)
