import React from 'react'
/**
 * TextArea Props.
 */
interface TextAreaProps {
  value: string
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void
  name?: string
  /**
   * @default 5
   */
  rows: number
  /**
   * @default 20
   */
  columns: number
  /**
   * @default
   */
  defaultValue: string
  /**
   * @default none
   */
  resize: 'both' | 'vertical' | 'horizontal' | 'none'
  /**
   * @default false
   */
  autoComplete: boolean
  /**
   * @default false
   */
  disabled: boolean
  /**
   * @default false
   */
  readonly: boolean
  maxLength?: number
  minLength?: number
  /**
   * @default
   */
  placeholder: string
}

export default function TextArea({
  name,
  rows = 5,
  columns = 20,
  defaultValue = '',
  resize = 'none',
  autoComplete = false,
  disabled = false,
  readonly = false,
  maxLength,
  minLength,
  placeholder = '',
  value,
  onChange,
}: TextAreaProps) {
  return (
    <textarea
      name={name}
      className="border border-gray-300 rounded-md p-2 hover:border-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      style={{ resize }}
      rows={rows}
      cols={columns}
      defaultValue={defaultValue}
      autoComplete={autoComplete ? 'on' : 'off'}
      disabled={disabled}
      readOnly={readonly}
      maxLength={maxLength}
      minLength={minLength}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  )
}
