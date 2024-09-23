import { Meta, StoryObj } from '@storybook/react'
import DatePicker from './DatePicker'
import { fontsizeOption, widthOption } from '../common/propsOptions'

const meta: Meta<typeof DatePicker> = {
  title: 'Atoms/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
    views: {
      control: 'check',
      options: ['day', 'month', 'year'],
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
    maxDate: {
      control: {
        type: 'text',
      },
    },
    minDate: {
      control: {
        type: 'text',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof DatePicker>

export const Default: Story = {
  args: {},
}

export const FormatDatePicker: Story = {
  args: {
    format: 'MM/DD/YYYY',
  },
}

export const LocaleDatePicker: Story = {
  args: {
    format: 'YYYY/MM/DD',
    locale: 'ja',
  },
}

export const LimitDatePicker: Story = {
  args: {
    format: 'YYYY/MM/DD',
    maxDate: '2024/12/24',
    minDate: '2024/01/01',
  },
}

export const ViewsDatePicker: Story = {
  args: {
    views: ['month', 'year'],
    openView: 'year',
  },
}
