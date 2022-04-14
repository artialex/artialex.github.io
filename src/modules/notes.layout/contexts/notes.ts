import _ from 'lodash'
import { NoteId } from '@/notes'
import { Position } from '../@types/Posiiton'
import { createSlice } from '@reduxjs/toolkit'
import type { AppState } from '@/redux'
import { createSelector } from 'reselect'

interface NotesState {
  record: Record<NoteId, Position>
  selected: NoteId[]
}

let initialState: NotesState = {
  record: {},
  selected: [],
}

export let notes = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    set: (state, action) => {
      _.set(state.record, action.payload.id, action.payload.position)
    },

    setBy: (state, action) => {
      _.set(state.record, action.payload.id, {
        x: state.record[action.payload.id].x + action.payload.delta.x,
        y: state.record[action.payload.id].y + action.payload.delta.y,
      })
    },

    remove: (state, action) => {
      state.record = _.omit(state.record, action.payload)
    },

    select: (state, action) => {
      state.selected = _.concat(state.selected, action.payload)
    },

    deselect: (state, action) => {
      state.selected = _.without(state.selected, action.payload)
    },

    deselectAll: (state) => {
      state.selected = []
    },

    toggleSelection: (state, action) => {
      if (_.includes(state.selected, action.payload)) {
        state.selected = _.without(state.selected, action.payload)
      } else {
        state.selected = _.concat(state.selected, action.payload)
      }
    },
  },
})

export let { set, setBy, remove, deselectAll, toggleSelection } = notes.actions

export let selectNotes = (state: AppState) => Object.entries(state.notes.record)
export let selectNoteId = (state: AppState, id: NoteId) => id
export let selectNote = (id: NoteId) => (state: AppState) => state.notes.record[id]

export let selectSelectedNotes = (state: AppState) => state.notes.selected
