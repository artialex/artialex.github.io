# Linked List

Связный список -- это структура данных, состоящая из набора узлов, каждый из которых содержит одну или две ссылки на предыдущий и/или следующий узел списка

- !mark[](info) Указатель на связный список -- это указатель на первый его элемент, или `HEAD`
- !mark[](check) Динамическая длина
- !mark[](check) Вставка и удаление занимают $O(1)$ времени
- !mark[](cross) Чтение и сохранение занимает $O(n)$ времени


Используется для реализации других структур данных
- Стек
- Очередь
- Двойная очередь

## Single-linked list

### Properties
- Length
- Element type
- Is sorted?
- Возможность прроизвольного доступа

viz:
:::
digraph {
	splines = false
	bgcolor = transparent
	node [ shape = plain fontname = "Arial" ]
	edge [ arrowsize = 0.5]		
	mem  [ fontsize = 10 label = <
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
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td port="middle" width="16" bgcolor="lightgray"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td port="right" width="16" height="16" bgcolor="lightgray"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
		</tr>
	</table>>]
	ll1 [ label = <
		<table border="0" cellborder="1" cellspacing="0" cellpadding="0" align="text">
			<tr><td port="next" align="center" balign="center" width="24" height="16" bgcolor="lightgray">
			<font align="center" balign="center" point-size="9">next</font></td></tr>
			<tr><td port="data" align="text" width="24" height="24" bgcolor="white">7</td></tr>
		</table>
	>]
	ll2 [ label = <
		<table border="0" cellborder="1" cellspacing="0" cellpadding="0" align="text">
			<tr><td port="next" align="center" balign="center" width="24" height="16" bgcolor="lightgray">
			<font align="center" balign="center" point-size="9">next</font></td></tr>
				<tr><td port="data" align="text" width="24" height="24" bgcolor="white">1</td></tr>

		</table>
	>]
	ll3 [ label = <
		<table border="0" cellborder="1" cellspacing="0" cellpadding="0" align="text">
			<tr><td port="next" align="center" balign="center" width="24" height="16" bgcolor="lightgray">
			<font align="center" balign="center" point-size="9">next</font></td></tr>
			<tr><td port="data" align="text" width="24" height="24" bgcolor="white">2</td></tr>
		</table>
	>]
	null [ label = <
		<table border="0" cellborder="0" cellspacing="0" cellpadding="0" align="text">
			<tr><td port="next" align="center" balign="center" width="24" height="16">
			<font align="center" balign="center" point-size="12">null</font></td></tr>
				<tr><td port="data" align="text" width="24" height="24"></td></tr>

		</table>
	>]
	{
		edge [ dir = none style = dashed ]
		mem:left:nw   -> ll1:next:nw
		mem:left:ne   -> ll1:next:ne
		mem:middle:nw -> ll2:next:nw
		mem:middle:ne -> ll2:next:ne
		mem:right:nw  -> ll3:next:nw
		mem:right:ne  -> ll3:next:ne
	}
	{
		rank = same 
		ll1:next:e -> ll2:next:w
		ll2:next:e -> ll3:next:w		
		ll3:next:e -> null:next:w
	}
}
:::

## Double-linked list

viz: dot
:::
digraph {
	bgcolor = transparent
	splines = false
	node [ shape = plain fontname = "Arial" ]
	edge [ arrowsize = 0.5]		
	mem  [ fontsize = 10 label = <
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
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td port="middle" width="16" bgcolor="lightgray"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td port="right" width="16" height="16" bgcolor="lightgray"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
			<td width="16" height="16" bgcolor="lavender"></td>
		</tr>
	</table>>]
	inv [ label = <
		<table border="0" cellborder="" cellspacing="0" cellpadding="0" align="text">
			<tr><td port="prev" align="center" balign="center" width="24" height="16" >
			<font align="center" balign="center" point-size="12">null</font></td></tr>
			<tr><td port="next" align="center" balign="center" width="24" height="16" >
			</td></tr>
				<tr><td port="data" align="text" width="24" height="24"></td></tr>

		</table>
	>]
	ll1 [ label = <
		<table border="0" cellborder="1" cellspacing="0" cellpadding="0" align="text">
			<tr><td port="prev" align="center" balign="center" width="24" height="16" bgcolor="lightgray">
			<font align="center" balign="center" point-size="9">prev</font></td></tr>
			<tr><td port="next" align="center" balign="center" width="24" height="16" bgcolor="lightgray">
			<font align="center" balign="center" point-size="9">next</font></td></tr>
	<tr><td port="data" align="text" width="24" height="24" bgcolor="white">5</td></tr>
		</table>
	>]
	ll2 [ label = <
		<table border="0" cellborder="1" cellspacing="0" cellpadding="0" align="text">
			<tr><td port="prev" align="center" balign="center" width="24" height="16" bgcolor="lightgray">
			<font align="center" balign="center" point-size="9">prev</font></td></tr>
			<tr><td port="next" align="center" balign="center" width="24" height="16" bgcolor="lightgray">
			<font align="center" balign="center" point-size="9">next</font></td></tr>
	<tr><td port="data" align="text" width="24" height="24" bgcolor="white">12</td></tr>
		</table>
	>]
	ll3 [ label = <
		<table border="0" cellborder="1" cellspacing="0" cellpadding="0" align="text">
			<tr><td port="prev" align="center" balign="center" width="24" height="16" bgcolor="lightgray">
			<font align="center" balign="center" point-size="9">prev</font></td></tr>
			<tr><td port="next" align="center" balign="center" width="24" height="16" bgcolor="lightgray">
			<font align="center" balign="center" point-size="9">next</font></td></tr>
				<tr><td port="data" align="text" width="24" height="24" bgcolor="white">4</td></tr>

		</table>
	>]
	inv2 [ label = <
		<table border="0" cellborder="0" cellspacing="0" cellpadding="0" align="text">
			<tr><td port="prev" align="center" balign="center" width="24" height="16"></td></tr>
			<tr><td port="next" align="center" balign="center" width="24" height="16">
			<font align="center" balign="center" point-size="12">null</font></td></tr>
				<tr><td port="data" align="text" width="24" height="24"></td></tr>

		</table>
	>]
	{
		edge [ dir = none style = dashed]
		mem:left:nw   -> ll1:prev:nw
		mem:left:ne   -> ll1:prev:ne
		mem:middle:nw -> ll2:prev:nw
		mem:middle:ne -> ll2:prev:ne
		mem:right:nw  -> ll3:prev:nw
		mem:right:ne  -> ll3:prev:ne
	}
	{
		rank = same 
		inv:prev:e -> ll1:prev:w [dir = back ]
		ll1:next:e -> ll2:next:w
		ll2:prev:w -> ll1:prev:e
		ll2:next:e -> ll3:next:w		
		ll3:prev:w -> ll2:prev:e
		ll3:next:e -> inv2:next
	}
}

:::


```java
interface LinkedNode {
	int data;
	LinkedNode next;
}

interface LinkedList {
	LinkedNode first;
}

```

kekos

```java
interface DoublyLinkedNode {
	int data;
	LinkedNode prev;
	LinkedNode next;
}

interface DoublyLinkedList {
	DoublyLinkedNode first;
	DoublyLinkedNode last;
}
```

- Быстрое удаление -- удаление узла
- Быстрая вставка -- добавление узла

### Заметки

- Применяется для реализации [[Стек|стеков]] и [[Queue|очередей]]
- Применяется для реализации списков смежности в графах
- Циклический связанный список
	- удобен для реализации очереди
	- удобен для реализации переключения между какими-либо циклическими операциями, например переключением между выполняемыми программами
