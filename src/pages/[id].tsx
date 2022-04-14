import { PageLayout } from '@/core'
import { GetServerSideProps } from 'next'
import { useGetProcessedNoteByIdQuery } from '@/notes/notes.api'
import { FC } from 'react'
import { Spinner } from '@/ui'
import { configure, process } from '@/markdown'
import Link from 'next/link'
import { Combinatorics, Insertion } from '@/insertions'

export const getServerSideProps: GetServerSideProps = async ({ query }) => ({
  props: {
    id: query.id,
  },
})

interface IndexPageProps {
  id: string
}

configure({
  components: {
    a: (props: any) => {
      return (
        <Link href={props.href}>
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

export const IndexPage: FC<IndexPageProps> = (props) => {
  let { data, error, isLoading } = useGetProcessedNoteByIdQuery(props.id)

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return <PageLayout>{!data || isLoading ? <Spinner /> : process(data).result}</PageLayout>
}

export default IndexPage