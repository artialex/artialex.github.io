# Quarternion
Кватернион -- это гиперкомплексное 4D-число. Для практического применения для 3D-вращения необязательно глубоко понимать их четырехмерную природу

$$
\BA
	\Green q & = \BM a_1 \\ a_2 \\ a_3 \\ a_4 \EM
	\\[2em]
	\Green q & = \BM x, \vec{v} \EM
	\\
	\Green q & = a_1 + i a_2 + j a_3 + k a_4
\EA
$$

### Вращение на угол $$\theta$$ вокруг оси $$(a_x, a_y, a_z)$$

$$
	\cos \frac{\theta}{2} + \sin \frac{\theta}{2}(ia_x+ja_y+ka_z)
$$

## Операции

### Сложение

$$
(x, \vec{v}) + (y, \vec{w}) = (x + y, \vec{v} + \vec{w})
$$

### Произведение

$$
(x, \vec{v}) (y, \vec{w}) = (xy - \vec{v} \cdot \vec{w}, x\vec{v} + y\vec{w} + \vec{v} \times \vec{w})
$$

---

- [Visualizing quaternions](https://eater.net/quaternions)