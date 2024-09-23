import React from 'react'

/**
 * Icon Props.
 */
interface IconProps {
  /**
   * 아이콘 이름.
   * @default
   *
   * __상단 사이트 참고 필요.__
   */
  iconName: string
  /**
   * 유형.
   * @default outlined
   */
  variant?: 'outlined' | 'sharp' | 'rounded'

  /**
   * className.
   * @default
   */
  className?: string
  /**
   * 추가 스타일 정보.
   * @default {}
   */
  style?: object
  /**
   * 색상 설정.
   * @default black
   */
  color?: string
  /**
   * 크기 설정.
   * @default 36
   */
  size?: number
  /**
   * 굵기 설정.
   * @default 400
   */
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
  /**
   * 채우기 여부.
   * @default false
   */
  fill?: boolean
  /**
   * 크기 최적화 설정.
   * @default 48
   */
  optical?: 20 | 24 | 36 | 48
  /**
   * 굵기 미세 조절.
   * @default 0
   */
  grade?: -50 | 0 | 100 | 200
}

/**
 * Google Material Icons을 기반으로 제공
 *
 * [stylesheet CDN 추가 필요](https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap)
 *
 * [참고 사이트](https://fonts.google.com/icons)
 */
export default function Icon({
  iconName,
  variant = 'outlined',
  className = '',
  style = {},
  weight = 400,
  fill = false,
  optical = 48,
  grade = 0,
  color = 'black',
  size = 36,
}: IconProps) {
  // variant 설정.
  let currentVariant = 'material-symbols'

  switch (variant) {
    case 'outlined':
      currentVariant = currentVariant.concat('-outlined')
      break
    case 'sharp':
      currentVariant = currentVariant.concat('-sharp')
      break
    case 'rounded':
      currentVariant = currentVariant.concat('-rounded')
      break
    default:
      break
  }

  // 굵기 설정.
  const currentWeight = `icon-weight-${weight}`

  // 채우기 설정.
  const currentFill = `icon-fill-${fill ? 1 : 0}`

  // 크기 최적화 설정.
  const currentOptiocal = `icon-optical-size-${optical}`

  // 굵기 미세 설정.
  let currentGrade = `icon-grade-neg-${Math.abs(grade)}`

  if (grade >= 0) {
    currentGrade = currentGrade.replace('neg-', '')
  }
  return (
    <span
      className={`icon-style ${currentVariant} ${currentWeight} ${currentFill} ${currentGrade} ${currentOptiocal} ${className}`}
      style={{ color, fontSize: size, ...style }}
    >
      {iconName}
    </span>
  )
}
