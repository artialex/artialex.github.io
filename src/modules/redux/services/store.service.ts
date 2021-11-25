import { configureStore } from '@reduxjs/toolkit'
import { middleware, reducer } from '@/redux.registries'

export function makeStore() {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middleware),
  })
}

export const store = makeStore()
