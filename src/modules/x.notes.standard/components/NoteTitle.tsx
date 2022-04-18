import { FC } from 'react'
import { useAppDispatch } from '@/core/core.hooks'
import { CLOSE } from '../notes.slice'

interface NoteTitleProps {
  children: string
}

export const NoteTitle: FC<NoteTitleProps> = ({ children }) => {
  let dispatch = useAppDispatch()

  return <h1 onClick={() => dispatch(CLOSE(children[0].replace(/,/g, '')))}>{children}</h1>
}
