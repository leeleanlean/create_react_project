import React from 'react'
import './index.scss'

import SideBar from './components/SideBar'
import Main from './components/Main'

export default class Layout extends React.Component {
  render () {
    return (
      <section className='app'>
        <SideBar />
        <Main />
      </section>
    )
  }
}
