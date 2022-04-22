---
tags: [cg]
---

# Rendering Pipeline
 
$$
(Models, \ View, \ Light) \xrightarrow{Rendering} Image
$$

- **Models** are *geometrical objects, coordinates, vertices*
- **Light** is *lighting, texturing, shading & shaders*
- **View** is *viewports, cameras & spaces*
- **Image** is a resulting *2D array of pixel information*


## Application

Highight level of the pipeline, most developers work at this level (Unreal, Unity)

- Collision detection
- Animation
- Morphing
- Acceleration
	- Spatial subdivision

## Geometry
- Model & camera transformation
- Lighting
- Projection
- [[Clipping]]
- Window-Viewport transformation



- Geometry pipeline
- Vertex pipeline

## Pipeline

$$
Geometry \to Rasterization
$$


$$
\BA
	\text{Face Culling} &: Geometry \to Geometry \\
	\text{Rasterization} &: Geometry \to \textit{Rasterization fragments}
\EA
$$

## Fragment operations


## [[Spaces]]

```
for each triangle
	for each projected pixel
		project scene to pixels
```
