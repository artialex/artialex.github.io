import { FC, MouseEventHandler, useCallback, useEffect, useState } from 'react'
import css from './CanvasStage.module.scss'
import { Layer, Stage, Rect, Group } from 'react-konva'
import { Note } from '../Note'
import { QueryClientProvider } from '@/api'
import { configure } from '@/markdown'
import Konva from 'konva'
import _ from 'lodash'

interface CanvasStageProps {}

export const CanvasStage: FC<CanvasStageProps> = (props) => {
  useEffect(() => {
    configure({
      components: [],
    })
  }, [])

  let [state, setState] = useState({
    isDragging: false,
    rel: { x: 0, y: 0 },
    scr: { x: 0, y: 0 },
  })

  /*
  let handleDragStart = (event: HTMLElementEventMap['mousedown']) => {
    console.log('start')
    setState(() => ({
      isDragging: true,
      rel: { x: event.x, y: event.y },
      scr: { x: window.scrollX, y: window.scrollY },
    }))
  }

  function handleDragEnd() {
    console.log('end')
    setState((prev) => ({ ...prev, isDragging: false }))
  }

  let handleDragMove = useCallback(
    (event: HTMLElementEventMap['mousemove']) => {
      if (state.isDragging) {
        window.scrollTo(
          state.scr.x + state.rel.x - event.clientX,
          state.scr.y + state.rel.y - event.clientY
        )
      }
    },
    [state]
  )

  useEffect(() => {
    addEventListener('mousedown', handleDragStart, false)
    addEventListener('mouseup', handleDragEnd)
    addEventListener('mousemove', handleDragMove)

    return () => {
      removeEventListener('mousedown', handleDragStart)
      removeEventListener('mouseup', handleDragEnd)
      removeEventListener('mousemove', handleDragMove)
    }
  }, [handleDragMove])
*/

  return (
    <>
      <div style={{ position: 'fixed', zIndex: 100, right: 0, bottom: 0 }}>
        Dragging: {JSON.stringify(state.isDragging)}
      </div>
      <Stage
        // draggable
        className="kek"
        onClick={() => {
          console.log('click')
        }}
        onContextMenu={() => {
          console.log('context menu')
        }}
        width={innerWidth}
        height={innerHeight}
        // style={{ width: '300vw', height: '300vh' }}
        // width={window.outerWidth}
        // height={window.outerHeight}
        /*
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDragMove}
*/
      >
        <QueryClientProvider>
          <Layer>
            <Rect x={0} y={0} width={100} height={100} fill="red" />

            <Note id="Vector" x={0} y={0} />
            <Note id="Matrix" x={780} y={40} />
            <Note id="Vector magnitude" x={1400} y={100} />
            <Note id="Linear algebra" x={1400} y={1400} />
            <Note id="Matrix addition" x={1000} y={2600} />
            <Note id="Linear transformations" x={1600} y={3600} />
          </Layer>
        </QueryClientProvider>
      </Stage>
    </>
  )
}
