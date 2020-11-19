export default [
  {
    name: 'Home',
    url: '/home',
    title: '首页',
    children: [
      {
        name: 'HomeIndex',
        url: '/home/index',
        title: '首页'
      }
    ]
  },
  {
    name: 'About',
    url: '/about',
    title: '关于我们',
    children: [
      {
        name: 'AboutIndex',
        url: '/about/index',
        title: '关于我们'
      },
      {
        name: 'AboutCompony',
        url: '/about/compony',
        title: '关于公司'
      }
    ]
  },
  {
    name: 'Contact',
    url: '/contact',
    title: '联系我们',
    children: [
      {
        name: 'ContactIndex',
        url: '/contact/index',
        title: '联系我们'
      },
      {
        name: 'ContactAddress',
        url: '/contact/address',
        title: '联系地址'
      },
      {
        name: 'ContactPhone',
        url: '/contact/phone',
        title: '联系电话'
      }
    ]
  }
]
