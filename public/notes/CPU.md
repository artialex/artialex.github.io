---
tags: [done]
---

# CPU

Every Central Processor Unit (CPU) has a predefined set of commands which it can execute and which is limited by its architecture. This means that programs written for x86 processors will not work on x64 processors

CPU has its own _memory registries_. They are used to keep intermediate calculations, for example: _command counter_, _stack pointer_, _program status word&nbsp;(PSW)_.

<!--
32-bit processors allow keeping up to 32x32bit of memory, 64-bit processors -- up to 64x64 bit. Both can't exceed 1 kb
-->

<!--
Процессор имеет собственные *регистры* памяти для хранения промежуточных результатов,
например, *счетчик команд*, *указатель стека*, *слово состояния программы*.
32-разрядные процессоры позволяют хранить до 32х32 бит, 64-разрядные --- до 64х64 бит.
И то, и другое не превышает 1kb
-->

Every CPU has a set of instructions in assembly language, for example: `JMP, MOV, ADD, XOR, PUSH, INC`

CPU has two modes: _kernel mode_ and _user mode_

- [[Processes]]
- [[Threads]]

<!--
- [[Multi-threading]]
- [[Multi-core]]
| ||
|-- |--|
|0.5 ns | L1 cache reference|
|5 ns | Branch mispredict|

-->
