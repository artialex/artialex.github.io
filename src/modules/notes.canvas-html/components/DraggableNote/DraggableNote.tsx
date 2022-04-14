import cn from 'clsx'
import { FC, memo } from 'react'
import { Mode, selectMode, setBy, useSelectionState } from '@/notes.layout'
import { Note } from '@/notes'
import css from './DraggableNote.module.scss'
import _ from 'lodash'
import { useAppDispatch, useAppSelector } from '@/core/core.hooks'
import { selectNote, selectSelectedNotes, toggleSelection } from '@/notes.layout/contexts/notes'
import { selectVisibleNotes } from '@/notes.layout/contexts/visible-notes'
import { DragSourceMonitor, useDrag } from 'react-dnd'

interface DraggableNoteProps {
  id: string
}

export const DraggableNote: FC<DraggableNoteProps> = memo(({ id }) => {
  let mode = useAppSelector(selectMode)
  let visibleNotes = useAppSelector(selectVisibleNotes)
  let selectedNotes = useAppSelector(selectSelectedNotes)

  let { x, y } = useAppSelector(selectNote(id))
  let dispatch = useAppDispatch()

  let [{ isDragging }, dragRef] = useDrag(
    () => ({
      canDrag: mode === Mode.Edit,
      type: 'note',
      item: { id, x, y },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),

      end: (a, monitor: DragSourceMonitor) => {
        let result = monitor.getDropResult()

        if (!result) {
          return
        }

        if (_.includes(selectedNotes, id)) {
          selectedNotes.forEach((id) => {
            dispatch(setBy({ id, delta: result.delta }))
          })
        } else {
          dispatch(setBy({ id, delta: result.delta }))
        }
      },
    }),
    [id, x, y, mode, selectedNotes]
  )

  let handleHeaderClick = (event) => {
    event.stopPropagation()
    event.bubbles = false

    if (mode === Mode.Edit) {
      dispatch(toggleSelection(id))
    }
  }

  return (
    <div
      ref={dragRef}
      className={cn(css.root, {
        [css.selected]: _.includes(selectedNotes, id),
      })}
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
      onMouseUp={(event) => {
        event.bubbles = false
        event.stopPropagation()
      }}
      onMouseDown={(event) => {
        event.bubbles = false
        event.stopPropagation()
      }}
      onClick={handleHeaderClick}
    >
      <Note id={id} type="canvas" />
      <h1 className={css.heading}>{id}</h1>
    </div>
  )
})
