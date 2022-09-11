import { graphql, useFragment } from 'react-relay'
import { FC } from 'react'
import { Tag } from './Tag'
import { TagsFragment$key } from './__generated__/TagsFragment.graphql'

interface Props {
  tags: TagsFragment$key
}

export const Tags: FC<Props> = (props) => {
  const tags = useFragment<TagsFragment$key>(
    graphql`
      fragment TagsFragment on Tag @relay(plural: true) {
        id

        ...TagFragment
      }
    `,
    props.tags
  )

  if (!tags.length) {
    return null
  }

  return (
    <ul className="inline-flex gap-2">
      {tags.map((tag) => (
        <li key={tag.id}>
          <Tag tag={tag} />
        </li>
      ))}
    </ul>
  )
}
