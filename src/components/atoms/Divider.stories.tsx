import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Divider from './Divider'

const meta: Meta<typeof Divider> = {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {},
  decorators: [
    (Story) => (
      <div style={{ width: '100%', padding: 20 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Divider>

const children = new Array(5).fill(<span>item</span>)

export const Default: Story = {
  args: {
    children,
  },
}

export const VerticalDivider: Story = {
  args: {
    children,
    direction: 'vertical',
  },
}

export const GapDivider: Story = {
  args: {
    children,
    direction: 'vertical',
    gap: 3,
  },
}

export const StyleDivider: Story = {
  args: {
    children,
    variant: 'dotted',
    thickness: 'medium',
    color: '#5ee3cb',
  },
}
