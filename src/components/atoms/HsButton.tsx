import React from 'react'
import '../../stories/button.css'
import { Button as MuiButton } from '@mui/material'

export interface HsButtonProps {
  /**
   * Button contents
   */
  label: string
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning'
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled?: boolean
  // /**
  //  * Element placed before the children.
  //  */
  // startIcon?: React.ReactNode
  // /**
  //  * Element placed after the children.
  //  */
  // endIcon?: React.ReactNode
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth?: boolean
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href?: string
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * The variant to use.
   * @default 'text'
   */
  variant?: 'text' | 'outlined' | 'contained'
  /**
   * Optional click handler
   */
  onClick?: () => void
}

/**
 * Primary UI component for user interaction
 */
export function HsButton({
  label,
  color = 'primary',
  disabled = false,
  // startIcon,
  // endIcon,
  fullWidth = false,
  href,
  size = 'medium',
  variant = 'text',
  onClick,
}: HsButtonProps) {
  return (
    <MuiButton
      color={color}
      disabled={disabled}
      // startIcon={startIcon}
      // endIcon={endIcon}
      fullWidth={fullWidth}
      href={href}
      size={size}
      variant={variant}
      onClick={onClick}
    >
      {label}
    </MuiButton>
  )
}
