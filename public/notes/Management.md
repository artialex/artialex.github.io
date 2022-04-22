---
tags: [management, wip]
---

# Management

One can see on the management from different points of view

Widely speaking, management is a way to achieve some *output* from an *input* via some *process*

$$
Input \xrightarrow{Process} Output
$$


[[Management mental model by Oleg Soroka]]

<!--
Examples:

$$
Customer \ Needs \xrightarrow{Development} Value \\
Produced \ Value \xrightarrow{Feedback} New \ Input \\
Produced \ Value \xrightarrow{Feedback} New \ Process \\
$$
-->

## Who has to be considered a manager?

A manager is anyone who is responsible for *organizing the process of producing value*. Examples: Product owner, Team Lead, Tech Lead, Head of Development, CTO, CPO, etc...

## Development process

- *Team* is the unit of people that work on a task
- *Environment* is the chaotic society & changing entropy surrounding the *team*


Development process is based on an *input*, produces *output* and is constantly improving via *feedback* loop

$$
\BA
	Input & \xrightarrow{Process} Output \\
	Output & \xrightarrow{Feedback} New \ Input \\
	Output & \xrightarrow{Feedback} New \ Process \\
\EA
$$

- *Input* is: task needs to be one, pain needs to be solve, the customer needs
- *Process* is the way of transforming an *input* to an *output*
- *Output* is a desired result of the *process*
- *Feedback* is needed to improve the *process*

Anomaly: *No feedback*. 
In this case the *process* never changes, even if there are new tools on a market


$$
\def\arraystretch{1.5}\begin{array}{ccc}
   Input & \times & Process & \to & Output \\ 
\end{array}
$$


Anomaly: *No Input*.
In this case the *output* is not based on someone's needs. This happens when the team is deaf to *environment*

$$
\def\arraystretch{1.5}\begin{array}{cc}
   Process & \to & Output \\ 
\end{array}
$$

Anomaly: *Imbalance*. What if the team focuses more on an *input* than on other parts? It leads to losing focus on the other parts

- Example: Focus on the backend, when frontend is of low quality

Understanding of this basic block leads to understanding things like:
- Development Flow
- PERT

* Technical things: Hardware, Software
* Non-technical: People, their interaction

## Artifacts

- *Input*: Design thinking sessions, product vision notes
- *Process*: Task Tracker, scrum/kanban boards
- *Output*: Release schedule, commit log, 
- *Feedback*: Retrospective sessions, application logs

* Note: Output is based on a *input* and *process*

---

- [[About feedback]]
- [[Management Checklist]]

---

- [[Fifth Discipline. Summary]]

---

### Kurt Levin Model

- Unfreezing: convince people to change
- Moving: performing changes
- Freezing: setting new standards, punishing old and rewarding new

---

- [[Laws & Principles]]

---

