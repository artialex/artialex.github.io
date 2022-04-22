import Link from 'next/link'
import { useGetGraphQuery } from '@/notes/notes.api'
import { PageLayout } from '@/core'
import _ from 'lodash'
import { useRouter } from 'next/router'
import { getPrettyTagName, Tag, Tags } from '@/notes'
import { slugify } from '@/platform/slug.utils'
import { Spinner } from '@/ui'
import Head from 'next/head'

const MapPage = () => {
  const { data, error, isLoading } = useGetGraphQuery()
  const { query } = useRouter()

  if (!data || isLoading) {
    return <Spinner.Centered />
  }

  return (
    <PageLayout>
      <Head>
        <title>Garden • Map</title>
      </Head>
      <div style={{ display: 'flex', gap: '6rem' }}>
        <section style={{ width: 800 }}>
          <h2>
            {query.tag ? (
              <span>
                {_.size(_.get(data.graph.tags, query.tag))} of {_.size(data.graph.nodes)} pages have{' '}
                <Tag>{query.tag as string}</Tag>tag
              </span>
            ) : (
              <span>
                <b>{_.size(data.graph.nodes)}</b> pages
              </span>
            )}
          </h2>
          <ul>
            {(query.tag ? data.graph.tags[query.tag as string] : _.keys(data.graph.nodes)).map(
              (node: any) => (
                <li key={node}>
                  <Link href={`/?id=${slugify(node)}`}>
                    <a className="internal">{node}</a>
                  </Link>
                </li>
              )
            )}
          </ul>
        </section>
        <section>
          <Tags tags={_.keys(data.graph.tags)} direction="vertical" />
        </section>
      </div>
    </PageLayout>
  )
}

export default MapPage
