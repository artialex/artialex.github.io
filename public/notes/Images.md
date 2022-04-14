# Images

**Image** is a _2D array of [[Pixel|pixels]]_

$$
	\text{Image(x, y)}:R \to V
$$

## Image types

- Raster images are made out of many pixels
- Vector images are made out of schema representation (SVG)

RGB

**Color channel** is the one of three different color values (red, green, blue, for example)

Low Dynamic Range storage:

- 8 bits per color channel (0-255), or 3 bytes per color (0-255, 0-255, 0-255), most common format
- 16 bits per color channel (0-65536), or 6 bytes per color


Low Dynamic Range / High Dynamic Range

---

Point-Spread function

## Storage

Typically it's a array of values in a format like:

$$
[R1, G1, B1, R2, G2, B2, ...]
$$

- Interleaved storage
	- RGB, RGB, RGB, RGB, RGB
	- Scanline order
	- Swizzled order is used to simplify some algorithms
- Separate channels
	- RRRRR, GGGGG, BBBBB

## LDR Formats

- [[Bitmap]]
- [[Pixmap]]
- [[PPM]] Portable Pixmap Image File
- [[PNG]]
- [[GIF]]
- [[JPEG]]

## HDR Formats

- [[EXR]]

## Gamma 

Gamma ($\gamma$) represents the relative darkness of the color values. Typical $\gamma$ value is 2.2

$$
c_{out} = c_{in}^{\gamma}
$$

Gamma correction

- sRGB: $\gamma \approx 2.2$

## Alpha blending

- Additive
- Multiply
- Screen
- ...

## Buzzworld

- Warping
- Sampling
- Aliasing, Antialiasing
- Resampling
- Filtering
- [[Digital image processing]]

<!--
https://people.cs.clemson.edu/~dhouse/courses/405/notes/antialiasing.pdf
https://people.cs.clemson.edu/~dhouse/courses/405/notes/image-warps.pdf
https://people.cs.clemson.edu/~dhouse/courses/405/notes/pixmaps-rgb.pdf
-->
