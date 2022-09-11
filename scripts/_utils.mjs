import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkFrontmatter from 'remark-frontmatter'
import remarkExtractFrontmatter from 'remark-extract-frontmatter'
import { load } from 'js-yaml'
import remarkWikiLink from 'remark-wiki-link'
import remarkGfm from 'remark-gfm'

/**
 * Path to notes folder
 *
 * @type {string}
 */
export const noteDir = resolve(fileURLToPath(import.meta.url), '../../public/notes')

/**
 * Creates lightweight markdown processor
 */
export const processor = unified() //
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkFrontmatter, [{ type: 'yaml', marker: '-' }])
  .use(remarkExtractFrontmatter, { yaml: load })
  .use(remarkWikiLink, {
    pageResolver: (name) => [name],
    hrefTemplate: (permalink) => permalink,
    aliasDivider: '|',
  })
