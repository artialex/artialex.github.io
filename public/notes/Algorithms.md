---
tags: [algo, index]
---

## Expert

- [[Breadth-first search]]
- [[Depth-first search]]

- [[Backtracking search]]

# Эффективность алгоритмов

## Временная сложность

Интерес представляет только сложноть алгоритмов в _худшем_ случае

### Константное время

```python
def calc(numbers):
	return numbers[0]
```

$$
\color{tomato} O(1)
$$

### Логарифмическое время

```python
def calc(numbers):
	return calc()
```

$$
O(\lg n) \cdot O(1) = \color{tomato} O(\lg n)
$$

### Линейное время

```python
def calc(numbers):
	for num in number:
		# do smth...
	for num in number:
		# do smth...
```

$$
O(n) + O(n) = O(2n) \approx \color{tomato} O(n)
$$

### Квадратичное время

```python
def calc(numbers):
	for num in number:
		# do smth...
		for num in number:
			# do smth...
```

$$
O(n) \cdot O(n) = \color{tomato} O(n^2)
$$

```python
def calc(numbers1, numbers2):
	for num in numbers1:
		# do smth...
		for num2 in numbers2:
			# do smth...
```

$$
O(n) \cdot O(m) = \color{tomato} O(nm)
$$

### Экспоненциальное время

$$
O(2^n)
$$

## Факториальное время

$$
O(n!)
$$

Сортировка вставкой: $c_1n^2 = c_1n \cdot n$

Сортировка слиянием: $c_2n\lg n = c_2n \cdot \lg n$

## Сложность по памяти

# Сортировка

Многие алгоритмы используют сортировку в качестве промежуточного шага

Вход: $\langle a_1, a_2, \dots, a_n \rangle$

Выход:$\langle a'_1, a'_2, \dots, a'_n \rangle$, где $a'_1 \leq a'_2 \leq \dots \leq a'_n$

- [[Insertion sort]]
- [[Быстрая сортировка]]
