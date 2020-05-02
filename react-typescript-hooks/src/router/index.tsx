/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-29 12:52:57
 * @LastEditors: Lean
 * @LastEditTime: 2020-05-01 16:19:04
 */
import React, { lazy, Suspense } from 'react'
import {
  HashRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import routes, { childrens } from './router'

// Loading
const Loading = <div>Loading...</div>

// 注册二级路由
const childs = childrens()

const BasicExample = () => (
  <HashRouter>
    <Suspense fallback={ Loading }>
      <Switch>
        {/* root */}
        <Route exact path='/' render={() => <Redirect to='/Home/Index' />} />

        {/* 一级路由 */}
        {
          routes && routes.map((item, index) => {
            return <Route key={index} exact path={item.path} render={() => <Redirect to={item.children[0].path} />} />
          })
        }

        {/* 二级路由 */}
        {
          childs.map((item, index) => {
            return <Route key={index} exact path={item.path} component={
              lazy(() => import(`../views${item.path}/index`))
            } />
          })
        }

        {/* NotFound */}
        <Route component={
          lazy(() => import('../components/NotFound'))
        } />
      </Switch>
    </Suspense>
  </HashRouter>
)
export default BasicExample