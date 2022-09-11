import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { List as Component } from '../components/List'
import React from 'react'

export default {
    title: 'ui/List',
    component: Component,
} as ComponentMeta<typeof Component>

const Template: ComponentStory<typeof Component> = (args) => <Component {...args} />

export const List = Template.bind({})

List.args = {
    items: [
        { key: 1, label: 'One' },
        { key: 2, label: 'Two' },
        { key: 3, label: 'Three' },
    ],
}
