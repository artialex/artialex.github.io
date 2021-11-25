---
tags: [networking, index]
---

# Networking

<!--
- Как работает интернет?
- Как работает HTTP?
* [[IP-адрес]]
-->

- [[OSI Model]]
- [[DNS]]ак
- [[MAC-address]]
- [[Network Protocols]]
- [[Sockets]]

- [[Wires]]
 
 - [[NAT]]
- [[Time To Live]] (TTL)
- [[Port]]

<!--
* Порт
* Packet Analysis
* Routing Protocols

## Протоколы

IP-адреса соспостовляются с MAC-адресами

ARP (Address Resolution Protocol) --- протокол, который используется для нахождения адреса канального уровня, например MAC-адреса, который ассоциирован с IP-адресом

Стек --- это часть памяти


Вопросы

- [[Как работает интернет?]]
- Что такое пакеты и фреймы?
- [[Как устроен сетевой пакет?]]
- Что такое сокет

https://roadmap.sh/guides/what-is-internet

[[Как работает браузер?]]

https://eater.net/inet

 ### Network Signal Encoding
 Преобразование данных в цифровой сигнал сигнал. Кодировка обрабатывается сетевой картой (Network Interface Card, NIC), память которой содержит [[MAC Address]]

 Сетевые сообщения могут быть двух видов - [[Frame|фреймы]] и [[Network Packet|пакеты]]
 
 ![[Frame]]
 ![[Network Packet]]
 -->

- [[Local Area Network]]
- [[Wide Area Network]]

## LAN & WAN. Hubs, switches & routers

Hubs and switches work in _Local Area Networks_ (LAN, Intranet)

Routers allow to connect LANs to the global _Wide Area Network_ (WAN, Internet)

<!--

- https://github.com/EbookFoundation/free-programming-books/blob/master/free-programming-books.md#networking
- Компьютерные сети. Нисходящий подход. (Куроуз, Росс) 📖
- Компьютерные сети. (Танненбаум) 📖
  
-->

# Как устроен сетевой пакет

- [[MAC-address]]
- [[IP-address]]
- ID, Error Checking Code
- Payload

[[TLS]]
