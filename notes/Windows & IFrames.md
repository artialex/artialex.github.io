---
tags: [fe]
---

# Windows & IFrames

## Окна

Попапы откравыются с помощью `window.open()`

```js
window.open('http://example.com')
```

Эти попапы могут менять свой URL и посылать сообщения окну

''Доступ к попапу из окна''

Должно соблюдаться //same origin policy//

```js
let popup = window.open('about:blank', 'hello', 'width=200;height=200')

popup.document.write("Hello, world!")
popup.onload = function () {
	// Do something
}
```

''Доступ к окну из попапа''

Делается с помощью `window.opener`

''Закрытие попапа''

Делается с помощью `window.close()`

''Доп. методы''

```js
window.moveBy()
window.moveTo()
window.resizeBy()
window.resizeTo()
window.scrollBy()
window.scrollTo()
```