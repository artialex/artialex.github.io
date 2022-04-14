import { createSlice } from '@reduxjs/toolkit'

interface CoreState {}

let initialState: CoreState = {
  app: null,
}

export let core = createSlice({
  name: 'core',
  initialState,
  reducers: {},
})
