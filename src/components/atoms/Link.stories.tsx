import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Link from './Link'
import RouterProvider, { PageRoutes } from '../../modules/provider/RouterProvider'
import { fontsizeOption, widthOption } from '../common/propsOptions'

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'fullscreend',
  },
  tags: ['autodocs'],
  argTypes: {
    fontSize: {
      control: {
        type: 'select',
        options: fontsizeOption,
      },
    },
    width: {
      control: {
        type: 'select',
        options: widthOption,
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof Link>

const routes = [
  {
    path: '/a',
    element: <div>Link A Content</div>,
  },
  {
    path: '/b',
    element: <div>Link B Content</div>,
  },
  {
    path: '/c',
    element: <div>Link C Content</div>,
  },
  {
    path: '/d',
    element: <div>Link D Content</div>,
  },
]

export const Default: Story = {
  render: ({ fontSize, width, enableReload, enableReplace }) => (
    <RouterProvider>
      <div className="p-5">
        <nav className="flex flex-row gap-4">
          <Link href="/a" fontSize={fontSize} width={width} enableReload={enableReload} enableReplace={enableReplace}>
            Link A
          </Link>
          <Link href="/b" fontSize={fontSize} width={width} enableReload={enableReload} enableReplace={enableReplace}>
            Link B
          </Link>
          <Link href="/c" fontSize={fontSize} width={width} enableReload={enableReload} enableReplace={enableReplace}>
            Link C
          </Link>
          <Link href="/d" fontSize={fontSize} width={width} enableReload={enableReload} enableReplace={enableReplace}>
            Link D
          </Link>
        </nav>
        <hr className="my-5" />
        <main>
          <PageRoutes routes={routes} />
        </main>
      </div>
    </RouterProvider>
  ),
}

const subRoutes = [
  {
    path: '/a',
    element: <div>Link A Content</div>,
    children: [
      {
        path: '/a/sub',
        element: <div>Link A Sub Content</div>,
        children: [
          {
            path: '/a/sub/2',
            element: <div>Link A Sub-2 Content</div>,
          },
        ],
      },
    ],
  },
]

export const NestedLink: Story = {
  render: ({ fontSize, width, enableReload, enableReplace }) => (
    <RouterProvider>
      <div className="p-5">
        <nav className="flex flex-row gap-4">
          <Link href="/a" fontSize={fontSize} width={width} enableReload={enableReload} enableReplace={enableReplace}>
            Link A
          </Link>
          <Link
            href="/a/sub"
            fontSize={fontSize}
            width={width}
            enableReload={enableReload}
            enableReplace={enableReplace}
          >
            Link A-SUB
          </Link>
          <Link
            href="/a/sub/2"
            fontSize={fontSize}
            width={width}
            enableReload={enableReload}
            enableReplace={enableReplace}
          >
            Link A-SUB-2
          </Link>
        </nav>
        <hr className="my-5" />
        <main>
          <PageRoutes routes={subRoutes} />
        </main>
      </div>
    </RouterProvider>
  ),
}
