# How would you rewrite this code

```js
function getVKWindowUrl(apiId, redirectURI) {
  const part1 = 'https://oauth.vk.com/authorize?client_id='
  const part2 = '&display=page&redirect_uri='
  const part3 = '&scope=email&response_type=token&v=5.103'

  return part1 + apiId + part2 + redirectURI + part3
}
```
