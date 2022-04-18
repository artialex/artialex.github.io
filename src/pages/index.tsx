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

configure({
  components: {
    a: (props: any) => {
      return (
        <Link href={`/?id=${slugify(props.href)}`}>
          <a
            target={props.className?.includes ? '' : '_blank'}
            className={props.className?.includes ? 'internal' : 'external'}
          >
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
  let { query, replace } = useRouter()

  // let id = query.open || 'Hi'

  useEffect(() => {
    if (!query.id) {
      void replace({
        query: {
          id: 'Hi',
        },
      })
    }
  }, [query.id])

  if (!query.id) {
    return null
  }

  return <Note id={unslugify(query.id as string)} />
}

interface NoteProps {
  id: string
}

const Note: FC<NoteProps> = ({ id }) => {
  console.log('index :: 60', id)

  let { data, error, isLoading } = useGetProcessedNoteByIdQuery(id)

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  if (!data || isLoading) {
    return <Spinner />
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
