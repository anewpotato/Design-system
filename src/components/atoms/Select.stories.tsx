import React, { useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import { SelectChangeEvent } from '@mui/material'
import { fontsizeOption, widthOption } from '../common/propsOptions'
import Select from './Select'

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
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
    multiple: {
      control: { disable: true },
    },
  },
}

export default meta

type Story = StoryObj<typeof Select>

const list = [
  {
    label: '항목 1',
    value: 1,
  },
  {
    label: '항목 2',
    value: 2,
  },
  {
    label: '항목 3',
    value: 3,
  },
]

export const Default: Story = {
  args: {
    list,
  },
}

export const RequiredSelect: Story = {
  args: {
    list,
    required: true,
  },
}

export const DisabledSelect: Story = {
  args: {
    disabled: true,
  },
}

export const ReadOnlySelect: Story = {
  args: {
    readonly: true,
  },
}

export const MultipleSelect: Story = {
  render: ({ multiple, list: selectList }) => {
    const [select, setSelect] = useState<string[]>([''])

    const handleChange = (event: SelectChangeEvent<string[] | string>) => {
      const {
        target: { value },
      } = event
      let selectValue = value

      if (typeof selectValue === 'string') {
        selectValue = selectValue.split(',')
      } else if (selectValue.length >= 1) {
        selectValue = selectValue.filter((item) => item)
      } else {
        selectValue = ['']
      }
      setSelect(selectValue)
    }
    return <Select value={select} onChange={handleChange} multiple={multiple} list={selectList} />
  },
  args: {
    multiple: true,
    list,
  },
}

export const ReverseListSelect: Story = {
  args: {
    list,
    enableReverse: true,
  },
}
