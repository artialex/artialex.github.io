---
tags: [fe, wip]
---

# Authentication & Authorization

Server <- Client : /login (username, password)
Server -> Client : Set-Cookie (auth-id)

Server <- Client : /private-route (args) (cookie: auth-id)
Server -> Client : Data

What is a [Single Sign-On](https://roadmap.sh/guides/sso)


## Links

- https://gist.github.com/zmts/802dc9c3510d79fd40f9dc38a12bccfc

