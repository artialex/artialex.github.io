---
tags: [js]
---

# Streams (Node)

When creating a stream-based applicaiton or module there are two main tasks: _implementing_ and _consuming_

## Readable streams

Readable streams _produce data_ for writeable, transform and duplex streams

Data pushed to the stream is _buffered_ (stored waiting for a transfer) by default but this behavior can be altered

Readable streams have two main modes: `PAUSED` (pull) and `FLOWING` (push).
They start in `PAUSED` mode.
When in `PAUSED` mode the data can be read by using `read()` method.
When in `FLOWING` mode the _data can be lost_ if there are no consumers listening to stream.

Adding a `data` event handler switches the stream to `FLOWING` mode and removing it switches the stream back to `PAUSED` mode.
Switching manually is possible with `pause()` and `resume()` methods

$$
Paused_{Manual} \xrightleftharpoons[pause]{resume} Flowing_{EventEmitter}
$$

Using `pipe()` _handles modes automatically_

Related to readable streams

- events: `data`, `end`, `error`, `close`, `readable`
- operations: `pipe/unpipe()`, `read/unshift/resume()`, `pause()`
- examples: `process.stdin`, HTTP responses (client), HTTP requests (server), fs read streams, child process `stdout` and `stderr`

## Writable streams

Writable streams can _only consume data_ but not produce

Related to writable streams

- events: `drain`, `finish`, `error`, `close`, `pipe/unpipe`
- operations: `write()`, `end()`, `cork/uncork()`
- examples: `process.stdout`, `process.stderr`, HTTP responses (server), HTTP requests (client), fs write streams, child process `stdin`

## Duplex streams

Duplex streams are _both readable and writable_

They can be called _transform streams_ or _"through streams"_ if their output in some way calculated from the input

Related to duplex streams

- examples: `net.connect()`, `net.createServer()`, `http.request()`, `http.createServer()`, `zlib`, `crypto`, TCP sockets, RPC exchanges

---

- [Stream Handbook](https://github.com/substack/stream-handbook)
- [Node.js Streams: Everything you need to know](https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/)

<!--
- https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/
- https://nodejs.org/en/docs/guides/
- https://nodejs.org/api/stream.html
- https://livebook.manning.com/book/node-js-in-practice/chapter-5/
- https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/
- https://flaviocopes.com/nodejs-streams/
-->
