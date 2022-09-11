import { resolve } from 'path'
import { readdir, readFile, writeFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { load } from 'js-yaml'
import { visit } from 'unist-util-visit'
import { processor } from './_utils.mjs'
import _ from 'lodash'

const noteDir = resolve(fileURLToPath(import.meta.url), '../../public/notes')

const ignoredTags = ['done', 'wip', 'ignore', 'index']

const prettyTagNames = {
  algo: 'Algorithms',
  cg: 'Computer graphics',
  cs: 'Computer science',
  css: 'CSS',
  csharp: 'CSharp',
  cpp: 'C++',
  midi: 'MIDI',
  db: 'Databases',
  devops: 'DevOps',
  ds: 'Data structures',
  dsp: 'DSP',
  eng: 'English language',
  fe: 'Frontend',
  'file-structure': 'File structure',
  fp: 'Functional programming',
  graph: 'Graphs',
  http: 'HTTP',
  graphql: 'GraphQL',
  guide: 'Guides',
  js: 'JavaScript',
  linal: 'Lineal algebra',
  math: 'Mathematics',
  map: 'MoC',
  notetaking: 'Note-taking',
  os: 'Operating system',
  pbm: 'Package-By-Module',
  rest: 'REST',
  scratch: 'Scratches',
  thought: 'Thoughts',
  tree: 'Trees',
  ui: 'UI',
  uml: 'UML',
  webgl: 'WebGL',
  wip: 'WIP',
  zk: 'Zettelkasten',
}

async function run() {
  try {
    const data = {}

    try {
      // Processing links
      const file = await readFile(`${noteDir}/_Links.md`, 'utf8')

      const tree = await processor.parse(file)

      let current = null

      visit(tree, (node) => {
        if (node.type === 'link') {
          current = node.children[0].value

          _.set(data, ['vaultLinks', current, 'name'], current)
          _.set(data, ['vaultLinks', current, 'link'], node.url)
        }

        if (node.type === 'paragraph') {
          const text = node.children[0]

          if (text.value.startsWith('#')) {
            const tags = text.value.split(' ').map((_) => _.slice(1))

            _.set(data, ['vaultLinks', current, 'tags'], tags)

            for (const tag of _.difference(tags, ignoredTags)) {
              _.set(data, ['tags', tag, 'id'], tag)
              _.set(data, ['tags', tag, 'prettyName'], prettyTagNames[tag] || _.capitalize(tag))
              _.update(data, ['tags', tag, 'vaultLinkCount'], inc)
              _.update(data, ['tags', tag, 'vaultLinks'], push(current))
            }
          } else {
            _.set(data, ['vaultLinks', current, 'comment'], text.value)
          }
        }
      })
    } catch (error) {
      console.log(error)
    }

    // Processing Notes
    const filenames = (await readdir(noteDir)).filter(
      (_) => !_.startsWith('_') && _.endsWith('md') && !_.endsWith('private.md')
    )

    for (const filename of filenames) {
      const file = await readFile(`${noteDir}/${filename}`, 'utf8')
      const tree = await processor.parse(file)
      const id = filename.replace('.md', '')

      _.set(data, ['notes', id, 'title'], id)

      visit(tree, 'yaml', (node) => {
        const { tags } = load(node.value)

        if (tags) {
          for (const tag of _.difference(tags, ignoredTags)) {
            _.set(data, ['tags', tag, 'id'], tag)
            _.set(data, ['tags', tag, 'prettyName'], prettyTagNames[tag] || _.capitalize(tag))

            _.update(data, ['tags', tag, 'noteCount'], inc)
            _.update(data, ['tags', tag, 'notes'], push(id))

            _.update(data, ['notes', id, 'tags'], push(tag))
          }
        }
      })

      visit(tree, 'wikiLink', (node) => {
        const link = node.value

        _.update(data, ['notes', link, 'backlinks'], push(id))
      })
    }

    await writeFile(resolve('./public/graph.json'), JSON.stringify({ data }, null, 2))
  } catch (e) {
    console.log(e)
  }
}

void run()

function inc(val) {
  return val != null ? val + 1 : 1
}

function push(val) {
  return function (collection) {
    return collection ? _.union(collection, [val]) : [val]
  }
}
