---
tags: [fe, wip, auth]
---

# Authentication & Authorization

Server <- Client : /login (username, password)
Server -> Client : Set-Cookie (auth-id)

Server <- Client : /private-route (args) (cookie: auth-id)
Server -> Client : Data