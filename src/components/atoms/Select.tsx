import React, { useMemo } from 'react'
import { MenuItem, SelectChangeEvent, Select as Selector } from '@mui/material'

import { FontSizeType, InputSizeType, WidthType } from '../common/defaultType'

/**
 * Select Props.
 */
type ListType = { label: string; value: string | number }

interface SelectProps {
  /**
   * 상태 값 (state).
   */
  value: string | Array<string>
  /**
   * onChange Handler.
   * @param event event 객체.
   * @returns
   */
  onChange: (event: SelectChangeEvent<string | string[]>) => void
  /**
   * input 요소 크기.
   * @default small
   */
  size?: InputSizeType
  /**
   * 텍스트 폰트 크기.
   * @default base
   */
  fontSize?: FontSizeType
  /**
   * 컴포넌트 가로 길이.
   * @default full
   */
  width?: WidthType
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
   * 필수 선택 여부.
   * @default false
   */
  required?: boolean
  /**
   * '선택' 옵션 사용 여부.
   * @default false
   */
  disableEmpty?: boolean
  /**
   * 목록 출력 방향 위로 향하도록 설정 여부.
   * @default false
   */
  enableReverse?: boolean
  /**
   * 다중 선택 여부.
   *
   * __하단 사용방법 참고.__
   * @default false
   */
  multiple?: boolean
  /**
   * Select 목록.
   *
   * ```
   * [{label: string, value: string|number}]
   * ```
   *
   * @default []
   *
   */
  list?: Array<ListType>
}

export default function Select({
  value,
  onChange,
  size = 'small',
  fontSize = 'base',
  width = 'full',
  disabled = false,
  readonly = false,
  required = false,
  disableEmpty = false,
  enableReverse = false,
  multiple = false,
  list = [],
}: SelectProps) {
  const memoizedList = useMemo(() => (Array.isArray(list) ? list : []), [list])
  const currentValue = multiple && !Array.isArray(value) ? [''] : value
  const currentRequired = multiple ? true : required

  const verticalAnchor = enableReverse ? 'top' : 'bottom'
  const verticalTransform = enableReverse ? 'bottom' : 'top'

  return (
    <Selector
      className={[`width-${width}`].join(' ')}
      SelectDisplayProps={{ className: [`fontsize-${fontSize}`].join(' ') }}
      defaultValue=""
      value={currentValue}
      onChange={onChange}
      displayEmpty
      size={size}
      multiple={multiple}
      disabled={disabled}
      readOnly={readonly}
      MenuProps={{
        anchorOrigin: {
          vertical: verticalAnchor,
          horizontal: 'center',
        },
        transformOrigin: {
          vertical: verticalTransform,
          horizontal: 'center',
        },
      }}
    >
      {!disableEmpty && (
        <MenuItem disabled={currentRequired} value="">
          선택
        </MenuItem>
      )}
      {memoizedList.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Selector>
  )
}
