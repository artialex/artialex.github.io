# Java OOP Elements
## Classes

Constructors, Abstract classes, Static classes, Inner classes

Inner classes always have a reference to the outer class

`static` blocks

```java
class {
	static {
		...
	}
}
```

Anonymous classes

```java
let example = new Example() {
	@Override
	void someMethod() {
		...
	}
}
```

## Enums

Enums are special classes with extra features

```java
enum Weekday {
	MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

// Iteration
for (var weekday : Weekday.values()) {
	...
}

// Get name
System.out.println(Weekday.MONDAY.name());
```

## Interfaces

Interfaces declare a two-directional contract: *Implementation* requirements and *Consumer* requirements. Classical example of an interface is a *plug* & *socket*

Interfaces can have `static` methods

```java
interface MyInterface {
	void static check() {
	}
}
```

Interfaces can have `default` methods. Similar to the functionality of an abstract class. These methods can not override Object methods

```java
interface MyInterface {
	void default check() {
	}
}
```

There are also *functional interfaces*

Differences between abstract classes and interfaces are:

- Interface is a *contract*, abstract class is a *subset of common properties*
- Abstract class is *something between* interfaces and classes
- Class can extend only *one* abstract class, but can implement *many* interfaces
- Abstract class *can have a state* (which is not recommended)
- Abstract class *should be used only for extending*


#TODO: Programming to interfaces

