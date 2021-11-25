import { NoteArea } from '@/notes'
import { useAppDispatch } from '@/redux.hooks'
import { toggle } from '@/ui.theme'
import { Header } from '../Header'
import css from './RootComponent.module.scss'
import { open } from '@/notes/contexts/notes'

export const RootComponent = () => {
  let dispatch = useAppDispatch()

  return (
    <div className={css.root}>
      <Header
        links={[]}
        onLinkClick={(id) => dispatch(open(id))}
        onThemeClick={() => dispatch(toggle())}
      />
      <NoteArea />
    </div>
  )
}
