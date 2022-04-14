import { getProcessedNote } from '../../services/notes.api'
import css from './Note.module.scss'
import { FC } from 'react'
import {} from '@reduxjs/toolkit/query/react'
import { Spinner } from '@/ui'
import { useGetProcessedNoteByIdQuery } from '@/notes/notes.api'
import cn from 'clsx'

export enum NoteSize {
  Normal = 'normal',
  Small = 'small',
}

interface NoteProps {
  id: string
  type: 'horizontal' | 'vertical' | 'canvas' | 'tufte' | 'tufte-inclusion'
  small?: boolean
  onClose: () => void
  level?: number
  alias?: string
}

export const Note: FC<NoteProps> = ({ id, level, alias, type = 'horizontal', small = false }) => {
  let { data, error, isLoading } = useGetProcessedNoteByIdQuery(id)

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return (
    <div
      data-id={id}
      className={cn(css.root, [css[type]], {
        [css['hide-title']]: alias,
        [css.small]: small,
      })}
    >
      {alias && <h1>{alias}</h1>}

      {!data || isLoading ? <Spinner /> : data.result}
    </div>
  )
}
