import { Suspense } from 'react'
import { PageLayout } from '@/core'
import { AllTagsPageContent } from '@/notes'

const TagsPage = () => {
  return (
    <PageLayout>
      <Suspense fallback={null}>
        <AllTagsPageContent />
      </Suspense>
    </PageLayout>
  )
}

export default TagsPage
