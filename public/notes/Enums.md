# Enums

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


