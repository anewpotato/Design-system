import { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'
import { sizeOption, colorOption } from '../common/propsOptions'

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: 'changed',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    size: {
      control: {
        type: 'select',
        options: sizeOption,
      },
    },
    color: {
      control: {
        type: 'select',
        options: colorOption,
      },
    },
    id: {
      control: {
        type: 'text',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    value: {
      control: {
        type: 'text',
      },
    },
    checked: {
      control: {
        type: 'boolean',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  args: {},
}
