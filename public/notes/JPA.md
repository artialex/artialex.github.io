---
tags: [java]
---

**Java Persistence API** is a specification for binding Java Objects and records in a RDBMS

- JPA elements are located inside `javax.persistence.*`
- JPA cound be viewed as a *specification for ORM*
- JPA is a new specification relative to [[JDBC]]
	- Actually JPA uses [[JDBC]] under the hood (so JPA is a *level of abstraction* above JDBC)
- JPA has a language over [[SQL]] (JPQL)
- JPA simplifies *associations* using annotations like `@OneToOne`, `@OneToMay`, .etc..
- JPA is *database-agnostic*
- JPA uses *only unchecked exceptions*
- JPA *implicitly provides a transaction management*
- JPA uses `EntityManager`

**Entity classes**  should be marked with `@Entity` annotation

- `@Entity` does not inflict any restrictions on subclass/suberclass inheritance
- Class should have a public constructor *without arguments* among other possible constructors
- Class should be a *top-level* class
- Class should not be *final*
- Fields and methods that *participate in mapping*  should not be final
- Should have a primary key field

Two types of element access: *field access*  (via fields) and *property access* (via JavaBeans)

Allowed attrubute types for entity classes
- Primitives and their Wrappers
- Strings
- `Serializable` types
- Enums
- Entity types
- Embeddable classes
- Collections of types above

Allowed types for *primary key*
- Primitives and their Wrappers
	- In case of generated key only Numbers are allowed
- Strings
- `BigDecimal` and `BigInteger`
- `java.util.Date` and `java.sql.Date`

**Embeddable** class is not used at its own. It is used as a part of one or many *entity classes*. 
- Entity classes can contain both *embeddable classes* and *collections of embeddable classes*
- Embeddable classes can contain other embeddable classes
- Embeddable classes can have relations as long as they are not primary keys
- Such classes should be marked with `@Embeddable` and should confirm the same rules as entity classes except it's not necessary for them to have primary keys

**Relations** indicate RDBMS connections between entities

- Realition types: `@OneToOne`, `@OneToMany`, `@ManyToOne`, `@ManyToMany`
- They can be divided further into: 
	- `@Bidirectional`
	- `@Unidirectional`


**`@MappedSuperclass`** annotation is used for `BaseEntity` classes from which other entity classes should inherit

**Inheritance Mapping strategies** (using `@Inheritance` annotation) indicate how JPA will work with inherited entities
- Single table per hierarchy (default) - all entities are inside one table, and *discriminator column* is used to store entity type
	- Resulting table will have all fields, even those unique for each class (with NULL values for classes for which there is no such field)
- Single table per concrete class - every entity class have its own table
	- Not good for polymorphic relations
- Joined subclass - mixed approach, one table for all common fields, and separate table for each entity class that contains only unique fields

**Fetch strategies** 
- Lazy - field data will be loaded only when first requested
- Eager (Default) - field data will be loaded immediately

Fetch strategies can be changed for queries using EntityGraph API


**EntityManager** is an interface describing all common entity operations

**Entity Lifecycle**

- new - object is created, has no primary key(s) yet, not saved in database
- managed - object is created, managed by JPA, has generated primary key(s)
- detached - object was created, not managed by JPA (anymore)
- removed - object is created, managed by JPA, will be deleted after commiting a transaction

TODO

- [ ] Add operation reactions on the lifecycle
- [ ] `@Basic` 
- `@Access` declares the acces type (FIELD, PROPERTY)


**Relation and attribute overriding** is done with `@AttributeOverride(s)` and `@AssociationOverride(s)` annotations


- `@Cacheable` turns on a second-level cache
- `@Convert(s)` allows to convert types when reading/writing data
- `@EntityListeners` is used for callback operations on entity deleting, updating, etc..
	- Also `@PrePersist`, `@PostPersist`, `@PreRemove`, `@PostRemove`, `@PreUpdate`, `@PostUpdate`, `@PostLoad`
- `@OrderBy` and `@OrderColumn` are used for ordering
- `@Transient` excludes a field from mapping

JPA locks modes
- NONE
- OPTIMISTIC (READ)
- OPTIMISTIC_FORCE_INCREMENT (WRITE)
- PESSIMISTIC_READ
- PESSIMISTIC_WRITE
- PESSIMISTIC_FORCE_INCREMENT

JPA caches
- first-level caches data of a single transaction
- second-level caches data longer than first-level cache. 
	- ALL
	- NONE
	- ENABLE_SELECTIVE
	- DISABLE_SELECTIVE
	- UNSPECIFIED
	- `EntityManagerFactory.getCache()` is used for working with second level cache directly

**JPQL (Java Presistence Query Language)** is similar to [[SQL]] with an exception that instead of table names and table columns it uses class names and class attributes
- In contrast to SQL JPQL queries has automatic polymorphism

**Criteria API**

---

- [JPA vs JDBC](https://www.baeldung.com/jpa-vs-jdbc)
- [[RU] JPA Entities](https://habr.com/ru/post/265061/)







- [[SQL]] -> [[JPQL]] -> [[SpEL]]
Collections
