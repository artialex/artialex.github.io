import { FC } from 'react'
import css from './Note.module.scss'
import { useQuery } from 'react-query'
import { Notes } from '@/notes'
import { Html } from 'react-konva-utils'

interface NoteProps {
  id: string
  x: number
  y: number
}

export const Note: FC<NoteProps> = ({ id, x, y }) => {
  let { data } = useQuery(['note', id], () => Notes.getProcessedNote(id))

  if (!data) {
    return null //<span>Loading</span>
  }

  // console.log('Note :: 18', data)

  return (
    <Html groupProps={{ x, y }} divProps={{ className: css.root }}>
      {data.result}
    </Html>
  )
}
