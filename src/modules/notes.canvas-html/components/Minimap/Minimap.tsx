import { FC, useRef, useState } from 'react'
import css from './Minimap.module.scss'
import { Layer, Rect, Stage } from 'react-konva'
import { Html } from 'react-konva-utils'
import { selectNotes, selectScroll, setScroll } from '@/notes.layout'
import { useAppDispatch, useAppSelector } from '@/core/core.hooks'
import { MINIMAP_SIZE, MULTIPLIER } from '@/notes.canvas-html/services/canvas.service'

interface MinimapProps {}

export const Minimap: FC<MinimapProps> = (props) => {
  let ref = useRef<HTMLCanvasElement>(null)
  let notes = useAppSelector(selectNotes)
  let position = useAppSelector(selectScroll)
  let dispatch = useAppDispatch()
  let [open, setOpen] = useState(true)

  let handleMapClick = ({ evt }) => {
    let element = document.getElementById('container')

    element!.scrollLeft = evt.offsetX * MULTIPLIER - window.innerWidth / 2
    element!.scrollTop = evt.offsetY * MULTIPLIER - window.innerHeight / 2
  }

  return (
    <div className={css.root}>
      <button className={css.button} onClick={() => setOpen((prev) => !prev)}>
        {open ? 'Hide' : 'Show'}
      </button>
      {open && (
        <Stage width={MINIMAP_SIZE} height={MINIMAP_SIZE} onClick={handleMapClick}>
          <Layer>
            {notes.map(([key, pos]) => (
              <Rect
                key={key}
                x={pos.x / MULTIPLIER}
                y={pos.y / MULTIPLIER}
                width={2}
                height={2}
                fill="black"
              />
            ))}

            <Rect
              x={position.x / MULTIPLIER}
              y={position.y / MULTIPLIER}
              width={window.innerWidth / MULTIPLIER}
              height={window.innerHeight / MULTIPLIER}
              stroke="red"
              strokeWidth={1}
            />
          </Layer>
        </Stage>
      )}
    </div>
  )
}
