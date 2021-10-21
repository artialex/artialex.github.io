# Rendering

Rendering is a process of creating an image from a set of geometrical objects, lighting sources and a viewport (camera). The image represents a pixel array where each pixel contains information about the color at the particular point

$$
Geometry, \ Lightning, \ Camera \xrightarrow{Rendering} Image
$$

There a two types of a rendering:

- Real-time rendering - best speed; interactive graphics, video games
- Pre-rendering - best quality; animation, movies, video effects, photorealism

And there are several methods or techniques of rendering

- [[Rasterization]] <!--and Scanline rendering --> is very fast and is a good option for real-time rendering
- [[Ray tracing]] which looks far more realistic
	- Path tracing
- [[Ray casting]]
- Radiosity (rather a light trasport technique than a rendering)

## Most common renderers

- [[OpenGL]]
- [[WebGL]]

<!--
Shading – how the color and brightness of a surface varies with lighting
Texture-mapping – a method of applying detail to surfaces
Bump-mapping – a method of simulating small-scale bumpiness on surfaces
Fogging/participating medium – how light dims when passing through non-clear atmosphere or air
Shadows – the effect of obstructing light
Soft shadows – varying darkness caused by partially obscured light sources
Reflection – mirror-like or highly glossy reflection
Transparency (optics), transparency (graphic) or opacity – sharp transmission of light through solid objects
Translucency – highly scattered transmission of light through solid objects
Refraction – bending of light associated with transparency
Diffraction – bending, spreading, and interference of light passing by an object or aperture that disrupts the ray
Indirect illumination – surfaces illuminated by light reflected off other surfaces, rather than directly from a light source (also known as global illumination)
Caustics (a form of indirect illumination) – reflection of light off a shiny object, or focusing of light through a transparent object, to produce bright highlights on another object
Depth of field – objects appear blurry or out of focus when too far in front of or behind the object in focus
Motion blur – objects appear blurry due to high-speed motion, or the motion of the camera
Non-photorealistic rendering – rendering of scenes in an artistic style, intended to look like a painting or drawing


- Real-time rendering
- [[Rendering Pipeline]]
	- 3D Pipeline
- Rendering Algorithms

- [[Rasterization]]
- Ray Casting
- [[Ray tracing]]
	- Pathtracing
- [[Rendering]]
	- [[Rendering Pipeline]]
	- [[Rasterization]]
	- [[Ray casting]]
	- [[Ray tracing]]
-->