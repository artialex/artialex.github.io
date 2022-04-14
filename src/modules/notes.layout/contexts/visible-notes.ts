import { createSelector } from 'reselect'
import { selectScroll } from '@/notes.layout'
import { selectBucketedNotes } from '@/notes.layout/contexts/bucketed-notes'
import { Position } from '@/notes.layout/@types/Posiiton'
import { NoteId } from '@/notes'
import { selectCenter } from '@/notes.layout/contexts/scrolling'
import { BUCKET_STEP, CANVAS_SIZE } from '@/notes.canvas-html/services/canvas.service'

export let selectVisibleNotes = createSelector(
  selectBucketedNotes,
  selectCenter,
  (bucketedNotes, center) => {
    let buckets = getBucketsAround(center)

    return buckets.flatMap((bucket: NoteId) => bucketedNotes[bucket] || [])
  }
)

function getBucketsAround(position: Position): NoteId[] {
  let x = Math.floor(position.x / BUCKET_STEP)
  let y = Math.floor(position.y / BUCKET_STEP)

  let result = []
  let len = CANVAS_SIZE / BUCKET_STEP

  for (let _x = x - 1; _x <= x + 1; _x++) {
    for (let _y = y - 1; _y <= y + 1; _y++) {
      if (_x >= 0 && _y >= 0 && x < len && y < len) {
        result.push(`${_x}-${_y}`)
      }
    }
  }

  return result
}
