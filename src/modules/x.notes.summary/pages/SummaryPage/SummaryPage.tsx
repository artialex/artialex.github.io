import Head from 'next/head'

import { Note } from '@/notes'
import { configure } from '@/markdown'
import { Insertion } from '@/insertions'

export const SummaryPage = () => {
  configure({
    inline: true,
    components: {
      note: (props: any) => (
        <Note
          id={props.children[0]}
          type="tufte-inclusion"
          onClose={() => {}}
          level={2}
          {...props}
        />
      ),
      insertion: Insertion,
    },
  })

  return (
    <>
      <Head>
        <title>Linear algebra</title>
      </Head>
      <Note id="Linear algebra" type="tufte" onClose={() => {}} />
    </>
  )
}
