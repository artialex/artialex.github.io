import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit'

import { notes, notesMiddleware } from '@/notes'
import { theme } from '@/ui.theme'

let reducer = combineReducers({
  notes: notes.reducer,
  theme: theme.reducer,
})

export function makeStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(notesMiddleware),
  })
}

export const store = makeStore()

export type AppState = ReturnType<typeof reducer>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>
