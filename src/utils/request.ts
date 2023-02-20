import axios from 'axios'
import { closeToast, showNotify, showToast } from 'vant'
import { clearLoading, onLoading } from '@/utils/requestLoading'
import { getToken } from '@/utils/auth'

/* 不需要携带token的接口,通常是登录接口 */
const NotNeedTokenList: string[] = [

]
// Create Axios Instance
const request = axios.create({
  withCredentials: false,
  // timeout: 5000,
  // baseURL: import.meta.env.VITE_PROXY + import.meta.env.VITE_BASEURL,
})

// request interceptor
request.interceptors.request.use(
  (config: any) => {
    console.log(config.url)
    // do something before request is sent
    const token = getToken()

    if (token && !NotNeedTokenList.includes(config.url as string)) {
      // let each request carry token
      config.headers = {
        ...config.headers,
        Authorization: token,
      }
    }

    /* 全局加载动画,可在根目录下setting.ts中配置不需要加载动画的接口 */
    onLoading(config.url as string)

    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  },
)

// response interceptor
request.interceptors.response.use(
  (response) => {
    /* 全局加载动画 */
    clearLoading(response.config.url as string)
    /* Unauthorized */
    if (response.status === 401)
      showToast({ type: <any>'danger', message: '无权限' })
    /* Success */
    if (response.status === 200) {
      if (response.data.code === 9999)
        showNotify({ type: 'danger', message: response.data.message })
      if (response.data.code === 1001)
        showNotify({ type: 'danger', message: '登录状态已过期,请重新登录' })
      else
        return response.data
    }
  },
  (error) => {
    closeToast()
    if (error.message.includes('429'))
      showNotify({ type: 'danger', message: '服务器繁忙,请稍后再试!' })
    else
      showNotify({ type: 'danger', message: error.message })
    return Promise.reject(error.message)
  },
)

export default request
