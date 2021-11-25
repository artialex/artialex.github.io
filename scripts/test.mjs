import { resolve } from 'path'
import { writeFile, readFile, readdir } from 'fs/promises'
import { unified } from 'unified'
import { fileURLToPath } from 'url'
import { load } from 'js-yaml'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import remarkFrontmatter from 'remark-frontmatter'
import remarkExtractFrontmatter from 'remark-extract-frontmatter'
import remarkWikiLink from 'remark-wiki-link'
import { visit } from 'unist-util-visit'

let noteDir = resolve(fileURLToPath(import.meta.url), '../../public/notes')

async function run() {
  try {
    let processor = createProcessor()

    let graph = {
      nodes: [],
      links: [],
    }

    async function getNodeInfo(tree, id) {
      return new Promise((resolve, reject) => {
        let result = { id }
        visit(tree, 'yaml', (node) => {
          let { tags } = load(node.value)

          result.tags = tags

          return resolve(result)
        })

        resolve(result)
      })
    }

    let notes = (await readdir(noteDir)).filter((_) => _.endsWith('md'))

    // console.log('test :: 44', notes)
    for (let note of notes) {
      let file = await readFile(`${noteDir}/${note}`, 'utf8')

      let tree = await processor.parse(file)

      let node = await getNodeInfo(tree, note.replace('.md', ''))

      // Adding links
      graph.nodes.push(node)

      // Adding links
      visit(tree, 'wikiLink', (node) => {
        graph.links.push({
          source: note.replace('.md', ''),
          target: node.value,
        })

        if (!graph[node.value]) {
          graph.nodes.push({
            id: node.value,
          })
        }
      })
    }

    await writeFile(resolve('../public/graph.json'), JSON.stringify(graph, null, 2))
  } catch (e) {
    console.log(e)
  }
}

function createProcessor() {
  return unified() //
    .use(remarkParse)
    .use(remarkFrontmatter, [{ type: 'yaml', marker: '-' }])
    .use(remarkExtractFrontmatter, { yaml: load })
    .use(remarkWikiLink, {
      pageResolver: (name) => [name],
      hrefTemplate: (permalink) => permalink,
      aliasDivider: '|',
    })
}

void run()
