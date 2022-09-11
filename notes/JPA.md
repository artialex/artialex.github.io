---
tags: [java]
---

# JPA
JPA stands for **J**ava **P**ersistence **A**PI

It is a _database-agnostic_ specification for binding Java Objects and records in a relational database

JPA elements are located inside `javax.persistence.*`

JPA can be viewed as a _specification for ORM_. It is a newer specification relative to JDBC. Actually JPA uses JDBC under the hood (so JPA is a _level of abstraction_ above JDBC)

JPA has a language over [[SQL]] (JPQL)

JPA simplifies _associations_ using annotations like `@OneToOne`, `@OneToMay`, .etc..

JPA uses _only unchecked exceptions_

JPA _implicitly provides a transaction management_

JPA uses `EntityManager`

**Entity classes** are marked with `@Entity` annotation

- `@Entity` does not inflict any restrictions on subclass/superclass inheritance
- Class should have a public constructor _without arguments_ among other possible constructors
- Class should be a _top-level_ class
- Class should not be _final_
- Fields and methods that _participate in mapping_ should not be final
- Should have a primary key field

Two types of element access: _field access_ (via fields) and _property access_ (via JavaBeans)

Allowed attribute types for entity classes

- Primitives and their Wrappers
- Strings
- `Serializable` types
- Enums
- Entity types
- Embeddable classes
- Collections of types above

Allowed types for _primary key_

- Primitives and their Wrappers
  - In case of generated key only Numbers are allowed
- Strings
- `BigDecimal` and `BigInteger`
- `java.util.Date` and `java.sql.Date`

**Embeddable** class is not used at its own. It is used as a part of one or many _entity classes_.

- Entity classes can contain both _embeddable classes_ and _collections of embeddable classes_
- Embeddable classes can contain other embeddable classes
- Embeddable classes can have relations as long as they are not primary keys
- Such classes should be marked with `@Embeddable` and should confirm the same rules as entity classes except it's not necessary for them to have primary keys

**Relations** indicate RDBMS connections between entities

- Relation types: `@OneToOne`, `@OneToMany`, `@ManyToOne`, `@ManyToMany`
- They can be divided further into:
  - `@Bidirectional`
  - `@Unidirectional`

**`@MappedSuperclass`** annotation is used for `BaseEntity` classes from which other entity classes should inherit

**Inheritance Mapping strategies** (using `@Inheritance` annotation) indicate how JPA will work with inherited entities

- Single table per hierarchy (default) - all entities are inside one table, and _discriminator column_ is used to store entity type
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
- removed - object is created, managed by JPA, will be deleted after committing a transaction

TODO

- [ ] Add operation reactions on the lifecycle
- [ ] `@Basic`
- `@Access` declares the access type (FIELD, PROPERTY)

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

- [[SQL]] -> JPQL -> SpEL
  Collections
