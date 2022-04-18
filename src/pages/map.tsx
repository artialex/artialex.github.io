import Link from 'next/link'
import { useGetGraphQuery } from '@/notes/notes.api'
import { PageLayout } from '@/core'
import _ from 'lodash'
import { useRouter } from 'next/router'
import { getPrettyTagName, Tags } from '@/notes'
import { ParsedUrlQuery } from 'querystring'

const MapPage = () => {
  let { data, error, isLoading } = useGetGraphQuery()
  let { query } = useRouter()

  if (!data || isLoading) {
    return <div>Loading...</div>
  }

  let nodes = query.tag ? _.filter(data.nodes, { tags: [query.tag] }) : data.nodes

  return (
    <PageLayout>
      <div style={{ display: 'flex' }}>
        <section style={{ width: 280 }}>
          <Tags tags={data.tags} direction="vertical" />
        </section>
        <section>
          <span>
            {query.tag ? (
              <span>
                <b>{nodes.length}</b> of <b>{data.nodes.length}</b> pages have{' '}
                <b>#{getPrettyTagName(query.tag)}</b> tag
              </span>
            ) : (
              <span>
                <b>{data?.nodes.length}</b> pages
              </span>
            )}
          </span>
          <ul>
            {nodes.map((node: any) => (
              <li key={node.id}>
                <Link href={node.id}>
                  <a className="internal">{node.id}</a>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </PageLayout>
  )
}

export default MapPage
