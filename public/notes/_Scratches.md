# Дух

### Мысли

- Во время отпуска ощущение отдыха приходит только начиная с 3 недели
- Эффект Земмельвайса
- Не бывает junior, middle и senior программистов
- Почему этих градаций три?
- Почему ищут middle программистов?
- Как происходит внезапный переход из одного состояния в другое?
- Как senior апгрейдится до architect'а?
- **Эффект накопления** слабых сотрудников в организации

---

Команда делает или новый проект на известном стеке технологий, или команда
делает типовой проект на новом стеке технологий. Это не всегда удаётся. Но даже
в этом случае полезно разделить команду на две — одна будет пилить новые
технологии (если старые по каким-то причинам не подходят), другая — новый проект
на старых (но консультируясь иногда с первой командой, чтобы в момент, когда
новые технологии будут готовы не пришлось всё выкинуть к чертям собачьим).

---

- Cognitive Illusions
- https://habrahabr.ru/post/337048/
- https://habrahabr.ru/post/336490/

### Что не влияет на производительность

Исследуя результаты состязаний, мы обнаружили, что следующие факторы слабо
влияли на производительность или не влияли вовсе:

- **Язык:** Разработчики, использовавшие старые языки, такие как COBOL или
  Fortran, выполняли задание не хуже тех, кто писал на Pascal и С. Внутри каждой
  языковой группы распределение производительности было таким же, как в целом по
  выборке. Единственным исключением из этого наблюдения стал язык ассемблера:
  участники, писавшие на ассемблере, сильно отстали от всех остальных языковых
  групп. (Впрочем, люди, пишущие на ассемблере, привыкли к такому положению
  вещей.)

- **Опыт:** Люди с десятилетним опытом не превосходили по производительности
  тех, у кого опыта было всего два года. Опыт и производительность никак не
  коррелировали, разве что люди, менее шести месяцев имевшие дело с языком,
  работали не так эффективно, как другие участники.

- **Количество недочётов:** Около трети участников выполняли упражнение с
  нулевым количеством недочётов. В целом не было отмечено снижения
  производительности из-за более высокой точности работы. (Более того, в среднем
  эта треть участников выполняла задание быстрее, чем участники, допускавшие
  недочёты.)

- **Зарплата:** Уровень зарплаты достаточно сильно варьировался для выборки.
  Между зарплатой и производительностью наблюдалась весьма слабая связь. Лучшая
  половина получала на десять процентов больше худшей, но работала почти в два
  раза эффективнее. Распределение производительности для любого уровня зарплаты
  было примерно таким же, как для выборки в целом.

Опять же ничего удивительного, поскольку большинство таких особенностей
отмечалось ранее. Немного более удивительными были факторы, которые, как мы
выяснили, на производительность влияли.

### Eric Elliot

https://medium.com/@_ericelliott/when-does-class-inheritance-make-more-sense-349ffd247bef

> Is-a relationships don’t accurately model the things we need to model. What we
> usually need are has-a, uses-a, or can-do relationships, instead.

#### Agile

