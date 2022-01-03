import { useRouter } from 'next/router'
/*
import { useEffect } from 'react'
import { useAppDispatch } from '@/redux.hooks'
import { useTheme } from '@/ui.theme'
import { configure } from '@/markdown'
import { RoughMark } from '@/ui'
import { Insertion } from '@/insertions'
import { Graph } from '@/notes.graph'
import { NoteArea } from '../../NoteArea'
import { NoteList } from '../../NoteList'
import { open } from '../../../contexts/notes'
import { NoteLink } from '../../NoteLink'
import { NoteTitle } from '../../NoteTitle'
import { unslugify } from '../../../services/slug.utils'
import css from './AllNotesPage.module.scss'
*/

export const AllNotesPage = () => {
  return null
  /*
  let router = useRouter()
  // let opened = useAppSelector(selectOpened)
  // let router = use

  let dispatch = useAppDispatch()
  useTheme()

  useEffect(() => {
    configure({
      components: {
        a: NoteLink,
        h1: NoteTitle,
        mark: RoughMark,
        tags: () => null, // Hide tags in Web app, keep them in Obsidian // FIXME?
        insertion: Insertion,
      },
    })
  }, [])

  useEffect(() => {
    if (router.isReady) {
      if ('open' in router.query) {
        dispatch(open((router.query.open as string).split(',').map(unslugify)))
      } else {
        dispatch(open('Hi'))
      }
    }
  }, [router.isReady])

  return (
    <div className={css.root}>
      {/!*<Graph />*!/}
      <NoteArea />
      <NoteList />
    </div>
  )
*/
}
