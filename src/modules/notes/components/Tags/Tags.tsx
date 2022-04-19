import { FC } from 'react'
import Link from 'next/link'
import { Tag } from '../Tag'
import css from './Tags.module.scss'
import cn from 'clsx'
import { ignoredTags } from '../../tags.service'
import _ from 'lodash'
import { useGetGraphQuery } from '@/notes/notes.api'

interface TagsProps {
  tags: Record<string, number>
  direction?: 'horizontal' | 'vertical'
}

export const Tags: FC<TagsProps> = ({ tags, direction = 'horizontal' }) => {
  const { data, error, isLoading } = useGetGraphQuery()

  if (!data || isLoading) {
    return <div>Loading...</div>
  }

  return (
    <ul className={cn(css.root, css[direction])}>
      {_.difference(_.keys(tags), ignoredTags)
        .sort((a, b) => data.tags[b] - data.tags[a])
        .map((tag) => (
          <li className={css.item} key={tag}>
            <Tag>{tag}</Tag>
            {data?.tags[tag] > 1 && (
              <sup style={{ color: 'var(--subtle-color)' }}>{data?.tags[tag]}</sup>
            )}
          </li>
        ))}
    </ul>
  )
}
