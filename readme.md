# My digital garden

Take a look here: https://alextheartisan.github.io

## Architecture

### Markdown notes

Notes are the _core_ of the website. I write them using [Obsidian](https://obsidian.md/). They are located inside `public/notes` folder

### Helpful scripts

Convenient note scripts help to check something

- `npm run graph`: Creates graph like data structure which helps with tags and moving between pages

### Next.js application

With the help of `Next.js` I can create a static pages that are handled by GutHub Pages.
I use [unified](https://github.com/unifiedjs/unified) to render markdown and a number of plugins (wiki-links, frontmatter, etc.)

- _Insertions_ are various additional components that add some interactivity to the website, for example:
  - [x] [Eight Queens puzzle](https://alextheartisan.github.io/?id=Backtracking%20search)
  - [ ] Dot product
  - [ ] Bezier curves
  - [ ] Sine & Cosine
- Code highlighting

## Notes

- `develop` branch has the source code
- `master` branch has gh-pages build (via GitHub Actions)

## TODO

- Animation? Transitions between pages?
- Better visuals for TODO labels
- Linters
  - JS/TS
  - CSS/Sass
  - Markdown
  - Latex?
- Checkers
  - English grammar
- Compile LaTeX images? (extra tools should be installed for that)

- Hemingway editor features?
