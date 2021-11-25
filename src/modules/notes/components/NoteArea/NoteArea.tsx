import { Note } from '../Note'
import css from './NoteArea.module.scss'
import { close, selectOpened } from '@/notes/contexts/notes'
import { useAppDispatch, useAppSelector } from '@/redux.hooks'

export const NoteArea = () => {
  let opened = useAppSelector(selectOpened)
  let dispatch = useAppDispatch()

  return (
    <main className={css.root}>
      {opened.map((note) => (
        <Note key={note} onClose={() => dispatch(close(note))} id={note} />
      ))}
    </main>
  )
}
