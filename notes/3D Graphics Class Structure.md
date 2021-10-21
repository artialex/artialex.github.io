# 3D Graphics Class Structure

Using `three.js` library as an example

## Renderer

Renderer is a main object. It draws a *Scene* according to the *Camera*

## Scene

Scene is a tree structure containing *Meshes*, *Lights*, *Groups*, *3D objects* and *Cameras*

### Camera

Commonly camera object belongs to the *scene*

### Mesh / Object3D / Group

Meshes represent a compound object of a *Geometry* object and a *Material* object

### Light

Light objects

## Geometry

Geometry objects are *vertex data of some geometry*

## Material

Material is an object with the *surface properties*

- Color

### Texture
Texture objects represent *images*: loaded, generated or rendered
