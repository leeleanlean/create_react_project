/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-21 14:12:02
 * @LastEditors: Lean
 * @LastEditTime: 2020-04-30 16:35:01
 */
import React from 'react'
import Menu from  './components/menu'
import Timer from './components/timer'
import './index.scss'

const Aside = () => {
  console.log('Aside')
  return (
    <div className="aside">
      <h1>后台管理中心</h1>
      <Menu/>
      <Timer/>
    </div>
  )
}

export default Aside
