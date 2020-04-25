/* jshint esversion:6 */
import React from 'react'
import './index.scss'
import routes from '@/router/router'

import {
  Link
} from 'react-router-dom'

export default class LayoutSideBar extends React.Component {
  state = {
    active: 0,
    children: [],
    height: window.innerHeight
  }

  componentDidMount () {
    this.resize()
    this.hashchange()
    this.setActive()
  }

  // 路由变化
  hashchange () {
    // 路由改变设置左侧菜单
    window.addEventListener('hashchange', () => {
      let HASH = '/' + window.location.hash.split('#/')[1].split('/')[0]
      if (!HASH) HASH = '/'
      this.setState({
        children: routes.filter(item => {
          return HASH.toUpperCase() === item.url.toUpperCase()
        })[0].children
      })
      // 设置激活菜单
      this.setActive()
    })
  }

  // 设置激活菜单
  setActive () {
    let PARENT = '/' + window.location.hash.split('#/')[1].split('/')[0]
    let CHILD = '/' + window.location.hash.split('#/')[1].split('/')[1]
    if (PARENT === '/') { PARENT = '/home' }
    if (CHILD === '/') { CHILD = '/index' }

    // 获取父active
    const PARENT_ACTIVE = routes.findIndex((item) => {
      return PARENT.toUpperCase() === item.url.toUpperCase()
    })

    // 获取子active
    const CHILD_ACTIVE = routes[PARENT_ACTIVE].children.findIndex(item => {
      return (PARENT.toUpperCase() + CHILD.toUpperCase()) === item.url.toUpperCase()
    })
    this.setState({
      active: CHILD_ACTIVE,
      children: routes[PARENT_ACTIVE].children
    })
  }

  // 窗口大小改变，重设左侧高度
  resize () {
    window.onresize = () => {
      this.setState({
        height: window.innerHeight
      })
    }
  }

  render () {
    return (
      <section
        className='left'
        style={{ height: this.state.height }}>
        <header>React后台管理系统</header>
        <aside>
          <ul>
            {
              this.state.children.length ? this.state.children.map((item, index) => {
                return <li key={index}>
                  <Link
                    className={this.state.active === index ? 'active' : ''}
                    to={item.url}>
                    {item.title}
                  </Link>
                </li>
              }) : <div>暂无菜单</div>
            }
          </ul>
        </aside>
      </section>
    )
  }
}
