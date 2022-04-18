import { Note } from '@/notes'
import { CLOSE, selectOpenedNotes } from '../../notes.slice'
import { useAppDispatch, useAppSelector } from '@/core/core.hooks'
import cn from 'clsx'
import { FC } from 'react'
import css from './NoteArea.module.scss'

interface NoteAreaProps {
  type: 'vertical' | 'horizontal'
}

export const NoteArea: FC<NoteAreaProps> = ({ type }) => {
  let opened = useAppSelector(selectOpenedNotes)
  let dispatch = useAppDispatch()

  return (
    <main className={cn(css.root, [css[type]])}>
      {opened.map((note) => (
        <Note type={type} key={note} onClose={() => dispatch(CLOSE(note))} id={note} />
      ))}
    </main>
  )
}
