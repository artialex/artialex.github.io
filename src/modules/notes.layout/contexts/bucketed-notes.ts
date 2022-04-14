import { createSelector } from 'reselect'
import { selectNotes } from '@/notes.layout'
import { Position } from '@/notes.layout/@types/Posiiton'
import { NoteId } from '@/notes'
import { BUCKET_STEP } from '@/notes.canvas-html/services/canvas.service'

export let selectBucketedNotes = createSelector(selectNotes, (notes) => {
  let result: Record<string, NoteId[]> = {}

  for (let [id, position] of notes) {
    if (result[bucketKey(position)]) {
      result[bucketKey(position)].push(id)
    } else {
      result[bucketKey(position)] = [id]
    }
  }

  return result
})

export function bucketKey(position: Position) {
  let x = Math.floor(position.x / BUCKET_STEP)
  let y = Math.floor(position.y / BUCKET_STEP)

  return `${x}-${y}`
}
