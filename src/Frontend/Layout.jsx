import React from 'react'
import { MenuBar } from './MenuBar'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
      <>
          <MenuBar />
          <Outlet />
     </>
  )
}
