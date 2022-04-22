import { FC, useEffect } from 'react'
import { RoughMark } from '@/ui'
import { configure } from '@/markdown'
import Link from 'next/link'
import { Combinatorics, Insertion } from '@/insertions'
import { Note } from '@/notes'
import { useRouter } from 'next/router'
import { slugify, unslugify } from '@/platform/slug.utils'
import Head from 'next/head'
import { PageLayout } from '@/core'

// todo: handle md configuration better?
configure({
  components: {
    a: (props: any) => {
      const isInternal = props.className?.includes
      const href = isInternal ? `/?id=${slugify(props.href)}` : props.href
      const target = isInternal ? '_self' : '_blank'
      const className = isInternal ? 'internal' : 'external'

      return (
        <Link href={href}>
          <a target={target} className={className}>
            {props.children[0]}
          </a>
        </Link>
      )
    },
    insertion: Insertion,
    combinatorics: Combinatorics,
    mark: RoughMark,
  },
})

export const IndexPage: FC = () => {
  let { query, isReady, replace } = useRouter()

  useEffect(() => {
    if (isReady && !query.id) {
      void replace({
        query: {
          id: 'Hi',
        },
      })
    }
  }, [isReady, query.id])

  if (!query.id) {
    return null
  }

  return (
    <>
      <Head>
        <title>Garden {query.id && `• ${query.id}`}</title>
      </Head>

      <PageLayout>
        <Note id={unslugify(query.id as string)} />
      </PageLayout>
    </>
  )
}

export default IndexPage
