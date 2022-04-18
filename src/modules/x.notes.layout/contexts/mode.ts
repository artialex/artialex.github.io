import { createSlice } from '@reduxjs/toolkit'
import type { AppState } from '@/redux'
import { Mode } from '../@types/Mode'

interface ModeState {
  mode: Mode
}

let initialState: ModeState = {
  mode: Mode.View,
}

export let mode = createSlice({
  name: 'mode',
  initialState: initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload
    },
  },
})

export let { setMode } = mode.actions
export let selectMode = (state: AppState) => state.mode.mode
