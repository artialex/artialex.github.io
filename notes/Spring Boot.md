**Spring Boot** is built on top of [[Spring Framework]] (IoC container, `Resource`, ability to read `.properties`, etc...) and [[Spring MVC]] (`@RestController`s, `WebClient`, etc...)

- Spring Boot starts up an embedded Tomcat by default
- Spring Boot configures JSON sending / receiving
- Spring Boot also allows to use *starters* like `starter-web` or `starter-jdbc` in order to further simplify initial development tasks
- Magical `@SpringBootConfiguration` annotation