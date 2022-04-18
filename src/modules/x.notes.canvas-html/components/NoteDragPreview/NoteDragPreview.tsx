import { FC, memo, useEffect, useState } from 'react'
import css from './NoteDragPreview.module.scss'

// import { Note } from '../c'

interface NoteDragPreviewProps {
  title: string
  preview: any
}

export const NoteDragPreview: FC<NoteDragPreviewProps> = memo(({ title }) => {
  /*
  let [tick, setTick] = useState(false)

  useEffect(() => {
    let interval = setInterval(() => setTick(!tick), 500)

    return () => clearInterval(interval)
  }, [])
*/

  return <div className={css.root}>{/*<Note title={title} preview />*/}</div>
})
