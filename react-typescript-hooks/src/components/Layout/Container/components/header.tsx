/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-21 14:17:04
 * @LastEditors: Lean
 * @LastEditTime: 2020-05-02 12:26:25
 */
import React, { useState, useEffect, useContext } from 'react'
import {
  HashRouter as Router,
  Link
} from 'react-router-dom'

import Menu from '../../../../router/router'

import LayoutContext from '../../../../store/LayoutContext'

const ContainerHeader = () => {
  /**
   * useContext
   */
  const context:any = useContext(LayoutContext)
  
  /**
   * useState
   */
  // 激活状态
  const [active, setActive] = useState(Number)

  /**
   * useEffect
   */
  useEffect(() => {
    // 获取当前hash值
    const hash = window.location.hash
    // 默认顶部菜单active
    setActive(() => {
      return Menu.findIndex(item => hash.includes(item.path))
    })

    // 设置二级菜单
    const c = Menu.filter(item => hash.includes(item.path))
    c.length && context.setAsideMenu(c[0].children)
  }, [context])

  /**
   * methods
   */
  // 切换一级栏目
  const changeRouter = (index:number) => {
    // 设置一级菜单激活
    setActive(index)

    // 设置二级菜单
    const _child = Menu[index]['children']
    _child.length && context.setAsideMenu(_child)

  }
  return (
    <div className='container-header'>
      <Router>
        <ul>
          {
            Menu ? Menu.map((item, index) => {
              return <li key={index}>
                <Link
                  to={item.path}
                  className={ active === index ? 'active' : '' }
                  onClick={() => changeRouter(index)}>
                  {item.meta.title}
                </Link>
              </li>
            }) : <div>MenuError</div>
          }
        </ul>
      </Router>
    </div>
  )
}

export default ContainerHeader