---
tags: [js]
---

# Event loop

- JavaScript runtime
  - Heap
  - Call Stack
- Event Loop
- Callback Queue
- Web APis

Call stack

Blocking means that some function in a call stack is making heavy computations

Event loop has two meaningful containers: the [[Call stack|call stack]] and the [[Task queue|task queue]]

JavaScript performs its tasks sequentially _inside a one process_ that is called _event loop_. Event loop has a _call stack_ controlling executing of functions. The call stack is syncronous

JavaScript is _single-threaded_. It comprised of heap and call stack
Javascript is a single threaded language. This means it has one call stack and one memory heap.

There are different types of asynchronous functions

- Callbacks
- Promises
- Async functions

Task Sources such as DOM Manipulation. user interaction. networking, history traversal and so on, add tasks to the Task Queue

Task Queue is emptied by _event loop_ which runs continuously inside the JavaScript process. During each loop iteration, it takes one task out of the queue (if the queue is empty it waits until it isn't) and executes it. That task is finished when the call stack is empty and there is a return. Control goes back to the event loop, which then retrieves the next task from the queue and executes it. And so on.

Event loop gives priority to the _call stack_

<!--
## Blocking the main thread

Long-running code can block the user interface. Avoid it by:

- Delivering operation result *asynchronously*
- Performing long computations in separate process using *Web Workers*
- Taking *breaks* during long computations
-->

### Notes

- Every browser tab is a separate process with its own event loop instance
- Each Web Worker runs their own event loop instances

<!--

Each task is always finished before the next task is executed

Delivering asynchronous results
Events
Callbacks
Promises

-->

<!--

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


-->

<!--
Модель памяти?

# Однопоточность JavaScript


> So how do we get asynchronous code with Javascript then?
> Well, we can thank the Javascript engine (V8, Spidermonkey, JavaScriptCore, etc...) for that, which has Web API that handle these tasks in the background. The call stack recognizes functions of the Web API and hands them off to be handled by the browser.[^1]

То есть нужно благодарить Web API, все асинхронные задачи выполняет браузер (или внутренние библиотеки Node.js), а не JavaScript
-->

---

- [If Javascript Is Single Threaded, How Is It Asynchronous?](https://dev.to/steelvoltage/if-javascript-is-single-threaded-how-is-it-asynchronous-56gd#:~:text=Javascript%20is%20a%20single%20threaded,before%20moving%20onto%20the%20next.&text=Once%20those%20tasks%20are%20finished,the%20stack%20as%20a%20callback.)

<!--
* Как устроен Event Loop?
** Rewatch Sorax Spotlight
** Read Streams Handbook
https://blog.insiderattack.net/event-loop-and-the-big-picture-nodejs-event-loop-part-1-1cb67a182810
-->

---

- 📽 [What the heck is the event loop anyway](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- 📽 [In The Loop](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
