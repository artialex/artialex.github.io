import _ from 'lodash'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { NoteId } from '@/notes'
import type { AppState } from '@/core/core.store'

interface NotesState {
  opened: NoteId[]
}

let initialState: NotesState = {
  opened: ['Hi'],
}

export let notes = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    OPEN: (state, action: PayloadAction<NoteId | NoteId[]>) => {
      console.log('notes :: 18', action.payload)
      state.opened = _.uniq(_.concat(state.opened, action.payload))
    },

    CLOSE: (state, action: PayloadAction<NoteId>) => {
      if (state.opened.length === 1) {
        return
      }

      state.opened = _.without(state.opened, action.payload)
    },

    CLOSE_OTHERS: (state, action: PayloadAction<NoteId>) => {
      state.opened = _.filter(state.opened, action.payload)
    },
  },
})

export let { OPEN, CLOSE, CLOSE_OTHERS } = notes.actions

export let selectOpenedNotes = (state: AppState) => state.notes.opened
