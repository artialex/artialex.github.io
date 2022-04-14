import { createSelector } from 'reselect'
import { selectScroll } from '@/notes.layout'

export let selectVisibleNotes = createSelector(selectNotes, selectScroll, (notes, scroll) => {})
