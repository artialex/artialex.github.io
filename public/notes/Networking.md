---
tags: [networking, index]
---

# Networking

[[OSI Model]]

<!--

IP-address

MAC-address is a _unique identifier of a network card_, in 6-byte format, e.g. `0f:2b:5d:e7:a3:eb`

IP-addresses are conformed to MAC-addresses. ARP (Address Resolution Protocol) is a protocol used for that

Network Protocols are [[HTTP]], [[TCP]], [[UDP]], DNS, [[TLS]], IP, TCP, [[UDP]], ICMP, ARP, BGP, Ethernet

DNS is Domain Name System. Domain name

- [DNS in one picture](https://roadmap.sh/guides/dns-in-one-picture)

## Questions

- How internet works? https://roadmap.sh/guides/what-is-internet
- How browser works?
- How HTTP works?
- What is a port?
- What does network packet work? What are network frames?
- What are sockets?
- What is NAT?
- What is a latency?
- What is a ping?
- What is a TTL (time-to-live)?

_Round Trip Time_ is time spent on sending the signal + time spent on acknowledgement that signal was received

- Packet Analysis
- Routing Protocols

[[Wires]]

https://eater.net/inet

## Network Signal Encoding

Network messages can be of two kinds: _frames_ and _packets_

## LAN & WAN. Hubs, switches & routers

Hubs and switches work in _Local Area Networks_ (LAN, Intranet)

Routers allow connecting LANs to the global _Wide Area Network_ (WAN, Internet)

[[How browser works]]

Преобразование данных в цифровой сигнал сигнал. Кодировка обрабатывается сетевой картой (Network Interface Card, NIC), память которой содержит [[MAC Address]]

Сетевые сообщения могут быть двух видов - [[Frame|фреймы]] и [[Network Packet|пакеты]]


# TLS

Stands for **T**ransport **L**ayer **S**ecurity 

TLS is a cryptographic security protocol

TLS is the successor of the previous realization, SSL (Secure Sockets Layer)


# UDP

User Datagram Protocol

Протокол транспортного<sup>4</sup> уровня. Позволяет посылать сообщения без
установки специальных каналов передачи и не имеет механизмов
гарантированной доставки пакетов

### Notes

- Used for real-time data that is not required receive confirmation like streaming audio and video


-->


