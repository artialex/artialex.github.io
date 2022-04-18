import create from 'zustand'
import { persist } from 'zustand/middleware'
import { Position } from '../@types/Posiiton'
import { createEvent, createStore, restore } from 'effector'
import { withPersist } from 'effector-persist'
import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '@/redux'
import { createSelector } from 'reselect'

interface ScrollState {
  position: Position
}

let initialState: ScrollState = {
  position: Position.Zero,
}

export let scroll = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScroll: (state, action) => {
      state.position = action.payload
    },
  },
})

export let { setScroll } = scroll.actions
export let selectScroll = (state: AppState) => state.scroll.position

export let selectCenter = createSelector(selectScroll, (scroll) => ({
  x: scroll.x + window.innerWidth / 2,
  y: scroll.y + window.innerHeight / 2,
}))
