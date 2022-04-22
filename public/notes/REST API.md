---
tags: [architecture, wip, rest]
---

# REST API

- Scenarios -> Endpoints
- [[HTTP]]

```js
POST / notes
```

```js
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



**Request**

- `$offset`, `$limit` (`$skip`, `$top`)
- `$page`, `$size`

Offset-based

```js
GET /notes // offset = 0, limit = 10
GET /notes?offset=1560 // limit = 10
GET /notes?offset=1560&limit=20
```

```js
{
	"_meta": {
		"pagination": {
			"offset": 1560,
			"page": 78,
			"limit": 20,
			"pageCount": 82,
			"elementCount": 1764
		}
	},
	"data": [ 
		// Elements 1561 through 1580 ...
	]
}
```

Page-based

```js
GET /notes // page = 0, size = 10
GET /notes?page=78 // size = 10
GET /notes?page=78&size=20
```

```json
{
	"_meta": {
		"pagination": {
			"offset": 1560,
			"page": 78,
			"size": 20,
			"pageCount": 82,
			"elementCount": 1764
		}
	},
	"data": [ 
		// Elements 1561 through 1580 ...
	]
}
```

Cursor-based



---
tags: [architecture, rest]
---

# Rest API Design

---

## API Design

Tools:

- https://raml.org/
- https://swagger.io/

- https://blog.qmo.io/ultimate-guide-to-api-design/?utm_source=forwebdev_tlgrm&utm_medium=announcement&utm_campaign=polnoe-rukovodstvo-po-dizaynu-api-crud
  Learn
- Awesome Open Source Apps
- Real World Apps

### Links

- [API Design]
  (https://pages.apigee.com/rs/apigee/images/api-design-ebook-2012-03.pdf)
- У Rails хороший подход к дизайну API
- https://w3ctag.github.io/design-principles/

* http://jsonapi.org/
  https://hackernoon.com/restful-api-designing-guidelines-the-best-practices-60e1d954e7c9

https://github.com/marmelab/awesome-rest
https://github.com/Kikobeats/awesome-api
https://github.com/abhishekbanthia/Public-APIs

## Checklists

https://restful.io/the-rest-api-design-checklist-ed064c893760
https://mathieu.fenniak.net/the-api-checklist/
https://github.com/shieldfy/API-Security-Checklist
https://www.owasp.org/index.php/REST_Security_Cheat_Sheet

## General Recommendations

### Versioning

<!--
_Ссылки: [[1]](http://www.baeldung.com/rest-versioning), [[2]](http://blog.restcase.com/restful-api-versioning-insights/)_
-->

URI / Media Type / Query

```bash
# good
GET example.com/api/v1/customers

