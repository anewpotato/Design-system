import React from 'react'
import { TimePicker as TimeSelector, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

import { FontSizeType, InputSizeType, WidthType } from '../common/defaultType'

/**
 * TimePicker Props.
 */
type ViewType = 'seconds' | 'minutes' | 'hours'
interface TimePickerProps {
  /**
   * 상태 값 (state).
   *
   * ```
   * ex) 11:30 pm
   * ```
   */
  value: string
  /**
   * 상태 설정 함수 (state setter).
   * @param value 사용자 입력 값.
   * @returns
   */
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void
  /**
   * 텍스트 폰트 크기.
   */
  fontSize?: FontSizeType
  /**
   * 컴포넌트 가로 길이.
   * @default full
   */
  width?: WidthType
  /**
   * input 요소 크기.
   * @default small
   */
  size?: InputSizeType
  /**
   * dayjs 제공 Date Format.
   * https://momentjs.com/docs/#/parsing/string-format/
   * @default YYYY-MM-DD
   */
  format?: string
  /**
   * 오전, 오후 사용 여부.
   * @default false
   */
  disableAmPm?: boolean
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
   * 오늘 이후 시간 선택가능 여부.
   * @default false
   */
  disableFuture?: boolean
  /**
   * 오늘 이전 시간 선택가능 여부.
   * @default false
   */
  disablePast?: boolean
  /**
   * 캘린더 선택기 활성 여부.
   * @default false
   */
  disableIcon?: boolean
  /**
   * 최대 시간 지정.
   *
   *  __format__ 과 동일한 형태로 지정.
   *
   * ```
   * ex) 11:30 pm
   * ```
   *
   * @default
   */
  maxTime?: string
  /**
   * 최소 시간 지정.
   *
   *  __format__ 과 동일한 형태로 지정.
   *
   * ```
   * ex) 08:30 am
   * ```
   *
   * @default
   */
  minTime?: string
  /**
   * 시간 선택기에서 사용 할 요소.
   */
  views?: Array<ViewType>
  /**
   * 단위 별 간격 설정.
   */
  timeStep?: { hours?: number; minutes?: number; seconds?: number }
}

export default function TimePicker({
  value,
  onChange,
  fontSize = 'base',
  width = 'full',
  size = 'small',
  format = 'hh:mm a',
  disableAmPm = false,
  disabled = false,
  readonly = false,
  disableFuture = false,
  disablePast = false,
  disableIcon = false,
  maxTime,
  minTime,
  views,
  timeStep,
}: TimePickerProps) {
  // value가 문자열이므로 이를 dayjs 객체로 변환
  const currentValue = value ? dayjs(value, format) : dayjs()

  // maxTime과 minTime도 dayjs 객체로 변환
  const parsedMaxTime = maxTime ? dayjs(maxTime, format) : null
  const parsedMinTime = minTime ? dayjs(minTime, format) : null

  let viewsOption = views

  if (!viewsOption || (Array.isArray(viewsOption) && viewsOption.length === 0)) viewsOption = ['hours', 'minutes']

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimeSelector
        className={[`width-${width}`].join(' ')}
        slotProps={{ textField: { size, inputProps: { className: [`fontsize-${fontSize}`].join(' ') } } }}
        value={currentValue}
        onChange={(newValue) => {
          if (newValue && dayjs(newValue).isValid()) {
            onChange(newValue.format(format))
          }
        }}
        format={format}
        ampm={!disableAmPm}
        disabled={disabled}
        readOnly={readonly}
        disableFuture={disableFuture}
        disablePast={disablePast}
        disableOpenPicker={disableIcon}
        maxTime={parsedMaxTime}
        minTime={parsedMinTime}
        views={viewsOption}
        timeSteps={timeStep}
      />
    </LocalizationProvider>
  )
}
