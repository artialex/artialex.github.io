import React, { FC, memo } from 'react'
import { useQuery } from 'react-query'
import css from './Note.module.scss'
import { getProcessedNote } from '@/notes'

export enum NoteSize {
  Normal = 'normal',
  Small = 'small',
}

interface NoteProps {
  id: string
}

export const Note: FC<NoteProps> = memo(({ id }) => {
  let { data, error } = useQuery(['note', id], () => getProcessedNote(id))

  if (!data) {
    return null
  }

  return <div className={css.root}>{data.result}</div>
})
