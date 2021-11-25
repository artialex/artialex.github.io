import { RootComponent } from '@/core'
import { useEffect } from 'react'
import { configure } from '@/markdown'
import { NoteLink, NoteTitle } from '@/notes'
import { useRouter } from 'next/router'
import { open } from '@/notes/contexts/notes'
import { unslugify } from '@/notes/services/slug.utils'
import { useTheme } from '@/ui.theme'
import { RoughMark } from '@/ui'
import { Insertion } from '@/insertions'
import { useAppDispatch } from '@/redux.hooks'

const IndexPage = () => {
  let router = useRouter()
  // let opened = useAppSelector(selectOpened)
  let dispatch = useAppDispatch()
  // let router = use

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

  return <RootComponent />
}

export default IndexPage
