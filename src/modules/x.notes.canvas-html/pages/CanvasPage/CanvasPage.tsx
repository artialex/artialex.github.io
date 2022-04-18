import { MouseEventHandler, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { useDrag, useEventListener, useScroll } from 'ahooks'

import { configure } from '@/markdown'
import { Mode, selectMode, selectScroll, setScroll } from '@/notes.layout'
import { useAppDispatch, useAppSelector } from '@/core/core.hooks'

import { DragContainer } from '../../components/DragContainer'
import { NoteOutliner } from '../../components/NoteOutliner'
import { DebugWindow } from '../../components/DebugWindow'
import { SelectionWindow } from '../../components/SelectionWindow'
import { Toolbar } from '../../components/Toolbar'
import { DynamicMinimap } from '../../components/Minimap'
import { useDraggableScroll } from '../../hooks/useDraggableScroll'

import css from './CanvasPage.module.scss'
import cn from 'clsx'
import { Insertion } from '@/insertions'
import { Position } from '@/notes.layout/@types/Posiiton'

import _ from 'lodash'
import { deselectAll } from '@/notes.layout/contexts/notes'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const Container = () => {
  useEffect(() => {
    configure({
      components: {
        insertion: Insertion,
      },
    })
  }, [])

  const ref = useRef<HTMLDivElement>(null)

  let scroll = useAppSelector(selectScroll)
  let dispatch = useAppDispatch()

  useEffect(() => {
    ref.current!.scrollLeft = scroll.x
    ref.current!.scrollTop = scroll.y
  }, [])

  useEventListener(
    'scroll',
    _.debounce((event) => {
      dispatch(setScroll({ x: event.target.scrollLeft, y: event.target.scrollTop }))
    }, 200),
    { target: ref }
  )

  let mode = useAppSelector(selectMode)

  let [start, setStart] = useState(Position.Zero)
  // let { events } = useScrollOnDrag(ref)

  let { events } = useDraggableScroll(ref, {
    onNonDragClick: () => {
      dispatch(deselectAll())
    },
  })

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <div
          id="container"
          ref={ref}
          className={cn(css.root, { edit: mode === Mode.Edit })}
          {...events}
        >
          <Toolbar />
          <DebugWindow />
          <NoteOutliner />
          <SelectionWindow />
          <DynamicMinimap />
          <DragContainer />
        </div>
      </DndProvider>
    </>
  )
}

export const CanvasPage = () => <Container />
