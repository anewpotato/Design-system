import type { Preview } from '@storybook/react'
import previewDecorators from './preview-decorators'
import '../public/tailwind.css'

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
