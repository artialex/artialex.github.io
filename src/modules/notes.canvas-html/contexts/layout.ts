import _ from 'lodash'
import { Position } from '../@types/Position'
import { NoteId } from '@/notes/@types/Note'
import create, {
  GetState,
  PartialState,
  SetState,
  StateCreator,
  StoreApi,
  UseBoundStore,
} from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { NoteLayout } from '../services/NoteLayoutService'

interface NoteLayoutStore {
  notes: Array<NoteId>
  fetch: () => void
  add: (id: NoteId) => void
}

export const useNoteLayout = create<NoteLayoutStore>((set) => ({
  notes: [],
  fetch: async () => {
    let notes = await NoteLayout.getAllNoteIds()

    set({ notes })
  },
  add: async (id: NoteId) => {
    await NoteLayout.setNotePosition(id, Position.Zero)

    set((state) => ({ notes: state.notes.concat(id) }))
  },
  remove: async (id: NoteId) => {
    await NoteLayout.removeNotePosition(id)

    set((state) => ({ notes: state.notes.filter((_) => _ !== id) }))
  },
}))

interface NoteStore {
  position: Position
  set: (position: Position) => void
  fetch: () => void
}

type Middleware<S extends object> = (
  creator: StateCreator<S>
) => (set: SetState<S>, get: GetState<S>, api: StoreApi<S>) => S

export const onSet =
  <T extends object>(fn: (state: T) => void) =>
  (creator: StateCreator<T>) =>
  (set: SetState<T>, get: GetState<T>, api: StoreApi<T>) =>
    creator(
      (args) => {
        fn(get())

        return set(args)
      },
      get,
      api
    )

/*
export function mw<T extends object>() {
  return function (fn) {
    return function (creator) {
      return function (set, get, api) {
        return creator(
          (args) => {
            set(args)
            fn(get())
          },
          get,
          api
        )
      }
    }
  }
}
*/

// const middleware: Middleware<NoteStore> =
//   (fn: (state: T) => void) =>
//   (creator: StateCreator<T>) =>
//   (set: SetState<T>, get: GetState<T>, api: StoreApi<T>) =>
//     creator(
//       _.flow(set, () => fn(get())),
//       get,
//       api
//     )

const onNoteUpdate = onSet<NoteStore>((state) => {
  console.log('on set', state)
})

let createStore = _.flow([onNoteUpdate, create])

export const useNote = _.memoize((id: NoteId) =>
  createStore((set) => ({
    id,
    position: Position.Zero,
    fetch: async () => {
      let position = await NoteLayout.getNotePosition(id)

      set({ position })
    },
    set: async (position) => {
      await NoteLayout.setNotePosition(id, position)

      set({ position })
    },
  }))
)

/*
export const useNote =  _.memoize<(id: NoteId) => UseBoundStore<NoteStore>>((id) =>
  create<NoteStore>(
    onNoteUpdate((set) => ({
      id,
      position: Position.Zero,
      set: (position: Position) => set({ position }),
    }))
  )
)
*/
