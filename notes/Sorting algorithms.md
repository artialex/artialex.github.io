---
tags: [algo, wip]
---

# Sorting algorithms

Sorting often used as a *intermediate step* in other algorithms


Сортировка вставкой: $c_1n^2 = c_1n \cdot n$

Сортировка слиянием: $c_2n\lg n = c_2n \cdot \lg n$


Вход: $\langle a_1, a_2, \dots, a_n \rangle$

Выход:$\langle a'_1, a'_2, \dots, a'_n \rangle$, где $a'_1 \leq a'_2 \leq \dots \leq a'_n$

<!--
# Insertion sort

Looks like sorting cards in hand

$$
	\text{Insertion Sort}:A \to A'
$$

|Worst|Average|Best|
|--|--|--|
|$O(n^2)$|$O(n^2)$|$O(n)$|

Используется в основном если вход уже отсортирован по большей части (например после вставки в случайное место)


$
f \ \text{InsertionSort}(arr): \newline 
\qquad \textbf{for} \ outer \ \textbf{in} \ arr[1 \ldots last]: \newline
\qquad \qquad \textbf{for} \ inner \ \textbf{in} \ arr[outer \ldots 0]: \newline 
\qquad \qquad \qquad \textbf{if} \ arr[inner - 1] > arr[inner]: \newline
\qquad \qquad \qquad \qquad swap \ them \newline
\qquad \qquad \qquad \textbf{else} \newline
\qquad \qquad \qquad \qquad continue
$

### Пример

$A = \langle5, 2, 4, 6, 1, 3\rangle$

viz: dot
:::
digraph a {
    bgcolor = transparent
	nodesep = .025
	ordering = out
    node [
		shape     = record
        fontname  = Nunito
        fontsize  = 18
		style     = filled
		height    = .5
		width     = 3
		fillcolor = white
    ]
	edge [
		constraint = false
	]
	arr [ label = <<table border="0">
		<tr>
			<td>5</td>
			<td>2</td>
			<td>4</td>
			<td>6</td>
			<td>1</td>
			<td>3</td>
		</tr>
	</table>> ]
	arr:0 [ fillcolor = "#fdf6e3" ]
	/*{
		5 [  ]
		2 [ fillcolor = "#073642" fontcolor = "#fdf6e3" ]
		4
		6
		1		
		3
		5:n -> 2:n [ style = dashed ]
		2:s -> 5:s 
	}*/
}
:::

viz: dot
:::
digraph a {
    bgcolor = transparent
	nodesep = .025
	ordering = out
    node [
		shape    = square
        fontname = Nunito
        fontsize = 16
		style     = filled
		fillcolor = white
    ]
	edge [
		constraint = false
	]
	{
		2 [ fillcolor = "#fdf6e3" ]
		5 [ fillcolor = "#fdf6e3" ]
		4 [ fillcolor = "#073642" fontcolor = "#fdf6e3" ]
		6
		1		
		3
		5:n -> 4:n [ style = dashed ]
		4:s -> 5:s
	}
}
:::

viz: dot
:::
digraph a {
    bgcolor = transparent
	nodesep = .025
	ordering = out
    node [
		shape    = square
        fontname = Nunito
        fontsize = 16
		style     = filled
		fillcolor = white
    ]
	{
		2 
		4 
		5 [ fillcolor = "#fdf6e3" ]
		6 [ fillcolor = "#073642" fontcolor = "#fdf6e3" ]
		1		
		3
	}
	f [style = invis]
	6 -> f [dir = back]
}
:::

viz: dot
:::
digraph a {
    bgcolor = transparent
	nodesep = .025
	ordering = out
    node [
		shape     = square
        fontname  = Nunito
        fontsize  = 16
		style     = filled
		fillcolor = white
    ]
	edge [
		constraint = false
	]
	{
		2 [ fillcolor = "#fdf6e3" ]
		4 [ fillcolor = "#fdf6e3" ]
		5 [ fillcolor = "#fdf6e3" ]
		6 [ fillcolor = "#fdf6e3" ]
		1 [ fillcolor = "#073642" fontcolor = "#fdf6e3" ]		
		3
	}
	1:s -> 2:s
}
:::

-->