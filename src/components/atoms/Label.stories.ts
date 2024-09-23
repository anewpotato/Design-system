import type { Meta, StoryObj } from '@storybook/react'
import { Label } from './Label'

const meta = {
  title: 'atoms/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    bold: {
      control: {
        type: 'boolean',
      },
    },
    fontSize: {
      control: {
        type: 'select',
        options: ['sm', 'base', 'lg', 'xl', '2xl'],
      },
    },
    backgroundColor: {
      control: {
        type: 'select',
        options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      },
    },
    width: {
      control: {
        type: 'select',
        options: ['1/6', '1/5', '1/3', '1/2', 'full', 'auto'],
      },
    },
  },
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: 'Label',
  },
}
