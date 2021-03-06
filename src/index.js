import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'

// react-router-dom
import { HashRouter } from 'react-router-dom'

// store
import { Provider } from 'mobx-react'
import stores from './store'

// Layout
import Layout from './views/Layout'

// 全局样式
import './assets/styles/index.scss'

ReactDOM.render((
  <HashRouter>
    <Provider {...stores}>
      <Layout />
    </Provider>
  </HashRouter>
), document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