- [Culture Eats Strategy for Breakfast](https://www.managementcentre.co.uk/big-ideas/culture-eats-strategy-for-breakfast/)


- [[Tasks]]

<!--

- [[Queueing theory]]
- [[Theory of constraints]]
- [[Agile Development]]
- [[Kaizen]]
- [[Lean]]

---

- https://modernagile.org/
- https://management30.com/
- https://www.ontheagilepath.net/2017/01/noestimates-101-new-principles-for-software-development-presented-by-vasco-duarte.html
- https://basecamp.com/shapeup/webbook


## Mindshift Coursera
Небольшой конспект:

– Active learning подразумевает активную работу над материалом во время обучения. В универе лекторы не должны нудно читать много часов подряд, они должны давать студентам возможность работать с только что прочтенным материалом. Другой пример: можно много смотреть, как монтируется видео, но круче сразу после просмотра первого видео начать монтировать свое, чтобы включить эктив лернинг. \[Это похоже на learning by doing\]  
– Не стоит давать студентам решение: лучше натолкнуть их на него, не надо писать готовую формулу.  
– \[Осознал: записывать заметки видео-лекций — это тип активного обучения. Надо всегда записывать. Не стомт мчаться вперед, иначе будет обман самого себя\]  
– Для проверки знаний: закрываем книгу, выключаем видео. Пытаемся повторить. \[Пример с тем, как я делал игру на Юнити; без инструкции понимание терялось, значит проработал материал не до конца\]  
– Знания из других областей, могут помочь совершить прорыв в другой области. Пример: Эйнштейн; чел, открывший ДНК; чел, открывший хеликобактер.  
– Если вы ничего не знаете о предмете, то это не значит, что его нужно не изучать. Если ваш знакомый круто шарит в математике, а вы нет, то всё равно у вас может получиться найти более интересный способ решения, так как будут задействованы другие нейронные цепочки.  
– Важно делеть перерывы, чтобы переключаться из focused mode в diffused mode. \[Возможно вечеринки или поездки, которые полностью вырывают из текущей реальности, очень мощно активизируют diffused mode. Также как и тяжелые интенсивные тренировки.\]  
– Громкая и быстрая музыка может замедлять обучение, потому что мозг использует те же области для обработки языка.  
– Мы часто развиваем страсть к предмету, который нам изначально нравился. А нравился он нам, потому что легче давался. Из-за этого мы можем думать, что способы только в этом предмете, а в других нет.  
– Польза от плохой памяти — большая креативность, так как если память плохая, то это значит, что рабочие слоты высвобождаются слишком часто, а это ведет к круговороту мыслей, то есть к большей креативности.  
– У людей с плохой памятью больше мотивации придумыаать более изящные простые решения \[нужна ссыль на исследование\]  
– Медитация с фокусировкой на чем-то (мантры) тренирует focused mode, медитация без фокусировки тренирует diffused mode  
– Книга Procrastination Equation.  
– Memoization также важен для глубокого понимания материала, как и delibarate practice  
– Книга The new mood theropy. David Burns  
– Называем словом эмоции, которые сейчас испытываем. Это сместит мышление от эмоционального центра мозга к рациональной части  
– Примеры cognitive distortion: all or nothing thinking, magnification, overgeneralizing  
– Чтобы успокоиться, стоит определить и дать название каждой эмоции. Так всё это добро переместится в рациональную часть мозга  
– Используем позитивный рефрейминг, чтобы превращать негативные эмоции в позитивные и использовать их с пользой. Сфейлится где-то? Не огорчайся, используй это как опыт  
– Если человек лучше воспринимает инфу с помощью слуха, а не глаз, то обычно говорят, что надо преподносить ему аудиальную инфу. Но реальность такова, что надо использовать все виды восприятия. Самые популярные — это аудиальные и визуальные. Идеально, если подключены все: аудиальные, визуальные, кинестетические и read/write  
– Гугл запустили проект Аристотель, чтобы узнать, что больше всего влияет на успех команд (одинаковый бэкграунд, одинаковые интересы или что-то еще). Оказалось, что есть единственная причина успеха: psychological safety. Члены команды могли спокойно брать рискованные задачи и иногда фейлиться. Поощрение такого вело к успеху. Людям было комфортно просто быть собой.  
– Choose friends and coworkers who have have aspirations that fit into your goals. Это нужно так как окружение сильно влияет на серотонин. При низком серотонине будет печаль и низкие результаты.  
– Есть та работа, которую страстно желаешь, а есть та, которой зарабатываешь на жизнь. Не стоит отказываться от страстной работы, идеально начать использовать часть её в той, которой зарабатываем на жизнь. Кахаль хотел стать художником, но художники в то время были бедными, а отец говорил ему стать врачом. В итоге Кахаль стал врачом, а потом заюзал свою страсть к рисованию для создания эпичных схем в медицине.  
– Talant stack: когда много скилов складывается вместе и дают синергетический эффект. При чем скиллы могут быть средними, необязательно добираться до топ-уровня.  
– Развитие скилла обычно напоминает логарифмическую шкалу, а не линейную, поэтому учиться новому можно быстро. \[Тоже самое говорится в книжке Peak: Secrets from the New Science of Expertise\]  
– Нормальная история — полностью изменить работу на другую. Стоит всегда знать о трендах рынка, во время видеть свою стагнацию. Много крутанов из прошлого сменили свою работу, и их мозг стал только круче.  
– Возможно не стоит рассказывать другим людям о том, что учите новый скилл или хочется сменить работу. Лучше делать это тихо, чтобы не получить кучу мнений «как стоит поступить»  
– Не стоит слепо тратить кучу времени и денег, залезая в кредиты, только чтобы исполнить свою «мечту». Важно понимать даст ли это что-то в будущем. Многие про это не думают и потом оказываются в долгах или не могут найти работу  
– Свои плохие стороны надо рефреймить и учиться извлекать из них выгоду. Это важно, так как любая «плохая» сторона в комбинации с противоположностью может дать крутой эффект. Например, если naive dreamer найдет к себе в команду более практичного чувака, то вместе они смогут генерить и осуществлять всякие безумные крутые идеи.  
– Важно постоянно изучать что-то новое, чтобы новые нейроны не отмирали, а становились частью большей сети  
– То что не используется, то умрет \[поэтому важно узнавать новое и как-то это интегрировать в свою практику или картину мира, иначе это знание отомрет\]  
– Офлайн-образование страдает от отсутствия конкуренции среди преподов, у них нет мотивации соревноваться друг с другом. А профессора знают дофига, но могут не уметь объяснять просто. Также часто универы заточены под исследования, а не обучение. В онлайн-образовании преподы находятся в высоко конкурентной среде, так как как один и тот же материал можно преподнести по-разному.  
– Джек Тейлор выиграл в лотерею ужин с Уоренном Баффетом. Говорит, что Баффет такой крутой, потому что он non-stop reader: читает постоянно, поэтому качество принятия решений в жизни повышается. After a chance lunch with Mr. Buffett, I’ve dedicated years to studying what makes Warren and Charlie so successful. Although they were both blessed with exceptionally high IQs, I believe their astounding wisdom comes from reading so many damned books. Their real competitive advantage is that they’ve simply out-read everyone else. Want to be the smartest person in the room? It’s simple. Read more. It’s a truly egalitarian hack that’s available to any of us who dedicate the time.  
– Важно читать не только узкоспециализированные книги, но и на отвлеченные темы, чтобы формировать в мозгу новые метафоры и новые углы зрения. Это доп. ачифка по сравнению с ребятами, которые читают только книги по своей профессиональной теме.

https://www.facebook.com/100001591809296/posts/2423901961006174/

## Linkedin. Neuroscience of Learning

- Есть два типа Mindset: fixed vs growth (Dr. Carol Dweck)
- Fixed: либо ты крут в математике, либо нет. I got what I've got
- Growth: развитие мозга происходит до конца жизни
- Fixed mindset: companies that embrace, we score you, you're average, or you're better than average, and you're just compared to your peers, that's a fixed mindset
- Growth mindset: if you move the needle, if you improve, that's what we value. That's what we're going to evaluate you on.
- Мантра Growth mindset — слово yet. «Я не могу это делать пока»
- Bloom Hierarchy of Learning. How do you facilitate change in an organization? So I first teach people models of change. We know some things about how people change and how organizations change, I give them that. I want to make sure they actually understood it correctly. And then I want them to be able to apply it. I want them to be able to implement change with a team or a project that they're doing. Then I want them to know if it's not working, gosh there's a problem, it's not flowing as well as I thought, there seems to be an issue and make an adjustment. And perhaps, the model isn't an exact fit for their context. Maybe they need to tweak that model a little better, combine two models to make something really work. So getting creative, and then finally, once the change is implemented, they're going to need to determine the return on investment for that change. So we're working with all six levels of learning.
- Kolb's learning cycle. It says that there's a perception continuum and that goes from conceptual or abstract and idea a model, to concrete experience. You're actually having an experience with that. And then there's the processing continuum, which means that you may reflect on it or observe somebody else doing it. And then there's active experimentation, that you're playing with it a little bit. And then as a learning designer, what you want to do is walk people around the model so you want to make sure that they have opportunities to do reflection and abstract thinking. You want to make sure that they get to play with thinking and doing. You want to make sure that they get to play with doing and feeling. And also, feeling and watching. So when you're designing learning, you want to think about did I walk people through all of those opportunities.
- Фокусировка на чем-то включает гиппокамп. Это сигнал мозгу нажать на кнопку Record.
- Нельзя быть сфокусированным на двух вещах. Если кто-то параллельно слушает лекцию, и проверяет имэйл, он не сможет на 100% услышать лектора и на 100% правильно прочитать имэйлы.
- Если кто-то в команде сфоркусирован, а кто-то постоянно отвлекается, то это аффектит на всю команду.
- 20 минут — столько может работать гиппокамп в режиме фокусировки (речь только про intense focus).
- Мнемонические сокращения очень сильно помогают запомнить информацию. «orange zebras always bite dried fruit» →  «oomycetes, zygomycetes, ascomycetes»
- A-ha moment (инсайты) — это когда синапсы соединяются:

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7e312e49-428e-48f4-abcb-d1b38bc43380/untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7e312e49-428e-48f4-abcb-d1b38bc43380/untitled)

