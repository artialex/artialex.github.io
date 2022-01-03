import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useDrop } from 'react-dnd'
import { Draggable } from '../../@types/Draggable'
import { Position } from '../../@types/Position'
import { DraggableNote } from '../DraggableNote'
import css from './DragContainer.module.scss'
import { useMutation, useQuery } from 'react-query'
import { NoteId } from '@/notes/@types/Note'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { useNote, useNoteLayout } from '@/notes.canvas-html/contexts/layout'
import { NoteLayout } from '@/notes.canvas-html/services/NoteLayoutService'
// import { createNoteAtom, noteListState } from '@/notes.canvas/contexts/layout'

export const DragContainer = () => {
  // let { data: positions } = useQuery('positions', () => getAllNotePositions(), {
  //   keepPreviousData: true,
  // })

  // let save = useMutation(({ id, pos }) => saveNotePosition(id, pos).then(() => refetch()))

  // console.log(positions)

  /*
  let [boxes, setBoxes] = useState<Record<string, Omit<Draggable, 'type'>>>({
    Vector: { top: 20, left: 80, id: 'Vector' },
    Matrix: { top: 180, left: 20, id: 'Matrix' },
  })
*/

  /*
  let move = useCallback(
    (id, left, top) => {
      setBoxes((prev) => ({ ...prev, [id]: { left, top, id } }))
    },
    [boxes]
  )
*/
  let [notes, fetchNotes] = useNoteLayout((state) => [state.notes, state.fetch])
  // let state = useMemo(() => useNote('Vector'), [])((state) => state.position) //.subscribe((state) => state.position)
  let state = useNote('Vector')((_) => _.position)

  useEffect(() => {
    void fetchNotes()
  }, [])

  let [, containerRef] = useDrop(
    () => ({
      accept: 'note',
      drop: (item: Draggable, monitor) => {
        let delta = monitor.getDifferenceFromInitialOffset() as Position

        return {
          x: Math.round(item.x + delta.x),
          y: Math.round(item.y + delta.y),
        }
      },
    }),
    []
  )

  /*
  if (!positions) {
    return <span>Loading</span>
  }
*/

  return (
    <div ref={containerRef} className={css.root}>
      {JSON.stringify(notes)}
      {JSON.stringify(state)}
      {notes.map((note) => (
        <DraggableNote key={note} id={note} />
      ))}
    </div>
  )
}
