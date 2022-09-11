import { graphql, useLazyLoadQuery } from 'react-relay/hooks'
import Link from 'next/link'
import { AllNotesPageContentQuery } from './__generated__/AllNotesPageContentQuery.graphql'
import { slugify } from '@/utils.platform'
import { Tags } from './Tags'

export const AllNotesPageContent = () => {
  const { notes } = useLazyLoadQuery<AllNotesPageContentQuery>(
    graphql`
      query AllNotesPageContentQuery {
        notes {
          title
          tags {
            ...TagsFragment
          }
        }
      }
    `,
    {}
  )

  return (
    <main className="w-[70rem] pt-6">
      <h1 className="mt-4 mb-2 text-2xl font-medium">
        All {notes.length} notes <small className="text-sm text-slate-500">in alphabetical order</small>
      </h1>

      <table>
        <thead>
          <tr>
            <th></th>
            <th className="w-16 text-right text-xs font-normal">Tags</th>
          </tr>
        </thead>
        <tbody>
          {notes.map((n) => (
            <tr key={n.title}>
              <td className="">
                <Link href={`/?id=${slugify(n.title)}`}>
                  <a className="mr-2 text-blue-500">{n.title}</a>
                </Link>
              </td>
              <td className="text-right">
                <Tags tags={n.tags} />
              </td>
            </tr>
          ))}
          <tr>
            <td></td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}
