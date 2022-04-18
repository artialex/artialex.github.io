import { AppState } from '@/redux'
import { createSelector } from 'reselect'
import { selectCenter } from '@/notes.layout/contexts/scrolling'
import { BUCKET_STEP } from '@/notes.canvas-html/services/canvas.service'

export let selectBucket = createSelector(selectCenter, (center) => ({
  x: Math.floor(center.x / BUCKET_STEP),
  y: Math.floor(center.y / BUCKET_STEP),
}))
