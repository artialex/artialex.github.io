import { FC } from 'react'
import css from './VerticalPage.module.scss'
import { configure } from '@/markdown'
import { NoteLink } from '@/notes.standard/components/NoteLink'
import { NoteTitle } from '@/notes.standard/components/NoteTitle'
import { Insertion } from '@/insertions'
import { Header } from '@/notes.standard/components/Header'
import { NoteArea } from '@/notes.standard/components/NoteArea'

interface VerticalPageProps {}

export const VerticalPage: FC<VerticalPageProps> = (props) => {
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
      <NoteArea type="vertical" />
    </div>
  )
}
