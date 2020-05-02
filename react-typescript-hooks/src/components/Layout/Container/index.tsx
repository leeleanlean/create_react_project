/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-21 14:09:57
 * @LastEditors: Lean
 * @LastEditTime: 2020-05-02 12:26:02
 */
import React from 'react'
import LayoutHeader from './components/header'
import LayoutContent from './components/content'

const Container = () => {
  console.log('Container')
  return(
    <div className="container">
      <LayoutHeader />
      <LayoutContent />
    </div>
  )
}
export default Container
