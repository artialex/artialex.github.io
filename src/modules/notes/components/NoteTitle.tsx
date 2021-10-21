import { FC } from 'react'
import { useAppDispatch } from '@/redux'
import { close } from '@/notes/contexts/notes'

interface NoteTitleProps {
  children: string
}

export const NoteTitle: FC<NoteTitleProps> = ({ children }) => {
  let dispatch = useAppDispatch()

  console.log('NoteTitle :: 12', children)

  return <h1 onClick={() => dispatch(close(children[0].replace(/,/g, '')))}>{children}</h1>
}
