import { useEffect, useRef } from 'react'
import { annotate } from 'rough-notation'

export const RoughMark = (props: any) => {
  let ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      annotate(ref.current, { type: 'highlight', color: '#ee99ff', animate: false }).show()
    }
  }, [])

  return <span ref={ref}>{props.children}</span>
}
