import { TagPageContent } from '@/notes'
import { PageLayout } from '@/core'
import { Suspense, useEffect } from 'react'
import { useRouter } from 'next/router'

const TagPage = () => {
  const { query, isReady, replace } = useRouter()

  useEffect(() => {
    if (isReady && !query.id) {
      void replace('/tag?id=linal')
    }
  }, [query.id])

  if (!query.id) {
    return null
  }

  return (
    <PageLayout>
      <Suspense fallback={null}>
        <TagPageContent id={query.id as string} />
      </Suspense>
    </PageLayout>
  )
}

export default TagPage
