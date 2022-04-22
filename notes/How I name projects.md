---
tags: [guide, wip, naming]
---

# How I name projects

Firstly, to avoid bike-shedding I have a [[Common Sense Style Guide]]

- I use `kebab-case` for names
- I use prefixes if it's a company project:
	- `app-*` for applications
	- `config-*` for config packages
	- `lib-*` for libraries

<!--


- ***
- \*\*
  _-api
  _-monitoring
  _-client
  _-processor

### Использовать **kebab-case**

| Good            | Bad                             |
| --------------- | ------------------------------- |
| `url-shortener` | `url_shortener`, `UrlShortener` |

### Использовать минимум значимых слов

Возможно все-таки имеет смысл использовать вспомогательные слова:

`*-api`, `*-daemon`, `*-tests`,

_Правильно:_

- **url-shortener**

_Не правильно:_

- **url-shortener-api**
- **url-shortener-service**

## Use REST or RPC for external communications

## USE only RPC for internal communications

## Each service may present a client library

This library should not have any business logic

# Date Time Format

- Should use RFC 3339
  - DateTime: `1970-01-01T12:00:00.234+00:00`
  - Date only: `1970-01-01`

## Must endpoints

- Live check: `/live`
- Version check : `/version`, json with fields `gitRevision`, `gitSummary`, `languageName`, `languageVersion`, `appName`, `appVersion`, `buildAt`, `startedAt`
- Swagger docs : `/docs`
- Prometheus metrics : `/metrics`
-->
