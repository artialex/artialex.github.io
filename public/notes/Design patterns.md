---
tags: [architecture]
---

# Design patterns

![[DesignPatterns.svg]]

http://gameprogrammingpatterns.com/contents.html

https://roadmap.sh/guides/design-patterns-for-humans

https://sourcemaking.com/design_patterns

https://github.com/addyosmani/essential-js-design-patterns
https://github.com/tcorral/Design-Patterns-in-Javascript
https://github.com/iluwatar/java-design-patterns
https://github.com/ochococo/Design-Patterns-In-Swift
https://github.com/faif/python-patterns
https://github.com/nslocum/design-patterns-in-ruby
https://github.com/domnikl/DesignPatternsPHP
https://github.com/karlpatrickespiritu/TLDR-Learning-JS-Design-Patterns-by-Addy-Osmani
https://github.com/robdodson/JavaScript-Design-Patterns
https://github.com/nnupoor/js_designpatterns

- [Sourcemaking](https://sourcemaking.com/)
- [Refactoring Guru](https://refactoring.guru)

* https://medium.com/@arturbasak/design-patterns-examples-in-javascript-creational-79812120f273

### Singleton

#### Cons

- [Почему синглтон — анти-паттерн?](http://rsdn.org/forum/design/2615563.1)
- [Why singletons are evil?](https://blogs.msdn.microsoft.com/scottdensmore/2004/05/25/why-singletons-are-evil/)
- [What is so bad about singletons?](https://stackoverflow.com/questions/137975/what-is-so-bad-about-singletons)

> singletons are the source of many problems that start in design and end in debugging

Главная проблема синглтона в том, что это первый паттерн описанный в GoF. На
него набрасываются и не замечают его недостатков, из коих:

##### Синглтон нарушает SRP (Single Responsibility Principle)

> Класс синглтона, помимо того чтобы выполнять свои непосредственные
> обязанности, занимается еще и контролированием количества своих экземпляров.

> Singletons allow you to limit creation of your objects. This is true, but now
> you are mixing two different responsibilities into the same class, which is a
> violation of the Single Responsibility Principle. A class should not care
> whether or not it is a singleton. It should be concerned with its business
> responsibilities only. If you want to limit the ability to instantiate some
> class, create a factory or builder object that encapsulates creation, and in
> there, limit creation as you wish. Now the responsibilities of creation are
> partitioned away from the responsibilities of the business entity.

##### Глобальное состояние

> Про вред глобальных переменных вроде бы уже все знают, но тут та же самая
> проблема. Когда мы получаем доступ к экземпляру класса, мы не знаем текущее
> состояние этого класса, и кто и когда его менял, и это состояние может быть
> вовсе не таким, как ожидается. Иными словами, корректность работы с синглтоном
> зависит от порядка обращений к нему, что вызывает неявную зависимость
> подсистем друг от друга и, как следствие, серьезно усложняет разработку.

> Singletons frequently are used to provide a global access point for some
> service. True, they do this, but at what cost? They provide a well-known point
> of access to some service in your application so that you don't have to pass
> around a reference to that service. How is that different from a global
> variable? (remember, globals are bad, right???) What ends up happening is that
> the dependencies in your design are hidden inside the code, and not visible by
> examining the interfaces of your classes and methods. You have to inspect the
> code to understand exactly what other objects your class uses. This is less
> clear than it could be. The urge to create something as a global to avoid
> passing it around is a smell in your design; it is not a feature of
> globals/singletons. If you examine your design more closely, you can almost
> always come up with a design that it is better and does not have to pass
> around tramp data to every object and method.

##### Тесное взаимодействие между классами

> Singletons promote tight coupling between classes. One of the underlying
> properties that makes code testable is that it is loosely coupled to its
> surroundings. This property allows you to substitute alternate implementations
> for collaborators during testing to achieve specific testing goals (think mock
> objects). Singletons tightly couple you to the exact type of the singleton
> object, removing the opportunity to use polymorphism to substitute an
> alternative. A better alternative, as discussed in the first point above, is
> to alter your design to allow you to pass references to objects to your
> classes and methods, which will reduce the coupling issues described above.

---

- https://refactoring.guru/

[[Patterns]]
