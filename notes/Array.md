---
tags: [ds, wip]
---

# Array

Array is a sequence of indexed elements. They have fixed size



$$
\BM
1 & 2 & 3 & 4 & 5
\EM
$$

$$
\def\arraystretch{1.5}
\begin{array}{c:c:c}
  \text{Read/Write} & 
  \text{Search} & 
  \text{Insert/Delete} \\
  \hline
  \color{green} O(1) & 
  \color{red} O(n) & 
  \color{red} O(n) \\
\end{array}
$$

<!--
- !mark[](check) Indexing takes $O(1)$ time
- !mark[](cross) Search takes $O(n)$ time because it requres checking every element
- !mark[](cross) Insertion/deletion takes $O(n)$ time because following elements are shifted one position left/right
- !mark[](cross) Requires a _contiguous chunk of memory_ to allocate
- !mark[](cross) Has fixed size
- !mark[](q) Поскольку элементы расположены в смежных областях памяти, перебор значений выполняется быстрее, чем в других структурах из-за меньшего количества неудачных обращений к кэш-памяти
- !mark[](info) A string can be implemented as an array of chars 
- !mark[](info) Используются как сами по себе, так и в рамках других структур данных, таких как список, стек, куча, очередь с приоритетом, хэш-таблица

-->
<!--
## Resizeable Array

aliases:
:::
Array List
:::

## Sorted Array


## Multi dimensional array

-->