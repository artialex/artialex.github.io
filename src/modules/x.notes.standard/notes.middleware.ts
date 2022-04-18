import { createListenerMiddleware, isAnyOf, TypedStartListening } from '@reduxjs/toolkit'
import { CLOSE, CLOSE_OTHERS, OPEN } from '@/notes.standard/notes.slice'
import Router from 'next/router'
import type { AppDispatch, AppState } from '@/core/core.store'
import { slugify } from '@/lang/string'
import _ from 'lodash'

export let notesMiddleware = createListenerMiddleware()

let startListening = notesMiddleware.startListening as TypedStartListening<AppState, AppDispatch>

startListening({
  matcher: isAnyOf(OPEN, CLOSE, CLOSE_OTHERS),
  effect: (_, api) => {
    void Router.push(
      {
        query: {
          open: api.getState().notes.opened.map(slugify).join(','),
        },
      },
      undefined,
      { shallow: true }
    )
  },
})

startListening({
  actionCreator: OPEN,
  effect: (action, api) => {
    _.defer(() => {
      document.querySelector(`[data-id="${action.payload}"]`)!.scrollIntoView({
        behavior: 'smooth',
      })
    })
    // setTimeout(() => {
    // }, 0)
    // void Router.push({
    //   query: {
    //     open: api.getState().notes.opened.map(slugify).join(','),
    //   },
    // })
  },
})
