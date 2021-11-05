Java

```java
var strings = "Cool Dog Smart Cat Smile Cow".split(" ");  
  
Arrays.stream(strings).parallel().forEach(System.out::println);
```

C#

```csharp
var strings = "Cool Cat Wick Dog Smile Cow".Split(" ");

Parallel.ForEach(
	strings, 
	new ParallelOptions() {MaxDegreeOfParallelism = 4},
	str => 
	{	
		Console.WriteLine(str);
	}
)
```