# better, but requires to implement CORS for your backend
GET api.example.com/v1/customers
```

### Resource URI

The purpose of an URI (i.e. https://api.example.com/customers) is to uniquely identify a specific resource.

Use these checks when you design your URI:

- Use a **noun** for the resource name (i.e. `customer`) and not a verb (i.e. `createCustomer`) to make it resource-oriented.
- Use **plural** for the resource name (i.e. `/customers`) to show it is a collection. Use an identifier at the end of the path to identify a specific element in the collection (i.e. `/customers/{id}`).
- Don’t use a **trailing forward slash** (i.e. `/customers/` or `/customers/{id}/`).
- Don’t use **filename extensions** for the content type (i.e. `/customers.json` or `/customers.xml`) as part of the URI. Use the Content-Type header instead.
- Keep the URI **cool** (i.e. [Cool URIs don’t change](https://www.w3.org/Provider/Style/URI)) by using an immutable value for the identifier (i.e. `/customers/{id}`). For example, a primary key in a database table.
- Prefer a **concrete name** (i.e. `customers`) to an abstract name (i.e. `people`) to make it easier to understand what the URI is identifying.
- Only use a **subresource** (i.e. `/customers/{id}/orders`) if it will never be necessary to access the subresource outside of the parent resource’s scope. For example, it will not be necessary to find orders across customers.
- Follow the **convention** below to make it easy to use it in JavaScript frameworks (i.e. Backbone, Oracle JET, Angular, etc.):

| Task                        | Method | Path            |
| --------------------------- | ------ | --------------- |
| Create a new customer       | POST   | /customers      |
| Delete an existing customer | DELETE | /customers/{id} |
| Get a specific customer     | GET    | /customers/{id} |
| Search for customers        | GET    | /customers      |
| Update an existing customer | PUT    | /customers/{id} |

```bash
# good
GET /users
GET /users/:id
```

### Resource Representation

The purpose of the resource representation is to show relevant data from the server’s resource.

Use these checks when designing your resource representation:

- Think **outside-in** (or Design for Intent). Don’t simply expose your underlying data model, but think through what the clients want to achieve and design for that.
- Only include **relevant data** that client needs, because it will reduce the bandwidth usage and make the representation easier to understand. For example, there might be audit columns on a database table, which are irrelevant for clients.
- Use **JSON** as the Content-Type, so JavaScript clients don’t need to parse the response. Most of the popular RESTful APIs, like Twitter’s, dropped XML many years ago, and modern JavaScript frameworks aren’t really using XML anyway, so only support XML if you really need to. See Mark Nottingham’s JSON or XML: Just Decide to learn why you should only support one content type.
- Use the **Content-Type** header, so clients know how to parse the body. If you support multiple types, let the client pick one in the Accept header. If the client only wants an unsupported media type, return “415 Unsupported Media Type” as the status code.
- Use the **Content-Length** header to specify the length of the response.
- Include the **Resource’s ID** both in the URI (i.e. `/customers/123`) and as an attribute in the resource representation (i.e. `{"id":123}`). The reason is that some JavaScript frameworks rely on being able to access the ID as an attribute.
- Use **camelCase** (i.e. companyName) for your attribute names. Camel case is used in JavaScript, so you will minimize the conversion effort of the client, if you return the attribute with this convention.
- For **Date** (and DateTime) fields, use ISO-8601 format (i.e. 2016-07-16T19:20:30.45+01:00).
- If you have **magic numbers** (i.e. `{"orderStatus":"4"}`) then create a metadata service where it can be lookup automatically, so front-end engineers don’t need to look through out-of-band documentation. Alternatively, auto-translate the magic number in the representation (i.e. `{"orderStatus":"Cancelled"}`).
- If you have a field that has a **list of values** (i.e. a bonusLevel field) provide a metadata service where clients can see potential values, so it won’t be necessary to hard-code values in client code.
- If you support **multiple languages** in your representation, let the client use the Accept-Language header to decide which language to use.
- Provide **links** so clients can easily navigate to related resources (HATEOAS). For example, in a customer representation you could provide a link to the customer’s orders and other related resources. Poorly constructed links on the client side is one of the most common errors in REST API, so by providing complete links to the client you eliminate this source of errors.
- Use the **Link** header (from RFC-5988) for metadata links. For example, for previous and next links in a paginated search result.
- Use **embedded links** inside the resource representation for links specific to that resource. For example, a link to the customer’s orders. The reason for not using the Link header for both link types is that when you need to return a collection of resources where each item needs it own version a link (for example, a canonical link to itself) you cannot do this in the Link header.
- For **link relations**, seek to use the [standard relation types](https://www.iana.org/assignments/link-relations/link-relations.xhtml) before inventing your own.
- Use **meaningful name for links** so that the client can guess if GET or POST should be used. For example, a “Reject Draft” link sounds like an unsafe operation where POST should be used, but a “Customer” link sounds like GET can be used.
- Don’t do **pretty print** by default. Expect that casual clients will use a nice extension like Postman and save the bandwidth.
- Use [JSON Lint](https://jsonlint.com/) to **validate** your proposed resource representation.
- If a client sends a request with a resource representation with an **unknown field** then ignore that field. This as per Postel’s law, “Be liberal in what you accept, and conservative in what you send.”

### HTTP Methods

#### GET

The purpose of the GET method is to retrieve resources. If GET is performed against a Collection URI (i.e. /customers) it will search through that collection. If GET is performed against an Item URI (i.e. /customers/4531) it will lookup that specific item.

The checks below are the same whether GET is used for search or lookup:

- The GET method must be **safe**, which means that when the client calls the method it will never update anything in the resource representation. In other words, only use it for data retrieval and never for altering the state.
- Use the **Cache-Control** header to explicitly state if the response can be cached, or not. If yes, state for how long it can be cached (see my [cache post](http://www.kennethlange.com/posts/Boost-Your-REST-API-with-HTTP-Caching.html) for some rules of thumb).
- Use the **ETags** header (if your REST API allows multiple users to work on the same data) to help protect the data integrity (see PUT, PATCH and DELETE for more details).
- If you want to support **Conditional GETs** (to reduce network traffic), remember to support the “If-None-Match” header where clients can specify the latest ETag they have received. If ETag is still the latest, return “304 Not Modified” else return “412 Precondition Failed”.
- If you allow **partial responses** (i.e. only include some attributes in the response) to improve performance, use a fields entry in the query string to let the client specify which fields should be returned. For example, `/customers?fields=firstName,lastName`. This is beneficial for mobile clients with small screens (where they can’t show all data) and don’t have a lot of bandwidth available.
- Consider allowing clients to get linked resources **embedded** in the response. For example, `/customers/123?embed=orders` will include the customer’s orders in the customer response. This is to reduce the number of service calls and improve the performance. You can see nice implementations of this in the WordPress API and in the JIRA REST API.

The following checks are only relevant when GET is used for search:

- Use the **query string** to let the clients search the collection. For example, `/customers?lastName=skywalker&gender=female`.
- If you allow **sorting** of the search results, use a sortBy entry in the query string. For example, `/customers?sortBy=lastName`. Allow a minus (-) in front of the sortBy attribute to change the sort order. For example, `/customers?sortBy=lastName,-firstName`.
- Consider **aliases** for common queries. For example, `/customers/recent`.
- If the search can return a very high number results, use **paging** to divide the search result into multiple pages (like a Google search). For example, `/customers?page=6&pageSize=50`. Provide Link headers as per RFC-5988 (i.e. next, previous, first, last) to make it easy for the client to navigate through the result set. Remember to have default values (i.e. `page=1&pageSize=50`).
- If the search was successful, return “200 OK” as the status code, and a wrap-free collection of the search results. Return the search results as a JavaScript collection (i.e. [{"id":"1"},{"id":"2"}]) and avoid wrapping it (for instance, {data: [{"id":"1"},{"id":"2"}]}) as wrapping makes it more difficult to parse for JavaScript frameworks.
- If the search **found nothing**, return “200 OK” and an empty collection.

The following checks are for when GET is used for looking up a single element:

- If the item is **found**, return “200 OK” as the status code and the item in the response body.
- If the item is **not found**, return “404 Not Found” as the status code.

#### POST

The purpose of the POST method is to add a new element to a collection resource. For example, add a new customer to a customers collection.

- The server should **automatically generate** the resource id (i.e. /customers/{id}) for new resources (i.e. don’t expect clients to give it as input).
- Don’t use a **query string** with POST. If you have input parameters add them as part of the request body, or alternatively, use a (custom) HTTP header.
- If the resource is **successfully created**, return “201 Created” as the status code.
- Use the **Location** header in the response to tell the client the URI of the newly created resource.
- If the newly created resource will contain much more data than what the client gave as input (see GitHub for an example), you should return the newly created resource in the **response body** to save the client from a round-trip (use the same decision for PUT and PATCH to keep things consistent).
- If newly created resources will look like what clients gave as input, return an **empty response body**.

#### PUT

The purpose of the PUT method is normally to overwrite/update an existing resource (i.e. it’s a complete update where every field in the resource representation is updated).

- Don’t use a **query string** (see POST).
- Make sure clients can use POST with the **X-HTTP-Method-Override** header to fake a PUT request, because some proxies only know GET and POST and will reject PUT requests.
- The PUT method must be **idempotent**, which means that the result must be always be the same no matter if it is called one or many times. This makes transmission easier, because if it fails, it can just send the request again without worrying about messing up the resource’s state.
- Don’t use PUT for **partial updates**. If PUT is given a partial resource as input (i.e. `{"firstName":"Han"}`) it should update those attributes specified in the input, and set all other attributes to null. If you want partial updates, use PATCH instead.
- Use **If-Match** header (and ETags) to avoid lost updates (see Etags post for practical details).
- If the resource is **successfully updated**, return “204 No Content” and an empty response body. However, if you return the updated resource representation, use “200 OK” instead.
- Avoid using PUT to **create new resources**. While this is perfectly legal, it is not all clients who are aware of this, so it will make your API less intuitive.

#### PATCH

The purpose of the PATCH method to update specific fields on a resource (unlike PUT which overwrites the whole resource), which makes it faster when dealing with large resource representations.

It is a comparatively new method, which was introduced in RFC-5789, and it is not supported out of the box by all standards (like JAX-RS), and client frameworks will often need a little tweaking to work with it.

If you support PATCH, make sure it satisfy these checks:

- Make sure clients can use POST with the **X-HTTP-Method-Override** header to fake a PATCH request, because not all firewalls and other middlemen know PATCH and might reject it.
- Don’t use a **simple JSON object** (i.e. `{"firstName":"Leia","lastName":"Organa"}`) as input to PATCH. The reason is that you cannot address attributes on child objects, or individual elements in arrays.
- Use the **JSON Patch** format specified in RFC-6902 to let the client specify what should be updated. Remember that the Content-Type for this is “application/json-patch+json”.
- If you use PATCH consider using more **coarse-grained** resources. For instance, instead of a `/orders` and a `/orders/{id}/lines` then just have an `/orders` resource where the order lines are an array within the orders resource. The benefit of a single resource is reduced latency.
- If a client wants to patch a **read-only** (or system generated) attribute, respond with “400 Bad Request”.
- Use **If-Match** header (and ETags) to avoid lost updates (see Etags post for practical details). Remember that PATCH is neither safe nor idempotent, so ETags are extra important here (compared to PUT) to avoid messing up the resource.
- If the partial update is **successful**, return “204 No Content” and no response body. Mobile apps and other low-bandwidth clients prefer PATCH (due to the small payload), so returning the full resource in the response is undermining their need for speed. But keep it consistent with POST, so if POST returns the newly created resource, then PATCH should also return the updated resource and “200 OK” as status code.
- Make sure that your clients will **actually use** PATCH, and not make full updates with PUT even when a partial update would have been sufficient. Many JavaScript frameworks supports PUT out of the box, which indirectly encourage its users to prefer this method. If you support PATCH, consider not supporting PUT, and vice versa.

#### DELETE

The purpose of delete is to delete a resource on the server:

- Don’t use a **query string** (see POST).
- Make sure clients can use POST with the **X-HTTP-Method-Override** header to fake a DELETE request, because some proxies only know GET and POST and will reject DELETE requests.
- The DELETE method must be **idempotent**, which means that the result must be the same no matter how many times it is called.
- Use **If-Match** header (and ETags) to avoid stalled deletes (see Etags post for practical details).
- Don’t use DELETE as a **soft delete** (i.e. update the resource’s status to cancelled, expired, deleted, or similar). If you want a soft delete, use PUT or PATCH to update the appropriate field.
- In many business software applications, you don’t want to delete data (for audit reasons), so **no DELETE method** is needed.
- If the resource was **successfully** deleted (or it has already been deleted), return “204 No Content” and an empty body (to ensure that DELETE is idempotent).
- If the resource can **no longer be deleted** (for example, you cannot delete an order after it has been shipped) respond with “405 Method Not Allowed” (and set the Allow header with the allow methods on the resource).
- Don’t allow **delete on collections** (i.e. DELETE /customers) unless you really know what you are doing!

### Errors

When a request goes wrong, the server should provide a helpful response to the client, so that the client can understand and potentially fix the error.

Here is a list of checks to help with that:

- If the request failed, **never return** “200 OK”. Not even if you provide an error message in the response body.
- Beside the HTTP **Status Codes** already mentioned in the other sections, use these:
  - **400 Bad Request**: Failure due to a client-side problem. For example, missing mandatory header, poorly formed JSON, or failed (business) validation like a negative number in a quantity field.
  - **500 Internal Server Error**: Failure due to a server-side problem. For example, the server cannot connect to the database (often used in the a catch-all exception block).
- In the response body, provide a **description** of the error to help the client. For example, “Mandatory field Delivery Date is missing”.
- Make sure that the description can be shown directly **end-users**, so the front-end engineer won’t need to rewrite them. Alternatively, have one message for end-users and another for developers (see [here](https://github.com/WhiteHouse/api-standards#error-handling) for an example).
- Consider returning an **array of errors**, so you can return multiple errors in one response, which is useful in business application that has lots of validations (see GitHub and Google for examples of returning multiple errors).
- Be careful not to incidentally reveal detailed technical information in the error description (for instance, a raw stack trace) that might help a **potential intruder**.

### Security

Here are some checks related to security:

- Use all the normal **security practices** (validate all input, reject bad input, protect against SQL injections, etc.) Expect that your API will live in a hostile world where people want to misuse it.
- **Encrypt all traffic** to the server with HTTPs (and don’t allow any request without it). If you use HTTP Basic Authentication for security, it is highly insecure not to use HTTPs as basic auth doesn’t encrypt the client’s password when sending it over the wire, so it’s highly sniff’able.
- If you develop both the API and the client, you can use **HTTP Basic Authentication**. The benefit is that practically every HTTP client (and REST framework) support it.
- If clients will be developed by third parties, who end-users may not want to share their credentials with, use **OAuth2** (which is the de-facto standard for most REST APIs).
- Remember it is not easy to **switch authentication method** in a production API (just ask Twitter about OAuthcalypse), so if in doubt use OAuth2.
- Provide **useful examples** of how to do the authentication. Don’t start your relationship with the front-end engineer with a frustrating experience about trying to figure out authentication.

### Misc

Here are a couple of tips that didn’t really fit into the other sections:

- Use the Accept-Encoding header to compress responses with **GZIP**, which will reduce bandwidth usage and improve transfer speed.
- If you have a (semi) public API consider implementing **Rate Limits** with the X-RateLimit-Limit and X-RateLimit-Remaining headers to avoid some clients making excessive requests. If the limit is exceeded return “403 Forbidden”.

### Other Guides

- https://github.com/WhiteHouse/api-standards#error-handling
- https://github.com/paypal/api-standards/blob/master/api-style-guide.md
- http://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api
- https://zalando.github.io/restful-api-guidelines/
- https://github.com/Microsoft/api-guidelines/blob/master/Guidelines.md

### Documentation Examples

- https://developers.digitalocean.com/documentation/v2/
- https://developer.github.com/v3/
- https://github.com/basecamp/bc3-api

### 3. Избегайте Query-параметров

```bash
# good
/projects/:id/collections

