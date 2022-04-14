# Extension methods


```csharp
using System;  
  
var s = "abcdefgh";  
  
Console.WriteLine(s.Rotate(1));  
Console.WriteLine(s.Rotate(2));  
Console.WriteLine(s.RotateLeft(1));  
Console.WriteLine(s.RotateLeft(2));  
  
static class String {  
	public static string Rotate(this string s, int num) =>  
    	s[^num..] + s[..^num];  
  
    public static string RotateLeft(this string s, int num) =>  
        s[num..] + s[..num];  
}
```


