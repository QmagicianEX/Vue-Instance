import axios from 'axios'

const service = axios.create({
  // baseURL: 'http://192.168.205.1:8084',
  timeout: 5000
})

// 请求拦截
service.interceptors.request.use(
  config => {
    return config
  },

  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  response => {
    const url = response.config.url

    const res = response.data

    return res

    // if (res.code === 200) {
    //   return res
    // } else {
    //   return Promise.reject(new Error(res.msg || 'Error'))
    // }
  },

  error => {
    return Promise.reject(error)
  }
)

export default service
