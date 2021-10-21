# Git

Как организовать удобную работу с гитом?

Глобальный .gitignore, содержащий

```
.vscode
.idea
```

#git

---

# Git

Система контроля версий.
Выглядит просто, но под капотом множество нюансов и неочевидных вещей. Здесь же я попытаюсь пойти глубже базового использования и рассказать о тонкостях строения гита

Ядро гита - репозиторий (_repository_). По сути это простое key-value хранилище, в котором помиомо прочего хранятся:

- **[[Blob|Blobs]]**, самый базовый _data type_ в гите. Это просто кучка байтов, обычно [[Binary representation|бинарное представление]] файла
- **Tree objects**, похожи на директории. Они содержат указатели на _blobs_ и другие _tree objects_
- **Commit objects**, которые указывают на конкретный _tree object_ и содержат метаданные, включающие автора коммита и родительские коммиты
- **Tag objects**, которые указывают на конкретный _commit object_, содержат некоторые метаданные
- **References**, которые указывают на конкретный объект, обычно на _commit object_ или _tag object_

---

- https://wildlyinaccurate.com/a-hackers-guide-to-git/
- https://www.intracto.com/nl-be/blog/how-to-save-a-puppy-by-creating-a-clean-git-repo

https://marklodato.github.io/visual-git-guide/index-en.html
http://blog.anvard.org/conversational-git/

https://jwiegley.github.io/git-from-the-bottom-up/

https://gitimmersion.com/lab_09.html

- https://github.com/toplenboren/simple-git-hooks
