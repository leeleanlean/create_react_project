export default function request (url, options) {
  // 默认参数
  const defaultOptions = {
    /**
     * credentials
     * [omit] 从不发送cookies.
     * [same-origin] 只有当URL与响应脚本同源才发送cookies.
     * [include] 总是发送cookies, 即使来自跨域的请求
     */
    credentials: 'include'
  }
  const newOptions = { ...defaultOptions, ...options }

  /**
   * 设置POST请求参数
   * fetch不会自动转FormData
   * new一个FormData，直接传给body
   */
  const METHOD = options.method && options.method.toUpperCase()
  if (METHOD === 'POST' || METHOD === 'PUT') {
    var formData = new FormData()
    for (const k in newOptions.params) {
      formData.append(k, newOptions.params[k])
    }
    newOptions.body = formData
  } else {
    for (const i in newOptions.params) {
      url += `&${i}=${newOptions.params[i]}`
    }
    url = url.replace(/&/, '?')
  }

  // 发送请求
  return new Promise((resolve, reject) => {
    fetch(url, newOptions).then(res => {
      if (METHOD === 'DELETE' || res.status === 204) {
        return resolve(res.text())
      }
      return resolve(res.json())
    }).catch(err => {
      return reject(err)
    })
  })
}
