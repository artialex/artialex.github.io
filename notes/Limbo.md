  
Этот бойлерплейт ставит своей задачей достигнуть максимального компромисса в разработке SPA приложений на JavaScript  
  
\- масштабируемость  
  
\* What is scalability  
\* State Management  
\* Architecture  
  \- Containers & Components ???  
  \- Group files by feature  
  \- Isolate Styling  
  \- Use redux-saga  
\* Performance  
  
\## Structure  
  
The project divided in four big subsections:  
  
\- app - here the business logic  
\- server - here the server (there can be no servers)  
\- .internals - configurations for third-party packages  
\- .utils - utils, helpers, validations, preconfigurations  
  
\`\`\`bash  
├── .internals  
│   ├── foo  
│   └── bar  
├── app  
│   ├── core  
│   ├── lss  
│   ├── modules  
│   ├── styles  
│   ├── index.html  
│   ├── index.jsx  
│   └── manifest.json  
├── server  
├── .env.example  
└── .env  
\`\`\`  
  
\`\`\`puml  
(app) --> (module A)  
(app) --> (module B)  
  
(module A) --> (service A)  
(module B) --> (service B)  
\`\`\`  
  
\### Приложение / Application  
  
\*\*Приложение (app)\*\* \- это корневая единица проекты  
  
Приложений может быть несколько, тогда это так называемые \*\*sub-apps\*\*  
  
Приложение строится по принципу \_package by feature, not by layer\_  
  
\### Модули / Modules  
  
\*\*Модули\*\* \- это логические части на которые может быть разделено \*\*приложение\*\*. Их также допустимо называть \*\*фичами\*\*  
  
\_Примеры\_  
  
1\. В \*\*приложении\*\* есть возможность оставлять заметки к товару, тогда создаем следующую структуру:  
  
\`\`\`  
└── app  
 └── modules └── notes ├── components          # Связанные с модулем компоненты │   ├── Notes │   │   ├── Notes.css │   │   ├── Notes.jsx │   │   └── index.js │   └── Label │       ├── Notes.css │       ├── Notes.jsx │       └── index.js ├── services │   ├── notes.duck.js   # Redux Actions / Action Creators / Reducer │   └── notes.api.js    # API для сохранения заметок └── index.js            # Все публичные вызовы экспортируются через этот файл\`\`\`  
  
Используем в других \*\*модулях\*\*  
  
\`\`\`js  
// some-other-module  
import { Notes, saveNote } from 'Modules/notes' // 'М' большая, т. к. используем webpack.resolve.alias  
...  
<Notes />  
...  
saveNote()  
\`\`\`  
  
2\. Хотим выделить все что связано с формами в отдельный \*\*модуль\*\*  
  
\`\`\`  
└── app  
 └── modules └── form ├── components         # Связанные с модулем компоненты │   ├── Field │   │   ├── Field.css │   │   ├── Field.jsx │   │   └── index.js │   └── Label │       ├── Label.css │       ├── Label.jsx │       └── index.js ├── services │   ├── form.duck.js   # Redux Actions / Action Creators / Reducer │   └── form.api.js    # API для сохранения заметок └── index.js           # Все публичные вызовы экспортируются через этот файл\`\`\`  
  
3\. Другие примеры  
  
\- \*\*Модуль\*\* \_SEO\_ \- директория \`modules/seo\`, содержит компоненты и сервисы, позволяющие отображать SEO информацию  
\- \*\*Модуль\*\* \_Chat\_ \- директория \`modules/chat\`, содержит компоненты и сервисы чата  
  
\*\*Модуль\*\* может включать в себя все что угодно, \*\*компоненты\*\*, \*\*сервисы\*\*, \*\*саги\*\*, \*\*утки\*\*  
Сервисы не могут включать в себя модули  
  
Иными словами \*\*Модуль\*\* \> \*\*Сервис\*\*  
  
\[?\] Если модуль сильно разрастается, или несколько модулей сильно связаны друг с другом (чего лучше не допускать), то нужно создать несколько модулей с префиксом главного модуля, вместо создания вложенности, например:  
  
\`\`\`bash  
\# Плохо  
└── modules  
 └── name └── submodule\# Хорошо  
└── modules  
 ├── name └── name-submodule\`\`\`  
  
\### Сервисы / Services  
  
\_Сервис\_ \- это паттерн  
  
\_Сервис Авторизации\_  
  
\`\`\`js  
export const user = null  
export function logIn() {  
 ...}  
  
export function logOut() {  
 ...}  
  
// some-file-that-uses-service.js  
import \* as Auth from 'some-module/auth.service'  
...  
Auth.logIn()  
\`\`\`  
  
\_Сервис Rest API\_  
  
\`\`\`js  
// some-module/api.service.js  
...  
export function fetchUsers() {  
 ...}  
  
export function fetchPosts(userId) {  
 ...}  
  
// some-file-that-uses-service.js  
import \* as API from 'some-module/api.service'  
...  
API.fetchUsers()  
\`\`\`  
  
\### Классное правило  
  
Если ты что то имопртируешь, подумай можно ли это выделить в отдельный пакет? (utils, configs),  
Если можно - то этот файл не должен лежать с файлами логики, он должен лежать отдельно  
  
\## How to run  
  
Make sure you've installed node 8.0.0+ and npm 5.0.0+  
  
\`\`\`bash  
cd limbonpm installnpm start\`\`\`  
  
\## What's inside?  
  
\### Consistent script running  
  
\`\`\`bash  
npm start      # Run servernpm run build  # Build artifacts\`\`\`  
  
\### Tests  
  
\`\`\`bash  
npm test                           # Run tests  
\# Tests are written using jest, therefore you can use its cli options  
npm test -- -t User --watchAll     # Run only tests containing \`User\` # in watch mode\`\`\`  
  
\### \`.env\` file  
  
Use it for changing environment variables  
  
\### Simplified and consistent generation of files via hygen (generact, plop)?  
  
\`\`\`  
npm run gen                         # Run generator  
  
\# TODO  
npm run cc                          # Create component  
npm run cm                          # Create module  
npm run cd                          # Create duck  
npm run cs                          # Create service  
npm run cr                          # Create route  
npm run ca                          # Create ajax request (with mocks)  
npm run cl                          # Create selectors  
\`\`\`  
  
\### Styleguidist  
  
Run  
  
\`\`\`  
npm run styleguide                  # Run styleguidist at http://localhost:7010  
\`\`\`  
  
New examples are automatically added when creating a component (unless \`--no-example\` flag is specified)  
  
\### Style, UI  
  
\`\`\`  
npm run lint \[-- --all\]             # Lint changed files (or all files)  
npm run lint:styles \[-- --all\]      # Lint changed styles (or all files)  
npm run lint:scripts \[-- --all\]     # Lint changed scripts (or all files)  
npm run format \[-- --all\]           # Autoformat changed files (or all files)  
\`\`\`  
  
\### Monitoring selfconditions  
  
\`\`\`  
npm outdated  
npx cloc  
npx madge  
npx webpack-bundle-analyzer  
npx depcheck  
\`\`\`  
  
\## FAQ  
  
\### What if I really like semicolons?  
  
Shame on you!  
  
\`\`\`bash  
echo '{ "semi": true }' > .prettierrc\`\`\`  
  
\## TODO  
  
\- \[ \] Commons  
  \- \[x\] env  
  \- \[ \] npmrc  
  \- \[ \] nodemon  
  \- \[ \] debug  
\- \[ \] JavaScript  
  \- \[x\] ES6 via Babel (presets: \`env\`, \`react\`)  
\- \[ \] Git  
  \- \[ \] hooks  
  \- \[ \] gitignore  
  \- \[ \] gitattributes  
\- \[ \] Frontend  
  \- \[x\] react (v16)  
  \- \[x\] redux  
  \- \[x\] reselect  
  \- \[x\] redux-thunk  
  \- \[x\] redux-actions  
  \- \[x\] react-helmet  
  \- \[x\] react-router (v4)  
  \- \[x\] HMR  
\- \[ \] Generator  
  \- \[x\] Component  
    \- \[ \] add \`--no-example\`  
 \- \[ \] add \`--run-tests\`  
 \- \[x\] Module?  
  \- \[x\] Duck?  
  \- \[x\] Action?  
\- \[ \] Server  
  \- \[x\] koa, koa-helmet  
  \- \[ \] webpack  
\- \[ \] Tests  
  \- \[ \] jest  
  \- \[ \] Gemini  
  \- \[ \] nightwatch  
\- \[ \] Style  
  \- \[ \] PostCSS  
    \- \[ \] postcss-use  
    \- \[ \] postcss-autoreset  
  \- \[ \] eslint  
  \- \[x\] prettier  
  \- \[ \] stylelint  
  \- \[x\] .editorconfig  
\- \[ \] styleguidist  
  \- \[\] ??  
  
+++NOTES  
+++SagA  
???ImmutableJS  
  
env переменные должен указываться явно в консоли  
  
\### Разница между модулем и утилитой  
  
Модуль - это то, что имеет смысл только внутри текущего приложения  
Утилита - это то, что имеет смысл переиспользовать. В идеале все утилиты должны приходить из npm  
  
  
 app clean # removes \`coverage\` directory