import { graphql, useLazyLoadQuery } from 'react-relay/hooks'
import type { TagPageContentQuery } from './__generated__/TagPageContentQuery.graphql'
import Link from 'next/link'
import { slugify } from '@/utils.platform'
import { Tags } from '@/notes/components/Tags'
import Head from 'next/head'

interface Props {
  id: string
}

export const TagPageContent = (props: Props) => {
  const { tag } = useLazyLoadQuery<TagPageContentQuery>(
    graphql`
      query TagPageContentQuery($id: String!) {
        tag(id: $id) {
          prettyName
          ...TagFragment

          noteCount
          notes {
            title
          }
          vaultLinkCount
          vaultLinks {
            name
            link
            tags {
              ...TagsFragment
            }
          }
        }
      }
    `,
    { id: props.id }
  )

  return (
    <main className="w-[70rem] pt-6">
      <Head>
        <title>Tag: {tag.prettyName}</title>
      </Head>

      <h1 className="mt-4 mb-2 text-2xl font-medium text-orange-600">{tag.prettyName}</h1>
      <p>From my notes</p>

      {/* <p className="text-lg">{tag.noteCount} notes</p> */}
      <ul className="list-bullet my-4 pl-6">
        {tag.notes.map((n) => (
          <li key={n.title}>
            <Link href={`/?id=${slugify(n.title)}`}>
              <a className="text-blue-500">{n.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      {/* <p className="text-lg">{tag.vaultLinkCount} ext. links</p> */}

      <p>From bookmarks</p>
      <ul className="list-bullet pl-6">
        {tag.vaultLinks.map((link) => (
          <li key={link.name} className="flex">
            <a href={link.link} className="mr-auto text-pink-500" target="_blank" rel="noreferrer">
              {link.name}
            </a>

            <Tags tags={link.tags} />
          </li>
        ))}
      </ul>

      <p>From RSS</p>
    </main>
  )
}
