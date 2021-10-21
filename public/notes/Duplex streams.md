---
tags: [done]
---

# Duplex streams

::aliases[Transform streams, Through streams]

Duplex streams are _both readable and writable_

They could be called _transform streams_ or _"through streams"_ if their output in some way calculated from the input

## Examples

- `net.connect()`
- `net.createServer()`
- `http.request()`
- `http.createServer()`
- `zlib`
- `crypto`
- TCP sockets
- RPC exchanges
