import axios from 'axios'

const service = axios.create({
//   baseURL: 'http://www.zzswork.top/',
  timeout: 50000
})

// 请求拦截器
// service.interceptors.request.use(
//   request => {
//     const req = request.message
//     return req
//   }
// )

// 相应拦截器
service.interceptors.response.use(
  response => {
    // 对响应数据做处理，例如只返回data部分
    const res = response.data
    // 根据返回的状态码做相应处理，例如401未授权等
    return res
  },
  error => {
    // 响应错误处理
    console.log(error.message) // for debug
    return Promise.reject(error)
  }
)

export default service
