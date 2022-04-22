import { resolve } from 'path'
import { readdir, readFile, writeFile } from 'fs/promises'
import { unified } from 'unified'
import { fileURLToPath } from 'url'
import { load } from 'js-yaml'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkExtractFrontmatter from 'remark-extract-frontmatter'
import remarkWikiLink from 'remark-wiki-link'
import { visit } from 'unist-util-visit'
import { processor } from './_utils.mjs'
import _ from 'lodash'

let noteDir = resolve(fileURLToPath(import.meta.url), '../../public/notes')

async function run() {
  try {
    const graph = {
      nodes: {}, // { NodeId: { backlinks: NodeId[] } }
      tags: {}, // { TagId: NodeId[] }
    }
    const vault = {
      links: {}, // { NodeId: { backlinks: NodeId[] } }
      tags: {}, // { TagId: NodeId[] }
    }

    const notes = (await readdir(noteDir)).filter((_) => _.endsWith('md'))

    for (const note of notes) {
      const file = await readFile(`${noteDir}/${note}`, 'utf8')
      const tree = await processor.parse(file)
      const id = note.replace('.md', '')

      // Extracting tags
      visit(tree, 'yaml', (node) => {
        let { tags } = load(node.value)

        if (tags) {
          for (const tag of tags) {
            _.update(graph, ['tags', tag], (tags) => (tags ? tags.concat(id) : [id]))
          }
        }
      })

      // Extracting backlinks
      visit(tree, 'wikiLink', (node) => {
        _.update(graph, ['nodes', node.value, 'backlinks'], (backlinks) =>
          backlinks ? _.union(backlinks, [id]) : [id]
        )
      })

      if (id === 'Link Vault') {
        visit(tree, 'tableRow', (node) => {
          // Skip Header row
          if (node.children.every((inner) => _.isEmpty(inner.children))) {
            return
          }

          const link = node.children[0].children[0]
          const url = link.url
          const title = link.children[0].value

          _.set(vault, ['links', title], { url })

          for (const tag of node.children[1].children[0].value.split(',').map((_) => _.trim())) {
            _.update(vault, ['tags', tag], (ids) => (ids ? ids.concat(title) : [title]))
          }

          const description = node.children[2].children[0]

          if (description) {
            _.set(vault, ['links', title, 'description'], description.value)
          }
        })
      }
    }

    await writeFile(resolve('./public/graph.json'), JSON.stringify({ graph, vault }, null, 2))
  } catch (e) {
    console.log(e)
  }
}

void run()
