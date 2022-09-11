import { FC } from 'react'
import { graphql, useLazyLoadQuery } from 'react-relay/hooks'
import { process } from '@/markdown'
import { NoteSimilarLinks } from '@/notes/components/NoteSimilarLinks'
import { NoteBacklinks } from './NoteBacklinks'
import { Tags } from './Tags'
import type { NotePageContentQuery } from './__generated__/NotePageContentQuery.graphql'

interface Props {
  id: string
}

export const NotePageContent: FC<Props> = (props) => {
  const { note } = useLazyLoadQuery<NotePageContentQuery>(
    graphql`
      query NotePageContentQuery($id: String!) {
        note(id: $id) {
          content
          tags {
            ...TagsFragment
          }

          ...NoteBacklinksFragment
          ...NoteSimilarLinksFragment
        }
      }
    `,
    { id: props.id }
  )

  return (
    <main className="flex flex-row gap-8 pt-6" style={{ gridArea: 'main' }}>
      <div>
        <Tags tags={note.tags} />

        <section className="note w-[40rem]">{process(note.content).result}</section>
      </div>

      <aside>
        <NoteBacklinks note={note} />
        <NoteSimilarLinks note={note} />
      </aside>
    </main>
  )
}
