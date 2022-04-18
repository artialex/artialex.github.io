---
tags: [db, index]
---

# Data Access

## JDBC & JPA

Java Database Connectivity (JDBC) is a specification for working with a database. Located inside `java.sql.*` and `javax.sql.*` packages. It is old, made in 1997

[[JPA]] (JPA) is a newer standard (newer than JDBC) that is used widely now

## ORM

[[Hibernate]] is the most popular *Object Relation Mapping* library for Java

## Libraries

[[Spring Data]]

## Databases

[[PostgreSQL]] is a relational database and de-facto standard for a RDBMS

H2 is a relational database, it allows In-memory and Disk-based tables, it can be *embedded* in the Java application, supports subset of SQL and widely used in test environments

SQLite is a relational database that stores data in a single file and widely used in mobile development

## Associations

*Many-to-many* associations implicitly create *link tables*

## #TODO

- SQL
- Normalization
- ACID Transactions
- CAP Theorem
- OLTP vs OLAP
- Dimensional modeling
- Scaling: horizontal & vertical, master/slave, read/write
- Sharding
- Partitioning
- Migrations: version control for database schemas
- Best Practices
- Problems
	- *Structural* problems can be noticed when designing the system
	- *Dynamic* problems are exposed in runtime
		- Data navigation problem
	- Lazy queries
		- N+1 problem
	- HIbernate
	- Relations (1-to-1, 1-to-many, etc...)
	- Entity Lifecycle
	- Transactions
	- ACID
	- [[SQL]]
	- Transactions
	- Stored procedures
	- Message brokers
		- RabbitMQ
		- Kafka
