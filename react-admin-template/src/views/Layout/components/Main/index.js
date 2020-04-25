import React from 'react'
import Router from '@/router/index'
import routes from '@/router/router'
import { Link } from 'react-router-dom'

import './index.scss'

export default class LayoutMain extends React.Component {
  state = {
    active: 0
  }

  componentDidMount () {
    this.setActive()
  }

  // 刷新后设置默认菜单
  setActive () {
    const URL = '/' + window.location.hash.split('#/')[1].split('/')[0]
    if (window.location.hash === '#/home/index') {
      this.setState({
        active: 0
      })
    } else {
      const ACTIVE = routes.findIndex((item) => {
        return URL.toUpperCase() === item.url.toUpperCase()
      })
      this.setState({
        active: ACTIVE
      })
    }
  }

  // 切换顶级菜单
  changeActive (index) {
    this.setState({
      active: index
    })
  }

  render () {
    return (
      <section className='right'>
        <header>
          <div className="menu">M</div>
          <ul>
            {
              routes ? routes.map((item, index) => {
                return <li key={index}>
                  <Link
                    className={this.state.active === index ? 'active' : ''}
                    to={item.url + '/index'}
                    onClick={() => this.changeActive(index)}>
                    {item.title}
                  </Link>
                </li>
              }) : <div></div>
            }
          </ul>
          <div className="user">User</div>
        </header>
        <section className='container'>
          <Router />
        </section>
      </section>
    )
  }
}
