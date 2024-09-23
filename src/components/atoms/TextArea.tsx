import React, { ChangeEvent } from 'react'

import { FontSizeType, ResizeType, WidthType } from '../common/defaultType'

/**
 * TextArea Props.
 */
interface TextAreaProps {
  /**
   * 상태 값 (state).
   */
  value: string
  /**
   * onChange Handler.
   * @param event event 객체.
   * @returns
   */
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
  /**
   * 지정하고자 하는 Name.
   */
  name?: string
  /**
   * 지정 행 수.
   * @default 5
   */
  rows?: number
  /**
   * 지정 열 수.
   * @default 20
   */
  columns?: number
  /**
   * 텍스트 폰트 크기.
   */
  fontSize?: FontSizeType
  /**
   * 컴포넌트 가로 길이.
   */
  width?: WidthType
  /**
   * Drag resize 여부.
   * @default none
   */
  resize?: ResizeType
  /**
   * Form 내 자동완성 여부.
   * @default false
   */
  autoComplete?: boolean
  /**
   * 비활성화 여부.
   * @default false
   */
  disabled?: boolean
  /**
   * 읽기 전용 여부.
   * @default false
   */
  readonly?: boolean
  /**
   * 최대 글자 수.
   */
  maxLength?: number
  /**
   * 최소 글자 수.
   */
  minLength?: number
  /**
   * placeholder 지정.
   * @default
   */
  placeholder?: string
}

export default function TextArea({
  name,
  rows = 5,
  columns = 20,
  fontSize,
  width,
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
      className={[
        `fontsize-${fontSize}`,
        `width-${width}`,
        'border border-gray-300 rounded-md p-2 hover:border-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500',
      ].join(' ')}
      style={{ resize }}
      rows={rows}
      cols={columns}
      autoComplete={autoComplete ? 'on' : 'off'}
      disabled={disabled}
      readOnly={readonly}
      maxLength={maxLength}
      minLength={minLength}
      placeholder={placeholder}
      value={value}
      onChange={(event) => onChange(event)}
    />
  )
}
