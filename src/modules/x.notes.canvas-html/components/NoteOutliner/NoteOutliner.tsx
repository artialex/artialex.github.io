import { useCallback, useState } from 'react'
import css from './NoteOutliner.module.scss'
import { useAppDispatch, useAppSelector } from '@/core/core.hooks'
import { remove, selectNotes, set } from '@/notes.layout'
import { selectCenter } from '@/notes.layout/contexts/scrolling'

export const NoteOutliner = () => {
  let notes = useAppSelector(selectNotes)
  let center = useAppSelector(selectCenter)
  let dispatch = useAppDispatch()

  // let setScroll = useScrollState((state) => state.set)
  let [val, setVal] = useState('')

  let handleAddClick = useCallback(() => dispatch(set({ id: val, position: center })), [val])
  let handleRemoveClick = useCallback((id) => dispatch(remove(id)), [])
  let handleMoveToClick = useCallback((id) => {
    let [, position] = notes.find(([key]) => key === id)! as any

    let element = document.getElementById('container')

    element!.scrollLeft = position.x - window.innerWidth / 2 + 300
    element!.scrollTop = position.y - window.innerHeight / 2 + 300
  }, [])

  return (
    <div className={css.root}>
      <div>
        <input type="text" onChange={(e) => setVal(e.target.value)} />
        <button onClick={handleAddClick}>Add</button>
      </div>

      <div className={css.container}>
        <table className={css.table}>
          <tbody>
            {notes.map(([id]) => (
              <tr key={id}>
                <td>
                  <button className={css.button} onClick={() => handleMoveToClick(id)}>
                    {id}
                  </button>
                </td>
                <td>
                  <button className={css.button} onClick={() => handleRemoveClick(id)}>
                    ✖
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