- Если a-ha moment произошел, то он не может быть потерян, он всегда будет с нами. Пример: картинка с «иллюзией», где изображены люди и кувшины (что-то одно сразу не видно) или девушка и старая леди (кого-то одного сразу не видно). Но как только замечаешь всех, происходит a-ha moment, и больше развидеть это невозможно.
- Когда мы проектируем процесс обучения (learning design, надо думать, как привести людей к таким инсайтам (a-ha moment)
- Песни сохраняются в мозгу навсегда, так как затрагивают огромную часть мозга. Музыку используют для восстановления мозга после повреждений.
- Миндалевидное тело (миндалина, amygdaloideum). If we smelled smoke right now, you know, like fire smoke, that would get us alert. If someone started to attack you, that would get you alert. If I told you you won the lottery, that would probably get you alert. So it takes in the stimuli and it kind of sorts for am I safe or am I in trouble, and if you're in trouble, it can kick off that fight-or-flight response, which is a really powerful reaction. It is attached to the hippocampus for a very important reason, which is if the environment gets stimulating, it says to the hippocampus, "This is important, remember this." Something's going down right now, and I might need you to remember this five years from now so I don't die next time, right? So it has this kind of survival mode which says if something's going down, hippocampus, make sure you're recording, which is why sometimes when you've had something happen, you can remember it with just crystal detail 'cause it got turned on.
- Состояние человека в момент обучения должно быть slightly positive. If I all told you you won the lottery, you would not be listening to my presentation right now. You'd be over-the-top excited and joyful, not focused. And if you felt physically threatened, scared, really stressed out, you also wouldn't be able to focus. So we know slightly positive is the sweet spot for good learning to happen.
- Positive feelings promote learning because activating the amygdala triggers the hippocampus to remain focused.
- if you can bring gratitude, mindfulness, or humor to anything you're doing in learning, you really just maximize the brain's potential to learn.
- Менять контекст — это круто для обучения
- Сон — супер-важен. While we're sleeping it's refiring the neural networks, and the hippocampus is actually making some decisions about what was relevant and what was irrelevant.
- All of this mainly happens during REM sleep, and the last hour of sleep is the most important, the hour right before we wake up is when most of this is happening. The goal here is to actually wake up naturally and how ever many hours that is for you, for some of us it's eight. For some of us it's 10. For some of us it's six, but you wanna be able to wake up without an alarm
- Strategy that maximise learning process: allow learners to interact with concepts in different contexts over a few days
- You want to give them opportunities to connect to maybe 3 different things in their brain: a memory, an idea, a piece of music, whatever. Hook onto as many schemas as you can. It's going to make that learning more robust.
- Get 3 retrievals in somewhere, with sleep in between and you're really going to maximize the learning.
- If you want to have somebody retain something for a year, you should revisit it every 3 months to keep that neural pathway coming back together.
- Если рассказываем что-то новое, то важно преподнести это с 3-х разных сторон. Пример на картинке:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4c7a6130-e2e7-4589-80d3-f66d394e40c7/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4c7a6130-e2e7-4589-80d3-f66d394e40c7/Untitled.png)

