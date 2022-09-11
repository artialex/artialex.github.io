import styled from '@emotion/styled'
import Link from 'next/link'
import { FC } from 'react'
import { graphql, useFragment } from 'react-relay'

import { pluralize } from '@/utils.lang'
import { slugify } from '@/utils.platform/slug.utils'

import { Tag } from './Tag'
import type { NoteSimilarLinksFragment$key } from './__generated__/NoteSimilarLinksFragment.graphql'

interface Props {
  note: NoteSimilarLinksFragment$key
}

export const NoteSimilarLinks: FC<Props> = ({ note }) => {
  const { title, tags } = useFragment(
    graphql`
      fragment NoteSimilarLinksFragment on Note {
        title
        tags {
          id
          notes {
            title
          }
          vaultLinks {
            name
            link
            comment
          }
          ...TagFragment
        }
      }
    `,
    note
  )

  if (!tags.length) {
    return null
  }

  return (
    <section className="similar-links -mx-4 mt-4 rounded bg-gray-50 p-4" style={{ gridArea: 'similar-links' }}>
      <h2 className="text-xl">Similar links</h2>
      <div>
        {tags.map((tag) => (
          <div className="mt-1" key={tag.id}>
            <Tag tag={tag} />{' '}
            <sup>
              {tag.notes.length > 0 && <span className="text-blue-500">{pluralize(tag.notes.length, 'note')}</span>}
            </sup>
            {tag.notes.length > 0 && tag.vaultLinks.length > 0 && <span className="text-gray-400"> / </span>}
            <sub>
              {tag.vaultLinks.length > 0 && (
                <span className="text-pink-500">{pluralize(tag.vaultLinks.length, 'ext. link')}</span>
              )}
            </sub>
            <ul className="list-bullet pl-6">
              {tag.notes.map((n) => (
                <li key={n.title}>
                  {title === n.title ? (
                    <span className="text-gray-400">{title}</span>
                  ) : (
                    <Link href={`/?id=${slugify(n.title)}`}>
                      <a className="text-blue-500">{n.title}</a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <ul className="list-bullet pl-6">
              {tag.vaultLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.link} className="text-pink-500" target="_blank">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
