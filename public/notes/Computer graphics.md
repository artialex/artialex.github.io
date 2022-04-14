---
tags: [cg, index]
---

# Computer Graphics

## Questions

- How does GPU work?
- What is CG in general
- What is the rendering pipeline?
- How do rendering engines (OpenGL, DirectX) differ?
- What rendering engines are?

## Scene

- [[Modeling]]
- [[Lighting]], Shading
  - Reflections
    - Planar reflection
- Viewport / Camera

## [[Rendering]]

- [[Subdivision]]
  - [[Tessellation]]
- [[Z-buffer]]
- [[Shaders]]
- [[Color]]
- [[Lights & Shadows]]
- [[Post-processing]]

## CG API Platforms

- [[OpenGL]]
- [[WebGL]]
- Vulkan
- Apple Metal
- Microsoft Direct3D (DirectX component)

## OpenGL rendering pipeline

- Vertex processing
- Stencil processing
- Pixel processing
- Shading
  - Deferred Shading

## Common

- [[Spaces]]
  - Views
  - Cameras
- Level of detail

## Textures

- Texel
- Texture mapping
  - Bump-mapping
- UV

## Formats

- [[OBJ File Format]]

## 2D

- Vector graphics
- Raster graphics
- Fractal graphics

## 3D

- Polygonal
- Voxel

---

## [[Linear algebra]]

- [[Linear transformations]]

## [[Physics (CG)|Physics]]

- Collision detection

---

## Books

