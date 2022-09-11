import { useEffect, useRef } from 'react'
import { annotate } from 'rough-notation'
import { RoughAnnotation } from 'rough-notation/lib/model'

export const RoughMark = (props: any) => {
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
