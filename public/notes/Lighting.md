---
tags: [cg]
---

# Lighting

Light in software differs from the light of the real world. It's not much about physics, waves and particles and more about _how light appears on an object_

<!--
```plantuml
scale 1.2
hide empty members
left to right direction

class Ambient
class Diffuse
class Specular
class PhongReflection
class LambertianReflection

Ambient <-- PhongReflection
Diffuse <-- PhongReflection
Specular <-- PhongReflection
```
-->

Lighting contains of different components: Ambient, Diffuse and Specular

## Lambertian lighting

$$
I_r = C \times I_s \times \vec{n} \times \vec{l} \times \cos{\theta}
$$

- $C$ - Color
- $I_s$ - Intensity of the light source
- $\vec{n}$ - Normal vector
- $\vec{l}$ - Light vector
- $\theta$ - Angle between Normal vector and Light vector

## Phong lighting

$$
k_s = R \times V \times \cos^n\theta
$$

- $R$ - Direction the light reflects off the surface
- $V$ - Direction you are viewing the object
- $n$ - Smoothiness of the highlight
- $\theta$ - Angle between two directions

---

- $k_a$ - Ambient reflection
- $k_d$ - Diffuse reflection
- $k_s$ - Specular reflection
- $\alpha$ - Shininess
- $\hat{l}_s$ - [[Direction vector]] from the point on the surface to the light source ($s$)
	- $\hat{r}_s$ - [[Direction vector]] of reflected light 
- $\hat{n}$ - [[Unit vector|Normal vector]] at the point of the surface
- $\hat{v}$ - [[Direction vector]] pointing at the viewer (camera)



<!--
- Lights
	- [[Lights & Shadows]]
	- [[Color]]

- [[Bidirectional reflectance distribution function]]

-->