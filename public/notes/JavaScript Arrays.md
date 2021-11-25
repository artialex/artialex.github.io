---
tags: [js]
---

# JavaScript Arrays

Arrays are _Objects_. Differences are:

- they has `length` property
- they inherit from `Array.prototype`, which has a [lot of methods](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#methods)
- they are created using arrray literal (`[]`)
- they have differences when used in JSON

### Stacks & Queues

|        | start              | end             |
| ------ | ------------------ | --------------- |
| add    | `unshift()` (slow) | `push()` (fast) |
| remove | `shift()` (slow)   | `pop()` (fast)  |

- Array works as a Stack (FIFO) when using `push` and `pop` methods
- Array works as a Queue (FILO) when using `push` and `shift` methods

### Notable Methods

`slice()` is immutable, `splice()` is mutable
