import { graphql, useLazyLoadQuery } from 'react-relay/hooks'
import Link from 'next/link'
import { AllTagsPageContentQuery } from './__generated__/AllTagsPageContentQuery.graphql'
import Head from 'next/head'

export const AllTagsPageContent = () => {
  const { tags } = useLazyLoadQuery<AllTagsPageContentQuery>(
    graphql`
      query AllTagsPageContentQuery {
        tags {
          id
          prettyName
          noteCount
          vaultLinkCount
        }
      }
    `,
    {}
  )

  return (
    <main className="w-[70rem] pt-6">
      <Head>
        <title>Tags</title>
      </Head>

      <h1 className="mt-4 mb-2 text-2xl font-medium">All {tags.length} tags</h1>

      <table>
        <thead>
          <tr>
            <th></th>
            <th className="w-16 text-right text-xs font-normal">Total links</th>
            <th className="w-16 text-right text-xs font-normal">Notes</th>
            <th className="w-16 text-right text-xs font-normal">Ext. links</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((t) => (
            <tr key={t.id}>
              <td className="">
                <Link href={`/tag?id=${t.id}`}>
                  <a className="mr-2 text-orange-500">{t.prettyName}</a>
                </Link>
              </td>
              <td className="text-right text-sm ">{t.noteCount + t.vaultLinkCount}</td>
              <td className="text-right text-sm  text-blue-500">{t.noteCount}</td>
              <td className="text-right text-sm  text-pink-500">{t.vaultLinkCount}</td>
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
