import type { Preview } from '@storybook/react'
import previewDecorators from './preview-decorators'
import 'material-icons/iconfont/material-icons.css' // Google Material Icons CSS 추가
import '../src/components/common/common.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: previewDecorators,
}

export default preview
