import { NotePageContent } from '@/notes'
import { unslugify } from '@/utils.platform'
import { NextPage } from 'next'
import { Suspense, useEffect } from 'react'
import { PageLayout } from '@/core'
import { useRouter } from 'next/router'
import Head from 'next/head'

export const IndexPage: NextPage = () => {
  const { asPath, route, query, isReady, replace } = useRouter()

  console.log(asPath !== route)

  useEffect(() => {
    if (isReady && !query.id) {
      void replace('/?id=Hi')
    }
  }, [isReady, query.id, replace])

  if (!query.id) {
    return null
  }

  return (
    <PageLayout>
      <Head>
        <title>{query.id && `${query.id}`}</title>
      </Head>
      <Suspense fallback={null}>
        <NotePageContent id={unslugify(query.id as string)} />
      </Suspense>
    </PageLayout>
  )
}

export default IndexPage as NextPage<any>
