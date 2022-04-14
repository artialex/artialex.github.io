---
tags: [cg]
---

# Rasterization

_Rasterization_ is the process of filling in the horizontal spans of pixels belonging to a primitive

$$
\BA
	& \text{Rasterization} \subset \text{Rendering} \\
	& \text{Rasterization} : VectorObject \to PixelArray
\EA
$$

Rasterization _fragment_ is the information about one pixel containing the depth, interpolated vertex colors, interpolated texture coordinates and location of the pixel

<!--

Растеризация --- это подобие реальной отрисовки (аппроксимация), а трассировка лучей --- это более сложный и более реально выглядящий алгоритм (канонический)

-->
