import dynamic from 'next/dynamic'

// @ts-ignore
export let DynamicMinimap = dynamic(() => import('./Minimap').then((_) => _.Minimap), {
  ssr: false,
})
