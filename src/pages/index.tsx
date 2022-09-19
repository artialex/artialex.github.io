import { NotePageContent } from '@/notes'
import { unslugify } from '@/utils.platform'
import { NextPage } from 'next'
import { Suspense, useEffect } from 'react'
import { PageLayout } from '@/core'
import { useRouter } from 'next/router'
import Head from 'next/head'

export const IndexPage: NextPage = () => {
  const router = useRouter()

  console.log(router.isFallback)

  useEffect(() => {
    if (!router.isReady) {
      return
    }

    if (!router.query.id) {
      void router.replace('/?id=Hi')
    }
  }, [router.isReady, router.query.id, router.replace])

  if (!router.query.id) {
    return null
  }

  return (
    <PageLayout>
      <Head>
        <title>{router.query.id && `${router.query.id}`}</title>
      </Head>
      <Suspense fallback={null}>
        <NotePageContent id={unslugify(router.query.id as string)} />
      </Suspense>
    </PageLayout>
  )
}

export default IndexPage as NextPage<any>
