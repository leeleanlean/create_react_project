import React, { lazy, Suspense } from 'react'
import {
  HashRouter,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import routes from './router'

// Loading
const Loading = <div>Loading...</div>

const BasicExample = () => (
  <HashRouter>
    <Suspense fallback={ Loading }>
      <Switch>
        {/* root */}
        <Route exact path='/' render={() => <Redirect to='/home/index' />} />

        {/* 一级路由 */}
        {
          routes && routes.map((item, index) => {
            return <Route key={index} exact path={item.url} render={() => <Redirect to={item.children[0].url} />} />
          })
        }

        {/* 二级菜单 */}
        {/* home */}
        <Route exact path='/home/index' component={ lazy(() => import('@/views/Home/Index/index')) } />

        {/* about */}
        <Route exact path='/about/index' component={ lazy(() => import('@/views/About/Index/index')) } />
        <Route exact path='/about/compony' component={ lazy(() => import('@/views/About/Compony')) } />

        {/* contact */}
        <Route exact path='/contact/index' component={ lazy(() => import('@/views/Contact/Index/index')) } />
        <Route exact path='/contact/address' component={ lazy(() => import('@/views/Contact/Address')) } />
        <Route exact path='/contact/phone' component={ lazy(() => import('@/views/Contact/Phone')) } />

        {/* NotFound */}
        <Route component={ lazy(() => import('@/views/NotFound')) } />
      </Switch>
    </Suspense>
  </HashRouter>
)
export default BasicExample
