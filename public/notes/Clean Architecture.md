---
tags: [architecture]
---

# Clean architecture

Ideas should be _easy to test_, should _not be UI Framework driven_, should _not be database driven_

Classical clean architecture outlines 4 layers: domain, application, adapters and infrastructure

## Domain layer

Contains _enterprise wide_ business logic: entities (objects with methods, custom data structures, functions),
types, enums, custom errors & exceptions

Code written in this layer is mostly using _vanilla_ language, no _UI_, no _database_, no _frameworks_,
is easy to test, rarely changes and does not depend on any other layer

Example: User entity, its type & errors, price convertation & format logic, date convertation & format logic

## Application layer

Contains _application-specific_ business logic: use cases, operations, commands / queries, interactors

Mostly written in _vanilla_ language, no _UI_, no _database_, no _frameworks_. Development of new features often starts from this layer

## Adapters layer

Contains _Adapters_ that convert data between the _application_ and _infrastructure_ layers

<!--
- MVC
  - Models
  - Views
  - Controllers
- Flux
  - Actions
  - Reducers
  - Container Components
- Presenters
- Gateways

## Application Logic

_React_

- Use Cases

### Examples

- Page Navigation

## Notes

- A lot of DTOs
- Adapters only
-->

## Infrastructure layer

Contains device logic, UI, rest API providers, database connections, storage connectors (in-memory, local storage, IndexedDB),
API Calls (Rest API, Apollo), various services (SMS Service, for example)

- [DDD, Hexagonal, Onion, Clean, CQRS, … How I put it all together](https://herbertograca.com/2017/11/16/explicit-architecture-01-ddd-hexagonal-onion-clean-cqrs-how-i-put-it-all-together)

<!--

При проектировании сервисов и систем очень важно обращать внимание на такие моменты:

  - Сервис нужно проектировать как систему, состоящую из гибких, независимых частей мало влияющих друг на друга. Например, выбор БД в качестве API должен быть как минимум серьезно обоснован, поскольку пронизывает всю систему и будет влиять почти на все в ней.
  - Выбор технологий для реализации должен быть обоснованным. Нельзя выбирать незнакомые или малознакомые технологии просто потому, что их кто-то уже использовал. Возможно, они не будут отвечать нашим требованиям
  - Проектируя любую часть системы нужно иметь ввиду, что то, что в принципе может сломаться, обязательно когда-нибудь сломается. Следует минимизировать ситуации, в которых систему придется поднимать руками
  - Сервис, для которого требуется обеспечить неопределенный уровень масштабируемости изначально должен проектироваться с расчетом на то, что когда-нибудь мощностей одной машины нам перестанет хватать. Нельзя рассчитывать, что нам "хватит одной машины"
  - Система не должна иметь одну точку отказа (например, одна БД, использующая Postgres foreign data wrappers в качестве гейтвея для доступа к данным на других серверах)

Для эффективного решения дизайнерских задач в области инфраструктуры следует хорошо представлять себе следующие вещи:

 - Принципы работы систем очередей вроде RabbitMQ (нюансы их работы, их основные отличия от реляционных СУБД, гарантии персистентности и средства обеспечения отказоустойчивости)
 - Механизмы синхронизации в условиях многопоточного доступа к одним и тем же данным в БД (например, в общем случае нельзя использовать уровни изоляции транзакций для установки блокировок в БД )
 - Гарантии персистентности для основных хранилищ (реляционные СУБД, например) и условия при которых они предоставляются
 - Как надежно решаются типовые задачи, используемые в большом количестве систем (например, очереди в Redis или БД)
 - Как собирать метрики таким образом, чтобы по ним можно было определить, какая именно проблема и в каком месте системы возникла. Нужно метрить все важные процессы, которые в системе происходят и понимать, какие именно метрики для них являются стандартными и какие отклонения свидетельствуют о наличии проблем

-->