Манифест гибкой разработки программного обеспечения (http://agilemanifesto.org)
появился более 15 лет назад. О "Agile" стали говорить на конференциях, выбросив
из гибкой разработки все ее ценности и принципы кроме одного “Deliver working
software frequently, from a couple of weeks to a couple of months, with a
preference to the shorter timescale”. Сейчас слово “Agile” можно встретить в
вакансиях практически каждой компании. Эти компании все также продолжают
работать по водопаду, сохраняя развесистую иерархию, планируя и проектируя
наперед и перебрасывая задачи из одного отдела в другой, но с более короткими
итерациями."Agile” организации схватились за инструмент в виде коротких
итераций, сохранив привычные процессы, а значит продолжают ценить процессы и
инструменты больше, чем людей и их взаимодействие. То есть не принимают первую
ценность гибкой разработки “Individuals and interactions over processes and
tools”.

Принципы, следующие из первой ценности, которые разделяет автор статьи, но не
организации, описанные выше: "Business people and developers must work together
daily throughout the project”, “Build projects around motivated individuals.
Give them the environment and support they need, and trust them to get the job
done”. Невозможно совмещать несколько ролей в организации, которая ценит
фиксированные роли и четкое разделение обязанностей. Невозможно добиться доверия
там, где ценится сокрытие реального положения дел. Невозможно следовать любым
принципам, которые основываются на ценностях, отличных от действительных
ценностей организации.

В конечном итоге, настоящие ценности — это самое важное, что есть в организации.
Все остальное: используемые технологии, процесс принятия решений, способы
коммуникации и постановки задачи, организационная структура и прочее, вытекают
из ценностей. Автору статьи, видимо, не удавалось понять ценности организации во
время собеседований. Мне тоже еще ни разу не удавалось их понять. Хабравчане,
есть ли у вас подходы к выяснению настоящих ценностей компании во время
собеседований?

Весь интерес строится на основе достижений - успех не надо заедать едой

### Анти-паттерны в работе

##### Офисный пинг-понг

Самая распространенная – «это не я, а Вася/Зина/Марьиванна», когда всплыл какой-то косяк. Другая вариация - когда нужно принять важное решение, а за последствия отвечать не хочется, – «это не мой участок», «это не мой вопрос». И посыл к коллеге, а от того – к другому… Такой вот офисный пинпонг. Или просто потянуть время – авось, само как-нибудь рассосется. Высший пилотаж – когда все делается с указки начальства, но если поймали на этом, тот же начальник открестится от всего, устроит «показательное расследование» и публично пожурит «проштрафившегося» исполнителя.

##### Школьные отговорки

«Я болел/уезжал/был сильно занят/улетал на Марс…». Когда есть сроки, договоренности, но они не выполняются, человек становится школьником и придумывает такие вот детские отговорки. Звучит особенно смешно в наш век информационных технологий, когда связь есть практически в любом уголке планеты. А ты уезжал в командировку и не мог хотя бы написать… Хотя да, на Марсе интернета пока нет;)

##### Молчанка

Просто не отвечать днями и неделями на письма даже внешних контрагентов. В цивилизованных странах есть правило: в деловой переписке считается моветоном не отреагировать на письмо в течение суток, потом с тобой просто не захотят дальше иметь дел. У нас нет – можем вообще не отвечать, можем через месяц. И плевать мы хотели на пункты договора и еще три сообщения от того же человека, так как сроки горят. Надоест – сам отстанет. И даже если какой-то информации пока не хватает для ответа, что мешает просто написать об этом, а не играть в молчанку? Ну, нет, мы же важные, куда там!

##### «Шаг вперед, 2 шага назад»

«Шаг вперед, 2 шага назад» в серьезных переговорах. Таким образом многие пытаются сделать вид, что их заинтересованность в этом вопросе меньше… То есть сначала проявить инициативу, попросить о чем-то, ведь нужно-то на самом деле им, а затем взять и отморозиться, тем самым вынуждая другую сторону активничать и заранее соглашаться на уступки. Или тянуть с подписанием договора до последнего, чтобы потом в спешке добиться для себя более выгодных условий. Смешно, право, и шито белыми нитками для понимающих эти манипуляции людей.

##### Loudest guy

Создавать видимость бурной деятельности со стороны сотрудника, ставя в копию начальника в электронной переписке по всем мелким вопросам. При этом можно откровенно портачить, что-то забывать, уходить от ответа в важных вещах, но пытаться представить виновной другую сторону, подлавливая ее на мелких недочетах. И если поймал – тут же босса в копию, чтоб знал, какой он молодец и какой другой - лох. Близко к этому – выдавать чужие заслуги за свои. И регулярно бегать докладывать о них, когда настоящему исполнителю это делать просто претит.

Перебрасывать на профильных специалистов свою часть мелких задач. Особенно, если эти специалисты - новички в компании. Тогда можно быстренько подсуетиться и поменять правила игры в свою пользу. Спросите, а что тут такого, раз пришел нужный и грамотный в этом деле человек? Да, в общем-то, ничего страшного, за исключением того, что его взяли под выполнение более серьезных задач, на которые его просто не хватит, если все начнут грузить его своими второстепенными, которые всегда выполняли сами. На примерах. Дизайнера сотрудники АХЧ просят нарисовать объявление в туалет или комнату для питания персонала с просьбой соблюдать чистоту. Или новенькому бухгалтеру менеджер по продажам поручает готовить счета для клиентов, когда это вменено в обязанности последнему. Это все - как копать детскую площадку экскаватором: дорого и неэффективно. Но зачем ему думать об эффективности в целом, когда у него есть свой узкоместечковый интерес?

