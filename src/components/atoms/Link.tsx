import React from 'react'
import { Link as SpaLink } from 'react-router-dom'
import { FontSizeType, WidthType } from '../common/defaultType'
/**
 * Link Props.
 */

interface LinkProps {
  /**
   * 링크 대상.
   * @default
   */
  children: React.ReactNode
  href: string
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
   * 이동 시 새로고침 여부. (기존 a태그 동작)
   * @default false
   */
  enableReload?: boolean
  /**
   * brwoser history replace 여부.
   * @default false
   */
  enableReplace?: boolean
}
/**
 * 전역 App을 __RouterProvider__로 감싸고, 사용하고자 하는 곳에 __PageRoutes__를 이용.
 */
export default function Link({
  children,
  href = '/',
  fontSize = 'base',
  width = 'full',
  enableReload = false,
  enableReplace = false,
}: LinkProps) {
  return (
    <SpaLink
      className={[`width-${width}`, `fontsize-${fontSize}`].join(' ')}
      to={href}
      reloadDocument={enableReload}
      replace={enableReplace}
    >
      {children}
    </SpaLink>
  )
}
