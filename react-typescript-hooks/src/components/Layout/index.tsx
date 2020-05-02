/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-21 13:46:34
 * @LastEditors: Lean
 * @LastEditTime: 2020-05-02 12:25:22
 */
import React from 'react'
import Aside from './Aside/index'
import Container from './Container/index'

import { LayoutProvider } from '../../store/LayoutContext'

function Layout() {
  return (
    <div className="App">
      <LayoutProvider>
        <Aside />
        <Container />
      </LayoutProvider>
    </div>
  )
}

export default Layout
