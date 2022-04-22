---
tags: [java]
---

# Exceptions

Difference between Errors and Exceptions: Exception is something unexpected, Error is something expected

*Exceptions* can be throwed explicitly using `throw` keyword or by method or constructor or by JVM itself

Exceptions hierarchy

- `Throwable` is a base class for all exceptions
	- `Exception` is the superclass of all *normal* exceptions
		- `RuntimeException` is the superclass of all *normal* exceptions that are *unchecked* exceptions
- `Error` is the superclass of all *fatal* exceptions, are thrown by JVM

**Custom exceptions** are created by extending `Exception` or `RuntimeException`

**Checked exceptions** are anticipated like: a file failing to open or a failed network connection

**Unchecked exceptions** are not anticipated, like a bug in a program

--- 
