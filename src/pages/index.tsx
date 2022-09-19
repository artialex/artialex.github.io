import { NotePageContent } from '@/notes'
import { unslugify } from '@/utils.platform'
import { NextPage } from 'next'
import { Suspense, useEffect, useState } from 'react'
import { PageLayout } from '@/core'
import { useRouter } from 'next/router'
import Head from 'next/head'

export const IndexPage: NextPage = () => {
  const { query, isReady, replace } = useRouter()
  const [isMounted, setMounted] = useState(false)

  useEffect(() => {
    if (isMounted && isReady && !query.id) {
      void replace('/?id=Hi')
    }
  }, [isMounted, isReady, query.id, replace])

  useEffect(() => {
    setMounted(true)
  }, [])

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
