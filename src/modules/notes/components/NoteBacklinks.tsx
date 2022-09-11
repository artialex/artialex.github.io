import { slugify } from '@/utils.platform/slug.utils'
import Link from 'next/link'
import type { FC } from 'react'
import { graphql, useFragment } from 'react-relay'

import type { NoteBacklinksFragment$key } from './__generated__/NoteBacklinksFragment.graphql'

interface Props {
  note: NoteBacklinksFragment$key
}

export const NoteBacklinks: FC<Props> = ({ note }) => {
  const { backlinks } = useFragment<NoteBacklinksFragment$key>(
    graphql`
      fragment NoteBacklinksFragment on Note {
        backlinks {
          title
        }
      }
    `,
    note
  )

  if (!backlinks.length) {
    return null
  }

  return (
    <section className="backlinks -mx-4 mt-4 rounded bg-gray-50 p-4">
      <h2 className="note mb-1 text-xl">Backlinks</h2>
      <ul className="list-bullet pl-6">
        {backlinks.map((backlink) => (
          <li key={backlink.title}>
            <Link href={`/?id=${slugify(backlink.title)}`}>
              <a className="text-blue-500">{backlink.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
