# Spaces

- Object space
  - World space
- Camera space
- Homogenous Clip space
- Window space

### Vertices transformations

1. _Model-view transformation_ allows to transform model vertices directly from _object space_ to _camera space_ without going through _world space_ first
1. _Projection_
1. _Viewport transformation_

- Upright space
- Per-vertex lighting
  - Per-pixel lighting

### Primitives to rasterization fragments pipeline

$$
\BA
	Primitives & \to \text{Face culling} & \to Primitives
	\\
	Primitives & \to \text{Rasterization} & \to Fragments
	\\
	Fragments & \to \text{Fragment shading} & \to Fragments
	\\
	Fragments & \to \text{Fragment operations} & \to Image \ buffer
\EA
$$

- Face culling
- [[Rasterization]]
- Fragment shading (Pixel shading)
- Fragment operations
  - Pixel ownership test
  - Scissor test
  - Alpha test
  - Stencil test
  - Depth test
  - Blending

## Face culling

Face culling removes polygonal graphical primitives that either facing away from the camera (_backfacing_) or those that are facing toward the camera

## Fragment shading

Fragment shading specifies how fthe fragment data is used to determine the final color and final depth of each pixel during rasterization. It might simply be a product of vertex color and a value from a texture map, or it can be the result of a complex lighting calculation

## Fragment operations

### Pixel ownership test

Determines whether a fragment lies in the region of the viewport that is currently visible on the display

### Scissor test

Determines wheteher a fragment lies in the _scissor rectangle_

### Alpha test

Determines whether a fragment is transparent or not

### Stencil test

Determines whether a fragment passes the corresponding stencil buffer value

### Depth test

Determines whether a fragment passes the corresponding depth buffer value

### Blending

Calculates a new color by combining the fragment's final color and the color already stored in the image buffer at the fragment's clocation'
