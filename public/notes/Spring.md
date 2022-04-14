---
tags: [spring, index]
---

# Spring

**Spring** *or* **Spring framework** is divided into **modules** 

Notable ones:

- `spring-core` 
- `spring-beans`
- `spring-context` 
	- Various `*ApplicationContext`s
- `spring-context-support`
- `spring-web` for basic web support, includes:
	- `*WebApplicationContext`, `Servlet*Aware` classes
	- `RestTemplate` http-client which is somewhat obsolete
	- Web annotations like `@RestController`, `@ResponseBody`, `@RequestParam`, `@*Mapping`, `@*Scope`, etc...
	- `ResponseEntity`
- `spring-webmvc` for MVC & REST based on servlets
- `spring-test` with testing tools
- `spring-jdbc` for working with [[JDBC]]
- `spring-jms`
- `spring-messaging`
- `spring-orm` with ORM support including JPA & Hibernate
- `spring-tx`
- `spring-websocket`

Other modules:

- `spring-aop`
- `spring-aspects`
- `spring-expression`
	- SpEL
- `spring-instrument`
- `spring-instrument-tomcat` - Tomcat utilities
- Core: `core`,  `beans`, `spel`
	- `spring-context` - Application context
- `spring-oxm` for Object/XML mapping
- Data Access: `jdbc`, `orm`, `oxm`, `jms`, `transactions`
- Web: `web`, `websocket`, `servlet`, `portlet`















There are many **Spring projects** that are build on top of **Spring framework**

- [[Spring Framework]]
- [[Spring MVC]]
- [[Spring Boot]]
	- [[Spring Boot Starters]]
- [[Spring Data]]
- [[Spring Cloud]]
- Spring  Security
- Spring Integration
- Spring GraphQL
- Spring Session

**Spring Boot starters**

---

- #read [What is Spring Framework? An Unorthodox Guide](https://www.marcobehler.com/guides/spring-framework)
- #read [Spring Framework Documentation](https://docs.spring.io/spring-framework/docs/current/reference/html/index.html)



<!--
%%

[Spring Projects](https://spring.io/projects)
- Spring Framework
	- Core
		- IoC Container
	- AOP
		- Spring AOP
		- ASpectJ
	- Web
		- Spring MVC
- Spring Boot
	- Set of libraries with predefined Spring settings
	- Starter
	- Sets up a web server (Tomcat)

	

- Spring MVC
	- Model, View, Controller
	- `@Controller`
	- Templates
	- `@WebMvcConfigurer`
	- DispatcherServlet
- Testing
	- `@SpringBootTest`
	- `@MockMvcTest`

Spring IoC Container
Application Context
Dependency Injection framework
Inversion of Control
Autowiring
Spring Beans
Configuration (XML, Annotations & Java Configuration)
Lazy Initialization
`@Scheduler`
`@Controller`, `@RestController`
Spring Expression Language
Spring Cloud
AOP

https://javarevisited.blogspot.com/2018/01/how-to-learn-spring-core-spring-mvc-boot-security-framework.html
https://www.baeldung.com/spring-boot
https://www.baeldung.com/spring-tutorial
---

- https://www.baeldung.com/global-error-handler-in-a-spring-rest-api
- https://www.toptal.com/spring/top-10-most-common-spring-framework-mistakes
- https://codeburst.io/spring-boot-rest-microservices-best-practices-2a6e50797115
- https://spring.io/guides/tutorials/rest/
- https://zetcode.com/springboot/responseentity/
- https://spring.io/guides
- https://www.bezkoder.com/category/spring/


%% 


- [[Dependency Injection]] -> [[Spring Framework]] -> [[Spring Core]] -> [[Spring Boot]]
-->
