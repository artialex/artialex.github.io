---
tags: [wip]
---

# JavaScript asynchronicity

## Event loop

JavaScript performs its tasks sequentially _inside a one process_ that is called _event loop_. Event loop has a _call stack_ controlling executing of functions. Call stack is syncronous

JavaScript is _single-threaded_. It comprised of heap and call stack
Javascript is a single threaded language. This means it has one call stack and one memory heap.

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

Long-running code can block the user interface. Avoid it by:

- Delivering operation result _asynchronously_
- Performing long computations in separate process using _Web Workers_
- Taking _breaks_ during long computations

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
-->
