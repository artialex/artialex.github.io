import { Suspense } from 'react'
import { PageLayout } from '@/core'
import Head from 'next/head'
import { AllNotesPageContent } from '@/notes'

const NotesPage = () => {
  return (
    <PageLayout>
      <Head>
        <title>Notes</title>
      </Head>

      <Suspense fallback={null}>
        <AllNotesPageContent />
      </Suspense>
    </PageLayout>
  )
}

export default NotesPage
