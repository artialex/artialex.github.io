---
tags: [fe, js]
---

# Basic JavaScript

Reminder to myself: *No point of copy-pasting documentation*

JavaScript has *8 data types*:

- 6 primitive types: `number` (which is double float) and `bigint`, `string` and `symbol`, `boolean`, `undefined`
- 1 non-primitive type: `object`, with special `function` sub-type and multiple inherited sub-types: `Array`, `RegExp`, `Date`, `Error`, etc...
- 1 special primitive type: `null`

## Functions

When invoking a function, JS interpretator creates a new _execution context_ with a _call object_. Local variables are the members of a _call object_

## Arrays

Arrays are basically _Objects_. Differences are:

- they have `length` property
- they inherit from `Array.prototype`, which has a [lot of methods](https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype#methods)
- they are created using arrray literal (`[]`)
- they have differences when used in JSON

There are confusing methods `slice()` and `splice()`: `slice()` is immutable, `splice()` is mutable

Arrays can be used as Stacks (when using `push` and `pop` methods) & Queues (when using `push` and `shift` methods)

|        | start              | end             |
| ------ | ------------------ | --------------- |
| add    | `unshift()` (slow) | `push()` (fast) |
| remove | `shift()` (slow)   | `pop()` (fast)  |



