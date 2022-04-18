---
tags: [cg]
---

# Images

Image is a _2D array of pixels_. Pixel is a _sample_, a smallest unit of a [[Sampling]] result.

It has a coordinate and a value

$$
	\text{Image(x, y)}:R \to V
$$

Images can be _raster_ (made out of pixels) or _vector_ (made out of schema representation)

<!--
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

https://people.cs.clemson.edu/~dhouse/courses/405/notes/antialiasing.pdf
https://people.cs.clemson.edu/~dhouse/courses/405/notes/image-warps.pdf
https://people.cs.clemson.edu/~dhouse/courses/405/notes/pixmaps-rgb.pdf

-->

## LDR Formats

LDR stands for **L**ow **D**ynamic **R**ange

| Name                 | Description                                                                                                                         |
| :------------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| BMP, BitMap          | Bitmap is the simplest image representation format, where `1` is white and `0` is black                                             |
| PixMap               | PIxmap is like Bitmap but instead of storing a single bit it stores _real numbers_ between `0` and `1`, representing levels of grey |
| PPM, Portable PixMap | Uncompressed, 1/8/16 bits per channel                                                                                               |
| PNG                  | Lossless compression, 8/16 bit per channel or Color table (2 to 256 colors)                                                         |
| GIF                  | Lossless compression, Color table (2 to 256 colors) mostly for animation                                                            |
| JPEG                 | Lossy compression, Equivalent of 8 bits per channel                                                                                 |

## HDR Formats

HDR stands for **H**igh **D**ynamic **R**ange

| Name | Description                                        |
| :--- | :------------------------------------------------- |
| EXR  | Lossy/lossless compression, 16/32 bits per channel |
