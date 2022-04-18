import { FC, useCallback } from 'react'
import css from './SelectionWindow.module.scss'
import { useSelectionState } from '@/notes.layout'

interface SelectionWindowProps {}

export const SelectionWindow: FC<SelectionWindowProps> = (props) => {
  let [selected, deselect, deselectAll] = useSelectionState((state) => [
    state.selected,
    state.deselect,
    state.deselectAll,
  ])

  let handleButtonClick = useCallback((id) => deselect(id), [])

  if (selected.length === 0) {
    return null
  }

  return (
    <div className={css.root}>
      <table className={css.table}>
        <tbody>
          <tr>
            <td>
              <button className={css.button} onClick={() => deselectAll()}>
                Deselect All
              </button>
            </td>
          </tr>
          {selected.map((id) => (
            <tr key={id}>
              <td>{id}</td>
              <td>
                <button className={css.button} onClick={() => handleButtonClick(id)}>
                  ✖
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/*
      <ul className={css.list}>
        {selected.map((id) => (
          <li key={id}>
            <button className={css.button} onClick={() => handleButtonClick(id)}>
              ✖
            </button>
            {id}
          </li>
        ))}
      </ul>
      */}
    </div>
  )
}