#### Не делиться информацией

Замыкать на себе информационные потоки компании, ключевых партнеров и клиентов. Тем самым придавая себе дополнительную важность и вынуждая коллег ходить на поклон. А он по настроению может соизволить, а может и нет. Такой человек обычно обладает пусть небольшой, но властью в организации, и очень активно сопротивляется любому развитию - формализации бизнес-процессов, автоматизации процедур, созданию базы знаний и так далее. И дело тут не только в обычной склонности большинства людей бояться перемен - "как бы не стало хуже". Нет, наш товарищ прекрасно понимает, что все это может лишить его того веса, что он приобрел ценой неимоверных усилий;), эксклюзивного права владеть информацией и самое главное - высветить его личную низкую эффективность. А там ведь, глядишь, и вообще могут усомниться в его необходимости для бизнеса. Опасно.

миграция разработчиков из проекта в проект

## Делать что нибудь каждый день

- Иконки 365
- Фоткаться со знаком

Time
If money doesn't work, invest time to research existing pieces of functionality that do. As I have said before, basic Unix literacy can help you know what tools are available to solve a given problem. For systems design, it helps to know what larger services are available for different classes of problems. To name a few:

Load balancing/redundancy: HAProxy
Caching: Squid, Varnish (not Memcache because it forces you to write too much code)
Database: PostgreSQL or Oracle if you can afford it. If you're using a NoSQL database, you fucked up somewhere.
Database replication: Slony-I
Full-text search: PostgreSQL, Solr (warning: if you use Solr the way I think you will, you will have multiple points of truth in your system)
Queueing: if you're using a queue, again, you fucked up somewhere.
Logging: syslog, and nothing else. Ever.

https://proglib.io/p/how-to-learn-math/

https://info.stylee32.net/Advice/Success%20Advice/Guide%20to%20Success.jpg

## [Sandi Metz - What Makes Developers Unhappy](https://www.youtube.com/watch?v=1q7gKoNI9mY)

**Persuasion** is a problem.

### R. Cialdini

He clarifies these _weapons of influence_:

- **Reciprocity**: i give you, you give me.
- **Consistency**: you promised this.
- **Social Proof** : we do what society approves.
- **Authority**: given authority & expert authority
- **Liking**: if people like you, they will do what you want
- **Scarcity**: if deficit

Those are virtually undetectable

### D. Carnegie

- Make people like you
  - Become interesting in people
  - Smile
  - Remember that a person's name is (to that person) the sweetest and most important sound (in any language)
  - Be a good listener
  - Talk in terms of other person's interests
  - Make the other person feel important - and do it sincerely
- Handling people
  - Don't critisize, condemn or complain
  - Give honest and sincere appreciation
  - Arouse in the other person an eager want
- Win people to your way of thinking
  - The only way to get the best of an argument is to avoid it
  - Show respect for the other person's opinions (Don't say "You're wrong")
  - If you are wrong admit it quickly and emphatically
  - Begin in a friendly way
  - Get the other person saying "Yes, yes" immediately
  - Let the other person do a great deal of the talking
  - Let the other person feel that the idea is theirs
  - Try honestly to see things from the other person's POV
  - Be sympathetic with the other person's ideas and desires
  - Appeal to the nobler motives
  - Dramatize your ideas
  - Throw down a challenge
- Be a leader
  - Begin with praise and honest appreciation
  - Call attention to people's mistakes indirectly
  - Talk about your own mistakes before critisizing the other person
  - Ask questions instead of giving direct orders
  - Let the other person save face
  - Praise the slightest improvement
  - Give the other person a fine reputation to live up to
  - Use encouragement
  - Make the other person happy (about doing the thing you suggest)

One-line synopsis of Carnegie: Act as if others are interesting and you will eventually find them so

But _how do you know that you are right?_ We don't have _facts_, we have _opinions_

After money people look for: **Autonomy**, **Mastery** and **Purpose**. BTW these things perfectly describe OSS
What matters and what makes a _team_ is how teammates _treat each other_.

- They speak in roughly same proportion
- They have _psychological safety_

## [Pascal de Vink - Things I Was Unprepared For As A Lead Developer](https://www.youtube.com/watch?v=AwuqJ1qORag)

- Saying NO
- Delegating
- Culture

CEO and CTO
https://habrahabr.ru/post/350988/

https://neprivet.ru/
