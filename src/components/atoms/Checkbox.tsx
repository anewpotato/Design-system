import React, { ChangeEvent, useEffect, useState } from 'react'
import { Checkbox as MuiCheckbox } from '@mui/material'
import { SizeType, ColorType } from '../common/defaultType'

export interface CheckboxProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>, isChecked: boolean) => void
  disabled?: boolean
  size?: SizeType
  color?: ColorType
  id?: string
  required?: boolean
  value?: string
  checked: boolean
}

export function Checkbox({
  onChange,
  disabled,
  size = 'medium',
  color = 'primary',
  id,
  required,
  value,
  checked = false,
}: CheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked)

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const handleChange = (event: ChangeEvent<HTMLInputElement>, targetChecked: boolean) => {
    setIsChecked(targetChecked)

    if (onChange) {
      onChange(event, targetChecked)
    }
  }

  return (
    <MuiCheckbox
      onChange={handleChange}
      disabled={disabled}
      size={size}
      color={color}
      id={id}
      required={required}
      value={value}
      checked={isChecked}
    />
  )
}
