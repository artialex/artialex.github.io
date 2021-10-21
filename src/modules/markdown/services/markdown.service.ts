import { Processor, unified, VFileWithOutput } from 'unified'
import React, { ReactElement } from 'react'
import { h } from 'hastscript'
import { visit } from 'unist-util-visit'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkExtractFrontmatter from 'remark-extract-frontmatter'
// @ts-ignore
import remarkSmartypants from '@silvenon/remark-smartypants'
// @ts-ignore
import remarkWikiLink from 'remark-wiki-link'
import remarkMath from 'remark-math'
import remarkDirective from 'remark-directive'
import remarkRehype from 'remark-rehype'
import remarkKatex from 'rehype-katex'
import rehypeReact from 'rehype-react'

import 'katex/dist/katex.min.css' // fixme?

let processor: Processor | null = null

interface ConfigureOptions {
  components: Record<string, any>
  remarkPlugins?: any[]
  rehypePlugins?: any[]
}

export function configure(options: ConfigureOptions) {
  processor = unified()

  processor.use(remarkParse)

  /**
   * GitHub Flavored Markdown
   * Auto-links, strikethrough text, tables and task lists
   */
  processor.use(remarkGfm)

  /**
   * Meta information (frontmatter), parsing and extracting
   */
  processor.use(remarkFrontmatter, [{ type: 'yaml', marker: '-' }])
  processor.use(remarkExtractFrontmatter, {
    yaml: require('js-yaml').load,
  })

  /**
   * Better looking quotes, dashes, backticks, ellipsis
   *
   * @link https://daringfireball.net/projects/smartypants/
   */
  processor.use(remarkSmartypants, {
    dashes: true,
  })

  /**
   * Wiki links in a form of [[Link|Text]], matching links in Obsidian app
   */
  processor.use(remarkWikiLink, {
    pageResolver: (name: string) => [name],
    hrefTemplate: (permalink: string) => permalink,
    aliasDivider: '|',
  })

  /**
   * Mathematical expressions
   */
  processor.use(remarkMath)

  /**
   * Custom directives
   * Inline
   *   :name[content]{key=val}
   *
   * Leaf Block
   *   :: name [content] {key=val}
   *
   * Container Block
   *   ::: name [inline-content] {key=val}
   *   :::
   */
  processor.use(remarkDirective)
  processor.use(() => {
    function ondirective(node: any) {
      let data: any = node.data || (node.data = {})
      let hast: any = h(node.name, node.attributes)

      data.hName = hast.tagName
      data.hProperties = hast.properties
    }

    return function transform(tree) {
      visit(tree, ['textDirective', 'leafDirective', 'containerDirective'], ondirective)
    }
  })

  /** Additional remark plugins */
  options.remarkPlugins?.forEach((plugin) => processor?.use(plugin))

  processor.use(remarkRehype)

  /** Additional rehype plugins */
  options.rehypePlugins?.forEach((plugin) => processor?.use(plugin))

  /**
   * Aliases for some katex expressions
   *
   */
  processor.use(remarkKatex, {
    trust: true,
    macros: {
      '\\Green': '\\htmlStyle{color: var(--green-color)}',
      '\\Blue': '\\htmlStyle{color: var(--blue-color)}',
      '\\Orange': '\\htmlStyle{color: var(--orange-color)}',
      '\\Cyan': '\\htmlStyle{color: var(--cyan-color)}',
      '\\Red': '\\htmlStyle{color: var(--red-color)}',
      '\\Magenta': '\\htmlStyle{color: var(--magenta-color)}',
      '\\Yellow': '\\htmlStyle{color: var(--yellow-color)}',
      '\\Violet': '\\htmlStyle{color: var(--violet-color)}',

      '\\M': '\\htmlStyle{color: var(--green-color)}{M}',
      '\\N': '\\htmlStyle{color: var(--blue-color)}{N}',
      '\\K': '\\htmlStyle{color: var(--orange-color)}{K}',

      // Scalars
      '\\x': '\\htmlStyle{color: var(--magenta-color)}{x}',
      '\\y': '\\htmlStyle{color: var(--yellow-color)}{y}',
      '\\z': '\\htmlStyle{color: var(--violet-color)}{z}',

      // Vectors
      '\\v': '\\htmlStyle{color: var(--violet-color)}{\\vec{v}}',
      '\\w': '\\htmlStyle{color: var(--cyan-color)}{\\vec{w}}',
      '\\u': '\\htmlStyle{color: var(--red-color)}{\\vec{u}}',

      // Unit vectors
      '\\uv': '\\htmlStyle{color: var(--violet-color)}{\\hat{v}}',
      '\\uw': '\\htmlStyle{color: var(--cyan-color)}{\\hat{w}}',

      // Matrices
      '\\A': '\\htmlStyle{color: var(--green-color)}{A}',
      '\\B': '\\htmlStyle{color: var(--blue-color)}{B}',
      '\\C': '\\htmlStyle{color: var(--orange-color)}{C}',

      // Helpers
      '\\BM': '\\begin{bmatrix}',
      '\\EM': '\\end{bmatrix}',
      '\\BA': '\\begin{aligned}',
      '\\EA': '\\end{aligned}',
    },
  })

  /**
   * Converting to React Element
   */
  processor.use(rehypeReact, {
    createElement: React.createElement,
    components: options.components,
  })
}

export async function process(str: string): Promise<VFileWithOutput<ReactElement>> {
  if (!processor) {
    throw new Error('Processor is not configured')
  }

  return processor.processSync(str) as VFileWithOutput<ReactElement>
}
