import React from 'react'
import { WidthType } from '../common/defaultType'

/**
 * Divider Props.
 */
interface DividerProps {
  children?: Array<React.ReactNode>
  /**
   * 컴포넌트 가로 길이.
   * @default full
   */
  width?: WidthType
  /**
   * 구분선 방향.
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical'
  /**
   * 구분 간격.
   * @default 1
   */
  gap?: number
  /**
   * 구분선 유형.
   * @default solid
   */
  variant?: 'solid' | 'dashed' | 'dotted' | 'double' | 'none'
  /**
   * 구분선 굵기.
   * @default thin
   */
  thickness?: 'thin' | 'medium' | 'thick'
  /**
   * 구분선 색상.
   * @default
   */
  color?: string
}

const horizontalPadding = (gap: number) => ({ paddingTop: `${gap}em`, paddingBottom: `${gap}em` })
const verticalPadding = (gap: number) => ({ paddingRight: `${gap}em`, paddingLeft: `${gap}em` })

export default function Divider({
  children,
  width = 'full',
  direction = 'horizontal',
  gap = 1,
  variant = 'solid',
  thickness = 'thin',
  color,
}: DividerProps) {
  // variant 설정.
  let currentVariant = ''
  switch (variant) {
    case 'dashed':
      currentVariant = 'border-dashed'
      break
    case 'dotted':
      currentVariant = 'border-dotted'
      break
    case 'double':
      currentVariant = 'border-double'
      break
    case 'none':
      currentVariant = 'border-none'
      break
    default:
      currentVariant = 'border-solid'
      break
  }

  // 두께 설정
  let borderThickness = ''
  switch (thickness) {
    case 'medium':
      borderThickness = direction === 'horizontal' ? 'border-b-4' : 'border-r-4'
      break
    case 'thick':
      borderThickness = direction === 'horizontal' ? 'border-b-8' : 'border-r-8'
      break
    default:
      borderThickness = direction === 'horizontal' ? 'border-b-2' : 'border-r-2'
      break
  }

  return (
    <div className={[`width-${width}`].join(' ')}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            style: {
              ...(direction === 'horizontal' ? horizontalPadding(gap) : verticalPadding(gap)),
              borderColor: color,
            },
            className: `text-center ${direction === 'horizontal' && 'block'} ${currentVariant} ${borderThickness}`,
          })
        }
        return child
      })}
    </div>
  )
}
