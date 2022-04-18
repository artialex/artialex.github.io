---
tags: [db]
---

# SQL

- Scheme
	- Scheme evolution

**Data Definition Language** (DDL) - create, alter, drop

**Data Manipulation Language** (DML) - insertion, update, delete, restrictions, projections, cartesean products, join, aggregate, group

- subselects

**Table** level

```sql
# Selecting
SELECT * FROM customers;
SELECT name, city FROM customers;

SELECT DISTINCT country FROM customers;
SELECT COUNT(DISTINCT country) FROM customers;

SELECT TOP 10 FROM customers;
# or 
SELECT * FROM customers LIMIT 10;

SELECT MIN(price) from products;
SELECT MAX(price) from products;
SELECT COUNT(price) from products;
SELECT AVG(price) from products;
SELECT SUM(price) from products;


# Filtering
SELECT * FROM customers WHERE country = 'Mexico';
SELECT * FROM customers WHERE NOT country = 'Mexico';
SELECT * FROM customers WHERE country = 'Mexico' OR country = 'UK';
SELECT * FROM customers WHERE country = 'Germany' AND city = 'Berlin';
SELECT * FROM customers WHERE country = 'Germany' AND (city = 'Berlin' OR city = 'Stuttgart');
SELECT * FROM customers WHERE country = 'Germany' AND city IN ('Berlin', 'Stuttgart'); # Same as previous
SELECT * FROM customers WHERE country = 'Germany' AND city IN (SELECT ...)
SELECT * FROM customers WHERE id = 42;
SELECT * FROM customers WHERE country LIKE 'a__%';
SELECT * FROM products WHERE price BETWEEN 10 AND 20


# Ordering
SELECT * FROM customers ORDER BY country;
SELECT * FROM customers ORDER BY country DESC;
SELECT * FROM customers ORDER BY country, name;
SELECT * FROM customers ORDER BY country ASC, name DESC;


# Insertion
INSERT INTO customers (name, city, country) VALUES ('Joey', 'Berlin', 'Germany');


# Updating
UPDATE customers SET name = 'Johnny' WHERE id = 10;


# Deletion
DELETE FROM customers WHERE id = 5;
DELETE FROM customers; # Deletes all


# Aliasing
SELECT name AS customer_name FROM customers


```

#### Joins

- `(INNER) JOIN` - matches in both tables
- `LEFT (OUTER) JOIN` - all records from left table and matching ones from right table
- `RIGHT (OUTER) JOIN`- all records from right table and matching ones from left table
- `FULL (OUTER) JOIN` - all record from both tables


```

# Joining
INNER JOIN
```

**Database** level

%%
- joins
- Queries
- Indices
- Database constraints
%%