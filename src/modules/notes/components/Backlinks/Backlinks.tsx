import { FC } from 'react'
import Link from 'next/link'
import css from './Backlinks.module.scss'
import { useGetGraphQuery } from '@/notes/notes.api'
import { Spinner } from '@/ui'
import { slugify } from '@/platform/slug.utils'

interface BacklinksProps {
  id: string
}

export const Backlinks: FC<BacklinksProps> = ({ id }) => {
  let { data, error, isLoading } = useGetGraphQuery()

  if (!data || isLoading) {
    return <Spinner />
  }

  if (!data.graph.nodes[id]) {
    return null
  }

  return (
    <div className={css.root}>
      <h2>Backlinks</h2>
      <ul>
        {data.graph.nodes[id].backlinks.map((backlink) => (
          <li key={backlink}>
            <Link href={`?id=${slugify(backlink)}`}>
              <a className="internal">{backlink}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
