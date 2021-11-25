import _ from 'lodash'
import { Middleware } from 'redux'
import type { AppState } from '@/redux'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { NoteId } from '../@types/Note'
import Router from 'next/router'
import { slugify } from '@/notes/services/slug.utils'

// -- State ----------------------------------------------------------------------------------------

export interface NotesState {
  opened: Array<NoteId>
}

let initialState: NotesState = {
  opened: [],
}

// -- Slice ----------------------------------------------------------------------------------------

export const notes = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<NoteId | NoteId[]>) => {
      state.opened = _.uniq(state.opened.concat(action.payload))
    },
    close: (state, action: PayloadAction<NoteId>) => {
      if (state.opened.length === 1) {
        return
      }

      state.opened = state.opened.filter((_) => _ !== action.payload)
    },
  },
})

// -- Selector -------------------------------------------------------------------------------------

export const selectOpened = (state: AppState) => state.notes.opened

// -- Actions --------------------------------------------------------------------------------------

export const { open, close } = notes.actions

// -- Middleware -----------------------------------------------------------------------------------

export const notesMiddleware: Middleware<{}, AppState> = (store) => (next) => (action) => {
  let performed = next(action)

  if ([open, close].some((_) => _.type === action.type)) {
    void Router.push({
      query: {
        open: store.getState().notes.opened.map(slugify).join(','),
      },
    })
  }

  return performed
}
