import React from 'react'
import dayjs from 'dayjs'
import { DatePicker as DateSelector, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { FontSizeType, InputSizeType, WidthType } from '../common/defaultType'

import 'dayjs/locale/ko'
import 'dayjs/locale/ja'
import 'dayjs/locale/zh-cn'

/**
 * DatePicker Props.
 */

type ViewType = 'day' | 'month' | 'year'
interface DatePickerProps {
  /**
   * 상태 값 (state).
   *
   * __format__ 과 동일한 형태로 지정.
   */
  value: string
  /**
   * 상태 설정 함수 (state setter).
   * @param value 사용자 입력 값.
   * @returns
   */
  onChange: (value: string) => void
  /**
   * locale 설정.
   * @default ko
   */
  locale?: 'ko' | 'ja' | 'zh-cn'
  /**
   * input 요소 크기.
   * @default small
   */
  size?: InputSizeType
  /**
   * Dayjs 제공 Date Format.
   * https://day.js.org/docs/en/parse/string-format
   * @default YYYY-MM-DD
   */
  format?: string
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
   * 캘린더 선택기 활성 여부.
   * @default false
   */
  disableIcon?: boolean
  /**
   * 오늘 이후 날짜 선택가능 여부.
   * @default false
   */
  disableFuture?: boolean
  /**
   * 오늘 이전 날짜 선택가능 여부.
   * @default false
   */
  disablePast?: boolean
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
   * 최대 날짜 지정.
   *
   *  __format__ 과 동일한 형태로 지정.
   *
   * ```
   * ex) 2024-12-10
   * ```
   *
   * @default
   */
  maxDate?: string
  /**
   * 최소 날짜 지정.
   *
   *  __format__ 과 동일한 형태로 지정.
   *
   * ```
   * ex) 2021-03-01
   * ```
   *
   * @default
   */
  minDate?: string
  /**
   * 날짜 선택기에서 사용 할 요소.
   */
  views?: Array<ViewType>
  /**
   * 날짜 선택기 시작점.
   *
   * __views__ 목록 내 요소만 가능.
   */
  openView?: ViewType
}

export default function DatePicker({
  value,
  onChange,
  locale = 'ko',
  size = 'small',
  format = 'YYYY-MM-DD',
  disableIcon = false,
  disableFuture = false,
  disablePast = false,
  disabled = false,
  readonly = false,
  fontSize = 'base',
  width = 'full',
  maxDate,
  minDate,
  views,
  openView = 'day',
}: DatePickerProps) {
  dayjs.locale(locale)

  const currentValue = value ? dayjs(value) : dayjs()

  const dateFormat = format && format.trim() !== '' ? format : 'YYYY-MM-DD'

  let viewsOption = views

  if (!viewsOption || (Array.isArray(viewsOption) && viewsOption.length === 0)) viewsOption = ['year', 'month', 'day']
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locale}>
      <DateSelector
        className={[`width-${width}`].join(' ')}
        value={currentValue}
        onChange={(newValue) => {
          if (newValue && dayjs(newValue).isValid()) {
            onChange(newValue.format(format))
          }
        }}
        slotProps={{ textField: { size, inputProps: { className: [`fontsize-${fontSize}`].join(' ') } } }}
        disabled={disabled}
        readOnly={readonly}
        format={dateFormat}
        disableOpenPicker={disableIcon}
        disableFuture={disableFuture}
        disablePast={disablePast}
        maxDate={dayjs(maxDate)}
        minDate={dayjs(minDate)}
        views={viewsOption}
        openTo={openView}
      />
    </LocalizationProvider>
  )
}
