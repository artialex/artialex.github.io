import { FC, useEffect, useRef } from 'react'
import { annotate } from 'rough-notation'
import { RoughAnnotation } from 'rough-notation/lib/model'

interface Props {
  color: string
}

export const RoughMark: FC<Props> = (props) => {
  const ref = useRef(null)

  useEffect(() => {
    let annotated: RoughAnnotation
    if (ref.current) {
      annotated = annotate(ref.current, {
        type: 'underline',
        color: `var(--${props.color}-color)`,
        animate: false,
        padding: -2,
      })

      annotated.show()
    }

    return () => {
      annotated.remove()
    }
  }, [props.children])

  return <span ref={ref}>{props.children}</span>
}
