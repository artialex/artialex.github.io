import dynamic from 'next/dynamic'

export let DynamicCanvasStage = dynamic(
  // @ts-ignore
  () => import('./CanvasStage').then((_) => _.CanvasStage),
  { ssr: false }
)
