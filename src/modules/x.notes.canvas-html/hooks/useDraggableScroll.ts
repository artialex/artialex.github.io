import { MouseEventHandler, RefObject, useCallback, useEffect, useRef, useState } from 'react'
import { Position } from '@/notes.layout/@types/Posiiton'
import _ from 'lodash'

export function useDraggableScroll(ref: RefObject<HTMLDivElement>, { onNonDragClick }: any) {
  let state = useRef<{
    startMouseX: number | null
    startMouseY: number | null

    isDragging: boolean
    isMouseDown: boolean
  }>({
    startMouseX: null,
    startMouseY: null,

    isDragging: false,
    isMouseDown: false,
  })

  let [isDragging, setDragging] = useState(false)

  let scroll = useCallback((position: Position) => {
    ref.current!.scrollLeft += position.x
    ref.current!.scrollTop += position.y
  }, [])

  let handleMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
    console.log('down')
    state.current.isMouseDown = true
    state.current.startMouseX = event.clientX
    state.current.startMouseY = event.clientY
  }

  let handleMouseUp: MouseEventHandler<HTMLDivElement> = () => {
    console.log('up')
    state.current.isMouseDown = false
    state.current.startMouseX = null
    state.current.startMouseY = null

    console.log('useDraggableScroll :: 33', isDragging)

    if (state.current.isDragging) {
      // onDragEnd
      console.log('useDraggableScroll :: 37', 'one')
    } else {
      onNonDragClick()
      console.log('useDraggableScroll :: 37', 'two')
    }

    state.current.isDragging = false
  }

  let handleMouseMove: MouseEventHandler<HTMLDivElement> = _.throttle((event) => {
    if (!state.current.isMouseDown) {
      return
    }

    if (!state.current.isDragging) {
      state.current.isDragging = true
      // onDragStart
    }
    console.log('move')

    let x = -(event.clientX - state.current.startMouseX!)
    let y = -(event.clientY - state.current.startMouseY!)

    state.current.startMouseX = event.clientX
    state.current.startMouseY = event.clientY

    scroll({ x, y })
  }, 16)

  return {
    events: {
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp,
      onMouseMove: handleMouseMove,
    },
  }
}
