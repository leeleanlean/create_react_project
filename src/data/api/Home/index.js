import Fetch from '@/common/fetch.js'

export const queryHome = params => {
  return new Promise((resolve, reject) => {
    Fetch(`${process.env.REACT_APP_BASE_URL}/api/queryHome`, {
      params: params
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
