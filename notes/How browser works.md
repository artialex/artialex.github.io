# How browser works

- Bindings
- Rendering
	- Parsing
	- Layout
	- Painting

- Platform
- JavaScript VM



## Rendering pipeline

### Parsing

- Parses HTML
	- Tokenize & construct tree
	- Parse Tree

Parsing is halted when meeting `script`, `link` or `style` tags. But even in this situation browser will create a new thread an preforaam a speculative look ahead parsing to load images for example

- Parses CSS

### Render tree / Frame tree

Actual representation of what we see on the screen

Multiple trees

- RenderObjects
- RenderStyles
- RenderLayers
- Line boxes

### Layout

### Paint