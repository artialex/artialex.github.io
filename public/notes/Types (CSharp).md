# Types

- `var` let the compiler infer the type
- Types can be derived from _base types_
- **Common Type System** defines how types are used in the CLR
- All the built-in numeric types are _structs_
- [[Nullable types (CSharp)|Nullable types]] 
- [[Type conversion (CSharp)|Type conversion]]


All C# types are either *Reference types* or *Value types*. 

- They have different compile rules and different runtime behavior

```
...Reference Types                  ...Value Types 
                  System.Enum -------- All Enums...
                    |
System.Object --- System.ValueType --- System.Int32
  |			                   |------ System.Boolean
  |		                       |------ All structs...
All classes...								    
```			  

- Value Types
	- `struct`
		- Numeric 
			- byte, int, char, float, double
		- Boolean 
	- `enum`
- Reference types
	- `class`
	- `record`
	- `delegate`, 
	- `interface` 
	- arrays
- Value types are `sealed` meaning that they are not deriveable
- Literals receive a type from the compiler

## Generic types


## Anonymous types

```csharp
var obj = new {
	Name = "John",
	Age = 30
}
```