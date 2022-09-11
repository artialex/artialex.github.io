---
tags: [os]
---

# Operating system

Operating systems can be viewed _from above_ or _from below_

## "From above" perspective

OS serves as a _mediator between hardware and software_ by providing
the latter a more convenient abstract set of resources and instructions

OS runs in a _kernel space_ mode in which it has full access to the hardware.
Software applications that run in it operate in _user space_ mode, in which they have a limited number of instructions

For example, GUI systems run at the _very low level of the user space_ allowing them to execute other programs

Instead of direct operating with the disk storage interface _driver programs_ are used.
But high-level applications use even higher level of abstraction for working with disk storage which is [[Files|files]]

## "From below" perspective

OS controls every part of the computer, providing all connected parts with resources,
allowing multiple programs to run simultaneously, monitoring the behavior of them

Controlling the resources includes _multiplexing_ in two ways: _in time_ and _in space_

_In time_ is about the division of CPU time between various programs

_In space_ is about the division of memory

## Spaces

_Kernel space_ allows to control File IO, Inputs IO, processor priority

_User space_

## Basic OS elements

- [[Processes]] and [[Threads]]
- Address spaces
- [[Signals]]
- [[System Calls]]
- Sockets

[[Shell]] is not the part of the OS, it's a separate very handy application

<!--
Взаимодествие процессов

* Мьютексы и семафоры

Планирование

Память

Файловые системы

Ввод и вывод информации

Взаимоблокировка

Виртуализация

Системы
* Unix

Вопросы

* Как работает операционная система?


# Мьютексы

Фьютексы, семафоры, сравнение с обменом, атомарные инструкции
-->

Unix
