import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Icon from './Icon'

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Icon>

export const Default: Story = {
  args: {
    iconName: 'home',
    variant: 'sharp',
    size: 50,
  },
}

export const VariantIcon: Story = {
  args: {
    iconName: 'home',
    variant: 'rounded',
    size: 50,
  },
}

export const SizeIcon: Story = {
  render: (args) => (
    <div className="grid grid-cols-4  items-center">
      <Icon iconName="home" size={24} />
      <Icon iconName="home" size={36} />
      <Icon iconName="home" size={48} />
      <Icon iconName="home" size={56} />
    </div>
  ),
}

export const ColorIcon: Story = {
  render: (args) => (
    <div className="grid grid-cols-4  items-center">
      <Icon iconName="home" color="#F19E39" />
      <Icon iconName="home" color="#75FBFD" />
      <Icon iconName="home" color="#EA33F7" />
      <Icon iconName="home" color="#9DC384" />
    </div>
  ),
}

export const WeightIcon: Story = {
  render: (args) => (
    <div className="grid grid-cols-4  items-center">
      <Icon iconName="home" weight={100} />
      <Icon iconName="home" weight={400} />
      <Icon iconName="home" weight={500} />
      <Icon iconName="home" weight={700} />
    </div>
  ),
}

export const FillIcon: Story = {
  render: (args) => (
    <div className="grid grid-cols-2  items-center">
      <Icon iconName="home" fill />
      <Icon iconName="home" fill={false} />
    </div>
  ),
}

export const OpticalIcon: Story = {
  render: (args) => (
    <div className="grid grid-cols-4  items-center">
      <Icon iconName="home" size={48} optical={20} />
      <Icon iconName="home" size={48} optical={24} />
      <Icon iconName="home" size={48} optical={36} />
      <Icon iconName="home" size={48} optical={48} />
    </div>
  ),
}

export const GradeIcon: Story = {
  render: (args) => (
    <div className="grid grid-cols-4  items-center">
      <Icon iconName="home" size={48} grade={0} />
      <Icon iconName="home" size={48} grade={100} />
      <Icon iconName="home" size={48} grade={200} />
      <Icon iconName="home" size={48} grade={-50} />
    </div>
  ),
}
