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



---

- Mathematics for 3D Game Programming and Computer Graphics, 3rd Edition. Eric Lengyel


<!--
https://www.wikiwand.com/en/Hidden-surface_determination
https://www.google.com/search?q=Geometry+pipeline&newwindow=1&sxsrf=ALeKk02jsk77KcoFBmyJytv_cBCH8oQarA:1615661586709&source=lnms&tbm=isch&biw=1503&bih=1212#imgrc=az5EavcgfE2lOM
https://www.khronos.org/opengl/wiki/Rendering_Pipeline_Overview
https://developer.nvidia.com/gpugems/gpugems/part-v-performance-and-practicalities/chapter-28-graphics-pipeline-performance
https://stanford.edu/class/ee267/lectures/lecture2.pdf
https://www.seas.upenn.edu/~cis565/LECTURES/Lecture2%20New.pdf
-->