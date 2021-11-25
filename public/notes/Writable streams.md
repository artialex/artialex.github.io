---
tags: [js]
---

# Writable streams

Writable streams can _only consume data_ but not produce

## Events

`drain`, `finish`, `error`, `close`, `pipe/unpipe`

## Operations

`write()`, `end()`, `cork/uncork()`

## Examples

- `process.stdout`, `process.stderr`,
- HTTP responses (server)
- HTTP requests (client)
- fs write streams
- child process `stdin`
