import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import { PersistConfig } from 'redux-persist/es/types'
import storage from 'redux-persist/lib/storage'

import { core } from './core.slice'
// import { notes, notesMiddleware } from '@/notes.standard'
import { notesApi } from '@/notes/notes.api'

let reducer = combineReducers({
  // core: core.reducer,
  // notes: notes.reducer,
  [notesApi.reducerPath]: notesApi.reducer,
})

export let store = configureStore({
  reducer: persistReducer(
    {
      key: '_app',
      storage,
      blacklist: [notesApi.reducerPath],
      whitelist: [
        /*'scroll', 'mode', 'notes'*/
      ],
    },
    reducer
  ),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      // notesMiddleware.middleware
    ]),
})

export type AppState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch

export let persistor = persistStore(store)
