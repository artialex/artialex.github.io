import { createSlice } from '@reduxjs/toolkit'
import { AppState } from '@/redux'

enum Theme {
  Dark = 'dark-theme',
  Light = 'light-theme',
}

// -- State ----------------------------------------------------------------------------------------

export interface ThemeState {
  current: Theme
}

let initialState: ThemeState = {
  current: Theme.Light,
}

// -- Slice ----------------------------------------------------------------------------------------

export const theme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {
      state.current = state.current === Theme.Dark ? Theme.Light : Theme.Dark
    },
  },
})

// -- Selector -------------------------------------------------------------------------------------

export const themeCurrent = (state: AppState) => state.theme.current

// -- Actions --------------------------------------------------------------------------------------

export const { toggle } = theme.actions

/*
const THEME_KEY = 'theme'

export function create() {
  /!* let toggle = domain.event()
  let $current = domain.store(Theme.Light).on(toggle, (state) => {
    return state === Theme.Dark // fixme?
      ? Theme.Light
      : Theme.Dark
  })

  sample(toggle, $current, (_, type) => {
    let { classList } = document.body

    if (type === Theme.Dark) {
      classList.remove(Theme.Light)
      classList.add(Theme.Dark)
    } else {
      classList.remove(Theme.Dark)
      classList.add(Theme.Light)
    }
  })

  return {
    toggle,
    $current,
  }*!/
}

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    getItem(THEME_KEY).then((theme) => {
      document.body.classList.add((theme as string) ?? Theme.Light)
    })
  })
  // Client-side-only code
}
*/
