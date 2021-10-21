# Array

<!--
## as ADT

- !mark[](q) Массив из одного элемента также называют вектором
- !mark[](q) Массив из двух элементов также называют матрицей

## as Data Structure
-->

A sequence of indexed elements

viz:
:::
graph {
	splines = line
bgcolor = transparent
node [shape = plain fontname = "Arial"]

mem [ fontsize="10" label = <

<table border="0" cellborder="1" cellspacing="0">
	<tr>
		<td border="0" colspan="20" align="left">
			<font face="Fantasque Sans Mono" point-size="12">Память</font>
		</td>
	</tr>
	<tr>
		<td width="16" height="16" bgcolor="lavender"></td>
		<td width="16" height="16" bgcolor="lavender"></td>
		<td width="16" height="16" bgcolor="lavender"></td>
		<td width="16" height="16" bgcolor="lavender"></td>
		<td width="16" height="16" bgcolor="lavender"></td>
		<td width="16" height="16" bgcolor="lavender"></td>
		<td port="left" width="16" bgcolor="lightgray"></td>
		<td width="16" height="16" bgcolor="lightgray"></td>
		<td width="16" height="16" bgcolor="lightgray"></td>
		<td width="16" height="16" bgcolor="lightgray"></td>
		<td width="16" height="16" bgcolor="lightgray"></td>
		<td width="16" height="16" bgcolor="lightgray"></td>
		<td width="16" height="16" bgcolor="lightgray"></td>
		<td port="right" width="16" height="16" bgcolor="lightgray"></td>
		<td width="16" height="16" bgcolor="lavender"></td>
		<td width="16" height="16" bgcolor="lavender"></td>
		<td width="16" height="16" bgcolor="lavender"></td>
		<td width="16" height="16" bgcolor="lavender"></td>
		<td width="16" height="16" bgcolor="lavender"></td>
		<td width="16" height="16" bgcolor="lavender"></td>
	</tr>
</table>>]

arr[ label = <
<table border="0" cellborder="1" cellspacing="0">
<tr>
<td port="first" width="24" bgcolor="lightgray">0</td>
<td width="24" height="24" bgcolor="lightgray">1</td>
<td width="24" height="24" bgcolor="lightgray">2</td>
<td width="24" height="24" bgcolor="lightgray">3</td>
<td width="24" height="24" bgcolor="lightgray">4</td>
<td width="24" height="24" bgcolor="lightgray">5</td>
<td width="24" height="24" bgcolor="lightgray">6</td>
<td port="last" width="24" height="24" bgcolor="lightgray">7</td>
</tr>
<tr>
<td bgcolor="white">6</td>
<td bgcolor="white">12</td>
<td bgcolor="white">8</td>
<td bgcolor="white">5</td>
<td bgcolor="white">9</td>
<td bgcolor="white">6</td>
<td bgcolor="white">1</td>
<td bgcolor="white">4</td>
</tr>
</table>>]

{
	edge [ style = dashed ]
	mem:left:nw -- arr:first:nw 
	mem:right:ne -- arr:last:ne
}
}
:::

$$
\def\arraystretch{1.5}
\begin{array}{c:c:c}
  \text{Indexing} & 
  \text{Search} & 
  \text{Insertion/Deletion} \\
  \hline
  \color{green} O(1) & 
  \color{red} O(n) & 
  \color{red} O(n) \\
\end{array}
$$

- !mark[](check) Indexing takes $O(1)$ time
- !mark[](cross) Search takes $O(n)$ time because it requres checking every element
- !mark[](cross) Insertion/deletion takes $O(n)$ time because following elements are shifted one position left/right
- !mark[](cross) Requires a _contiguous chunk of memory_ to allocate
- !mark[](cross) Has fixed size
- !mark[](q) Поскольку элементы расположены в смежных областях памяти, перебор значений выполняется быстрее, чем в других структурах из-за меньшего количества неудачных обращений к кэш-памяти
- !mark[](info) A string can be implemented as an array of chars 
- !mark[](info) Используются как сами по себе, так и в рамках других структур данных, таких как список, стек, куча, очередь с приоритетом, хэш-таблица


## Resizeable Array

aliases:
:::
Array List
:::

## Sorted Array


## Multi dimensional array

