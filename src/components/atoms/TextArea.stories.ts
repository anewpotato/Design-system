import { Meta, StoryObj } from '@storybook/react'
import TextArea from './TextArea'

const meta: Meta<typeof TextArea> = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {},
}
