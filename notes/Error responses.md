---
tags: []
---

# Error responses

Error responses should be unified across the application


401 - Unauthorized

403 - Forbidden

405 - Method Not Allowed
406 - Not Acceptable
429 - Too Many Requests

500



Error Response

Recoverable

Non-recoverable

Example from Microsoft style guide

```json5
{
	"error": {
    	"code": "BadArgument",
    	"message": "Previous passwords may not be reused",
    	"target": "password",
    	"innererror": {
      		"code": "PasswordError",
      		"innererror": {
        		"code": "PasswordDoesNotMeetPolicy",
        		"minLength": "6",
    	    	"maxLength": "64",
	        	"characterTypes": ["lowerCase","upperCase","number","symbol"],
        		"minDistinctCharacterTypes": "2",
        		"innererror": {
          			"code": "PasswordReuseNotAllowed"
				}
      		}
    	}
  	}
}
```

```json5
{
	"error": {
		"code": "BadArgument",
		"message": "Multiple errors in ContactInfo data",
		"target": "ContactInfo",
		"details": [
			{
				"code": "NullValue",
				"target": "PhoneNumber",
				"message": "Phone number must not be null"
			},
			{
				"code": "NullValue",
				"target": "LastName",
				"message": "Last name must not be null"
			},
			{
				"code": "MalformedValue",
				"target": "Address",
				"message": "Address is not valid"
			}
		]
	}
}
```
