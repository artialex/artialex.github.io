---
tags: [fe, js]
---

# JavaScript asynchronicity

_Functions_ in JavaScript are synchronous

There are different types of asynchronous functions: _callbacks_, _promises_, _generators_ and _async functions_

JavaScript code is always _single-threaded_

Event loop is _single-threaded_

## Promises

_Promises_ are containers for the final result that eventually will be delivered.
They have methods `then()` and `catch()` both of which _return promises_ as well

Promise has following _state transitions_:

$$
\BA
Pending & \xrightarrow{Fulfil} Fulfilled \ (Settled) \\
Pending & \xrightarrow{Reject} Rejected \ (Settled)
\EA
$$

`resolve()` could return a rejected Promise if its parameter is a rejected Promise.

Settled value of a promise is _cached_

_Only_ difference between `then()` and `catch()` is that the latter is triggered by rejections, not fulfilments

_Async functions_, just as promises, start synchronously, settle asynchronously

[[JavaScript Projects Terminology]]

JavaScript is _single-threaded_. It comprised of heap and call stack

Javascript is a single threaded language. This means it has one call stack and one memory heap.

Blocking means that some function in a call stack is making heavy computations

Event loop has two meaningful containers: the *call stack* and the *task queue*

JavaScript performs its tasks sequentially _inside a one process_ that is called _event loop_. Event loop has a _call stack_ controlling executing of functions. The call stack is syncronous

## Event loop

<!--
#todo How does it work?
-->

Event loop has two meaningful containers -- _call stack_ and _task (or message) queue_

Task queue is the place where all user-initiated events like clicks, keyboard events, network requests, `setTimeout` callbacks get into

Task Sources such as DOM Manipulation. user interaction. networking, history traversal and so on, add tasks to the Task Queue

