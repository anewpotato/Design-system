import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

interface RouteItem {
  path: string
  element: React.ReactNode
  children?: Array<RouteItem>
}

interface RouterProviderProps {
  children: React.ReactNode
}

function ParentWrapper({ element, hasChildren }: { element: React.ReactNode; hasChildren: boolean }) {
  return (
    <>
      {element}
      {hasChildren && <Outlet />}
    </>
  )
}

function renderRoutes(routes: RouteItem[]) {
  return routes.map(({ path, element, children }) => (
    <Route key={path} path={path} element={<ParentWrapper element={element} hasChildren={!!children} />}>
      {children && renderRoutes(children)}
    </Route>
  ))
}

export function PageRoutes({ routes }: { routes: Array<RouteItem> }) {
  return <Routes>{renderRoutes(routes)}</Routes>
}

export default function RouterProvider({ children }: RouterProviderProps) {
  return <BrowserRouter>{children}</BrowserRouter>
}
