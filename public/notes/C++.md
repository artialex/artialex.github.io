# C++

Hello, world (Yes, let it be here for a while)

```cpp
int main() {
	std::cout << "Hello, world" << std::endl;
	return 0
}
```

Symbols `<<` are overloaded operators

## C++ Types

Numbers

- Integers
	- `char`, `unsigned char`
	- `short`, `unsigned short`
	- `int`, `unsigned int`
	- `long`, `unsigned long`
	- `long long`, `unsigned long long`
- Float / Double
	- `float`
	- `double`

Boolean is `bool`

Strings, C++ string is `string`, C string as `char[]`

`auto` infers the type from a value, `const` makes the value immutable

<!--
* https://github.com/tuvtran/project-based-learning#cc

## How does the C++ program work?

Проект на языке С состоит из файлов кода с расширением `.c` и файлов
заголовков с расширением `.h`

''Препроцессор'' обрабатывает директивы (`#include`, `#define`, ...)

При ''компиляции'' файла `.c` создается файл `.o`, который содержит бинарные инструкции
для целевой машины, которые будут выполняться непосредственно процессором

Когда все `.o`-файлы будут готовы, они передаются ''компоновщику''. Эта программа объединяет все файлы в один бинарный файл. На этом же этапе добавляются библиотечные функции. Как итог --- исполняемая программа `a.out`

---

* Компоновщик
* Загрузчик
* ЦПУ


[[About Makefiles|https://github.com/ElArtista/Bookmarks/blob/28baded3f80941f4c5c848c8dcdae9140666a327/README.md#make]]

* https://makefiletutorial.com/


Сигналы терминала

* `Ctrl+C` посылает сигнал `SIGINT` --- terminate
* `Ctrl+Z` посылает сигнал `SIGTSTP` --- suspend
* `Ctrl+S` и `Ctrl+Q` --- software flow control

!!! Escape sequences

Они всегда начинаются с "\x1b" (Escape) и "[". Используются для разного рода контроля и форматирования в терминале (цвет, перемещение курсора)

https://viewsourcecode.org/snaptoken/kilo/05.aTextEditor.html

https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.169.6771&rep=rep1&type=pdf
-->
