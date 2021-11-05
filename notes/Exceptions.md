**Exceptions** can be throwed:

- explicitly using `throw` keyword
- by method or constructor
- by JVM itself

Hierarchy

- `Throwable` is a base class for all exceptions
	- `Exception` is the superclass of all *normal* exceptions
		- `RuntimeException` is the superclass of all *normal* exceptions that are *unchecked* exceptions
- `Error` is the superclass of all *fatal* exceptions, are thrown by JVM

**Custom exceptions** are created by extending `Exception` or `RuntimeException`

**Checked exceptions** are anticipated like: a file failing to open or a failed network connection

**Unchecked exceptions** are not anticipated, like a bug in a program

--- 

- [Functional Exceptions In Java](https://8thlight.com/blog/brian-gerstle/2019/01/22/fnl-exceptions-in-java.html)
- [Lambda Exceptions](https://www.baeldung.com/java-lambda-exceptions)