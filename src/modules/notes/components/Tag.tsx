import Link from 'next/link'
import type { FC } from 'react'
import { graphql, useFragment } from 'react-relay/hooks'

import type { TagFragment$key } from './__generated__/TagFragment.graphql'

interface Props {
  tag: TagFragment$key
}

export const Tag: FC<Props> = (props) => {
  const { id, prettyName } = useFragment<TagFragment$key>(
    graphql`
      fragment TagFragment on Tag {
        id
        prettyName
      }
    `,
    props.tag
  )

  return (
    <Link href={`/tag?id=${id}`}>
      <a className=" text-sm text-orange-600">{prettyName}</a>
    </Link>
  )
}
