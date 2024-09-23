import React, { ChangeEvent } from 'react'

import { TextField } from '@mui/material'
import { WidthType, ColorType } from '../common/defaultType'

export interface InputProps {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
  width?: WidthType
  disabled?: boolean
  placeholder?: string
  helperText?: string
  color?: ColorType
  id?: string
  required?: boolean
  value?: string
  name: string
  error?: boolean
}

export function Input({
  onChange,
  width = 'auto',
  disabled,
  placeholder,
  helperText,
  color = 'primary',
  id,
  required,
  value,
  name,
  error,
}: InputProps) {
  return (
    <TextField
      onChange={(event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => onChange?.(event)}
      className={`width-${width}`}
      disabled={disabled}
      placeholder={placeholder}
      helperText={helperText}
      color={color}
      id={id}
      required={required}
      value={value}
      name={name}
      error={error}
    />
  )
}
