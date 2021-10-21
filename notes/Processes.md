---
tags: [done]
---

# Processes

There are multiple definitions of what process is:

- _Program that is being executed_ (active entity) in contrast to source code (passive entity)
- _Abstraction defining the program_ that is being executed
- _Container with information_ that is necessary for the program that is being executed
- Operating system's _unit of work_

Each process has a PID (process ID)

## Structure of the process in memory

- Function _Stack_
- _Heap_ is the memory for dynamic allocation
- _Constants & Globals_ are variables
- _Code_

### Process states

- `New`: Process creation is started, resources are not yet allocated
- `Ready`: Ready to run, OS hasn't run it yet
- `Running`: Process is running
- `Waiting/Blocked`:
- `Terminated`: Process is finished, may require OS cleanup

Only one process can be in a `Running` state on a single CPU core. There could be many processes in a `Ready` and `Waiting/Blocked` states

A process can have many [[Threads|threads]]

<!--

### PCB (Process Control Block)

Контейнер с информацией о процессе

* _State_ содержит состояние
* _Counter_ сожержит адрес следующей инструкции
* _Registers_
* _Schedule info_, например, приоритет
* _Memory info_
* _Accounting info_
* _I/O info_ список открытых файлов
* _Thread info_

### Адресное пространство

С каждым процессом связано //адресное пространство//, которое содержит выполняемую программу, данные этой программы и ее //стек//. Кроме того с процессом связаны набор ресурсов, список открытых файлов, необработанные предупреждения и вся другая информация необходимая для работы. Каждому адресу памяти процесса соответствует "реальный" адрес физической памяти (RAM). В памяти есть таблица соответствий для процессов. Почти каждое обращение к памяти процесса использует эту таблицу. При переключении процессов переключаются и таблицы адресов для них. Когда процесс пытается получить доступ к невозможной ячейке памяти возникает `SEGFAULT`



Процесс может иметь множество [[Потоки!потоков]]

Создание, завершение --- системные вызовы

* Процесс способен создавать _дочерние процессы_ (child process), которые
могут создавать свои дочерние процессы. Связь между ними называется
_межпроцессорным взаимодействием_ (interprocessing)
* У каждого процесса есть PID (Process Identification Number)
* Процесс имеет _идентификатор пользователя_ (UID), который его запустил
* Процессы бывают фоновыми, такие процессы еще называются _демонами_

{{Рабочий каталог}}

{{Каналы}}

-->
