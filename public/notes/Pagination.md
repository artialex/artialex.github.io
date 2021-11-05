**Request**

- `$offset`, `$limit` (`$skip`, `$top`)
- `$page`, `$size`

Offset-based

```js
GET /notes // offset = 0, limit = 10
GET /notes?offset=1560 // limit = 10
GET /notes?offset=1560&limit=20
```

```json5
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

```json5
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
