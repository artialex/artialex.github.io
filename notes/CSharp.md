---
tags: [csharp, wip]
---

# CSharp

Basics

- `Main()` method [can be omitted](https://docs.microsoft.com/en-us/dotnet/csharp/fundamentals/program-structure/) since C# 9
- [[Java Collections]]
- Namespaces
- Enums (CSharp)
- Methods (CSharp)
  - [[Extension methods]]

Advanced

- Structs
- Concurrency
- Delegates
- LINQ

Expert

---

- [[dotNET]]

- Strings (CSharp)
- Common Intermediate Language
- Common Language Runtime
- Exception handling
- Types (CSharp)
- Garbage collector

- Interfaces (CSharp)

- [[Java Collections]]
- [[DateTime API]]
- Memory model
- Enums
- Passing by reference and value
- [[Java Collections]]
- Boxing and Unboxing
- IO
- Optionals
- Pattern matching
- Collections (CSharp)

**Method group** instead of _method reference_

**String interpolation**

**Extension methods**

**Delegates**



# Interfaces

- Interfaces can define `static` method which should be implemented
- Interfaces can define `default` method implementation



# Methods

Methods in C# are _final_ by default


# Types

- `var` let the compiler infer the type
- Types can be derived from _base types_
- **Common Type System** defines how types are used in the CLR
- All the built-in numeric types are _structs_
- Nullable types (CSharp)
- Type conversion (CSharp)


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