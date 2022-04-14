import { useDrop } from 'react-dnd'
import { Draggable } from '../../@types/Draggable'
import css from './DragContainer.module.scss'
import { Position } from '@/notes.layout/@types/Posiiton'
import { selectNotes, useSelectionState } from '@/notes.layout'
import { useAppSelector } from '@/core/core.hooks'
import { selectVisibleNotes } from '@/notes.layout/contexts/visible-notes'
import { DraggableNote } from '@/notes.canvas-html/components/DraggableNote'
import { CANVAS_SIZE } from '@/notes.canvas-html/services/canvas.service'

export const DragContainer = () => {
  let visibleNotes = useAppSelector(selectVisibleNotes)
  let deselectAll = useSelectionState((state) => state.deselectAll)

  let [, containerRef] = useDrop(
    () => ({
      accept: 'note',
      drop: (item: Draggable, monitor) => ({
        delta: monitor.getDifferenceFromInitialOffset() as Position,
      }),
    }),
    []
  )

  function handleContainerClick(event) {
    deselectAll()
  }

  return (
    <div
      ref={containerRef}
      className={css.root}
      onClick={handleContainerClick}
      style={{ width: CANVAS_SIZE, height: CANVAS_SIZE }}
    >
      {visibleNotes.map((id) => (
        <DraggableNote key={id} id={id} />
      ))}
    </div>
  )
}
