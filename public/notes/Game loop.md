---
tags: [architecture, wip, patterns]
---

# Game loop

- Batch mode (Response is finished, work is done)
- Interactive mode (Response is finished, computer waiting for a request)
- Game loop (Response is finished, Program not waiting for a request). Loop is always working 


Conceptually game loop looks like this:

```js
while (true) {
	processInput()
	update()
	render()
}
```

## Phases

- Input: 

- `processInput` processes user events and actions
- `update` processes game simulation (AI, physics, etc)
	- Place for an *Update method* pattern
- `render` renders the visuals

One iteration of game loop is _tick_ or _frame_
