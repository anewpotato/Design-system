import { Meta, StoryObj } from '@storybook/react'
import TimePicker from './TimePicker'
import { fontsizeOption, widthOption } from '../common/propsOptions'

const meta: Meta<typeof TimePicker> = {
  title: 'Atoms/TimePicker',
  component: TimePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
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
    maxTime: {
      control: {
        type: 'text',
      },
    },
    minTime: {
      control: {
        type: 'text',
      },
    },
    views: {
      control: {
        type: 'check',
      },
      options: ['seconds', 'minutes', 'hours'],
    },
  },
}

export default meta

type Story = StoryObj<typeof TimePicker>

export const Default: Story = {
  args: {},
}

export const FormatTimePicker: Story = {
  args: {
    format: 'hh-mm a',
    disableAmPm: true,
  },
}

export const LimitTimePicker: Story = {
  args: {
    format: 'a hh:mm',
    maxTime: 'pm 05:00',
    minTime: 'am 11:00',
  },
}

export const ViewsTimePicker: Story = {
  args: {
    format: 'hh:mm:ss a',
    views: ['hours', 'minutes', 'seconds'],
  },
}

export const TimeStepTimePicker: Story = {
  args: {
    timeStep: { hours: 2, seconds: 3 },
  },
}
