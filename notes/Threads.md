---
tags: [done]
---

# Threads

Threads live within a [[Processes|process]] and they are like lightweight processes

They can be _virtual_

- Creating threads is _10-100 times_ faster than creating processes
- Threads within the same process _use the same address space_
- Threads are _used to parallelize work_
- Threads can execute different code and share memory. This could cause a _race condition_.

### Notes

- CPU with 8 cores can run code for 8 different threads simultaneusly
- If a program has keyboard input, reformatting text and allows creating backups then it is logical to put all these functions into different threads to make them not to run sequentially

<!--

---

[[Multi-threading]]
[[Мьютексы]]

Многопоточность

Наименьшая единица обработки, исполнение которой может быть назначено ядром операционной системы

Thread realization can be different in operating systems

The implementation of processes and threads in different operating systems may differ from each other. But mostly threads area located within [[Processes|processes]]

- Coroutines
- Green Threads
- Blocking / Non-blocking

-->
