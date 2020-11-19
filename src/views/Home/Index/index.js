import React from 'react'
import propTypes from 'prop-types'
import { observer, inject } from 'mobx-react'

import { queryHome } from '@/data/api/Home'
import './index.scss'

@inject('Common')
@observer
class Home extends React.Component {
  // propTypes
  static propTypes = {
    Common: propTypes.object
  }

  render () {
    const { age, name } = this.props.Common.userInfo
    console.log('MobX[Common]:', name, age)
    queryHome({
      name: 'lean',
      age: 10
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    return (
      <div className='Home'>
        <h3>首页</h3>
        <div className='content'>
          首页 - content
        </div>
      </div>
    )
  }
}
export default Home
