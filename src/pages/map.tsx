import Link from 'next/link'
import { useGetGraphQuery } from '@/notes/notes.api'
import { PageLayout } from '@/core'
import _ from 'lodash'
import { useRouter } from 'next/router'
import { getPrettyTagName, Tag, Tags } from '@/notes'
import { slugify } from '@/platform/slug.utils'
import { Spinner } from '@/ui'

const MapPage = () => {
  const { data, error, isLoading } = useGetGraphQuery()
  const { query } = useRouter()

  if (!data || isLoading) {
    return <Spinner.Centered />
  }

  let nodes = query.tag ? _.filter(data.nodes, { tags: [query.tag] }) : data.nodes

  return (
    <PageLayout>
      <div style={{ display: 'flex' }}>
        <section style={{ width: 280 }}>
          Narrow by tag:
          <Tags tags={data.tags} direction="vertical" />
        </section>
        <section>
          <span>
            {query.tag ? (
              <span>
                <b>{nodes.length}</b> of <b>{data.nodes.length}</b> pages have{' '}
                <b>#{getPrettyTagName(query.tag as string)}</b> tag
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
                <Link href={`/?id=${slugify(node.id)}`}>
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
