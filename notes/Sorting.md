```js
GET /notes?sort=[author_id,created_at]
GET /notes?sort=author_id,created_at
GET /notes?sort=[("author_id","asc"),("created_at","desc")]
GET /notes?sort=author_id:asc,created_at:desc
GET /notes?sort=author_id:asc,created_at:desc

GET /notes?$sort=author_id asc,created_at desc
```