# bad
/collections?projectId=:id
```

### 3. Используйте HTTP Method'ы

| Метод  | Для чего используется               | Что возвращает            | Примечания                                        |
| ------ | ----------------------------------- | ------------------------- | ------------------------------------------------- |
| GET    | получить данные                     | данные                    |                                                   |
| POST   | добавить данные                     | 201/id созданного объекта |                                                   |
| PUT    | изменить данные (как целый объект)  | 204                       |                                                   |
| PATCH  | изменить данные (как часть объекта) | 204                       | удобен для реализации auto-submit/auto-save полей |
| DELETE | удалить данные                      | 204                       |                                                   |

### 4. Используйте Enveloping

Оборачивайте ответ в data/error/success объекты

```js
// good
{
  data: [
    { ... },
    { ... },
    // ...
  ]
}

// bad
[
  { ... },
  { ... },
  // ...
]
```

## 5. Используйте Media Types

s — JSON Responses and Requests
“Everything should be serialised into JSON. If you’re expecting JSON from the server, be polite, and provide the server with JSON. Consistency!”
Obviously “everything” is an overstatement as some comments point out, but was intended to refer to any simple, plain object that should be serialised for the process of consuming and/or returning from the API.

It is essential to “define your media types” through headers on both responses and requests for a RESTful API. When dealing with JSON ensure that you include a Content-Type: application/json header, and respectively for other response types, be it CSVs or binaries.

There have been cases where I’ve had nothing to return from the success of an action (i.e. DELETE), however I feel that returning an empty object can in some languages (such as Python) be evaluated as false and may not be as obvious to a human debugging their application.

Support the 204 — No Content response status code in cases where the request was successful but has no content to return.

“Because of this, I like to return "OK" from such endpoints, which although is a string, is consistently wrapped into a simple response object.”
Through much public consideration into handling “empty” responses, and ideas of returning some unique signal to represent success, I have reevaluated the appropriateness of using an arbitrary "OK" string to indicate success.

The envelope of the response, coupled with a 2XX HTTP success code is enough to indicate a successful response without arbitrary “information”.

DELETE /v1/posts/:id
// response - 204
{
"data": null
}
Use HTTP Status Codes and Erro

## 4. Use HTTP Status Codes and Error Responses

Because we are using HTTP methods, we should use HTTP status codes. Although a challenge here is to select a distinct slice of these codes, and then depend on response data to detail any response errors. Keeping a small set of codes helps you consume and handle errors consistently.

I like to use:

for Data Errors
400 for when the requested information is incomplete or malformed.
422 for when the requested information is okay, but invalid.
404 for when everything is okay, but the resource doesn’t exist.
409 for when a conflict of data exists, even with valid information.
for Auth Errors
401 for when an access token isn’t provided, or is invalid.
403 for when an access token is valid, but requires more privileges.
for Standard Statuses
200 for when everything is okay.
204 for when everything is okay, but there’s no content to return.
500 for when the server throws an error, completely unexpected.
Furthermore, returning responses after these errors is also very important. I want to consider not only the presentation of the status itself, but also a reason behind it.

In the case of trying to create a new account, imagine we provide an email and password . Of course we would like to have our client app prevent any requests with an invalid email, or password that is too short, but outsiders have as much access to the API as we do from our client app when it’s live.

If the email field is missing, return a 400 .
If the password field is too short, return a 422 .
If the email field isn’t a valid email, return a 422 .
If the email is already taken, return a 409 .
“It’s much better to specify a more specific 4xx series code than just plain 400. I understand that you can put whatever you want in the response body to break down the error but codes are much easier to read at a glance.” (source)
Now from these cases, two errors returned 422s regardless of their reasons being different. This is why we need an error code, and maybe even an error description. It’s important to make a distinction between code and description as I intend to have error (code) as a machine consumable constant, and description as a human consumable string that may change.

In the case of per-field errors, the presence of the field as a key in the error is enough of a “code” to indicate that it is a target of a validation error.

Field Validation Errors
For returning those per field errors, it may be returned as:

POST /v1/register
// request
{
"email": "end@@user.comx"
"password": "abc"
}
// response - 422
{
"error": {
"status": 422,
"error": "FIELDS_VALIDATION_ERROR",
"description": "One or more fields raised validation errors."
"fields": {
"email": "Invalid email address.",
"password": "Password too short."
}
}
}
Operational Validation Errors
And for returning operational validation errors:

POST /v1/register
// request
{
"email": "end@user.com",
"password": "password"
}
// response - 409
{
"error": {
"status": 409,
"error": "EMAIL_ALREADY_EXISTS",
"description": "An account already exists with this email."
}
}
This way, your fetch logic watches out for non-200 errors, and can then straight-up check the error key from the response and then compare it to any further logic in the client app.

Bundling the status seems useful too if you don’t want to introspect the response meta-data and conditionally add the key in if you ever need it.

The description acts as a fallback human-readable error message in the case an appropriate localisation string implementation cannot be used.

## 4. Use HTTP Status Codes and Error Responses

Avoid Password Composition Rules
After doing a lot of research into password rules, I’ve come to agree that password rules are bullshit and are part of NIST’s “don’ts”.

I’ve collated some points (from the above links) for password handling:

Only enforce a minimum unicode password length (min 8-10).
Check against common passwords (“password12345”)
Check for basic entropy (don’t allow “aaaaaaaaaaaaa”).
Don’t use password composing rules (at least one “!@#$%&”).
Don’t use password hints (rhymes with “assword”).
Don’t use knowledge-based authentication (“security” questions).
Don’t expire passwords without reason.
Don’t use SMS for two-factor authentication.
Use a password salt of 32-bits or more.
In a way, all these “don’ts” should make password validation far easier!

Use Access and Refresh Tokens
Modern stateless, RESTful APIs implement authentication with tokens. This eliminates the need to handle sessions and cookies on a now stateless server, and makes it really easy to debug network requests by simply utilising the Authorization header (or even an access_token query param).

Access Tokens
The access token is used for authenticating all future API requests, has a short life span and can’t be revoked\*.

“[..] one downside to [JWTs] is that you can’t revoke [them] before their expiry without making the authentication flow stateful in some way. If a user account is compromised, the attacker can’t be forcefully logged out. You just have to wait for the token to expire.” (source)
I write about a potential solution to this problem in this post here. (link)

\*However, JWTs can be revoked if the API expects a different “secret” for signing, however this would invalidate all currently issued tokens, but that shouldn’t matter too much considering they are intended to be short-lived.

Refresh Tokens
The refresh token is returned in the initial login response, but it is hashed and stored in the database with an expiry timestamp and relationship to the user. This acts as a long-life, password-like secret token, which can be used to request a new short-life JWT access tokens. Refresh tokens also extend their life every time they are used for renewal, meaning that a user doesn’t need to log in again if they continually use the service.

Logging In
In my implementation, a normal login process would look like:

Receive email and password through a /login endpoint.
Check the email and password hash against the database.
Create a new refresh token and JWT access token.
Return both.
Renewing a Token
And a normal renew auth flow would look like:

JWT has expired when attempting to create request from client.
Submit refresh token to a /renew token endpoint.
Check refresh token exists by matching hash against database.
On success, create new JWT access token and extend expiry timeout.
Return access token only.
Validating a Token
Validating a JWT access token is a matter of checking the expiry date and signature hash. If either don’t pass, it’s an invalid token.

However if it does pass, the payload of the JWT contains a uid which is used in the APIs response context to derive a corresponding user object to check permissions/roles, and appropriately create/read/update/delete data.

Terminating a Session
Because the refresh token is stored in the database, it can be deleted to effectively “terminate a session”. This provides an element of control for the user as they may wish to secure their account with control over their active refresh token “sessions”, and potentially with how often they wish to reauthenticate (by adjusting the behaviour behind the expiry timestamp).

Example Code
“[..] can you add examples for the authentication?” (source)
Coming up soon!

Keep JWTs Small
When serialising information into an JWT access token, keep it to the bare minimum, it’s nicer when authentication tokens aren’t super long, because they don’t have to be. Serialise only the uid (id) of the user if you can, the rest can be delivered by a GET /me endpoint.

It’s also worth noting that any sensitive information stored in a JWT payload is not inherently secure, because it is simply a base64 encoded string.

Use a Root-Level “Me” Endpoint
As a matter of preference /profile is cool too, but the general idea is the same; deliver the basic information about the user relevant to themselves.

I feel as though it may be nice to bundle information like personal settings in there too if that happens to be server-side data too.

However, I’ve seen implementations that feel rather messy in their own right, such as mixing a /users/:id endpoint that is supposed to accept integers and then allowing the string me to point to your own profile.

To me this needlessly challenges the size of your APIs “route-space” per se, where you should prefer to create less nested routes, and removing any ambiguity through mixing string and integer inputs.

Having /me accessible from the root makes accessing deeper levels of your personal information more consistent, in the way of /settings or even /billing information from /me, of which you wouldn’t typically have access to through users/:id/billing for any other user.

// not preferred
GET /v1/users/me
// preferred, shorter, no int/str mixing
GET /v1/me

## Avoid Operations on Nested Routes

In another project which was built afresh with a few of these design ideals, it fell into designing a URL system that became hard to work with.

```
// consistently long url
PATCH /v1/projects/:id/collections/:id/items/:id/attachments
```

Now this may seem practical if the intent was to POST a new attachment, however, if in developing the client-side application you wanted to do something as simple as “star” the attachment, you would need to rewrite supporting code for dispatching an action similar to this:

```js
const apiRoot = 'https://api.myservice.com/v1'
const starAttachment = (projectId, collectionId, itemId, attachmentId, starred) => {
  fetch(
    `${apiRoot}/projects/${projectId}/collections/${collectionId}/items/${itemId}/attachments/${attachmentId}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ starred }),
      // ...
    }
}
```

What I mean by supporting code would be this:

```js
import { starAttachment } from './actions/attachments.js'
class MyComponent extends React.Component {
  doStarAttachment = (id, starred) => {
    // now all the "boilerplate" for starring the attachment
    const { projectId, collectionsId, itemId } = this.props.entities.attachments[id]
    // now actually plugging in all that information
    starAttachment(projectId, collectionId, itemId, id, starred)
  }
  // ...
}
```

Wouldn’t it be nice if you could delegate the resolution of all meta data about the attachment (and even permissions of whether or not you can view/star an attachment) to the server, and just use a root-level endpoint?

```js
const apiRoot = 'https://api.myservice.com/v1'
const starAttachment = (id, starred) => {
  fetch(
    `${apiRoot}/attachments/${id}`,
    {
      method: 'PATCH',
      body: JSON.stringify({ starred }),
      // ...
    }
}

import { starAttachment } from './actions/attachments.js'
class MyComponent extends React.Component {
  doStarAttachment = (id, starred) => {
    // simple as, and you could even easily call it from a gallery-like list
    starAttachment(id, starred)
  }
  // ...
}
```

Overall, I think there are advantages to either method of reference, so there isn’t any reason why both can’t be implemented, although I’d like to make a distinction in preferring a longer path for creating/fetching nested resources, and a shorter path for updating/deleting them.

The reason I maintain for fetching is that a longer path provides a natural filter to the queried resources, without the need to tag on query parameters for general results in that collection.

This /projects/:id/collections is better than /collections?projectId=:id . And this /projects/:id/collections/:id/items is even better than /items?projectId=:id&collectionId=:id .

## Provide Pagination

Pagination is really important because you don’t want a simple request to be incredibly expensive if there are thousands of rows of results. It seems obvious, but many neglect this functionality.

There are multiple ways to do this:

“From” Parameter
Arguably the easiest to implement, where the API accepts a from query string parameter and then returns a limited number of results from that offset (commonly 20 results).

Also best to provide a limit parameter which has a hard-maximum, such as the case of Twitter, with a maximum of1000 and default limit of 200 .

Next Page Token
Google’s Places API returns a next_page_token in its responses if there is more information available beyond the limited 20 results per page. It then accepts pagetoken as a parameter for a new request which continues returning more results with a new next_page_token until it is exhausted.

Twitter does a similar thing instead using a param called next_cursor .

## Implement a “Health-Check” Endpoint

Through developing with AWS, it been necessary to provide a way to output a simple response that can indicate that the API instance is alive and does not need to be restarted. It’s also useful for easily checking what version of the API is on any machine at any time, without authentication.

GET /v1
// response - 200
{
"status": "running",
"version": "fdb1d5e"
}
I provide status and version (which refers to the git commit ref of the API at the time it was built). It’s also worth mentioning that this value is not derived from an active .git repo being bundled with the APIs container for EC2. Instead, it is read (and stored in memory) on initialisation from a version.txt file (which is generated from the build process), and defaults to **UNKNOWN** in case of a read error, or the file does not exist.

---

> These "RESTful API design tips" have nothing to do with REST. If the article was really about REST, the first tip would be define your media types, but in fact the article doesn't even mention media types at all. Please, stop using this term REST if you don't know what it means. It just creates more confusion.

Some other comments:

Version numbers are not necessary in RESTful URLs. Your resources are your resources, and what they represent doesn't change. If the representation changes, use a different media type, which can contain a version number. Version numbers are fine for non-RESTful APIs, of course.

Your example of a non-enveloped array is exploitable. OWASP recommends to always return JSON with an object on the outside.

"Everything should be serialised into JSON." Clearly this isn't true for "everything". For example, I have an API that returns CSV as one of its resources.

"If you’re expecting JSON from the server, be polite, and provide the server with JSON." This is protocol, not politeness. Use Content-Type to tell the server what you're giving it. Use Accept to tell it what you'll accept in response. If you really were doing REST, those types would be ones you've defined yourself, but since you're not, they'll probably just be generic ones like application/json.

"422 for when the requested information is okay, but invalid." I've no idea what "okay, but invalid" is supposed to mean, but regardless, 422 is a WebDAV extension that you won't find in RFC 7231. You want 400.

"401 for when an access token isn’t provided, or is invalid." If you're using HTTP authentication, since you must provide a WWW-Authenticate header in the response.

"200 for when everything is okay." 201 if a new resource was created in response to this request. 202 if the request was accepted, but will be processed asynchronously. 204 if you have no useful response entity (which is what your DELETE example above should have used instead of returning that redundant JSON entity -- it's a 2xx response, so you already know it's "OK").

"If the password field is too short, return a 422." Since RFC 7231, which obsoletes RFC 2616, you should use 400 for all of these. The restriction that is presumably causing you to make these distinctions is no longer there.

"If the email is already taken, return a 409." Hmm. I don't think this is right. 409 is supposed to be a response to "a conflict with the current state of the target resource" as opposed to a refusal to create a new resource. Stick with 400 for this one, I think. You have error tokens to distinguish between error types.

"Bundling the status seems useful too if you don’t want to introspect the response meta-data and conditionally add the key in if you ever need it." Lazy?

"Check for basic entropy (don’t allow “aaaaaaaaaaaaa”)." I'm not sure what exactly you're suggesting people do here. A password on its own doesn't have an entropy value. Entropy is a measure of the possible combinations of password. When passwords are truly random, 'aaaaaaaaaaaaa' is just as likely as 'rn%jk(dsj3jAF'.

"Modern stateless, RESTful APIs..." Stateless... RESTful... you do know what the S in REST stands for, right?

Use a slow-hashing function: bcrypt, scrypt of PBKDF2. Preferably scrypt. PBKDF2 is trivially parallelized.

"... mixing a /users/:id endpoint that is supposed to accept integers and then allowing the string me..." I don't a problem with this. The string "me" is unambiguously not an integer. Either /users/me or /me seems fine. Using it as a way to enforce authorization to access billing information seems like you don't trust your authorization mechanism, though.

"Avoid Operations on Nested Routes" There's only one distinction here that matters: are the resource IDs globally unique, or are they namespaced by another resource? In the former case, don't nest. In the latter, nest. Don't make decisions like this based on trivialities like how long the URL is, and don't avoid using query strings just because "pretty" URLs are trendy. (I've seen some awful APIs because of that last one.)

---
