import { FC } from 'react'

import { configure } from '@/markdown'
import { Insertion } from '@/insertions'

import { Header } from '../../components/Header'
import { NoteArea } from '../../components/NoteArea'
import { NoteLink } from '../../components/NoteLink'
import { NoteTitle } from '../../components/NoteTitle'

import css from './HorizontalPage.module.scss'

interface HorizontalPageProps {}

export const HorizontalPage: FC<HorizontalPageProps> = (props) => {
  configure({
    components: {
      a: NoteLink,
      h1: NoteTitle,

      insertion: Insertion,
    },
  })

  return (
    <div className={css.root}>
      {/*<Header links={[]} onThemeClick={() => {}} />*/}
      <NoteArea type="horizontal" />
    </div>
  )

  /*
  let router = useRouter()
  // let opened = useAppSelector(selectOpened)
  // let router = use

  let dispatch = useAppDispatch()
  useTheme()

  useEffect(() => {
    configure({
      components: {
        h1: NoteTitle,
        mark: RoughMark,
        tags: () => null, // Hide tags in Web app, keep them in Obsidian // FIXME?
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
