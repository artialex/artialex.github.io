# 12-factor application

# Кодовая база

Одна кодовая база, отслеживаемая в системе контроля версий, – множество развёртываний

Зависимости
Явно объявляйте и изолируйте зависимости

Конфигурация
Сохраняйте конфигурацию в среде выполнения

Сторонние службы (Backing Services)
Считайте сторонние службы (backing services) подключаемыми ресурсами

Сборка, релиз, выполнение
Строго разделяйте стадии сборки и выполнения

Процессы
Запускайте приложение как один или несколько процессов не сохраняющих внутреннее состояние (stateless)

Привязка портов (Port binding)
Экспортируйте сервисы через привязку портов

Параллелизм
Масштабируйте приложение с помощью процессов

Утилизируемость (Disposability)
Максимизируйте надёжность с помощью быстрого запуска и корректного завершения работы

Паритет разработки/работы приложения
Держите окружения разработки, промежуточного развёртывания (staging) и рабочего развёртывания (production) максимально похожими

Журналирование (Logs)
Рассматривайте журнал как поток событий

Задачи администрирования
Выполняйте задачи администрирования/управления с помощью разовых процессов



---

The Joel Test: 12 Steps to Better Code
Do you use source control?
Can you make a build in one step?
Do you make daily builds?
Do you have a bug database?
Do you fix bugs before writing new code?
Do you have an up-to-date schedule?
Do you have a spec?
Do programmers have quiet working conditions?
Do you use the best tools money can buy?
Do you have testers?
Do new candidates write code during their interview?
Do you do hallway usability testing?