# OpenGL

### High-level pseudocode

```
initialize
	get graphics context

for each frame
	manage UI
	set viewport
	set light source directions
	for each triangle
		for i = 0 to 2
			send vertex data
```

- GLSL

### Vertex data

- coordinates (3 floats)
- color (3 floats)
- normal information? (3 floats)
- transparency? (1 float)
- other (texture information, shininess)



OpenGL is a [[state machine]]. Each command changes the state

---

- http://www.opengl-tutorial.org/
- https://learnopengl.com/
 
 
 
OpenGL has 10 types of primitives

1. Point
1. Line
1. Line Strip
1. Line Loop
1. Triangle
1. Triangle Strip
1. Triangle Fan
1. Quad 
1. Quad Strip
1. Polygon 

VRAM contains
- *Front image buffer*. Exact pixel data that is visible in the viewport, may be subregion or the entire display
- *Back image buffer* is the location to which GPU actually renders a scene. Not visible. Once an image has been completely rendered *buffers swap* .*Buffer swap* is usually syncronized with the refresh frequency to aviod *tearing*
- *Depth buffer* or *Z-buffer* stores how far away the pixel of *image buffer* lies in the image. It is used to perform hidden surface elimination by allowing a pixel to be drawn if its depth is less than depth of the pixel already in image buffer.
- *Stencil buffer* contains an integer mask for each pixel in the image and used for enabling or isabling drawing on a per-pixel basis
- *Texture maps*
	- *Bump map* contains vectors that represent varying slopes in different locations on an object's surface
