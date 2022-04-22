import css from './Note.module.scss'
import { FC } from 'react'
import { Spinner } from '@/ui'
import { useGetProcessedNoteByIdQuery } from '../../notes.api'
import { process } from '@/markdown'
import { Tags } from '../Tags'
import { Backlinks } from '../Backlinks'
import { LinkVault } from '../LinkVault'
import _ from 'lodash'
import { ignoredTags } from '@/notes/tags.service'

interface NoteProps {
  id: string
}

export const Note: FC<NoteProps> = ({ id }) => {
  const { data, error, isLoading } = useGetProcessedNoteByIdQuery(id)

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  if (!data || isLoading) {
    return <Spinner.Centered />
  }

  const processed = process(data)

  const meaningfulTags = _.difference(processed.data.tags as string[], ignoredTags)

  return (
    <div className={css.root}>
      <main className={css.main}>{processed.result}</main>
      <aside className={css.aside}>
        <Backlinks id={id} />
        <Tags id={id} tags={meaningfulTags} />
        <LinkVault tags={meaningfulTags} />
      </aside>
    </div>
  )
}
