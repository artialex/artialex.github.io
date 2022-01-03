import { useEffect, useRef } from 'react'
import { useQuery } from 'react-query'
import { configure } from '@/markdown'
import { DragContainer } from '../../DragContainer'
import { RecoilRoot } from 'recoil'
import { NoteOutliner, Toolbar } from '@/notes.canvas-html'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

export const CanvasPage = () => {
  useEffect(() => {
    configure({ components: {} })
  }, [])

  return (
    <DndProvider backend={HTML5Backend}>
      <RecoilRoot>
        <Toolbar />
        <NoteOutliner />
        <DragContainer />
        {/*<DragLayer />*/}
      </RecoilRoot>
    </DndProvider>
  )
}
