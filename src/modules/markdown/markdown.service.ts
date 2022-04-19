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
import rehypeHighlight from 'rehype-highlight'
import remarkRehype from 'remark-rehype'
import remarkKatex from 'rehype-katex'
import rehypeReact from 'rehype-react'
// @ts-ignore
import remarkShortcodes from 'remark-shortcodes'

import 'katex/dist/katex.min.css'
// import '@matejmazur/react-katex/dist/katex.min.css'
import _ from 'lodash' // ? FIXME

let processor: Processor | null = null

interface ConfigureOptions {
  components: Record<string, any>
  inline?: boolean
  remarkPlugins?: any[]
  rehypePlugins?: any[]
}

export function configure(options: ConfigureOptions) {
  processor = unified()

  processor.data('inline', options.inline)

  processor.use(remarkParse)

  /*
  processor.use(() => (tree) => {
    console.log('markdown.service :: 45', tree)
  })
*/
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
  processor.use(() => (tree) => {
    visit(tree, ['textDirective', 'leafDirective', 'containerDirective'], (node: any) => {
      let data: any = node.data || (node.data = {})
      let hast: any = h(node.name, node.attributes)

      data.hName = hast.tagName
      data.hProperties = hast.properties
    })
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
      // '\\x': '\\htmlStyle{color: var(--magenta-color)}{x}',
      // '\\y': '\\htmlStyle{color: var(--yellow-color)}{y}',
      // '\\z': '\\htmlStyle{color: var(--violet-color)}{z}',

      // Scalars
      // '\\i_1': '\\htmlStyle{color: var(--magenta-color)}{i_1}',
      // '\\i2': '\\htmlStyle{color: var(--magenta-color)}{i_2}',
      // '\\i3': '\\htmlStyle{color: var(--magenta-color)}{i_3}',

      // Vectors & vector parts
      '\\dn': '\\htmlStyle{color: #ccc}{0}',
      ..._.transform(
        {
          a: 'magenta',
          b: 'green',
          c: 'blue',
          d: 'yellow',

          o: 'yellow',

          x: 'magenta',
          y: 'yellow',
          z: 'violet',

          v: 'violet',
          w: 'cyan',
          u: 'red',

          i: 'red',
          j: 'green',
          k: 'blue',
          t: 'yellow',
          l: 'magenta',
        },
        (acc: any, val, key) => {
          acc[`\\${key}`] = `\\htmlStyle{color: var(--${val}-color)}{${key}}` // \v => \color{v}
          acc[`\\v${key}`] = `\\htmlStyle{color: var(--${val}-color)}{\\vec{${key}}}` // \vv => \vec{\color{v}}
          acc[`\\u${key}`] = `\\htmlStyle{color: var(--${val}-color)}{\\hat{${key}}}` // \uv => \hat{\color{v}}
        },
        {}
      ),

      // Vectors Parts
      '\\vv': '\\htmlStyle{color: var(--violet-color)}{\\vec{v}}',
      '\\vw': '\\htmlStyle{color: var(--cyan-color)}{\\vec{w}}',
      '\\vu': '\\htmlStyle{color: var(--red-color)}{\\vec{u}}',

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

  processor.use(rehypeHighlight)

  /**
   * Converting to React Element
   */
  processor.use(rehypeReact, {
    createElement: React.createElement,
    components: options.components,
  })
}

export function process(str: string) {
  if (!processor) {
    throw new Error('Processor is not configured')
  }

  if (!processor.data('inline')) {
    str = str.replace(/\!\[\[/g, '- [[')
  } else {
    str = str.replace(/\!\[\[(.*?)\]\]/g, (_, matched: string) => {
      if (matched.includes('|')) {
        let [name, alias] = matched.split('|')

        console.log('markdown.service :: 180', name, alias)
        return `::note[${name}]{alias=${alias}}`
      } else {
        return `::note[${matched}]`
      }
    })
  }

  return processor.processSync(str) as VFileWithOutput<ReactElement>
}
