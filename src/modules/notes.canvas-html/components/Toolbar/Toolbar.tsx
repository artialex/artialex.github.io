import cn from 'clsx'
import { Mode, selectMode, setMode } from '@/notes.layout'
import { useAppDispatch, useAppSelector } from '@/core/core.hooks'
import css from './Toolbar.module.scss'

export const Toolbar = () => {
  let mode = useAppSelector(selectMode)
  let dispatch = useAppDispatch()

  return (
    <div className={css.root}>
      <button
        onClick={() => dispatch(setMode(Mode.View))}
        className={cn(css.button, { [css.active]: mode === Mode.View })}
      >
        View
      </button>
      <button
        onClick={() => dispatch(setMode(Mode.Edit))}
        className={cn(css.button, { [css.active]: mode === Mode.Edit })}
      >
        Edit
      </button>
    </div>
  )
}
