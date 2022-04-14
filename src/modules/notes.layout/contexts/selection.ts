import _ from 'lodash'
import { NoteId } from '@/notes'
import create from 'zustand'

interface SelectionState {
  selected: NoteId[]

  select: (id: NoteId) => void
  deselect: (id: NoteId) => void
  deselectAll: () => void
  toggleSelection: (id: NoteId) => void
}

export let useSelectionState = create<SelectionState>((set, get) => ({
  selected: [],

  select: (id) =>
    set((state) => ({
      selected: _.concat(state.selected, id),
    })),
  deselect: (id) =>
    set((state) => ({
      selected: _.without(state.selected, id),
    })),
  deselectAll: () =>
    set({
      selected: [],
    }),
  toggleSelection: (id) =>
    set((state) => (_.includes(state.selected, id) ? get().deselect(id) : get().select(id))),
}))