- Fundamentals of Computer Graphics, 3rd Edition. P. Shirley, S. Marschner
- 3D Math Primer for Graphics and Game Development
- Game Engine Architecture
- Physically Based Rendering
- Real-time Rendering
- [GPU Gems 1/2/3](https://developer.nvidia.com/gpugems/gpugems/contributors)
- [Graphics Programming Black Book](https://www.jagregory.com/abrash-black-book/)
- [The Direct3D Graphics Pipeline](http://user.xmission.com/~legalize/book/index.html)
- [Learning Modern 3D Graphics Programming](https://paroj.github.io/gltut/)
- [Computer Graphics from Scratch](https://gabrielgambetta.com/computer-graphics-from-scratch/)

## Articles

- [[How to start learning computer graphics programming]]
- [Building 3d Render Engine](http://blog.rogach.org/2015/08/how-to-create-your-own-simple-3d-render.html)
- http://fragmentbuffer.com/gpu-performance-for-game-artists/
- [A trip through the Graphics Pipeline 2011](https://fgiesen.wordpress.com/2011/07/09/a-trip-through-the-graphics-pipeline-2011-index/)

## Resources

- [Learn Computer Graphics From Scratch](https://www.scratchapixel.com/index.php?redirect)
- [ShaderX/GPU Pro/GPU Zen Books](https://www.realtimerendering.com/resources/shaderx/)
- [CPSC Computer Graphics course](https://people.cs.clemson.edu/~dhouse/courses/405/)
- [Computer Graphics Learning Materials](https://cglearn.codelight.eu/pub/computer-graphics)
- [Real-Time Rendering Resources](http://www.realtimerendering.com/index.html#gpu)
- [Pixel Shaders](http://pixelshaders.com)
- [Immersive linear algebra](http://immersivemath.com/ila/index.html)
- [Essence of linear algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab) 📺
- [The Graphics Codex](http://graphicscodex.com/)
- [Euclidian space](http://www.euclideanspace.com/threed/index.htm)
- [Coding Math](https://www.youtube.com/watch?v=zm9bqSSiIdo&list=PL7wAPgl1JVvUEb0dIygHzO4698tmcwLk9&index=1)
- [Fun with computer graphics](https://github.com/zheng95z/fun-with-computer-graphics)
- [Awesome CG resources](https://csjourney.com/awesome-computer-graphics-resources/)
- [Graphics](https://bartwronski.com/articles-blog-posts-index/#graphics)
- [Game Developer roadmap](https://github.com/miloyip/game-programmer)
- [Computer Graphics Wiki](https://graphics.fandom.com/wiki/Computer_graphics)

## Blogs

- [Alain Galvan](https://alain.xyz/)
- [Inigo Quilez](https://www.iquilezles.org/index.html)
- [Adrian Courreges](http://www.adriancourreges.com/blog/)
- [Evan Wallace](https://madebyevan.com/)
- [Various RTR blogs](http://svenandersson.se/2014/realtime-rendering-blogs.html)
- :mark[video] [TheCherno](https://www.youtube.com/channel/UCQ-W1KE9EYfdxhL6S4twUNw)
- :mark[video] [Inigo Quilzez](https://www.youtube.com/user/mari1234mari)

---

<!--

### Approximation

- Gaussian distribution
- Quadratic curves
- Quadric surfaces
- Polynomials

### Containment

Containment of point sets by rectangles, boxes, capsules, cylinders, ellipses, ellipsoids, lozenges, spheres

### Curves

### Distance

Between pairs of objects of type point, segment, ray, line, trangle, ellipse ,ellipsoid, quardratic curve, quadric surface

### Geometry

### Graphics

- Scene graph management
	- Tree structures
	- Internal nodes
	- Leaf nodes
	- Point and particle primitives
	- Line primitives
	- Triangle primitives
	- Surface primitives
	- Bounding spheres
- Render state
	- Alpha blending
	- Dithering
	- Fog
	- Lighting
	- Materials
	- Shading
	- Texturing
	- Multitexturing
	- Wireframe
	- Z-buffering
- High-level effects
	- Bump maps
	- Gloss maps
	- Planar shadows
	- Projected textures
- Vertex and pixel shader infrastracture
- Camera and view frustrum
- Animation (key frame, inverse kinematics, skin and bones, morphing, points and particles)
- Level of detail (LOD)
	- Discrete, continuous, billboards
- Sorting (BSP trees, portals)
- Terrain (continuous level of detail)

### Image analysis

- 2D and 3D image analysis and processing
- Level curve extraction from 2D images
- Level surface extraction from 3D images

### Interpolation

- Akima
- Bilinear
- Bicubic
- B-spline
- Piece-wise quadratic
- Spherical
- Thin plate splines
- Trilinear
- Tricubic
- Vector field
- Scattered data interpolation (Delaunay triangulation/tetrahedralization)

### Intersection

- Test queries (does it exist? what is the set?)

### Math

- Points
- Vectors
- Matrices
- Quarternions
- Polynomials
- Fast function evaluation

### Meshes

- Imlementations of vertex/edge/triangle tables

### Physics

### Surfaces

-   Agent
-   ASDF ASF
-   Atmospheric model
-   Barycentric coordinates
-   Basis function
-   Beer's Law
-   [Bernstein polynomial](https://graphics.fandom.com/wiki/Bernstein_polynomial "Bernstein polynomial")
-   Bezier curve
-   Bias
-   Binormal
-   BRDF
-   Bresenham
-   Catmull-Rom spline
-   Caustics
-   Clipping plane
-   Color quantization
-   Color space
-   Compositing
-   Continuity
-   Convex hull
-   Convolution
-   Cornell box
-   DCT
-   Diffuse
-   DirectX
-   Dirichlet tesselation
-   Dithering
-   Euler angles Euler rotation
-   Eurographics
-   Fermat's principle
-   FFT
-   Flux
-   Fovea
-   Frenet frame
-   Fresnel coefficient
-   Gamut
-   Glossy
-   GPU Graphics Processing Unit
-   Helmholtz' reciprocity principle
-   Hidden surface
-   Homogeneous coordinates
-   ICA
-   Illuminant
-   Image filtering
-   Image
-   Immersion
-   Implicit surface
-   Irradiance
-   kd-tree
-   Kerning
-   Kinematics
-   Knot vector
-   Kochanek-Bartlet spline
-   L-system
-   [Lambert](https://graphics.fandom.com/wiki/Lambert "Lambert")
-   Lanczos filter
-   [LERP](https://graphics.fandom.com/wiki/LERP "LERP")
-   Lighting model
-   Line
-   Loop subdivision
-   Lumel
-   Marching cubes
-   Metamer
-   Minkowski distance
-   Modeling
-   Monte Carlo estimation
-   Motion synthesis
-   Multiple buffering Double buffering
-   Normal
-   Normal
-   NPR Non-photorealistic rendering
-   NTSC
-   NURBS
-   [Nyquist frequency](https://graphics.fandom.com/wiki/Nyquist_frequency "Nyquist frequency")
-   Octree
-   Opacity
-   PAL
-   Parametric surface
-   Participating media
-   PCA
-   [Phong shading model](https://graphics.fandom.com/wiki/Phong_shading_model "Phong shading model")
-   Photometry
-   Point spread function
-   Polarization
-   Projection
-   Projective geometry
-   Radiometry
-   Raster display
-   Reflection
-   Refresh rate
-   Rendering equation
-   Rendering pipeline
-   ROAM
-   Shader
-   Shading model
-   Siggraph
-   Simulation
-   Sinc function
-   SLERP
-   Snell's Law
-   Spectrum
-   Specular
-   Spline curve
-   Subdivision
-   Text
-   Translation
-   Vector display
-   Vector space
-   Virtual reality
-   [Voxel](https://graphics.fandom.com/wiki/Voxel "Voxel")

- [[3D Graphics Class Structure]]
- [[Mathematics (CG)]]
- [[Mathematics (CG)|Mathematics]]
- [[Animation]]
- Particle systems
	- [[Partial differential equation]]
- Camera
	- Projection systems
	- Specification
- Post Processing

## Advanced shit

- [[Partial differential equation]], particles
- [[Bidirectional reflectance distribution function]]


https://agraphicsguynotes.com/
https://csjourney.com/awesome-computer-graphics-resources/
-->

_Z-buffer_ or _depth buffer_ contains data about pixel depth
