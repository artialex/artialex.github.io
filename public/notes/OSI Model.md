---
tags: [networking]
---

# OSI Model

_OSI model abstractions often leak_

## 1. Physical layer

First layer of OSI model

<!--
- Имеет дело с **передачей потока битов** по **физическим каналам связи** - коаксиал, витая пара, оптоволокно.
- **Не вникает в смысл информации, которую передает.** Для него информация - это поток битов, которые нужно доставить без искажений и потери синхронизации
-->

For this layer Information is _a stream of bits_ that needs to be delivered without distortions

Electricity, wires, connectors, frequencies, Wi-Fi

# 2. Data link layer

Second level of OSI model

<!--
- Отвечает за ''доставку фреймов между устройствами'', подключенных к одному сетевому сегменту, например [[Ethernet Packet & Frame|фреймов стандарта Ethernet]]
  \*\* Фреймы передаются последовательно, с возможной ''обработкой фреймов подтверждения''
- Может использоваться для обнаружения и исправления ошибок, возникших на первом ([[Physical Layer|физический]]) уровне
- На этом уровне работают коммутаторы, мосты
- В сетевом программировании доступ к этому уровню предоставляет драйвер сетевой карты
-->

Ethernet, frames

## 3. Network layer

Network tools

## 4. Transport layer

TCP, UDP, ports

## 5. Session layer

## 6. Presentation layer

## 7. Application layer
