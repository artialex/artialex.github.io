import { FC } from 'react'
import css from './DebugWindow.module.scss'
import { selectNotes, selectScroll } from '@/notes.layout'
import { useAppSelector } from '@/core/core.hooks'
import { selectBucket } from '@/notes.layout/contexts/bucket'
import { selectNote } from '@/notes.layout/contexts/notes'
import { selectBucketedNotes } from '@/notes.layout/contexts/bucketed-notes'
import { selectVisibleNotes } from '@/notes.layout/contexts/visible-notes'
import { selectCenter } from '@/notes.layout/contexts/scrolling'

interface DebugWindowProps {}

export const DebugWindow: FC<DebugWindowProps> = (props) => {
  return null
  let scroll = useAppSelector(selectScroll)
  let center = useAppSelector(selectCenter)

  let bucket = useAppSelector(selectBucket)
  let notes = useAppSelector(selectNotes)
  let bucketedNotes = useAppSelector(selectBucketedNotes)

  // let selectedNotes = useAppSelector(selectSelectedNotes)
  let visibleNotes = useAppSelector(selectVisibleNotes)

  return (
    <div className={css.root}>
      <ul>
        <li>
          Scroll: {Math.round(scroll.x)} : {Math.round(scroll.y)} / Center: {Math.round(center.x)} :{' '}
          {Math.round(center.y)} / Bucket: {bucket.x} : {bucket.y}
        </li>
        <li>Notes: {notes.length}</li>
        {/*
        <li>Bucketed Notes: </li>
        {Object.keys(bucketedNotes).map((key) => (
          <ul>
            <li>
              {key}: {bucketedNotes[key].join(', ')}
            </li>
          </ul>
        ))}
*/}
        <li>Visible notes</li>
        {visibleNotes.join(', ')}
      </ul>
      <br />
    </div>
  )
}
