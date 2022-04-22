import { FC } from 'react'
import { Tag } from '../Tag'
import css from './Tags.module.scss'
import cn from 'clsx'
import { ignoredTags } from '../../tags.service'
import _ from 'lodash'
import { NodeId, TagId, useGetGraphQuery } from '@/notes/notes.api'
import Link from 'next/link'
import { NoteId } from '@/notes'
import { slugify } from '@/platform/slug.utils'

interface TagsProps {
  id?: NoteId
  tags: TagId[]
  direction?: 'horizontal' | 'vertical'
}

export const Tags: FC<TagsProps> = ({ id, tags, direction = 'horizontal' }) => {
  const { data, error, isLoading } = useGetGraphQuery()

  if (!data || isLoading) {
    return <div>Loading...</div>
  }

  if (_.isEmpty(tags)) {
    return null
  }

  // If every tag contains only this note
  // if (tags.every((tag) => data.graph.tags[tag].length === 1)) {
  //   return null
  // }

  return (
    <div>
      <h2>Tags</h2>
      <div className={cn(css.root, css[direction])}>
        {tags
          .sort((a, b) => data.graph.tags[b].length - data.graph.tags[a].length)
          .map((tag) => (
            <div key={tag}>
              <Tag>{tag}</Tag>
              {data.graph.tags[tag].length > 1 && (
                <sup style={{ color: 'var(--subtle-color)' }}>{data.graph.tags[tag].length}</sup>
              )}
              {direction === 'horizontal' && (
                <ul>
                  {data.graph.tags[tag]
                    // .filter((noteId) => noteId !== id)
                    .map((noteId) => (
                      <li key={noteId}>
                        {noteId === id ? (
                          <span style={{ color: 'var(--subtle-color)' }}>{noteId}</span>
                        ) : (
                          <Link href={`/?id=${slugify(noteId)}`}>
                            <a className="internal">{noteId}</a>
                          </Link>
                        )}
                      </li>
                    ))}
                </ul>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}
