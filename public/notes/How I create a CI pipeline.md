# How I create a CI pipeline

## Simple pipeline

Useful for simple packages

1. Pre-Build
2. Build
3. Test
4. Publish

## More advanced pipeline

Small applications

Danger

## Complex pipeline

Create Image


<!--
Как я работаю с пайплайнами

Стадии пайплайна:

- pre-build (lint)
- build
- test
- publish
- pre-deploy
- deploy
- e2e
- post-deploy
- close

1. Разработчик создает ветку от **master**
   - Ведет в ней разработку
2. От **master** вручную создается ветка **release/\*.\*.\***
3. вручную в нее сливаются ветки разработки готовые к выпуску и выполняется push в репозиторий
4. После того как релизная ветка протестирована и готова к выпуску нажимается кнопка "ready to prod" (релизный пайплайн)
5. Ответственный за выкладку жмет кнопку "production" на этапе "deploy" (пайплайн тэга)
6. После того как выкладка прошла успешно и ответственный убедился, что все в порядке, он жмет кнопку "close release" (пайплайн тэга)
7. После того как релизная ветка слита в мастер, запускается пайплайн для мастера. Происходит автоматический деплой мастера на стейджинг и переключение роута по умолчанию на master.

Возможности:

- деплой на development/staging нескольких веток (с возможностью переключения маршрута по умолчанию)
- деплой на development/staging одной ветки, при наличии переменной `SINGLE_DEPLOY`
- автоматический мерж свежего мастера в релизы/хотфиксы (при запуске пайплайнов для них)
- автоматическое проставление тэгов
- автоматический merge в master при выпуске в production
- автоматическое управление релизами в Jira (создание/закрытие, установка fix version для issues)
- отправка в слэк о событиях деплоя и release-notes

Обратите внимание:

- если master не является веткой по умолчанию и не protected, то будет удален после мержа в ветку поумолчанию и вызова 'deleted merged branches'.

## Виды цепочек

_feature branch_
**Build:**

- _build -_ сборка, подготовка кода к упаковке в docker (шаг добавляется командой разработки)
- _helm check -_ проверяет файлы values на валидность (необязательный шаг)

**Publish:**

- _create image_ - сборка и публикация docker образа в реестр

**Deploy:**

- _development_
  - проверка остутствия параллельных деплоев
  - проверка доступных квот на namespace в кластере перед деплоем
  - деплой в development среду, не обязательный для pipeline. Cервис будет доступен по NAME-BRANCH.NAMESPACE.dev.s.cats.ru
  - оповещение в слек-канал указанный в переменной SLACK_CHANNEL_DEV

**Close:**

- _close development -_ удаление деплоя текущей ветки со стенда. Выполняется автоматически после удаление ветки или после нажатия кнопки, так же можно останавливать со страницы environments
- development switch - переключение дефолтного маршрута на эту ветку. После переключение сервис будет доступен по NAME.NAMESPACE.dev.s.o3.ru

## Хотфикс или релиз

_Hotfix/release branch `^(release|hotfix)\/.+$`_

---

**Pre-build:**

- _create release_
  - создание merge request в мастер
  - создание релиза в Jira (если не существует, берется $JIRA_VERSION_PREFIX/$IMAGE_TAG)
  - добавление issue (Jira) в релиз, указание fix version (номера берутся из комментариев к коммитам)
- _merge master -_ проверяется есть ли свежий мастер, если есть то:
  - мастер мержится в ветку
  - запускается новый пайплайн
  - текущий пайплайн останавливается

**Build:**

- _build -_ см. выше
- _helm check -_ см. выше

**Publish:**

- _create image_ - см. выше

**Deploy:**

- _staging_
  - проверка остутствия параллельных деплоев
  - проверка доступных квот на namespace в кластере перед деплоем
  - деплой в staging среду. Cервис будет доступен по NAME-BRANCH.NAMESPACE.stg.s.cats.ru
  - оповещение в слек-канал указанный в переменной SLACK_CHANNEL_STG

**Close:**

- _ready to prod_

  - merge master: см. выше
  - установка тега (IMAGE_TAG), при установке тега запускается следующий пайплайн
  - оповещение в SLACK_CHANNEL_PROD

  IMAGE_TAG = части названии ветки после "/", например для "release/1.0.0" возбмется как 1.0.0

  JIRA_VERSION_PREFIX = указывается в variables

- _staging clean -_ аналогично clean development
- _development switch - переключение дефолтного маршрута на эту ветку. После переключение сервис будет доступен по NAME.NAMESPACE.stg.s.o3.ru_

## Тэг

_Hotfix/release branch_

---

**Publish:**

- _release image_
  - docker образ ветки помечается как релизный, копируется в \$CI_REGISTRY_IMAGE/release

**Deploy:**

- _production_
  - проверка остутствия параллельных деплоев
  - проверка доступных квот на namespace в кластере перед деплоем
  - деплой на production. Cервис будет доступен по NAME-BRANCH.NAMESPACE.prod.s.cats.ru
  - оповещение в слек-канал указанный в переменной SLACK_CHANNEL_PROD
  - образ докера помечается как latest

**Close:**

- _close relese_
  - мерж в мастер
  - закрытие релиза в JIRA
  - оповещение в слек-канал указанный в переменной SLACK_CHANNEL_PROD

## Ветка мастера

_`master` branch_

---

**Build:**

- _build:_ см. выше
- _helm check:_ см. выше

**Publish:**

- _create image:_ см. выше

**Deploy:**

- _development:_ см. выше
- _staging latest:_ деплой в staging среду докер образа помеченного на шаге "release image" как latest, если такой не существует, то возьмется master

**Close:**

- _delete merged branches:_ вызывает кнопку Repository → Branches → Delete merged branches, которая обеспечивает удаление смерженных веток в основную (по умолчанию - master)
- _development switch:_ см. выше
- _staging latest switch:_ аналогично "staging switch", переключение дефолтного маршрута на latest
-->