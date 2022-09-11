---
tags: [csharp]
---

# Extension methods

Cool C# feature

```csharp
static class String {
	public static string Rotate(this string s, int num) =>
    	s[^num..] + s[..^num];

    public static string RotateLeft(this string s, int num) =>
        s[num..] + s[..num];
}

var s = "12345";

Console.WriteLine(s.Rotate(1)); // => '51234'
Console.WriteLine(s.Rotate(2)); // => '45123'
Console.WriteLine(s.RotateLeft(1)); // => '23451'
Console.WriteLine(s.RotateLeft(2)); // => '34512'
```

Java does not have extension methods. The same functionality is achieved using `Utils` classes with static methods

```java
class StringUtils {
	static String rotate(String str, int num) {
		return ...
	}
}
...
import static rotate;
```
