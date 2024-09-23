import { Meta, StoryObj } from '@storybook/react'
import TextArea from './TextArea'
import { fontsizeOption, resizeOption, widthOption } from '../common/propsOptions'

const meta: Meta<typeof TextArea> = {
  title: 'Atoms/TextArea',
  component: TextArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    resize: {
      control: {
        type: 'select',
        options: resizeOption,
      },
    },
    fontSize: {
      control: {
        type: 'select',
        options: fontsizeOption,
      },
    },
    width: {
      control: {
        type: 'select',
        options: widthOption,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {},
}

export const Resize: Story = {
  args: {
    resize: 'both',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}

export const MaxLength: Story = {
  args: {
    maxLength: 100,
  },
}
