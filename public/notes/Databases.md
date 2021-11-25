---
tags: [db, index]
---

# Databases

[[Associations]]

- SQL
- Normalization
- ACID Transactions
- CAP Theorem
- OLTP vs OLAP
- Horizontal & vertical scaling
- Dimensional modeling

## Scaling

### Read/Write

- Sharding
- Partitioning


## [[PostgreSQL]]
Relational database

- De-facto standard for a RDBMS

## H2
Relational database

- Allows In-memory and Disk-based tables
- Can be embedded in the Java application
- Supports subset of SQL
- Widely used in test environments

## SQLite
Relational database
- Stores data in a single file
- Widely used in mobile development

- [[Partitioning]]

Data Access

- [[Databases]] -> [[JDBC]] -> [[JPA]] -> [[Hibernate]] -> [[Spring Data]]
- [[PostgreSQL]] -> [[Sharding]] -> [[Partitioning]]

Best Practices

- [[Data Access]]

Data Access
	- JDBC & JPA
	- Hibernate
Databases

System Scaling
Read
Master / Slave
Write
