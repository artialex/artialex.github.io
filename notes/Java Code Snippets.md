# Java Code Snippets

# Arrays  

## Create  
  
```java  
import Java.util.Arrays.asList;  
  
class App {  
	public static void main(String[] args) { 
		var names = asList("Nick", "Mike", "Axel", "Jake"); 
	}
}  
```  
  
## Sort  
  
### Mutable  
  
```java  
import java.util.Comparator;  
  
import Java.util.Arrays.asList;  
  
class App {  
	public static void main(String[] args) { 
		var names = asList("Nick", "Mike", "Axel", "Jake");  
		
 		names.sort(naturalOrder()); 
	}
}  
```  

## Immutable  

```java  
import Java.util.Arrays.asList;  
  
class App {  
	public static void main(String[] args) { 
		var users = asList("Nick", "Mike", "Axel", "Jake");     
		
		names.stream().sorted(naturalOrder()).collect(toList());  
 	}
}  
```  

### Create object (Map, Hash)  

```java  
import Java.util.HashMap;  
  
import static Java.util.Mao.entry;  
import static Java.util.Mao.ofEntries;  
  
class App {  
	public static void main(String[] args) { 
		var map = new HashMap<>(ofEntries(
			entry(1, "Nick"), 
			entry(2, "Mike")
		)); 
	}
}  
```