- Brain creates a habit loop. So, a habit is something that we've done over and over so many times that it becomes routinized, and we don't have to think about it anymore.
- When we do it over and over again it gets taken out of the top part of the brain and put into the basal ganglia, which is the lower part of the brain, so it can run in the background without us thinking about it, freeing up our mind to do other things.
- Для появления новой привычки используем: важно взять за основу или как-то наладить связь со старой привычкой. Далее находим осязаемый сигнал cue (you gotta have a really clear act-now button that tells you to start the new behavior: visual or something you can hear, It's got to be something observable, not a feeling). Дальше разбиваем на супер-мелкие части, чтобы нельзя было зафейлиться (The second part of it is you have to break it into baby steps. It has to be broken into steps that are so small, you cannot fail). И финальная штука — награда.
- Для воспитания детей: the Kazdin Method of parenting, it came out of Yale University, is based on all of this habit stuff. And using positive motivation to create behavior change in children.
- Вопрос про то, круто ли записывать ручкой или на на планшете. Ответ — эволюционно человек круче всё распознает картинками и на ощупь. Our brain thinks in pictures. It doesn't think in squiggly lines that represent letters. So I always go back to what's my brains most natural state, thinking in pictures is probably more powerful than thinking in words. Doing something kinesthetic, moving parts of my neurons is tied to this whole neural system I have,

## Bloom Hierarchy of Learning

[https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fdc6ff4d-ba40-425d-8517-49d102fd75f2/untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fdc6ff4d-ba40-425d-8517-49d102fd75f2/untitled)

https://www.notion.so/Linkedin-Neuroscience-of-Learning-c7b27b7b4cb24bcca27a8088791f7050

- Курс: [https://www.linkedin.com/learning/the-neuroscience-of-learning](https://www.linkedin.com/learning/the-neuroscience-of-learning)
- [https://fs.blog/2015/03/carol-dweck-mindset/](https://fs.blog/2015/03/carol-dweck-mindset/)
- [https://journals.sagepub.com/doi/10.1177/0956797611419520](https://journals.sagepub.com/doi/10.1177/0956797611419520)
- [https://www.slideshare.net/MarianWilleke/cultivating-the-growth-mindset-in-the-organisation](https://www.slideshare.net/MarianWilleke/cultivating-the-growth-mindset-in-the-organisation)
- [https://en.wikipedia.org/wiki/Bloom's_taxonomy](https://en.wikipedia.org/wiki/Bloom%27s_taxonomy)
- [https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788](https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788)

-->
