---
tags: [architecture, wip]
---

# REST API

- Scenarios -> Endpoints
- [[HTTP]]

```js
POST / notes
```

```json5
{
  success: true,
  meta: {
    // ...
  },
  data: {
    // ...
  },
}
```

Get all resources

    GET /notes

Get resource

    GET /notes/{id}

Create resource

    POST /notes
    PUT /notes/{id}

- [[Sorting algorithms]]

```js
GET /notes?sort=[author_id,created_at]
GET /notes?sort=author_id,created_at
GET /notes?sort=[("author_id","asc"),("created_at","desc")]
GET /notes?sort=author_id:asc,created_at:desc
GET /notes?sort=author_id:asc,created_at:desc

GET /notes?$sort=author_id asc,created_at desc
```

Searching

```
GET /notes?
```

Filtering

```js
GET /notes?where={"author_id":45}
GET /notes?created_at[after]=22-05-2021
GET /notes?created_at[between]=22-05-2021
GET /notes?created_at[before]=22-05-2021
GET /notes?created_at=before:22-05-2021
GET /notes?created_at=after:22-05-2021

GET /notes?$filter=created_at gt '22-05-2021' and created_at lt '23-05-2021'
```

- [[Pagination]]
- [[Including & Excluding fields]]

```js
GET /notes?excludes=author_id
```

```json5
{
	
}
```

- [[Data Integrity]]
- [[Conditional requests]]
- [[Searching]]
- [[Diagnostics & Tracing]]

- [[Error responses]]

**Idempotent** requests have the same intended affect even if the original request succeeded, though the response might differ

- _Most_ methods should be idempotent
- One semantics
- In cloud scenarios _all operations_ must be idempotent

| Method   | Description                                                                                                 | Status code                                  |
| -------- | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `PUT`    | Create/Replace the whole resource                                                                           | 200-OK, 201-Created                          |
| `PATCH`  | Create/Modify the resource with [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7386#section-3) | 200-OK, 201-Created                          |
| `GET`    | Read the resource                                                                                           | 200-OK                                       |
| `DELETE` | Remove the resource                                                                                         | 200-OK, 204-No Content (Avoid 404-Not Found) |

- What's with 404 in PUT?
- How to get ID?
- Prefer PATCH over PUT
- _Avoid_ POST unless you make it idempotent (the situation when creating several resources) (OASIS)
- #todo learn more about idempotency and its practices

Request **validation**

- More about request validation

**Detail** responses

**Collection** responses

---

- #read https://restfulapi.net/
- #read https://www.toptal.com/java/spring-boot-rest-api-error-handling
- #read https://jsonapi.org/

- https://github.com/darrin/yaras
  https://google.github.io/styleguide/jsoncstyleguide.xml
  https://github.com/microsoft/api-guidelines/blob/vNext/Guidelines.md
  https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design
  http://apistylebook.com/design/guidelines/
  https://opensource.zalando.com/restful-api-guidelines/
  https://github.com/Trust1Team/api-styleguide
  https://docs.python-eve.org/en/stable/
  https://developer.paypal.com/docs/api/overview/
  https://docs.github.com/en/rest
  https://github.com/WhiteHouse/api-standards



