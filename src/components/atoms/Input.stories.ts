import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'
import { widthOption, colorOption } from '../common/propsOptions'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: 'changed',
    },
    width: {
      control: {
        type: 'select',
        options: widthOption,
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    helperText: {
      control: {
        type: 'text',
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
    name: {
      control: {
        type: 'text',
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    name: '',
  },
}
