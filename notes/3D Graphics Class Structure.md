---
tags: [cg]
---

# 3D Graphics Class Structure

Using `three.js` library as an example

`Renderer` is a main object. It draws a `Scene` according to the `Camera`

`Scene` is a tree structure containing `Mesh`'es, `Light`'s, `Group`'s, ` 3DObject`'s and `Camera`'s

Commonly `Camera` object belongs to the `Scene`

`Mesh`'es represent a compound object of a `Geometry` object and a `Material` object

`Light` objects contain sources of light

`Geometry` objects are _vertex data of some geometry_

`Material` is an object with the _surface properties_

`Texture` objects represent _images_: loaded, generated or rendered
