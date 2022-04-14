---
tags: [java]
---

# Hibernate

*Hibernate* is not only an *ORM* but a complete solution for data storage in Java

The relation is like this:

$$
\text{Java Objects} \gets \text{Hibernate} \to \text{Database}
$$


Hibernate productive, maintainable, performant, provider-agnostic [[Java Persistence API]] Implementation. Located inside `org.hibernate.*` package

Hibernate includes:

- Hibernate ORM
- HIbernate EntityManager
- Hibernate Validator
- Hibernate Envers
- Hibernate Search
- Hibernate OGM (Object/Grid Mapping) for NoSQL solutions
- Connection pool libraries (C3P0, Proxool, etc...)

Differences in entity requirements between Hibernate and JPA

- no-args constructor does not have to be *public* or *protected*
- JPA forces *non-final* classes, Hibernate only recommends that for lazy-loading

Hibernate has uniq **inheritance strategy** called *implicit polymorphism*


Hibernate structure:

- **Transactions** are database work units
- SessionFactory is a singleton for the database


**Sessions** represent the connections to a database, they are lightweight. Objects are created, read, updated and deleted using session
Sessions are *First Level Cache*

- transient objects are not tied to session
- persistent objects are tied to session
- detached objects are not tied to session


*Second Level Cache* is optional


Query Cache


zomg

- Queries 
- Configuration
- Criteria

---

- https://www.youtube.com/watch?v=C-wEZjEOhWc