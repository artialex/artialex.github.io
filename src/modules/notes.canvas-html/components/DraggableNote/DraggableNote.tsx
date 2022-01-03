import cn from 'clsx'
import { CSSProperties, FC, memo, useCallback, useEffect, useMemo } from 'react'
import { DragSourceMonitor, useDrag } from 'react-dnd'
import { Note } from '../Note'
import type { Draggable } from '../../@types/Draggable'
import css from './DraggableNote.module.scss'
import { useRecoilState } from 'recoil'
import { Position } from '@/notes.canvas-html/@types/Position'
import { useNote } from '@/notes.canvas-html/contexts/layout'
import { subscribeWithSelector } from 'zustand/middleware'

interface DraggableNoteProps {
  id: string
}

export const DraggableNote: FC<DraggableNoteProps> = memo(({ id }) => {
  // let [{ x, y }, setNote] = useStore(layout.createNote(id))
  // let [{ x, y }, setNote] = useEffectorState(layout.note(id))
  let [{ x, y }, setNote, fetch] = useNote(id)((state) => [state.position, state.set, state.fetch])

  useEffect(() => {
    console.log('DraggableNote :: 22', 'fetch')
    fetch()
    // console.log('NOTE:', x, y)
  }, [])

  let [{ isDragging }, dragRef] = useDrag(
    () => ({
      type: 'note',
      item: { id, x, y },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),

      end: (a, monitor: DragSourceMonitor) => {
        let result = monitor.getDropResult()

        if (result) {
          setNote({ x: result.x, y: result.y })
        }
      },
    }),
    [id, x, y]
  )

  return (
    <div
      className={css.root}
      style={{
        transform: `translate3d(${x}px, ${y}px, 0)`,
        // visibility: isDragging ? 'hidden' : 'visible',
        // opacity: isDragging ? 0 : 1,
      }}
    >
      <h1 ref={dragRef} className={css.heading}>
        {id}
      </h1>
      <Note id={id} />
    </div>
  )
})
