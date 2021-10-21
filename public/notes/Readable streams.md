---
tags: [done]
---

# Readable streams

Readable streams _produce data_ for writeable, transform and duplex streams

Data pushed to the stream is _buffered_ (stored waiting for a transfer) by default but this behavior could be altered

Readable streams have two main modes: _paused_ (pull) and _flowing_ (push). They start in _paused_ mode. When in _paused_ mode the data could be read by using `read()` method. When in _flowing_ mode the data can be lost if there are no consumers listening to stream. Adding a `data` event handler switches the stream to _flowing_ mode and removing it switches the stream back to `paused` mode. Switching manually is possible with `pause()` and `resume()` methods

$$
Paused_{Manual} \xrightleftharpoons[pause]{resume} Flowing_{EventEmitter}
$$

Using `pipe()` handles those modes automatically

## Events

`data`, `end`, `error`, `close`, `readable`

## Operations

`pipe/unpipe()`, `read/unshift/resume()`, `pause()`

## Examples

- `process.stdin`
- HTTP responses (client)
- HTTP requests (server)
- fs read streams
- child process `stdout` and `stderr`
