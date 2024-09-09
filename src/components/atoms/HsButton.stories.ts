import type { Meta, StoryObj } from '@storybook/react'
import { HsButton } from './HsButton'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof HsButton> = {
  title: 'Atoms/HsButton',
  component: HsButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    // startIcon: {
    //   control: {
    //     type: 'object',
    //   },
    // },
    // endIcon: {
    //   control: {
    //     type: 'object',
    //   },
    // },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    href: {
      control: {
        type: 'text',
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['text', 'outlined', 'contained'],
      },
    },
    onClick: {
      action: 'clicked',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    // color: 'primary',
    size: 'medium',
    variant: 'contained',
  },
}

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    // color: 'secondary',
    size: 'medium',
    variant: 'outlined',
  },
}

export const Large: Story = {
  args: {
    label: 'Large Button',
    size: 'large',
    variant: 'contained',
  },
}

export const Small: Story = {
  args: {
    label: 'Small Button',
    size: 'small',
    variant: 'text',
  },
}
