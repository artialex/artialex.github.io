- Modern approach for creating instances
- Useful for hiding constructor implementation
- Useful for reusing instances

Example

```java
class Vector {
	static Vector of(double x, double x, double x) {
		if (x == 0 && y == 0 && z == 0) {
			return ZeroVector.INSTANCE;
		}
		return new Vector(x, y, z);
	}
	private Vector(...) {
		...
	}
	...
}
```