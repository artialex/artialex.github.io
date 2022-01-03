import { FC, MouseEventHandler, useState } from 'react'
import css from './NoteOutliner.module.scss'
import { useNoteLayout } from '@/notes.canvas-html/contexts/layout'

export const NoteOutliner = () => {
  let [notes, add] = useNoteLayout((state) => [state.notes, state.add])

  let [val, setVal] = useState('')

  let handleAddClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    add(val)
  }

  return (
    <div className={css.root}>
      <p>NoteOutliner</p>
      <div>
        <input type="text" onChange={(e) => setVal(e.target.value)} />
        <button onClick={handleAddClick}>Add</button>
      </div>

      <ul>
        {notes.map((note) => (
          <li key={note}>{note}</li>
        ))}
      </ul>
    </div>
  )
}
