- Scenarios -> Endpoints
- [[HTTP]]


![[Creating a resource]]

Get all resources

	GET /notes	
	
Get resource

	GET /notes/{id}

Create resource

	POST /notes
	PUT /notes/{id}
	

- [[Sorting]]
- [[Filtering]]
- [[Pagination]]
- [[Including & Excluding fields]]
- [[Data Integrity]]
- [[Conditional requests]]
- [[Searching]]
- [[Diagnostics & Tracing]]

- [[Error responses]]

**Idempotent** requests have the same intended affect even if the original request succeeded, though the response might differ

- *Most* methods should be idempotent
- One semantics
- In cloud scenarios *all operations* must be idempotent

|Method|Description|Status code|
|--|--|--|
|`PUT`|Create/Replace the whole resource|200-OK, 201-Created|
|`PATCH`|Create/Modify the resource with [JSON Merge Patch](https://datatracker.ietf.org/doc/html/rfc7386#section-3)|200-OK, 201-Created|
|`GET`|Read the resource|200-OK|
|`DELETE`|Remove the resource|200-OK, 204-No Content (Avoid 404-Not Found)|

- What's with 404 in PUT?
- How to get ID?
- Prefer PATCH over PUT
- *Avoid* POST unless you make it idempotent (the situation when creating several resources) (OASIS)
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