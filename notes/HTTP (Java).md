HTTP (Java)

- #read [HTTP Specification](https://datatracker.ietf.org/doc/html/rfc2616)


Request

```bash
POST /boxes?color=red HTTP/1.1    # Method + Path & Query params + Version

host: www.example.com             # Headers
accept: application/json
content-type: application/json

{                                 # Response Body (ex: JSON)
	"size": "small"
}
```

Response

```bash
HTTP/1.1 200 OK                   # HTTP Version + Status code + Reason Phrase

etag: "511GaciaHb28"              # Headers
content-length: 23
content-type: application/json

{				                  # Response Body (ex: JSON)
	"success": true
}
```

[[HTTP Headers]]
