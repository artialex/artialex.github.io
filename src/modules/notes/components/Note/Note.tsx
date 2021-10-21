import { useQuery } from 'react-query'
import { getNote } from '../../services/notes.api'
import css from './Note.module.scss'
import { FC } from 'react'
import { process } from '@/markdown'
import { Spinner } from '@/ui'

interface NoteProps {
  id: string
  onClose: () => void
}

export const Note: FC<NoteProps> = (props) => {
  let { data, error, isLoading } = useQuery(['note', props.id], () =>
    getNote(props.id).then(process)
  )

  if (error) {
    return <div>Error: {JSON.stringify(error)}</div>
  }

  return <div className={css.root}>{!data || isLoading ? <Spinner /> : data.result}</div>
}
