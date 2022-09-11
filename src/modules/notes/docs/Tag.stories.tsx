import { ComponentMeta, ComponentStory } from '@storybook/react'
import { Tag as Component } from '../components/Tag'
import React from 'react'
import { graphql } from 'react-relay/hooks'
import { RelayTestContainer } from '../../storybook'
import type { TagTestQuery } from './__generated__/TagTestQuery.graphql'

export default {
  title: 'Tag',
  component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = () => {
  const QUERY = graphql<TagTestQuery>`
    query TagTestQuery @relay_test_operation {
      tag(id: "test-id") {
        ...TagFragment
      }
    }
  `

  return <RelayTestContainer query={QUERY}>{(data) => <Component tag={data.tag} />}</RelayTestContainer>
}

export const Tag = Template.bind({})
