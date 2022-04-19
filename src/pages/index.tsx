import { PageLayout } from '@/core'
import { GetServerSideProps } from 'next'
import { useGetProcessedNoteByIdQuery } from '@/notes/notes.api'
import { FC, useEffect } from 'react'
import { Spinner } from '@/ui'
import { configure, process } from '@/markdown'
import Link from 'next/link'
import { Combinatorics, Insertion } from '@/insertions'
import { Tags } from '@/notes'
import _ from 'lodash'
import { useRouter } from 'next/router'
import { slugify, unslugify } from '@/platform/slug.utils'
import Head from 'next/head'
import { useSpring, animated } from '@react-spring/web'

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

      <Note id={unslugify(query.id as string)} />
    </>
  )
}

interface NoteProps {
  id: string
}

const Note: FC<NoteProps> = ({ id }) => {
  // console.log('index :: 60', id)

  let { data, error, isLoading } = useGetProcessedNoteByIdQuery(id)

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  if (!data || isLoading) {
    return <Spinner.Centered />
  }

  let processed = process(data)

  let tags: Record<string, number> = _.reduce(
    // @ts-ignore
    processed.data.tags,
    (acc, cur: string) => ({ ...acc, [cur]: 1 }),
    {}
  )

  return (
    <PageLayout>
      <Tags tags={tags} />
      {processed.result}
    </PageLayout>
  )
}

export default IndexPage
