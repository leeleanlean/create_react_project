/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-20 10:05:33
 * @LastEditors: Lean
 * @LastEditTime: 2020-04-30 17:07:37
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index.scss'
import App from './views/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
