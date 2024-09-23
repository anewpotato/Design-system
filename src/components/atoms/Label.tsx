import React from 'react'
import './label.css'

export interface LabelProps {
  label: string
  required?: boolean
  bold?: boolean
  fontSize?: 'sm' | 'base' | 'lg' | 'xl' | '2xl'
  backgroundColor?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  width?: '1/6' | '1/5' | '1/3' | '1/2' | 'full' | 'auto'
}

export function Label({ label, required, bold, fontSize, backgroundColor, width }: LabelProps) {
  return (
    <p
      className={[
        `fontsize-${fontSize}`,
        `width-${width}`,
        required && 'required',
        bold && 'font-bold',
        backgroundColor === 'primary' && 'bg-gray-main',
      ].join(' ')}
    >
      {label}
    </p>
  )
}
