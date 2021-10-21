# JavaScript

- [[JavaScript Types|Types]]
- [[JavaScript Arrays|Arrays]]

<!-- Map, Set, WeakMap, WeakSet -->
<!-- [[JavaScript Functions|Functions]] -->


* [[How browser works]]


Everything in JavaScript acts like an object, except for `null` and `undefined`

<!--## [[JavaScript Modules|Modules]]-->

<!--
## Asynchronicity

- [[Event loop]]
- [[Promises]]
- Timers
-->
<!--

#### So, now, we have 5 ways of controlling code flow:

1.  **Vanilla**. Lots of callbacks. Poor error handling.
1.  **Promises**. Reduces nesting. Separates success and error callbacks.
1.  **Rx Observables**. Promises with more chaining. Looks more familiar to
    functional programmers.
1.  **Fibers**. Linearizes callbacks. Only works server-side in Node. Meteor and
    others took this approach. This basically allows you to write async code as
    if it were synchronous. I couldn't figure out how they worked until I just
    now when I realized it's actually a C extension.
1.  **ES6 generators & async/await**. Like fibers. Works in Node 0.11 w/ special
    flag. Might work in Firefox. Should be supported by all browsers eventually.
    Supported now through an ES6 transpiler/shim which probably introduces
    significant overhead to make work. Good error handling.
	
-->

## [[Streams (Node)]]


## Performance

<!--
## Visualization

- [Seeing circles, sines, and signals](https://jackschaedler.github.io/circles-sines-signals/index.html)
- http://rokotyan.com/dataviz/
- https://bl.ocks.org/
- https://c82.net/
- https://bost.ocks.org/mike/algorithms/
-->


<!--

## Browser

### Repaint

- https://gist.github.com/paulirish/5d52fb081b3570c81e3a
-->

<!--- [The Nature of Code](https://natureofcode.com)-->

<!--
https://itnext.io/make-services-a-natural-prt-of-redux-architecture-8a78b6a4b961

https://redux.js.org/introduction/learning-resources

### Преимущества

- **Unidirectional data flow**
- **Separation of concerns**
- **Declarative programming**
- [[React]]

## Redux
- [Docs](https://redux.js.org/)
- [Style Guide](https://redux.js.org/style-guide/style-guide#introduction)
https://github.com/markerikson/react-redux-links/blob/master/basic-concepts.md
https://dev.to/davidkpiano/redux-is-half-of-a-pattern-1-2-1hd7

https://frontendmasters.com/books/front-end-handbook/2019/#1

https://exploringjs.com/impatient-js/toc.html
https://exploringjs.com/deep-js/toc.html

https://web.archive.org/web/20181215200026/http://apress.jensimmons.com/v5/pro-html5-programming/ch0.html

https://github.com/getify/Functional-Light-JS

http://largescalejs.ru/

https://github.com/MostlyAdequate/mostly-adequate-guide
http://thenodeway.io/introduction/#build-small-single-purpose-modules

https://nikhilm.github.io/uvbook/
http://book.mixu.net/node/
https://nodejs.org/en/docs/

https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/

---
### Links
* [Ecmascript Language Types](https://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)

---


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

-->

---

## Books

- [You don't know JS](https://github.com/getify/You-Dont-Know-JS)
- [learn.javascript.ru](http://learn.javascript.ru/)

<!--
- [Javascript Garden](http://shamansir.github.io/JavaScript-Garden/)
- [MDN](https://developer.mozilla.org/en-US/)
- [JavaScript The Right Way](|http://jstherightway.org/)
- [Eloquent JavaScript](http://eloquentjavascript.net/)
- [SuperHero.js](http://superherojs.com/)


https://itnext.io/nodejs-logging-made-right-117a19e8b4ce


-->