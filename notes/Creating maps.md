Immutable map

```java
var map1 = Map.of(
	"name", "Alex", 
	"location", "Moscow"
);

var map2 = Map.ofEntries(
	Map.entry("name", "Alex"),
	Map.entry("location", "Moscow")
);
```

Mutable map

```java
var map1 = new HashMap(Map.of(
	"name", "Alex", 
	"location", "Moscow"
));

var map2 = new HashMap(Map.ofEntries(
	Map.entry("name", "Alex"),
	Map.entry("location", "Moscow")
));
```