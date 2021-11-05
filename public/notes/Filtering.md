```js
GET /notes?where={"author_id":45}
GET /notes?created_at[after]=22-05-2021
GET /notes?created_at[between]=22-05-2021
GET /notes?created_at[before]=22-05-2021
GET /notes?created_at=before:22-05-2021
GET /notes?created_at=after:22-05-2021

GET /notes?$filter=created_at gt '22-05-2021' and created_at lt '23-05-2021'
```