/*
 * @Descripttion: 
 * @version: 
 * @Author: Lean
 * @Date: 2020-04-28 09:36:13
 * @LastEditors: Lean
 * @LastEditTime: 2020-04-30 17:58:27
 */
const Menu = [
  {
    name: 'Home',
    path: '/Home',
    meta: {
      title: '首页'
    },
    children: [
      {
        name: 'HomeIndex',
        path: '/Home/Index',
        meta: {
          title: '个人简历'
        },
      },
      {
        name: 'HomeDashboard',
        path: '/Home/Dashboard',
        meta: {
          title: 'Dashboard'
        },
      }
    ]
  },
  {
    name: 'About',
    path: '/About',
    meta: {
      title: '关于我们'
    },
    children: [
      {
        name: 'AboutIndex',
        path: '/About/Index',
        meta: {
          title: '关于我们'
        },
      }
    ]
  }
]

export const childrens = () => {
  let result = []
  Menu.forEach(item => {
    result = [...result, ...item.children]
  })
  return result
}

export default Menu