Task Queue is emptied by _event loop_ which runs continuously inside the JavaScript process. During each loop iteration, it takes one task out of the queue (if the queue is empty it waits until it isn't) and executes it. That task is finished when the call stack is empty and there is a return. Control goes back to the event loop, which then retrieves the next task from the queue and executes it. And so on.

Event loop gives priority to the _call stack_

_Each browser tab_ is a separate process with its own event loop instance

_Each Web Worker_ runs their own event loop instances

# JavaScript Asynchronicity

V8, JS Engine, wirtten in C++

Node.js is _multi-threaded_, JavaScript code running inside it is _single-threaded_

JavaScript specification does not define any threading mechanism

JavaScript implementation that is running inside web-browsers is _single-threaded_. It allows some form of multithreading via _Web Workers_

Node.js code is _single-threaded_, but IO operations and other things under the hood can run in a thread pool

V8

Node.js is using V8

## Event loop

JavaScript performs its tasks sequentially _inside a one process_ that is called _event loop_. Event loop has a _call stack_ controlling executing of functions. Call stack is syncronous

JavaScript is _single-threaded_. But JavaScript engines are _multi-threaded_.

It comprised of heap and call stack
Javascript is a single threaded language. This means it has _one call stack_ and _one memory heap_.

There are different types of asynchronous functions

- Callbacks
- Promises
- Async functions

<!--

Each task is always finished before the next task is executed

Delivering asynchronous results
Events
Callbacks
Promises

-->

Task Sources such as DOM Manipulation. user interaction. networking, history traversal and so on, add tasks to the Task Queue

Task Queue is emptied by _event loop_ which runs continuously inside the JavaScript process. During each loop iteration, it takes one task out of the queue (if the queue is empty it waits until it isn't) and executes it. That task is finished when the call stack is empty and there is a return. Control goes back to the event loop, which then retrieves the next task from the queue and executes it. And so on.

### Blocking main thread

Long-running code can block the user interface. It's avoidable by:

- Delivering operation result _asynchronously_
- Performing long computations in separate process using _Web Workers_
- Taking _breaks_ during long computations (with `setTimeout`)

<!--
Модель памяти?

# Однопоточность JavaScript


> So how do we get asynchronous code with Javascript then?
> Well, we can thank the Javascript engine (V8, Spidermonkey, JavaScriptCore, etc...) for that, which has Web API that handle these tasks in the background. The call stack recognizes functions of the Web API and hands them off to be handled by the browser.[^1]

То есть нужно благодарить Web API, все асинхронные задачи выполняет браузер (или внутренние библиотеки Node.js), а не JavaScript
-->

---

- 

<!--
* Как устроен Event Loop?
** Rewatch Sorax Spotlight
** Read Streams Handbook



## Asynchronicity

- [[Event loop]]
- [[Promises]]
- Timers

#### So, now, we have 5 ways of controlling code flow:

1.  **Vanilla**. Lots of callbacks. Poor error handling.
1.  **Promises**. Reduces nesting. Separates success and error callbacks.
1.  **Rx Observables**. Promises with more chaining. Looks more familiar to
    functional programmers.
1.  **Fibers**. Linearizes callbacks. Only works server-side in Node. Meteor and
    others took this approach. This basically allows you to write async code as
    if it were synchronous. I couldn't figure out how they worked until I just
    now when I realized it's actually a C extension.
1.  **ES6 generators & async/await**. Like fibers. Works in Node 0.11 w/ special
    flag. Might work in Firefox. Should be supported by all browsers eventually.
    Supported now through an ES6 transpiler/shim which probably introduces
    significant overhead to make work. Good error handling.
-->

<!--
## Blocking the main thread

Long-running code can block the user interface. Avoid it by:

- Delivering operation result *asynchronously*
- Performing long computations in separate process using *Web Workers*
- Taking *breaks* during long computations

Each task is always finished before the next task is executed

Delivering asynchronous results
Events
Callbacks
Promises

## Как работает Event Loop?

Должно быть простое объяснение, начнем

> Движок браузера выполняет JavaScript в одном потоке. Он не может поставить обработку события на паузу, переключиться на другое событие, а после — возобновить выполнение первого. Все события обрабатываются последовательно и каждое — до победного конца.[^1]

Хорошо, у нас есть только один поток. *А что насчет веб-воркеров?*

> Для вышеописанного потока выделяется область памяти — **стэк**, где хранятся фреймы (аргументы, локальные переменные) вызываемых функций.
> Список событий, подлежащих обработке формируют **очередь событий**. Когда стек освобождается, движок может обрабатывать событие из очереди. Координирование этого процесса и происходит в event loop.

[[Какие события происходят в браузере|Какие события происходят в браузере?]]
Не очень понятно

неблокирующий non-blocking
однопоточный single-threaded



[^1]: [JavaScript event loop в картинках](https://medium.com/@pavelbely/javascript-event-loop-%D0%B2-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0%D1%85-%D1%87%D0%B0%D1%81%D1%82%D1%8C-1-a19e4d99f242#:~:text=%D0%98%D1%82%D0%B0%D0%BA%2C%20event%20loop%2C%20%D0%B8%D0%BB%D0%B8%20%D0%B8%D0%BD%D0%B0%D1%87%D0%B5,%D0%B8%20%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%B5%20%E2%80%94%20%D0%B4%D0%BE%20%D0%BF%D0%BE%D0%B1%D0%B5%D0%B4%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BA%D0%BE%D0%BD%D1%86%D0%B0)


Модель памяти?

# Однопоточность JavaScript

> So how do we get asynchronous code with Javascript then?
> Well, we can thank the Javascript engine (V8, Spidermonkey, JavaScriptCore, etc...) for that, which has Web API that handle these tasks in the background. The call stack recognizes functions of the Web API and hands them off to be handled by the browser.[^1]

То есть нужно благодарить Web API, все асинхронные задачи выполняет браузер (или внутренние библиотеки Node.js), а не JavaScript

* Как устроен Event Loop?
** Rewatch Sorax Spotlight
** Read Streams Handbook

## V8

- Ignition, JS Interpreter
- TurboGan, JS Compiler

---

- JavaScript runtime
    - Heap
    - Call Stack
- Event Loop
- Callback Queue
- Web APis
-->
