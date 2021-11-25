---
tags: [spring]
---

**Spring Framework** is *the core* of Spring project. 

- It can be thought as *the foundation* of all other modules of Spring ecosystem

### IoC

Strictly speaking Spring Framework is simply an [[Dependency Injection|IoC container]] with several layers like Data Access, Proxies, AOP, RPC, MVC, etc...
- `org.springframework.beans`
- `org.springframework.context`



---

**Application context** controls all created classes, objects and beans. It creates them when needed

- `AnnotationConfigApplicationContext` creates context that scans classes marked with annotations like `@Controller`, `Service`, `@Repository`, `@Component`
- There are also XML-based application contexts

**Configurations** allow to initialize beans using factory methods

```java
@Configuration
public class SomeConfiguration {
	@Bean // Adding beans
	public DataSource dataSource() {
		...
		return dataSource;
	}
}
```

**Spring beans** are components of IoC container.

Spring beans have **scope** that indicates how they are created

- *singleton* creates object once and reuses it (one source of data). Most used scope
- *prototype* creates object every time it's needed (many sources of data)
- #todo Learn about spring bean scopes: *request*, *session*, *application*, *websocket*


**Aspect-oriented programming** and **Spring proxies**

- before, after
- `@Transactional`, `@Secured`
- #todo Learn more about AOP & Spring proxies

**Spring resource management**

-  Spring abstracts resource access: `classpath:*`, `file:*`, `http:*`, `s3:*` (using Spring Cloud), etc...

**Spring environment**

- Access to properties defined somewhere, connection strings, env vars, etc...
- `*.properties` files
	- `@PropertySource` injects properties from resource
	- `@Value` injects values
- Profiles
	- #todo Learn more about profiles

---

- https://habr.com/ru/post/490586/
- Transactional https://www.marcobehler.com/guides/spring-transaction-management-transactional-in-depth