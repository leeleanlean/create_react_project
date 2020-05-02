/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-21 14:12:02
 * @LastEditors: Lean
 * @LastEditTime: 2020-05-02 12:25:52
 */
import React, { useState, useEffect, useContext } from 'react'
import {
  HashRouter as Router,
  Link
} from 'react-router-dom'

import LayoutContext from '../../../../store/LayoutContext'

const AsideMenu = () => {
  /**
   * useContext
   */
  const context:any = useContext(LayoutContext)
  const childrens = context.asideMenu

  /**
   * useState
   */
  const [active, setActive] = useState(0)

  /**
   * useEffect
   */
  useEffect(() => {
    const path = window.location.hash.split('#')[1]
    const index = childrens.findIndex((item: { path: string }) => item.path.includes(path))
    setActive(index)
  }, [childrens])

  return (
    <Router>
      <ul className="aside-menu">
        {
          childrens && childrens.length && childrens.map((item:any, index:number) => {
            return <li key={index}>
              <Link
                to={item.path}
                className={ active === index ? 'active' : '' }
                onClick={() => setActive(index)}>
                {item.meta.title}
              </Link>
            </li>
          })
        }
      </ul>
    </Router>
  )
}

export default AsideMenu
